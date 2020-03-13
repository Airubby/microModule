<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">工程配置</div>
                    <div><span class="border-right">版本号0.11</span>更新于2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">核心程序</div>
                    <div><span class="border-right">版本号0.11</span>更新于2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2"></span>
                </div>
            </div>
            <div class="list-box">
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
              <el-button class="reset" @click="restartSys">{{$t("RestartSys")}}</el-button>
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
        restartServer:function(){

        },
        restartSys:function(){
            
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    
</style>