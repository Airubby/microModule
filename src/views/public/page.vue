<template>
  <div class="content">
      <public-component :data="componentArr"></public-component>
  </div>
</template>

<script>
import index from '@/views/public/mixin/index'
export default {
    mixins:[index],
    created () {
        
    },
    computed:{
        componentArr: {
            get() {
                return this.$store.state.componentArr
            },
        },
    },
}
</script>
