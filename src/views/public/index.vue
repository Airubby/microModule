<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" :class="{'no-pagination':arr.length<=1}"></div>
        <div class="swiper-wrapper" id="swiper-wrapper" :class="{'no-pagination-wrapper':arr.length<=1}">
            <div class="swiper-slide" v-for="(item,index) in arr">
                <component :is="componentArr[index]" :data="dataArr[index]" v-if="getIndex==index&&showComponent" @backInfo="backInfo"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/views/public/mixin/swiper'
export default {
    mixins:[swiper],
}
</script>
