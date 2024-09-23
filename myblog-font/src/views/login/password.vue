<template>
  <div class="container">
    <div class="text">猜猜密码是什么</div> 
    <el-form 
      :model="form"
      @submit.native.prevent
    >
      <el-form-item>
        <el-input 
        style="width: 300px;"
        class="el-input"  v-model="form.password"  placeholder="你真是我?"></el-input>
      </el-form-item>     
        <el-button type="primary" @click="checkPassword">提交</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
 import { reactive,ref } from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';
  const router = useRouter();
  const form = reactive({
    password:''
  })




  const checkPassword = () => {
    service.get(`/login/password?account=admin&password=${form.password}`).then(res=>{
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
    width: 50vh;
    height: 50vh;
    transform: translateY(75%);
    text-align: center;
    justify-content: center;
  }
  
}
</style>