<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="numbox">
                            <el-scrollbar class="numbox-left scrollbar">
                                <div class="numbox-con">
                                    <template  v-for="(item,index) in 19">
                                        <el-tooltip class="item" effect="light" content="提示文字" placement="left">
                                            <div class="numbox-box" @click="checkbox($event)">
                                                <i class="el-icon-check"></i>
                                                <span>{{item}}</span>
                                            </div>
                                        </el-tooltip>
                                    </template>
                                </div>
                            </el-scrollbar>
                            <div class="numbox-right"><span>{{$t("HVDCgroup")}}</span></div>
                        </div>
                        <div class="textbox textbox1">
                            <div class="title">271.30</div>
                            <div>直流母排电压(V)</div>
                        </div>
                        <div class="dcbox">
                            <div class="threeline">
                                <threeline></threeline>
                            </div>
                            <div class="cyclo">
                                <span class="cyclo-minus">-</span>
                                <span class="cyclo-plus">+</span>
                                <span class="cyclo-text">DC</span>
                            </div>
                            <div class="line line1"></div>
                        </div>
                        <div class="textbox-group">
                            <div class="textbox">
                                <div class="title">1.30</div>
                                <div>模块输出功率(KW)</div>
                            </div>
                            <div class="textbox">
                                <div class="title">4.30</div>
                                <div>模块输出电流(A)</div>
                            </div>
                            <div class="textbox">
                                <div class="title">1.30</div>
                                <div>总负载电流(A)</div>
                            </div>
                        </div>
                        <div class="battery battery1">
                            <div class="battery-threeline"><threeline :height="232"></threeline></div>
                            <div class="battery-box"><battery :direction="false"></battery></div>
                            <div class="battery-text">
                                <p>电池组A</p>
                                <p>电流(A)：0.00</p>
                            </div>
                        </div>
                        <div class="battery battery2">
                            <div class="battery-threeline"><threeline :height="232" :direction="false"></threeline></div>
                            <div class="battery-box"><battery :direction="true"></battery></div>
                            <div class="battery-text">
                                <p>电池组B</p>
                                <p>电流(A)：0.00</p>
                            </div>
                        </div>
                        <div class="battery battery3">
                            <div class="battery-threeline"><threeline :height="232"></threeline></div>
                            <div class="battery-box"><battery :direction="false"></battery></div>
                            <div class="battery-text">
                                <p>电池组C</p>
                                <p>电流(A)：0.00</p>
                            </div>
                        </div>
                        <div class="server">
                            <div class="server-box">
                                <div class="server-box-con">
                                    <span v-for="item in 17"></span>
                                </div>
                            </div>
                            <div class="server-btn"></div>
                        </div>
                        <div class="line line2"></div>
                        <div class="Triangle Triangle1"></div>
                        <div class="Triangle Triangle2"></div>
                        <div class="Triangle Triangle3"></div>
                        <div class="Triangle Triangle4"></div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import battery from './CircuitMapComponent/battery.vue'
import threeline from './CircuitMapComponent/threeLine.vue'
export default {
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
          
        }
    },
    methods: {
        checkbox:function(ev){
            for(let i=0;i<this.$el.querySelectorAll('.numbox-box').length;i++){
                this.$el.querySelectorAll(".numbox-box")[i].classList.remove("active");
            }
            ev.currentTarget.classList.add("active");
        }
    },
    components: {
      battery,threeline
    }
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width: 865px;
        height:460px;
        .numbox{
            width: 110px;
            height: 450px;
            position:absolute;
            left:50px;
            top:0;
            display:flex;
            background:#ECF2F6;
            .numbox-left{
                width: calc(100% - 30px);
                height: 100%;
                padding: 0 6px 5px;
                .numbox-con{
                    width: 100%;
                    .numbox-box{
                        width: 70px;
                        height:30px;
                        color:#fff;
                        line-height:30px;
                        text-align:center;
                        background:#3CB2FF;
                        cursor: pointer;
                        position:relative;
                        margin-top: 5px;
                        .el-icon-check{
                            position: absolute;
                            top: 50%;
                            margin-top: -8px;
                            left: 10px;
                            display:none;
                        }
                        &.active{
                            .el-icon-check{
                                display:block;
                            }
                        }
                        &.alarm{
                            background: #FF0000;
                        }
                    }
                }
                
            }
            .numbox-right{
                width:30px;
                height:100%;
                background:#E4E7E9;
                writing-mode: vertical-rl;
                padding: 0 5px;
                font-size:16px;
            }
        }
        .dcbox{
            position: absolute;
            width: 50px;
            height: 236px;
            left: 320px;
            top: 0;
            .threeline{
                width: 32px;
                height: 60px;
                position:absolute;
                left: 9px;
                top: 0px;
            }
            .cyclo{
                width: 50px;
                height:50px;
                background:#838FA3;
                position:absolute;
                left: 0px;
                top: 80px;
                border-radius:50%;
                color:#fff;
                font-size:20px;
                z-index:9;
                span{
                    position:absolute;
                    left: 50%;
                    margin-left: -7px;
                    width: 14px;
                    height: 14px;
                    &.cyclo-minus{
                        top: -2px;
                    }
                    &.cyclo-plus{
                        bottom: 14px;
                    }
                    &.cyclo-text{
                        left: -20px;
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        color: #4f5b72;
                        font-size: 16px;
                        top: 50%;
                        margin-top: -10px;
                    }
                }
                
            }
        }
        
        .textbox{
            width: 110px;
            height: 50px;
            line-height: 20px;
            position: absolute;
            font-size: 12px;
            padding: 5px;
            background: #3CB2FF;
            color: #fff;
            text-align: center;
            .title{
                border-bottom: 1px solid rgba(255,255,255,0.5);
            }
            &.textbox1{
                left: 170px;
                top: 80px;
            }
        }
        .textbox-group{
            position: absolute;
            left: 388px;
            .textbox{
                margin-bottom: 30px;
                position: initial;
            }
        }
        .Triangle{
            position: absolute;
            width: 0;
            height: 0;
            &.Triangle1{
                border-top: 10px solid transparent;
                border-right: 0px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 15px solid #838FA3;
                top: 221px;
                left: 445px;
            }
            &.Triangle2{
                border-left: 10px solid transparent;
                border-top: 0px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 15px solid #838FA3;
                top: 170px;
                left: 551px;
            }
            &.Triangle3{
                border-left: 10px solid transparent;
                border-bottom: 0px solid transparent;
                border-right: 10px solid transparent;
                border-top: 15px solid #838FA3;
                top: 260px;
                left: 622px;
            }
            &.Triangle4{
                border-left: 10px solid transparent;
                border-top: 0px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 15px solid #838FA3;
                top: 170px;
                left: 700px;
            }
        }
        .battery{
            width: 100px;
            height:236px;
            position: absolute;
            .battery-threeline{
                position: absolute;
                top: 0;
                left: 10px;
            }
            .battery-box{
                position: absolute;
                top: 80px;
                left: 0;
            }
            .battery-text{
                position: absolute;
                left: 55px;
                width: 90px;
                height: 100px;
                display: table;
                color: #838FA3;
                font-size: 12px;
                top: 86px;
                text-align: left;
            }
            &.battery1{
                left: 535px;
                top: 0px;
            }
            &.battery2{
                left: 606px;
                bottom: 0px;
                height: 230px;
            }
            &.battery3{
                left: 684px;
                top: 0px;
            }
        }
        .server{
            width: 100px;
            height: 200px;
            background: #3CB2FF;
            padding: 6px;
            position: absolute;
            right: 0;
            top: 132px;
            border-radius: 4px;
            z-index: 9;
            .server-box{
                width: 100%;
                height: 100%;
                border: 5px solid #fff;
                .server-box-con{
                    padding: 2px 5px;
                    border-radius: 4px;
                    span{
                        border: 1px solid #fff;
                        height: 5px;
                        width: 100%;
                        display: block;
                        margin: 5px 0;
                    }
                }
            }
            .server-btn{
                position: absolute;
                width: 4px;
                height: 26px;
                background: #fff;
                border-radius: 10px;
                left: 1px;
                top: 50%;
                margin-top: -13px;
                &:before{
                    content: "";
                    width: 2px;
                    height: 2px;
                    background: #3CB2FF;
                    position: absolute;
                    bottom: 2px;
                    left: 1px;
                    border-radius: 50%;
                }
            }
        }
        .line{
            position:absolute;
            width:2px;
            background:#838FA3;
            &.line1{
                height: 172px;
                left: 24px;
                top: 60px;
            }
            &.line2{
                width: 520px;
                height: 2px;
                left: 344px;
                top: 230px;
            }
            &.line3{
                width: 2px;
                height: 80px;
                left: 464px;
                top: 245px;
            }
            &.line4{
                width: 2px;
                height: 160px;
                right: 309px;
                top: 165px;
            }
        }
    }
</style>