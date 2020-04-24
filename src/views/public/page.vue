<template>
  <div class="content">
      <public-component :data="componentArr"></public-component>
  </div>
</template>

<script>
import publicComponent from '@/views/public/index.vue'
export default {
    components: {
        publicComponent
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
