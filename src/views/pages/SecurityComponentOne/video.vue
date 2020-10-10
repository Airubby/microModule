<template>
    <el-dialog :title="$t('securityPolicySet')" :visible.sync="dialogInfo.visible" width="660px" v-dialogDrag append-to-body :close-on-click-modal="false">
        <el-scrollbar style="height:290px;" class="scrollbar">
            
        </el-scrollbar>
    </el-dialog>
</template>

<script>
import {VideoPlayer} from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            
        }
    },
    methods:{
        

    },
    watch:{
        
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
