<template>
  <div class="detail">
    <detail-nav-bar v-show="isShowDetail" ref="detail"/>

    <scroll class="detail-content" ref="scroll" :probe-type="2" @scroll="detailScroll">
      <template v-slot:scroll>
        <div class="detail-box" v-for="(item,index) in $store.state.currType" :key="index" v-show="item.id===$store.state.currItem">
          <div class="detail-swiper">
              <a href="javascript:;">
                <img :src="item.img" alt="">
              </a>
              <a href="javascript:;">
                <img :src="item.img" alt="">
              </a>
            </div>

          <div class="detail-price">
              <span class="money">￥</span>
              <span class="price">{{item.price}}</span>
              <span class="money">.00</span>

              <div class="detail-like">
                <a href="javascript:;">
                  <img src="../../assets/img/detail/favorite.png" alt="">
                  <span>降价提醒</span>
                </a>

                <a href="javascript:;">
                  <img src="../../assets/img/detail/like.png" alt="">
                  <span>收藏</span>
                </a>
              </div>
            </div>

          <div class="detail-text">
              <h4>{{item.text}}</h4>
            </div>

          <div class="detail-privilege">
            <a href="">
              <span class="detail-buy"><img src="../../assets/img/detail/buy.png" alt=""></span>
              <span>24H发货</span>
              <span>极速审核</span>
              <span>15天价保</span>
              <span>免费上门取</span>
            </a>
          </div>
        </div>

        <div class="detail-discount">
          <h4>优惠</h4>
        </div>

        <div class="detail-info">
          <div class="on"><h4>已选</h4></div>
          <div class="middle"><h4>送至</h4></div>
          <div class="under"><h4>运费</h4></div>
        </div>

        <div class="detail-evaluation">
          <h4>评价</h4>
        </div>

        <div class="detail-qa">
          <h4>查看全部评价</h4>
        </div>

        <div class="detail-store">
          <h4>店铺</h4>
        </div>

        <div class="detail-recommend">
          <h4>猜你喜欢</h4>
        </div>

        <div class="detail-goods">
          <h4>商品详情</h4>
        </div>

      </template>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import Scroll from '../../components/common/scroll/Scroll'
  import DetailBottomBar from './detailChild/DetailBottomBar'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      Scroll,
      DetailBottomBar
    },
    data() {
      return {
        isShowDetail: false
      }
    },
    methods: {
      detailScroll(position) {
        //console.log((-position))
        this.isShowDetail = (-position) > 1

        if((-position) < 950) {
          this.$refs.detail.currentIndex = 0
        } else if((-position) >= 950 && (-position) < 1890) {
          this.$refs.detail.currentIndex = 1
        } else if((-position) >= 1890 && (-position) < 2345) {
          this.$refs.detail.currentIndex = 2
        } else if((-position) >= 2345) {
          this.$refs.detail.currentIndex = 3
        }
      },
      addToCart() {
        console.log(this.$store.state.currItem);
        console.log(this.$store.state.currType);
        this.$store.state.arr.push(this.$store.state.currItem)
        console.log(this.$store.state.arr);
      }
    }
  }
</script>

<style scoped>
  a {
    width: 100%;
    height: 100%;
    font-size: 12px;
  }
  .detail {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 9;
  }
  .detail-content {
    height: calc(100% - 50px);
    overflow: hidden;
    background-color: #F2F2F2;
  }
  .detail-box {
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 4%;
    overflow: hidden;
    width: 100%;
    height: 540px;
  }
  .detail-swiper {
    width: 750px;
    height: 375px;
  }
  .detail-price {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    padding-left: 15px;
  }
  .detail-price .money {
    color: #f2270c;
    font-size: 18px;
    line-height: 35px;
  }
  .detail-price .price {
    font-size: 30px;
    color: #f2270c;
  }
  .detail-price .detail-like {
    width: 102px;
    height: 35px;
    float: right;
    margin-right: 10px;
  }
  .detail-like a {
    width: 50px;
    height: 35px;
    float: left;
    text-align: center;
  }
  .detail-like img {
    width: 18px;
    height: 18px;
    display: block;
    margin-left: 15px;
  }
  .detail-text {
    width: 90%;
    height: auto;
    margin: 10px 0 0 15px;
  }
  .detail-privilege {
    width: 100%;
    height: 40px;
    background-color: #FBF0FD;
    margin-top: 15px;
  }
  .detail-privilege a {
    display: block;
    line-height: 38px;
  }
  .detail-privilege span {
    color: #e93b3d;
    font-size: 13px;
    margin-left: 10px;
  }
  .detail-privilege .detail-buy {
    width: 70px;
    height: 13px;
    display: inline-block;
  }
  .detail-buy img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .detail-discount {
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-radius: 15px;
  }

  .detail-info {
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .detail-info .on {
    flex: 1.5;
  }
  .detail-info .middle {
    flex: 1.5;
  }
  .detail-info .under {
    flex: 1;
  }

  .detail-evaluation {
    width: 100%;
    height: 600px;
    background-color: #fff;
    border-bottom: 3px solid #F2F2F2;
    border-radius: 15px 15px 0 0;
  }

  .detail-qa {
    width: 100%;
    height: 110px;
    background-color: #fff;
    border-radius: 0 0 15px 15px;
  }

  .detail-store {
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin: 15px 0;
    border-radius: 15px;
  }

  .detail-recommend {
    width: 100%;
    height: 440px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .detail-goods {
    width: 100%;
    height: 1000px;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
  }
</style>
