<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name="scroll"></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BSscroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: true,
        click: true
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position.y)
      })

      // 3.监听滚动到底部
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')

        setTimeout(() => {
          this.scroll.finishPullUp()
        },2000)
      })
    },
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      }
    }
  }
</script>

<style scoped>

</style>
