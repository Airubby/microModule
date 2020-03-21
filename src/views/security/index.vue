<template>
  <div class="content">
      <public-component :data="arr"></public-component>
  </div>
</template>

<script>
import index from '@/views/public/mixin/index'
export default {
    mixins:[index],
    created () {
        let arr=[
            {key:"SecurityStatus",component:"SecurityComponent"},
            {key:"AccessInfo",component:"AccessComponent"},
            {key:"SensorInfo",component:"SensorComponent"},
        ]
        this.arr=arr;
    },
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
