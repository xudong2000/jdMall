<template>
  <tab-bar>

    <tab-bar-item path="/home">
      <template v-slot:icon>
        <img src="../../../assets/img/tabbar/index1.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../../assets/img/tabbar/index2.png" alt="">
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template v-slot:icon>
        <img src="../../../assets/img/tabbar/category1.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../../assets/img/tabbar/category2.png" alt="">
      </template>
    </tab-bar-item>

    <tab-bar-item path="cart">
      <template v-slot:icon>
        <img src="../../../assets/img/tabbar/cart1.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../../assets/img/tabbar/cart2.png" alt="">
      </template>
    </tab-bar-item>

    <tab-bar-item path="profile">
      <template v-slot:icon>
        <img src="../../../assets/img/tabbar/user1.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../../assets/img/tabbar/user2.png" alt="">
      </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
