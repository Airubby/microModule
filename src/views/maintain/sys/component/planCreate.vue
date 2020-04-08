<template>
    <el-dialog title="设置" :visible.sync="dialogInfo.visible" width="860px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:450px;" class="scrollbar">
            <div class="pd15" v-loading="loading">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="25">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="" prop="status">
                                <div class="item-left">
                                    <el-checkbox v-model="initParams.status">启用</el-checkbox>
                                </div>
                                <span>说明：“*”代表取值范围内的数值，“/”代表“每”，“-”代表数字范围</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="分" prop="status">
                                <div class="item-left">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">取值范围0-59</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="小时" prop="status">
                                <div class="item-left">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">取值范围0-23</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="天" prop="status">
                                <div class="item-left">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">取值范围1-31</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="月" prop="status">
                                <div class="item-left">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">取值范围1-12</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="周" prop="status">
                                <div class="item-left">
                                <el-input v-model="initParams.status"></el-input>
                                </div>
                                <span class="info-color">取值范围0-6</span>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="任务类型" prop="status">
                                <div class="item-left">
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option key="1" label="系统任务" value="1"></el-option>
                                        <el-option key="2" label="自定义任务" value="2"></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="命令或接口" prop="status">
                                <el-input v-model="initParams.status" type="textarea"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="备注" prop="status">
                                <el-input v-model="initParams.status" type="textarea"></el-input>
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
    .item-left{
        width:250px;
        float:left;
        margin-right:5px;
    }
</style>