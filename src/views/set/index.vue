<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide">
                <config></config>
            </div>
			<div class="swiper-slide">
                <alarm></alarm>
            </div>
            <div class="swiper-slide">
				<privilege></privilege>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import alarm from './alarm.vue'
import config from './config.vue'
import privilege from './privilege.vue'
import { mapGetters } from 'vuex'
export default {
	computed:{
        ...mapGetters([
            'token'
        ]),
    },
    created () {
        if(!this.token){
			this.$message.warning("非法进入");
			this.$router.push({path:'/loncom/home'});
		}
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
            title:["配置信息","告警参数","权限设置"]
        }
    },
	destroyed() {
		this.$store.dispatch("setToken",false);
	},
    methods: {
        
    },
    components: {
        privilege,alarm,config
    }
}
</script>
