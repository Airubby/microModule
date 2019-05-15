<template>
  <div class="content bgfff">
        <div class="index-top"></div>
        <div class="index-bottom">
            <div class="index-bottom-box index-bottom-box1">
                <div class="index-bottom-box-title">mPUE</div>
                <div class="index-bottom-box-con">
                    <div class="index-bottom-box-left">
                        <span>5.00</span>
                    </div>
                    <div class="index-bottom-box-right" id="echartpue"></div>
                </div>
            </div>
            <div class="index-bottom-box index-bottom-box2">
                <div class="index-bottom-box-title">IT负载</div>
                <div class="index-bottom-box-con">
                    <div class="text">20.2<span>KW</span></div>
                    <div class="index-bottom-box-content" id="echartEn"></div>
                </div>
            </div>
            <div class="index-bottom-box index-bottom-box3">
                <div class="index-bottom-box-title">冷热通道温度</div>
                <div class="index-bottom-box-con">
                    <div class="index-bottom-box-conleft">
                        <div class="index-conleft-box">
                            <div class="index-conleft-boxcon">
                                <div class="num"><span>20.0</span>℃</div>
                                <div class="text">
                                    <p>热通道</p>
                                    <p>MAX</p>
                                </div>
                            </div>
                        </div>
                        <div class="index-conleft-box">
                            <div class="index-conleft-boxcon">
                                <div class="num"><span>20.0</span>℃</div>
                                <div class="text">
                                    <p>冷通道</p>
                                    <p>MAX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index-bottom-box-content" id="gaugeChar"></div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        this.$tool.echartPUE("echartpue")
        this.$tool.pieChar("echartEn")
        this.$tool.gaugeChar("gaugeChar")
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
<style lang="less" scoped>
    .index-top{
        width: 100%;
        height: calc(100% - 240px);
    }
    .index-bottom{
        width: 100%;
        height: 240px;
        display:flex;
        .index-bottom-box{
            width: 100%;
            height:100%;
            .index-bottom-box-title{
                width: 100%;
                height: 45px;
                line-height: 45px;
                padding: 0 15px;
                font-size: 16px;
                color: #fff;
            }
            .index-bottom-box-con{
                width: 100%;
                height: calc(100% - 45px);
            }
            &.index-bottom-box1{
                .index-bottom-box-title{
                    background: #FF3333;
                }
                .index-bottom-box-con{
                    background: #FF6633;
                    display:flex;
                    .index-bottom-box-left{
                        width: 110px;
                        height:100%;
                        display:table;
                        span{
                            display:table-cell;
                            vertical-align:middle;
                            text-align: center;
                            font-size:26px;
                            color:#fff;
                        }
                    }
                    .index-bottom-box-right{
                        width:calc(100% - 110px);
                        height:100%;
                    }
                }
            }
            &.index-bottom-box2{
                margin: 0 10px;
                .index-bottom-box-title{
                    background: #4E4644;
                }
                .index-bottom-box-con{
                    background: #666666;
                    position: relative;
                    .text{
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        font-size: 26px;
                        color: #fff;
                        span{
                            font-size: 14px;
                        }
                    }
                    .index-bottom-box-content{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            &.index-bottom-box3{
                .index-bottom-box-title{
                    background: #2883A9;
                }
                .index-bottom-box-con{
                    background: #41AADA;
                    display: flex;
                    .index-bottom-box-conleft{
                        width: 125px;
                        height: 100%;
                        display:flex;
                        flex-wrap:wrap;
                        .index-conleft-box{
                            width:100%;
                            height:50%;
                            display:table;
                            .index-conleft-boxcon{
                                display:table-cell;
                                vertical-align: middle;
                                text-align: center;
                                .num{
                                    color:#fff;
                                    font-size:16px;
                                    span{
                                        font-size: 26px;
                                    }
                                }
                                .text{
                                    color:#277493;
                                    font-size:16px;
                                }
                            }
                        }
                    }
                    .index-bottom-box-content{
                        width: calc(100% - 125px);
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
