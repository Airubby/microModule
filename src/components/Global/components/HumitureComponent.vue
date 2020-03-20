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
        let legend=["回风-上","回风-中","回风-下","送风-上","送风-中","送风-下"];
        let xData=['空调01','空调02','空调03','空调04','空调05'];
        let yData=[
            {
                name: '回风-上',
                type: 'bar',
                barWidth: '10%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '送风-上',
                type: 'bar',
                barWidth: '10%',
                data: [ 20, 36,19 ,10, 10, 20]
            },
            {
                name: '回风-中',
                type: 'bar',
                barWidth: '10%',
                data: [120, 132,29, 101, 134, 94]
            },
            {
                name: '送风-中',
                type: 'bar',
                barWidth: '10%',
                data: [120, 132, 40,101, 134, 94]
            },
            {
                name: '回风-下',
                type: 'bar',
                barWidth: '10%',
                data: [29,23,4,50,5,6]
            },
            {
                name: '送风-下',
                type: 'bar',
                barWidth: '10%',
                data: [29,23,39,4,5,6]
            }
        ];
        let color=["#6699FF","#41D4D9","#329932","#CD6500","#1C5AE6","#FFCD02"];
        let legend1=["送风","回风"];
        let yData1=[
            {
                name: '送风',
                type: 'bar',
                barWidth: '25%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '回风',
                type: 'bar',
                barWidth: '25%',
                data: [120, 132,29, 101, 134, 94]
            },
        ]
        let color1=["#7CC1A2","#EBB23D"]
        this.$tool.echartAir('echart1',"温度(℃)",legend,xData,yData,color);
        this.$tool.echartAir('echart2',"湿度(%)",legend1,xData,yData1,color1);
        // this.echartShow("echart1");
    },
    data(){
        return{
            
        }
    },
    methods: {
        echartShow:function(ID,title){
            var title="温度(℃)";
            var yData=['空调01','空调02','空调03'];
            var color=["#5984CD","#EF5959"];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                title:{
                    text:title,  
                    x:'left',
                    top: 0,
                    textStyle:{
                        color:"#555",
                        fontSize:14,
                    },
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    } 
                },
                legend: {
                    selectedMode:false,//取消图例上的点击事件
                    top:'5px',
                    right:'10px',
                    textStyle:{
                        rich:{
                            a:{
                                color:color[0]
                            },
                            b:{
                                color:color[1]
                            }
                        }
                    },
                    data: ["上-出风","上-回风"],
                    formatter: function(name) {
                        var index = 0;
                        var clientlabels = ['出风','回风'];
                        var data=["上-出风","上-回风"];
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
                        color:'#fff',
                        fontSize: 15,
                        padding:[70,0,0,0]
                    },
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#304a5d",
                            width:3,
                        }
                    },
                    splitLine:{
                        show:false,
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        interval:0,  //强制显示所有标签
                        backgroundColor:'#123234',
                        color:'#fff',
                        padding:4,
                        // formatter:'上\r中\r下\n{value}',
                        formatter:function(value){
                            var info='{text|上}{text|中}{text|下}\n{value|'+value+'}'
                            return info
                        },
                        rich:{
                            text:{
                                color:"#fff",
                                padding:[0,3,3,3],
                                height: 20,
                                lineHeight: 20
                            },
                            value:{
                                color:"#fff",
                                lineHeight: 20
                            },
                        }
                    },
                    data: yData,
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:"#304a5d",
                            width:3,
                        }
                    },
                    axisTick:{
                        show:false
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
                        color:"#fff"
                    },
                    
                },
                series: [
                    {
                        name: '上-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [120, 132, 101]
                    },
                    {
                        name: '上-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [120, 132, 101]
                    },
                    {
                        name: '中-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [220, 182, 191]
                    },
                    {
                        name: '中-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [220, 182, 191]
                    },
                    {
                        name: '下-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [150, 212, 201]
                    },
                    {
                        name: '下-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [150, 212, 201]
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
<style scoped lang="less">
    .echart{
        width: 100%;
        height: 50%;
        padding-top: 15px;
    }
</style>
