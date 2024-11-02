<template>
  <div class="nav-container">
    <div class="nav-left">
      <div class="item"><a href="#message">留言板</a></div>
      <div class="item"><a href="#photo">照片集</a></div>
    </div>
    <div class="nav-right">
      <div class="item"><a href="#essay">随笔集</a></div>
      <div class="item"><a href="#note">学习笔记</a></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.to('.nav-container', {
    opacity:1,
    ease: 'ease',
    scrollTrigger:{
      trigger: '.message-container',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    }
  })
})


</script>
<style scoped lang="scss">
  .nav-container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    opacity: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 101;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    backdrop-filter: blur(5px);
    .nav-left{
      width: 400px;
      border-bottom-left-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .item{
        font-size: 30px;
        font-family: PING FANG YU TONG;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 150px;
        cursor: pointer;
        border-radius: 10px;
        &:hover{
          transition: all 0.3s;
          scale: 1.1;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
        }
        a{
          color: black;
          text-decoration: none;
        } 
      }
    }
    .nav-right{
      width: 400px;
      border-bottom-right-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .item{
        font-size: 30px;
        font-family: PING FANG YU TONG;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 150px;
        cursor: pointer;
        border-radius: 10px;
        &:hover{
          transition: all 0.3s;
          scale: 1.1;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
        };
        a{
          color: black;
          text-decoration: none;
        }
      } 
    }
  }
  
</style>