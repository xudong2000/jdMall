<template>
  <div class="swiper">
    <ul class="swiper-item">
      <li v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </li>
      <li>
        <a href="https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119">
          <img src="../../../assets/img/home/swiper.jpg" alt="">
        </a>
      </li>
    </ul>
    <ul class="swiper-index">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import {getHomeMultiData} from '../../../network/home'

  export default {
    name: "Swiper",
    data() {
      return {
        banners: [],
        recommends: [],
        index: 0,
        speed: 10,
        num: 0
      }
    },
    created() {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    mounted: function() {
      setTimeout(() => {
        this.startTimer()
      },1000)
    },
    methods: {
      startTimer: function() {
        let item = document.querySelector('.swiper-item')
        let guide = document.querySelectorAll('.swiper-index>li')

        let timer = setInterval(() => {
          this.index--

          if(this.index === -1400) {
            this.index = -1
          }

          if(this.index % -350 === 0) {

          }

          this.num = Math.abs(Math.floor(this.index / 350))-1

          for (let i=0; i<guide.length; i++) {
            guide[i].className = ''
          }

          guide[this.num].className = 'bg'
          item.style.marginLeft = this.index+'px'
        },this.speed)

        let navBar = document.querySelector('.nav-bar')

        window.onscroll = function () {
          let scroll = document.documentElement.scrollTop||document.body.scrollTop;
          if(parseInt(scroll) >= 90) {
            navBar.style.backgroundColor = '#E43130'
          } else {
            navBar.style.backgroundColor = ''
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper {
    width: 350px;
    height: 140px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    left: 12px;
    top: 45px;
  }
  .swiper .swiper-item {
    width: 1750px;
    height: 140px;
  }
  .swiper-item li {
    float: left;
    width: 350px;
    height: 140px;
  }
  .swiper-item a {
    width: 100%;
    height: 100%;
    display: block;
  }
  .swiper-item img {
    width: 100%;
    height: 100%;
  }
  .swiper .swiper-index {
    width: auto;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 125px;
    margin-left: -25px;
  }
  .swiper-index li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    float: left;
    list-style: none;
    background-color: #fff;
    margin: 0 2px;
  }
  .bg {
    background-color: red !important;
  }
</style>
