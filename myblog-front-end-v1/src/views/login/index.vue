<template>
  <div class="container">
    <div class="text">你是谁</div> 
    <div class="login">
    <login-input ref='input' class="login-input"></login-input>
    <login-button @click="checkAccount" :text="text" class="login-button"></login-button>
    </div>
    <div class="icp">
      <a href="https://beian.miit.gov.cn/" target="_blank">@备案号  </a>
      <a href="https://beian.miit.gov.cn/" target="_blank">  冀ICP备2024092243号-1</a>
    </div>
  </div>
</template>
  

<script setup lang="ts">
  import LoginButton from './components/LoginButton.vue';
  import LoginInput from './components/LoginInput.vue'
  import { computed, onMounted, reactive,ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';
  import { type UserInfo ,type LoginResData } from '@/interface/user';
  import useUserinfoStore from '@/stores/userInfo';
  

  const input = ref(null)
  const router = useRouter();
  const text = '登录'
  //@ts-ignore
  const account = computed(()=>input.value.account)
  const userInfoStore = useUserinfoStore()

  const checkAccount = () =>{
    if(account.value === ''){
      alert('你到底是谁')
    }
    else if(account.value === '我') {
      router.push('/myself')
    }
    else if(account.value != '我' && account.value != ''){
      service.get<LoginResData>(`/login?account=${account.value}`)
        .then(res =>{    
          //! FIXME:这里的类型报错好像和axios的配置有问题 我们修改了res的返回类型
          //@ts-ignore
          const result= res.result as UserInfo
          console.log(res)
          userInfoStore.setUserInfo(result)
          //@ts-ignore
          localStorage.setItem('token',res.token)
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>


<style scoped lang="scss">

.icp{
  bottom: 30px;
  position: absolute;
  font-size: 10px;

  a{
    text-decoration: none;
    color: gray;
  }
}


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
.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    background-image: url('@/assets/imgs/noise.webp');
    /*
    background-image: -moz-linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    background-image: -webkit-linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    background-image: linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    */
    background-repeat: repeat;
    animation: movebackground 10s steps(10,end) infinite;
    .text {
      font-family: ali-font;
      font-size: 150px;
      width: 80vh;
      height: 50vh;
      transform: translateY(50%);
      text-align: center;
      justify-content: center;
    }
    .login{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      .login-input{
        transform: translateX(-23px);
      }
      .login-button{
        transform: translateY(25px);
      }
    }
}
@media (max-width:768px) {
  .container{
    .text{
      font-size: 100px;
    }
    .login{
      scale: 0.8;
      transform: translateY(-50%);
    }
  }
}
</style>