<template>
    <div class="content content-flex bgfff" @click="hiddenDetail">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="his">
                            <div class="his-con">
                                <div class="his-conbox" :class="{'his-conbox1':item.type=='kt'}" @click="showDetail(item,$event)" v-for="item in data1">
                                    <cabinet-component :type="item.type" :title="item.title" :color="item.color"></cabinet-component>
                                </div>
                            </div>
                            <div class="his-cen">
                                <div class="his-cendoor" :class="{'his-cendoor-close':leftDoor}" @click="showDoor()"></div>
                                <div class="his-cencon">
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
                                <div class="his-cendoor his-cendoor-right" :class="{'his-cendoor-close':rightDoor}" @click="showDoor()"></div>
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
import arrowsComponent from './arrows.vue'
export default {
    props:["data"],
    components: {
        cabinetComponent,arrowsComponent
    },
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            leftDoor:true,
            rightDoor:false,
            title:'',
            data1:[
                {title:'配电单元',type:'pd',color:'#D8645B'},
                {title:'整流柜',type:'zl',color:'#8CBECF'},
                {title:'电池柜',type:'dc',color:'#F7BB48'},
                {title:'设备单元01',type:'jg',color:'#7BC1A1'},
                {title:'精密空调1',type:'kt',color:'#588EEA'},
                {title:'设备单元02',type:'jg',color:'#7BC1A1'},
                {title:'设备单元03',type:'jg',color:'#7BC1A1'},
                {title:'设备单元04',type:'jg',color:'#7BC1A1'},
                {title:'精密空调2',type:'kt',color:'#588EEA'},
                {title:'设备单元05',type:'jg',color:'#7BC1A1'},
                {title:'设备单元06',type:'jg',color:'#7BC1A1'},
                {title:'设备单元07',type:'jg',color:'#7BC1A1'},
                {title:'精密空调3',type:'kt',color:'#588EEA'},
                {title:'设备单元08',type:'jg',color:'#7BC1A1'},
                {title:'设备单元09',type:'jg',color:'#7BC1A1'},
            ],
        }
    },
    methods: {
        stopP:function(ev){
            ev.stopPropagation();
        },
        hiddenDetail:function(){
            for(let i=0;i<this.$el.querySelectorAll('.his-conbox').length;i++){
                this.$el.querySelectorAll(".his-conbox")[i].classList.remove("active");
            }
            this.$el.querySelector("#detail").style.right="-200px";
        },
        showDetail:function(item,ev){
            let type=item.type;
            ev.stopPropagation();
            this.$el.querySelector("#detail").style.right="0px";
            this.title=item.title;
            for(let i=0;i<this.$el.querySelectorAll('.his-conbox').length;i++){
                this.$el.querySelectorAll(".his-conbox")[i].classList.remove("active");
            }
            ev.currentTarget.classList.add("active");
            if(type=='pd'||type=='zl'||type=='dc'||type=='gk'||type=='llfp'||type=='kt'){

            }else{
                this.toDetail(item);
            }
        },
        toDetail:function(item){
            console.log(item)
            let info=item;
            info["activeComponent"]="HisDetailComponent"
            this.$emit("backInfo",info)
        },
        showDoor:function(){
            // let info={activeComponent:"HisDoorComponent"};
            // this.$emit("backInfo",info)
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
                z-index: 9999;
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
                }
            }
        }
    }
    .arrows{
        width: 100%;
        height: 20px;
        position: absolute;
        top: -32px;
        display: flex;
        justify-content: space-around;
        .arrows-con{
            display: flex;
            .arrows-box{
                margin: 0 1px;
            }
        }
        &.arrows-bottom{
            bottom: -10px;
            top: auto;
        }
    }
</style>