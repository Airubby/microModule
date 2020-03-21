<template>
    <el-dialog title="管理对象信息" :visible.sync="dialogInfo.visible" width="400px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:280px;" class="scrollbar">
            <div class="pd15">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="25">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="模块名称" prop="">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="模块编码" prop="">
                                <el-input v-model="initParams.status"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="安装位置" prop="">
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
        return {
            initParams: {
                status:'',
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