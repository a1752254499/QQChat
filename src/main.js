// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)
Vue.component('datetime', Datetime);

import H5Cropper from 'vue-cropper-h5'
Vue.use(H5Cropper)

import http from "./http"
Vue.prototype.$http = http;

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})
import './assets/fonts/icon/css/font-awesome.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
