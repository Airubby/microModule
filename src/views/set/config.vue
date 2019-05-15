<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="145px" class="demo-ruleForm">
                            <el-form-item label="管理对象名称" prop="name">
                                <el-input v-model="ruleForm.name" :disabled="readInfo" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="网络地址" prop="addr">
                                <el-input v-model="ruleForm.addr" :disabled="true" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="操作超时跳转(分钟)" prop="handle">
                                <el-input v-model="ruleForm.handle" :disabled="readInfo" style="width: 300px;"></el-input>
                            </el-form-item>
                            <el-form-item label="告警页面跳转策略" prop="strategy">
                                <el-radio-group v-model="ruleForm.strategy" :disabled="readInfo">
                                    <el-radio label="1">紧急</el-radio>
                                    <el-radio label="2">重要</el-radio>
                                    <el-radio label="3">一般</el-radio>
                                    <el-radio label="4">提示</el-radio>
                                    <el-radio label="5">不跳转</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="" prop="">
                                <el-button type="primary" @click="editsave">{{btn}}</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        
    },
    data(){
        let checkIP=(rules,value,callback)=>{
            this.$tool.checkIP({rules,value,callback})
        };
        let checkNumber=(rules,value,callback)=>{
            this.$tool.checkNumber({rules,value,callback})
        };
        return{
            readInfo:true,
            btn:"编辑",
            ruleForm:{
                name:'M108-MDC-F',
                addr:'192.168.0.26',
                handle:'4',
                strategy:'5'
            },
            rules:{
                name:[{ required: true}],
                addr:[{ required: true,  trigger: 'change',validator:checkIP }],
                handle:[{ required: true,  trigger: 'change',validator:checkNumber }],
                strategy:[{ required: true}],
            },
        }
    },
    methods: {
        editsave:function(){
            if(this.readInfo){
                this.btn="保存";
                this.ruleForm.password="";
                this.readInfo=!this.readInfo;
            }else{
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.btn="编辑";
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                    this.readInfo=!this.readInfo;
                });
            }
            
        }
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width: 600px;
        height: 150px;
        text-align: left;
    }
</style>
