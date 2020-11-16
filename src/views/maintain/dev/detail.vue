<template>
    <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="table_search">
                <div class="form-serarch">
                    <el-button @click="back">{{$t("Back")}}</el-button>
                </div>
                <div>
                    <el-radio-group v-model="initParams.type">
                        <template v-for="(item,index) in types">
                            <el-radio-button :label="item.value" :key="item.name">{{$t(item.name)}}</el-radio-button>
                        </template>
                    </el-radio-group>
                    <el-button type="primary" class="ml10">导出巡检报告</el-button>
                </div>
            </div>
            <el-table-pagination
                :url="$ajaxUrl+'/getTable'"
                list-field="data" 
                total-field="total"
                method='get' 
                type="local"
                :data="table_data"
                :params="initParams"
                :showPagination="true"
                :showSelectAll="true"
                :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="selection"></el-table-column>
                <template slot-scope="scope" slot="preview-nowvalue">
                    <span v-if="scope.row.status==='1'" class="bg-alarm table-span">220.6v</span>
                    <span v-else-if="scope.row.status==='0'" class="bg-color table-span">345</span>
                    <span v-else class="bg-green table-span">开机</span>
                </template>
                <template slot-scope="scope" slot="preview-handle">
                    <p class="table_handle">
                        <span @click="hisTrend(scope.row)">{{$t("HisTrend")}}</span>
                        <span @click="set(scope.row)">{{$t("Set")}}</span>
                    </p>
                </template>
            </el-table-pagination>
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
                type:"0",
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
</style>