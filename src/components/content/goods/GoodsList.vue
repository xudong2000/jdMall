<template>
  <div class="goods-list">
    <ul class="goods-ul">
      <li v-for="(item,index) in goods" :key="index" @click="goodsItemClick(index)">
        <a href="javascript:;">
         <div class="goods-img">
           <img :src="item.img" alt="">
         </div>
          <span class="info">{{item.text}}</span>
          <p class="price">￥{{item.price}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      },
      data() {
        return {
          currId: ''
        }
      }
    },
    methods: {
      goodsItemClick(index) {
        this.currId = this.goods[index].id
        this.$store.state.currItem = this.currId
        this.$router.push('/detail/'+this.currId)
      }
    }
  }
</script>

<style scoped>
  a,img {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 13px;
    color: #1a1a1a;
  }
  .goods-list {
    margin-left: .7rem;
    margin-top: .7rem;
    margin-bottom: 2.7rem;
    overflow: hidden;
  }
  .goods-ul {
    width: 100%;
    height: 100%;
    list-style: none;
    background-color: red;
  }
  .goods-ul li {
    width: 170px;
    height: 270px;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
    background-color: #fff;
  }
  .goods-ul .goods-img {
    width: 170px;
    height: 170px;
  }
  .goods-ul .info {
    width: 100%;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 5px 0;
    padding-left: 5px;
  }
  .goods-ul .price {
    font-size: 16px;
    color: #fa2c19;
    padding-left: 5px;
  }
</style>
