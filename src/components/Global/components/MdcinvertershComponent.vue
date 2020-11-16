<template>
    <div class="content content-flex">
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
                        <div class="inverter-box-text"><span>{{initParams.AAA}}</span></div>
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
                <div class="inverter-box-right vertical-rl bg3"><span>市电A路</span></div>
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
                <div class="inverter-box-right vertical-rl bg3"><span>市电B路</span></div>
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
            <div class="switch switch2">
                <div class="switch-text">
                    <span><em>400</em>A</span>
                    <span><em>3</em>P</span>
                </div>
                <switchc type=""></switchc>
            </div>
            <div class="textbox textbox1">ATS</div>
            <div class="switch-scrollbar">
                <el-scrollbar class="scrollbar">
                    <div class="switch-box">
                        <div class="switch-boxcon">
                            <div class="line-box" v-for="item in list">
                                <div class="line-boxcon">
                                    <div class="boxline switch">
                                        <div class="switch-text">
                                            <span><em>400</em>A</span>
                                            <span><em>3</em>P</span>
                                        </div>
                                    </div>
                                    <div class="textbox boxline-textbox" @click="showDetail()">{{item.name}}</div>
                                </div>
                            </div>
                            <div class="line-box" v-for="item in 24">
                                <div class="line-boxcon">
                                    <div class="boxline switch">
                                        <div class="switch-text">
                                            <span><em>400</em>A</span>
                                            <span><em>3</em>P</span>
                                        </div>
                                    </div>
                                    <div class="textbox boxline-textbox" @click="showDetail()">机柜</div>
                                </div>
                            </div>
                        </div>
                        <div class="switch-boxline">
                            <div class="line line5"></div>
                            <div class="line line6"></div>
                            <div class="line line7"></div>
                            <div class="textbox textbox2">UPS</div>
                        </div>
                        <div class="switch-boxcon">
                            <div class="line-box" v-for="item in 24">
                                <div class="line-boxcon">
                                    <div class="boxline switch">
                                        <div class="switch-text">
                                            <span><em>400</em>A</span>
                                            <span><em>3</em>P</span>
                                        </div>
                                    </div>
                                    <div class="textbox boxline-textbox" @click="showDetail()">机柜</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line4"></div>
        </div>
        <show-detail :dialogInfo="info" v-if="info.visible"></show-detail>
    </div>
</template>

<script>
import switchc from './MDCinverterComponent/switch.vue'
import showDetail from './MDCinverterComponent/showDetail.vue'
export default {
    created () {
        let config=[
            {name:"市电A路A相电流",key:"AAA",type:"value"},
            {name:"市电A路B相电流",key:"ABA",type:"value"},
            {name:"市电A路C相电流",key:"ACA",type:"value"},
            {name:"市电A路A相电压",key:"AAV",type:"value"},
            {name:"市电A路B相电压",key:"ABV",type:"value"},
            {name:"市电A路C相电压",key:"ACV",type:"value"},
            {name:"市电A路A相功率",key:"AAKW",type:"value"},
            {name:"市电A路A相功率",key:"AAKW",type:"value"},
            {name:"市电A路B相功率",key:"ABKW",type:"value"},
            {name:"市电A路C相功率",key:"ACKW",type:"value"},
            {name:"市电A路A相功率因素",key:"AAPF",type:"value"},
            {name:"市电A路B相功率因素",key:"ABPF",type:"value"},
            {name:"市电A路C相功率因素",key:"ACPF",type:"value"},

            {name:"市电B路A相电流",key:"BAA",type:"value"},
            {name:"市电B路B相电流",key:"BBA",type:"value"},
            {name:"市电B路C相电流",key:"BCA",type:"value"},
            {name:"市电B路A相电压",key:"BAV",type:"value"},
            {name:"市电B路B相电压",key:"BBV",type:"value"},
            {name:"市电B路C相电压",key:"BCV",type:"value"},
            {name:"市电B路A相功率",key:"BAKW",type:"value"},
            {name:"市电B路A相功率",key:"BAKW",type:"value"},
            {name:"市电B路B相功率",key:"BBKW",type:"value"},
            {name:"市电B路C相功率",key:"BCKW",type:"value"},
            {name:"市电B路A相功率因素",key:"BAPF",type:"value"},
            {name:"市电B路B相功率因素",key:"BBPF",type:"value"},
            {name:"市电B路C相功率因素",key:"BCPF",type:"value"},
            
            {name:"市电A路开关",key:"Aswitch",type:"value"},
            {name:"市电A路制冷",key:"Acool",type:"item"},
            {name:"市电A路其它",key:"Aother",type:"item"},
            {name:"市电A路机柜",key:"Arack",type:"item"},
            {name:"市电A路备用",key:"Ares",type:"item"},
            {name:"市电A路ATS开关",key:"AATSswitch",type:"value"},
            
            {name:"市电B路开关",key:"Bswitch",type:"value"},
            {name:"市电B路ATS开关",key:"BATSswitch",type:"value"},
            {name:"市电B路HVDC开关",key:"BHVDCswitch",type:"value"},
            {name:"市电B路制冷",key:"Bcool",type:"item"},
            {name:"市电B路其它",key:"Bother",type:"item"},
            {name:"市电B路机柜",key:"Brack",type:"item"},
            {name:"市电B路备用",key:"Bres",type:"item"},
            {name:"市电B路电池柜1开关",key:"BswitchBox1",type:"value"},
            {name:"市电B路电池柜2开关",key:"BswitchBox2",type:"value"},
            {name:"市电B路电池柜3开关",key:"BswitchBox3",type:"value"},
            
        ]
    },
    data(){
        return{
            info:{
                visible:false,
                title:"",
            },
            initParams:{
                AAA:"234",
                ABA:"",
                ACA:"",
                AAV:"",
                ABV:"",
                ACV:"",
                AAKW:"",
                ABKW:"",
                ACKW:"",
                AAPF:"",  //功率因数
                ABPF:"",
                ACPF:"",
                BAA:"",
                BBA:"",
                BCA:"",
                BAV:"",
                BBV:"",
                BCV:"",
                BAKW:"",
                BBKW:"",
                BCKW:"",
                BAPF:"",
                BBPF:"",
                BCPF:"",
                //
            },
            list:[
                {name:"UPS主路"},{name:"UPS旁路"},{name:"空调1"},{name:"空调2"},{name:"空调3"},{name:"预留"},
            ]
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
    .content-flex{
        justify-content: center;
    }
    .bg1{
        background: #3087C0;
    }
    .bg3{
        background: #2B77A9;
    }
    .inverter{
        width: 230px;
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
                width:calc(100% - 30px);
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
                        overflow: hidden;
                    }
                    .inverter-box-left-title{
                        width: 34%;
                        padding-left: 5px;
                        justify-content: left;
                        background: #3087C0;
                    }
                }
            }
            .inverter-box-right{
                width:30px;
                height:100%;
                padding: 0 5px;
                font-size: 16px;
                vertical-align: middle;
                text-align: center;
            }
        }
    }
    .inverterline{
        height: 100%;
        position: relative;
        float:left;
        .switch-scrollbar{
            width: 100%;
            height: 100%;
            padding-left: 195px;
        }
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
                top:65px;
            }
            &.switch2{
                left: 30px;
                top: 122px;
                width: 75px;
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
                left: 346px;
                bottom: 18px;
            }
        }
        .textbox{
            position: absolute;
            border: 1px solid #838FA3;
            text-align: center;
            color:#838FA3;
            display: table;
            position: absolute;
            width: 80px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            font-size: 14px;
            display: block;
            &.active{
                border-color: #F75B49;
                color: #F75B49;
            }
            &.textbox1{
                width: 28px;
                height: 75px;
                padding: 15px 7px;
                word-wrap: break-word;
                line-height: 1;
                left: 105px;
                top: 54px;
                background: #FFC940;
                border: none;
                z-index: 99;
                color: #fff;
            }
            &.textbox2{
                width: 28px;
                height: 75px;
                padding: 20px 7px;
                word-wrap: break-word;
                line-height: 1;
                left: 75px;
                top: -14px;
                background: #FFC940;
                border: none;
                z-index: 99;
                color: #fff;
                position: relative;
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
            background:#838FA3;
            width: 75px;
            height: 2px;
            &.linet:after{
                content: "";
                width: 2px;
                height: 130px;
                background: #838FA3;
                position: absolute;
                right: 0;
                bottom: 50%;
                margin-bottom: -65px;
            }
            &.line1{
                width: 2px;
                height: 180px;
                left: 29px;
                top: 122px;
            }
            &.line2{
                left: 0;
                top: 300px;
                width: 30px;
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
                left: 120px;
                top: 102px;
            }
            
            &.line6{
                left: 385px;
                bottom: 75px;
                width: 26px;
            }
            &.line6.linet:after{
                height: 86px;
                margin-bottom: -43px;
            }
            
        }
        .line-box{
            .line-boxcon{
                width: 155px;
                height: 55px;
                .boxline{
                    position: relative;
                    background: #838FA3;
                    width: 75px;
                    height: 2px;
                }
                .boxline-textbox{
                    position: relative;
                    left: 75px;
                    top: -14PX;
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
        }
        .switch-boxline{
            width: 175px;
            height: 200px;
            .line{
                width: 75px;
                height: 2px;
                position: relative;
                left: 0;
            }
            .line5{
                top: 0;
            }
            .line7{
                top: 30px;
                left: 100px;
            }
            .line6{
                top: 55px;
            }
        }
        .switch-box{
            height: auto;
            padding-top: 35px;
            display: flex;
            padding-right: 10px;
            .switch-boxcon{
                .line-box{
                    border-left: 2px solid #838FA3;
                }
            }
        }
    }
</style>