import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
// import store from './store' //用分离的store
import store from './store/index'
import axios from 'axios'
import api from './api' //用request，为每个模块的调用写一个js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSearchTablePagination from 'el-table-pagination'
import Swiper from 'swiper'  //3.4.2 打包不报错，4.+打包报错
import 'swiper/dist/css/swiper.min.css'
import tool from './utils/tool'  //工具函数
// import 'promise-polyfill'  //兼容低版本浏览器   import 'babel-polyfill'
import './utils/directive'  //自定义指令

import 'vue-transition.css'

import './assets/css/index.less'

// // 将API方法绑定到全局
Vue.prototype.$api = api
//绑定工具函数到全局
Vue.prototype.$tool = tool

Vue.prototype.$Swiper = Swiper

Vue.use(ElementUI)
Vue.use(ElSearchTablePagination)

Vue.config.productionTip = false

function getServerConfig() {
  return new Promise ((resolve, reject) => {
    axios.get('./serverConfig.json').then((result) => {
      let config = result.data;
      let ajaxUrl = process.env.NODE_ENV == 'production' ? config.production:config.develop;
      Vue.prototype.$ajaxUrl=ajaxUrl;
      store.dispatch('setAjaxUrl',ajaxUrl);
      store.dispatch('setLoginUrl',config.loginBaseUrl);
      resolve();
    }).catch((error) => {
      console.log(error)
      reject()
    })
  })
}

// import '@/permission' 
async function init() {
  await getServerConfig();
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}
init();
