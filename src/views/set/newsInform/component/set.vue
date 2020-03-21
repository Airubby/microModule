<template>
    <el-dialog :title="title" :visible.sync="dialogInfo.visible" width="520px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:240px;" class="scrollbar">
            <div class="pd15">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" label-width="80px" class="form-serarch">
                    <el-row :gutter="25">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="是否启用" prop="">
                                <el-switch
                                    style="height:32px;"
                                    v-model="initParams.status"
                                    active-color="#3CB2FF"
                                    inactive-color="#E4E7E9">
                                    </el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="事件范围" prop="">
                                <el-checkbox-group v-model="initParams.checkList">
                                    <el-checkbox label="5">紧急</el-checkbox>
                                    <el-checkbox label="4">严重</el-checkbox>
                                    <el-checkbox label="3">重要</el-checkbox>
                                    <el-checkbox label="2">一般</el-checkbox>
                                    <el-checkbox label="1">提示</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24" v-if="dialogInfo.type==1">
                            <el-form-item label="消音规则" prop="">
                                <el-checkbox-group v-model="initParams.checkList">
                                    <el-checkbox label="5">告警解除后消音</el-checkbox>
                                    <el-checkbox label="4">
                                        <span>延时自动消音</span>
                                        <span style="width:120px;margin-left:5px;display: inline-block;"><el-input v-model="initParams.user"></el-input></span>
                                    </el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24" v-if="dialogInfo.type==2">
                            <el-form-item label="收件人" prop="">
                                <div><el-input v-model="initParams.status" type="textarea" placeholder="以逗号分隔"></el-input></div>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24" v-if="dialogInfo.type==3||dialogInfo.type==4">
                            <el-form-item label="手机号码" prop="">
                                <div><el-input v-model="initParams.status" type="textarea" placeholder="以逗号分隔"></el-input></div>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24" v-if="dialogInfo.type==5">
                            <el-form-item label="微信号" prop="">
                                <div><el-input v-model="initParams.status" type="textarea" placeholder="以逗号分隔"></el-input></div>
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
        switch (this.dialogInfo.type) {
            case 1:
                this.title="声光提醒";
                break;
            case 2:
                this.title="邮件提醒";
                break;
            case 3:
                this.title="短信提醒";
                break;
            case 4:
                this.title="电话提醒";
                break;
            case 5:
                this.title="微信提醒";
                break;
            default:
                break;
        }
    },
    mounted() {

    },
    data() {
        return {
            title:null,
            initParams: {
                status:'',
                checkList:[],
                user:""
            },
            rules: {
                status: [
                    
                ],
            },
        }
    },
    methods:{
        dialogSure:function(){
            this.$refs['ValidateForm'].validate((valid) => {
                if(valid){ //验证通过
                    
                    // this.$api.post('',this.ruleForm, r => {});
                    console.log(this.$refs.tree.getCheckedNodes())
                    let node=this.$refs.tree.getCheckedNodes()[0];
                    let obj={
                        times:this.ruleForm.times,
                        treeid:node.id,
                        treename:node.label
                    }
                    this.$emit('backInfo',obj); 
                    this.dialogInfo.visible=false;
                }
            })
        },
    },
    watch:{
        
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style lang="less" scoped>
    
</style>