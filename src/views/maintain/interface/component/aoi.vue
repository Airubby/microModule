<template>
    <el-dialog :title="$t('AOIset')" :visible.sync="dialogInfo.visible" width="360px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:190px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="">
                                <el-checkbox v-model="initParams.status">{{$t("IfEnabled")}}</el-checkbox>
                            </el-form-item>
                        </el-col>
                        <el-col :md="16" :lg="16">
                            <el-form-item :label="$t('Port')" prop="type">
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
