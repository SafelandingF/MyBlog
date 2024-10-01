<template>
  <div class="container">
    <div class="text">你是谁</div> 
    <div class="login">
    <login-input ref='input'  class="login-input"></login-input>
    <login-button @click="checkAccount" :text="text" class="login-button"></login-button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import LoginButton from './components/LoginButton.vue';
  import LoginInput from './components/LoginInput.vue'
  import { computed, onMounted, reactive,ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';

  const input = ref(null)

  const router = useRouter();

  const text = '登录'
  //@ts-ignore
  const account = computed(()=>input.value.account)


  const checkAccount = () =>{
    if(account.value === ''){
      alert('你到底是谁')
    }
    else if(account.value === '我') {
      router.push('/login/myself')
    }
    else if(account.value != '我' && account.value != ''){
      service.get(`/login?account=${account.value}`)
        .then(result =>{       
          //@ts-ignore
          localStorage.setItem('token',result.token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
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
</style>