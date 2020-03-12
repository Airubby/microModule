<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="inverter">
                            <div class="inverter-box">
                                <div class="inverter-box-left">
                                    <div class="inverter-box-leftl">
                                        <div class="inverter-box-lrtop">
                                            <div class="inverter-box-text">&nbsp;</div>
                                            <div class="inverter-box-text"><span>电流(A)</span></div>
                                            <div class="inverter-box-text"><span>电压(V)</span></div>
                                            <div class="inverter-box-text"><span>功率因素</span></div>
                                            <div class="inverter-box-text"><span>功率(KW)</span></div>
                                        </div>
                                        <div class="inverter-box-lrbottom">
                                            <div class="inverter-box-text"><span>总功率(KW)</span></div>
                                            <div class="inverter-box-text"><span>总电能(KH)</span></div>
                                        </div>
                                    </div>
                                    <div class="inverter-box-leftr">
                                        <div class="inverter-box-lrtop">
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>A相</span></div>
                                                <div class="inverter-box-text"><span>23</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                            </div>
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>B相</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>32</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>23</span></div>
                                            </div>
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>C相</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>3</span></div>
                                                <div class="inverter-box-text"><span>3</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                            </div>
                                        </div>
                                        <div class="inverter-box-lrbottom">
                                            <div class="inverter-box-text"><span>3</span></div>
                                            <div class="inverter-box-text"><span>4</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inverter-box-right"><span>市电A路</span></div>
                            </div>
                            <div class="inverter-box">
                                <div class="inverter-box-left">
                                    <div class="inverter-box-leftl">
                                        <div class="inverter-box-lrtop">
                                            <div class="inverter-box-text">&nbsp;</div>
                                            <div class="inverter-box-text"><span>电流(A)</span></div>
                                            <div class="inverter-box-text"><span>电压(V)</span></div>
                                            <div class="inverter-box-text"><span>功率因素</span></div>
                                            <div class="inverter-box-text"><span>功率(KW)</span></div>
                                        </div>
                                        <div class="inverter-box-lrbottom">
                                            <div class="inverter-box-text"><span>总功率(KW)</span></div>
                                            <div class="inverter-box-text"><span>总电能(KH)</span></div>
                                        </div>
                                    </div>
                                    <div class="inverter-box-leftr">
                                        <div class="inverter-box-lrtop">
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>A相</span></div>
                                                <div class="inverter-box-text"><span>23</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                            </div>
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>B相</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>32</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>23</span></div>
                                            </div>
                                            <div class="inverter-box-leftrb">
                                                <div class="inverter-box-text"><span>C相</span></div>
                                                <div class="inverter-box-text"><span>2</span></div>
                                                <div class="inverter-box-text"><span>3</span></div>
                                                <div class="inverter-box-text"><span>3</span></div>
                                                <div class="inverter-box-text"><span>4</span></div>
                                            </div>
                                        </div>
                                        <div class="inverter-box-lrbottom">
                                            <div class="inverter-box-text"><span>3</span></div>
                                            <div class="inverter-box-text"><span>4</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inverter-box-right"><span>市电B路</span></div>
                            </div>
                        </div>
                        <div class="inverterline">
                            <div class="switch switch1">
                                <div class="switch-text">
                                    <span><em>400</em>A</span>
                                    <span><em>3</em>P</span>
                                    <span>可整定</span>
                                </div>
                                <switchc type="open"></switchc>
                            </div>
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
                            <div class="switch switch5">
                                <div class="switch-text">
                                    <span><em>25</em>A</span>
                                    <span><em>3*1</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch6">
                                <div class="switch-text">
                                    <span><em>25</em>A</span>
                                    <span><em>3*1</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch7">
                                <div class="switch-text">
                                    <span><em>16</em>A</span>
                                    <span><em>3</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch8">
                                <div class="switch-text">
                                    <span><em>16</em>A</span>
                                    <span><em>3</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch9">
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch10">
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch11">
                                <div class="switch-text">
                                    <span><em>630</em>A</span>
                                    <span><em>2</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch12">
                                <div class="switch-text">
                                    <span><em>32</em>A</span>
                                    <span><em>2</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch13">
                                <div class="switch-text">
                                    <span><em>32</em>A</span>
                                    <span><em>2</em>P</span>
                                </div>
                                <switchc type=""></switchc>
                            </div>
                            <div class="switch switch14">
                                <switchc type=""></switchc>
                            </div>

                            <div class="textbox textbox1">ATS</div>
                            <div class="textbox textbox2">HVD模块</div>
                            <div class="textbox textbox3">HVD模块</div>
                            <div class="textbox textbox4">电池柜</div>
                            <div class="textbox textbox5">电池柜</div>
                            <div class="textbox textbox6">电池柜</div>

                            <div class="bracket bracket1">
                                <span class="symbol">}</span>
                                <div>
                                    <div class="info show-info">69路断开</div>
                                    <div class="text"><span>70路交流输入</span></div>
                                </div>
                            </div>
                            <div class="bracket bracket2">
                                <span class="symbol">}</span>
                                <div>
                                    <div class="info"></div>
                                    <div class="text"><span>51路直流输入</span></div>
                                </div>
                            </div>
                            <div class="bracket bracket3">
                                <div class="text"><span>15路整流模块</span></div>
                            </div>

                            <div class="img img1"><img src="~@/assets/images/off.png"></div>
                            <div class="img img2"><img src="~@/assets/images/on.png"></div>
                            <div class="img img3"><img src="~@/assets/images/on.png"></div>

                            <div class="line line1"></div>
                            <div class="line line2 linet"></div>
                            <div class="line line3 linet"></div>
                            <div class="line line4 linet"></div>
                            <div class="line line5 linet"></div>
                            <div @click="showDetail('70路交流输入')" class="clickinfo clickinfo1"></div>
                            <div @click="showDetail('15路整流模块')" class="clickinfo clickinfo2"></div>
                            <div @click="showDetail('51路直流输入')" class="clickinfo clickinfo3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        <show-detail :dialogInfo="info" v-if="info.visible"></show-detail>
    </div>
</template>

<script>
import switchc from '@/components/switch.vue'
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
        width: 1165px;
        height: 500px;
        .inverter{
            width: 280px;
            height:100%;
            float: left;
            .inverter-box{
                width: 100%;
                height: 50%;
                float:left;
                background:#52CB7B;
                border-top:1px solid #fff;
                border-bottom:1px solid #fff;
                color: #fff;
                display:flex;
                .inverter-box-left{
                    width:calc(100% - 35px);
                    height:100%;
                    display:flex;
                    .inverter-box-text{
                        display:table;
                        width: 100%;
                        span{
                            display:table-cell;
                            vertical-align:middle;
                            text-align: center;
                        }
                    }
                    .inverter-box-lrtop{
                        width:100%;
                        height: 72%;
                        display:flex;
                        .inverter-box-text{
                            height:20%
                        }
                        .inverter-box-text:nth-of-type(1){
                            border-bottom: 1px solid #36AB5A;
                        }
                    }
                    .inverter-box-lrbottom{
                        width:100%;
                        height:28%;
                        display:flex;
                        .inverter-box-text{
                            height:50%
                        }
                    }
                    .inverter-box-leftl{
                        width: 85px;
                        height:100%;
                        background:#4ABD70;
                        .inverter-box-lrtop{
                            flex-wrap: wrap;
                        }
                        .inverter-box-lrbottom{
                            flex-wrap: wrap;
                        }
                    }
                    .inverter-box-leftr{
                        width:calc(100% - 85px);
                        height:100%;
                        .inverter-box-leftrb{
                            width: 100%;
                            border-left: 1px solid #36ab5a
                        }
                        .inverter-box-lrbottom{
                            flex-wrap: wrap;
                            .inverter-box-text{
                                border-left: 1px solid #36ab5a;
                                border-top: 1px solid #36ab5a;
                            }
                        }
                    }
                }
                .inverter-box-right{
                    width:35px;
                    height:100%;
                    background:#36AB5A;
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
                        margin-left: 5px;
                        em{
                            font-size: 14px;
                            font-style: normal;
                        }
                    }
                    span:nth-of-type(1){
                        background: #CEFBDC;
                    }
                    span:nth-of-type(2){
                        background: #FDF5D0;
                    }
                }
                &.switch1{
                    left:0;
                    top:140px;
                }
                &.switch2{
                    left:0;
                    bottom:165px;
                }
                &.switch3{
                    left:103px;
                    bottom:205px;
                }
                &.switch4{
                    left:103px;
                    bottom:165px;
                }
                &.switch5{
                    left:253px;
                    top:111px;
                }
                &.switch6{
                    left:253px;
                    top:169px;
                }
                &.switch7{
                    left:253px;
                    bottom:233px;
                }
                &.switch8{
                    left:253px;
                    bottom:135px;
                }
                &.switch9{
                    width: 40px;
                    left: 427px;
                    bottom: 37px;
                }
                &.switch10{
                    left:550px;
                    bottom:37px;
                }
                &.switch11{
                    left: 553px;
                    bottom: 184px;
                }
                &.switch12{
                    left: 665px;
                    bottom: 213px;
                    width: 76px;
                }
                &.switch13{
                    left: 665px;
                    width: 76px;
                    bottom: 155px;
                }
                &.switch14{
                    left: 550px;
                    top: 178px;
                }
            }
            .textbox{
                position: absolute;
                background: #00CF78;
                text-align: center;
                color:#fff;
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
                    bottom: 155px;
                }
                &.textbox2{
                    left: 357px;
                    bottom: 222px;
                }
                &.textbox3{
                    left: 357px;
                    bottom: 124px;
                }
                &.textbox2:after{
                    content: "";
                    width: 24px;
                    height: 2px;
                    background: #00CF78;
                    position: absolute;
                    right: -23px;
                    bottom: 12px;
                }
                &.textbox3:after{
                    content: "";
                    width: 24px;
                    height: 2px;
                    background: #00CF78;
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
            .bracket{
                position: absolute;
                display: flex;
                .symbol{
                    transform: scale(1,2);
                    font-size: 32px;
                    font-weight: 100;
                    color: #e8e8e8;
                }
                .info{
                    width:95px;
                    background:#FF0C11;
                    color:#fff;
                    height:22px;
                    line-height: 22px;
                    position: absolute;
                    left:50%;
                    margin-left: -42px;
                    display:none;
                    &.show-info{
                        display: block;
                    }
                }
                .text{
                    font-size: 16px;
                    color:#57A000;
                    display: table;
                    width: 140px;
                    height: 64px;
                    span{
                        display: table-cell;
                        vertical-align: middle;
                    }
                }
                &.bracket1{
                    left: 357px;
                    top: 112px;
                }
                &.bracket2{
                    left: 740px;
                    bottom: 150px;
                }
                &.bracket3{
                    left: 275px;
                    bottom: 160px;
                }
            }
            .img{
                position: absolute;
                width: 26px;
                z-index:9;
                img{
                    width: 26px;
                }
                &.img1{
                    left: 495px;
                    bottom: 75px;
                }
                &.img2{
                    left: 535px;
                    bottom: 75px;
                }
                &.img3{
                    left: 535px;
                    top: 212px;
                }
                &.img1:before{
                    content: "";
                    width: 2px;
                    height: 147px;
                    background: #00CF78;
                    position: absolute;
                    left: 14px;
                    top: -42px;
                    z-index:-1;
                }
                &.img1:after{
                    content: "";
                    width: 20px;
                    height: 2px;
                    background: #00CF78;
                    position: absolute;
                    left: -4px;
                    top: 103px;
                    z-index:-1;
                }
                &.img2:before{
                    content: "";
                    width: 2px;
                    height: 147px;
                    background: #00CF78;
                    position: absolute;
                    left: 14px;
                    top: -42px;
                    z-index:-1;
                }
                &.img3:before{
                    content: "";
                    width: 2px;
                    height: 140px;
                    background: #00CF78;
                    position: absolute;
                    left: 14px;
                    top: -34px;
                    z-index:-1;
                }
            }
            .line{
                position:absolute;
                background:#00CF78;
                &.linet:after{
                    content: "";
                    width: 2px;
                    height: 60px;
                    background: #00CF78;
                    position: absolute;
                    right: 0;
                    bottom: 50%;
                    margin-bottom: -30px;

                }
                &.line1{
                    width: 2px;
                    height: 155px;
                    left: 103px;
                    top: 140px;
                }
                &.line2{
                    width: 150px;
                    height: 2px;
                    left: 103px;
                    top: 140px;
                }
                &.line3{
                    width: 18px;
                    height: 2px;
                    left: 236px;
                    bottom: 184px;
                }
                &.line3:after{
                    height: 100px;
                    margin-bottom: -50px;
                }
                &.line4{
                    width: 96px;
                    height: 2px;
                    left: 458px;
                    bottom: 184px;
                }
                &.line4:after{
                    height: 100px;
                    margin-bottom: -50px;
                    left: 0;
                }
                &.line5{
                    width: 10px;
                    height: 2px;
                    left: 656px;
                    bottom: 184px;
                }
                
            }
            .clickinfo{
                position:absolute;
                cursor: pointer;
                &.clickinfo1{
                    width: 240px;
                    height:100px;
                    left: 250px;
                    top: 78px;
                }
                &.clickinfo2{
                    width: 212px;
                    height: 147px;
                    left: 250px;
                    bottom: 120px;
                }
                &.clickinfo3{
                    width: 210px;
                    height: 100px;
                    left: 662px;
                    top: 252px;
                }
            }
        }
    }
</style>