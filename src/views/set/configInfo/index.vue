<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">管理对象信息</div>
                    <div><span class="border-right">模块名称</span><span class="border-right">编码</span>安装位置</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="manageObjFn()"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">供应商信息</div>
                    <div><span class="border-right">厂商名称</span><span class="border-right">联系人</span>交付日期</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="supplierFn()"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">网络信息</div>
                    <div><span class="border-right">IP地址</span><span class="border-right">掩码</span>网关</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="networkFn()"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">维护信息</div>
                    <div><span class="border-right">2017-12-12</span>维护信息内容维护信息内容维护信息内容</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="stickFn()"></span>
                </div>
            </div>
        </el-scrollbar>
        <manage-obj v-if="manageObjInfo.visible" :dialogInfo="manageObjInfo"></manage-obj>
        <supplier v-if="supplierInfo.visible" :dialogInfo="supplierInfo"></supplier>
        <network v-if="networkInfo.visible" :dialogInfo="networkInfo"></network>
        <stick v-if="stickInfo.visible" :dialogInfo="stickInfo"></stick>
  </div>
</template>

<script>
import manageObj from './component/manageObj.vue'
import supplier from './component/supplier.vue'
import network from './component/network.vue'
import stick from './component/stick.vue'
export default {
    components: {
        manageObj,supplier,network,stick
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            manageObjInfo:{
                visible:false,
            },
            supplierInfo:{
                visible:false,
            },
            networkInfo:{
                visible:false,
            },
            stickInfo:{
                visible:false
            }
        }
    },
    methods: {
        manageObjFn:function(){
            this.manageObjInfo.visible=true;
        },
        supplierFn:function(){
            this.supplierInfo.visible=true;
        },
        networkFn:function(){
            this.networkInfo.visible=true;
        },
        stickFn:function(){
            this.stickInfo.visible=true;
        }
    },
    
}
</script>
<style lang="less" scoped>
    
</style>