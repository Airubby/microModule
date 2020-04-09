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
            {key:"IndexComponent",component:"IndexComponent"},
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
