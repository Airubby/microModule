<template>
  <div class="content bgfff">
        <div class="index-top">
            <div class="index-top-title">实物模型
                <span style="text-align:center;width:1000px;    display: inline-block;">
                <span @click="test(1)" style="color:#f00;margin:0 10px;">测试告警</span>
                <span @click="test(2)" style="color:#f00">解除告警</span>
                </span>
            </div>
            <div class="index-top-con" id="three-dom"></div>
        </div>
        <div class="index-bottom">
            <div class="index-bottom-box index-bottom-box1">
                <div class="index-bottom-box-title">mPUE</div>
                <div class="index-bottom-box-con">
                    <div class="index-bottom-box-left">
                        <span>5.00</span>
                    </div>
                    <div class="index-bottom-box-right" id="echartpue"></div>
                </div>
            </div>
            <div class="index-bottom-box index-bottom-box2">
                <div class="index-bottom-box-title">IT负载</div>
                <div class="index-bottom-box-con">
                    <div class="text">20.2<span>KW</span></div>
                    <div class="index-bottom-box-content" id="echartEn"></div>
                </div>
            </div>
            <div class="index-bottom-box index-bottom-box3">
                <div class="index-bottom-box-title">冷热通道温度</div>
                <div class="index-bottom-box-con">
                    <div class="index-bottom-box-conleft">
                        <div class="index-conleft-box">
                            <div class="index-conleft-boxcon">
                                <div class="num"><span>20.0</span>℃</div>
                                <div class="text">
                                    <p>热通道</p>
                                    <p>MAX</p>
                                </div>
                            </div>
                        </div>
                        <div class="index-conleft-box">
                            <div class="index-conleft-boxcon">
                                <div class="num"><span>20.0</span>℃</div>
                                <div class="text">
                                    <p>冷通道</p>
                                    <p>MAX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="index-bottom-box-content" id="gaugeChar"></div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios';
import ThreeMap from './IndexComponent/ThreeMap.js';
export default {
    name: 'indexComponent',
    created () {
        
    },
    mounted() {
        let props={dom:"three-dom"}
        axios.get('/three/scene.json').then(data => {
            let result=data.data;
            this.map = new ThreeMap(props,result);
            
        })

        this.echartPUE("echartpue")
        this.pieChar("echartEn")
        this.gaugeChar("gaugeChar")
    },
    data(){
        return{
            map:""
        }
    },
    methods: {
        test:function(info){
            console.log(this.map)
            let flag=true;
            if(info==1){
                flag=true;
            }else{
                flag=false;
            }
            this.map.updatedata(this.map.data[7],flag);
        },
        Format:function(fmt,value){
            let date=value?new Date(value):new Date();
            let o = {
                "M+": date.getMonth() + 1, //月份 
                "d+": date.getDate(), //日 
                "h+": date.getHours(), //小时 
                "m+": date.getMinutes(), //分 
                "s+": date.getSeconds(), //秒 
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
                "S": date.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (let k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },
        echartPUE:function(ID,xData,yData){
            let _this=this;
            var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
            "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
            
            var yData=[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310];
            let color=["#fff"];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                tooltip : {
                    trigger: 'axis'
                },
                grid: {
                    left: '15px',
                    right: '20px',
                    top:'20px',
                    bottom: '10px',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLine:{
                            show:false,
                            lineStyle:{
                                color:"#f00",
                                width:1,
                            }
                        },
                        splitLine:{
                            show:false,
                            lineStyle:{
                                color:"#fff",
                                width:1,
                                type:"solid",
                            }
                        },
                        axisTick:{
                            show:false
                        },     
                        axisLabel:{
                            color:"#fff",
                            formatter: function (value, index) {
                                return _this.Format('hh:dd',new Date(value));
                            }
                        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                        data :xData
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            show:false,
                            lineStyle:{
                                color:"#fff",
                                width:1,
                            }
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:"#fff",
                                width:1,
                                type:"solid",
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            color:"#fff",
                            formatter: '{value}'
                        }
                    }
                ],
                series : [
                    {
                        name:'pue',
                        type:'line',
                        smooth:"true", //平滑
                        data:yData
                    },
                ]
            };
            myChart.setOption(option, true);
            window.addEventListener("resize", () => { 
                setTimeout(function(){
                    myChart.resize();
                },0)
            });
            return myChart;
        },
        pieChar:function(ID,data){
            var data=[
                {value:335, name:'IT能耗'},
                {value:910, name:'其它能耗'},
            ];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:["#ffffff","#929292","#0077E9","#7B2DD8"],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                series: [
                    {
                        type:'pie',
                        center:['60%','50%'],
                        radius: ['60%', '80%'],
                        label: {
                            normal: {
                                formatter: ' {b|{b} }{per|{d}%} ',
                                rich: {
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 33,
                                        color: "#fff"
                                    },
                                    per: {
                                        color: '#fff',
                                        fontSize: 14,
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        // itemStyle:{
                        //     borderColor:"#fff",  
                        //     borderWidth: 1,
                        // },
                        data:data
                    }
                ]
            };
            myChart.setOption(option, true);
            window.addEventListener("resize", () => { 
                setTimeout(function(){
                    myChart.resize();
                },0)
            });
            return myChart; 
        },
        gaugeChar:function(ID,value,min,max,title,color){
            var value=30,min=0,max=60,title="PUE";
            var color=[[0.333333, '#4A86B1'],[0.5,"#4A86B1"],[1, '#4A86B1']];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                tooltip : {
                    formatter: "{a}<br/>{c}"
                },
                series: [
                    {
                        name: title,
                        silent:true,
                        type: 'gauge',
                        radius: '130%',
                        min:min,
                        max:max,
                        startAngle:180,
                        endAngle:0,
                        splitNumber:6,
                        center: ['50%', '80%'],
                        axisLine:{
                            length:'10',
                            lineStyle:{
                                color:color,
                                width:'25',
                            }
                        },
                        splitLine:{
                            show:true,
                            length:'25',
                            lineStyle:{
                                color:"#B3D6EF"
                            }
                        },
                        pointer:{
                            length:'70%',
                            width:'10%'
                        },
                        itemStyle:{
                            color: "#B3D6EF",
                        },
                        axisLabel:{
                            color:"#B3D6EF"
                        },
                        detail: {
                            show: true,
                            lineHeight: 15,
                            offsetCenter: ['0%', '0%'],
                            formatter:'{num|'+value+'}\n{text|℃}',
                            rich: {
                                num: {
                                    width:60,
                                    height:60,
                                    fontSize:18,
                                    borderWidth:2,
                                    borderColor:"#B3D6EF",
                                    borderRadius:[60,60,60,60],
                                    backgroundColor:"#61A5D5",
                                    color:"#fff",
                                },
                                text: {
                                    color: '#fff',
                                    fontSize: 12,
                                    padding: [10, 0],
                                    borderRadius: 2
                                }
                            },

                        },
                        data: [{value: value}]
                    }
                ]
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
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .index-top{
        width: 100%;
        height: calc(100% - 230px);
        .index-top-title{
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            padding-left: 15px;
            background: #718199;
            color: #DAE0EF;
        }
        .index-top-con{
            height: calc(100% - 45px);
        }
    }
    .index-bottom{
        width: 100%;
        height: 230px;
        display:flex;
        .index-bottom-box{
            width: 100%;
            height:100%;
            .index-bottom-box-title{
                width: 100%;
                height: 45px;
                line-height: 45px;
                padding: 0 15px;
                font-size: 16px;
                color: #fff;
            }
            .index-bottom-box-con{
                width: 100%;
                height: calc(100% - 45px);
            }
            &.index-bottom-box1{
                .index-bottom-box-title{
                    background: #D44434;
                }
                .index-bottom-box-con{
                    background: #F75B49;
                    display:flex;
                    .index-bottom-box-left{
                        width: 110px;
                        height:100%;
                        display:table;
                        span{
                            display:table-cell;
                            vertical-align:middle;
                            text-align: center;
                            font-size:30px;
                            color:#fff;
                        }
                    }
                    .index-bottom-box-right{
                        width:calc(100% - 110px);
                        height:100%;
                    }
                }
            }
            &.index-bottom-box2{
                margin: 0 10px;
                .index-bottom-box-title{
                    background: #4E4746;
                }
                .index-bottom-box-con{
                    background: #605958;
                    position: relative;
                    .text{
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        font-size: 26px;
                        color: #fff;
                        span{
                            font-size: 14px;
                        }
                    }
                    .index-bottom-box-content{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            &.index-bottom-box3{
                .index-bottom-box-title{
                    background: #4984AF;
                }
                .index-bottom-box-con{
                    background: #65AADC;
                    display: flex;
                    .index-bottom-box-conleft{
                        width: 125px;
                        height: 100%;
                        display:flex;
                        flex-wrap:wrap;
                        .index-conleft-box{
                            width:100%;
                            height:50%;
                            display:table;
                            .index-conleft-boxcon{
                                display:table-cell;
                                vertical-align: middle;
                                text-align: center;
                                .num{
                                    color:#fff;
                                    font-size:16px;
                                    span{
                                        font-size: 26px;
                                    }
                                }
                                .text{
                                    color:#277493;
                                    font-size:16px;
                                }
                            }
                        }
                    }
                    .index-bottom-box-content{
                        width: calc(100% - 125px);
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
