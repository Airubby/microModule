<template>
  <div class="content">
        <component :is="activeComponent" @backInfo="backInfo" :data="obj"></component>
  </div>
</template>

<script>
import listComponent from './list'
import addComponent from './add'
export default {
    components: {
        listComponent,addComponent    
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
                this.activeComponent=info.activeComponent;
            }else{
                this.activeComponent="listComponent";
            }
        }
    },
    
}
</script>
