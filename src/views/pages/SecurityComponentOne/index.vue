<template>
    <div class="content content-flex bgfff" style="top:-7px;">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="his">
                            <div class="his-con">
                                <div class="his-con-line"><em v-for="item in 36"></em></div>
                                <div class="his-con-line his-con-lineb"><em v-for="item in 36"></em></div>
                                <div class="his-con-line his-con-linel"><em v-for="item in 13"></em></div>
                                <!-- <div class="his-con-line his-con-linel his-con-liner"><em v-for="item in 10"></em></div> -->
                                <div class="his-conbox" :class="{'his-conbox1':item.type=='kt'}" v-for="item in data1">
                                    <cabinet-component :color="item.color"></cabinet-component>
                                </div>
                            </div>
                            <div class="his-cen">
                                <div class="his-cendoor" :class="{'his-cendoor-close':leftDoor}"></div>
                                <div class="his-cencon">
                                    <div class="cenimg-box">
                                        <div class="cen-img" v-for="item in imgarr.cenimg">
                                            <img :src="'/images/'+item+'.png'">
                                        </div>
                                    </div>
                                    <div class="arrows">
                                        <div class="arrows-con" v-for="item in 4">
                                            <arrows-component type="left" color="#3EB3FF" class="arrows-box"></arrows-component>
                                            <arrows-component type="left" color="#3EB3FF" class="arrows-box"></arrows-component>
                                            <arrows-component type="left" color="#3EB3FF" class="arrows-box"></arrows-component>
                                        </div>
                                    </div>
                                    <div class="arrows arrows-bottom">
                                        <div class="arrows-con" v-for="item in 4">
                                            <arrows-component type="right" color="#F75B49" class="arrows-box"></arrows-component>
                                            <arrows-component type="right" color="#F75B49" class="arrows-box"></arrows-component>
                                            <arrows-component type="right" color="#F75B49" class="arrows-box"></arrows-component>
                                        </div>
                                    </div>
                                </div>
                                <div class="his-cendoor his-cendoor-right" :class="{'his-cendoor-close':rightDoor}"></div>
                            </div>
                            <div v-for="item in imgarr.Webcam" class="webcam" :class="'webcam'+item">
                                <img src="/images/Webcam-ball.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        <div class="detail" id="detail" @click="stopP($event)">
            <div class="detail-title">{{title}}</div>
            <div class="detail-con">
                <el-scrollbar class="scrollbar">
                    <ul>
                        <li v-for="item in 40" @click="toDetail({name:'综合布线系统'})">综合布线系统</li>
                    </ul>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import cabinetComponent from './cabinet.vue'
import videoComponent from './video.vue'
import arrowsComponent from './arrows.vue'
export default {
    components: {
        cabinetComponent,videoComponent,arrowsComponent
    },
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            imgarr:{
                Webcam:[
                    1,2,3,4
                ],
                cenimg:[
                    'smoke','thalposis'
                ]
            },
            leftDoor:true,
            rightDoor:false,
            title:'',
            data1:[
                {title:'配电单元',type:'pd',color:'#E7E6EB'},
                {title:'整流柜',type:'zl',color:'#E7E6EB'},
                {title:'电池柜',type:'dc',color:'#E7E6EB'},
                {title:'设备单元01',type:'jg',color:'#E7E6EB'},
                {title:'精密空调1',type:'kt',color:'#E7E6EB'},
                {title:'设备单元02',type:'jg',color:'#E7E6EB'},
                {title:'设备单元03',type:'jg',color:'#E7E6EB'},
                {title:'设备单元04',type:'jg',color:'#E7E6EB'},
                {title:'精密空调2',type:'kt',color:'#E7E6EB'},
                {title:'设备单元05',type:'jg',color:'#E7E6EB'},
                {title:'设备单元06',type:'jg',color:'#E7E6EB'},
                {title:'设备单元07',type:'jg',color:'#E7E6EB'},
                {title:'精密空调3',type:'kt',color:'#E7E6EB'},
                {title:'设备单元08',type:'jg',color:'#E7E6EB'},
                {title:'设备单元09',type:'jg',color:'#E7E6EB'},
            ],
            data2:[
                {title:'管控单元',type:'gk',color:'#E7E6EB'},
                {title:'冷量分配单元',type:'llfp',color:'#E7E6EB'},
                {title:'电池柜',type:'dc',color:'#E7E6EB'},
                {title:'设备单元18',type:'jg',color:'#E7E6EB'},
                 {title:'精密空调6',type:'kt',color:'#E7E6EB'},
                {title:'设备单元17',type:'jg',color:'#E7E6EB'},
                {title:'设备单元16',type:'jg',color:'#E7E6EB'},
                {title:'设备单元15',type:'jg',color:'#E7E6EB'},
                {title:'精密空调5',type:'kt',color:'#E7E6EB'},
                {title:'设备单元14',type:'jg',color:'#E7E6EB'},
                {title:'设备单元13',type:'jg',color:'#E7E6EB'},
                {title:'设备单元12',type:'jg',color:'#E7E6EB'},
                {title:'精密空调4',type:'kt',color:'#E7E6EB'},
                {title:'设备单元11',type:'jg',color:'#E7E6EB'},
                {title:'设备单元10',type:'jg',color:'#E7E6EB'},
            ]
        }
    },
    methods: {
        showVideo:function(){

        }
    },
    
}
</script>
<style lang="less" scoped>
    .content{
        position:relative;
        overflow:hidden;
        .detail{
            width: 200px;
            height: 100%;
            position: absolute;
            right: -200px;
            top:0;
            background: #838FA3;
            color:#fff;
            transition: All 0.4s ease-in-out;
            .detail-title{
                width: 100%;
                height: 40px;
                line-height: 40px;
                background:#282C32;
                text-align:center;
                color: #a0acbf;
                font-size: 16px;
            }
            .detail-con{
                width: 100%;
                height: calc(100% - 40px);
                ul{
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    li{
                        height: 36px;
                        line-height: 36px;
                        cursor: pointer;
                        text-indent: 15px;
                    }
                    li:hover{
                        background: #eaebe9;
                        color:#62b651;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
    .scrollbarbox-content{
        width: 865px;
        height: 230px;
        .his{
            width: 100%;
            height:100%;
            position: relative;
            .his-con{
                width: calc(100% - 160px);
                height: 100%;
                border-top: 5px solid #838FA3;
                border-bottom: 5px solid #838FA3;
                margin: 0 auto;
                display: flex;
                position: relative;
                .his-conbox{
                    width: 200%;
                    height: 100%;
                    padding: 0 1px;
                    cursor: pointer;
                    &.active{
                        background: #838FA3;
                    }
                    &.his-conbox1{
                        width: 100%;
                    }
                }
                .his-con-line{
                    width: calc(100% + 10px);
                    height: 3px;
                    position: absolute;
                    left: -8px;
                    background: #FFC940;
                    top: -9px;
                    display: flex;
                    justify-content: space-between;
                    em{
                        width: 10px;
                        height: 100%;
                        background: #5A687B;
                    }
                }
                .his-con-linel{
                    width: 3px;
                    height: calc(100% + 18px);
                    top: -9px;
                    left: -8px;
                    flex-flow: column;
                    em{
                        width: 100%;
                        height: 10px;
                    }
                }
                .his-con-liner{
                    left: auto;
                    right: -9px;
                }
                .his-con-lineb{
                    top: auto;
                    bottom: -9px;
                }
            }
            .his-cen{
                position: absolute;
                width:100%;
                height: 100%;
                padding-left: 1px;
                top: 0;
                display: flex;
                .his-cendoor{
                    width: 97px;
                    height: 100%;
                    border-top: 5px solid #838FA3;
                    border-bottom: 5px solid #838FA3;
                    position:relative;
                    &.his-cendoor-close{
                        border:none;
                        border-right: 5px solid #838FA3;
                        &.his-cendoor-right{
                            border:none;
                            border-right: 5px solid #838FA3;
                        }
                    }
                }
                .his-cendoor:before{
                    content: "";
                    width: 50px;
                    height: 60px;
                    display: block;
                    border: 3px solid #838FA3;
                    border-radius: 0 0 0 100%;
                    border-top: none;
                    border-right: none;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .his-cendoor:after{
                    content: "";
                    width: 50px;
                    height: 60px;
                    display: block;
                    border: 3px solid #838FA3;
                    border-radius: 100% 0 0 0;
                    border-bottom: none;
                    border-right: none;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
                .his-cendoor-right{
                    transform: rotateY(180deg);
                }
                .his-cendoor-close:before,
                .his-cendoor-close:after{
                    border: none;
                }
                .his-cencon{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .cen-img{
                        margin: 0 10px;
                        img{
                            width: 40px;
                        }
                    }
                }
            }
        }
    }
    .webcam{
        position: absolute;
        img{
            height: 30px;
        }
        &.webcam1{
            top: -42px;
            left: 85px;
            transform: rotateX(180deg);
        }
        &.webcam2{
            bottom: -42px;
            left: 85px;
        }
        &.webcam3{
            top: -42px;
            right: 85px;
            transform: rotateX(180deg);
        }
        &.webcam4{
            bottom: -42px;
            right: 85px;
        }
        &.webcam5{
            top: -42px;
            left: 85px;
            transform: rotateX(180deg);
        }
        &.webcam6{
            bottom: -42px;
            left: 85px;
        }
        &.webcam7{
            top: -42px;
            right: 85px;
            transform: rotateX(180deg);
        }
        &.webcam8{
            bottom: -42px;
            right: 85px;
        }
    }
    .cenimg-box{
        width: 100%;
        height: 35px;
        position: absolute;
        top: -40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .arrows{
        width: 100%;
        height: 20px;
        position: absolute;
        top: -35px;
        display: flex;
        justify-content: space-around;
        .arrows-con{
            display: flex;
            .arrows-box{
                margin: 0 1px;
            }
        }
        &.arrows-bottom{
            bottom: -13px;
            top: auto;
        }
    }
</style>