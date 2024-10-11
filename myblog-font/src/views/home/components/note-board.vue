<template>
  <div class="note-board-container">
    <edit-button></edit-button>
    <div class="note-welcome">
      <h1>有用的笔记！！！</h1>
    </div>
    <note></note>
    <note></note>
    <note></note>
    <note></note>
    <note></note>
  </div>
</template>

<script setup lang="ts">
import note from '@/components/note.vue';
import editButton from '@/components/edit-button.vue';
</script>


<style scoped lang="scss">
  .note-board-container {
    width: 70vw;
    margin: 0 auto;
   height: 100vh;
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
    font-family: zhuoti-font;
     position: absolute;
     top: -100px;
     left: 50%;
     transform: translateX(-50%);
   }
  }
</style>