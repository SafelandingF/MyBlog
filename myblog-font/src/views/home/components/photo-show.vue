

<template>

  <!-- TODO:这里仍然需要更改一下样式 -->


  <!-- TODO: 这里要改一改这个camera-container的样式 应该是设置为一个固定大小 通过绝对定位来让相机和底片重合-->
  <div class="camera-container">
    <div class="title">
      <h1>Photo</h1>
      <p>这里是我的相册</p>
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





    </div>

    <div class="text-container">
    <div class="desktopContentSection">
      <h1>Photo</h1>
      <p>这里是我的相册</p>
    </div>  
    
    <div class="desktopContentSection">
      <h1>Photo</h1>
      <p>这里是我的相册</p>
    </div>
   
    <div class="desktopContentSection">
      <h1>Photo</h1>
      <p>这里是我的相册</p>
    </div>
   
    <div class="desktopContentSection">
      <h1>Photo</h1>
      <p>这里是我的相册</p>
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
  ])

  gsap.set(photos,{yPercent:200})

  const animation = gsap.to(photos,{
    yPercent:0,
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
  left: 100px;
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
      background-image: url('../../../assets/imgs/self-portrait.jpg');
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
  left: 100px;
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
      background-image: url('../../../assets/imgs/camera-1.jpg');
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
  left: 100px;
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
      background-image: url('../../../assets/imgs/camera-1.jpg');
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
  left: 100px;
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
      background-image: url('../../../assets/imgs/camera-1.jpg');
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
  left: 100px;
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
      background-image: url('../../../assets/imgs/5012fb538424fba59f69f002f3df2027.jpg');
      background-size: cover;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
  }
}





.camera-container {
  //scroll-snap-type: y proximity;
  height: 3000px;
  width: 80vw;
  margin-left: 150px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  .text-container {
    height: 2000px;
  }
  .title{
    margin-top: 100px;
    width: 100%;
    height: 100px;
  }
}

</style>