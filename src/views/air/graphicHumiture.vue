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
                name: '回风-中',
                type: 'bar',
                barWidth: '10%',
                data: [120, 132,29, 101, 134, 94]
            },
            {
                name: '回风-下',
                type: 'bar',
                barWidth: '10%',
                data: [29,23,4,50,5,6]
            },
            {
                name: '送风-上',
                type: 'bar',
                barWidth: '10%',
                data: [ 20, 36,19 ,10, 10, 20]
            },
            {
                name: '送风-中',
                type: 'bar',
                barWidth: '10%',
                data: [120, 132, 40,101, 134, 94]
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
        let _this=this;
        setTimeout(function(){
            _this.$tool.echartAir('echart1',"温度(℃)",legend,xData,yData,color);
            _this.$tool.echartAir('echart2',"湿度(%)",legend1,xData,yData1,color1);
        },500)
    },
    data(){
        return{
            
        }
    },
    methods: {
      
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
