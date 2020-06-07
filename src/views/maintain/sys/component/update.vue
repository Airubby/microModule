<template>
    <el-dialog :title="$t(dialogInfo.title)" :visible.sync="dialogInfo.visible" width="460px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:240px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="fileCRT">
                                <span class="title">
                                    CRT文件
                                </span>
                                <span class="input-file">
                                    <el-input v-model="initParams.fileCRT">
                                        <i slot="suffix" class="el-input__icon el-icon-circle-close" @click="clearCRT" v-show="initParams.fileCRT"></i>
                                    </el-input>
                                </span>
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    ref="crtupload"
                                    :on-success="onSuccess"
                                    :on-error="onError"
                                    :on-change="crtonchange"
                                    :before-upload="beforeUpload"
                                    :show-file-list="false"
                                    :file-list="crtList"
                                    :limit="1"
                                    name="binfile"
                                    accept=".json,.png"
                                    :auto-upload="false">
                                    <el-button slot="trigger" type="primary"><i class="el-icon-upload2"></i>CRT文件</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="fileKEY">
                                <span class="title">
                                    KEY文件
                                </span>
                                <span class="input-file">
                                    <el-input v-model="initParams.fileKEY">
                                        <i slot="suffix" class="el-input__icon el-icon-circle-close" @click="clearKEY" v-show="initParams.fileKEY"></i>
                                    </el-input>
                                </span>
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    ref="keyupload"
                                    :on-success="onSuccess"
                                    :on-error="onError"
                                    :on-change="keyonchange"
                                    :before-upload="beforeUpload"
                                    :show-file-list="false"
                                    :file-list="keyList"
                                    :limit="1"
                                    name="binfile"
                                    accept=".json,.png"
                                    :auto-upload="false">
                                    <el-button slot="trigger" type="primary"><i class="el-icon-upload2"></i>KEY文件</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <loading v-if="loadingInfo.visible" :dialogInfo="loadingInfo" @backInfo="backInfo"></loading>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure()"></dialogBtnInfo>
    </el-dialog>
</template>

<script>
import dialogBtnInfo from '@/components/dialogBtnInfo.vue'
import loading from './loading'
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
            config:{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            },
            loadingInfo:{
                visible:false,
                finished:0,
            },
            number:0,
            initParams: {
                fileCRT:'',
                fileKEY:''
            },
            rules: {
                fileCRT: [
                    { required: true, message: '非空', trigger: 'change' }
                ],
                fileKEY: [
                    { required: true, message: '非空', trigger: 'change' }
                ],
            },
            fileList:[],
            crtList:[],
            keyList:[],
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            this.$refs['ValidateForm'].validate((valid) => {
                if(valid){ //验证通过
                    this.fileList=this.crtList.concat(this.keyList);
                    this.loadingInfo.visible=true;
                    this.number=0;
                    this.$refs.crtupload.submit();
                    this.$refs.keyupload.submit();
                    // this.$emit('backInfo',obj); 
                    // this.dialogInfo.visible=false;
                }
            })
        },
        backInfo:function(){
            this.dialogInfo.visible=false;
        },
        onSuccess(res, file, fileList){
            this.number+=1;
            if(this.number==2){
                this.loadingInfo.finished=1;
            }
			console.log(res,file,fileList)
			
		},
		onError(err, file, fileList){
			this.fileList=[];
			console.log(err,file,fileList)
			this.loadingInfo.finished=2;
			
		},
        keyonchange(file,fileList){
            console.log(file)
            this.initParams.fileKEY=file.name;
            console.log(fileList)
        },
        crtonchange(file,fileList){
            console.log(file)
            this.initParams.fileCRT=file.name;
            console.log(fileList)
		},
		beforeUpload(file){
			
        },
        clearCRT:function(){
            this.initParams.fileCRT="";
            this.crtList=[];
        },
        clearKEY:function(){
            this.initParams.fileKEY="";
            this.keyList=[];
        }

    },
    watch:{
        
    },
    components:{dialogBtnInfo,loading},
    props:["dialogInfo"]
}
</script>
<style lang="less" scoped>
    .title{
        width: 65px;
        display: block;
        float: left;
    }
    .input-file{
        width: calc(100% - 200px);
        float: left;
    }
</style>