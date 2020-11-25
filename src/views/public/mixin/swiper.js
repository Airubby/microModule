import { mapGetters } from 'vuex'
export default {
    props:["data"],
    created () {
        if(this.data){
            this.arr=this.data;
            this.backArr=this.data;
            for(let i=0;i<this.arr.length;i++){
                this.componentArr.push(this.arr[i].component);
                this.dataArr.push(this.arr[i]);
            }
        }
        //详情页刷新，使其在当前页
        if(sessionStorage.activeData&&sessionStorage.activeComponent){
            this.activeIndex=sessionStorage.activeIndex?sessionStorage.activeIndex:0;
            this.componentArr[this.activeIndex]=sessionStorage.activeComponent;
            this.dataArr[this.activeIndex]=JSON.parse(sessionStorage.activeData)
        }
    },
    mounted() {
        this.activeIndex=sessionStorage.activeIndex?sessionStorage.activeIndex:0;
    },
    destroyed(){
        sessionStorage.activeIndex=0;
    },
    computed: {
        ...mapGetters([
            'language'
        ]),
        getIndex(){
            return this.activeIndex;
        }
    },
    data(){
        return{
            swiper:null,
            arr:[],
            backArr:[],  //切换翻译的时候用
            componentArr:[],  //存放每个swiper的组件名称，跳转的时候更改用
            dataArr:[],  //存放每个swiper的组件的数据，跳转的时候切换用
            activeIndex:sessionStorage.activeIndex||0,
            showComponent:true,  //跳转后重新加载组件用
        }
    },
    methods: {
        initSwiper:function(){
            let _this=this;
            this.swiper=new this.$Swiper('#swiper-container', {
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
                        _this.reset();
                    },
                    slideChangeTransitionEnd:function(){
                        _this.activeIndex=this.activeIndex;
                        sessionStorage.activeIndex=this.activeIndex;
                    }
                },
            })
        },
        reset:function(){
            for(let i=0;i<this.arr.length;i++){
                this.componentArr[i]=this.arr[i].component;
                this.dataArr[i]=this.arr[i];
            }
        },
        backInfo:function(info){
            if(info){
                this.componentArr[this.activeIndex]=info["activeComponent"];
                this.dataArr[this.activeIndex]=info;
                this.showComponent=false;
                this.$nextTick(function(){
                    this.showComponent=true;
                })
            }
        },
        setPageInfo:function(){
            sessionStorage.pageInfo="";  // table跳转到详情页的时候记录table的当前页，返回的时候回到当前页用的，table那里绑定这个pageInfo
            sessionStorage.activeData="";
            sessionStorage.activeComponent="";
            sessionStorage.backData="";  //跳转到详情页之前的备份数据
        }
    },
    watch:{
        language:function(){
            this.arr=[];
            this.$nextTick(function(){
                this.arr=this.backArr;
            })
        },
        arr:function(val){
            if(val){
                this.swiper=null;
                this.$nextTick(function(){
                    this.initSwiper();
                })
            }
        },
        activeIndex:function(){
            this.setPageInfo()
        }
    }
}