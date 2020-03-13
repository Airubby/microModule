<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="40px">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <el-form-item :label="$t('Classify')" prop="type">
                                <el-input v-model="initParams.type"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item :label="$t('Location')" prop="type">
                                <el-input v-model="initParams.type"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item :label="$t('Status')" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="超级卡" value="shanghai"></el-option>
                                    <el-option label="普通卡" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <div class="mb20">
                                <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
                                <el-button class="reset" @click="resetForm">{{$t("Reset")}}</el-button>
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
                @row-click="rowClick"
                :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="selection"></el-table-column>
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
                { prop: 'code', label: this.$t("Name"),minWidth:10},
                { prop: 'type', label: this.$t("DevClassify"),minWidth:10},
                { prop: 'status', label: this.$t("Status"),slotName:'preview-status',minWidth:10},
                { prop: 'user', label: this.$t("Location"),minWidth:10},
                { prop: 'indate', label: this.$t("APN"),minWidth:20},
                { prop: 'd', label: this.$t("Handle"),slotName:'preview-handle',width:140},
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
        rowClick:function(row){
            console.log(row)
            this.$emit("backInfo",row)
        },
        disable(){

        },
        edit(){

        },
        remove(){

        }
    },
    components: {
        
    }
}
</script>
