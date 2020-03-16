<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="inverter">
                            <div class="inverter-box">
                                <div class="inverter-box-left">
                                    <div class="inverter-box-left-line bg1">
                                        <div class="inverter-box-left-title inverter-box-text">&nbsp;</div>
                                        <div class="inverter-box-text"><span>A相</span></div>
                                        <div class="inverter-box-text"><span>B相</span></div>
                                        <div class="inverter-box-text"><span>C相</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">电流(A)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">电压(V)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">功率(KW)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">功率因素</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                </div>
                                <div class="inverter-box-right bg3"><span>市电A路</span></div>
                            </div>
                            <div class="inverter-box">
                                <div class="inverter-box-left">
                                    <div class="inverter-box-left-line bg1">
                                        <div class="inverter-box-left-title inverter-box-text">&nbsp;</div>
                                        <div class="inverter-box-text"><span>A相</span></div>
                                        <div class="inverter-box-text"><span>B相</span></div>
                                        <div class="inverter-box-text"><span>C相</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">电流(A)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">电压(V)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">功率(KW)</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                    <div class="inverter-box-left-line">
                                        <div class="inverter-box-left-title inverter-box-text">功率因素</div>
                                        <div class="inverter-box-text"><span>23</span></div>
                                        <div class="inverter-box-text"><span>2</span></div>
                                        <div class="inverter-box-text"><span>4</span></div>
                                    </div>
                                </div>
                                <div class="inverter-box-right bg3"><span>市电A路</span></div>
                            </div>
                        </div>
                        <div class="inverterline">
                            <div class="switch switch1">
                                <div class="switch-text">
                                    <span><em>400</em>A</span>
                                    <span><em>3</em>P</span>
                                </div>
                                <switchc type="open"></switchc>
                            </div>
                            <div class="line-box line-box1">
                                <div class="line-boxcon line-boxcon1">
                                    <div class="line boxline"><span class="title">制冷</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon2">
                                    <div class="line boxline"><span class="title">其它</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon3">
                                    <div class="line boxline"><span class="title">机柜</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon4">
                                    <div class="line boxline"><span class="title">备用</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                            </div>
                            <div class="switch-box">
                                <div class="switch switch2">
                                    <div class="switch-text">
                                        <span><em>400</em>A</span>
                                        <span><em>3</em>P</span>
                                    </div>
                                    <switchc type=""></switchc>
                                </div>
                                <div class="switch switch3">
                                    <div class="switch-text">
                                        <span><em>400</em>A</span>
                                        <span><em>3</em>P</span>
                                    </div>
                                    <switchc type=""></switchc>
                                </div>
                                <div class="switch switch4">
                                    <div class="switch-text">
                                        <span><em>400</em>A</span>
                                        <span><em>3</em>P</span>
                                    </div>
                                    <switchc type=""></switchc>
                                </div>
                                <div class="textbox textbox1">ATS</div>
                                <div class="line line3"></div>
                                <div class="textbox textbox2">模块详情</div>
                                <div class="textinfo textinfo1">HVDC</div>
                                <div class="textinfo textinfo2">
                                    <P>整流模块</P>
                                    <P>负载功率:15KW/模块</P>
                                </div>
                                <div class="switch switch5">
                                    <div class="switch-text">
                                        <span><em>400</em>A</span>
                                        <span><em>3</em>P</span>
                                    </div>
                                    <switchc type="open"></switchc>
                                </div>
                            </div>
                            <div class="line-box line-box2">
                                <div class="line-boxcon line-boxcon1">
                                    <div class="line boxline"><span class="title">制冷</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon2">
                                    <div class="line boxline"><span class="title">其它</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon3">
                                    <div class="line boxline"><span class="title">机柜</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                                <div class="line-boxcon line-boxcon4">
                                    <div class="line boxline"><span class="title">备用</span></div>
                                    <div class="textbox boxline-textbox" @click="showDetail('支路详情')">支路详情</div>
                                </div>
                            </div>
                            <div class="line-box line-box3">
                                <div class="line-boxcon line-boxcon1">
                                    <div class="line boxline"><span class="mesh"></span></div>
                                    <div class="line-box-switch">
                                        <switchc type=""></switchc>
                                        <span>电池柜1</span>
                                    </div>
                                </div>
                                <div class="line-boxcon line-boxcon2">
                                    <div class="line boxline"><span class="mesh"></span></div>
                                    <div class="line-box-switch">
                                        <switchc type=""></switchc>
                                        <span>电池柜2</span>
                                    </div>
                                </div>
                                <div class="line-boxcon line-boxcon4">
                                    <div class="line boxline"><span class="mesh"></span></div>
                                    <div class="line-box-switch">
                                        <switchc type=""></switchc>
                                        <span>电池柜3</span>
                                    </div>
                                </div>
                            </div>
                            <div class="line line1"></div>
                            <div class="line line2 linet"></div>
                            <div class="line line4 linet"></div>
                            <div class="line line5"></div>
                            <div class="line line6 linet"></div>
                            <!-- <div @click="showDetail('70路交流输入')" class="clickinfo clickinfo1"></div>
                            <div @click="showDetail('15路整流模块')" class="clickinfo clickinfo2"></div>
                            <div @click="showDetail('51路直流输入')" class="clickinfo clickinfo3"></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        <show-detail :dialogInfo="info" v-if="info.visible"></show-detail>
    </div>
</template>

<script>
import switchc from './MDCinverterComponent/switch.vue'
import showDetail from './MDCinverterComponent/showDetail.vue'
export default {
    
    data(){
        return{
            info:{
                visible:false,
                title:"",
            }
        }
    },
    methods: {
        showDetail:function(title){
            this.info.title=title;
            this.info.visible=true;
        }
    },
    components: {
      switchc,showDetail
    }
}
</script>
<style lang="less" scoped>
    .scrollbarbox-content{
        width: 1080px;
        height: 500px;
        .bg1{
            background: #3087C0;
        }
        .bg3{
            background: #2B77A9;
        }
        .inverter{
            width: 280px;
            height:100%;
            float: left;
            .inverter-box{
                width: 100%;
                height: 30%;
                margin-bottom: 20%;
                float:left;
                background:#3CB2FF;
                border-top:1px solid #fff;
                border-bottom:1px solid #fff;
                color: #fff;
                display:flex;
                .inverter-box-left{
                    width:calc(100% - 35px);
                    height:100%;
                    .inverter-box-left-line{
                        height: 20%;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid rgba(228, 231, 233, 0.5);
                        .inverter-box-text{
                            width: 22%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            text-align: center;
                            justify-content: center;
                            border-left: 1px solid rgba(228, 231, 233, 0.5);
                        }
                        .inverter-box-left-title{
                            width: 34%;
                            padding-left: 10px;
                            justify-content: left;
                            background: #3087C0;
                        }
                    }
                }
                .inverter-box-right{
                    width:35px;
                    height:100%;
                    display:table;
                    padding: 0 5px;
                    font-size: 16px;
                    span{
                        display: table-cell;
                        text-align:center;
                        vertical-align: middle;
                    }
                }
            }
        }
        .inverterline{
            width: calc(100% - 280px);
            height: 100%;
            position: relative;
            float:left;
            .switch{
                width: 105px;
                height: 2px;
                position:absolute;
                .switch-text{
                    font-size: 12px;
                    color: #788693;
                    position:absolute;
                    bottom: 10px;
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
                &.switch1{
                    left:0;
                    top:85px;
                }
                &.switch2{
                    left:0;
                    bottom: 0;
                }
                &.switch3{
                    left:103px;
                    bottom: 0;
                }
                &.switch4{
                    left:103px;
                    bottom: 40px;
                }
                &.switch5{
                    left: 356px;
                    bottom: 18px;
                }
            }
            .textbox{
                position: absolute;
                background: #FEEEEC;
                border: 1px solid #F75B49;
                text-align: center;
                color:#F75B49;
                display: table;
                position: absolute;
                width: 80px;
                height: 28px;
                text-align: center;
                line-height: 28px;
                font-size: 14px;
                display: block;
                &.textbox1{
                    width: 28px;
                    height: 60px;
                    padding: 9px 7px;
                    word-wrap: break-word;
                    line-height: 1;
                    left: 208px;
                    bottom: -10px;
                    background: #FFC940;
                    border: none;
                    color: #fff;
                }
                &.textbox2{
                    left: 266px;
                    bottom: 9px;
                }
                &.textbox3{
                    left: 357px;
                    bottom: 124px;
                }
                &.textbox3:after{
                    content: "";
                    width: 24px;
                    height: 2px;
                    background: #F75B49;
                    position: absolute;
                    right: -23px;
                    bottom: 10px;
                }
                &.textbox4{
                    left: 357px;
                    bottom: 25px;
                }
                &.textbox5{
                    left: 655px;
                    bottom: 25px;
                }
                &.textbox6{
                    left: 655px;
                    top: 165px;
                }
            }
            .textinfo{
                position: absolute;
                text-align: center;
                &.textinfo1{
                    width: 80px;
                    left: 266px;
                    bottom: 40px;
                }
                &.textinfo2{
                    width: 145px;
                    left: 238px;
                }
            }
            .line{
                position:absolute;
                background:#F75B49;
                width: 130px;
                height: 2px;
                &.linet:after{
                    content: "";
                    width: 2px;
                    height: 130px;
                    background: #F75B49;
                    position: absolute;
                    right: 0;
                    bottom: 50%;
                    margin-bottom: -65px;
                }
                &.line1{
                    width: 2px;
                    height: 150px;
                    left: 103px;
                    top: 85px;
                }
                &.line2{
                    left: 103px;
                    top: 85px;
                }
                &.line3{
                    left: 236px;
                    bottom: 18px;
                }
                &.line3:after{
                    height: 100px;
                    margin-bottom: -50px;
                }
                &.line4{
                    width: 40px;
                    left: 460px;
                    bottom: 243px;
                }
                &.line5{
                    width: 2px;
                    height: 170px;
                    left: 384px;
                    bottom: 75px;
                }
                &.line6{
                    left: 385px;
                    bottom: 75px;
                    width: 115px;
                }
                &.line6.linet:after{
                    height: 86px;
                    margin-bottom: -43px;
                }
                
            }
            .line-box{
                width: 235px;
                height: 130px;
                position: absolute;
                &.line-box1{
                    left: 231px;
                    top: 5px;
                }
                &.line-box2{
                    left: 498px;
                    top: 175px;
                }
                &.line-box3{
                    left: 498px;
                    bottom: 47px;
                    height: 86px;
                }
                .line-boxcon{
                    position: absolute;
                    left: 0;
                    &.line-boxcon1{
                        top: 0;
                    }
                    &.line-boxcon2{
                        top: 42px;
                    }
                    &.line-boxcon3{
                        bottom: 42px;
                    }
                    &.line-boxcon4{
                        bottom: 0;
                    }
                    .boxline{
                        position: absolute;
                        left: 0;
                        top: 14px;
                    }
                    .boxline-textbox{
                        position: absolute;
                        left: 130px;
                        top: 0;
                        cursor: pointer;
                    }
                    .line-box-switch{
                        display: flex;
                        align-items: center;
                        position: absolute;
                        left: 65px;
                        top: 5px;
                        span{
                            display: block;
                            width: 100px;
                        }
                    }
                }
                .title{
                    position: relative;
                    top: -18px;
                }
                .mesh{
                    width: 60px;
                    height: 20px;
                    background: #FFC940;
                    display: inline-block;
                    position: relative;
                    top: -10px;
                    z-index: 9;
                }
            }
            .switch-box{
                position: absolute;
                bottom: 225px;
            }
        }
    }
</style>