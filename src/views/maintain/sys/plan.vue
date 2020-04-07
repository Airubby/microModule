<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <div class="form-serarch">
                    <el-button @click="back">{{$t("Back")}}</el-button>
                </div>
                <div>
                    <el-button type="primary" class="ml10">创建任务</el-button>
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
                        <span>停用</span>
                        <span>编辑</span>
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
            table_columns:[
                { prop: 'code', label: "分",minWidth:10},
                { prop: 'type', label: "小时",minWidth:10},
                { prop: 'status', label: "天",minWidth:10},
                { prop: 'user', label: "月",minWidth:10},
                { prop: 'indate', label: "周",minWidth:20},
                { prop: 'indate', label: "备注",minWidth:20},
                { prop: 'indate', label: "最后执行",minWidth:20},
                { prop: 'indate', label: "状态",minWidth:20},
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