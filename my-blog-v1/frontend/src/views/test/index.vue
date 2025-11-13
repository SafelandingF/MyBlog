<template>
  
  <div class="container">
    <!-- <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>
    <div class="div4"></div> -->
    <div >
      <img src="http://localhost:3000/upload-files/link-9d7.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { effect, onMounted } from 'vue';
// gsap.registerPlugin(ScrollTrigger)

// onMounted(()=>{
//   const divArr = gsap.utils.toArray([
//     '.div1',
//     '.div2',
//     '.div3',
//     '.div4',
//   ])

//   divArr.forEach(item =>{
//     gsap.fromTo(item as any,{
//     x:-500,
//     y:0
//     },{
//     x:200,
//     y:0,
//     scrollTrigger:{
//       trigger:item as any,
//       start:'top 80%',
//       end:'bottom 80%',
//       scrub:1,
//     }
//   })

//   })

  


// })


</script>

<style scoped lang="scss">
.container{
  margin: 0 auto;
  width: 80vw;
  height: 300vh;
  background-color: #b59090;
  display: flex;
  flex-direction: column;
  div{
    width: 100px;
    height: 300px;
    margin-top: 20px;
    background-color: #fff;
  }
}
</style>