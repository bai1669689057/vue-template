<template>
  <div class="header">
    <div class="ltitle">
      <div class="ltitleTop">
        <!-- 名字及登陆注册 -->
        <div class="topname">
          <div class="topcenter">
            <div class="nameshow">
              <span class="spanl">河南鸿晟教育有限责任公司</span>
              <span>咨询电话 : 400-XXX-XXXX</span>
            </div>
            <div class="login">
              <a href="#" class="centera">登陆</a>
              <a href="#">注册</a>
            </div>
          </div>
        </div>
        <!-- 公司相关信息 -->
        <div class="topdes">
          <div class="centerT">
            <!-- 左侧 -->
            <div class="logodes">
              <img src="../../assets/images/logo1.png" alt="" />
            </div>
            <!-- 右侧 -->
            <ul class="list">
              <li class="jqid" v-for="(menu,index) in menuList" :key="index">
                <a href="javascript:void(0);" :class="{'selected' : currentMune === menu.url}" @click="handleMenu(menu.url)">{{menu.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuList:[{url:'/index',title:'首页'},{url:'/classCenter',title:'课程中心'},{url:'/practiceCenter',title:'题库练习'},{url:'/newsCenter',title:'新闻中心'},{url:'/liveCenter',title:'直播'},{url:'/about',title:'联系我们'}]
    }
  },
  computed: {
  // 计算属性 相当于一个方法 拿到当前路由
   currentMune () {
      console.log(this.$route.path)
      return '/' + this.$route.path.split('/').slice(1, 2).join('/')
    },
  },
  methods: {
    handleMenu (url) {
      this.$router.push({ path: url, query: {} })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 100%;
  }
  .ltitle {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .ltitleTop {
    width: 100%;

    z-index: 1;
  }
  .topname {
    width: 100%;
    height: 36px;
    line-height: 36px;
    /* padding: 8px 0; */
    background: #0d3f4d;
    margin: 0 auto;
    color: #c0c0c4;
  }
  .topcenter {
    width: 62.5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #c0c0c4;
  }

  .login a {
    color: #ffffff;
    text-decoration: none;
    font-size: 12px;
    color: #c0c0c4;
  }
  .spanl {
    padding-right: 15px;
  }
  .centera {
    padding-right: 25px;
  }
  .topdes {
    width: 100%;
    height: 70px;
    /* line-height: 70px; */
    background: #ffffff;
    box-shadow: 2px 2px 3px grey;
  }
  .centerT {
    width: 62.5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #333333;
  }

  .list {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .jqid a{
    display: inline-block;
    // padding: 24px 0;
    margin: 0 20px;
    color: #333333;
    height: 70px;
    line-height: 70px;
  }
  .jqid a:hover{
    color: #02404f;
    border-bottom: 3px solid #02404f;
  }
  .jqid a.selected{
    color: #02404f;
    border-bottom: 3px solid #02404f;
  }
  .jqclass {
    padding-right: none;
  }
  .changecolor {
    color: #02404f;
    /* font-weight: bold; */
    border-bottom: 3px solid #02404f;
  }
</style>
