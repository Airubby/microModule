<template>
  <div class="content">
        <component :is="activeComponent" @backInfo="backInfo" :data="obj"></component>
  </div>
</template>

<script>
import list from './list'
import edit from './edit'
export default {
    components: {
        list,edit    
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            activeComponent:"list",
            obj:null
        }
    },
    methods: {
        backInfo:function(info){
            console.log(info)
            if(info){
                this.obj=info;
                this.activeComponent="edit"
            }else{
                this.activeComponent="list";
            }
        }
    },
    
}
</script>
