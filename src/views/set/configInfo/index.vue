<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">管理对象信息</div>
                    <div><span class="border-right">模块名称</span><span class="border-right">编码</span>安装位置</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="changeEdit('manageObjInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">供应商信息</div>
                    <div><span class="border-right">厂商名称</span><span class="border-right">联系人</span>交付日期</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="changeEdit('supplierInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">网络信息</div>
                    <div><span class="border-right">IP地址</span><span class="border-right">掩码</span>网关</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="changeEdit('networkInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">维护信息</div>
                    <div><span class="border-right">2017-12-12</span>维护信息内容维护信息内容维护信息内容</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="changeEdit('stickInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">运行信息</div>
                    <div>
                        <span class="border-right">CPU(<em class="color">45.6%</em>)</span>
                        <span class="border-right">内存(<em class="color">32.6%</em>)</span>
                        <span class="border-right">磁盘(<em class="color">15.2%</em>)</span>
                        <span class="border-right">上行网速(<em class="color">12.6kb/s</em>)</span>
                        <span>下行网速(<em class="color">32.6kb/s</em>)</span>
                    </div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="changeEdit('runInfo')"></span>
                </div>
            </div>
        </el-scrollbar>
        <manage-obj v-if="initParams.manageObjInfo.visible" :dialogInfo="initParams.manageObjInfo"></manage-obj>
        <supplier v-if="initParams.supplierInfo.visible" :dialogInfo="initParams.supplierInfo"></supplier>
        <network v-if="initParams.networkInfo.visible" :dialogInfo="initParams.networkInfo"></network>
        <stick v-if="initParams.stickInfo.visible" :dialogInfo="initParams.stickInfo"></stick>
        <run v-if="initParams.runInfo.visible" :dialogInfo="initParams.runInfo"></run>
  </div>
</template>

<script>
import manageObj from './component/manageObj.vue'
import supplier from './component/supplier.vue'
import network from './component/network.vue'
import stick from './component/stick.vue'
import run from './component/run.vue'
export default {
    components: {
        manageObj,supplier,network,stick,run
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            initParams:{
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
                },
                runInfo:{
                    visible:false
                }
            }
            
        }
    },
    methods: {
        changeEdit:function(change){
            this.initParams[change].visible=true;
        },
    },
    
}
</script>
<style lang="less" scoped>
    
</style>