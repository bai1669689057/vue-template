<template>
    <div class="footer">
      <div class="footbox">
        <!-- 第一行 -->
        <div class="footboxO">
          <div class="boxl">
            <span class="shouqian">售前咨询热线</span>
            <span class="tel">400-400-4000</span>
          </div>
          <div>
            <img src="../../assets/images/weibo.png" class="wq" />
            <img src="../../assets/images/weixin.png" class="wq" />
            <img src="../../assets/images/guanlian.png" class="wq" />
            <img src="../../assets/images/qq.png" class="wq" />
          </div>
        </div>

        <!-- 第一行结束 -->
        <div class="foott">
          <div class="footul">
            <ul class="shuli">
              <li class="liFrist">新手指南</li>
              <li>如何注册</li>
              <li>如何看课程</li>
              <li>如何使用视频</li>
            </ul>
            <ul class="shuli">
              <li class="liFrist">账号与支持</li>
              <li>如何注册</li>
              <li>如何看课程</li>
              <li>如何使用视频</li>
            </ul>
            <ul class="shuli">
              <li class="liFrist">快速入门</li>
              <li>如何注册</li>
              <li>如何看课程</li>
              <li>如何使用视频</li>
            </ul>
            <ul class="shuli">
              <li class="liFrist">招盟加商</li>
              <li>如何注册</li>
              <li>如何看课程</li>
              <li>如何使用视频</li>
            </ul>
            <ul class="shuli">
              <li class="liFrist">关注我们</li>
              <li>如何注册</li>
              <li>如何看课程</li>
              <li>如何使用视频</li>
            </ul>
          </div>

          <div class="weimabox">
            <p class="gongzhong">泓昇教育公众号</p>
            <p><img src="../../assets/images/erweima.png" /></p>
          </div>
        </div>

        <!-- 第三行 -->
        <div class="fftt">
          <ul class="footg">
            <li>关于我们</li>
            <li>法律声明</li>
            <li>帮助中心</li>
            <li>招商代理</li>
            <li>资费说明</li>
            <li>新闻动态</li>
            <li>友情链接</li>
          </ul>
        </div>
        <!-- 第三行结束 -->
        <div class="footimg"><img src="../../assets/images/logo2.png" alt="" /></div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer {
      width: 100%;
      background-color: #373d41;
    }
    .footbox {
      width: 62.5%;
      margin: 0 auto;
    }

    .footboxO {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 13px 0;
      border-bottom: 0.05px solid #454b50;
    }
    .boxl {
      opacity: 0.8;
    }
    .wq {
      width: 44px;
      height: 44px;
    }
    .shouqian {
      font-size: 18px;
      color: #9b9ea0;
    }
    .tel {
      font-size: 30px;
      color: #c2c2c2;
      margin-left: 30px;
      font-weight: bold;
    }
    .foott,
    .footul {
      display: flex;
      justify-content: space-between;
    }
    .foott {
      border-bottom: 0.05px solid #454b50;
      padding-bottom: 40px;
    }
    .footul {
      width: 75%;
      padding: 32.33px 0;
    }
    .liFrist {
      font-size: 16px;
      color: #aaaaaa;
    }
    .shuli {
      font-size: 14px;
      line-height: 26px;
      color: #73777a;
    }
    .weimabox {
      text-align: center;
      padding-right: 50px;
    }
    .weimabox img {
      width: 135px;
    }
    .gongzhong {
      padding: 13px 0 22px 0;
    }
    .fftt {
      border-bottom: 0.05px solid #454b50;
    }
    .footg {
      width: 60%;
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      color: #aaaaaa;
      font-size: 16px;
    }
    .footimg {
      text-align: center;
      padding: 25px;
    }
    .footimg img {
      width: 229px;
      height: 74px;
    }
</style>
