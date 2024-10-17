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
    <button @click="getHtml">获取实例</button>
</div>
</template>

<script setup>


//! TODO:这里展示的时候可以使用readonly
//这里使用lang="ts"会报错
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useRoute } from 'vue-router';
// 编辑器实例，必须用 shallowRef 可以通过 .value 获取实例然后调用api
    const editorRef = shallowRef()

    const route = useRoute()
    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')
    // 模拟 ajax 异步获取内容
    onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
            console.log('123')
        }, 1500)
        setTimeout(() => {
            console.log(editorRef.value.getHtml())
        },3000)
    })
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
    const getHtml = () =>{
      console.log(editorRef.value.getHtml())
      console.log(route.params.id) //这里获取路由参数
    }


</script>    

<style scoped lang="scss">
.editor-container {
  width:85vw;
  height: 100vh;
  margin: 0 auto;
  .article-preview {
    height: 300px;
    background-color: #ccc
  }
}
</style>