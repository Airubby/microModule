import publicComponent from '@/views/public/index.vue'
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
        publicComponent
    }
}