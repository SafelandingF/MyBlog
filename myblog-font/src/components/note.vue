<template>
  
  <div class="note-container">    

      <div class="note-tag-container">
        <noteTag name="vue"></noteTag>
        <noteTag name="pinia"></noteTag>
        <noteTag name="nodejs"></noteTag>
        <noteTag name="element"></noteTag>
     </div>
    <div class="note-content">

      <!-- TODO:这里要进行文本的插入 -->
      <h1>标题</h1>
      <p>内容123</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import noteTag from './note-tag.vue';
</script>

<style scoped lang="scss">
  .note-container{
    width: 320px;
    height: 225px;
    display: flex;
    justify-items: center;
    flex-direction: column;
    background-color: #fdfdfd;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    position: relative;
    box-shadow: #41404056 0px 6px 15px; 
    transition: all 0.3s ease;
    &:hover{
      transition: all 0.3s ease;
      transform: translateX(5px) translateY(-5px);
      scale: 1.005;     
      box-shadow: #00000056 0px 10px 30px; 
    }
    .note-tag-container {
      position: absolute;
      bottom: 5px;
      right: 10px;
      display: flex;
      width: 100%;
      height: 28px;
      gap: 10px;
      flex-direction: row-reverse;
    }
  }
</style>