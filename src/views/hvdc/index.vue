<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide">
                <diagram></diagram>
            </div>
            <div class="swiper-slide">
                <rectification ref="resize"></rectification>
            </div>
            <div class="swiper-slide">
                <battery-a ref="resizea"></battery-a>
            </div>
            <div class="swiper-slide">
                <battery-b ref="resizeb"></battery-b>
            </div>
            <div class="swiper-slide">
                <battery-c ref="resizec"></battery-c>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import diagram from './diagram.vue'
import rectification from './rectification.vue'
import batteryA from './batteryA.vue'
import batteryB from './batteryB.vue'
import batteryC from './batteryC.vue'
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
            title:["电路图","整流","电池组A","电池组B","电池组C"]
        }
    },
    methods: {
        
    },
    components: {
        diagram,rectification,batteryA,batteryB,batteryC
    }
}
</script>
