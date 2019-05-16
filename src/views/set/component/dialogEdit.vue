<template>
    <el-dialog title="告警阀值" :visible.sync="dialogInfo.visible" width="700px" :append-to-body="true" v-dialogDrag>
        <el-scrollbar style="height:350px;" class="scrollbar">
            <div class="content content-flex">
                <div class="scrollbarbox">
                    <div class="scrollbarbox-con">
                        <div class="scrollbarbox-content">
                            <h2>机柜1冷通道上湿度阀值设置</h2>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-row>
                                    <el-col :span="24">
                                        <el-form-item label="告警级别" prop="type">
                                            <el-input v-model="ruleForm.type"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="告警上限值" prop="upper">
                                            <el-input v-model="ruleForm.upper" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="上限恢复值" prop="upperRecover">
                                            <el-input v-model="ruleForm.upperRecover"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="告警下限值" prop="floor">
                                            <el-input v-model="ruleForm.floor"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="下限恢复值" prop="floorRecover">
                                            <el-input v-model="ruleForm.floorRecover"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="重复次数" prop="num">
                                            <el-input v-model="ruleForm.num" ></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </div>
                </div>
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
        
        return{
            ruleForm:{
                type:'',
                upper:'',
                upperRecover:'',
                floor:'',
                floorRecover:'',
                num:'',
            },
            rules:{
                type:[{ required: true,  trigger: 'blur' }]
            },
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.dialogInfo.visible=false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //取消操作
        dialogCancel:function(){
            this.dialogInfo.visible=false;
        },

    },
    watch:{
        
    },
    components:{dialogBtnInfo},
    props:["dialogInfo"]
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width: 600px;
        h2{
            margin-bottom: 20px;
        }
    }
</style>
