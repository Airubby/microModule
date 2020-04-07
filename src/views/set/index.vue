<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in arr">
                <component :is="item.component" :data="item"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ConfigInfoComponent from './configInfo'
import NewsInformComponent from './newsInform'
import AlarmEventComponent from './alarmEvent'
import AlarmMaskComponent from './alarmMask'
import LimitSetComponent from './limitSet'
import DataPublishComponent from './dataPublish'

import swiper from '@/views/public/mixin/swiper'
// import { mapGetters } from 'vuex'
export default {
    mixins:[swiper],
    components: {ConfigInfoComponent,NewsInformComponent,AlarmEventComponent,AlarmMaskComponent,LimitSetComponent,DataPublishComponent},
	// computed:{
    //     ...mapGetters([
    //         'token'
    //     ]),
    // },
    created () {
        // if(!this.token){
		// 	// this.$message.warning("非法进入");
		// 	// this.$router.push({path:'/loncom/home'});
        // }
        let arr=[
            {key:"ConfigInfo",component:"ConfigInfoComponent"},
            {key:"NewsInform",component:"NewsInformComponent"},
            {key:"AlarmEvent",component:"AlarmEventComponent"},
            {key:"AlarmMask",component:"AlarmMaskComponent"},
            {key:"LimitSet",component:"LimitSetComponent"},
            // {key:"DataPublish",component:"DataPublishComponent"},
        ]
        this.arr=arr;
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
	destroyed() {
		this.$store.dispatch("setToken",false);
	},
    methods: {
        
    },
    
}
</script>
