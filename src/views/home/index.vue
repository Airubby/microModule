<template>
  <div class="content">
        <component :is="currentView"></component>
  </div>
</template>

<script>
export default {
    created () {
        this.currentView="IndexComponent"
    },
    mounted() {
        
    },
    data(){
        return{
            currentView:""
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
