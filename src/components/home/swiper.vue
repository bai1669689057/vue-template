<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/images/title.png" class="imgi" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/title.png" class="imgi" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/title.png" class="imgi" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/title.png" class="imgi" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/images/title.png" class="imgi" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted () {
    this.$nextTick(() => {
      const swiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项

        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
      console.log(swiper)
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    font-size: 0;
  }
  .imgi {
    width: 100%;
  }
</style>
