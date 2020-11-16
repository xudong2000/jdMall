<template>
  <div class="detail-bottom-bar">
    <div class="store">
      <i><img src="../../../assets/img/detail/store1.png" alt=""></i>
      <span>店铺</span>
    </div>

    <div class="service">
      <i><img src="../../../assets/img/detail/service.png" alt=""></i>
      <span>客服</span>
    </div>

    <div class="cart">
      <i><img src="../../../assets/img/detail/cart.png" alt=""></i>
      <span>购物车</span>
    </div>

    <div class="addCart">
      <span @click="addToCart">加入购物车</span>
    </div>

    <div class="buyNow">
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        console.log('已添加到购物车')
        this.$emit('addCart')
      }
    },
  }
</script>

<style scoped>
  i {
    width: 20px;
    height: 25px;
    display: block;
    margin: 6px 0 3px 16px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .detail-bottom-bar {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 6px 0 #ccc;
    background-color: #fff;
  }
  .store,.service,.cart {
    width: 14%;
    height: 50px;
    float: left;
    font-size: 12px;
    text-align: center;
  }
  .addCart,.buyNow {
    width: 28%;
    height: 38px;
    float: left;
    margin-left: 3px;
    margin-top: 6px;
    border-radius: 20px;
    color: #fff;
    font-size: 13px;
    line-height: 38px;
    text-align: center;
  }
  .addCart {
    background: linear-gradient(to right,#DB5EF0,#B507EC) !important;
  }
  .buyNow {
    background: linear-gradient(to right,#FF627C,#FF0D0D) !important;
  }
</style>
