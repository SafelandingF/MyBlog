<template>
  <div class="editor-container" >
    <div 
    class="article-editor"
    style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
    </div> 
    <button @click="addArticle">获取实例</button>

    <div class="test" v-html="valueHtml"></div>
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
import { addEssayAPI } from '@/apis/getArticle';
  // 编辑器实例，必须用 shallowRef 可以通过 .value 获取实例然后调用api
    const editorRef = shallowRef()
    const route = useRoute()
    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')
    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
    // 添加文章
    // TODO:这里还要设置标题
    const addArticle = () =>{
     addEssayAPI({
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
  width:50vw;
  height: 100vh;
  margin: 0 auto;
  .article-preview {
    height: 300px;
    background-color: #ccc
  }
}





</style>