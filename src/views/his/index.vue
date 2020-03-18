<template>
    <div class="content">
        <component :is="currentView" @backInfo="backInfo" :data="obj"></component>
    </div>
</template>

<script>
export default {
    created () {
        this.currentView="HisComponent"
    },
    mounted() {
        
    },
    data(){
        return{
            currentView:"",
            obj:null
        }
    },
    methods: {
        backInfo:function(info){
            console.log(info)
            if(info){
                this.obj=info;
                this.currentView=info.activeComponent;
            }
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    
</style>