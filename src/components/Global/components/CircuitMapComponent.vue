<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="numbox">
                            <div class="numbox-left">
                                <div class="numbox-con">
                                    <div class="numbox-box" v-for="(item,index) in 9" @click="checkbox($event)">
                                        <i class="el-icon-check"></i>
                                        <span>{{item}}</span>
                                    </div>
                                </div>
                                <div class="numbox-con">
                                    <div class="numbox-box alarm" v-for="(item,index) in 18" v-if="item>9"  @click="checkbox($event)">
                                        <i class="el-icon-check"></i>
                                        <span>{{item}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="numbox-right"><span>高压直流组</span></div>
                        </div>
                        <div class="threeline">
                            <threeline></threeline>
                        </div>
                        <div class="cyclo">
                            <span class="cyclo-minus">-</span>
                            <span class="cyclo-plus">+</span>
                            <span class="cyclo-text">DC</span>
                        </div>
                        <div class="textbox textbox1 textboxred">
                            <div>整机输出电压</div>
                            <p><span>234</span>V</p>
                        </div>
                        <div class="textbox textbox2 textboxred">
                            <div>输出电压</div>
                            <p><span>234</span>V</p>
                        </div>
                        <div class="textbox textbox3 textboxred">
                            <div>整机模块状态</div>
                            <p><span></span></p>
                        </div>
                        <div class="textbox textbox4 textboxgreen">
                            <div>整机输出电流</div>
                            <p><span>4</span>A</p>
                        </div>
                        <div class="textbox textbox5 textboxgreen">
                            <div>输出电流</div>
                            <p><span>23</span>A</p>
                        </div>
                        <div class="textbox textbox6 textboxtint">
                            <div>电池电流</div>
                            <p><span>23</span>A</p>
                            <div class="textboxtint alarm">32</div>
                        </div>
                        <div class="textbox textbox7 textboxtint">
                            <div>电池电流</div>
                            <p><span>23</span>A</p>
                            <div class="textboxtint alarm" style="top: -30px;">1232</div>
                        </div>
                        <div class="textbox textbox8 textboxtint">
                            <div>电池电流</div>
                            <p><span>23</span>A</p>
                            <div class="textboxtint"></div>
                        </div>
                        <div class="battery battery1">
                            <battery :direction="false"></battery>
                            <div class="battery-text"><span class="state">未知</span><span class="text">电池组C</span></div>
                        </div>
                        <div class="battery battery2">
                            <battery :direction="false"></battery>
                            <div class="battery-text"><span class="state">未知</span><span class="text">电池组B</span></div>
                        </div>
                        <div class="battery battery3">
                            <battery></battery>
                            <div class="battery-text" style="top: 0"><span class="state" style="bottom:-27px;top:auto;">未知</span><span class="text">电池组A</span></div>
                        </div>
                        <div class="server">
                            <div class="server-box">Server</div>
                        </div>
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                        <div class="line line4"></div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import battery from '@/components/battery.vue'
import threeline from '@/components/threeLine.vue'
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
        width: 930px;
        height:460px;
        .numbox{
            width: 200px;
            height: 340px;
            position:absolute;
            left:0;
            top:0;
            display:flex;
            background:#EEF1F6;
            .numbox-left{
                width: calc(100% - 35px);
                display:flex;
                flex-wrap:wrap;
                justify-content: space-evenly;
                padding: 0 6px;
                .numbox-con{
                    width: 50%;
                    height:100%;
                    display:flex;
                    flex-wrap:wrap;
                    align-content:space-evenly;
                    justify-content: space-evenly;
                    .numbox-box{
                        width: 70px;
                        height:30px;
                        color:#fff;
                        line-height:30px;
                        text-align:center;
                        background:#24BB8B;
                        cursor: pointer;
                        position:relative;
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
                width:35px;
                height:100%;
                background:#D0D7E4;
                display:table;
                font-size:18px;
                span{
                    display:table-cell;
                    vertical-align:middle;
                    text-align:center;
                }
            }
        }
        .threeline{
            width: 32px;
            height: 60px;
            position:absolute;
            left: 243px;
            top: 45px;
        }
        .textbox{
            width: 100px;
            height: 50px;
            position: absolute;
            font-size: 12px;
            padding: 5px;
            color: #fff;
            text-align: left;
            p{
                margin-top:2px;
                font-size:16px;
            }
            &.textboxred{
                background:#FF7369;
            }
            &.textboxgreen{
                background:#66CDAD;
            }
            &.textboxtint{
                background:#80D1D6;
                .textboxtint{
                    width: 60px;
                    height: 26px;
                    background: #f00;
                    position: absolute;
                    bottom: -30px;
                    font-size: 16px;
                    line-height: 26px;
                    text-align: center;
                    right: 0;
                    display:none;
                }
                .alarm{
                    display:block;
                }
            }
            &.textbox1{
                left: 310px;
                top: 10px;
            }
            &.textbox2{
                left: 310px;
                top: 90px;
            }
            &.textbox3{
                left: 310px;
                top: 155px;
            }
            &.textbox4{
                left: 425px;
                top: 10px;
            }
            &.textbox5{
                left: 425px;
                top: 90px;
            }
            &.textbox6{
                left: 275px;
                bottom: 140px;
            }
            &.textbox7{
                right: 115px;
                top: 170px;
            }
            &.textbox8{
                right: 115px;
                bottom: 136px;
            }

        }
        .cyclo{
            width: 50px;
            height:50px;
            background:#4F5B72;
            position:absolute;
            left: 235px;
            top: 122px;
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
        .battery{
            width: 100px;
            height:150px;
            position: absolute;
            .battery-text{
                position: absolute;
                right: -28px;
                width: 20px;
                height: 100px;
                display: table;
                color: #ffc85c;
                font-size: 16px;
                bottom: 0;
                .text{
                    display: table-cell;
                    text-align:center;
                    vertical-align: middle;
                }
                .state{
                    width: 44px;
                    height: 26px;
                    background: #202833;
                    text-align: center;
                    color: #fff;
                    position: absolute;
                    top: -27px;
                    left: -20px;
                    font-size: 12px;
                    line-height: 26px;
                }
            }
            &.battery1{
                left: 415px;
                bottom: 50px;
            }
            &.battery2{
                left:  570px;
                bottom: 50px;
            }
            &.battery3{
                left:  570px;
                top: 80px;
            }
        }
        .server{
            width: 100px;
            height: 200px;
            background: #505C73;
            display: table;
            position: absolute;
            right: 0;
            top: 146px;
            color: #fff;
            font-size: 18px;
            z-index: 9;
            .server-box{
                display: table-cell;
                text-align:center;
                vertical-align: middle;
            }
        }
        .line{
            position:absolute;
            width:2px;
            background:#5E6673;
            &.line1{
                height: 147px;
                left: 258px;
                top: 100px;
            }
            &.line2{
                width: 600px;
                height: 2px;
                left: 259px;
                top: 245px;
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