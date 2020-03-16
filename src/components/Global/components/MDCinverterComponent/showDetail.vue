<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="968px" v-dialogDrag :append-to-body="true">
        <el-scrollbar style="height:500px;padding-bottom:15px;" class="scrollbar">
            <div class="content" v-loading="loading">
                <div class="content-box">
                    <div class="show-box" v-for="item in 28">
                        <div class="switch">
                            <div class="switch-text">
                                <span><em>400</em>A</span>
                                <span><em>3</em>P</span>
                            </div>
                            <switchc type="open"></switchc>
                        </div>
                        <div class="info">
                            <div class="info-line">
                                <span>3QF14</span>
                            </div>
                            <div class="info-txt">A01机柜</div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<script>
import switchc from './switch.vue'
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
        padding: 50px 30px 15px;
        .content-box{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            .show-box{
                width: 33.33%;
                height: 40px;
                display: flex;
                border-left: 2px solid #F75B49;
                .switch{
                    width: 125px;
                    height: 100%;
                    position: relative;
                    left: -2px;
                    .switch-text{
                        font-size: 12px;
                        color: #788693;
                        position:absolute;
                        top: -25px;
                        span{
                            padding: 2px 4px;
                            em{
                                font-size: 14px;
                                font-style: normal;
                            }
                        }
                        span:nth-of-type(1){
                            background: #B3FFDA;
                            margin-left: 5px;
                        }
                        span:nth-of-type(2){
                            background: #FDF5D0;
                        }
                    }
                }
                &:nth-last-of-type(1),&:nth-last-of-type(2),&:nth-last-of-type(3){
                    border-left-color: #fff; 
                }
                .info{
                    position: relative;
                    display: flex;
                    align-items: center;
                    top: -19px;
                    left: -2px;
                    width: calc(100% - 135px);
                    .info-line{
                        width: 45px;
                        height: 2px;
                        margin-right: 4px;
                        background: #F75B49;
                        span{
                            bottom: 25px;
                            position: absolute;
                        }
                    }
                }
            }
        }
    }
</style>
