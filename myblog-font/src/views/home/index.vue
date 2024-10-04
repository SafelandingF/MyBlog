<template>
  <div class="bgc-container">
    <div class="nav-container">
      1232312313213123
    </div>
    <welcome></welcome>
    <youShouldKnow></youShouldKnow>
    <myProfile></myProfile>
    <messageBroad></messageBroad>
    <photoShow></photoShow>
  <div class="remain"> 
    喜欢拍一些照片
  </div >
  <div class="remain">
    偶尔会写写随笔
  </div>
  <div class="remain">
    还会留下一些笔记
  </div>
  <div class="remain">
    间接性自恋加社恐
  </div>

</div>
</template>
<script setup lang="ts">
//设置动画
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
import welcome from './components/welcome.vue';
import youShouldKnow from './components/you-should-know.vue';
import myProfile from './components/my-profile.vue';
import messageBroad from './components/message-broad.vue';
import photoShow from './components/photo-show.vue';
//设置平滑滚动
const lenis = new Lenis({
  wrapper:window,
  duration:1.5,
})
function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
//！ FIXME: 这里的插件只能注册一次 不然会出错
gsap.registerPlugin(ScrollTrigger)
</script>


<style scoped lang="scss">

.nav-container{
  position: fixed;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  visibility: hidden;
}

.remain{
  height: 100vh;
}
.bgc-container{
  margin: 0;
  padding: 0;

  //! FIXME: 这里要设置成100% 100vw会因为gsap插件多一点边距
  width: 100%;
  overflow-x: hidden;
  animation: movebackground 10s steps(10,end) infinite;
  background-image: url('@/assets/imgs/noise.webp');
    @keyframes movebackground {
  0% {
    background-position: 0  0;
  };
  10% {
    background-position: 110vw 110vh;
  };
  20% {
    background-position: 220vw 220vh;
  };
  30% {
    background-position: 330vw 330vh;
  };
  40% {
    background-position: 440vw 440vh;
  };
  50% {
    background-position: 550vw 550vh;
  };
  60% {
    background-position: 660vw 660vh;
  };
  70% {
    background-position: 770vw 770vh;
  };
  80% {
    background-position: 880vw 880vh;
  };
  90% {
    background-position: 990vw 990vh;
  };
  100% {
    background-position: 1100vw 1100vh;
    };
  }
}
</style>