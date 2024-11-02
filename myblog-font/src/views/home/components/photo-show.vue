

<template>

  <!-- TODO:这里仍然需要更改一下样式 -->


  <!-- TODO: 这里要改一改这个camera-container的样式 应该是设置为一个固定大小 通过绝对定位来让相机和底片重合-->
  <div class="camera-container">
    <div class="title">
      <p>这里是一个简短的自我介绍</p>
    </div>
    <div class="image-container"> 
    <div class="image-outer-container1">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>    
    <div class="image-outer-container2">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>
    <div class="image-outer-container3">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>

    <div class="image-outer-container4">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>


    <div class="image-outer-container5">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>

    
    <div class="image-outer-container6">
      <div class="image-container">
        <div class="image">
        </div>
      </div>
    </div>




    </div>

    <div class="text-container">

    <div class="desktopContentSection">
      <p>我是一个自大自卑自恋狂</p>
      <p>敏感却无言者</p>
      <p>喜欢幻想却无法实现</p>
      <p>自以为是却缺乏能力</p>
      <p>一个难以理解的人</p>
    </div>  
    
    <div class="desktopContentSection">
      <p>一个刚刚完成转专业</p>
      <p>
        coding for fun
      </p>
       <p>一位计科大二学生</p> 
    </div>
   
    <div class="desktopContentSection">
      <p>一个喜欢摄影</p>
      <p>但害怕上镜</p>
      <p>一个偶尔写作</p>
      <p>却不愿展示</p>
      <p>的他人称之的文艺青年</p>
      <p>尽管我觉得我不是</p>
    </div>
   
    <div class="desktopContentSection">
      <p>记不清过往</p>
      <p>只记得住当下</p>
      <p>的</p>
      <p>一个现实的人</p>
    </div>

    <div class="desktopContentSection">
      
      <p>看不清未来</p>
      <p>但现在立志成为</p>
      <p> </p>
      <p>前端高手</p>
    </div>


    </div>

</div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(()=>{
  /*
  *! 这个效果很不错
  */


  const photos = gsap.utils.toArray([
    '.image-outer-container1',
    '.image-outer-container2',
    '.image-outer-container3',
    '.image-outer-container4',
    '.image-outer-container5',
    '.image-outer-container6',
  ])

  gsap.set(photos,{yPercent:250})

  const animation = gsap.to(photos,{
    yPercent:-40,
    duration:1,
    stagger:1, //动画的间隔
  })

  ScrollTrigger.create({
    trigger:'.camera-container',
    start:'+=0',
    end:'bottom bottom',
    pin:'.image-container',
    pinSpacing:false,
    animation:animation,
    scrub:true
  })  
  // 使用pin会影响间距
  //gsap modifier 实现旋转木马
})
</script>

<style scoped lang="scss">

.image-container{
  width: 800px;
  height: 1000px;
  position: relative;
}

.image-outer-container1{
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #7d7979;
      background-image: url('@/assets/imgs/self-portrait.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}
.image-outer-container2{
  rotate: 25deg;
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #7d7979;
      background-image: url('@/assets/imgs/img-show-5.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}


.image-outer-container3{
  rotate: 50deg;
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #7d7979;
      background-image: url('@/assets/imgs/img-show-4.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}

.image-outer-container4{
  rotate: 25deg;
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #7d7979;
      background-image: url('@/assets/imgs/img-show-8.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}

.image-outer-container6{
  rotate: 25deg;
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #ffffff;
      background-image: url('@/assets/imgs/link.png');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}


.image-outer-container5{
  rotate: 0deg;
  width: 350px;
  height: 290px;
  position: absolute;
  top: 50px;
  left:30%;
  .image-container{
    scale: 1.2;
    width: 350px;
    height: 290px;
    border-radius: 5px;
    background-color: #fafafa;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .image{
      top: 15px;
      left: 25px;
      width: 300px;
      height: 230px;
      position: absolute;
      border-radius: 3px;
      background-color: #ffffff;
      background-image: url('@/assets/imgs/img-show-1.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}

.camera-container {
  margin-top: 100px;
  //scroll-snap-type: y proximity;
  height: 4000px;
  width: 100vw;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 300px;
  .text-container {
    height: 2000px;
    .desktopContentSection{
      font-family: PING FANG YU TONG;
      font-size: 40px;
      padding-top: 300px;
      padding-bottom: 100px;
    }
  }
  .title{
    font-family: PING FANG YU TONG;
    font-size: 80px;
    margin-top: 100px;
    text-align: center;
    width: 100%;
    height: 150px;
  }
}

</style>