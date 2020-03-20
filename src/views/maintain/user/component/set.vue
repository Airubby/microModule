<template>
    <el-dialog :title="$t('securityPolicySet')" :visible.sync="dialogInfo.visible" width="660px" v-dialogDrag append-to-body :close-on-click-modal="false">
        <el-scrollbar style="height:290px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="25">
                        <div class="color font-size16 mb10" style="padding-left:10px;">
                            {{$t("IDsecurityPolicy")}}
                        </div>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <el-checkbox v-model="initParams.status">{{$t("EnabledIDlock")}}</el-checkbox>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item :label="$t('SecurityPolicyLoginNumber')" prop="status">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item :label="$t('SecurityPolicyLoginTime')" prop="status">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <div class="color font-size16 mb10" style="padding-left:10px;">
                            {{$t("PWsecurityPolicy")}}
                        </div>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <el-checkbox v-model="initParams.status">{{$t("EnabledPWlock")}}</el-checkbox>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item :label="$t('PWvalidity')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item :label="$t('DISTrevise')" prop="type">
                                <el-input v-model="initParams.status"></el-input>
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
            if (value===""&&value===null) {
                if(rules.required){
                    callback(new Error('NoEmpty'))
                }else{
                    callback()
                }
            } else {
                let regPos = /^[1-9]\d*$/;  //大于0的正整数
                if(regPos.test(value)){
                    callback()
                }else{
                    callback(this.$t("IsInteger"))
                }
            }
        };
        return {
            loading:false,
            initParams: {
                status:'',
            },
            rules: {
                status: [
                    { required: false, trigger: 'blur' ,validator:checknumber}
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
