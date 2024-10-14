<template>
  <div class="essay-board-container">
    <edit-button v-show="userinfo.authorization" @click=""></edit-button>
    <div class="essay-board">
      <cardAcrticle></cardAcrticle>
      <cardAcrticle></cardAcrticle>
      <cardAcrticle></cardAcrticle>
      <cardAcrticle></cardAcrticle>
    </div>
  </div>
</template>

<script setup lang="ts">  
  import cardAcrticle from '@/components/card-acrticle.vue'; 
  import useUserinfoStore from '@/stores/userInfo';
  import editButton from '@/components/edit-button.vue';
  import { storeToRefs } from 'pinia';
  const userInfoStore = useUserinfoStore();
  const {userinfo} = storeToRefs(userInfoStore)
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