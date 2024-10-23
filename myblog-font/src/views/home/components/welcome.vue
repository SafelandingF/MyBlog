<template>
      <!-- TODO: 这边的你好后面可以加个名字 -->
      <div class="welcome-container">
        <div class="welcome-title0">   <!-- 标题往上走 -->
          <span class="ani-wel1">你</span>
          <span class="ani-wel2">好</span>
        </div>      
        <div class="welcome-title1">
          Welcome To My Blog
        </div>      
        <div class="welcome-title2">
          Welcome To My Blog
        </div>      
        <div class="welcome-title3">
          Welcome To My Blog
        </div>        
        <div class="welcome-title4">
          Welcome To My Blog
        </div>      
        <div class="welcome-title5">
          Welcome To My Blog
        </div>   
        <div class="welcome-title6">
          Welcome To My Blog
        </div>
        <div class="welcome-title7">
          Welcome To My Blog
        </div>
      </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
onMounted(() => {
  
  gsap.fromTo('.ani-wel1',{x:-500,y:0,},{
    keyframes:{
      "0%": {
        x:-500,
        y:0,
      },  
      "50%":{
        x:0,
        y:0,
        rotate:30,
      },
      "70%":{
        rotate:-5,
      },
      "80%":{
        rotate:3,
      },
      "90%":{
        rotate:-2
      },
      "95%":{
        rotate:2
      },
      "100%": {
        rotate:0
      }
    },
    duration:1.5,
  })
  gsap.fromTo('.ani-wel2',{x:0,y:0,rotate:10},{
    delay:0.5,
    keyframes:{
      "50%":{
        scale:0.9
      },
      "100%":{
        scale:1.4
      }
    },
    duration:0.8
  })
  gsap.fromTo('.welcome-title1',{x:0,y:800,scale:1},{
    x:0,
    y:-50,
    scale:1.4,
    ease:'bounce',
    duration:1.5,
  })
  gsap.fromTo('.welcome-title0',{
    y:100,
  },{
    y:-1000,
    scrollTrigger:{
      trigger:'.welcome-title0',
      start:'+=100',
      end: '+=200',
      scrub:3,
    }
  })

  gsap.fromTo('.welcome-title1',{
    y:0,
    scale:1.4,
  },{
    y:-200,
    scale:2,
    scrollTrigger:{ 
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=300',
      scrub:2,
    }
  })

  gsap.fromTo('.welcome-title2',{
    scale:1
  },{
    y:-550,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })

  gsap.fromTo('.welcome-title3',{
    scale:1
  },{
    y:-900,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })


  gsap.fromTo('.welcome-title4',{
    scale:1
  },{
    y:-800,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })

  gsap.fromTo('.welcome-title5',{
    scale:1
  },{
    y:-700,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })
  gsap.fromTo('.welcome-title6',{
    scale:1
  },{
    y:-600,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })

  gsap.fromTo('.welcome-title7',{
    scale:1
  },{
    y:-500,
    scale:2,
    scrollTrigger:{
      trigger:'.welcome-title1',
      start:'-=300',
      end: '+=315',
      scrub:2,
      markers: true,
    }
  })



})
</script>
<style scoped lang="scss">

// FIXME: 去你妈的响应式

// FIXME: 涉及到具体大小的东西不要用响应式啊 会崩溃的

.welcome-container{ 
  position: relative;
  height: 200vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  .welcome-title0{
    font-family: yutong-font;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 300px;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 50px;
    transform:  translateY(30%);
  }
  .welcome-title1{
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
  }  
  .welcome-title2{
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
    opacity: 0.8;
  }
  .welcome-title3{
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
    opacity: 0.6;
  } 

   .welcome-title4{
    position: absolute;
    bottom: 0;
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0.4;
  }
   .welcome-title5{
    position: absolute;
    bottom: 0;
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0.3;
  }
   .welcome-title6{
    position: absolute;
    bottom: 0;
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0.2;
  }
   .welcome-title7{
    position: absolute;
    bottom: 0;
    font-family: Mono;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    height: 25%;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 10px;
    opacity: 0.1;
  }
}
</style>