<template>
  <div class="bgc-container">
    <navBar></navBar>
    <welcome></welcome>
    <youShouldKnow></youShouldKnow>
    <myProfile></myProfile>、
    <photoShow id="photo"></photoShow>
    <messageBroad id="message"></messageBroad>
    
    <!--  
     TODO: 这里想要的效果是点击相机 然后相机放大 然后展示 照片集  //TODO: 这个想法有点问题 暂时先不做了
    <div class="remain"> 
      喜欢拍一些照片
    </div>
  -->
    <!-- TODO: 这里还要进行数据交互和每一个board的绑定-->
    <essayBoard id="essay"></essayBoard>
    <noteBoard id="note"></noteBoard>

</div>
</template>
<script setup lang="ts">

// TODO: 这里应该需要检测一下用户的pinia中是否存有数据
// TODO: 如果没有的话 检验一下是否登录过 如果登录过的话 就去请求一下数据
// TODO: 如果没有登录过的话 就跳转到登录页面

import {onBeforeMount, onMounted,ref} from 'vue'
import service from '@/utils/service';
import useUserinfoStore from '@/stores/userInfo';
import type { UserInfo } from '@/interface/user';
//设置动画
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';
//用到的组件
import welcome from './components/welcome.vue';
import youShouldKnow from './components/you-should-know.vue';
import myProfile from './components/my-profile.vue';
import messageBroad from './components/message-broad.vue';
import photoShow from './components/photo-show.vue';
import essayBoard from './components/essay-board.vue';
import noteBoard from './components/note-board.vue';
import navBar from './components/nav-bar.vue';

import getScroll from '@/utils/windows';

const top = ref<number>(0)
const left = ref<number>(0)

const useScroll =( ) =>{
  top.value = getScroll().top
  console.log(top.value)
}

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

//! FIXME:这里不能正确的获得用户信息 ？？ 是生命周期的问题吗 
//? 好像有可以了 好神奇？？？
const getUserinfo = async() =>{
  const userInfoStore = await useUserinfoStore()
  service.get('/user')
  .then(res =>{
    userInfoStore.setUserInfo(res.data) 
    console.log(res.data)
    console.log('get')
  })
  .catch(err =>{
    console.log(err)
    console.log('err')
  })
}

onBeforeMount(()=>{
  getUserinfo()
})




</script>


<style scoped lang="scss">

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