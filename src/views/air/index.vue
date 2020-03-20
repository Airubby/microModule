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
            {key:"HumitureChart",component:"HumitureComponent"},
            {key:"ForTheReturnChart",component:"ForTheReturnComponent"},
            {key:"FanAndWaterChart",component:"FanAndWaterComponent"},
            {key:"AirRealData",component:"AirRealDataComponent"},
        ]
        this.arr=arr;
    },
    mounted() {
        
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
