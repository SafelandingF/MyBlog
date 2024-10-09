<template>
  <div class="essay-board-container">
    <cardAcrticle></cardAcrticle>
    <cardAcrticle></cardAcrticle>
  </div>
</template>

<script setup lang="ts">
  import cardAcrticle from '@/components/card-acrticle.vue'; 
</script>

<style scoped lang="scss">

  .essay-board-container {
    width: 100%;
    height: 150vh;

  }

</style>