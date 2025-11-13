<template>
  <div class="note-board-container">
    <edit-button v-show="userinfo.authorization" @click="goToEdit"></edit-button>
    <div class="note-welcome">
      <h1>有用的笔记！！！</h1>
    </div>
    <note
    v-for="(item,index) in noteInfo"
    :note_id="item.note_id"
    :title="item.title"
    :description="item.description"
    :key="item.note_id"
    :tags="item.tags"
    ></note>
  </div>
</template>

<script setup lang="ts">
import note from '@/components/note.vue';
import editButton from '@/components/editButton.vue';
import useUserinfoStore from '@/stores/userInfo';
import { storeToRefs } from 'pinia';
import service from '@/utils/service';
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import router from '@/router';
import { getNoteAPI } from '@/apis/getNote';


interface Note {
  note_id:number,
  title:string,
  description:string,
  tags:{tag:string}[]
}
const  userInfoStore = useUserinfoStore()
const { userinfo } = storeToRefs(userInfoStore)
const noteInfo = ref<Note[]>([])
const getNote = () =>{
  getNoteAPI()
    .then(res =>{
       noteInfo.value = res.data
    })
    .catch(err =>{
      console.log(err)
    })
}
const goToEdit =() =>{
  router.push('/edit-note')
}
onMounted(()=>{
  getNote()
})

</script>


<style scoped lang="scss">
  .note-board-container {
    width: 70vw;
    margin: 0 auto;
    padding-bottom: 200px;
   height: auto;
   display: flex;
   justify-items: center;
   align-items: center;
   align-content: flex-start;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 20px;
   position: relative;
   justify-content: space-evenly;
   .note-welcome {
    width: 70%;
    font-family: PING FANG YU TONG;
    position: absolute;
    top: -100px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
   }
  }

  @media (max-width: 768px) {
    .note-board-container{
      .note-welcome{
        font-size: 15px;
      }
    }
  }
</style>