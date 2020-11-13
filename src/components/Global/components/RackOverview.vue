<template>
    <div class="content">
        <div class="title">模块U数</div>
        <div class="pie">
            <div class="piebox" id="piebox-one"></div>
            <div class="piebox" id="piebox-two"></div>
            <div class="piebox" id="piebox-three"></div>
        </div>
        <div class="barchar">
            <el-tabs v-model="activeName" class="content" @tab-click="tabClick">
                <el-tab-pane label='U数' name="first" class="content">
                    <div class="content" id="barchar-one"></div>
                </el-tab-pane>
                <el-tab-pane label='温度' name="second" class="content">
                    <div class="content" id="barchar-two"></div>
                </el-tab-pane>
                <el-tab-pane label='湿度' name="third" class="content">
                    <div class="content" id="barchar-three"></div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    components:{},
    created() {
        
    },
    mounted() {
        this.pieChar("piebox-one",500,125,"空闲",["#3CB2FF","#F1F3F4"]);
        this.pieChar("piebox-two",500,125,"预占",["#3C6BFF","#F1F3F4"]);
        this.pieChar("piebox-three",500,250,"占用",["#FFC940","#F1F3F4"]);
        this.chartBar("barchar-one");
        
        
    },
    data(){
        return{
            control:false,   
            activeName:"first"
        }
    },
	methods: {
        tabClick:function(tab,event){
            console.log(tab)
            this.$nextTick(()=>{
                if(tab.name=="first"){
                    this.chartBar("barchar-one");
                }else if(tab.name=="second"){
                    this.chartBar("barchar-two");
                }else if(tab.name="third"){
                    this.chartBar("barchar-three");
                }
            })
            
        },
        pieChar:function(ID,count,rate,text,color) {
            // var color=["#3CB2FF","#F1F3F4"];
            // var count=100,rate=73;
            // var text="空闲";
            var residue=parseInt(count)-parseInt(rate);
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                grid: {
                    top:'20%',
                    bottom: '0',
                    containLabel: true
                },
                series: [
                    {
                        type:'pie',
                        radius: ['70%', '90%'],
                        center: ['50%', '50%'],
                        //是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
                        //如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将avoidLabelOverlap该值设为 false。
                        avoidLabelOverlap: false,  
                        hoverAnimation:false, //放大的动画效果
                        hoverOffset:5,  //高亮扇区的偏移距离,默认10，就是hover时候的放大的距离
                        silent:true,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter:'{num|'+rate+'}\r\n{text|'+text+'}',
                                rich: {
                                    num: {
                                        fontSize: 20,
                                        color:'#838FA3',
                                        padding: [5, 0],
                                    },
                                    text: {
                                        color: '#838FA3',
                                        fontSize: 12,
                                        padding: [5, 0],
                                    }
                                },
                                
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            { 
                                value:rate, 
                                name:text,
                                
                            },
                            {
                                value:residue, 
                                name:'剩余'
                            },
                        ]
                    }
                ]
            };
            myChart.setOption(option, true);
            
            return myChart; 
        },
        chartBar:function(ID){
            var myChart = echarts.init(document.getElementById(ID));
            var yData=['A01','A02','A03','A04','A05','A06','A07'];
            var option = {
                color:["#3CB2FF","#3C6BFF","#FFC940"],
                title:{
                    show:true,
                    text:"总量(%)",  
                    x:'left',
                    top: 5,
                    textStyle:{
                        color: "#838FA3",
                        fontSize: 14,
                    },
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    } 
                },
                legend: {
                    top:'10px',
                    right:"10px",
                    textStyle:{
                        color:"#838FA3",
                    },
                    data: ['空闲', '预占','占用']
                },
                grid: {
                    left:"20px",
                    right:"15px",
                    top:"40px",
                    bottom: '40px',
                    containLabel: true
                },
                xAxis:  {
                    name:'名称',
                    nameLocation:'start',
                    nameTextStyle:{
                        color:'#838FA3',
                        fontSize: 14,
                        padding:[20,0,0,0],
                    },
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#E4E7E9",
                            width:1,
                        }
                    },
                    splitLine:{
                        show:false,
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        color:"#838FA3"
                    },
                    data: yData,
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:"#E4E7E9",
                            width:1,
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:"#E4E7E9",
                            width:1,
                            type:"dashed",
                        }
                    },
                    axisLabel:{
                        color:"#838FA3"
                    },
                    
                },
                series: [
                    {
                        name: '空闲',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [400, 302, 301, 334, 390, 330, 400]
                    },
                    {
                        name: '预占',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [120, 132, 101, 134, 90, 230, 400]
                    },
                    {
                        name: '占用',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [220, 182, 191, 234, 290, 330, 400]
                    }
                ]
            };
            myChart.setOption(option, true);
            return myChart; 
        },
	},
}
</script>
<style lang="less" scoped>
    .title{
        width: 100%;
        height: 30px;
        color: #3CB2FF;
    }
    .pie{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-around;
        .piebox{
            width: 150px;
            height: 150px;
        }
    }
    .barchar{
        width: 100%;
        height: calc(100% - 180px);
    }
</style>