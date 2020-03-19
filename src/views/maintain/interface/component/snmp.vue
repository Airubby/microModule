<template>
    <el-dialog :title="$t('SNMPset')" :visible.sync="dialogInfo.visible" width="660px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:290px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <el-checkbox v-model="initParams.status">{{$t("IfEnabled")}}</el-checkbox>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('Port')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('ReadGW')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('WriteGW')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('ProtocolVersion')" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                    <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                    <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('TRAPport')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('TRAPip')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <div class="color font-size16 mb10" style="padding-left:10px;">
                            {{$t("SNMP-v3")}}
                        </div>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('UserName')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('SecurityLevel')" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                    <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                    <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('WPA-PSK')" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                    <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                    <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('AK')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('EncryptedPassword')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8">
                            <el-form-item :label="$t('Auth')" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                    <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                    <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                </el-select>
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
        let checknumber=(rules,value,callback)=>{
            this.$tool.checkNumber({rules,value,callback})
        };
        return {
            loading:false,
            initParams: {
                status:'',
            },
            rules: {
                times: [
                    { required: true, trigger: 'blur' ,validator:checknumber}
                ],
            },
            treedata: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                    id: 9,
                    label: '三级 1-1-1'
                    }, {
                    id: 10,
                    label: '三级 1-1-2'
                    }]
                }]
                }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
                }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            checkedKeys:[],
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            this.$refs['ruleForm'].validate((valid) => {
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
        checkChange:function(node,flag,data){
            if(this.$refs.tree.getCheckedNodes().length%2===0){
                if(flag){
                    this.$refs.tree.setCheckedNodes([node]);
                }else{
                    this.$refs.tree.setCheckedNodes([]);
                }
            }
            

        },

    },
    watch:{
        
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style scoped>
    
</style>
