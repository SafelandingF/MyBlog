<template>
  <div>edit-attirrlce</div>
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
</template>

<script setup lang="ts">
  import { getEssayAPI } from '@/apis/getArticle';
  import cardAcrticle from '@/components/cardArticle.vue'; 
  import { storeToRefs } from 'pinia';
  import service from '@/utils/service';
  import { reactive, ref , onMounted } from 'vue';
  interface Essay{
    article_id:number,
    imageUrl:string,
    title:string,
    description: string
  }
  // TODO:这里还有分表 任务
  const essay = ref<Essay[]>([])
  const getEssay = () =>{
    getEssayAPI()
    .then(res =>{
      essay.value = res.data
    })
    .catch(err => console.log(err))
  }
  onMounted(()=>{
    getEssay()
  })

</script>
<style scoped lang="scss">

</style>