<template>
  <div class="camera-container">
    <div class="camera">
    </div>
    <div class="camera-img">
    </div>
    <div class="camera-text">123</div>
</div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import gsap from 'gsap';
onMounted(()=>{
  
gsap.fromTo('.camera',{
    scale:1,
    rotate:90,
    x:-200
},{
    scale:1.4,
    rotate:0,
    duration: 3,
    scrollTrigger:{
        trigger: '.camera',
        start:'top 60%',
        end : "-=250",
        markers: true,
        scrub:2
    }
})
gsap.fromTo('.camera-img',{
    scale:1,
    rotate:90,
x: -410
},{
    scale:1.6,
    rotate:0,
    duration: 3,
    scrollTrigger:{
        trigger: '.camera',
        start:'top 60%',
        end : "-=250",
        markers: true,
        scrub:2
    }
})

gsap.fromTo('.text',{
    x:200000
},{
    x:0,
    scrollTrigger:{
        trigger: '.camera',
        start:'top 60%',
        end : "-=250",
        markers: true,
        scrub:1
    }
}
)
})
</script>
<style scoped lang="scss">
.camera-container {
  height: 100vh;
  width: 80vw;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns:1fr ;
  grid-template:
  '. camera text text'
  ;
}
.camera {
  z-index: 100;
  grid-area: camera;
  transform: translateX(-50%) rotate(90deg) ;
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/imgs/camera.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  overflow: visible;
}
.camera-img{
  z-index: 1;
  width: 10vw;
  height: 10vw;
  /*width: 178px;*/
  /*height: 144px;*/
  position: absolute;
  background-image: url('../../../assets/imgs/camera-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.camera-text{
  grid-area: text;
}

</style>