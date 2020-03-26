<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="0px">
                    <el-row :gutter="10">
                        <el-col :md="10" :lg="6">
                            <el-form-item label="" prop="type">
                                <el-date-picker
                                    style="width:100%;"
                                    v-model="initParams.time"
                                    type="datetimerange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :md="5" :lg="4">
                            <div class="mb20">
                                <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
                                <el-button class="reset" @click="resetForm">{{$t("Reset")}}</el-button>
                            </div>
                        </el-col>
                        <el-col :md="9" :lg="14">
                            <el-button type="primary" @click="submitForm" class="fr">{{$t("BatchExport")}}</el-button>
                        </el-col>
                    </el-row>
                </el-form>
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
                <template slot-scope="scope" slot="preview-name">
                    <span class="color" @click="showDetail(scope.row)">{{scope.row.code}}</span>
                </template>
                <template slot-scope="scope" slot="preview-status">
                    <span v-if="scope.row.status=='1'">{{$t("Inservice")}}</span>
                    <span v-else class="alarm">{{$t("NotRun")}}</span>
                </template>
                <template slot-scope="scope" slot="preview-handle">
                    <p class="table_handle">
                        <span @click="disable(scope.row)">{{$t("Disable")}}</span>
                        <span @click="edit(scope.row)">{{$t("Edit")}}</span>
                        <span @click="remove(scope.row)">{{$t("Remove")}}</span>
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
                type:null,
                time:null,
            },
            table_columns:[
                { prop: 'code', label: "时间",minWidth:10},
                { prop: 'type', label: "卡号",minWidth:10},
                { prop: 'status', label: "人员编号",minWidth:10},
                { prop: 'user', label: "人员姓名",minWidth:10},
                { prop: 'indate', label: "门",minWidth:20},
                { prop: 'indate', label: "事件内容",minWidth:20},
            ],
            table_data:[
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"1","d":"dslf"},
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"0","d":"dslf"},
            ],
        }
    },
    methods: {
        resetForm() {
            this.$refs['ValidateForm'].resetFields();
        },
        submitForm() {
            this.$refs['ValidateForm'].validate((valid) => {
            if (valid) {
                console.log(this.dynamicValidateForm)
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        showDetail:function(row){
            console.log(row)
            row["activeComponent"]="detailComponent";
            this.$emit("backInfo",row);
        },
        disable(){

        },
        edit(row){
            row["activeComponent"]="editComponent";
            this.$emit("backInfo",row);
        },
        remove(){

        }
    },
    components: {
        
    }
}
</script>
