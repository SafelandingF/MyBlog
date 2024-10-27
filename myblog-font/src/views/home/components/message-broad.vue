<template>

  <div class="message-text">
    <span id="me-text"></span>
  </div>
  <div class="message-container" >
    <!-- TODO:这里要实现 一个hover -->
    <div class="card-container">
      <div class="card-preview" >
        <card-welcome
        v-for="item in showMessage"
        :key="item.message_id"
        :message="item.message"
        :account="item.account"
        :message_id="item.message_id"
        :like="item.like"
        :dislike="item.dislike"
        @uplodad:message_id="uplodadMessageId"
        ></card-welcome>
      </div>
      
      <!-- TODO: 这里通过路由的方式实现跳转 -->
      <div class="card-full">
        <card-welcome
        :key="messageID.id"
        :message="messageID.message"
        :account="messageID.account"
        :message_id="messageID.message_id"
        :like="messageID.like"
        :dislike="messageID.dislike"
        >
        <!-- SLOT 插槽部分--> 
        <div class="message-comment" 
        v-for="item in comment.slice(comment.length-4,comment.length).reverse()" :key="item.comment">
          <div class="comment"> {{item.comment}}</div>
        </div>    
        <div class="upComment" >
          <input class="comment-input" type="text" v-model="commentInput" placeholder="发表评论">
          <button class="Subscribe-btn"  @click="submitComment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 38 15"
              class="arrow"
            >
              <path
                d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
              >
            </path></svg>
            提交留言
          </button>
        </div>

      </card-welcome>
      </div>

    </div>
      <div class="arrow-container">
        <div class="left-container" @click="leftPage">
          <svg t="1728047850963" class="icon" viewBox="0 0 1024 1024" width="100" height="100"><path d="M718.07 551c4.06-60.24 3.3-119.84 3.56-180.62 0.28-68.3 13.61-136.4 14-204.11 0.48-80-90.09-69.26-151.47-76.68-59.25-7.17-217.91-60.1-257.89 11.37-21.19 37.89-6.83 100.69-6.57 140.92 0.52 80-1.86 160.31 1.37 240.29 0.31 7.66 4.54 12.47 9.83 14.77-2.47 1.77-7.09 1.88-14.09 0.13-3.68 2.33-36.51 6.94-39 7.56-45.66 11.39-91.34 18.26-137.91 26.44-11.13 2-19.82 17.1-15.7 27.65 43 109.93 152.91 204.88 239.86 280 30.21 26.11 64.29 47.39 90 78.29 9.91 11.92 18 30 32.42 37.7 39.52 21.11 73.78-26.8 100.92-47.26 54-40.67 103.41-85.08 155.06-128.66 45.28-38.21 125.94-86.08 151.42-140.94 40.52-87.14-107.71-87.59-175.81-86.85z m-541.63 20.31c24.95-3.46 49.3-7.86 73.71-12.63-18.24 17-31.17 38.79-49.59 55.57a252.6 252.6 0 0 1-24.12-42.94z m659.44 56.59c-9.89 33.18-82.32 76.7-108.62 98.67-32.79 27.39-64 56.49-96.46 84.24 11.31-16.5 22.8-32.87 34.62-49 3.08-4.21-3.91-8.2-7-4.07q-28.05 37.83-54.24 77a4 4 0 0 0-0.37 0.91c-25.4 24.15-56.6 53.68-81.77 61.6-27.06 8.51-29-11.08-54.87-34.35-23-20.67-47.58-39.32-71.64-58.68 8.94-11.37 19.91-21.46 29-32.57 15.48-18.85 29.62-38.4 47.41-55.23 3.79-3.58-1.89-9.22-5.71-5.71-21.15 19.47-37.1 43.29-56.7 64.29-7.15 7.66-14.84 15.06-21.52 23.12-10.31-8.43-20.49-17-30.32-26.08-6.75-6.23-13.94-12.67-21.29-19.2 23.85-37.17 52.5-71.5 88.71-97.19 4.56-3.24 0.26-10.83-4.44-7.59-37.39 25.71-67.27 60.05-92.36 97.58-31.1-27.57-65.54-57.79-95-90.65 25.22-26.17 50.94-51.86 76.5-77.69 3.28-3.31-1.8-8.39-5.11-5.11-25.71 25.43-51.27 51-77.3 76.12-7.84-9.06-15.42-18.24-22.25-27.7 18.87-17.9 31.26-41.34 50-59.41a2.37 2.37 0 0 0 0.07-3.47c20.35-4 40.75-8.22 61.63-12.4 23.07-4.61 37.57-0.58 49.62-23.64 8.37-16 7.6-43.88 3.75-73.72 24.86-30.09 50.64-59 78.3-86.66 3.19-3.18-1.74-8.11-4.94-4.94-25.79 25.57-51.62 51.44-75.1 79.22-1.92-12.61-4.21-25.32-6.49-37.44 12.26-13.84 27.46-24.86 40.37-38.32 18.71-19.51 33.82-41.93 53.58-60.5 2.89-2.72-1.44-7-4.34-4.34-21.57 19.8-37.77 44.43-59 64.45-10.69 10.05-22.11 18.89-32.42 28.91-0.83-4.38-1.66-8.7-2.43-12.82 0.07-6 0-12 0-18 13.64-29.7 36-51.45 59.38-73.91 2.52-2.43-1.31-6.24-3.83-3.83-21.13 20.16-40.94 40.1-55.51 65 0.12-23.17 0.26-46.33 0.18-69.5 17-33.72 58.22-59.72 82.85-83.63 3.23-3.14-1.7-8.06-4.94-4.94-22.28 21.42-57.4 44.47-78 73.14 0-8.26 0-16.52-0.08-24.77 11.78-17.49 17.25-38.4 29.77-55.74 11.76-16.29 30-30.37 31.1-51.84 0.24-4.51-6.68-4.46-7 0-1.51 22-24.66 36.78-35.6 54.34-7.3 11.71-12.08 24.6-18.36 36.64-0.07-12.21-0.11-24.44-0.19-36.63-0.19-31-6.2-39.19 19.1-59.13 23.45-18.49 47.5-16.15 76.62-14 43.82 3.31 87.27 15.21 130.92 20.85 52.59 6.8 106.17-7.36 107.45 59.89 0.67 35.34-8.35 72.31-10.48 107.85-5.56 92.6 1.11 184.7-10.54 276.76-1.62 12.79 11.86 22.38 23 23 26.74 1.44 52.42-4.35 78.84-3.17l42.42 7.84q47.94 7.35 21.03 26.15z" fill="#2c2c2c" p-id="9263" data-spm-anchor-id="a313x.search_index.0.i0.6e8f3a81JKXdzN"></path><path d="M428.11 419l-15.42 23.13c-2.07 3.11 2.94 6 5 2.92l15.42-23.13c2.06-3.09-2.94-5.99-5-2.92zM358.53 579.72c-17.73 17.59-35.63 35-53.44 52.53-10.56 10.39-24.06 19.12-25.21 35-0.34 4.69 7.45 5.82 8.28 1.12 2.83-15.92 22.71-30.45 33.64-41.45 13.94-14 28.13-27.8 42.09-41.81 3.46-3.49-1.89-8.83-5.36-5.39zM359 634.17c-18.68 19.91-36.42 40.68-54.74 60.92-3.65 4 2.44 10.07 6 6 17.82-20.75 35-42 53.21-62.45 2.62-3.04-1.7-7.43-4.47-4.47zM420.38 703.27c-18.71 19.88-37.14 40.08-54.57 61.09-3.63 4.38 2.8 10.64 6.22 6.22 16.77-21.69 34.72-42.21 53.38-62.28 3.11-3.35-1.88-8.38-5.03-5.03zM513.09 726.57c-29.2 30.8-47.09 69.94-78.09 99.22-4.49 4.23 2.17 10.76 6.73 6.73 32-28.34 48.41-69.26 76.09-101.26 2.71-3.2-1.77-7.82-4.73-4.69zM565.71 726.75c-24.26 38.87-51.5 74.84-84.66 106.58-4.65 4.45 2.48 11.6 7.07 7.07 33.17-32.75 60.62-69.68 85-109.33 2.88-4.7-4.5-8.98-7.41-4.32zM628.32 749.28q-41.47 50.9-85.5 99.56c-4.23 4.66 2.78 11.63 6.9 6.9 28.77-33 56.57-66.89 84.14-100.92 3.14-3.88-2.35-9.46-5.54-5.54z" fill="#2c2c2c" p-id="9264"></path></svg>
        </div>
        <div class="right-container" @click="rightPage">
          <svg t="1728047850963" class="icon" viewBox="0 0 1024 1024" width="100" height="100"><path d="M718.07 551c4.06-60.24 3.3-119.84 3.56-180.62 0.28-68.3 13.61-136.4 14-204.11 0.48-80-90.09-69.26-151.47-76.68-59.25-7.17-217.91-60.1-257.89 11.37-21.19 37.89-6.83 100.69-6.57 140.92 0.52 80-1.86 160.31 1.37 240.29 0.31 7.66 4.54 12.47 9.83 14.77-2.47 1.77-7.09 1.88-14.09 0.13-3.68 2.33-36.51 6.94-39 7.56-45.66 11.39-91.34 18.26-137.91 26.44-11.13 2-19.82 17.1-15.7 27.65 43 109.93 152.91 204.88 239.86 280 30.21 26.11 64.29 47.39 90 78.29 9.91 11.92 18 30 32.42 37.7 39.52 21.11 73.78-26.8 100.92-47.26 54-40.67 103.41-85.08 155.06-128.66 45.28-38.21 125.94-86.08 151.42-140.94 40.52-87.14-107.71-87.59-175.81-86.85z m-541.63 20.31c24.95-3.46 49.3-7.86 73.71-12.63-18.24 17-31.17 38.79-49.59 55.57a252.6 252.6 0 0 1-24.12-42.94z m659.44 56.59c-9.89 33.18-82.32 76.7-108.62 98.67-32.79 27.39-64 56.49-96.46 84.24 11.31-16.5 22.8-32.87 34.62-49 3.08-4.21-3.91-8.2-7-4.07q-28.05 37.83-54.24 77a4 4 0 0 0-0.37 0.91c-25.4 24.15-56.6 53.68-81.77 61.6-27.06 8.51-29-11.08-54.87-34.35-23-20.67-47.58-39.32-71.64-58.68 8.94-11.37 19.91-21.46 29-32.57 15.48-18.85 29.62-38.4 47.41-55.23 3.79-3.58-1.89-9.22-5.71-5.71-21.15 19.47-37.1 43.29-56.7 64.29-7.15 7.66-14.84 15.06-21.52 23.12-10.31-8.43-20.49-17-30.32-26.08-6.75-6.23-13.94-12.67-21.29-19.2 23.85-37.17 52.5-71.5 88.71-97.19 4.56-3.24 0.26-10.83-4.44-7.59-37.39 25.71-67.27 60.05-92.36 97.58-31.1-27.57-65.54-57.79-95-90.65 25.22-26.17 50.94-51.86 76.5-77.69 3.28-3.31-1.8-8.39-5.11-5.11-25.71 25.43-51.27 51-77.3 76.12-7.84-9.06-15.42-18.24-22.25-27.7 18.87-17.9 31.26-41.34 50-59.41a2.37 2.37 0 0 0 0.07-3.47c20.35-4 40.75-8.22 61.63-12.4 23.07-4.61 37.57-0.58 49.62-23.64 8.37-16 7.6-43.88 3.75-73.72 24.86-30.09 50.64-59 78.3-86.66 3.19-3.18-1.74-8.11-4.94-4.94-25.79 25.57-51.62 51.44-75.1 79.22-1.92-12.61-4.21-25.32-6.49-37.44 12.26-13.84 27.46-24.86 40.37-38.32 18.71-19.51 33.82-41.93 53.58-60.5 2.89-2.72-1.44-7-4.34-4.34-21.57 19.8-37.77 44.43-59 64.45-10.69 10.05-22.11 18.89-32.42 28.91-0.83-4.38-1.66-8.7-2.43-12.82 0.07-6 0-12 0-18 13.64-29.7 36-51.45 59.38-73.91 2.52-2.43-1.31-6.24-3.83-3.83-21.13 20.16-40.94 40.1-55.51 65 0.12-23.17 0.26-46.33 0.18-69.5 17-33.72 58.22-59.72 82.85-83.63 3.23-3.14-1.7-8.06-4.94-4.94-22.28 21.42-57.4 44.47-78 73.14 0-8.26 0-16.52-0.08-24.77 11.78-17.49 17.25-38.4 29.77-55.74 11.76-16.29 30-30.37 31.1-51.84 0.24-4.51-6.68-4.46-7 0-1.51 22-24.66 36.78-35.6 54.34-7.3 11.71-12.08 24.6-18.36 36.64-0.07-12.21-0.11-24.44-0.19-36.63-0.19-31-6.2-39.19 19.1-59.13 23.45-18.49 47.5-16.15 76.62-14 43.82 3.31 87.27 15.21 130.92 20.85 52.59 6.8 106.17-7.36 107.45 59.89 0.67 35.34-8.35 72.31-10.48 107.85-5.56 92.6 1.11 184.7-10.54 276.76-1.62 12.79 11.86 22.38 23 23 26.74 1.44 52.42-4.35 78.84-3.17l42.42 7.84q47.94 7.35 21.03 26.15z" fill="#2c2c2c" p-id="9263" data-spm-anchor-id="a313x.search_index.0.i0.6e8f3a81JKXdzN"></path><path d="M428.11 419l-15.42 23.13c-2.07 3.11 2.94 6 5 2.92l15.42-23.13c2.06-3.09-2.94-5.99-5-2.92zM358.53 579.72c-17.73 17.59-35.63 35-53.44 52.53-10.56 10.39-24.06 19.12-25.21 35-0.34 4.69 7.45 5.82 8.28 1.12 2.83-15.92 22.71-30.45 33.64-41.45 13.94-14 28.13-27.8 42.09-41.81 3.46-3.49-1.89-8.83-5.36-5.39zM359 634.17c-18.68 19.91-36.42 40.68-54.74 60.92-3.65 4 2.44 10.07 6 6 17.82-20.75 35-42 53.21-62.45 2.62-3.04-1.7-7.43-4.47-4.47zM420.38 703.27c-18.71 19.88-37.14 40.08-54.57 61.09-3.63 4.38 2.8 10.64 6.22 6.22 16.77-21.69 34.72-42.21 53.38-62.28 3.11-3.35-1.88-8.38-5.03-5.03zM513.09 726.57c-29.2 30.8-47.09 69.94-78.09 99.22-4.49 4.23 2.17 10.76 6.73 6.73 32-28.34 48.41-69.26 76.09-101.26 2.71-3.2-1.77-7.82-4.73-4.69zM565.71 726.75c-24.26 38.87-51.5 74.84-84.66 106.58-4.65 4.45 2.48 11.6 7.07 7.07 33.17-32.75 60.62-69.68 85-109.33 2.88-4.7-4.5-8.98-7.41-4.32zM628.32 749.28q-41.47 50.9-85.5 99.56c-4.23 4.66 2.78 11.63 6.9 6.9 28.77-33 56.57-66.89 84.14-100.92 3.14-3.88-2.35-9.46-5.54-5.54z" fill="#2c2c2c" p-id="9264"></path></svg>
        </div>
      </div>  
    </div>

    <div class="message-input">
      <message-input 
      @submit="getMessage"
      text="发布留言"
      ></message-input> 
    </div>

    
</template>

<script setup lang="ts">
import messageInput from '@/components/message-input.vue';
import cardWelcome from '@/components/card-welcome.vue';
import Typed from 'typed.js';
import { onMounted,toRef,watch,ref, onBeforeMount, reactive, computed } from 'vue';
import editButton from '@/components/edit-button.vue';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useUserinfoStore from '@/stores/userInfo';
import { storeToRefs } from 'pinia';
import service from '@/utils/service';
interface resMessage {
  account:string,
  id:number,
  message_id:number,
  message:string
  like:number,
  dislike:number
}
interface resComment {
  account:string,
  message_id:number,
  comment:string
}
const  userInfoStore = useUserinfoStore()
const { userinfo } = storeToRefs(userInfoStore)
const message = ref<resMessage[]>([])
// TODO:这里这个方法的效率太低了还得再进行优化
// 这里后端处理好数据在返回来
const comment = ref<resComment[]>([])
const commentInput = ref<string>('')
const getMessage = () =>{
  service.get('/message/getmessage')
  .then(result =>{
    message.value = result.data
    console.log(message.value)
  })
  .catch(err =>{
    console.log(err)
  })
}
const getComment = (messageId:number)=>{
  service.get(`/message/getcomment?messageId=${messageId}`)
  .then(result =>{
    comment.value = result.data
  })
  .catch(err =>{
    console.log(err)
  })
}
onBeforeMount(()=>{
  getMessage()  
})
onMounted(() => {
  console.log(userinfo.value.authorization)
  const typed = new Typed('#me-text', {
    strings: ['你对我的第一印象是什么', 
              '现在觉得我是个什么样的人',
              '请留言'
             ],
    typeSpeed: 50,
    backSpeed: 100,
  });
  typed.stop()
  const tri = ScrollTrigger.create({
    trigger:'.message-container',
    start: 'top 100%',
    onEnter: () =>{
      typed.start()
    }
  })  
})

// FIXME:这里的生命周期控制的有问题
const messageID = reactive<resMessage>({
  id:1,
  message_id:1,
  message:'左侧选中查看留言评论',
  account:'',
  like:0,
  dislike:0
})
const uplodadMessageId =(emit:number)=>{
  messageID.id = emit-1
  messageID.account = message.value[emit-1].account
  messageID.message_id = message.value[emit-1].message_id
  messageID.message = message.value[emit-1].message
  console.log(messageID)
  getComment(emit)
}
const start = ref<number>(0)
const end = ref<number>(4)

// TODO: 这里应该是从后往 然后再反转
const showMessage = computed(()=>{
  return message.value.slice( message.value.length-end.value, message.value.length-start.value).reverse()
})
const leftPage = ()=>{
  if(start.value >= 4){
    start.value -= 4
    end.value -= 4
  }
  if(end.value < 4){
    end.value = 4
  }
}
const rightPage = ()=>{
  if(end.value < message.value.length){
    start.value += 4
    if(end.value+4 > message.value.length){
      end.value = message.value.length
    }
    else {
      end.value += 4
    }
    console.log(start.value,end.value)
  }
}
const submitComment = () =>{
  service.post('/message/addcomment',{
    comment:commentInput.value,
    messageId:messageID.message_id
  })
  .then(result =>{
    console.log(result)
    getComment(messageID.message_id)
  }
  )
}



</script>
<style scoped lang="scss">  
.message-input {
  margin-top: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 400px;
}
.message-text{
  width: 100%;
  margin-top: 20vh;
  margin-bottom: 0;
  height: 20vh;
  text-align: center;
  span{
    font-family: yutong-font;
    font-size: 100px;
  }
}
.message-container {
  position: relative;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .card-container {
    width: 65%;
    display: grid;
    grid-template-areas: 
    "preview preview full "
    "preview preview full ";
    grid-template-columns: 3fr 3fr 5fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 15px;
    row-gap: 20px;
    .card-preview {
      gap: 15px;
      grid-area: preview;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 15px;
    }
    .card-full {
      grid-area: full;  
      .message-comment{
        font-family: ChillRound;
        margin: 0 auto;
        margin-top: 10px;
        width: 90%;
        background-color: #fefefe;
        border-left: 2px solid #6f6e6d;
        border-right: 2px solid #6f6e6d;
        padding-top: 10px;
        padding-bottom: 10px;
        // FIXME: 忘记设计用户字段了 悲
        .user{
          font-size: 25px;
          padding-top: 5px;
          text-indent: 1em;
          &::before{
            content: ' ';
            display: inline-block;
            width: 25px;
            height: 25px;
            border-radius: 100%;
            background-color: #0dffd3;
          }
        }
        .comment{
          font-size: 20px;
          text-align: center;
        }
      }
      .upComment{
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 90%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .comment-input{
          outline: none;
          height: 100%;
          padding: 0;
          margin: 0;
          padding-left: 10px;
          border: none;
          border-right: solid 1px;
          border-top-left-radius:15px ;
          border-bottom-left-radius: 15px;
        }
        .Subscribe-btn {
          height: 100%;
          width: 95px;
          border: none;
          border-top-right-radius:15px;
          border-bottom-right-radius:15px;

          color: rgb(0, 0, 0);
          cursor: pointer;
          background-color: #ffffff;
          font-weight: 500;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s;
        }
        .arrow {
          /* display: none; */
          position: absolute;
          margin-right: 150px;
          transition: all 0.3s;
        }
        .input-wrapper:active .icon {
          transform: scale(1.3);
        }
        .Subscribe-btn:hover {
          color: white;
        }
        .Subscribe-btn:hover .arrow {
          margin-right: 0;
          animation: jello-vertical 0.9s both;
          transform-origin: right;
        }
        @keyframes jello-vertical {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }
        .Subscribe-btn:active {
          transform: scale(0.9);
        }


      }

    }
    
  }
  .arrow-container{
    position: relative;
    margin-top: 50px;
    width: 60%;
    height: 50px;
    .left-container{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) translateX(-120%) rotate(90deg);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease-in-out;
        scale: 1.1;
      }
    }
    .right-container{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease-in-out;
        scale: 1.1;
      }
    }
  }
}

</style>