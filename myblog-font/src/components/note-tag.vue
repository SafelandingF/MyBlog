<template>
  <div class="tag-container">VUE</div>
</template>

<script setup lang="ts">

</script>


<!-- TODO: 这里应该定义一些全居变量 来设置颜色 -->

<style scoped lang="scss">
  .tag-container {
    font-size: 10px;
    text-align: center;
    line-height: 28px;
    width: 50px;
    height: 28px;
    border-radius: 100px;
    background-color: #40b181;
    color: white;
    cursor: pointer;
  }
  .tag-container:hover {
    transition: all 0.3s ease;
    filter: blur(1px);
    opacity: 0.8;
    box-shadow: #40b181;
    scale: 1.005;     
    box-shadow: #40b181 0px 5px 15px;               
  }
</style>