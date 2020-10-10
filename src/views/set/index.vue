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
                {key:"AlarmEvent",language:"AlarmEvent"},{key:"AlarmMask",language:"AlarmMask"},
                {key:"LimitSet",language:"LimitSet"},{key:"DataPublish",language:"DataPublish"},
                {key:"NewsInform",language:"NewsInform"},{key:"ConfigInfo",language:"ConfigInfo"}
            ]
        }
    },
    methods: {
        
    },
    
}
</script>
