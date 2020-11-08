<template>
  <div class="detail-nav-bar">
    <nav-bar class="bar">
      <template v-slot:left>
        <div class="detail-left">
          <div class="back" @click="backClick">
            <img src="../../../assets/img/detail/back.png" alt="">
          </div>
        </div>
      </template>

      <template v-slot:center>
        <div class="detail-center">
          <a href="javascript:" v-for="(item,index) in titles" @click="detailClick(index)">
            <span :class="{check:index===currentIndex}">{{item}}</span>
          </a>
        </div>
      </template>

      <template v-slot:right>
        <div class="detail-right">
          <div class="more">
            <img src="../../../assets/img/detail/more.png" alt="">
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','评价','推荐','详情'],
        currentIndex: 0
      }
    },
    methods: {
      detailClick(index) {
        this.currentIndex = index
        switch(index) {
          case 0:
            this.$parent.$refs.scroll.scrollTo(0,0,500)
            break
          case 1:
            this.$parent.$refs.scroll.scrollTo(0,-950,500)
            break
          case 2:
            this.$parent.$refs.scroll.scrollTo(0,-1890,500)
            break
          case 3:
            this.$parent.$refs.scroll.scrollTo(0,-2345,500)
            break
        }
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .bar {
    background-color: #fff;
    border-bottom: 1px solid #EDEDED;
  }
  .detail-left,.detail-right {
    width: 100%;
    height: 100%;
  }
  .back,.more {
    width: 100%;
    height: 100%;
    padding-top: 4px;
  }
  img {
    width: 20px;
    height: 20px;
  }

  .detail-center {
    flex: 6;
    display: flex;
  }
  .detail-center a {
    flex: 1;
    display: block;
    line-height: 44px;
    text-align: center;
    color: gray;
    font-size: 14px;
  }
  .detail-center span {
    padding-bottom: 5px;
  }
  .check {
    border-bottom: 3px solid red;
    color: #000;
  }
</style>
