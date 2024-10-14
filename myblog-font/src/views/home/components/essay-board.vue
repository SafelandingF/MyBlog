<template>
  <div class="essay-board-container">
    <div class="essay-board">
      <edit-button v-show="userInfoStore.userinfo.authorization"></edit-button>
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
  const userInfoStore = useUserinfoStore();
</script>

<style scoped lang="scss">

  .essay-board-container {
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