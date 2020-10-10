<template>
    <pageIndex :currentConfig="currentConfig"></pageIndex>
</template>

<script>
import pageIndex from '@/views/public/pageHasIndex'
export default {
    components: {pageIndex},
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            currentConfig:[
                {key:"DevManage",language:"DevManage"},{key:"InterfaceManage",language:"InterfaceManage"},
                {key:"GangedManage",language:"GangedManage"},{key:"UserManage",language:"UserManage"},
                {key:"LogManage",language:"LogManage"},{key:"SysManage",language:"SysManage"}
            ]
        }
    },
    methods: {
        
    },
    
}
</script>
