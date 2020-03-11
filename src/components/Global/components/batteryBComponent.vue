<template>
  <div class="content">
        <div class="echart-info" id="echartb"></div>
        <div class="echart-table">
            <div class="echart-tablecon">
                <div class="echart-table-title">
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">电池编号</div>
                    </div>
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">电压(V)</div>
                    </div>
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">温度(℃)</div>
                    </div>
                    <div class="echart-table-box">
                        <div class="echart-table-boxcon">内阻(mΩ)</div>
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
                        <div class="echart-table-box">
                            <div class="echart-table-boxcon">23</div>
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
        let xData=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20'];
        let legend=["电压(V)","温度(℃)","内阻(mΩ)"];
        let title=["V","℃","mΩ"];
        let color=["#5DC49E","#FFB34C","#378EE9"];
        let series=[
                {
                    name: "电压(V)",
                    type: 'bar',
                    barWidth: '50%',
                    data: [120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230, 400,120, 132, 101, 134, 90, 230]
                },
                {
                    name: "温度(℃)",
                    type: 'bar',
                    barWidth: '50%',
                    data: [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330]
                },
                {
                    name: "内阻(mΩ)",
                    type: 'bar',
                    barWidth: '50%',
                    data: [220, 182, 191, 234, 290, 330, 400,220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330, 400]
                }
            ];
        let echart=this.$tool.clickLegend('echartb',xData,legend,title,color,series);
        window.onresize=function(){
            echart.resize();
        }
    },
    data(){
        return{
            title:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
        }
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
