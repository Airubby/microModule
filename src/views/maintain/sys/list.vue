<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("ProjectConfig")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        ref="upload"
                        :on-success="onSuccess"
                        :on-error="onError"
                        :on-change="onchange"
                        :before-upload="beforeUpload"
                        :show-file-list="false"
                        :file-list="fileList"
                        :auto-upload="false">
                        <span class="el-icon-upload2"></span>
                    </el-upload>
                    
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("Corelet")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        ref="upload1"
                        :on-success="onSuccess"
                        :on-error="onError"
                        :on-change="onchange1"
                        :before-upload="beforeUpload"
                        :show-file-list="false"
                        :file-list="fileList"
                        :auto-upload="false">
                        <span class="el-icon-upload2"></span>
                    </el-upload>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("OSKernal")}}</div>
                    <div><span class="border-right">{{$t("Version")}}0.11</span>{{$t("UpdateAt")}}2020-03-21 10:12:22</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-finished"></span>
                </div>
            </div>
            <div class="list-box" @click="toPage('planComponent')">
                <div class="box-left">
                    <div class="color mb5 font-size16">计划任务</div>
                    <div><span>用于管理后台定时脚本</span></div>
                </div>
            </div>
            <div class="list-box" @click="toPage('backupsComponent')">
                <div class="box-left">
                    <div class="color mb5 font-size16">备份与还原</div>
                    <div><span>用于备份与还原数据库及文件</span></div>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">安全证书</div>
                    <div><span>上传服务端或客户端证书</span></div>
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
        <loading v-if="loadingInfo.visible" :dialogInfo="loadingInfo"></loading>
  </div>
</template>

<script>
import loading from './component/loading'
import update from './component/update.vue'
export default {
    components: {
        update,loading
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
            },
            loadingInfo:{
                visible:false,
                finished:0, //0 默认；1成功；2失败；
            },
            fileList:[]
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
        },
        toPage:function(component){
            let row={
                activeComponent:component
            };
            this.$emit("backInfo",row);
        },
        onSuccess(res, file, fileList){
			this.fileList=[];
			console.log(res,file,fileList)
			this.loadingInfo.finished=1;
			// if(res.err_code=="0"){
			// 	console.log('上传成功')
			// }else{//上传失败
			// 	this.showInfo=res.err_msg;
			// }
			
		},
		onError(err, file, fileList){
			this.fileList=[];
			console.log(err,file,fileList)
			this.loadingInfo.finished=2;
			
        },
        onchange1(file,fileList){
			console.log(file)
			console.log(fileList)
			var fileArry=file.name.split(".");
            var fileType=fileArry[fileArry.length-1];
            this.$refs.upload1.submit();
		},
		onchange(file,fileList){
			console.log(file)
			console.log(fileList)
			var fileArry=file.name.split(".");
            var fileType=fileArry[fileArry.length-1];
            this.$refs.upload.submit();
			// if(fileType=="jpg"||fileType=="png"||fileType=="PNG"||fileType=="JPG"){
			// 	this.imageUrl=file.url;
			// 	console.log(this.fileList)
			// 	// 
			// }else{
			// 	this.fileList=[];
			// }
		},
		beforeUpload(file){
            this.loadingInfo.visible=true;
            this.loadingInfo.finished=0;
		}
    },
    
}
</script>
<style lang="less" scoped>
    
</style>