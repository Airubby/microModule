<template>
    <el-dialog title="设置" :visible.sync="dialogInfo.visible" width="460px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:160px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="备份文件" prop="status">
                                <div style="width:250px;float:left;margin-right:5px;">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">设置文件个数</span>
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
    },
    watch:{
        
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style lang="less" scoped>
    
</style>