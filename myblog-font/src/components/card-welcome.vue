<template>
  <div class="card" @click=" uplodad">
    <div class="top-bar">
      <svg style="margin-left: 5px;" t="1729606017995" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7823" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M707.197156 819.837156c0 12.583822-9.102222 23.369956-23.665778 23.369955-12.720356 0-23.620267-10.786133-23.620267-23.369955 0-12.606578 10.922667-23.392711 23.643022-23.392712 14.563556 0 23.643022 10.786133 23.643023 23.392712zM798.219378 819.837156c0 12.583822-10.922667 23.392711-23.665778 23.392711-12.720356 0-23.620267-10.808889-23.620267-23.392711 0-14.404267 10.922667-23.392711 23.643023-23.392712 12.743111 0 23.643022 8.988444 23.643022 23.392712zM889.2416 819.837156c0 12.583822-9.102222 23.392711-23.665778 23.392711-12.720356 0-23.620267-10.808889-23.620266-23.392711 0-14.404267 10.922667-23.392711 23.643022-23.392712 14.563556 0 23.643022 8.988444 23.643022 23.392712z" fill="#000000" p-id="7824"></path><path d="M698.481778 952.046933v3.527111l11.6736-7.896177a20.48 20.48 0 0 1 10.535822-3.504356c4.687644-1.160533 9.671111-1.388089 15.177956 0.455111 19.114667 2.343822 27.989333 3.117511 38.5024 3.117511 89.156267 0 161.359644-61.576533 161.359644-134.235022 0-72.635733-72.203378-134.212267-161.336889-134.212267-90.7264 0-163.202844 61.371733-163.202844 134.212267 0 44.2368 26.441956 86.129778 71.042844 111.502222 10.308267 5.370311 16.247467 15.883378 16.247467 27.0336z m-128.250311-138.535822c0-97.097956 92.182756-175.172267 204.140089-175.172267 110.455467 0 202.319644 78.347378 202.319644 175.172267 0 96.847644-91.864178 175.217778-202.296889 175.217778-13.266489 0-23.574756-0.978489-46.193778-3.777422l-30.651733 20.6848-9.102222 5.393066a20.48 20.48 0 0 1-30.947556-17.6128V958.008889c-54.294756-32.699733-87.267556-86.471111-87.267555-144.475022z m157.013333 170.894222a6.371556 6.371556 0 0 0 1.001244-0.136533 13.744356 13.744356 0 0 1-0.477866 0.113778h-0.500622z m-5.575111-1.410844z" fill="#000000" p-id="7825"></path><path d="M497.436444 0C332.617956 0 198.496711 133.802667 198.496711 298.325333c0 119.102578 70.519467 221.866667 171.940978 269.630578C182.909156 622.887822 45.511111 795.830044 45.511111 1000.448 45.511111 1013.464178 56.092444 1024 69.131378 1024s23.620267-10.535822 23.620266-23.552c0-222.663111 181.589333-403.820089 404.707556-403.820089 164.864 0 298.985244-133.825422 298.985244-298.325333C796.444444 133.825422 662.3232 0 497.436444 0z m0 549.501156c-138.808889 0-251.721956-112.685511-251.721955-251.198578 0-138.490311 112.935822-251.175822 251.744711-251.175822 138.808889 0 251.744711 112.685511 251.744711 251.175822 0 138.513067-112.913067 251.198578-251.744711 251.198578z" fill="#000000" p-id="7826"></path></svg>
      <div class="card-account">{{ account }}</div>
    </div>
    <div class="card-inner">{{ message }}</div>
    <slot></slot>
    <div class="card-icon"> 
      <div class="like" @click="clickLike">
       <svg t="1729606177744" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8376" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M503.466667 384L469.333333 298.666667H384v426.666666h384V384h-264.533333zM298.666667 298.666667V213.333333h256l25.6 85.333334H853.333333v512H298.666667V298.666667zM170.666667 298.666667h85.333333v512H170.666667V298.666667z" fill="#444444" p-id="8377"></path></svg>
        <span class="like-num .like-active" >{{like}}</span>
      </div>
      <div class="dislike"  @click="clickDislike">
        <svg t="1729606188653" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8624" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><path d="M494.933333 640l-25.6 85.333333H384V298.666667h384v341.333333h-273.066667zM298.666667 725.333333v85.333334h256l25.6-85.333334H853.333333V213.333333H298.666667v512z m-128 0h85.333333V213.333333H170.666667v512z" fill="#444444" p-id="8625"></path></svg>
        <span class="like-num .like-active">{{dislike}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import service from '@/utils/service';
import { ref,reactive, toRefs } from 'vue';

interface messageBroad {
  account:string,
  message:string,
  message_id:number,
  like:number ,
  dislike:number  ,
  comment?:Array<string> | null //comment使用另一种方法实现
 }
const props = defineProps<messageBroad>()
const { account,message,message_id} = toRefs(props) 
const emit = defineEmits(['uplodad:message_id'])
const uplodad =()=>{
  emit('uplodad:message_id',message_id.value)
}

const likeActive = ref<boolean>(false)
const dislikeActive = ref<boolean>(false)
// 这里直接解构会有问题 我还不懂为什么 以后在解决
const like = ref<number>(props.like)
const dislike = ref<number>(props.dislike)

const upLiekDislike = () =>{
  console.log(like.value)
  console.log(dislike.value)
  service.post('/message/like',{
    messageId:message_id.value,
    like:like.value,
    dislike:dislike.value,
  }).then(result => console.log(result))
}

const clickLike = ()=>{
  if(dislikeActive.value){dislikeActive.value = false;dislike.value--}
  likeActive.value = !likeActive.value
  if(likeActive.value){
    like.value++
  }else{
    like.value--
  }
  upLiekDislike()
}

const clickDislike = ()=>{
  if(likeActive.value){likeActive.value = false ; like.value--}
  dislikeActive.value = !dislikeActive.value
  if(dislikeActive.value){
    dislike.value++ 
  }else{
    dislike.value--
  }
  upLiekDislike()
}




</script>


<style scoped lang="scss">

// TODO: 如果

.card {
  cursor: pointer;
  width: 100%;
  background-color: #b5a4a4;
  border-radius: 5px;
  .top-bar{
    font-family: ChillRound;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    height: 30px;
    background-color: #4d4343;
    display: flex;
    font-size: 30px;
    gap: 10px;
    border-radius: 5px;
  }
  .card-inner{
    font-family: ChillRound;
    text-indent: 2em;
    font-size: 25px;  
    line-height: 40px;
    vertical-align: middle;
    margin: 0 auto;
    width: 90%;
    height: 200px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
  .card-icon{
    display: flex;
    align-content: center;
    margin-top: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    .like{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        transition: all 0.3s ease;
        transform: scale(1.2) translateY(2px);
      }
    }
    .dislike{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        transition: all 0.3s ease;
        transform: scale(1.2) translateY(2px);
      }
    }
    .like-num{
      margin-left: 10px;
      font-size: 20px;
    }
  }

}



</style>