<template>
    <div class="content content-flex">
        <div class="his-detail-left bgfff">
            <div class="detail-left-title">
                <el-date-picker
                style="width: 180px;"
                v-model="initParams.time"
                type="daterange"
                range-separator=""
                :start-placeholder="$t('StartDate')"
                :end-placeholder="$t('EndDate')">
                </el-date-picker>
                <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
            </div>
            <div class="detail-left-con">
                <el-scrollbar class="scrollbar">
                    <ul>
                        <li v-for="item in data">
                            <div class="list-title">
                                <div class="img">
                                    <img :src="'/images/alarm-'+item.type+'.svg'">
                                </div>
                                <div>严重告警</div>
                            </div>
                            <div class="list-con">
                                <p>
                                    <span class="title">设备名称</span>
                                    <span>{{item.title}}</span>
                                </p>
                                <p>
                                    <span class="title">发生时间</span>
                                    <span>{{item.time}}</span>
                                </p>
                                <p>
                                    <span class="title">事件内容</span>
                                    <span>{{item.detail}}</span>
                                </p>
                                <p>
                                    <span class="title">事件状态</span>
                                    <span><em class="alarm">未确认</em>/已恢复</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </el-scrollbar>
            </div>
        </div>
        <div class="his-detail-right bgfff">
            <el-scrollbar class="scrollbar">
                <div style="width:100%;height:100%;padding:0 10px;">
                    <div class="top-filter">
                        <el-radio-group v-model="filter.type">
                            <el-radio-button label="hour">时</el-radio-button>
                            <el-radio-button label="day">日</el-radio-button>
                            <el-radio-button label="month">月</el-radio-button>
                            <el-radio-button label="year">年</el-radio-button>
                        </el-radio-group>
                        <el-date-picker
                            style="width: 350px;margin:0 10px; vertical-align: middle;"
                            v-model="filter.time"
                            type="datetimerange"
                            :range-separator="$t('To')"
                            :start-placeholder="$t('StartDate')"
                            :end-placeholder="$t('EndDate')">
                            </el-date-picker>
                        <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
                    </div>
                    <div class="his-detail-echart">
                        <template v-for="(item,index) in arr">
                            <div class="echart-box" :id="item.key" :class="'echart-box'+arr.length" v-if="index<6"></div>
                        </template>
                        
                    </div>
                    <div class="his-detail-time">
                        <div class="slider">
                            <el-slider
                            v-model="value"
                            :min="1"
                            range
                            @change="changeValue"
                            :format-tooltip="formatTooltip"
                            :step="1"
                            :max="366">
                            </el-slider>
                        </div>
                        <div class="slider-time">{{endTime}}</div>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import cabinet from './HisComponent/cabinet.vue'
export default {
    components: { },
    created () {
        let param = this.$route.query.param;
        if(param){
            this.info=JSON.parse(param);
            // this.changeTitle(this.info.title)
            this.time=[this.marks['366']=this.$tool.Format("yyyy-MM-dd 00:00:00"),this.marks['366']=this.$tool.Format("yyyy-MM-dd 23:59:59")]
            this.endTime=this.marks['366']=this.$tool.Format("yyyy-MM-dd");
            this.startTime=this.getPassYear();
            this.getInfo();
        }
    },
    mounted() {
        var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
        "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
        
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
        for(let i=0;i<this.arr.length;i++){
            if(i<6){
                this.$tool.echartLine(this.arr[i]["key"],title2,subtitle2,legend2,xData,yData2);
            }
        }
        
        
    },
    data(){
        return{
            initParams:{
                time:null
            },
            filter:{
                type:"day",
                time:null,
            },
            info:'',
            data:[
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'1'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'2'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'3'},
                {title:'对方就带',time:'2018-09-23 12:22:23',detail:"lfdjsalf撒旦飞洒浪费爱上了对方就带式",type:'4'}
            ],
            value:[10,366],
            marks:{
                366:''
            },
            time:[],
            startTime:'',
            endTime:'',
            arr:[{key:"hisEchart1"},{key:"hisEchart2"},{key:"hisEchart3"},{key:"hisEchart4"},{key:"hisEchart5"},{key:"hisEchart6"},{key:"hisEchart7"}]
        }
    },
    methods: {
        submitForm:function(){

        },
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
        },
        echartLine:function(ID,title,subtitle,legend,xData,yData){
            // 基于准备好的dom，初始化echarts实例
            // var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
            //  "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
            // var legend=[{
            //     name:"实时IT设备电能",
            //     icon:'rect'
            // },{
            //     name: "机房实时总电能",
            //     icon:'rect'
            // }];
            // var title="℃";
            // var subtitle="温度";
            // var yData=[
            //     {
            //         name:'实时IT设备电能',
            //         type:'line',
            //         smooth:"true", //平滑
            //         data:[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310]
            //     },
            //     {
            //         name:'机房实时总电能',
            //         type:'line',
            //         smooth:"true", //平滑
            //         data:[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18]
            //     },
            // ];
            let color=["#00B564","#FF9655","#51B1DC","#64E572","#FFCD4D"];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                title: {
                    text:"{text|"+title+"} {subtext|"+subtitle+"}",  
                    top:10,
                    left:15,
                    textStyle:{
                        rich:{
                            text:{
                                color:"#fff",
                                fontWeight:'normal',
                                fontSize:'14',
                                backgroundColor:'#00B564',
                                padding:[1,4,4,4],
                                verticalAlign:'bottom'
                            },
                            subtext:{
                                fontSize: 14,
                                color:"#333",
                            }
                        }
                        
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    top:'10px',
                    right:'0',
                    textStyle:{
                        color:"#000"
                    },
                    data:legend
                },
                grid: {
                    left: '15px',
                    right: '40px',
                    top:'55px',
                    bottom: '5px',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLine:{
                            lineStyle:{
                                color:"#D8DEDD",
                                width:1,
                            }
                        },
                        axisTick:{
                            show:false
                        },     
                        axisLabel:{
                            color:"#000",
                            formatter: function (value, index) {
                                return Format('yyyy-MM-dd',new Date(value));
                            }
                        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                        data :xData
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{
                            show:false,
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#D8DEDD",
                                width:1,
                            }
                        },
                        splitLine:{
                            show:false,
                            lineStyle:{
                                color:"#1c3042",
                                width:1,
                                type:"dashed",
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            color:"#000",
                            formatter: '{value}'
                        }
                    }
                ],
                series : yData
            };
            myChart.setOption(option, true);
            window.addEventListener("resize", () => { 
                setTimeout(function(){
                    myChart.resize();
                },0)
            });
            return myChart;
        }
    },
    // destroyed() {
    //     this.changeTitle();
    // },
    
}
</script>
<style lang="less" scoped>
    .his-detail-left{
        width: 250px;
        margin-right: 5px;
        .detail-left-title{
            width: 100%;
            padding: 8px 5px;
            display: flex;
            justify-content: space-between;
        }
        .detail-left-con{   
            width: 100%;
            height: calc(100% - 52px);
            ul{
                width: 100%;
                li{
                    padding: 10px;
                    border-bottom: 1px solid #ECECEC;
                    .list-title{
                        height: 35px;
                        line-height: 35px;
                        overflow:hidden;
                        display: flex;
                        font-size: 16px;
                        img{
                            height: 14px;
                            margin-right: 4px;
                            vertical-align: middle;
                        }
                    }
                    .list-con{
                        line-height: 20px;
                        p{
                            margin-bottom: 5px;
                            .title{
                                display: inline-block;
                                width: 72px;
                            }
                        }
                    }
                }
            }
        }
    }
    .his-detail-right{
        width: calc(100% - 255px);
        height: 100%;
        .his-detail-echart{
            width: 100%;
            height: calc(100% - 90px);
            display: flex;
            flex-wrap:wrap;
            .echart-box{
                width: 50%;
                height: 33.33%;
                padding: 0 6px;
                &.echart-box1{
                    width: 100%;
                    height:50%;
                }
                &.echart-box2{
                    width: 100%;
                    height:50%;
                }
                &.echart-box3{
                    width: 100%;
                    height:33.33%;
                }
                &.echart-box4{
                    width: 50%;
                    height: 50%;
                }
                &.echart-box5:nth-last-of-type(1){
                    width: 100%;
                }
            }
        }
        .his-detail-time{
            width: 100%;
            height: 45px;
            padding-top: 15px;
            .slider{
                width: calc(100% - 50px);
                height: 100%;
                margin: 0 auto;
            }
        }
    }
    .top-filter{
        height: 42px;
        padding-top: 8px;
    }
</style>