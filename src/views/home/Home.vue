<template>
  <div id="home">
    <nav-bar>
      <nav-bar-item/>
    </nav-bar>
    <swiper/>
    <container/>
    <recommend/>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import NavBarItem from '../../components/common/navbar/NavBarItem'
  import Swiper from './homeChildren/Swiper'
  import Container from './homeChildren/Container'
  import Recommend from './homeChildren/Recommend'

  export default {
    name: 'Home',
    components: {
      NavBar,
      NavBarItem,
      Swiper,
      Container,
      Recommend
    }
  }
</script>

<style scoped>
  #home {
    background-image: linear-gradient(180deg,purple 0%,purple 5%,
    pink 10%,pink 20%,
    lightblue 40%,lightblue 60%,
    #f4f4f4 80%,#F6F6F6 100%);
    width: 100%;
    height: 1800px;
    position: relative;
  }
</style>
