<template>
    <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="table_search">
                <div class="form-serarch">
                    <span>新建模板</span><el-button @click="back" class="ml10">{{$t("Back")}}</el-button>
                </div>
                <div>
                    <el-button class="ml10">取消</el-button>
                    <el-button type="primary" class="ml10">提交</el-button>
                </div>
            </div>
            <div style="width:100%;overflow:hidden;">
                <el-form ref="ValidateForm" :model="initParams" :rules="rules" label-position="top">
                    <div class="title">基本信息</div>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label='机柜模板' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='机柜名称' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='机柜编码' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='层高(U位)' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='规划电力(W)' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='承重(Kg)' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='安装位置' prop="name">
                                <el-row :gutter="5">
                                    <el-col :span="14">
                                        <el-select v-model="initParams.name" placeholder="请选择">
                                            <el-option key="1" label="管理员" value="1"></el-option>
                                            <el-option key="2" label="运维员" value="2"></el-option>
                                            <el-option key="3" label="一般人员" value="3"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-input v-model="initParams.name"></el-input>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-input v-model="initParams.name"></el-input>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='使用部门' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='负责人' prop="name">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <div class="title">采集参数</div>
                    <el-row :gutter="50">
                        <el-col :span="8">
                            <el-form-item label='U位主控' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择">
                                    <el-option key="1" label="管理员" value="1"></el-option>
                                    <el-option key="2" label="运维员" value="2"></el-option>
                                    <el-option key="3" label="一般人员" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16">
                            <el-form-item :label='`\u3000`' prop="name">
                                <el-checkbox v-model="initParams.type" style="margin-bottom:1px;">内置温湿度</el-checkbox>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='上进风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='中进风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='下进风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='上出风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='中出风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='下出风口温度' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='A路PDU开关' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='A路PDU功耗计量' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='A路PDU电量计量' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='B路PDU开关' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='B路PDU功耗计量' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label='B路PDU电量计量' prop="name">
                                <el-select v-model="initParams.name" placeholder="请选择"></el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            initParams:{
                type:false,
                name:""
            },
            types:[
                {name:"All",value:"0"},
                {name:"AI",value:"1"},
                {name:"DI",value:"2"},
                {name:"AO",value:"3"},
                {name:"DO",value:"4"},
            ],
            table_columns:[
                { prop: 'code', label: this.$t("PointName"),minWidth:10},
                { prop: 'type', label: this.$t("NowValue"),slotName:'preview-nowvalue',minWidth:10},
                { prop: 'status', label: this.$t("EvalueRange"),minWidth:10},
                { prop: 'user', label: this.$t("CollectionValue"),minWidth:10},
                { prop: 'indate', label: this.$t("SVGA"),minWidth:20},
                { prop: 'indate', label: this.$t("PointClassify"),minWidth:20},
                { prop: 'd', label: this.$t("Handle"),slotName:'preview-handle',width:140},
            ],
            table_data:[
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"1","d":"dslf"},
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"0","d":"dslf"},
            ],
        }
    },
    methods: {
        back() {
            this.$emit("backInfo")
        },
        hisTrend:function(){

        },
        set:function(){

        }
    },
    watch: {
        "initParams.type":function(val){
            console.log(val)
        }
    }
}
</script>
<style lang="less" scoped>
    
    .table_search{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .table-span{
        color: #fff;
        padding: 1px 5px;
        min-width: 60px;
        display: inline-block;
        text-align: center;
        border-radius: 2px;
    }
    .title{
        color: #3CB2FF;   
    }
</style>