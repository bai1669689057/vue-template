import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import API from './api/index'
import './assets/scss/index.scss'
Vue.config.productionTip = false
Vue.prototype.$api = new API()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
