<template>
    <div class="content">
        <div class="table_search" :class="{'active':searchHiden}">
            <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="75px">
                <el-row :gutter="0">
                    <el-col :span="10">
                        <el-form-item label="发生时间">
                            <el-date-picker
                            v-model="initParams.time"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item label="">
                            <span @click="changeSearch" class="changeBtn">{{changeInfo}}<i :class="[searchHiden?'el-icon-arrow-up':'el-icon-arrow-down']"></i></span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="9">
                            <el-form-item label="事件来源">
                                <div style="width:calc(100% - 80px);float:left;">
                                <el-input v-model="initParams.code" readonly>
                                    <template slot="append"><span @click="selectPoint">{{$t("Select")}}</span></template>
                                </el-input>
                                </div>
                                <span @click="changeSearch" class="color ml5">清空</span>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="9">
                            <el-form-item label="告警等级">
                                <el-checkbox-group v-model="initParams.checkboxGroup">
                                    <el-checkbox label="5" border><img src="/images/alarm-5.svg" class="alarm-img">紧急</el-checkbox>
                                    <el-checkbox label="4" border><img src="/images/alarm-4.svg" class="alarm-img">严重</el-checkbox>
                                    <el-checkbox label="3" border><img src="/images/alarm-3.svg" class="alarm-img">重要</el-checkbox>
                                    <el-checkbox label="2" border><img src="/images/alarm-2.svg" class="alarm-img">一般</el-checkbox>
                                    <el-checkbox label="1" border><img src="/images/alarm-1.svg" class="alarm-img">提示</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="9">
                            <el-form-item label="事件状态">
                                <el-checkbox-group v-model="initParams.checkboxGroup">
                                    <el-checkbox label="5" border>已恢复</el-checkbox>
                                    <el-checkbox label="4" border>未恢复</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="9">
                            <el-form-item label="确认状态">
                                <el-checkbox-group v-model="initParams.checkboxGroup">
                                    <el-checkbox label="5" border>已确认</el-checkbox>
                                    <el-checkbox label="4" border>未确认</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
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
                <span>{{scope.row.code}}</span>
            </template>
            <template slot-scope="scope" slot="preview-status">
                <span v-if="scope.row.status=='1'">{{$t("Inservice")}}</span>
                <span v-else class="alarm">{{$t("NotRun")}}</span>
            </template>
        </el-table-pagination>
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
            searchHiden:false,
            changeInfo:'展开筛选',
            initParams:{
                code:'',
                type:'',
                user:'',
                indate:'',
                timegroup:'',
                checkboxGroup:[]
            },
            table_columns:[
                { prop: 'code', label: '告警等级',slotName:'preview-name',minWidth:10},
                { prop: 'type', label: "事件来源",minWidth:10},
                { prop: 'status', label: "事件内容",slotName:'preview-status',minWidth:10},
                { prop: 'user', label: "发生时间",minWidth:10},
                { prop: 'indate', label: "恢复时间",minWidth:20},
                { prop: 'indate', label: "确认人",minWidth:20},
                { prop: 'indate', label: "确认时间",minWidth:20},
                { prop: 'indate', label: "确认内容",minWidth:20},
                { prop: 'indate', label: "出来建议",minWidth:20},
            ],
            table_data:[
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"1","d":"dslf"},
                {"code":"dslf","type":"dslf","user":"dslf","indate":"dslf","status":"0","d":"dslf"},
            ],
        }
    },
    methods: {
        changeSearch:function(){
            this.changeInfo=this.searchHiden?'展开筛选':'收起筛选';
            this.searchHiden=!this.searchHiden;
        },
        selectPoint:function(){

        }
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .table_search{
        max-height: 50px;
        overflow: hidden;
        transition: all 0.4s ease-in;
        &.active{
            max-height: 500px;
        }
    }
    .alarm-img{
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: bottom;
        margin-right: 4px;
    }
    .changeBtn{
        background: #E5E6E9;
        height: 32px;
        line-height: 32px;
        display: inline-block;
        padding: 0px 12px;
        border-radius: 20px;
    }
</style>
