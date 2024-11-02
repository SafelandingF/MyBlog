<!-- TODO:这里有空重构一下 不然真是太屎山了 -->


<template>
  <div class="my-profile">
      
      
    <!-- TODO: 这里可能需要修改icon的大小 感觉是有点大了-->
    <div class="icon-svg1">
     <iconBase
      width="200px" 
      height="200px"
      icon-name="github"
      view-box="0 0 1024 1024"
      >
        <githubIcon></githubIcon>
     </iconBase>
    </div>
    <div class="icon-id1">
      <iconBase
        width="555" 
        height="200"
        icon-name="github-id"
        view-box="0 0 555 64"
        >
      <githubIdIcon></githubIdIcon>
      </iconBase>
    </div>
    <div class="icon-svg2">
      <iconBase
      viewBox="0 0 1024 1024"
      width="200" 
      height="200"
      icon-name="qq"
      >
      <qqIcon></qqIcon>
    </iconBase>
    </div>
    <div class="icon-id2">
      <iconBase
      width="170" height="200" viewBox="0 0 170 40" icon-name="qq-id"
      >
      <qqIdIcon></qqIdIcon>
    </iconBase>

    </div>
    <!-- wx -->
    <div class="icon-svg3">
      <iconBase 
        width="200" height="200"
        viewBox="0 0 1024 1024"
        icon-name="wx">
        <wxIcon></wxIcon>
      </iconBase>
    </div>
    <div class="icon-id3">
      <span width="200" height="200" class="icon-name">无</span>
    </div>
    <!-- steam -->
    <div class="icon-svg4">
      <iconBase
      viewBox="0 0 1024 1024"
      width="200" height="200"
      icon-name="steam">
      <steamIcon></steamIcon>
      </iconBase>
    </div>
    <div class="icon-id4">
      <iconBase
      width="451" height="200" viewBox="0 0 451 75"
      icon-name="steam-id"
      >
      <steamIdIcon></steamIdIcon>
    </iconBase>
    </div>
    <div class="icon-svg5">
      <iconBase
        width="200" height="200"
        viewBox="0 0 1024 1024"
        icon-name="earth">
      <earthIcon></earthIcon>
      </iconBase>
    </div>
    <div class="icon-id5">
      <span width="200" height="200" class="icon-name">范子轩</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';

//引入icon文件
import iconBase from '@/components/IconBase.vue';
import githubIcon from '@/icons/githubIcon.vue';
import githubIdIcon from '@/icons/githubIdIcon.vue';
import qqIcon from '@/icons/qqIcon.vue';
import qqIdIcon from '@/icons/qqIdIcon.vue';
import wxIcon from '@/icons/wxIcon.vue';
import steamIcon from '@/icons/steamIcon.vue';
import steamIdIcon from '@/icons/steamIdIcon.vue';
import earthIcon from '@/icons/earthIcon.vue';

import { onMounted } from 'vue';
onMounted(()=>{
  const icons = gsap.utils.toArray([
    '.icon-svg1',
    '.icon-svg2',
    '.icon-svg3',
    '.icon-svg4',
  ])
  const ids = gsap.utils.toArray([
    '.icon-id1',
    '.icon-id2',
    '.icon-id3',
    '.icon-id4',
  ])
  icons.forEach(item =>{
    gsap.fromTo(item as any,{
    x:-500,
    y:0
  },{
    x:200,
    y:0,
    scrollTrigger:{
      trigger:item as any,
      start:'top 80%',
      end:'bottom 80%',
      scrub:1,
    }
  })
  })
  ids.forEach(item =>{
    gsap.fromTo(item as any,{
    x:500,
    y:0
  },{
    x:-100,
    y:0,
    scrollTrigger:{
      trigger:item as any,
      start:'top 80%',
      end:'bottom 80%',
      scrub:1,
    }
  })
  })
  gsap.fromTo('.icon-svg5',{
    x:-500,
    y:0
  },{
    keyframes:{
      "0%":{
        x:-500,
        y:0,
      },
      "50%":{
        x:150,
        y:0,
        scale:0.8,
      },
      "100%":{
        rotate:360,
        scale:2.2
      }
    },
    duration:2,
    scrollTrigger:{
      trigger:'.icon-svg5',
      start:'top 80%',
      end:'bottom 50%',
      scrub:1,
    }
  })
  gsap.fromTo('.icon-id5',{
    x:500,
    y:0
  },{
    x:-200,
    y:0,
    scrollTrigger:{
      trigger:'.icon-svg5',
      start:'top 80%',
      end:'bottom 80%',
      scrub:1,
    }
  })
})


 
</script>

<style scoped lang="scss">
.my-profile{
  padding-right:0 ;
  padding-left: 0;
  padding-top: 200px ;
  height: 180vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr 1fr 1fr 1fr 6fr;
  row-gap: 10px;
  align-items: center;
  justify-items: center;
  .icon-name{
    font-style: italic;
    font-size: 100px;
    font-family: yutong-font;
  }
}
</style>