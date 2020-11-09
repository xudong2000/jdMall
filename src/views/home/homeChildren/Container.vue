<template>
  <div class="container">
    <div class="container-l">
      <a href="">
        <img src="../../../assets/img/home/left.png" alt="">

        <a href="" class="l-a">
          <div class="l-div">
            <img src="../../../assets/img/home/book.jpg" alt="">
          </div>
          <span style="align-content: center">爆品直降</span>
        </a>
      </a>
    </div>

    <div class="container-c">
      <a href="">
        <img src="../../../assets/img/home/center.gif" alt="">

        <a href="" class="c-a-l">
          <div class="c-div">
            <img src="../../../assets/img/home/food.jpg" alt="">
          </div>
        </a>

        <a href="" class="c-a-r">
          <div class="c-div">
            <img src="../../../assets/img/home/shoe.jpg" alt="">
          </div>
        </a>
      </a>
    </div>

    <div class="container-r">
      <a href="">
        <img src="../../../assets/img/home/right.png" alt="">

        <a href="" class="r-a">
          <div class="r-div">
            <img src="../../../assets/img/home/phone.jpg" alt="">
          </div>
          <span style="align-content: center">手机通讯</span>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Container"
  }
</script>

<style scoped>
  a {
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 12px;
    display: block;
    line-height: 20px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .container {
    width: 100%;
    height: 115px;
    display: flex;
  }
  .container-l,.container-r {
    width: 90px;
    height: 100%;
    position: relative;
  }
  .l-a,.r-a {
    position: absolute;
    width: 65px;
    height: 85px;
  }
  .l-div,.r-div {
    width: 65px;
    height: 65px;
  }
  .l-a {
    left: 16px;
    top: 24px;
  }
  .r-a {
    left: 10px;
    top: 24px;
  }

  .container-c {
    width: 195px;
    position: relative;
  }
  .c-a-l,.c-a-r {
    position: absolute;
    width: 70px;
    height: 65px;
  }
  .c-div {
    width: 71px;
    height: 65px;
  }
  .c-a-l {
    left: 18px;
    top: 20px;
  }
  .c-a-r {
    right: 18px;
    top: 20px;
  }
</style>
