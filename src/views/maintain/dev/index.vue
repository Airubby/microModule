<template>
  <div class="content">
        <component :is="activeComponent" @backInfo="backInfo" :data="obj"></component>
  </div>
</template>

<script>
import list from './list'
import detail from './detail'
export default {
    components: {
        list,detail    
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
                this.activeComponent="detail"
            }else{
                this.activeComponent="list";
            }
        }
    },
    
}
</script>
