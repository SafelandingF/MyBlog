<template>
  <div class="title-container">{{title}}</div>
  <div class="description-container">{{description}}</div>
  <div class="image-container">{{imageUrl}}</div>
  <div class="atricle-container" v-html="article"></div>
 
</template>

<script setup lang="ts">
import service from '@/utils/service';
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const article_id = route.params.id
const title = ref<string>('')
const description = ref<string>('')
const imageUrl = ref<string>('')
const article = ref<string>('')
const getArticle = ()=>{
  service.get('/article/getarticledetail?article_id='+article_id)
  .then((res)=>{
    article.value = res.data[0].article
    title.value = res.data[0].title
    description.value = res.data[0].description
    imageUrl.value = res.data[0].imageUrl
  })
}
onMounted (()=>{
  getArticle()
})


</script>
<style scoped lang="scss">

.atricle-container {
  width: 100vw;
  height: 100vh;
  background-color: #c3c3c3;  
}
</style>