<template>
    <div class="content content-flex bgfff" @click="hiddenDetail">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="his">
                            <div class="his-top his-con">
                                <div class="his-conbox" @click="showDetail(item,$event)" v-for="item in data1">
                                    <cabinet :type="item.type" :title="item.title" :color="item.color"></cabinet>
                                </div>
                            </div>
                            <div class="his-cen">
                                <div class="his-cendoor his-cendoor-close"></div>
                                <div class="his-cencon"></div>
                                <div class="his-cendoor his-cendoor-right"></div>
                            </div>
                            <div class="his-bottom his-con">
                                <div class="his-conbox" @click="showDetail(item,$event)" v-for="item in data2">
                                    <cabinet :type="item.type" :title="item.title" :color="item.color"></cabinet>
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
                        <li v-for="item in 40" @click="toDetail('综合布线系统')">综合布线系统</li>
                    </ul>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import cabinet from '@/components/cabinet.vue'
export default {
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            title:'',
            data1:[
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
            ],
            data2:[
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
                {title:'',type:'',color:''},
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
            
        },
        toDetail:function(title){
            this.$router.push({path:'/loncom/his/detail',query:{
                    param:JSON.stringify({"title":title})
                }
            });
        }
    },
    components: {
        cabinet
    }
}
</script>
<style lang="less" scoped>
    .content{
        position:relative;
        overflow:hidden;
        .detail{
            width: 200px;
            height: 100%;
            padding:10px;
            position: absolute;
            right: -200px;
            top:0;
            background: #515E75;
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
                    padding-top: 12px;
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
        width: 1140px;
        height: 560px;
        .his{
            width: 100%;
            height:100%;
            .his-con{
                width: calc(100% - 160px);
                height: 200px;
                border: 10px solid #515E75;
                margin: 0 auto;
                display: flex;
                padding:0 3px;
                &.his-top{
                    border-bottom: none;
                }
                &.his-bottom{
                    border-top: none;
                }
                .his-conbox{
                    width: 100%;
                    height: 100%;
                    padding: 0 3px;
                    cursor: pointer;
                    &.active{
                        background: #515E75;
                    }
                }
            }
            .his-cen{
                width:100%;
                height: calc(100% - 400px);
                display: flex;
                .his-cendoor{
                    width: 90px;
                    height: 100%;
                    border-top: 5px solid #515E75;
                    border-bottom: 5px solid #515E75;
                    position:relative;
                    &.his-cendoor-close{
                        border:none;
                        border-right: 5px solid #515E75;
                        &.his-cendoor-right{
                            border:none;
                            border-right: 5px solid #515E75;
                        }
                    }
                }
                .his-cendoor:before{
                    content: "";
                    width: 50px;
                    height: 60px;
                    display: block;
                    border: 5px solid #515E75;
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
                    border: 5px solid #515E75;
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
                    width: calc(100% - 180px);
                    height: 100%;
                }
            }
        }
    }
</style>