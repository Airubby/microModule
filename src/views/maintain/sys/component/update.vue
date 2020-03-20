<template>
    <el-dialog :title="$t(dialogInfo.title)" :visible.sync="dialogInfo.visible" width="460px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:240px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <span class="title">
                                    {{$t("Version")}}
                                </span>
                                <span>0.11</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <span class="title">
                                    {{$t("UpdateAt")}}
                                </span>
                                <span>2020-03-21 10:12:22</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <span class="title">
                                    {{$t("Version")}}
                                </span>
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
                                    <el-button slot="trigger" type="primary"><i class="el-icon-upload2"></i>选取文件</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure()"></dialogBtnInfo>
    </el-dialog>
</template>

<script>
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            initParams: {
                status:'',
            },
            rules: {
                
            },
            fileList:[],
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            this.$refs['ruleForm'].validate((valid) => {
                if(valid){ //验证通过
                    
                    this.$emit('backInfo',obj); 
                    this.dialogInfo.visible=false;
                }
            })
        },
        onSuccess(res, file, fileList){
			this.fileList=[];
			console.log(res,file,fileList)
			
			if(res.err_code=="0"){
				console.log('上传成功')
			}else{//上传失败
				this.showInfo=res.err_msg;
			}
			
		},
		onError(err, file, fileList){
			this.fileList=[];
			console.log(err,file,fileList)
			this.$message.warning(err);
			
		},
		onchange(file,fileList){
			console.log(file)
			console.log(fileList)
			var fileArry=file.name.split(".");
			var fileType=fileArry[fileArry.length-1];
			if(fileType=="jpg"||fileType=="png"||fileType=="PNG"||fileType=="JPG"){
				this.imageUrl=file.url;
				console.log(this.fileList)
				// this.$refs.upload.submit();
			}else{
				this.fileList=[];
				this.showInfo="只能上传jpg/png文件";
			}
		},
		beforeUpload(file){
			
		}

    },
    watch:{
        
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style lang="less" scoped>
    .title{
        width: 65px;
        display: block;
        float: left;
    }
</style>