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
            {key:"CircuitMap",component:"CircuitMapComponent"},
            {key:"BatteryA",component:"BatteryComponent"},
            {key:"BatteryB",component:"BatteryComponent"},
            {key:"BatteryC",component:"BatteryComponent"},
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
