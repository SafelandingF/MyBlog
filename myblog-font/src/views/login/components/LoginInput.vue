<template>

<div class="input-container">
  <input
    placeholder="我是？"
    type="text"
    name="text"
    class="input"
    v-model="account"
  />

</div>


</template>

<script setup lang="ts">
import {ref} from 'vue'

const account = ref('')
defineExpose({
  account
})


</script>


<style scoped lang="scss">


.input {

  width: 100%;
  max-width: 300px;
  height: 60px;
  padding: 12px;
  font-size: 18px;
  font-family: zhuoti-font;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  border-radius: 0;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 8px 8px 0 #000;
}

.input::placeholder {
  color: #888;
}

.input:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000;
}

.input:focus {
  background-color: #000;
  color: #fff;
  border-color: #ffffff;
}

.input:focus::placeholder {
  color: #fff;
}

@keyframes typing {
  from {
    width: 80%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.input:focus::after {
  content: "|";
  position: absolute;
  right: 10px;
  animation: blink 0.7s step-end infinite;
}

.input:valid {
  animation: typing 0.5s steps(30, end);
}
.input-container {
  position: relative;
  width: 100%;
  max-width: 270px;
}

.input {
  width: 100%;
  height: 60px;
  padding: 12px;
  font-size: 18px;
  font-family: "Courier New", monospace;
  color: #000;
  background-color: #fff;
  border: 4px solid #000;
  border-radius: 0;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 8px 8px 0 #000;
}

.input::placeholder {
  color: #888;
}

.input:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0 #000;
}

.input:focus {
  background-color: #010101;
  color: #fff;
  border-color: #d6d9dd;
}

.input:focus::placeholder {
  color: #fff;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  1% {
    transform: translateX(-5px);
  }
  2% {
    transform: translateX(5px);
  }
  3% {
    transform: translateX(-5px);
  }
  4% {
    transform: translateX(5px);
  }
  5% {
    transform: translateX(-5px);
  }
  6% {
    transform: translateX(5px);
  }
  7% {
    transform: translateX(-5px);
  }
  8% {
    transform: translateX(5px);
  }
  9% {
    transform: translateX(-5px);
  }
  10% {
    transform: translateX(5px);
  }
  11% {
    transform: translateX(-5px);
  }
  12% {
    transform: translateX(5px);
  }
  13% {
    transform: translateX(-5px);
  }
  14% {
    transform: translateX(5px);
  }
  15% {
    transform: translateX(-5px);
  }
  16% {
    transform: translateX(5px);
  }
  17% {
    transform: translateX(-5px);
  }
  18% {
    transform: translateX(5px);
  }
  19% {
    transform: translateX(-5px);
  }
  20% {
    transform: translateX(5px);
  }
  21% {
    transform: translateX(-5px);
  }
  22% {
    transform: translateX(5px);
  }
  23% {
    transform: translateX(-5px);
  }
  24% {
    transform: translateX(5px);
  }
  25% {
    transform: translateX(-5px);
  }
  26% {
    transform: translateX(5px);
  }
  27% {
    transform: translateX(-5px);
  }
  28% {
    transform: translateX(5px);
  }
  29% {
    transform: translateX(-5px);
  }
  30% {
    transform: translateX(5px);
  }
  31% {
    transform: translateX(-5px);
  }
  32% {
    transform: translateX(5px);
  }
  33% {
    transform: translateX(-5px);
  }
  34% {
    transform: translateX(5px);
  }
  35% {
    transform: translateX(-5px);
  }
  36% {
    transform: translateX(5px);
  }
  37% {
    transform: translateX(-5px);
  }
  38% {
    transform: translateX(5px);
  }
  39% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  41% {
    transform: translateX(-5px);
  }
  42% {
    transform: translateX(5px);
  }
  43% {
    transform: translateX(-5px);
  }
  44% {
    transform: translateX(5px);
  }
  45% {
    transform: translateX(-5px);
  }
  46% {
    transform: translateX(5px);
  }
  47% {
    transform: translateX(-5px);
  }
  48% {
    transform: translateX(5px);
  }
  49% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  51% {
    transform: translateX(-5px);
  }
  52% {
    transform: translateX(5px);
  }
  53% {
    transform: translateX(-5px);
  }
  54% {
    transform: translateX(5px);
  }
  55% {
    transform: translateX(-5px);
  }
  56% {
    transform: translateX(5px);
  }
  57% {
    transform: translateX(-5px);
  }
  58% {
    transform: translateX(5px);
  }
  59% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  61% {
    transform: translateX(-5px);
  }
  62% {
    transform: translateX(5px);
  }
  63% {
    transform: translateX(-5px);
  }
  64% {
    transform: translateX(5px);
  }
  65% {
    transform: translateX(-5px);
  }
  66% {
    transform: translateX(5px);
  }
  67% {
    transform: translateX(-5px);
  }
  68% {
    transform: translateX(5px);
  }
  69% {
    transform: translateX(-5px);
  }
  70% {
    transform: translateX(5px);
  }
  71% {
    transform: translateX(-5px);
  }
  72% {
    transform: translateX(5px);
  }
  73% {
    transform: translateX(-5px);
  }
  74% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  76% {
    transform: translateX(5px);
  }
  77% {
    transform: translateX(-5px);
  }
  78% {
    transform: translateX(5px);
  }
  79% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  81% {
    transform: translateX(-5px);
  }
  82% {
    transform: translateX(5px);
  }
  83% {
    transform: translateX(-5px);
  }
  84% {
    transform: translateX(5px);
  }
  85% {
    transform: translateX(-5px);
  }
  86% {
    transform: translateX(5px);
  }
  87% {
    transform: translateX(-5px);
  }
  88% {
    transform: translateX(5px);
  }
  89% {
    transform: translateX(-5px);
  }
  90% {
    transform: translateX(5px);
  }
  91% {
    transform: translateX(-5px);
  }
  92% {
    transform: translateX(5px);
  }
  93% {
    transform: translateX(-5px);
  }
  94% {
    transform: translateX(5px);
  }
  95% {
    transform: translateX(-5px);
  }
  96% {
    transform: translateX(5px);
  }
  97% {
    transform: translateX(-5px);
  }
  98% {
    transform: translateX(5px);
  }
  99% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.input:focus {
  animation: shake 0.6s ease-in-out;
}

@keyframes glitch {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

.input:not(:placeholder-shown) {
  animation: glitch 0.7s linear infinite;
}

.input-container::after {
  content: "|";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.input:focus + .input-container::after {
  color: #fff;
}

.input:not(:placeholder-shown) {
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0px 0px 0 #000;
}

</style>