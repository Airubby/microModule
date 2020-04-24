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

        // 最后一次键盘鼠标操作的时间
        var lastOperateTime = new Date();
        // 启动屏保时间，默认 30 秒
        var SCREENSAVER_TIME = 30*60*1000;
        // 当用户执行键盘、鼠标操作后，执行的函数
        function afterOperate() {
            var thisOperateTime = lastOperateTime = new Date();
            setTimeout(function(){
                if(thisOperateTime === lastOperateTime) {
                    // 启动屏保
                    console.log("启动屏保")
                } else {
                    // 此后，用户又进行了操作，所以不启动屏保
                    console.log("用户又进行了操作，所以不启动屏保")
                }
            }, SCREENSAVER_TIME);
        }
        // 注册事件
        document.onmousedown = afterOperate;
        document.onscroll = afterOperate;
        document.onkeypress = afterOperate;
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
