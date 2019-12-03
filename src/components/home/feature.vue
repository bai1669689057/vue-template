<template>
  <div class="tese">
    <div class="tesebox">
      <div class="tbox">
        <div>我们的特色</div>
        <div class="lhei">教育业界翘楚 助力成长拿证</div>
      </div>

      <div class="fourli">
        <div class="flides">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>
        <div class="flides">
          <p class="lititle">全面</p>
          <p>吸引客户为会员后</p>
          <p>可针对会员针对性开发</p>
          <p>短信群发等</p>
        </div>

        <div class="flides">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>

        <div class="flides flidest">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>
      </div>
      <!-- 第二行 -->
      <div class="fourli fourli2">
        <div class="flides">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>
        <div class="flides">
          <p class="lititle">全面</p>
          <p>吸引客户为会员后</p>
          <p>可针对会员针对性开发</p>
          <p>短信群发等</p>
        </div>

        <div class="flides">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>

        <div class="flides flidest">
          <p class="lititle">专业</p>
          <p>为你的店铺吸引不同的客户</p>
          <p>附近的小程序</p>
          <p>搜索小程序让更多的人找到你</p>
        </div>
      </div>
      <!-- 第二行结束 -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .tese {
    width: 100%;
    height: 600px;
    background: url(../../assets/images/bg.png);
  }
  .tesebox {
    width: 62.5%;
    margin: 0 auto;
  }
  .tbox {
    text-align: center;
    padding: 30px 0;
    font-size: 28px;
    color: #333333;
  }
  .lhei {
    margin-top: 15px;
    font-size: 18px;
    color: #666666;
  }

  .fourli {
    display: flex;
    justify-content: space-around;
  }
  .flides {
    text-align: center;
    font-size: 12px;
    background: #ffffff;
    color: #777777;
    padding: 4% 1%;
    width: 24%;
    margin-right: 2%;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
  .flidest {
    margin-right: 0;
  }
  .lititle {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333333;
  }
  .fourli2 {
    margin-top: 56px;
  }
</style>
