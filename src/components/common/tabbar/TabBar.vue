<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    box-shadow: 0 -3px 3px 1px #f4f4f4;
  }

</style>