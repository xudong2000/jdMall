<template>
  <div id="home">
    <nav-bar ref="navBar" :class="{bgc:isBgc}"/>

    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControlOne"
                 class="tabControl" v-show="isFixed"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="homeScroll" :pull-up-load="true" @pullingUp="loadMore">
      <template v-slot:scroll>
        <swiper @swiperImgLoad="swiperImgLoad"/>
        <container/>
        <recommend/>
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControlTwo"/>
        <goods-list :goods="currentType" ref="goodsList"/>
      </template>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import Scroll from '../../components/common/scroll/Scroll'

  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodsList from '../../components/content/goods/GoodsList'
  import BackTop from '../../components/content/backTop/BackTop'

  import Swiper from './homeChildren/Swiper'
  import Container from './homeChildren/Container'
  import Recommend from './homeChildren/Recommend'

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swiper,
      Container,
      Recommend,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        // 保存当前商品类型数据
        currentType: '',
        // 是否显示回到顶部按钮
        isShowBackTop: false,
        // 保存tab上偏移量
        tabOffsetTop: 0,
        // 是否设置为fixed显示模式
        isFixed: false,
        // 是否添加class类名
        isBgc: false,
      }
    },
    created() {
      // 初始化默认显示流行商品类型
      this.currentType = this.$store.state.list.popular
      // 初始化默认向商品详情页传入流行商品类型数据
      this.$store.state.currType = this.currentType
    },
    methods: {
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = this.$store.state.list.popular
            break
          case 1:
            this.currentType = this.$store.state.list.news
            break
          case 2:
            this.currentType = this.$store.state.list.featured
            break
        }
        this.$refs.tabControlOne.currentIndex = index
        this.$refs.tabControlTwo.currentIndex = index
        this.$store.state.currType = this.currentType
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      homeScroll(position) {
        this.isBgc = (-position) > 1

        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position) > 500
        // 2.决定TabControl是否吸顶
        this.isFixed = (-position) > this.tabOffsetTop
      },
      loadMore() {
        console.log('上拉加载更多')
      },
      swiperImgLoad() {
        this.tabOffsetTop = this.$refs.tabControlTwo.$el.offsetTop
      }
    },
  }
</script>

<style scoped>
  #home {
    background-image: linear-gradient(180deg,purple 0%,purple 10%,
    pink 20%,pink 60%,#F7F7F7 80%,#F7F7F7 100%);
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .content {
    height: calc(100% - 50px);
    overflow: hidden;
  }
  .tabControl {
    background-color: #fff;
    margin: 0;
    border-bottom: 1px solid #000;
    position: relative;
    z-index: 9;
  }
  .bgc {
    background-color: #E43130;
  }
</style>
