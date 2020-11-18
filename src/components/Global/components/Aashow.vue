<template>
  <span>
      <em v-if="priceStatus=='btn'">登录查看</em>
      <em v-else-if="priceStatus=='hidden'">***</em>
      <em v-else>{{value}}</em>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:["value"],
    created () {
        this.showFn();
    },
    computed:{
        ...mapGetters([
            'priceStatus'
        ]),
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    methods: {
        showFn:function(){
            console.log(this.priceStatus)
        }
    },
    watch:{
        priceStatus:function(){
            this.showFn()
        }
    }
}
</script>
