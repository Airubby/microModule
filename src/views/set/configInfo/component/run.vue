<template>
    <el-dialog title="自监控阀值" :visible.sync="dialogInfo.visible" width="500px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:280px;" class="scrollbar">
            <div class="pd15">
                <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                    <el-row :gutter="5">
                        <el-col :md="24" :lg="24">
                            <el-form-item label="CPU阀值(%)" prop="">
                                <el-col :span="6">
                                    <el-input v-model="initParams.status"></el-input>
                                </el-col>
                                <el-col :span="6">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="12">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option label="采集器CPU温度过高" value="1"></el-option>
                                    </el-select>
                                </el-col>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="内存阀值(%)" prop="">
                                <el-col :span="6">
                                    <el-input v-model="initParams.status"></el-input>
                                </el-col>
                                <el-col :span="6">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="12">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option label="采集器内存过高" value="1"></el-option>
                                    </el-select>
                                </el-col>
                            </el-form-item>
                        </el-col>
                        <el-col :md="24" :lg="24">
                            <el-form-item label="磁盘阀值(%)" prop="">
                                <el-col :span="6">
                                    <el-input v-model="initParams.status"></el-input>
                                </el-col>
                                <el-col :span="6">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="12">
                                    <el-select v-model="initParams.status" placeholder="请选择">
                                        <el-option label="采集器磁盘不足" value="1"></el-option>
                                    </el-select>
                                </el-col>
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
            options:[
                {value:"5",label:"紧急"},
                {value:"4",label:"严重"},
                {value:"3",label:"重要"},
                {value:"2",label:"一般"},
                {value:"1",label:"提示"},
            ]
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