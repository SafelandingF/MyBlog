<template>
  <div class="editor-container" >
    
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
    <button @click="editArticle">获取实例</button>
    <div class="test" v-html="valueHtml"></div>


    <div class="raw">{{valueHtml}}</div>
</div>
</template>

<script setup >
//! TODO:这里展示的时候可以使用readonly
//这里使用lang="ts"会报错
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
//@ts-ignore
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useRoute } from 'vue-router';
import service from '@/utils/service'
  
// 编辑器实例，必须用 shallowRef 可以通过 .value 获取实例然后调用api
    const editorRef = shallowRef()
    const route = useRoute()
    const id = route.params.id
    // 内容 HTML
    const valueHtml = ref('<p>hello</p>') 
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
        "insertImage",
        "insertLink",
        "uploadImage",
        "emotion",
        "todo",
        "|",
        "undo",
        "redo",
      ]
    }
    const editorConfig = { placeholder: '请输入内容...' }
    // 模拟 ajax 异步获取内容
    onMounted(() => {
      
      getArticleDetail()
      setTimeout(()=>{
        console.log(editorRef.value.getAllMenuKeys())
      },1000  )
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
    const getArticleDetail = () =>{
      service.get('/article/getarticledetail?article_id=' + id,)
        .then(res => {
          valueHtml.value = res.data[0].article
        })
        .catch(err => {
          console.log(err)
       })
    }
    //修改文章
    const editArticle = () =>{
      console.log(id)
      service.post('/article/editarticle', {
        article_id: id,
        title: '测试标题',
        description:'测试描述',
        imageUrl:'测试图片',
        article: editorRef.value.getHtml(),
        categories: 0,
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
  width:85vw;
  height: 100vh;
  margin: 0 auto;
  .article-preview {
    height: 300px;
    background-color: #6d6c6c
  }
}


.raw{
  width: 100vw;
  height: auto;

}

// NOTE: 这里需要样式穿透
// ：deep影响到子组件
.test{
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;



  /*
  * TODO: 修改todo样式 不太会改
  */


  // 下面的代码很合适了
  font-family: ChillRound;
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