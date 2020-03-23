<template>
    <div class="content content-flex bgfff" @click="hiddenDetail">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="his">
                            <div class="his-top his-con">
                                <div class="his-conbox" :class="{'his-conbox1':item.type=='kt'}" @click="showDetail(item,$event)" v-for="item in data1">
                                    <cabinet-component :type="item.type" :title="item.title" :color="item.color"></cabinet-component>
                                </div>
                            </div>
                            <div class="his-cen">
                                <div class="his-cendoor" :class="{'his-cendoor-close':leftDoor}" @click="showDoor()"></div>
                                <div class="his-cencon"></div>
                                <div class="his-cendoor his-cendoor-right" :class="{'his-cendoor-close':rightDoor}" @click="showDoor()"></div>
                            </div>
                            <div class="his-bottom his-con">
                                <div class="his-conbox" :class="{'his-conbox1':item.type=='kt'}" @click="showDetail(item,$event)" v-for="item in data2">
                                    <cabinet-component :type="item.type" :title="item.title" :color="item.color"></cabinet-component>
                                </div>
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
import cabinetComponent from './HisComponent/cabinet.vue'
export default {
    components: {
        cabinetComponent
    },
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            leftDoor:false,
            rightDoor:true,
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
            data2:[
                {title:'管控单元',type:'gk',color:'#55A1E2'},
                {title:'冷量分配单元',type:'llfp',color:'#59CA38'},
                {title:'电池柜',type:'dc',color:'#F7BB48'},
                {title:'设备单元18',type:'jg',color:'#7BC1A1'},
                 {title:'精密空调6',type:'kt',color:'#588EEA'},
                {title:'设备单元17',type:'jg',color:'#7BC1A1'},
                {title:'设备单元16',type:'jg',color:'#7BC1A1'},
                {title:'设备单元15',type:'jg',color:'#7BC1A1'},
                {title:'精密空调5',type:'kt',color:'#588EEA'},
                {title:'设备单元14',type:'jg',color:'#7BC1A1'},
                {title:'设备单元13',type:'jg',color:'#7BC1A1'},
                {title:'设备单元12',type:'jg',color:'#7BC1A1'},
                {title:'精密空调4',type:'kt',color:'#588EEA'},
                {title:'设备单元11',type:'jg',color:'#7BC1A1'},
                {title:'设备单元10',type:'jg',color:'#7BC1A1'},
            ]
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
            let info={activeComponent:"HisDoorComponent"};
            this.$emit("backInfo",info)
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
        height: 560px;
        .his{
            width: 100%;
            height:100%;
            .his-con{
                width: calc(100% - 160px);
                height: 200px;
                border: 8px solid #838FA3;
                margin: 0 auto;
                display: flex;
                &.his-top{
                    border-bottom: none;
                }
                &.his-bottom{
                    border-top: none;
                }
                .his-conbox{
                    width: 100%;
                    height: 100%;
                    padding: 0 1px;
                    cursor: pointer;
                    &.active{
                        background: #838FA3;
                    }
                    &.his-conbox1{
                        flex-shrink: 2;
                    }
                }
            }
            .his-cen{
                width:100%;
                height: calc(100% - 400px);
                display: flex;
                .his-cendoor{
                    width: 88px;
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
                    border: 5px solid #838FA3;
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
                    border: 5px solid #838FA3;
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
                    width: calc(100% - 176px);
                    height: 100%;
                }
            }
        }
    }
</style>