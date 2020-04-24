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
                                <div class="item-right">
                                    <span>说明：“*”代表取值范围内的数值，“/”代表“每”，“,”代表分隔符，“-”代表数字范围</span>
                                    <span class="ml10">例如：*,*/2,2-30/4,3,1-5</span>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :md="12" :lg="12">
                            <el-form-item label="分" prop="fen">
                                <div class="item-left">
                                <el-input v-model="initParams.fen"></el-input>
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
        let checkInput=(rules,value,callback)=>{
            if (value===""||value===null) {
                if(rules.required){
                    callback(new Error('NoEmpty'))
                }else{
                    callback()
                }
            } else {
                //*,*/2,3,1-5,1-20/5
                //首先判断有没有,
                if(value.indexOf(",")!=-1){
                    let arr=value.split(",");
                    let flag=false;
                    for(let i=0;i<arr.length;i++){
                        if(arr[i]===""||arr[i]===null){
                            flag=true;
                            callback(new Error('格式错误'));
                        }
                    }
                    if(!false){
                        for(let i=0;i<arr.length;i++){
                            let back=this.check(arr[i],this.fen);
                            if(back){
                                callback(new Error('格式错误'));
                            }
                        }
                        callback();
                    }
                }else{
                    let back=this.check(value,this.fen);
                    if(back){
                        callback(new Error('格式错误'));
                    }
                    callback();
                }
            }
        };
        return {
            loading:false,
            value:"",
            initParams: {
                status:'',
                fen:""
            },
            fen:[0,59],
            rules: {
                fen:[
                    { required: true, trigger: 'blur', validator:checkInput}
                ]
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
        check:function(item,range){
            let regPos = /^([0-9]+)$/;
            if(item.indexOf("*")!=-1){
                let arr=item.split("*");
                if(arr.length==2&&(arr[0]===""||arr[0]===null)){ //带*的只能为一个*或者*/2(数字)
                    if(arr[1]!==""&&arr[1]!==null){
                        if(arr[1].indexOf("/")!=-1){
                            let tarr=arr[1].split("/");
                            if(tarr.length==2&&(tarr[0]===""||tarr[0]===null)){ //只能有一个/
                                if(regPos.test(tarr[1])){
                                    if(Number(tarr[1])<range[0]||Number(tarr[1])>range[1]){
                                        return true;
                                    }
                                }else{
                                    return true;
                                } 
                            }else{
                                return true;
                            }
                        }else{
                            return true;
                        }
                    }
                }else{
                    return true;
                }
            }else if(item.indexOf("/")!=-1){
                let tarr=item.split("/");
                if(tarr.length==2&&tarr[0]!==""&&tarr[0]!==null){ //只能有一个/  且只能为1-40/3  范围内([0,59]) 3是随便给数字
                    if(tarr[0].indexOf("-")!=-1){
                        let ttarr=tarr[0].split("-");
                        if(ttarr.length==2&&ttarr[0]!==""&&ttarr[0]!==null&&ttarr[1]!==""&&ttarr[1]!=null&&regPos.test(tarr[1])){
                            if(regPos.test(ttarr[0])&&regPos.test(ttarr[1])){
                                if(Number(ttarr[0])<range[0]||Number(ttarr[1])>range[1]||Number(ttarr[1]<Number(ttarr[0]))){
                                    return true;
                                }
                            }else{
                                return true;
                            } 
                        }else{
                            return true;
                        }
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }
            }else if(item.indexOf("-")!=-1){
                let tarr=item.split("-");
                if(tarr.length==2&&tarr[0]!==""&&tarr[0]!==null&&tarr[1]!==""&&tarr[1]!=null){
                    if(regPos.test(tarr[0])&&regPos.test(tarr[1])){
                        if(Number(tarr[1])<range[0]||Number(tarr[1])>range[1]||Number(tarr[1]<Number(tarr[0]))){
                            return true;
                        }
                    }else{
                        return true;
                    } 
                }else{
                    return true;
                }
            }else{
                if(regPos.test(item)){
                    if(Number(item)<range[0]||Number(item)>range[1]){
                        return true;
                    }
                }else{
                    return true;
                } 
                
            }
            return false;
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
    .item-right{
        width: calc(100% - 260px);
        float: left;
    }
</style>