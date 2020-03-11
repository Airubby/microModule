<template>
  <div class="content">
        <component :is="currentView"></component>
  </div>
</template>

<script>
export default {
    created () {
        this.currentView="indexComponent"
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
