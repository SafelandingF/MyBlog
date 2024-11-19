<template>
  <div class="editor-container" >
    <div class="info-container">
      <input class="title" type="text" v-model="title" placeholder="请输入标题">
      <input class="description" type="text" v-model="description" placeholder="请输入描述">
      <input class="tags" type="text" v-model="tags" placeholder="请输入标签">
    </div>

    <div 
    class="article-editor"
    style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="default"
    />
    <Editor
      style="height: 300px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
    </div> 
    <button class="save-button" @click="editNote">获取实例</button>
    <div class="preview" v-html="valueHtml"></div>
  </div>
</template>

<script setup >
//! TODO:这里展示的时候可以使用readonly
import { getNoteDetailAPI,editNoteAPI} from '@/apis/getNote';
//这里使用lang="ts"会报错
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, onBeforeMount } from 'vue'
//@ts-ignore
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useRoute } from 'vue-router';
import service from '@/utils/service'
// 编辑器实例，必须用 shallowRef 可以通过 .value 获取实例然后调用api
    const tags = ref('')
    const title = ref('')
    const description = ref('')
    const categories = ref(0)
    const valueHtml = ref('<p>hello</p>') 
    const editorRef = shallowRef()
    const route = useRoute()
    const id = route.params.id
    // 内容 HTML
    
    const toolbarConfig = {
      toolbarKeys:[ 
        'color',
        'fontSize',
        'bold',
        'italic',
        'underline',
        'through',
        '|',
        'codeBlock',
        // 'codeSelectLang',
        'code',
        "blockquote",
        'sub',
        'sup',
        "justifyLeft",
        "justifyRight",
        "justifyCenter",
        "|",
        "insertLink",
        "uploadImage",
        "emotion",
        "todo",
        "|",
        "undo",
        "redo",
      ]
    }
    let editorConfig ={
      MENU_CONF:{
        uploadImage: {
          fieldName: 'file-test',
          maxFileSize: 2 * 1024 * 1024, // 2M
          allowedFileTypes: ['image/*'],
          withCredentials: true,
          timeout: 5 * 1000,// 5s
          async customUpload(file,insertFn){
            console.log(file)
            service.post('/upload/upload-image',{
              file:file
            },{
              headers:{
                'Content-Type': 'multipart/form-data,boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                'Host': 'localhost:3000',
                'Accept': 'application/json, text/plain, */*',
                'Connection': 'keep-alive',
                'Content-Length': file.size,
              }
            })
            .then(res => {
              console.log(res)
              insertFn(res.data.url,res.data.alt,res.data.href)
            })
            .catch(err => console.log(err))
          },
          onBeforeUpload(file){
            console.log('before', file)
            return file
          },
          onProgress(progress){
            console.log('progress', progress)
          },
          onSuccess(file,res){
            console.log(`${file.name}`,res)
          },
          onFailed(file,res){
            console.log(`${file.name} 上传失败`,res)      
        }
      }
    }
    }
    onBeforeMount(()=>{
    })
    onMounted(() => {
      getNoteDetail()
    })
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })
    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
    //获取文章详情
    const getNoteDetail = () =>{
      getNoteDetailAPI({note_id: id})
        .then(res => {
          valueHtml.value = res.data[0].note
          title.value = res.data[0].title
          description.value = res.data[0].description
          console.log(res)
        })
        .catch(err => {
          console.log(err)
       })
    }
    //修改文章
    const editNote = () =>{
      editNoteAPI({
        note_id: id,
        title: title.value,
        description:description.value,
        note: editorRef.value.getHtml(),
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
       })
    }
</script>    

<style scoped lang="scss">
.editor-container {
  width:90vw;
  height: 100vh;
  margin: 0 auto;
  .article-preview {
    height: 300px;
    background-color: #6d6c6c
  }
  .info-container {
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
      'title description'
      'tags description';
    ;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    .title {
      grid-area: title;
    }
    .description {
      grid-area: description;
    }
    .tags {
      grid-area: tags;
    }
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .editor {
    height: 100%;
    width: 100%;
  }
  .save-button{
    margin: 0 auto;
    width: 100%;
    height: 25px;
    background-color: #4183c4;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

}


.raw{
  width: 100vw;
  height: auto;
}

// NOTE: 这里需要样式穿透
// ：deep影响到子组件
.preview{
  width: 100%;
  min-height: 300px;
  height: auot;
  border: 1px solid #ccc;
  overflow-y: scroll;
  overflow-x: hidden;
  /*
  * TODO: 修改todo样式 不太会改
  */
  // 下面的代码很合适了
  font-family: 寒蝉半圆体;
  letter-spacing: 1px;
  line-height: 1.5em;
  :deep(code) {
    margin-left: 5px;
    margin-right: 5px;
    width: auto;
    background-color: #f5f2f0;
    border-radius: 3px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  :deep(pre code::before) {
    content: url('../../../../assets/edit/circle-red.svg')+url(../../../../assets/edit/circle-yellow.svg)+url('../../../../assets/edit/circle-green.svg');
    display: block;
    height: 30px;
    border-radius: 100%;
  }
  :deep(pre code){
    font-family: Mono;
    display: block;
    width: auto;
    height: auto;
  }
  :deep(blockquote){
    font-style: italic;
    width: 90%;
    display: block;
    padding: 10px;
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    border-left: 15px solid #b4d5ff;
    background-color: #f5f2f0;
  }
  :deep(input){
    vertical-align: middle;
    margin-top: 1px;
    margin-bottom: 3px;
    margin-right: 3px;
  }
  :deep(a){
    font-style: italic;
    text-decoration: none;
    stroke: none;
    color: #4183c4;
    padding: 0;
  }

  

}


</style>