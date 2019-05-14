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
            <img src="~@/assets/images/zb.png" class="table-img">
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
        padding: 0 30px;
        position:relative;
        .table-con{
            width:100%;
            height: calc(50% - 40px);
            margin-bottom: 35px;
            border: 1px solid #336699;
            display:flex;
            .table-box{
                border:1px solid #AABDD8;
                width: 9%;
                .table-box-title{
                    height: 25%;
                    background:#637899;
                    text-align: center;
                    font-size: 16px;
                    color:#fff;
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
                        border-right:1px solid #AABDD8;
                    }
                    .table-box-cont:nth-of-type(2n){
                        border-right:none;
                        border-left: 1px solid #AABDD8;
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
                color:#fff;
                .table-box1-left{
                    width:65%;
                    height:100%;
                    background:#FF0000;
                    border-right:2px solid #fff;
                }
                .table-box1-right{
                    width:35%;
                    height: 100%;
                    background:#F55252;
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
                    color: #637899;
                }
                .table-box1-left1{
                    background:#5984CD;
                }
                .table-box1-right1{
                    width:35%;
                    .table-box1-right1-top{
                        width: 100%;
                        height:50%;
                        background:#4A76C2;
                    }
                    .table-box1-right1-bottom{
                        width: 100%;
                        height:50%;
                        background:#446CB0;
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
            margin-top: 20px;
        }
        .table-img{
            position: absolute;
            right:-2px;
            bottom:-2px;
        }
    }
</style>
