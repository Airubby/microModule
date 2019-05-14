<template>
  <div class="content">
        <div class="echart-info" id="echart"></div>
        <div class="echart-table">
            <div class="echart-tablecon">
                <div class="echart-table-title">
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">整流模块编号</div>
                    </div>
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">模块输出电压(V)</div>
                    </div>
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">模块输出电流(A)</div>
                    </div>
                </div>
                <div class="echart-table-con">
                    <div v-for="item in title" class="echart-table-content">
                        <div class="echart-table-box">
                            <div class="echart-table-boxcon">{{item}}</div>
                        </div>
                        <div class="echart-table-box">
                            <div class="echart-table-boxcon">23</div>
                        </div>
                        <div class="echart-table-box">
                            <div class="echart-table-boxcon">324</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        let xData=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15'];
        let legend=["电压(V)","电流(A)"];
        let title=["V","A"];
        let color=["#5DC49E","#5884CD"];
        let series=[
                {
                    name: "电压(V)",
                    type: 'bar',
                    barWidth: '50%',
                    data: [120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230, 400,120]
                },
                {
                    name: "电流(A)",
                    type: 'bar',
                    barWidth: '50%',
                    data: [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 400,220]
                },
            ];
        this.echart=this.$tool.clickLegend('echart',xData,legend,title,color,series);
        
    },
    data(){
        return{
            title:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15'],
            echart:'',
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .echart-table{
        height: 107px;
        .echart-tablecon{
            .echart-table-box{
                height:35px;
            }
        } 
    }
    .echart-info{
        height:calc(100% - 107px);
    }
</style>
