<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in arr">
                <component :is="item.component"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    created () {
        let arr=[
            {key:"CircuitMap",component:"CircuitMapComponent"},
            {key:"BatteryA",component:"BatteryAComponent"},
            {key:"BatteryB",component:"BatteryBComponent"},
            {key:"BatteryC",component:"BatteryCComponent"},
        ]
        this.arr=arr;
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
                return '<span class="' + className + '">' + _this.$t(_this.arr[index]["key"]) + '</span>';
            }
        })
    },
    data(){
        return{
            arr:[],
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
