<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="968px" v-dialogDrag>
        <el-scrollbar style="height:580px;padding-bottom:15px;" class="scrollbar">
            <div class="content" v-loading="loading">
                <div class="content-box">
                    <div class="show-box" v-for="item in 100">
                        <div class="switch"><switchc type="open"></switchc></div>
                        <div class="info alarm-info">机柜01直流输入01</div>
                    </div>
                    <div class="show-box" v-for="item in 3">
                        <div class="switch"><switchc type=""></switchc></div>
                        <div class="info">机柜01直流输入01</div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<script>
import switchc from '@/components/switch.vue'
export default {
    created () {
        
    },
    mounted() {

    },
    data() {
        return {
            loading:false,
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(){
            
        },
        //取消操作
        dialogCancel:function(){
            this.dialogInfo.visible=false;
        },

    },
    watch:{
        
    },
    components:{switchc},
    props:["dialogInfo"]
}
</script>
<style scoped lang="less">
    .content{
        padding: 15px;
        .content-box{
            width:100%;
            border-top: 2px solid #00CF78;
            display:flex;
            flex-wrap:wrap;
            .show-box{
                width: 134px;
                height: 65px;
                border-left: 2px solid #00CF78;
                .switch{
                    width: 68px;
                    height: 45px;
                    padding-top: 35px;
                }
                .info{
                    width: 120px;
                    background:#F4F4F4;
                    color:#333;
                    &.alarm-info{
                        color:#FF0C11;
                    }
                }
            }
        }
    }
</style>
