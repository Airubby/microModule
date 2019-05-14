<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide">
                <info-alarm></info-alarm>
            </div>
            <div class="swiper-slide">
                <info-alarm></info-alarm>
            </div>
            <div class="swiper-slide">
                <info-alarm></info-alarm>
            </div>
            <div class="swiper-slide">
                <info-alarm></info-alarm>
            </div>
            <div class="swiper-slide">
                <info-alarm></info-alarm>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import infoAlarm from './infoAlarm.vue'
export default {
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
                return '<span class="' + className + ' slide'+index+'">' + _this.title[index] + '</span>';
            }
        })
    },
    data(){
        return{
            title:["所有告警","紧急告警","重要告警","一般告警","提示"]
        }
    },
    methods: {
        
    },
    components: {
        infoAlarm
    }
}
</script>
<style lang="less" scoped>

</style>