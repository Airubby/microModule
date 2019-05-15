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
        let xData=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'];
        let up=[5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20];
        let middle=[120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134];
        let down= [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 400, 234, 290, 330, 400];
        let _this=this;
        setTimeout(function(){
            _this.$tool.echartfn('echart1',"温度(℃)",xData,up,middle,down,["#5984CD","#EF5959","#5984CD"]);
            _this.$tool.echartfn('echart2',"湿度(%)",xData,up,middle,down,["#7BC0A1","#EAB03F","#7BC0A1"]);
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
        padding: 15px 0;
    }
</style>
