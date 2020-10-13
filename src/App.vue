<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
// import store from './store'
import store from './store/index'
import Vue from 'vue'
import api from '@/utils/request'
import getComponent from '@/views/mixins/getComponent'
export default {
    name: 'app',
    mixins:[getComponent],
    created () {
        //store.state.AjaxUrl完成后绑定API全局
        api.service.defaults.baseURL=store.state.AjaxUrl;
        // 将API方法绑定到全局
        Vue.prototype.$api = api
    },
    computed:{
        
    },
    mounted() {
        
    },
    data(){
      return{
        
      }
    },
    methods:{
      
    },
    watch:{
      
    }
}
</script>
<style lang="less">

</style>
