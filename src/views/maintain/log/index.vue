<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <el-form ref="ValidateForm" class="form-serarch" :model="initParams">
                    <el-row :gutter="20">
                        <el-col :md="5" :lg="4">
                            <el-form-item :label="$t('Type')" label-width="40px" prop="type">
                                <el-select v-model="initParams.type" :placeholder="$t('PleaseSelect')">
                                    <el-option label="超级卡" value="shanghai"></el-option>
                                    <el-option label="普通卡" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="6">
                            <el-form-item :label="$t('SelectDate')" label-width="75px" prop="time">
                                <el-date-picker
                                style="width:100%"
                                v-model="initParams.time"
                                type="daterange"
                                :range-separator="$t('To')"
                                :start-placeholder="$t('StartDate')"
                                :end-placeholder="$t('EndDate')">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :md="5" :lg="4">
                            <div class="mb20">
                                <el-button type="primary" @click="submitForm">{{$t("Query")}}</el-button>
                                <el-button class="reset" @click="resetForm">{{$t("Reset")}}</el-button>
                            </div>
                        </el-col>
                        <el-col :md="6" :lg="10">
                            <el-button class="fr">{{$t("BatchExport")}}</el-button>
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
                <template slot-scope="scope" slot="preview-handle">
                    <!-- <p class="table_handle"><span @click="edit(scope.row)">编辑</span><span @click="moreDelete(scope.row)">删除</span></p>
                    <p class="table_handle"><span @click="assignment(scope.row)">权限分配</span><span @click="removePermissions(scope.row)">清除权限</span></p> -->
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
                { prop: 'type', label: this.$t("Grade"),minWidth:10},
                { prop: 'user', label: this.$t("User"),minWidth:10},
                { prop: 'indate', label: this.$t("Time"),minWidth:20},
                { prop: 'timegroup', label: this.$t("Status"),minWidth:10},
                { prop: 'd', label: this.$t("Detail"),minWidth:30},
            ],
            table_data:[
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","timegroup":"dslf","d":"dslf"}
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
    },
    components: {
        
    }
}
</script>
