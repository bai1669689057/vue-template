<template>
  <div class="fourdes">
      <!--定位 -->
      <div class="buydes">
        <div>
          <div class="nums">
            10
            <p class="jia">+</p>
          </div>
          <p class="descolor">10种教育课程</p>
        </div>

        <div>
          <div class="nums">
            100
            <p class="jia">+</p>
          </div>
          <p class="descolor">平均每个课程平均在线人数</p>
        </div>
        <div>
          <div class="nums numbes">
            500
            <p class="jia jiaj">+</p>
          </div>
          <p class="descolor">所有课程购买次数超过500次</p>
        </div>
      </div>

      <!--定位结束-->

      <div class="imgdes">
        <div>
          <div class="touimg"><img src="../../assets/images/person.png" alt="" /></div>
          <div class="mask">名师授课</div>
        </div>
        <div>
          <div class="touimg"><img src="../../assets/images/book.png" alt="" /></div>
          <div class="mask">名师授课</div>
        </div>
        <div>
          <div class="touimg">
            <img src="../../assets/images/iconfont-fuzhi.png" alt="" />
          </div>
          <div class="mask">名师授课</div>
        </div>
        <div>
          <div class="touimg"><img src="../../assets/images/work.png" alt="" /></div>
          <div class="mask">名师授课</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .fourdes {
      width: 62.5%;
      height: 300px;
      margin: 0 auto;
      padding-bottom: 15px;
    }
    .imgdes {
      display: flex;
      justify-content: space-around;
    }
    .mask {
      font-size: 20px;
      color: #333333;
    }
      /* 定位 */
    .buydes {
      width: 100%;
      height: 169px;
      background: white;
      position: relative;
      z-index: 2;
      left: 50%;
      margin-left: -50%;
      top: -26px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 1px 1px 5px gainsboro;
    }
    .nums {
      position: relative;
      text-align: center;
      font-size: 39px;
    }
    .jia {
      position: absolute;
      left: 68%;
      top: -10px;
      font-size: 26px;
      color: #666666;
    }
    .numbes,
    .jiaj {
      color: #e6bb3b;
    }
    .descolor {
      font-size: 14px;
      color: #999999;
      margin-top: 5px;
    }
</style>
