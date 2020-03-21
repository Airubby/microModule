<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">声光提醒</div>
                    <div><span class="border-right">已启用</span>紧急，严重</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="setFn(1)"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">邮件提醒</div>
                    <div><span class="border-right">未启用</span>紧急，严重，一般，提示</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="setFn(2)"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">短信提醒</div>
                    <div><span class="border-right">未启用</span>紧急，严重，一般，提示</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="setFn(3)"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">电话提醒</div>
                    <div><span class="border-right">未启用</span>无</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="setFn(4)"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">微信提醒</div>
                    <div><span class="border-right">未启用</span>紧急，严重，一般，提示</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="setFn(5)"></span>
                </div>
            </div>
        </el-scrollbar>
        <set v-if="setInfo.visible" :dialogInfo="setInfo"></set>
  </div>
</template>

<script>
import set from './component/set.vue'
export default {
    components: {
        set  
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            setInfo:{
                visible:false,
                type:""
            }
        }
    },
    methods: {
        setFn:function(type){
            this.setInfo.type=type;
            this.setInfo.visible=true;
        }
    },
    
}
</script>
<style lang="less" scoped>
    
</style>