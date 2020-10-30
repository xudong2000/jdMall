<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar"
  import NavBar from "./components/common/navbar/NavBar"
  import NavBarItem from "./components/common/navbar/NavBarItem"

  export default {
    name: 'App',
    components: {
      MainTabBar,
      NavBar,
      NavBarItem
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
