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
                        <el-select v-model="filter.type1" :placeholder="$t('PleaseSelect')" style="width:85px;margin:0 5px;">
                            <el-option label="最大值" value="0"></el-option>
                            <el-option label="最小值" value="1"></el-option>
                            <el-option label="平均值" value="2"></el-option>
                        </el-select>
                        <el-time-picker
                            v-show="filter.type=='hour'"
                            is-range
                            class="timerpicker"
                            v-model="filter.time"
                            value-format="HH:mm"
                            format="HH:mm"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                        </el-time-picker>
                        <el-date-picker
                            v-show="filter.type=='day'"
                            class="timerpicker"
                            v-model="filter.time"
                            type="daterange"
                            :picker-options="dayDisabled"
                            :range-separator="$t('To')"
                            :start-placeholder="$t('StartDate')"
                            :end-placeholder="$t('EndDate')">
                        </el-date-picker>
                        <el-date-picker
                            v-show="filter.type=='month'"
                            v-model="filter.time"
                            class="timerpicker"
                            :picker-options="monthDisabled"
                            type="month"
                            placeholder="选择月">
                        </el-date-picker>
                        <el-date-picker
                            v-show="filter.type=='year'"
                            v-model="filter.time"
                            class="timerpicker"
                            :picker-options="yearDisabled"
                            type="year"
                            placeholder="选择年">
                        </el-date-picker>
                        <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
                        <el-button type="primary" @click="submitForm" class="fr">{{$t("BatchExport")}}</el-button>
                    </div>
                    <div class="his-detail-echart">
                        <template v-for="(item,index) in arr">
                            <div class="echart-box" :id="item.key" :class="'echart-box'+arr.length" v-if="index<6"></div>
                        </template>
                    </div>
                    <div class="his-detail-time">
                        <div class="slider" v-if="arr.length>0" id="echartBtn"></div>
                        <!-- <div class="slider">
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
                        <div class="slider-time">{{endTime}}</div> -->
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import cabinet from './HisComponent/cabinet.vue'
import echarts from 'echarts'
export default {
    components: { },
    created () {
        // let param = this.$route.query.param;
        // if(param){
        //     this.info=JSON.parse(param);
        //     // this.changeTitle(this.info.title)
        //     this.time=[this.marks['366']=this.$tool.Format("yyyy-MM-dd 00:00:00"),this.marks['366']=this.$tool.Format("yyyy-MM-dd 23:59:59")]
        //     this.endTime=this.marks['366']=this.$tool.Format("yyyy-MM-dd");
        //     this.startTime=this.getPassYear();
        //     this.getInfo();
        // }

        this.dayDisabled.disabledDate=function(time){
            return  time.getTime() < Date.now() - 30 * 24 * 3600 * 1000 || time.getTime() > Date.now()  //30天
        }
        this.monthDisabled.disabledDate=function(time){
            return time.getTime() < Date.now() - 365*2 * 24 * 3600 * 1000 || time.getTime() > Date.now() 
        }
        this.yearDisabled.disabledDate=function(time){
            return time.getTime() < Date.now() - 365*10 * 24 * 3600 * 1000 || time.getTime() > Date.now() 
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
        if(this.arr.length>0){
            for(let i=0;i<this.arr.length;i++){
                if(i<6){
                    this.echartInfo[i]=this.echartLine(this.arr[i]["key"],title2,subtitle2,legend2,xData,yData2);
                }
            }
            let myChart=this.echartLine2("echartBtn",title2,subtitle2,legend2,xData,yData2);
            let _this=this;
            myChart.on('datazoom', function (params){
                console.log(params);
                for(let i=0;i<_this.echartInfo.length;i++){
                    var option=_this.echartInfo[i].getModel().getOption();
                    option.dataZoom[0].start=params.start;
                    option.dataZoom[0].end=params.end;
                    _this.echartInfo[i].setOption(option);
                }
            })
        }
        
        
        
    },
    data(){
        return{
            initParams:{
                time:null
            },
            filter:{
                type:"day",
                type1:null,
                time:null,
            },
            hourDisabled:{},  //时限制条件
            dayDisabled:{},  //日限制条件
            monthDisabled:{},  //月限制条件
            yearDisabled:{},  //年限制条件
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
            echartInfo:[],
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
        // getPassYear:function(){
        //     let nowDate = new Date();
        //     let date = new Date(nowDate);
        //     date.setDate(date.getDate()-365);
        //     return this.$tool.Format("yyyy-MM-dd",date);
        // },
        // formatTooltip:function(val){
        //     let nowDate = new Date();
        //     let date = new Date(nowDate);
        //     date.setDate(date.getDate()-(366-val));
        //     return this.$tool.Format("yyyy-MM-dd",date);
        // },
        // changeValue:function(val){
        //     let marks={};
        //     let nowDate = new Date();
        //     this.time=[];
        //     for(let i=0;i<val.length;i++){
        //         let date = new Date(nowDate);
        //         date.setDate(date.getDate()-(366-val[i]));
        //         if(i==0){
        //             marks[val[i]]={
        //                 style: {
        //                     marginTop:"0px",
        //                     top: "-25px",
        //                 },
        //                 label: this.$createElement('span',this.$tool.Format("yyyy-MM-dd",date))
        //             };
        //         }else{
        //             marks[val[i]]=this.$tool.Format("yyyy-MM-dd",date);
        //         }
        //         this.time.push(this.$tool.Format("yyyy-MM-dd hh:mm:ss",date))
        //     }
        //     this.marks=marks;
        //     console.log(this.time)
        // },
        echartLine:function(ID,title,subtitle,legend,xData,yData){
            let _this=this;
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
                dataZoom: [
                    {
                        show:false,
                        start: 30,
                        end: 70,
                        bottom:10,
                    },
                    {
                        type: 'slider',
                        show:false,
                        backgroundColor:"#041742",
                        dataBackground:{
                            lineStyle:{
                                color:"#2B4DAA"
                            },
                            areaStyle:{
                                color:"#2B4DAA"
                            }
                        },
                        fillerColor:"rgba(11,33,85,0.3)",
                        borderColor:"transparent",
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '100%',
                        handleStyle: {
                            color: '#223775',
                        },
                        textStyle:{
                            color:"#BEC6DE"
                        }
                    }
                ],
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
                                return _this.$tool.Format('yyyy-MM-dd',new Date(value));
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
        },
        echartLine2:function(ID,title,subtitle,legend,xData,yData){
            let _this=this;
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                dataZoom: [
                    {
                        show:false,
                        start: 30,
                        end: 70,
                        bottom:0,
                    },
                    {
                        type: 'slider',
                        show:true,
                        backgroundColor:"#EEF1F9",
                        dataBackground:{
                            lineStyle:{
                                color:"#94D2F8"
                            },
                            areaStyle:{
                                color:"#3CB2FF"
                            }
                        },
                        fillerColor:"rgba(11,33,85,0.3)",
                        borderColor:"transparent",
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '100%',
                        handleStyle: {
                            color: '#ffffff',
                        },
                        textStyle:{
                            color:"#3CB2FF"
                        }
                    }
                ],
                grid: {
                    left: '0',
                    right: '0',
                    top:'0px',
                    bottom: '100%',
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
                                return _this.$tool.Format('yyyy-MM-dd',new Date(value));
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
    watch:{
        'filter.type':function(val){
            this.filter.time=null;
        }
    }
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
            height: 48px;
            .slider{
                width: calc(100% - 50px);
                height: 100%;
                margin: 0 auto;
            }
        }
    }
    .timerpicker{
        width: 220px;
        margin-right:10px; 
        vertical-align: middle;
    }
    .top-filter{
        height: 42px;
        padding-top: 8px;
    }
</style>