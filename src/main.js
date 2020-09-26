import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

//配置axios请求的基础路径
axios.defaults.baseURL=axios;
//将axios放入vue的原型对象中
Vue.prototype.axios=axios;
//结果:将来所有组件中都可用this.axios发送请求

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
