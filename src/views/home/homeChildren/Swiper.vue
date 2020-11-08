<template>
  <div class="swiper">
    <ul class="swiper-item">
      <li v-for="(item,index) in banners" :key="index" v-show="index===mark">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </li>
    </ul>
    <ul class="swiper-index">
      <li v-for="(item,index) in banners" :key="index" :class="{'curr':index===mark}"></li>
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
        mark: 0,
        speed: 10,
        num: 0,
        isLoad: false
      }
    },
    created() {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
      this.auto()
    },
    methods: {
      auto() {
        setInterval(() => {
          this.mark++
          if(this.mark === 4) {
            this.mark = 0
          }
        },2000)
      },
      imgLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    },
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
    top: 0;
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
  .curr {
    background-color: red !important;
  }
</style>
