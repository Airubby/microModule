<template>
    <el-dialog :visible.sync="dialogInfo.visible" width="600px" v-dialogDrag>
        <div slot="title" class="title">
            <div class="title-con">
                <span :class="{'active':title=='a'}" @click="change('a')">密码验证</span>
                <span :class="{'active':title=='b'}" @click="change('b')">短信验证</span>
            </div>
        </div>
        <el-scrollbar style="height:200px;" class="scrollbar">
            <div class="content content-flex">
                <div class="scrollbarbox">
                    <div class="scrollbarbox-con">
                        <div class="scrollbarbox-content">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="125px" class="demo-ruleForm">
                                <el-form-item label="请输入账号" prop="userid">
                                    <el-input v-model="ruleForm.userid" style="width: 300px;"></el-input>
                                </el-form-item>
                                <el-form-item label="请输入密码" prop="password">
                                    <el-input v-model="ruleForm.password" type="password" style="width: 300px;"></el-input>
                                </el-form-item>
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
        let checkpassword=(rules,value,callback)=>{
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if(this.ruleForm.password!=""){
                    callback();
                    // this.$api.get('/checkpassword', {"password":value}, r => {
                    //     console.log(r)
                    //     if(r.err_code){
                    //         callback();
                    //     }else{
                    //         callback(r.err_msg);
                    //     }
                    // });
                }else{
                    callback();
                }
            }
        };
        return{
            title:'a',
            ruleForm:{
                userid:"",
                password:'',
            },
            rules:{
                userid:[{ required: true,  trigger: 'blur',message:"非空"}],
                password:[{ required: true,  trigger: 'blur',validator:checkpassword }]
            },
        }
    },
    methods:{
        change:function(e){
            this.title=e;
        },
        //保存的操作
        dialogSure:function(){
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    console.log(this.$tool.Encrypt(this.ruleForm.password))
                    console.log(this.$tool.Decrypt("tKb634uLRuFdugF0P01eKw=="))
                    this.dialogInfo.visible=false;
                    this.$store.dispatch("setToken",true);
                    // this.$router.push({path:'/loncom/set'});

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
    .title{
        height: 20px;
        .title-con{
            position: absolute;
            height: 36px;
            line-height: 34px;
            top: 5px;
            z-index: 999;
            cursor: pointer;
            span{
                padding: 0 10px;
                color: #fff;
                display: inline-block;
                height: 100%;
                &.active{
                    background: #fff;
                    color: #666;
                }
            }

        }
    }
</style>
