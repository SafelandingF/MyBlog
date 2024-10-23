<template>
  <div class="you-should-know">
    或许你认识下面的一个我
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
onMounted(()=>{
  gsap.fromTo('.you-should-know',{
    x:0,
    y:0,
  },{
    x:50,
    y:100,
    rotate:-15,
    scale:1.5,
    duration:2,
    scrollTrigger:{
      trigger:'.you-should-know',
      start:'top 80%',
      end:'bottom 20%',
      scrub:1,
    }
  })

})

</script>

<style scoped lang="scss">
.you-should-know{
  height: 15vh;
  width:50vw;
  line-height: 15vh;
  font-size: 50px;
  font-family: yutong-font;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  text-align: center; 
  vertical-align: middle;
  transform: rotate(-90deg) translateY(-50px);
  scale: 0;
}
</style>