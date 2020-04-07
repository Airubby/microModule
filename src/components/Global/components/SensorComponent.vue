<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <el-form ref="ValidateForm" class="form-serarch no-el-checkbox__input" :model="initParams" label-width="0px">
                    <el-row :gutter="10">
                        <div style="display:inline-block;float:left;margin:0 10px 0 5px;">
                            <el-form-item label="">
                                <el-radio-group v-model="initParams.check" size="small">
                                    <el-radio label="1" border>近8小时</el-radio>
                                    <el-radio label="2" border>近24小时</el-radio>
                                    <el-radio label="3" border>近3天</el-radio>
                                    <el-radio label="4" border>近7天</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                        <el-col :md="5" :lg="4">
                            <div class="mb20">
                                <router-link :to="{name:'Alarm'}"><el-button type="primary">更多</el-button></router-link>
                                <el-button class="ml5" @click="resetForm">{{$t("Reset")}}</el-button>
                            </div>
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
                check:null,
            },
            table_columns:[
                { prop: 'code', label: "告警等级",minWidth:10},
                { prop: 'type', label: "事件来源",minWidth:10},
                { prop: 'status', label: "事件内容",minWidth:10},
                { prop: 'user', label: "事件状态",minWidth:10},
                { prop: 'indate', label: "发生时间",minWidth:20},
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
