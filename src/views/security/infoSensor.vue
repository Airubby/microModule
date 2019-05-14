<template>
    <div class="content">
        <div class="table-info">
            <div class="table-info-title">
                <div class="table-info-box">对象</div>
                <div class="table-info-box table-info-box1">描述</div>
                <div class="table-info-box">时间</div>
            </div>
            <div class="table-info-con">
                <el-scrollbar style="height:100%;" class="scrollbar">
                    <div class="scrollbarbox">
                        <div class="table-info-list" v-for="item in 30">
                            <div class="table-info-box">水电费了</div>
                            <div class="table-info-box table-info-box1">开门酸辣粉就撒了发撒大家</div>
                            <div class="table-info-box">2019-04-25 11:22:32</div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        let _this=this;
        let scrollbar=this.$el.querySelector(".el-scrollbar__wrap");
        scrollbar.onscroll=function(){
            let viewH=scrollbar.offsetHeight;
            let contentH=_this.$el.querySelector(".scrollbarbox").offsetHeight;
            let scrollTop=scrollbar.scrollTop;
            if((scrollTop + viewH) >= contentH){  
                _this.$message.success('请求分页加载更多数据了~~~');
            }
        }
    },
    data(){
        return{
            
        }
    },
    methods: {
      
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    
</style>
