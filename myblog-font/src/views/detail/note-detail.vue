<template>
<div class="bgc">
  <div class="id-container">
    <div class="note-id">{{noteDetail.note_id}}</div>
  </div>
  <div class="title-container">
    <div class="note-title">{{noteDetail.title}}</div>
  </div>

  <div class="note-tag-container">
    <noteTag
    v-for="tag in noteAllTags"
    :name="tag.tag"
    ></noteTag>
  </div>

  <div class="description-container"> 
    <p>Description:</p> 
    <div class="note-description">{{noteDetail.description}}</div>
  </div>
  <div class="content-container">
    <div class="note-content" v-html="noteDetail.note"></div>
  </div>

</div>
</template>

<script setup lang="ts">
import service from '@/utils/service';
import { onMounted,reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import noteTag from '@/components/note-tag.vue';
interface resNoteDetail {
  note_id:number,
  note:string,
  title:string,
  description:string,
}

const noteDetail = reactive<resNoteDetail>({
  note_id:0,
  note:'',
  title:'',
  description:'',
})

interface note {
  tag:string,
}
const noteAllTags = ref<note[]>([]) 

const route = useRoute();
noteDetail.note_id =Number(route.params.id) 


const getNoteDetail =  () => {
  service.get('note/getnotedetail?note_id='+route.params.id)
  .then(res =>{
    noteDetail.note = res.data[0].note;
    noteDetail.title = res.data[0].title;
    noteDetail.description = res.data[0].description;
  })
  .catch(err =>{
    console.log(err)
  } 
  )
}

const getNoteTag = () =>{
  service.get('note/getnotetag?note_id='+route.params.id)
  .then(result =>{
    noteAllTags.value = result.data
    console.log(noteAllTags.value)
  })
  .catch(err =>{
    console.log(err)
  })
}

onMounted(() => {
  getNoteDetail()
  getNoteTag()
});



</script>
<style scoped lang="scss">
.bgc{
  position: relative;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  animation: movebackground 10s steps(10,end) infinite;
  background-image: url('@/assets/imgs/noise.webp');
  @keyframes movebackground {
0% {
  background-position: 0  0;
};
10% {
  background-position: 110vw 110vh;
};
20% {
  background-position: 220vw 220vh;
};
30% {
  background-position: 330vw 330vh;
};
40% {
  background-position: 440vw 440vh;
};
50% {
  background-position: 550vw 550vh;
};
60% {
  background-position: 660vw 660vh;
};
70% {
  background-position: 770vw 770vh;
};
80% {
  background-position: 880vw 880vh;
};
90% {
  background-position: 990vw 990vh;
};
100% {
  background-position: 1100vw 1100vh;
  };
  };

  .id-container{
    position: absolute;
    top: 3%;
    left: 15%;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100% ;
    color: #f5f2f0;
    background-color: #0a0a0a;
    .note-id{
      font-family: Mono;
      font-size: 30px;
      text-align: center;
      line-height: 60px;
      vertical-align: middle;
      margin-left: -15px;
      margin-top: -5px;
    }
  }

  .note-tag-container{
    padding-left: 20px;
    padding-right: 20px;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    border-left: 2px solid black;
    border-right: 2px solid black;

  }

  .title-container{
    
    max-width: 60%;
    font-size: 50px;
    font-family: Mono;
    margin-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }



  .description-container{

    width: 60%;
   
    margin-top: 50px;
    margin-bottom: 50px;
    border: 3px black dashed;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 10px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    p{
      font-family: Mono;
      font-size: 40px;
      margin: 5px;
      padding: 5px;
      padding-left: 0;
    }
    .note-description{
      font-family: ChillRound;
      font-size: 25px;
      line-height: 1.2em;
      text-indent: 2em;
    }
  }

  .content-container{
    border: 2px black solid;
    height: 100vh;
    font-size: 20px;
    line-height: 1.5em;
    padding: 20px;
    box-shadow: 12px 12px 50px rgba(0, 0, 0, 0.4);
    background-color: #f9f9f961;
    width: 60%;
    :deep(code) {
      margin-left: 5px;
      margin-right: 5px;
      width: auto;
      background-color: #f5f2f0;
      border-radius: 3px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    :deep(pre code::before) {
      content: url('../../assets/edit/circle-red.svg')+url('../../assets/edit/circle-yellow.svg')+url('../../assets/edit/circle-green.svg');
      display: block;
      height: 30px;
      border-radius: 100%;
    }
    :deep(pre code){
      font-family: Mono;
      display: block;
      width: auto;
      height: auto;
    }
    :deep(blockquote){
      font-style: italic;
      width: 90%;
      display: block;
      padding: 10px;
      margin-left: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
      border-radius: 2px;
      border-left: 15px solid #b4d5ff;
      background-color: #f5f2f0;
    }
    :deep(input){
      vertical-align: middle;
      margin-top: 1px;
      margin-bottom: 3px;
      margin-right: 3px;
    }
    :deep(a){
      font-style: italic;
      text-decoration: none;
      stroke: none;
      color: #4183c4;
      padding: 0;
    }  
  }
  

}






</style>