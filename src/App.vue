<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
// import store from './store'
import store from './store/index'
import Vue from 'vue'
  export default {
    name: 'app',
    created () {
        
    },
    computed:{
        
    },
    mounted() {
        // this.$tool.wsConnection("",function(result){
        //   store.dispatch('setwsData',eval(result.data));
        // })
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
