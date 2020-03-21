<template>
    <div class="content">
        <div class="echart">
            <div class="content" id="echart1"></div>
        </div>
        <div class="echart">
            <div class="content" id="echart2"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    mounted() {
        let xData=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'];
        let up=[5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20];
        let middle=[120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134];
        let down= [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 400, 234, 290, 330, 400];
        this.echartfn('echart1',"温度(℃)",xData,up,middle,down,["#5984CD","#EF5959","#5984CD"]);
        this.echartfn('echart2',"湿度(%)",xData,up,middle,down,["#7BC0A1","#EAB03F","#7BC0A1"]);
    },
    data(){
        return{
            
        }
    },
    methods: {
        echartfn(ID,title,xData,up,middle,down,color){
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(ID))
            // 绘制图表
            myChart.setOption({
                color:color,
                title:{
                    text:title,  
                    x:'left',
                    top: 0,
                    textStyle:{
                        color:"#838FA3",
                        fontSize:14,
                    },
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    } 
                },
                grid: {
                    left: '75px',
                    right: '25px',
                    top:'45px',
                    bottom: '50px',
                },
                legend: {
                    selectedMode:false,
                    top:'0px',
                    right:'0',
                    textStyle:{
                        rich:{
                            a:{
                                color:color[0],
                            },
                            b:{
                                color:color[1],
                            }
                        }
                    },
                    data: ["上","中"],
                    formatter: function(name) {
                        var index = 0;
                        var clientlabels = ['冷通道','热通道'];
                        var data=["上","中"];
                        data.forEach(function(value,i){
                            if(value == name){
                                index = i;
                            }
                        });
                        if(index==0){
                            return '{a|'+clientlabels[index]+'}';
                        }else{
                            return '{b|'+clientlabels[index]+'}';
                        }
                        
                    },
                },
                xAxis:  {
                    name:'机柜编码',
                    nameLocation:'start',
                    nameTextStyle:{
                        color:'#838FA3',
                        fontSize: 14,
                        padding:[60,-10,0,0]
                    },
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#DBDBDA",
                            width:1,
                        }
                    },
                    splitLine:{
                        show:false,
                    },
                    axisTick:{
                        show:true
                    },
                    axisLabel:{
                        interval:0,  //强制显示所有标签
                        backgroundColor:'#E5E7EB',
                        color:'#fff',
                        padding:2,
                        // formatter:'上\r中\r下\n{value}',
                        formatter:function(value){
                            var info='{text|上}{text|中}{text|下}\n{value|'+value+'}'
                            return info
                        },
                        rich:{
                            text:{
                                color:"#838FA3",
                                padding:[0,1,1,1],
                                height: 20,
                                lineHeight: 20
                            },
                            value:{
                                color:"#838FA3",
                                lineHeight: 20
                            },
                        }
                    },
                    data: xData,
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:"#DBDBDA",
                            width:1,
                        }
                    },
                    axisTick:{
                        show:true
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:"#213342",
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
                        name: '上',
                        type: 'bar',
                        barWidth: '20%',
                        data: up
                    },
                    {
                        name: '中',
                        type: 'bar',
                        barWidth: '20%',
                        data: middle
                    },
                    {
                        name: '下',
                        type: 'bar',
                        barWidth: '20%',
                        data: down
                    }
                ]
            });
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
<style scoped lang="less">
    .echart{
        width: 100%;
        height: 50%;
        padding-bottom: 15px;
    }
</style>
