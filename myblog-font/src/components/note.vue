<template>
  
  <div class="note-container" @click="goToNote">    
      <div class="note-tag-container">
        <noteTag v-for="item in props.tags"
        :name="item.tag"
        ></noteTag>
     </div>
    <div class="note-content">
      <!-- TODO:这里要进行文本的插入 -->
      <h1>{{props.title}}</h1>
      <p>{{props.description}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import noteTag from './note-tag.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps<{
  note_id:number,
  description:string,
  title:string,
  tags:{tag:string}[],
}>()
const goToNote = () =>{
  router.push(`/detail-note/${props.note_id}`)
}
</script>

<style scoped lang="scss">
  .note-container{
    width: 320px;
    height: 225px;
    display: flex;
    justify-items: center;
    flex-direction: column;
    background-color: #fdfdfd;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    position: relative;
    box-shadow: #41404056 0px 6px 15px; 
    transition: all 0.3s ease;
    &:hover{
      transition: all 0.3s ease;
      transform: translateX(5px) translateY(-5px);
      scale: 1.005;     
      box-shadow: #00000056 0px 10px 30px; 
    }
    .note-tag-container {
      position: absolute;
      bottom: 5px;
      right: 10px;
      display: flex;
      width: 100%;
      height: 28px;
      gap: 10px;
      flex-direction: row-reverse;
    }
  }
</style>