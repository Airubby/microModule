<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in arr">
                <component :is="item.component" :data="item" v-if="getIndex==index"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/views/public/mixin/swiper'
export default {
    mixins:[swiper],
    props:["data"],
    created () {
        this.arr=this.data;
    },
}
</script>
