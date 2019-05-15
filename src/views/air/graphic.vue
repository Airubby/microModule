<template>
    <div class="content">
        <div id="swiper-container" class="swiper-container">
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <div class="swiper-wrapper" id="swiper-wrapper">
                <div class="swiper-slide">
                    <graphic-humiture></graphic-humiture>
                </div>
                <div class="swiper-slide">
                    <graphic-forreturn></graphic-forreturn>
                </div>
                <div class="swiper-slide">
                    <graphic-draught></graphic-draught>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import graphicDraught from './graphicDraught.vue'
import graphicForreturn from './graphicForreturn.vue'
import graphicHumiture from './graphicHumiture.vue'
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
            title:["温湿度图示","供回水图示","风机与水阀图示"]
        }
    },
    methods: {
      
    },
    components: {
      graphicHumiture,graphicForreturn,graphicDraught
    }
}
</script>
<style scoped lang="less">
    .swiper-container .swiper-wrapper .swiper-slide{
        padding: 0;
    }
</style>
