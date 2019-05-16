<template>
    <div class="content content-flex">
        <div class="his-detail-left bgfff">
            <div class="detail-left-title">告警列表</div>
            <div class="detail-left-con">
                <el-scrollbar class="scrollbar">
                    <ul>
                        <li v-for="item in data">
                            <div class="list-title">
                                <span class="time">{{item.time}}</span>
                                <div>
                                    <img :src="require('@/assets/images/tjg'+item.type+'.png')">
                                    {{item.title}}
                                </div>
                            </div>
                            <div class="list-con">{{item.detail}}</div>
                        </li>
                    </ul>
                </el-scrollbar>
            </div>
        </div>
        <div class="his-detail-right bgfff">
            <el-scrollbar class="scrollbar">
                <div class="his-detail-echart">
                    <div class="echart-box echart-box3" id="hisEchart0"></div>
                    <div class="echart-box echart-box3" id="hisEchart1"></div>
                    <div class="echart-box echart-box3" id="hisEchart2"></div>
                    <div class="echart-box echart-box4" id="hisEchart3" style="display:none"></div>
                </div>
                <div class="his-detail-time">
                    <div class="slider-time">{{startTime}}</div>
                    <div class="slider">
                        <el-slider
                        v-model="value"
                        :min="1"
                        range
                        @change="changeValue"
                        :format-tooltip="formatTooltip"
                        :marks="marks"
                        :step="1"
                        :max="366">
                        </el-slider>
                    </div>
                    <div class="slider-time">{{endTime}}</div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import cabinet from '@/components/cabinet.vue'
export default {
    inject:['changeTitle'],
    created () {
        let param = this.$route.query.param;
        if(param){
            this.info=JSON.parse(param);
            this.changeTitle(this.info.title)
            this.time=[this.marks['366']=this.$tool.Format("yyyy-MM-dd 00:00:00"),this.marks['366']=this.$tool.Format("yyyy-MM-dd 23:59:59")]
            this.endTime=this.marks['366']=this.$tool.Format("yyyy-MM-dd");
            this.startTime=this.getPassYear();
            this.getInfo();
        }
    },
    mounted() {
        var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
        "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
        var legend1=[{
            name:"总负载率",
            icon:'rect'
        }];
        var title1="%";
        var subtitle1="总负载率";
        var yData1=[
            {
                name:'总负载率',
                type:'line',
                smooth:"true", //平滑
                data:[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310]
            }
        ];
        this.$tool.echartLine("hisEchart0",title1,subtitle1,legend1,xData,yData1)
        var legend2=[
            {name:"交流A相",icon:'rect'},{name:"交流B相",icon:'rect'},{name:"交流C相",icon:'rect'},{name:"直流1",icon:'rect'},{name:"直流2",icon:'rect'},
        ];
        var title2="A";
        var subtitle2="交流&直流";
        var yData2=[
            {
                name:'交流A相',
                type:'line',
                smooth:"true", //平滑
                data:[320, 232, 301, 234, 90, 230, 310,180, 91, 234, 290, 343, 310]
            },
            {
                name:'交流B相',
                type:'line',
                smooth:"true", //平滑
                data:[320, 32, 301, 234, 390, 23, 310,18, 391, 234, 290, 43, 310]
            },{
                name:'交流C相',
                type:'line',
                smooth:"true", //平滑
                data:[320, 232, 301, 23, 390, 230, 310,18, 391, 23, 290, 343, 310]
            },{
                name:'直流1',
                type:'line',
                smooth:"true", //平滑
                data:[320, 32, 301, 234, 39, 230, 310,18, 391, 234, 290, 343, 310]
            },{
                name:'直流2',
                type:'line',
                smooth:"true", //平滑
                data:[320, 32, 301, 234, 390, 230, 31,18, 391, 234, 290, 343, 30]
            }
        ];
        this.$tool.echartLine("hisEchart1",title2,subtitle2,legend2,xData,yData2);
        var legend3=[
            {name:"上传感器",icon:'rect'},{name:"下传感器",icon:'rect'}
        ];
        var title3="℃";
        var subtitle3="冷通道温度";
        var yData3=[
            {
                name:'上传感器',
                type:'line',
                smooth:"true", //平滑
                data:[320, 232, 301, 234, 90, 230, 310,180, 91, 234, 290, 343, 310]
            },
            {
                name:'下传感器',
                type:'line',
                smooth:"true", //平滑
                data:[320, 32, 301, 234, 390, 23, 310,18, 391, 234, 290, 43, 310]
            }
        ];
        this.$tool.echartLine("hisEchart2",title3,subtitle3,legend3,xData,yData3)
        var legend4=[
            {name:"中传感器",icon:'rect'}
        ];
        var title4="℃";
        var subtitle4="热通道温度";
        var yData4=[
            {
                name:'中传感器',
                type:'line',
                smooth:"true", //平滑
                data:[320, 232, 301, 234, 90, 230, 310,180, 91, 234, 290, 343, 310]
            }
        ];
        this.$tool.echartLine("hisEchart3",title4,subtitle4,legend4,xData,yData4)
    },
    data(){
        return{
            info:'',
            data:[
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'1'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'2'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'3'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'4'}
            ],
            value:[366,366],
            marks:{
                366:''
            },
            time:[],
            startTime:'',
            endTime:'',
        }
    },
    methods: {
        getInfo:function(){
            console.log(this.time)
        },
        getPassYear:function(){
            let nowDate = new Date();
            let date = new Date(nowDate);
            date.setDate(date.getDate()-365);
            return this.$tool.Format("yyyy-MM-dd",date);
        },
        formatTooltip:function(val){
            let nowDate = new Date();
            let date = new Date(nowDate);
            date.setDate(date.getDate()-(366-val));
            return this.$tool.Format("yyyy-MM-dd",date);
        },
        changeValue:function(val){
            let marks={};
            let nowDate = new Date();
            this.time=[];
            for(let i=0;i<val.length;i++){
                let date = new Date(nowDate);
                date.setDate(date.getDate()-(366-val[i]));
                if(i==0){
                    marks[val[i]]={
                        style: {
                            marginTop:"0px",
                            top: "-25px",
                        },
                        label: this.$createElement('span',this.$tool.Format("yyyy-MM-dd",date))
                    };
                }else{
                    marks[val[i]]=this.$tool.Format("yyyy-MM-dd",date);
                }
                this.time.push(this.$tool.Format("yyyy-MM-dd hh:mm:ss",date))
            }
            this.marks=marks;
            console.log(this.time)
        }
    },
    destroyed() {
        this.changeTitle();
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .his-detail-left{
        width: 300px;
        margin-right: 5px;
        .detail-left-title{
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: #637899;
            color: #fff;
            text-indent: 15px;
        }
        .detail-left-con{   
            width: 100%;
            height: calc(100% - 50px);
            ul{
                width: 100%;
                padding: 10px 15px;
                li{
                    padding: 10px 0;
                    border-bottom: 1px solid #ECECEC;
                    .list-title{
                        height: 35px;
                        line-height: 35px;
                        overflow:hidden;
                        img{
                            vertical-align: middle;
                        }
                        .time{
                            float: right;
                        }
                    }
                    .list-con{
                        color: #8e95a0;
                    }
                }
            }
        }
    }
    .his-detail-right{
        width: calc(100% - 305px);
        .his-detail-echart{
            width: 100%;
            height: calc(100% - 70px);
            display: flex;
            flex-wrap:wrap;
            .echart-box{
                width: 100%;
                height: 100%;
                padding: 0 15px;
                border-bottom: 2px solid #C7D2D9;
                &.echart-box2{
                    height:50%;
                }
                &.echart-box3{
                    height:33.33%;
                }
                &.echart-box4{
                    height: 25%;
                }
            }
        }
        .his-detail-time{
            width: 100%;
            height: 70px;
            display: flex;
            .slider-time{
                width: 100px;
                height: 100%;
                text-align: center;
                line-height: 70px;
            }
            .slider{
                width: calc(100% - 200px);
                height: 100%;
                padding-top: 15px;
            }
        }
    }
</style>