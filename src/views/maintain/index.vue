<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
                <component :is="item"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import DevManage from './dev'
import InterfaceManage from './interface'
import GangedManage from './ganged'
import UserManage from './user'
import LogManage from './log'
import SysManage from './sys'
export default {
    components: {DevManage,InterfaceManage,GangedManage,UserManage,LogManage,SysManage},
    created () {
        
    },
    
    mounted() {
        let _this=this;
        new this.$Swiper('#swiper-container', {
            autoplay: 0,
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 100,
            effect: 'slide',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + _this.$t(_this.arr[index]) + '</span>';
            }
        })
    },
    data(){
        return{
            arr:["DevManage","InterfaceManage","GangedManage","UserManage","LogManage","SysManage"],
        }
    },
    methods: {
        
    },
    
}
</script>
