<template>
    <div class="content">
        <component :is="activeComponent" @backInfo="backInfo" :data="obj"></component>
    </div>
</template>

<script>
import listComponent from './list.vue'
import planComponent from './plan.vue'
import backupsComponent from './backups.vue'
export default {
    components: {
        listComponent,planComponent,backupsComponent
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            activeComponent:"listComponent",
            obj:null
        }
    },
    methods: {
        backInfo:function(info){
            console.log(info)
            if(info){
                this.obj=info;
                this.activeComponent=info.activeComponent
            }else{
                this.activeComponent="listComponent";
            }
        }
    },
    
}
</script>
<style lang="less" scoped>
    
</style>