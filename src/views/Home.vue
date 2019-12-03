<template>
  <div id="home">
    <Header id="nav"></Header>
    <div id="content">
      <transition>
        <router-view />
      </transition>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/header.vue'
import Footer from '@/components/home/footer.vue'
export default {
  name: 'home',
  components: {
    Header, Footer
  },
  mounted () {
    this.$nextTick(() => {
      const data = { username: 'zs', password: '123456' }
      // 数据请求
      this.$api.login(data).then((res) => {
        console.log(res)
      })
    })
  }
}
</script>
<style lang="scss" scoped>
#home{
  width: 100%;
  // height: 100%;
}
#nav {
  width: 100%;
  height: 100px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#content{
  width: 100%;
  // height: calc(100% - 580px);
}
#footer{
  width: 100%;
  // height: 480px;
}
</style>
