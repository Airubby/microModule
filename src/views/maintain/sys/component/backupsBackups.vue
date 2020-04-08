<template>
    <el-dialog title="手动备份" :visible.sync="dialogInfo.visible" width="460px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:220px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="15">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="备份范围" prop="status">
                                <el-checkbox-group v-model="initParams.checkList">
                                    <el-checkbox label="系统配置库"></el-checkbox>
                                    <el-checkbox label="历史数据库"></el-checkbox>
                                    <el-checkbox label="监控软件"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="保存位置" prop="status">
                                <el-radio-group v-model="initParams.type" class="noboder-radio">
                                    <el-radio :label="1">默认</el-radio>
                                    <el-radio :label="2">
                                        <span>外部介质</span>
                                        <span style="width:150px;margin-left:5px;display: inline-block;">
                                            <el-select v-model="value" placeholder="请选择">
                                                <el-option key="1" label="aaa" value="1"></el-option>
                                                <el-option key="2" label="bbb" value="2"></el-option>
                                            </el-select>
                                        </span>
                                    </el-radio>
                                </el-radio-group>
                                <p class="info-color">保存到外部介质需确保U盘已正常插入到采集器</p>
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
                checkList:[]
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