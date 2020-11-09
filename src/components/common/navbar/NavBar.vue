<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        <div class="cate">
          <img src="../../../assets/img/navbar/cate.png" alt="">
        </div>
      </slot>
    </div>

    <slot name="center">
      <div class="center">
        <i class="jd"><img src="../../../assets/img/navbar/jd.png" alt=""></i>
        <i class="search"><img src="../../../assets/img/navbar/search.png" alt=""></i>
        <input type="text" placeholder="iPhone12">
      </div>
    </slot>

    <div class="right">
      <slot name="right">
        <div class="user">
          <img src="../../../assets/img/navbar/user.png" alt="">
        </div>
      </slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 44px;
    display: flex;
  }
  .nav-bar div {
    line-height: 44px;
    text-align: center;
    color: #fff;
  }

  .left, .right {
    flex: 1;
    cursor: pointer;
  }
  .left .cate {
    padding-top: 8px;
  }

  .right .user {
    padding-top: 6px;
  }
  .right .user img {
    width: 22px;
    height: 22px;
  }

  .center {
    flex: 6;
    background-color: #fff;
    padding: 1px 1px 1px 1px;
    border-radius: 15px;
    margin: 8px 0;
    overflow: hidden;
    position: relative;
  }
  .center input {
    width: 78%;
    border: none;
    outline: none;
    float: right;
    margin-top: 6px;
    margin-right: 26px;
    color: #333;
    font-size: 12px;
  }
  .center .search {
    position: absolute;
    right: 7px;
    top: -4px;
    cursor: pointer;
  }
  .center .jd {
    position: absolute;
    left: 10px;
    top: -4px;
  }
  .center .jd img {
    width: 18px;
    height: 18px;
  }
</style>
