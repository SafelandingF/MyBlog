<template>
  <button style="cursor: pointer;" class="login-button">{{props.text}}</button>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: "登录"
    }
  }
)


</script>
<style scoped lang="css">
/* From Uiverse.io by namecho */ 
/* From Uiverse.io by sekaiking */ 
.login-button {
  z-index: 100;
  background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;
}

.login-button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 black;
};

.login-button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 black;
};
</style>