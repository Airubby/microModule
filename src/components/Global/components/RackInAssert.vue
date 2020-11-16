<template>
    <div class="content">
        <div class="top">
            <div class="top-box">
                <div class="number">24</div>
                <div>资产总数(个)</div>
            </div>
            <div class="top-box">
                <div class="number">24</div>
                <div>在架资产数(个)</div>
            </div>
            <div class="top-box">
                <div class="number">24</div>
                <div>异常资产数(个)</div>
            </div>
        </div>
        <el-form class="search-top" :model="initParams" :rules="rules" @submit.native.prevent ref="ValidateForm" label-position="top" >
            <div class="search">
                <el-form-item prop="alarm">
                    <el-select v-model="initParams.alarm" placeholder="请选择">
                        <el-option key="all" label="所有" value="all"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="alarm" class="form-item">
                    <el-input v-model="initParams.alarm" placeholder="请输入内容">
                        <i slot="suffix" class="el-input__icon el-icon-search cursor-pointer"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="alarm" class="form-item">
                    <el-button type="primary" plain @click="resetForm()">查看电子标签</el-button>
                </el-form-item>
            </div>
            <div class="btn">
                <el-form-item class="form-item" prop="">
                    <el-button type="primary" @click="handleAssert()">新建</el-button>
                    <el-button type="primary" plain>批量导入</el-button>
                    <el-button type="primary" plain>批量导出</el-button>
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
                    <span @click="handleTemp(scope.row)">处置</span>
                    <span>编辑</span>
                    <span @click="enterExample(scope.row)">删除</span>
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
        
    },
    data(){
        return{
            initParams:{
                alarm:"",
                obj:"",
                date:""
            },
            rules:{
                
            },
            tableData:[
                {a:"空调_YMK_K200",b:"温湿度",c:"依米康",d:"2020-10-22",e:"机房222",f:"正常",g:"告警",h:"1",id:"1"},
                {a:"空调_YMK_K200",b:"温湿度",c:"依米康",d:"2020-10-22",e:"机房222",f:"正常",g:"告警",h:"2",id:"2"},
            ],
            tableColumns:[
                { prop: 'a', label: '名称',slotName:'preview-name',minWidth:10},
                { prop: 'b', label: '定位',minWidth:10},
                { prop: 'c', label: '安装U位',minWidth:10},
                { prop: 'd', label: '高度',minWidth:10},
                { prop: 'e', label: '额定功率',minWidth:10},
                { prop: 'f', label: '重量',minWidth:10},
                { prop: 'g', label: '状态',minWidth:10},
                { prop: 'handle', label: '操作',slotName:'preview-handle',width:"140px"},
            ],
            tempInfo:{
                visible:false,
                id:""
            },
        }
    },
	methods: {
        handleAssert:function(item){
            let info={};
            if(item){
                info=item;
            }
            info["activeComponent"]="RackInfoAdd"
            this.$emit("backInfo",info)
        }
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
        margin-bottom: 15px;
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