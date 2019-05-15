<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="修改密码" prop="password">
                                <el-input v-model="ruleForm.password" type="password" :disabled="readInfo" style="width: 300px;margin-right:10px;"></el-input>
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
        let checkpassword=(rules,value,callback)=>{
            this.$tool.checkPasspord({rules,value,callback})
        };
        return{
            readInfo:true,
            btn:"编辑",
            ruleForm:{
                password:'******',
            },
            rules:{
                password:[{ check: true,  trigger: 'change',validator:checkpassword }]
            },
        }
    },
    methods: {
        editsave:function(){
            if(this.readInfo){
                this.btn="保存";
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
