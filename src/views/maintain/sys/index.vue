<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("ProjectConfig")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2" @click="update('ProjectConfig')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("Corelet")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2" @click="update('Corelet')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("OSKernal")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-upload2" @click="update('OSKernal')"></span>
                </div>
            </div>
            <div style="text-align:center;" class="form-serarch">
              <el-button class="reset" @click="restartServer">{{$t("RestartServer")}}</el-button>
              <el-button class="reset" @click="restartSys">{{$t("RestartSys")}}</el-button>
            </div>
        </el-scrollbar>
        <update v-if="updateInfo.visible" :dialogInfo="updateInfo"></update>
  </div>
</template>

<script>
import update from './component/update.vue'
export default {
    components: {
        update
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            updateInfo:{
                visible:false,
                title:"",
            }
        }
    },
    methods: {
        restartServer:function(){

        },
        restartSys:function(){
            
        },
        update:function(type){
            this.updateInfo.title=type;
            this.updateInfo.visible=true;
        }
    },
    
}
</script>
<style lang="less" scoped>
    
</style>