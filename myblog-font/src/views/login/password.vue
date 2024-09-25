<template>
  <div class="container">
    <div class="text">猜猜密码是什么</div> 
      <login-input ref='input'  ></login-input>
      <login-button @click="checkPassword" :text="text"></login-button>
  </div>
</template>

<script setup lang="ts">
  import LoginButton from './components/LoginButton.vue';
  import LoginInput from './components/LoginInput.vue';
  import { reactive,ref ,computed} from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';
  const router = useRouter();
  const input= ref(null)
  const password = computed(()=>{
    //@ts-ignore
    return input.value?.account
  })
  const text = '确定吗？'
  


  const checkPassword = () => {
    //后端进行密码校对 对了就有返回值
    service.get(`/login/password?account=admin&password=${password.value}`).then(res=>{
      console.log(res)
      //@ts-ignore
      if(res.token) {
        //@ts-ignore
        localStorage.setItem('token',res.token)
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
    font-family: zhuanshu-font;
      font-size: 50px;
      width: 50vh;
      height: 50vh;
      transform: translateY(75%);
      text-align: center;
      justify-content: center;
  }
  
}
</style>