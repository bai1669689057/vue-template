<template>
  <div class="fudao">
    <div class="fubox">
      <div class="fubox1">
        <p class="futit">名师辅导</p>
        <p class="fufu">教育业界翘楚 助力成长拿证</p>
      </div>
      <!-- ----------------------------- -->
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-slideO">
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-slideO">
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-slideO">
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
              <img src="../../assets/images/wm2.png" class="imgbox" />
            </div>
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
      <!-- ---------------------- -->
    </div>
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
  /* 名师辅导 */
  .fudao {
    width: 100%;
    padding: 66px 0;
    background-color: #f1f1f5;
  }
  .fubox {
    width: 62.5%;
    margin: 0 auto;
  }
  .imgbox {
    display: flex;
    justify-content: space-around;
  }
  .threeimg {
    width: 100px;
  }
  .swiper-slideO {
    display: flex;
    justify-content: space-around;
  }
  .imgbox {
    width: 30%;
    height: 40%;
    background-color: #fafafa;
  }
  .fubox1 {
    text-align: center;
  }
  .futit {
    font-size: 28px;
    color: #333333;
  }
  .fufu {
    padding: 2% 0 5% 0;
    font-size: 18px;
    color: #666666;
  }
</style>
