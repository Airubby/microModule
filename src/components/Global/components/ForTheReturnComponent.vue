<template>
    <div class="content">
        <div class="echart">
            <div class="content" id="echart3"></div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        
        let legend=["供水温度(℃)","回水温度(℃)"];
        let xData=['空调01','空调02','空调03','空调04','空调05'];
        let yData=[
            {
                name: '供水温度(℃)',
                type: 'bar',
                barWidth: '25%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '回水温度(℃)',
                type: 'bar',
                barWidth: '25%',
                data: [120, 132,29, 101, 134, 94]
            },
        ]
        let color=["#578FEB","#EB5568"]
        this.$tool.echartAir('echart3',"温度(℃)",legend,xData,yData,color);
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
        height: 100%;
        padding-top: 15px;
    }
</style>
