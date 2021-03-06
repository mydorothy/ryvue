// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
Vue.use(vueResource);

Vue.config.productionTip = false

// 引用 iview ui组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);

// 轮播插件 swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// 跳转到指定的路由 ，设置后，路由跳转页面后 刷新又会执行 router.push('/index')跳转index页面
//router.push('/index')
