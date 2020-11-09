<template>
  <div class="recommend">
    <div class="floorOne" :class="{zIndex:num===0}">
      <a href="" v-for="item in recommendTwo">
        <img :src="item.url" alt="">
        <span>{{item.name}}</span>
      </a>
    </div>

    <div class="floorTwo">
      <a href="" v-for="item in recommendOne" :class="{zIndex:num===1}">
        <img :src="item.url" alt="">
        <span>{{item.name}}</span>
      </a>
    </div>

    <div class="page">
      <ul>
        <li v-for="(item,index) in 2" :class="{bgc:num===index}" @click="toggle(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        recommendOne: [
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
            name: '京东超市'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
            name: '数码电器'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp',
            name: '京东服饰'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
            name: '京东生鲜'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
            name: '京东到家'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
            name: '充值缴费'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp',
            name: '9.9元拼'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
            name: '领券'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129184/28/5977/3711/5efbf53aE2c2e6a07/7db529ce0e00838f.png.webp',
            name: '借钱'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
            name: 'PLUS会员'
          },
        ],
        recommendTwo: [
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/142596/7/1864/4759/5efbf5a9E60c62b8a/49cdd24cb2bfecf5.png.webp',
            name: '京东国际'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125193/15/5993/3443/5efbf5dbEa3327124/a4282d5cb2879c8b.png.webp',
            name: '京东拍卖'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/133947/24/3428/4213/5efbf625E7e1b4e98/95fda84d8748f88d.png.webp',
            name: '唯品会'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/145692/9/1817/4493/5efbf652E61c4f3ec/722840c121d67fc6.png.webp',
            name: '玩3C'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/118396/30/11271/2692/5efbf680Eb3a3cf32/c3e85c4d99746400.png.webp',
            name: '沃尔玛'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123571/19/6008/3747/5efbf6b2E03153a36/9ddc9036ba1c11a1.png.webp',
            name: '美妆馆'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/115003/18/11199/3519/5efbf6eaEe59cb7f6/dab44230606cd112.png.webp',
            name: '京东旅行'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/142258/17/1800/4509/5efbf70aEb23e164e/61aaea8fe5221081.png.webp',
            name: '拍拍二手'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116056/30/11288/4223/5efbf753Ee7cf2cd7/3977b5fe42b136e4.png.webp',
            name: '物流查询'
          },
          {
            url: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/112559/35/11283/3523/5efbf774E285d108b/c0fa626df4979a21.png.webp',
            name: '全部'
          }
        ],
        num: 0
      }
    },
    methods: {
      toggle(index) {
        this.num = index
      }
    }
  }
</script>

<style scoped>
  a {
    width: 74px;
    height: 74px;
    display: block;
    float: left;
    font-size: 12px;
    text-align: center;
  }
  img {
    width: 40px;
    height: 40px;
    display: block;
    margin: 10px 0 6px 18px;
  }
  .recommend {
    width: 100%;
    height: 162px;
    position: relative;
    overflow: hidden;
  }
  .floorOne,.floorTwo {
    width: 375px;
    height: 162px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .zIndex {
    display: none;
  }

  .page {
    width: 375px;
    height: 8px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .page ul {
    list-style: none;
    width: 22px;
    height: 6px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -11px;
  }
  .page li {
    float: left;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 5px;
  }
  .bgc {
    background-color: #FA2C19 !important;
  }
</style>
