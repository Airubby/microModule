<template>
    <div class="content">
        <div class="echart" id="ehartBar">
        </div>
    </div>
</template>

<script>

export default {
    created(){

    },
    mounted() {
        let title=this.data.title;
        let xData=[],legend=[],pdata=[],yData=[];
        for(let i=0;i<this.data.dev.length;i++){
            pdata.push(10);
            xData.push(this.data.dev[i].name);
            if(i==0){
                for(let j=0;j<this.data.dev[i].point.length;j++){
                    legend.push(this.data.dev[i].point[j].name);
                }
            }
        }
        for(let i=0;i<legend.length;i++){
            yData.push({
                name: legend[i],
                type:"bar",
                barWidth:"10%",
                data:pdata,
            })
        }
        // let legend=["供水温度(℃)","回水温度(℃)"];
        // let xData=['空调01','空调02','空调03','空调04','空调05'];
        // let yData=[
        //     {
        //         name: '供水温度(℃)',
        //         type: 'bar',
        //         barWidth: '25%',
        //         data: [ 20, 36, 10, 10, 20,40]
        //     },
        //     {
        //         name: '回水温度(℃)',
        //         type: 'bar',
        //         barWidth: '25%',
        //         data: [120, 132,29, 101, 134, 94]
        //     },
        // ]
        let color=["#3CB2FF","#FFC940"]
        this.$tool.echartAir("ehartBar",title,legend,xData,yData,color);
    },
    data(){
        return{
            data:{
                    "key": "ForTheReturnChart",
                    "component": "EchartBarComponent",
                    "title": "温度(℃)",
                    "dev": [
                        {
                            "name": "空调1",
                            "point": [
                                {
                                    "devid": "01",
                                    "pointid": "0101",
                                    "name": "供水温度(℃)"
                                },
                                {
                                    "devid": "01",
                                    "pointid": "0102",
                                    "name": "回水温度(℃)"
                                }
                            ]
                        },
                        {
                            "name": "空调2",
                            "point": [
                                {
                                    "devid": "02",
                                    "pointid": "0201",
                                    "name": "供水温度(℃)"
                                },
                                {
                                    "devid": "02",
                                    "pointid": "0202",
                                    "name": "回水温度(℃)"
                                }
                            ]
                        }
                    ]
                }
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
        padding-bottom: 15px;
    }
</style>
