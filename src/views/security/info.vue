<template>
    <div class="content">
        <div id="swiper-container" class="swiper-container">
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper" id="swiper-wrapper">
                <div class="swiper-slide">
                    <info-door></info-door>
                </div>
                <div class="swiper-slide">
                    <info-sensor></info-sensor>
                </div>
                <div class="swiper-slide">
                    <info-card></info-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import infoCard from './infoCard.vue'
import infoDoor from './infoDoor.vue'
import infoSensor from './infoSensor.vue'
export default {
    created () {
        
    },
    mounted() {
        let _this=this;
        new this.$Swiper('#swiper-container', {
            autoplay: 0,
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 500,
            effect: 'slide',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + _this.title[index] + '</span>';
            }
        })
    },
    data(){
        return{
            title:["门禁信息","传感器信息","刷卡信息"]
        }
    },
    methods: {
      
    },
    components: {
      infoCard,infoDoor,infoSensor
    }
}
</script>
<style scoped lang="less">
    .swiper-container .swiper-wrapper .swiper-slide{
        padding: 10px 0 0 0;
    }
</style>
