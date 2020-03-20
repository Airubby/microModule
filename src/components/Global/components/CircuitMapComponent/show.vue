<template>
    <el-dialog :title="$t('RectifierModule')" :visible.sync="dialogInfo.visible" width="1000px" v-dialogDrag append-to-body>
        <el-scrollbar style="height:240px;" class="scrollbar">
            <div class="pd15">
                <div class="table">
                    <div class="table-con">
                        <div class="table-box table-box-title">
                            <div class="table-title">{{$t("Norm")}}</div>
                            <div class="table-title">{{$t("OperatingState")}}</div>
                            <div class="table-title">{{$t("CurrentOutput")}}({{$t("ElectricityUnit")}})</div>
                            <div class="table-title">{{$t("PowerOutput")}}({{$t("PowerUnit")}})</div>
                            <div class="table-title">{{$t("AlarmStatus")}}</div>
                        </div>
                        <div class="table-box flex">
                            <div class="table-box-con" v-for="(item,index) in 18">
                                <div class="table-title">{{$t("Modules")}}{{item}}</div>
                                <div class="table-title">
                                    <span :class="{'normal':false}"></span>
                                </div>
                                <div class="table-title">0.00</div>
                                <div class="table-title">0.00</div>
                                <div class="table-title">
                                    <span class="normal" :class="{'alarm':false}"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>

<script>
export default {
    created () {
    },
    mounted() {

    },
    data() {
        return {
            
        }
    },
    methods:{
        

    },
    watch:{
        
    },
    components:{},
    props:["dialogInfo"]
}
</script>
<style lang="less" scoped>
    .table{
        .table-con{
            .table-box{
                width: 95px;
            }
            .table-box:nth-of-type(2){
                width: calc(100% - 95px);
            }
            .table-title{
                span{
                    width: 14px;
                    height: 14px;
                    background: #E8E7EA;
                    border-radius: 50%;
                    display: inline-block;
                    &.normal{
                        background: #38B170;
                    }
                    &.alarm{
                        background: #F95B4A;
                    }
                }
            }
        }
    }
</style>