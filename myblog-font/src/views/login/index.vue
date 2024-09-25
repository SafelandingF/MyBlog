<template>
  <div class="container">
    <div class="text">你是谁</div> 
    <login-input ref='input'  ></login-input>
    
    <login-button @click="checkAccount" :text="text"></login-button>
  
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
  .container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    background-image: -moz-linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    background-image: -webkit-linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    background-image: linear-gradient(90deg, rgb(255, 193, 168), rgb(206, 199, 255));
    .text {
      font-family: ali-font;
      font-size: 100px;
      width: 50vh;
      height: 50vh;
      transform: translateY(75%);
      text-align: center;
      justify-content: center;
    }
  }
</style>