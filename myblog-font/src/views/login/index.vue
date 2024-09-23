<template>
  <div class="container">
    <div class="text">你是谁</div> 

    <el-form 
      :model="form"
    >
      <el-form-item>
        <el-input 
        style="width: 300px;"
        class="el-input"  v-model="form.account"  placeholder="我是?"></el-input>
      </el-form-item>     
    </el-form>
    
    
    <el-button type="primary"  @click.native="checkAccount">提交</el-button>
  
  
  </div>
</template>

<script setup lang="ts">
  import { reactive,ref } from 'vue';
  import { useRouter } from 'vue-router';
  import service from '@/utils/service';
  const router = useRouter();
  const form = reactive({
    account:''
  })

  const checkAccount = () =>{
    if(form.account === '我') {
      router.push('/login/myself')
    }
    else if(form.account != '我' && form.account != ''){
      service.get(`/login?account=${form.account}`)
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