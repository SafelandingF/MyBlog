<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
  >
  <g
    :fill="iconColor"
  >
  <slot></slot>
</g>
</svg>
</template>

<script setup lang="ts">
  interface iconProps {
    iconName: string,
    width?: string | number,
    height?: string | number,
    iconColor?: string 
    viewBox?: string
  }
  // FIXME: 定义带默认值的props
  withDefaults(
    defineProps<iconProps>(),{
      iconColor:'currentColor',
      width:'1em',
      height:'1em',
      iconName:'box',
      viewBox:'0 0 1024 1024'
    }
  )
</script>

<style scoped lang="scss">

</style>