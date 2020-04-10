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
        this.changeComponent();
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
      changeComponent:function(){
        let val=this.$route;
        let config=this.$store.state.config;
        for(let i=0;i<config.length;i++){
            if(config[i].component==val.name){
              store.dispatch("setComponentArr",config[i].item);
            }
        }
      }
    },
    watch:{
      $route:function(){
        this.changeComponent();
      }
    }
  }
</script>
<style lang="less">

</style>
