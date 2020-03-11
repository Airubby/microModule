<template>
  <div class="content">
    <public-component></public-component>
  </div>
</template>

<script>
import index from '@/views/public/mixin/index'
export default {
    mixins:[index],
    created () {
        let arr=[
            {key:"CircuitMap",component:"CircuitMapComponent"},
            {key:"BatteryA",component:"BatteryAComponent"},
            {key:"BatteryB",component:"BatteryBComponent"},
            {key:"BatteryC",component:"BatteryCComponent"},
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
