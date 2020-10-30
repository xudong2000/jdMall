<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="icon-active" v-show="isActive"><slot name="icon-active"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
        path: String
      },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(()=>{})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }
  .icon {
    width: 100%;
    height: 100%;
  }
  .icon-active {
    width: 100%;
    height: 100%;
  }

</style>
