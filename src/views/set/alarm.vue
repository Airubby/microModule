<template>
    <div class="content">
        <div class="table-info">
            <div class="table-info-title">
                <div class="table-info-box table-info-box1">属性名称</div>
                <div class="table-info-box">告警级别</div>
                <div class="table-info-box">重复次数</div>
                <div class="table-info-box">告警上上限值</div>
                <div class="table-info-box">告警上限值</div>
                <div class="table-info-box">告警下限值</div>
                <div class="table-info-box">告警下下限值</div>
                <div class="table-info-box">操作列</div>
            </div>
            <div class="table-info-con">
                <el-scrollbar style="height:100%;" class="scrollbar">
                    <div class="scrollbarbox">
                        <div class="table-info-list" v-for="item in 30">
                            <div class="table-info-box table-info-box1">开门酸辣粉就撒了发撒大家</div>
                            <div class="table-info-box">3级</div>
                            <div class="table-info-box">3</div>
                            <div class="table-info-box">80</div>
                            <div class="table-info-box">70</div>
                            <div class="table-info-box">60</div>
                            <div class="table-info-box">50</div>
                            <div class="table-info-box"><el-button type="text" @click="editFN(item)">编辑</el-button></div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
            <dialog-edit :dialogInfo="editInfo" v-if="editInfo.visible"></dialog-edit>
        </div>
    </div>
</template>

<script>
import dialogEdit from './component/dialogEdit.vue'
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
            editInfo:{
                visible:false,
                id:'',
            }

        }
    },
    methods: {
        editFN:function(item){
            this.editInfo.visible=true;
            this.editInfo.id=item
        }
    },
    components: {
        dialogEdit
    }
}
</script>
<style scoped lang="less">
    
</style>
