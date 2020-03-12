<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">SNMP设置</div>
                    <div><span class="border-right">已启用</span>161,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">B接口设置</div>
                    <div><span class="border-right">未启用</span>192.168.1.4,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">MQTT设置</div>
                    <div><span class="border-right">未启用</span>192.168.1.4,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">声光接口设置</div>
                    <div><span class="border-right">未启用</span>通道2</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">短信接口设置</div>
                    <div><span class="border-right">未启用</span>COM2</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">邮件接口设置</div>
                    <div><span class="border-right">未启用</span>slfdslf</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">电话接口设置</div>
                    <div><span class="border-right">未启用</span>slfdslf</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline"></span>
                </div>
            </div>
        </el-scrollbar>
  </div>
</template>

<script>
export default {
    created () {
        
    },
    
    mounted() {
        
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
<style lang="less" scoped>
    .box{
        width: 100%;
        display: flex;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #E4E7E9;
        .box-left{
            width: calc(100% - 100px);
            .border-right{
                padding-right: 5px;
                margin-right: 5px;
            }
        }
        .box-right{
            width: 100px;
            display: flex;
            align-items: center;
            font-size: 22px;
            justify-content: flex-end;
            color: #3CB2FF;
        }
    }
</style>