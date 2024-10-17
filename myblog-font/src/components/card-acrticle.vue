<template>

  <!-- TODO: 这里需要完善动画 同时 搞一个悬浮和查看详细的按钮 -->
  <div class="essay-container" @click="goToEassay">
    <span class="essay-icon">{{props.iconNumber}}</span>
    <div class="essay-image-container">
      <div class="essay-image"></div>
    </div>
    <div class="essay-preview-container">
      <!-- 还是不用插槽比较好 这里不需要控制文本 -->
       <div class="essay-preview" >{{props.preview}}</div>    
    </div>
  </div>
</template>

<script setup lang="ts">

  import gsap from 'gsap';
  import { onMounted,ref} from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const props = defineProps<{
    title:string,
    preview:string,
    image:string,
    id:number,
    iconNumber:number
  }>()
  const goToEassay = () =>{
    router.push(`/detail-article/${props.id}`)
  }
  

// gsap动画  
onMounted(()=>{
  gsap.fromTo('.essay-container',{
    opacity:0.1,
  },{
    opacity:1,
    scrollTrigger:{
      trigger: '.essay-container',
      start:'top 60%',
      end:'-=250',
      scrub:3
    }
  })

})



</script>
<style scoped lang="scss">
.essay-container{ 
  width: 36vw;
  height: 30vh;
  min-width: 500px;
  min-height: 250px;
  position: relative;
  display: flex;
  border-radius: 25px;
  border:2px black solid;
  background-color: #fffdfb;
  opacity: 0.1;
  flex-wrap: nowrap;
  .essay-icon{
    position: absolute;
    top: -12px; 
    left: 30px;
    padding: auto;
    height: 30px;
    width: 30px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 30px;
    line-height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    background-color: black;
  }
  .essay-image-container{
    margin: 0;
    padding: 0;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    width: 40%;
    height: 100%;
    background-color: #252323;
    display: flex;
    align-items: center;
    justify-content: center;
    .essay-image{
      width: 70%;
      height: 70%;
      background-color: #fff;
      border-radius: 25px;
    }

  }
  .essay-preview-container{
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    width: 60%;
    height: 100%;
    background-color: #332b2b;
    display: flex;
    align-items: center;
    justify-content: center;
    .essay-preview{
      width: 70%;
      height: 70%;
      background-color: #fff;
      border-radius: 25px;
      font-family: yutong-font;
      padding: 20px;
    }
  }
}

</style>