<template>
    <div class="content content-flex">
        <div class="table">
            <div class="table-con">
                <div class="table-box table-box1">
                    <div class="table-box-con">
                        <div class="table-box1-left">
                            <div class="table-box-cont">
                                <div class="table-box-content">热通道</div>
                            </div>
                        </div>
                        <div class="table-box1-right">
                            <div class="table-box-cont">
                                <div class="table-box-content">中</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-box-title">
                        <div class="table-box-cont">
                            <div class="table-box-content">机柜编号</div>
                        </div>
                    </div>
                    <div class="table-box-con">
                        <div class="table-box1-left table-box1-left1">
                            <div class="table-box-cont">
                                <div class="table-box-content">冷通道</div>
                            </div>
                        </div>
                        <div class="table-box1-right1">
                            <div class="table-box1-right1-top">
                                <div class="table-box-cont">
                                    <div class="table-box-content">上</div>
                                </div>
                            </div>
                            <div class="table-box1-right1-bottom">
                                <div class="table-box-cont">
                                    <div class="table-box-content">下</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-box" v-for="item in table">
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                    </div>
                    <div class="table-box-title">
                        <div class="table-box-cont">
                            <div class="table-box-content">{{item}}</div>
                        </div>
                    </div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-con">
                <div class="table-box table-box1">
                    <div class="table-box-con">
                        <div class="table-box1-left">
                            <div class="table-box-cont">
                                <div class="table-box-content">热通道</div>
                            </div>
                        </div>
                        <div class="table-box1-right">
                            <div class="table-box-cont">
                                <div class="table-box-content">中</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-box-title">
                        <div class="table-box-cont">
                            <div class="table-box-content">机柜编号</div>
                        </div>
                    </div>
                    <div class="table-box-con">
                        <div class="table-box1-left table-box1-left1">
                            <div class="table-box-cont">
                                <div class="table-box-content">冷通道</div>
                            </div>
                        </div>
                        <div class="table-box1-right1">
                            <div class="table-box1-right1-top">
                                <div class="table-box-cont">
                                    <div class="table-box-content">上</div>
                                </div>
                            </div>
                            <div class="table-box1-right1-bottom">
                                <div class="table-box-cont">
                                    <div class="table-box-content">下</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-box" v-for="item in table">
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                    </div>
                    <div class="table-box-title">
                        <div class="table-box-cont">
                            <div class="table-box-content">{{item}}</div>
                        </div>
                    </div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>℃</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><span>23</span>%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
      
    },
    data(){
        return{
            table:['01','02','03','04','05','06','07','08','09']
        }
    },
    methods: {
      
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .table{
        width: 100%;
        height: 100%;
        position:relative;
        .table-con{
            width:100%;
            height: calc(50% - 25px);
            margin-bottom: 20px;
            border-top: 1px solid #E4E7E9;
            border-bottom: 1px solid #E4E7E9;
            border-left: 1px solid #E4E7E9;
            display:flex;
            .table-box{
                border-right:1px solid #E4E7E9;
                width: 9%;
                .table-box-title{
                    height: 25%;
                    background:#E4E7E9;
                    text-align: center;
                    font-size: 16px;
                    .table-box-cont{
                        width:100%;
                        border:none;
                    }
                }
                .table-box-con{
                    height: 50%;
                    display: flex;
                    flex-wrap: wrap;
                    .table-box-cont{
                        height: 50%;
                    }
                    .table-box-cont:nth-of-type(2n){
                        border-right:none;
                        border-left: 1px solid #E4E7E9;
                    }
                }
                .table-box-con:nth-of-type(1){
                    height:25%;
                    .table-box-cont{
                        height:100%;
                    }
                }
            }
            .table-box1{
                width: 19%;
                .table-box1-left{
                    width:65%;
                    height:100%;
                    background:#e4e7e9;
                    border-right:1px solid #fff;
                }
                .table-box1-right{
                    width:35%;
                    height: 100%;
                    background:#e4e7e9;
                }
                .table-box-con{
                    .table-box-cont{
                        width:100%;
                        height: 100%;
                        border:none;
                    }
                }
                .table-box-title{
                    background: none;
                }
                .table-box1-left1{
                    background:#e4e7e9;
                }
                .table-box1-right1{
                    width:35%;
                    .table-box1-right1-top{
                        width: 100%;
                        height:50%;
                        background:#e4e7e9;
                    }
                    .table-box1-right1-bottom{
                        width: 100%;
                        height:50%;
                        background: #e4e7e9;
                    }
                }
            }
            .table-box-cont{
                width:50%;
                height: 100%;
                display: table;
                .table-box-content{
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                }
            }
        }
        .table-con:nth-of-type(1){
            margin-top: 10px;
        }
    }
</style>
