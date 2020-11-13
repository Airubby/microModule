<template>
    <div class="content">
        <div class="top">
            <div class="top-box">
                <div class="number">24</div>
                <div>机柜总数</div>
            </div>
            <div class="top-box">
                <div class="number">24</div>
                <div>总机架(U)</div>
            </div>
            <div class="top-box">
                <div class="number">24</div>
                <div>可用机架(U)</div>
            </div>
            <div class="top-box">
                <div class="number" id="space">24</div>
                <div>空间容量</div>
            </div>
            <div class="top-box">
                <div class="number" id="power">24</div>
                <div>电力容量</div>
            </div>
        </div>
        <el-form class="search-top" :model="initParams" :rules="rules" @submit.native.prevent ref="ValidateForm" label-position="top" >
            <div class="search">
                <el-form-item prop="alarm" label="可用U">
                    <el-input v-model="initParams.alarm" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item prop="alarm" label="连续U" class="form-item">
                    <el-input v-model="initParams.alarm" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item prop="alarm" label="功率" class="form-item">
                    <el-input v-model="initParams.alarm" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item prop="alarm" label="承重" class="form-item">
                    <el-input v-model="initParams.alarm" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="" :label="`\u3000`">
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button type="primary" plain @click="resetForm()">重置</el-button>
                </el-form-item>
            </div>
        </el-form>
        <el-table-pagination
            list-field="data.item" 
            total-field="data.total"
            :data="tableData"
            method='post' 
            type="local"
            :params="initParams"
            :columns="tableColumns" ref="thisRef">   
            <el-table-column slot="prepend" type="selection"></el-table-column>
            <template v-slot:preview-name="scope">
                <span @click="enterDetail(scope.row)" class="item-color">{{scope.row.a}}</span>
            </template>
            <template v-slot:preview-handle="scope">
                <p class="table_handle">
                    <span @click="handleTemp(scope.row)">编辑</span>
                    <span>移除</span>
                    <span @click="enterExample(scope.row)">创建实例</span>
                </p>
            </template>
        </el-table-pagination>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    components:{},
    created() {
        
    },
    mounted() {
        this.pieChar("space",100,25,"空间",["#3CB2FF","#F1F3F4"]);
        this.pieChar("power",100,25,"电力",["#3C6BFF","#F1F3F4"]);
        
    },
    data(){
        return{
            initParams:{
                alarm:"",
                obj:"",
                date:""
            },
            rules:{
                alarm:[
                    {required: true, message: '不能为空', trigger: 'blur'}
                ]
            },
            tableData:[
                {a:"空调_YMK_K200",b:"温湿度",c:"依米康",d:"2020-10-22",e:"机房222",f:"正常",g:"告警",h:"1",id:"1"},
                {a:"空调_YMK_K200",b:"温湿度",c:"依米康",d:"2020-10-22",e:"机房222",f:"正常",g:"告警",h:"2",id:"2"},
            ],
            tableColumns:[
                { prop: 'a', label: '机柜名称',slotName:'preview-name',minWidth:10},
                { prop: 'b', label: '位置',minWidth:10},
                { prop: 'c', label: '装机数',minWidth:10},
                { prop: 'd', label: '层高',minWidth:10},
                { prop: 'e', label: '可用U位',minWidth:10},
                { prop: 'f', label: '最大连续U位',minWidth:10},
                { prop: 'g', label: '额定功率',minWidth:10},
                { prop: 'h', label: '可用功率',minWidth:10},
                { prop: 'i', label: '主控状态',minWidth:10},
            ],
            tempInfo:{
                visible:false,
                id:""
            },
        }
    },
	methods: {
        tabClick:function(tab,event){
            console.log(tab)
            this.$nextTick(()=>{
                if(tab.name=="first"){
                    this.chartBar("barchar-one");
                }else if(tab.name=="second"){
                    this.chartBar("barchar-two");
                }else if(tab.name="third"){
                    this.chartBar("barchar-three");
                }
            })
            
        },
        pieChar:function(ID,count,rate,text,color) {
            // var color=["#3CB2FF","#F1F3F4"];
            // var count=100,rate=73;
            // var text="空闲";
            var residue=parseInt(count)-parseInt(rate);
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color:color,
                grid: {
                    top:'20%',
                    bottom: '0',
                    containLabel: true
                },
                series: [
                    {
                        type:'pie',
                        radius: ['70%', '90%'],
                        center: ['50%', '50%'],
                        //是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
                        //如果不需要开启该策略，例如圆环图这个例子中需要强制所有标签放在中心位置，可以将avoidLabelOverlap该值设为 false。
                        avoidLabelOverlap: false,  
                        hoverAnimation:false, //放大的动画效果
                        hoverOffset:5,  //高亮扇区的偏移距离,默认10，就是hover时候的放大的距离
                        silent:true,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter:'{num|'+rate+'%}',
                                rich: {
                                    num: {
                                        fontSize: 14,
                                        color:'#838FA3',
                                    },
                                },
                                
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            { 
                                value:rate, 
                                name:text,
                                
                            },
                            {
                                value:residue, 
                                name:'剩余'
                            },
                        ]
                    }
                ]
            };
            myChart.setOption(option, true);
            
            return myChart; 
        },
        chartBar:function(ID){
            var myChart = echarts.init(document.getElementById(ID));
            var yData=['A01','A02','A03','A04','A05','A06','A07'];
            var option = {
                color:["#3CB2FF","#3C6BFF","#FFC940"],
                title:{
                    show:true,
                    text:"总量(%)",  
                    x:'left',
                    top: 5,
                    textStyle:{
                        color: "#838FA3",
                        fontSize: 14,
                    },
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    } 
                },
                legend: {
                    top:'10px',
                    right:"10px",
                    textStyle:{
                        color:"#838FA3",
                    },
                    data: ['空闲', '预占','占用']
                },
                grid: {
                    left:"20px",
                    right:"15px",
                    top:"40px",
                    bottom: '40px',
                    containLabel: true
                },
                xAxis:  {
                    name:'名称',
                    nameLocation:'start',
                    nameTextStyle:{
                        color:'#838FA3',
                        fontSize: 14,
                        padding:[20,0,0,0],
                    },
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:"#E4E7E9",
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
                        color:"#838FA3"
                    },
                    data: yData,
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:"#E4E7E9",
                            width:1,
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:"#E4E7E9",
                            width:1,
                            type:"dashed",
                        }
                    },
                    axisLabel:{
                        color:"#838FA3"
                    },
                    
                },
                series: [
                    {
                        name: '空闲',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [400, 302, 301, 334, 390, 330, 400]
                    },
                    {
                        name: '预占',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [120, 132, 101, 134, 90, 230, 400]
                    },
                    {
                        name: '占用',
                        type: 'bar',
                        stack: 'all',
                        barWidth: '20%',
                        data: [220, 182, 191, 234, 290, 330, 400]
                    }
                ]
            };
            myChart.setOption(option, true);
            return myChart; 
        },
	},
}
</script>
<style lang="less" scoped>
    .search-top{
        color: #838FA3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
        .search{
            width: 100%;
            display: flex;
            .form-item{
                margin-left: 15px;
            }
        }
    }
    .top{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;
        .top-box{
            text-align: center;
            .number{
                min-width: 80px;
                height: 80px;
                line-height: 80px;
                color: #838FA3;
                font-size: 48px;
            }
        }
    }
    
    .item-color{
        color: #3CB2FF;
        cursor: pointer;
    }
</style>