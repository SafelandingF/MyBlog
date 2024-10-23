<template>
  <div class="essay-board-container">
    <edit-button v-show="userinfo.authorization" @click="goToEdit"></edit-button>
    <div class="essay-board">
      <cardAcrticle 
      v-for="(item,index) in essay" 
      :id="item.article_id"
      :image="item.imageUrl"
      :title="item.title"
      :preview="item.description"
      :icon-number="index"
      ></cardAcrticle>
    </div>
  </div>
</template>

<script setup lang="ts">  
  import cardAcrticle from '@/components/card-acrticle.vue'; 
  import useUserinfoStore from '@/stores/userInfo';
  import editButton from '@/components/edit-button.vue';
  import { storeToRefs } from 'pinia';
  import service from '@/utils/service';
  import { reactive, ref , onMounted } from 'vue';
  import { get } from 'node_modules/axios/index.cjs';
  import { useRouter } from 'vue-router';
import router from '@/router';
  interface Essay{
    article_id:number,
    imageUrl:string,
    title:string,
    description: string
  }
  // TODO:这里还有分表 任务
  const userInfoStore = useUserinfoStore();
  const {userinfo} = storeToRefs(userInfoStore)
  const essay = ref<Essay[]>([])
  const getEssay = () =>{
    service.get('/article/getarticle')
    .then(res =>{
      essay.value = res.data
      console.log('---')
      console.log(essay.value)
      console.log('---')
    })
    .catch(err => console.log(err))
  }
  const goToEdit = () =>{
    router.push('/edit-article')
  }
  onMounted(()=>{
    getEssay()
  })




</script>

<style scoped lang="scss">

  .essay-board-container {
    position: relative;
    width: 100%;
    height: 150vh;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    .essay-board{
      width: 80%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      column-gap: 50px;
      row-gap: 20px;
    }
  }

</style>