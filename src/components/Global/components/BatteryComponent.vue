<template>
  <div class="content">
        <div class="echart-info" :id="data.key"></div>
        <div class="table">
            <div class="table-con">
                <div class="table-box table-box-title">
                    <div class="table-title">{{$t("BatteryNo")}}</div>
                    <div class="table-title">{{$t("VDC")}}({{$t("VDCunit")}})</div>
                    <div class="table-title">{{$t("RDS")}}({{$t("RDSunit")}})</div>
                    <div class="table-title">{{$t("Temp")}}({{$t("Tempunit")}})</div>
                </div>
                <div class="table-box flex">
                    <div class="table-box-con" v-for="(item,index) in 18">
                        <div class="table-title">{{item}}</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title">0.00</div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    created () {
        console.log(this.$attrs.data)
        this.data=this.$attrs.data;
    },
    mounted() {
        let xData=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20'];
        let legend=["电压(V)","内阻(mΩ)","温度(℃)"];
        let title=["V","mΩ","℃"];
        let color=["#3C6BFF","#3CB2FF","#FFC940"];
        let series=[
                {
                    name: "电压(V)",
                    type: 'bar',
                    barWidth: '40%',
                    data: [120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230]
                },
                {
                    name: "内阻(mΩ)",
                    type: 'bar',
                    barWidth: '40%',
                    data: [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330, 400]
                },
                {
                    name: "温度(℃)",
                    type: 'bar',
                    barWidth: '40%',
                    data: [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330]
                }
            ];
        let echart=this.clickLegend(this.data.key,xData,legend,title,color,series);
        window.onresize=function(){
            echart.resize();
        }
    },
    data(){
        return{
            data:"",
            title:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
        }
    },
    methods: {
        clickLegend:function(ID,xData,legend,title,color,series){
            // var xData=['01','02','03','04','05','06','07'];
            // var legend=["温度","电压","内阻"];
            // var title=["℃","V","Ω"];
            // var color=["#FFB34C","#5DC49E","#378EE9"];
            // var series=[
            //         {
            //             name: "温度",
            //             type: 'bar',
            //             barWidth: '20%',
            //             data: [120, 132, 101, 134, 90, 230, 400]
            //         },
            //         {
            //             name: "电压",
            //             type: 'bar',
            //             barWidth: '20%',
            //             data: [220, 182, 191, 234, 290, 330, 400]
            //         },
            //         {
            //             name: "内阻",
            //             type: 'bar',
            //             barWidth: '20%',
            //             data: [220, 182, 191, 234, 290, 330, 400]
            //         }
            //     ];
            var show=legend[0];
            var titlebg=color[0];
            var showtitle=title[0];
            var selected={}
            var rich={};
            for(let i=0;i<legend.length;i++){
                if(i==0){
                    selected[legend[i]]=true
                }else{
                    selected[legend[i]]=false
                }
                rich["rich"+i]={color:color[i]};
            }
            rich["rich"+legend.length]={color:"#ccc"};
        
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                title:{
                    text:showtitle,  
                    left:10,
                    top: 5,
                    backgroundColor:titlebg,
                    textStyle:{
                        color:"#fff",
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
                    left: '35px',
                    right: '15px',
                    top:'65px',
                    bottom: '45px',
                },
                legend: {
                    top:'5px',
                    right:'10px',
                    textStyle:{
                        rich:rich
                    },
                    data: legend,
                    formatter: function(name) {
                        var index = 0;
                        legend.forEach(function(value,i){
                            if(value == name){
                                index = i;
                            }
                        });
                        if(name==show){
                            return '{rich'+index+'|'+legend[index]+'}';
                        }else{
                            return '{rich'+legend.length+'|'+legend[index]+'}';
                        }
                        
                    },
                    selected:selected
                },
                xAxis:  {
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
                        show:false
                    },
                    axisLabel:{
                        interval:0,  //强制显示所有标签
                        color:'#000',
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
                        color:"#000"
                    },
                    
                },
                series: series
            };
            
            
            myChart.setOption(option, true);
            myChart.on("legendselectchanged",(param)=>{
                console.log(param)
                let selected=param.selected;
                let stitle,bgcolor;
                for(let item in selected){
                    if(item==param.name){
                        selected[item]=true;
                    }else{
                        selected[item]=false;
                    }
                }
                for(let i=0;i<legend.length;i++){
                    if(legend[i]==param.name){
                        stitle=title[i];
                        bgcolor=color[i];
                        break;
                    }
                }
                show=param.name;
                myChart.setOption({
                    title:{
                        text:stitle,
                        backgroundColor:bgcolor
                    },
                    legend:{
                        selected:selected
                    }
                });
            })
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
.echart-info{
    width: 100%;
    height: calc(100% - 170px);
}
.table{
    width: 100%;
    height: 160px;
    position:relative;
    .flex{
        display: flex;
        justify-content: space-between;
    }
    .table-con{
        width:100%;
        display:flex;
        .table-box{
            width: 75px;
            .table-box-con{
                width: 100%;
            }
            .table-title{
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
                color:#838FA3;
                overflow: hidden;
                border-bottom: 1px solid #E4E7E9;
                border-right: 1px solid #e4e7e9;
                &.active{
                    background: #DAF0FF;
                }
            }
            .table-title:nth-of-type(1){
                background: #E4E7E9;
            }
        }
        .table-box:nth-of-type(2){
            width: calc(100% - 75px);
        }
        .table-box-title{
            .table-title{
                border-left: 1px solid #e4e7e9;
            }
        }

    }
}
</style>
