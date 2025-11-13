<template>

  <div class="BGC" ref="BGC">
    <div class="article-detail-container">
      <div class="article-left"> 
        <div class="title-container">{{title}}</div>
        <div class="description-container">{{description}}</div>
        <div class="line"></div>
        <div class="image-container">
          <img src="../../assets/imgs/self-portrait.jpg" alt="">
        </div>
        <div class="line"></div>
        <div class="back" @click="goToHome">
          返回主页
        </div>
      </div>
      <div class="article-right">
          <div class="atricle-container" v-html="article"></div>
      </div> 
     </div>
  </div>
</template>

<script setup lang="ts">
import service from '@/utils/service';
import { ref,onMounted,onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import '../../assets/edit/circle-green.svg'
import { getEssayDetailAPI } from '@/apis/getArticle';

const gotoTop= () =>{
  document.body.scrollTo(0,0)
  window.scrollTo(0,0)
}
const BGC=ref()
const router = useRouter()
const route = useRoute()
const article_id = route.params.id
const title = ref<string>('')
const description = ref<string>('')
const imageUrl = ref<string>('')
const article = ref<string>('')
const getArticle = ()=>{
  getEssayDetailAPI({article_id:article_id})
  .then((res)=>{
    article.value = res.data[0].article
    title.value = res.data[0].title
    description.value = res.data[0].description
    imageUrl.value = res.data[0].imageUrl

  })
}


onMounted (()=>{
  getArticle()
})



const goToHome = ()=>{
  router.push({path:'/home'})
}

</script>
<style scoped lang="scss">





.BGC{
  height: 100vh;
  overflow: hidden;
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
.article-detail-container{
  padding-top: 50px ;
  font-family: 寒蝉半圆体;
  display: flex;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  .article-left{
    &::after{
      position: absolute;
      top: 25px;
      left: 5px;
      width: 30px;
      height: 4px;
      background-color: #010101;
      content: '';
    }   
    &::before{
      position: absolute;
      top: 25px;
      left: 5px;
      width: 30px;
      height: 4px;
      background-color: #010101;
      transform: translateY(15px)  translateX(13px);
      rotate: 90deg;
      content: '';
    }
    position: relative;
    width: 20vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    .title-container{
    text-wrap: wrap;
    font-family: 寒蝉半圆体;
    text-align: center;
    font-size: 5vw;
    width: 5vw;
    padding-right:  5px;
    border-right: 2px solid black;
    }
    .description-container{
      margin-top: 50px;
      width: 15vw;
      line-height: 1.5em;
      border: 3px black dashed;
      padding: 10px;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
    .line{
      width: 100%;
      height: 2px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: #000000;
    }
    .image-container{
      width: 100%;
      height: auto;
      img{
        max-width:100%;
        height:auto;
        object-fit:contain;
      }
    }
    .back{
      cursor: pointer;
      width: 100%;
      margin-top: 10px;
      text-align: end;
      text-decoration: underline;
      text-underline-offset: 5px;
      line-height: 1.5em;
    }
  }
  .article-right{
    width: 60vw;
    padding: 20px;
    .title-container{
      font-family: 寒蝉半圆体;
      text-align: center;
    }

  }


  
  .atricle-container {
    border: 2px black solid;
    width: 60vw;
    height: 80vh;
    overflow: scroll;
    overflow-x: hidden;
    font-size: 20px;
    line-height: 1.5em;
    padding: 20px;
    box-shadow: 12px 12px 50px rgba(0, 0, 0, 0.4);
    background-color: #f9f9f961;
    :deep(code) {
      margin-left: 5px;
      margin-right: 5px;
      width: auto;
      background-color: #f5f2f0;
      border-radius: 3px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    :deep(pre code::before) {
      content: url('../../assets/edit/circle-red.svg')+url('../../assets/edit/circle-yellow.svg')+url('../../assets/edit/circle-green.svg');
      display: block;
      height: 30px;
      border-radius: 100%;
    }
    :deep(pre code){
      font-family: Mono;
      display: block;
      width: auto;
      height: auto;
    }
    :deep(blockquote){
      font-style: italic;
      width: 90%;
      display: block;
      padding: 10px;
      margin-left: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
      border-radius: 2px;
      border-left: 15px solid #b4d5ff;
      background-color: #f5f2f0;
    }
    :deep(input){
      vertical-align: middle;
      margin-top: 1px;
      margin-bottom: 3px;
      margin-right: 3px;
    }
    :deep(a){
      font-style: italic;
      text-decoration: none;
      stroke: none;
      color: #4183c4;
      padding: 0;
    }
  
  
  }




}


@media (max-width: 768px) {
  .BGC{
    width: auto;
    overflow: scroll;
  }
  .article-detail-container{
    height: auto;
    flex-direction: column;
    overflow: scroll;
    width: 100vw;
    align-items: center;
    justify-content: center;
    .article-left{
      margin: 0;
      width: 80vw;
      .description-container{
        width: 75vw;
      }
      .title-container{
        width: 80vw;
        font-size: 8vw;
      }
    }
    .article-right{
      width: 80vw;
      .atricle-container{
        margin: 0 auto;
        width: 70vw;
        overflow: scroll;
      }
    }
  }
}

@media (max-width: 768px) {
  
}

</style>