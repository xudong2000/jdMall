<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="itemClick(index)"
         :class="{active:index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    margin-top: 10px;
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background: linear-gradient(to bottom,red 0%,red 35%,blue 65%,blue 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
  .active span {
    padding: 5px;
    border-bottom: 3px solid purple;
  }
</style>
