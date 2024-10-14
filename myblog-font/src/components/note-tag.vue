<template>
  <!-- 这里通过类名切换来确定颜色--> 
  <div 
  class="tag-container"
  :class="props.name"
  >{{props.name.toUpperCase()}}</div>

</template>

<script setup lang="ts">
const props = defineProps<{
  name:string 
 }>()
</script>





<style scoped lang="scss">
  .tag-container {
    font-size: 10px;
    text-align: center;
    line-height: 28px;
    width: 50px;
    height: 28px;
    border-radius: 100px;
    color: white;
    cursor: pointer;
  }
  .tag-container:hover {
    transition: all 0.3s ease;
    filter: blur(1px);
    opacity: 0.8;
    
    scale: 1.005;     
                 
  }

  .vue{
    background-color: #40b181;
    box-shadow: #40b181;
    box-shadow: #40b181 0px 5px 15px;  
  }  
  .pinia{
    background-color: #ffe267;
    box-shadow: #ffe267;
    box-shadow: #ffe267 0px 5px 15px;  
  }  
  .nodejs{
    background-color: #6da55f;
    box-shadow: #6da55f;
    box-shadow: #6da55f 0px 5px 15px;
  }
  .ts{
    background-color: #3178c6;
    box-shadow: #3178c6;
    box-shadow: #3178c6 0px 5px 15px;  
  }  
  .js{
    background-color: #f3dc1d;
    box-shadow: #f3dc1d;
    box-shadow: #f3dc1d 0px 5px 15px;  
  }  

  .css{
    background-color: #f56419;
    box-shadow: #f56419;
    box-shadow: #f56419 0px 5px 15px;  
  }
  
  .mysql{
    background-color: #1d76ca;
    box-shadow: #1d76ca;
    box-shadow: #1d76ca 0px 5px 15px;  
  }
  
  .react{
    background-color: #3fc2e6;
    box-shadow: #3fc2e6;
    box-shadow: #3fc2e6 0px 5px 15px;  
  }
  
  .scss{
    background-color: #cd6799;
    box-shadow: #cd6799;
    box-shadow: #cd6799 0px 5px 15px;  
  }    
  .element{
    background-color: #409eff;
    box-shadow: #409eff;
    box-shadow: #409eff 0px 5px 15px;  
  }  
  .gsap{
    background-color: #88f876;
    box-shadow: #88f876;
    box-shadow: #88f876 0px 5px 15px;  
  }



</style>