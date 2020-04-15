<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="table">
                            <div class="table-title">
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>空调编号</span>
                                    </div>
                                </div>
                                <div class="table-box table-box1">
                                    <div class="table-box1-con">
                                        <div class="table-box-con">
                                            <span>送风温湿度(℃%)</span>
                                        </div>
                                    </div>
                                    <div class="table-box1-con table-box1-con1">
                                        <div class="table-box-con">
                                            <span>上侧</span>
                                        </div>
                                        <div class="table-box-con">
                                            <span>中侧</span>
                                        </div>
                                        <div class="table-box-con">
                                            <span>下侧</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-box table-box1">
                                    <div class="table-box1-con">
                                        <div class="table-box-con">
                                            <span>回风温湿度(℃%)</span>
                                        </div>
                                    </div>
                                    <div class="table-box1-con table-box1-con1">
                                        <div class="table-box-con">
                                            <span>上侧</span>
                                        </div>
                                        <div class="table-box-con">
                                            <span>中侧</span>
                                        </div>
                                        <div class="table-box-con">
                                            <span>下侧</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>水阀开度(%)</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>供水温度(℃)</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>回水温度(℃)</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>风机转速(%)</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>功耗(KW)</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>供水压力</span>
                                    </div>
                                </div>
                                <div class="table-box">
                                    <div class="table-box-con">
                                        <span>回水压力</span>
                                    </div>
                                </div>
                            </div>
                            <div class="table-con">
                                <div class="table-con-list" v-for="item in 5">
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>{{item}}</span>
                                        </div>
                                    </div>
                                    <div class="table-box table-box1">
                                        <div class="table-box1-con table-box1-con1">
                                            <div class="table-box-con">
                                                <span>21%</span>
                                            </div>
                                            <div class="table-box-con">
                                                <span>3%</span>
                                            </div>
                                            <div class="table-box-con">
                                                <span>4%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-box table-box1">
                                        <div class="table-box1-con table-box1-con1">
                                            <div class="table-box-con">
                                                <span>21%</span>
                                            </div>
                                            <div class="table-box-con">
                                                <span>3%</span>
                                            </div>
                                            <div class="table-box-con">
                                                <span>4%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>223</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>23</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>23</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>34</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>434</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>23</span>
                                        </div>
                                    </div>
                                    <div class="table-box">
                                        <div class="table-box-con">
                                            <span>32</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>

export default {
    computed: {
      
    },
    data(){
        return{
            
        }
    },
    methods: {
      
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width:100%;
        height: 100px;
        .table{
            width: 100%;
            height: 100%;
            position:relative;
            .table-title{
                display: flex;
                width:100%;
                height: 65px;
                background: #E4E7E9;
                border-right: 1px solid #ccc;
                border-top: 1px solid #ccc;
                border-bottom:none;
                .table-box{
                    border-left-color: #ccc;
                }
            }
            .table-con{
                width:100%;
                height:auto;
                display: block;
                border-right:1px solid #E4E7E9;
                .table-con-list{
                    width:100%;
                    height: 40px;
                    display:flex;
                    // border-right:1px solid #E4E7E9;
                    // border-left:1px solid #E4E7E9;
                }
                .table-con-list:nth-last-of-type(1){
                    border-bottom: 1px solid #E4E7E9;
                }
            }
            .table-box{
                width: 8%;
                border-left: 1px solid #E4E7E9;
                border-top: 1px solid #E4E7E9;
                &.table-box1{
                    width: 18%;
                    display:flex;
                    flex-wrap: wrap;
                    .table-box1-con{
                        width: 100%;
                        &.table-box1-con1{
                            display:flex;
                            .table-box-con:nth-of-type(2){
                                border-left: 1px solid #E4E7E9;
                                border-right: 1px solid #E4E7E9;
                            }
                        }
                        &.table-box1-con1:nth-of-type(1){
                            border-top:none;
                        }
                    }
                }
                .table-box-con{
                    width: 100%;
                    height: 100%;
                    display:table;
                    word-break: break-all;
                    span{
                        display:table-cell;
                        text-align: center;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    
</style>
