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
            {key:"MDCinverter",component:"MdcinverterComponent"},
            {key:"Tiprealdata",component:"TiprealdataComponent"},
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
