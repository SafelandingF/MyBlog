<template>
  <div class="container">
    <div class="text">猜猜密码是什么</div> 

    <div class="password-input">  
      <login-input ref='input'  ></login-input>
    </div>
    <div class="password-button">
      <login-button @click="checkPassword" :text="text"></login-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LoginButton from './components/LoginButton.vue';
  import LoginInput from './components/LoginInput.vue';
  import { reactive,ref ,computed} from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';
  import useUserinfoStore from '@/stores/userInfo';
  import type { UserInfo } from '@/interface/user';

  const userinfoStore = useUserinfoStore();
  const router = useRouter();
  const input= ref(null)
  const password = computed(()=>{
    //@ts-ignore
    return input.value?.account
  })
  const text = '确定吗？'
  
  const checkPassword = () => {
    //后端进行密码校对 对了就有返回值
    service.get(`/login/password?account=admin&password=${password.value}`)
    .then(res=>{
      //@ts-ignore
      if(res.token) {
        //@ts-ignore
        localStorage.setItem('token',res.token)
        //@ts-ignore
        const result = res.result as UserInfo
        //@ts-ignore
        userinfoStore.setUserInfo(result)
        router.push('/home')
      }
      else {
        alert('密码错误哦')
      }
    }).catch(err=>{
     console.log(err) 
    }
    )
  }
  



</script>


<style scoped lang="scss">
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
  animation: movebackground 10s steps(10,end) infinite;
  .text {
    font-family: yutong-font;
      font-size: 80px;
      width: 60vh;
      height: 50vh;
      transform: translateY(50%);
      text-align: center;
      justify-content: center;
  }

  .input-container {
    transform: translateX(-23px) translateY(-50px);
  }
  
}
</style>