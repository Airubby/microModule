export default {
    created () {
    },
    mounted() {
        this.activeIndex=sessionStorage.activeIndex?sessionStorage.activeIndex:0;
        let _this=this;
        new this.$Swiper('#swiper-container', {
            autoplay: 0,
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 100,
            effect: 'slide',
            simulateTouch:false,  //鼠标拖动无效
            touchRatio:0.5,
            initialSlide:_this.activeIndex,
            pagination: {
                el:'.swiper-pagination',
                clickable:true,
                renderBullet:function(index,className){
                    return '<span class="' + className + '">' + _this.$t(_this.arr[index]["key"]) + '</span>';
                }
            },
            on:{
                slideChangeTransitionStart:function(){
                    _this.activeIndex=this.activeIndex;
                    sessionStorage.activeIndex=this.activeIndex;
                }
            },
        })
    },
    destroyed(){
        sessionStorage.activeIndex=0;
    },
    computed: {
        getIndex(){
            return this.activeIndex;
        }
    },
    data(){
        return{
            arr:[],
            activeIndex:0,
        }
    },
}