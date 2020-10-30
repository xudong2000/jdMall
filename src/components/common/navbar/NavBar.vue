<template>
  <div class="nav-bar">
    <slot></slot>
<!--    <div class="left"><slot name="left"></slot></div>-->
<!--    <div class="center"><slot name="center"></slot></div>-->
<!--    <div class="right"><slot name="right"></slot></div>-->
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 44px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .nav-bar div {
    line-height: 44px;
    text-align: center;
    color: #fff;
  }
</style>
