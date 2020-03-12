<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">工程配置</div>
                    <div><span class="border-right">版本号0.11</span>更新于2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">核心程序</div>
                    <div><span class="border-right">版本号0.11</span>更新于2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2"></span>
                </div>
            </div>
            <div class="box">
                <div class="box-left">
                    <div class="color mb5 font-size16">系统内核</div>
                    <div><span class="border-right">版本号0.11</span>更新于2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2"></span>
                </div>
            </div>
            <div style="text-align:center;" class="form-serarch">
              <el-button class="reset" @click="restartServer">{{$t("RestartServer")}}</el-button>
              <el-button class="reset" @click="RestartSys">{{$t("RestartSys")}}</el-button>
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