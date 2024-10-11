<template>

<!-- 组件的ref实例返回的是一个lottie对象 -->
 <div class="lottie-container" 
 @click="push"
 @mouseenter="play"
 >
  <Vue3Lottie 
  ref="vueLottie"
  :animation-data="EditJson" 
  :height="100" 
  :width="100"
  :auto-play="false"
  :speed="2"
  :loop="100"
  @on-loop-complete="pause"
  >
  </Vue3Lottie>
</div>
</template>

<script setup lang="ts">

import { Vue3Lottie } from 'vue3-lottie';
import EditJson from '@/assets/lottie/edit.json'
import { ref } from 'vue';
const vueLottie = ref()
const play = () =>{
  vueLottie.value.play()
}
const pause = ()=>{
  vueLottie.value.pause()
}
const push = () =>{

}

</script>

<style scoped lang="scss">
.lottie-container{
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 100px;
  top:-100px;
  right: 20px;
}

</style>