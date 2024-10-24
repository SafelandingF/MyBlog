<template>

  <!-- TODO: 这里需要完善动画 同时 搞一个悬浮和查看详细的按钮 -->
  <div class="essay-container" @click="goToEassay">
    <span class="essay-icon">{{props.iconNumber}}</span>
    <div class="essay-image-container">
      <div class="essay-image">
        <img src="../assets/imgs/self-portrait.jpg" alt="">
      </div>
    </div>
    <div class="essay-preview-container">
       <div class="essay-preview" > 
        <h2>{{props.title}}</h2>
        <p>{{props.preview}}</p>
       </div>    
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
  cursor: pointer;
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
  &:hover{
    transform: scale(1.05) translateY(-10px);
    transition: all 0.3s ease;
  }
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
      position: relative;
      width: 70%;
      height: 70%;
      background-color: #fff;
      border-radius: 25px;
      img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        max-width: 100%;
        height: auto;
      }
    }
  }
  .essay-preview-container{
    font-family: ChillRound;
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
      p{
        font-family: ChillRound;
      }
      h2{
        font-family: ChillRound;  
        text-align: center;
      }
    }
  }
}

</style>