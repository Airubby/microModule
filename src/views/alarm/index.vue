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
import swiper from '@/views/public/mixin/swiper'
import infoAlarm from './infoAlarm.vue'
export default {
    mixins:[swiper],
    components: {infoAlarm},
    created () {
        let arr=[
            {key:"AlarmDetail",component:"infoAlarm"},
        ]
        this.arr=arr;
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    methods: {
        
    },
}
</script>
<style lang="less" scoped>

</style>