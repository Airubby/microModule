<template>
    <div class="content">
        <div class="echart" id="test11">
            <div class="content" id="echart4"></div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        
        let legend=["风机转速(%)","水阀开度(%)"];
        let xData=['空调01','空调02','空调03','空调04','空调05'];
        let yData=[
            {
                name: '风机转速(%)',
                type: 'bar',
                barWidth: '25%',
                data: [ 20, 36, 10, 10, 20,40]
            },
            {
                name: '水阀开度(%)',
                type: 'bar',
                barWidth: '25%',
                data: [120, 132,29, 101, 134, 94]
            },
        ]
        let color=["#7CC2A2","#F7B551"]
        let _this=this;

        setTimeout(function(){
            _this.$tool.echartAir('echart4',"百分比(%)",legend,xData,yData,color);
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
        height: 100%;
        padding-top: 15px;
    }
</style>
