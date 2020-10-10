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
        let legend=["回风-上","回风-中","回风-下","出风-上","出风-中","出风-下"];
        let xData=['空调01','空调02','空调03','空调04','空调05'];
        let yData=[
            {
                name: '回风-上',
                type: 'bar',
                barWidth: '10%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '出风-上',
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
                name: '出风-中',
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
                name: '出风-下',
                type: 'bar',
                barWidth: '10%',
                data: [29,23,39,4,5,6]
            }
        ];
        let color=["#3CB2FF","#FFC940"];
        let legend1=["出风","回风"];
        let yData1=[
            {
                name: '出风',
                type: 'bar',
                barWidth: '10%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '回风',
                type: 'bar',
                barWidth: '10%',
                data: [120, 132,29, 101, 134, 94]
            },
        ]
        this.$tool.echartAir('echart2',"湿度(%)",legend1,xData,yData1,color);
        this.echartShow("echart1");
    },
    data(){
        return{
            
        }
    },
    methods: {
        echartShow:function(ID,title){
            var title="温度(℃)";
            var yData=['空调01','空调02','空调03','空调04','空调05','空调06'];
            var color=["#3CB2FF","#FFC940"];
            var data=[
                    {
                        name: '上-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [120, 132, 101,120, 132, 101]
                    },
                    {
                        name: '上-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [120, 132, 101, 182, 191,120]
                    },
                    {
                        name: '中-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [220, 182, 191,120, 132, 101]
                    },
                    {
                        name: '中-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [220, 182, 191,220, 182, 191]
                    },
                    {
                        name: '下-出风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [150, 212, 201,220, 182, 191]
                    },
                    {
                        name: '下-回风',
                        type: 'bar',
                        barWidth: '5%',
                        data: [150, 212, 201,120, 132, 101]
                    }
                ];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
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
                    top:'35px',
                    bottom: '55px',
                },
                legend: {
                    selectedMode:false,//取消图例上的点击事件
                    top:'5px',
                    right:'10px',
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
                    name:'空调编号',
                    nameLocation:'start',
                    nameTextStyle:{
                        color:'#838FA3',
                        fontSize: 14,
                        padding:[30,-10,0,0]
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
                        padding:4,
                        // formatter:'上\r中\r下\n{value}',
                        formatter:function(value){
                            var info='{text|上}{text|中}{text|下}\n{value|'+value+'}'
                            return info
                        },
                        rich:{
                            text:{
                                color:"#838FA3",
                                padding:[0,3,3,3],
                                height: 20,
                                lineHeight: 20
                            },
                            value:{
                                color:"#838FA3",
                                lineHeight: 20
                            },
                        }
                    },
                    data: yData,
                },
                yAxis: {
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
                series: data
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
        padding-bottom: 15px;
    }
</style>
