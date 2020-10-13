import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
// import store from './store' //用分离的store
import store from './store/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElTablePagination from 'el-table-pagination'
import Swiper from 'swiper'  
import 'swiper/css/swiper.min.css'
import tool from './utils/tool'  //工具函数 
import 'babel-polyfill'
import 'promise-polyfill'
import './utils/directive'  //自定义指令
import Cookies from 'js-cookie'

import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

import './assets/css/index.less'


//绑定工具函数到全局
Vue.prototype.$tool = tool

Vue.prototype.$store=store

Vue.prototype.$Swiper = Swiper

Vue.use(ElTablePagination)

// //加载组件
// import './components/Global/index.js'


Vue.config.productionTip = false

let i18n=''
function getServerConfig() {
  return new Promise ((resolve, reject) => {
    axios.get('/serverConfig.json').then((result) => {
      console.log(result)
      let config = result.data;
      let ajaxUrl = process.env.NODE_ENV == 'production' ? config.production:config.develop;
      Vue.prototype.$ajaxUrl=ajaxUrl;
      store.dispatch('setAjaxUrl',ajaxUrl);
      store.dispatch('setConfig',config.config);
      resolve();
    }).catch((error) => {
      console.log(error)
      reject()
    })
  })
}
function getLanguage() {
  return new Promise ((resolve, reject) => {
    axios.get('/language.json').then((result) => {
      let config = result.data;
      const enLocale=config.enLang
      const zhLocale=config.zhLang
      Vue.use(VueI18n)
      const messages = {
        en: {
          ...enLocale,
          ...elementEnLocale
        },
        zh: {
          ...zhLocale,
          ...elementZhLocale
        }
      }
      i18n = new VueI18n({
        locale: Cookies.get('language') || config.language || store.state.language, // set locale
        messages // set locale messages
      })
      Vue.use(ElementUI,{
        size: 'small', // set element-ui default size
        i18n: (key, value) => i18n.t(key, value)
      })
      resolve();
    }).catch((error) => {
      console.log(error)
      reject()
    })
  })
}

async function init() {
  await getServerConfig();
  await getLanguage();
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
  }).$mount('#app')
}
init();
