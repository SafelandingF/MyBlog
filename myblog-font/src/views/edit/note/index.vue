<template>
  <div>edit-attirrlce</div>
  <div class="essay-board">
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
import useUserinfoStore from '@/stores/userInfo';
import { storeToRefs } from 'pinia';
import service from '@/utils/service';
import { ref,onMounted } from 'vue';
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
    console.log('123')
    console.log(noteInfo.value)
    console.log('123')
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

</style>