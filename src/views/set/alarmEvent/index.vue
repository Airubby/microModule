<template>
    <div class="content flex">
        <div class="con-left">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="height:100%;">
                <el-tab-pane label="设备列表" name="first" style="height:100%;">
                    <div class="input mb10">
                        <el-input
                            :placeholder="$t('PleaseInput')"
                            v-model="search">
                            <i slot="suffix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div style="width:100%;height:calc(100% - 45px)">
                        <el-scrollbar class="scrollbar">
                            <el-tree
                                :data="devtree"
                                node-key="id"
                                :expand-on-click-node="false">
                            </el-tree>
                        </el-scrollbar>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="事件目录" name="second" style="height:100%;">
                    <div class="input mb10">
                        <el-input
                            :placeholder="$t('PleaseInput')"
                            v-model="search">
                            <i slot="suffix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div style="width:100%;height:calc(100% - 45px)">
                        <el-scrollbar class="scrollbar">
                            <el-tree
                                :data="eventtree"
                                node-key="id"
                                :expand-on-click-node="false">
                            </el-tree>
                        </el-scrollbar>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="con-right">
            <div class="right-title color font-size16">事件规则</div>
            <el-form ref="ValidateForm" class="form-serarch" :model="initParamsdev" v-if="activeName=='first'">
                <el-row :gutter="10">
                    <el-col :span="24">
                        <div class="item-left">
                            <el-checkbox v-model="initParamsdev.upcheck">上限</el-checkbox>
                        </div>
                        <el-col :md="8" :lg="5">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">选择事件</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">提示</el-option>
                                    <el-option label="0" value="0">一般</el-option>
                                    <el-option label="0" value="0">重要</el-option>
                                    <el-option label="0" value="0">严重</el-option>
                                    <el-option label="0" value="0">紧急</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-input v-model="initParamsdev.user" placeholder="触发值"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <div class="item-left">
                            <el-checkbox v-model="initParamsdev.upcheck">上上限</el-checkbox>
                        </div>
                        <el-col :md="8" :lg="5">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">选择事件</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">提示</el-option>
                                    <el-option label="0" value="0">一般</el-option>
                                    <el-option label="0" value="0">重要</el-option>
                                    <el-option label="0" value="0">严重</el-option>
                                    <el-option label="0" value="0">紧急</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-input v-model="initParamsdev.user" placeholder="触发值"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <div class="item-left">
                            <el-checkbox v-model="initParamsdev.upcheck">下限</el-checkbox>
                        </div>
                        <el-col :md="8" :lg="5">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">选择事件</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">提示</el-option>
                                    <el-option label="0" value="0">一般</el-option>
                                    <el-option label="0" value="0">重要</el-option>
                                    <el-option label="0" value="0">严重</el-option>
                                    <el-option label="0" value="0">紧急</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-input v-model="initParamsdev.user" placeholder="触发值"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <div class="item-left">
                            <el-checkbox v-model="initParamsdev.upcheck">下下限</el-checkbox>
                        </div>
                        <el-col :md="8" :lg="5">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">选择事件</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-select v-model="initParamsdev.user" :placeholder="$t('PleaseSelect')">
                                    <el-option label="0" value="0">提示</el-option>
                                    <el-option label="0" value="0">一般</el-option>
                                    <el-option label="0" value="0">重要</el-option>
                                    <el-option label="0" value="0">严重</el-option>
                                    <el-option label="0" value="0">紧急</el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-input v-model="initParamsdev.user" placeholder="触发值"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24">
                        <div class="item-left" style="justify-content: flex-end;">
                            告警死区
                        </div>
                        <el-col :md="4" :lg="3">
                            <el-form-item label="" prop="user" label-width="0">
                                <el-input v-model="initParamsdev.user" placeholder="死区值"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item label="" label-width="70px">
                            <el-button type="primary" @click="submitForm">{{$t("Save")}}</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-form ref="ValidateForm" class="form-serarch" :model="initParamsevent" label-width="76px" v-if="activeName=='second'">
                <el-row :gutter="30">
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('EventCode')" prop="user">
                            <el-input v-model="initParamsevent.code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Grade')" prop="user">
                            <el-select v-model="initParamsevent.code" :placeholder="$t('PleaseSelect')">
                                <el-option label="1">提示</el-option>
                                <el-option label="2">一般</el-option>
                                <el-option label="3">重要</el-option>
                                <el-option label="4">严重</el-option>
                                <el-option label="5">紧急</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('EventType')" prop="user">
                            <el-select v-model="initParamsevent.code" :placeholder="$t('PleaseSelect')">
                                <el-option label="1">机房环境</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('EventDescribe')" prop="user">
                            <el-input v-model="initParamsevent.code"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item label="">
                            <el-button type="primary" @click="submitForm">{{$t("Save")}}</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        
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
            activeName: 'first',
            search:null,
            initParamsdev:{
                upcheck:false,
                user:null,
            },
            initParamsevent:{
                code:null,
            },
            devtree :[{
                id: 1,
                label: '微模块',
                children: [{
                    id: 2,
                    label: '照明与其它',
                },{
                    id: 3,
                    label: '供配电',
                },{
                    id: 4,
                    label: 'HVDC',
                    children:[
                        {
                            id: 41,
                            label: '机柜1',
                        },{
                            id: 42,
                            label: '机柜2',
                        }
                    ]
                },{
                    id: 5,
                    label: '空调',
                    children:[
                        {
                            id: 51,
                            label: '空调1',
                        },
                        {
                            id: 52,
                            label: '空调2',
                            children:[
                                {
                                    id: 521,
                                    label: '回风温度',
                                },{
                                    id: 522,
                                    label: '回风湿度',
                                },{
                                    id: 523,
                                    label: '回风温度',
                                },{
                                    id: 524,
                                    label: '回风湿度',
                                },{
                                    id: 525,
                                    label: '回风温度',
                                },{
                                    id: 526,
                                    label: '回风湿度',
                                },{
                                    id: 527,
                                    label: '回风温度',
                                },{
                                    id: 528,
                                    label: '回风湿度',
                                },{
                                    id: 529,
                                    label: '回风温度',
                                },{
                                    id: 5227,
                                    label: '回qwe风湿度',
                                },{
                                    id: 626,
                                    label: '回风湿度',
                                },{
                                    id: 627,
                                    label: '回风温度',
                                },{
                                    id: 628,
                                    label: '回风湿度',
                                },{
                                    id: 629,
                                    label: '回风温度',
                                },{
                                    id: 6227,
                                    label: '回qwe风湿度',
                                },
                            ]
                        }
                    ]
                }]
            }],
            eventtree :[{
                id: 1,
                label: '温度过高事件',
            },{
                id: 2,
                label: '温度过高事件',
            },{
                id: 3,
                label: '温度过高事件',
            },{
                id: 4,
                label: '温度过高事件',
            },{
                id: 5,
                label: '温度过高事件',
            },{
                id: 6,
                label: '温度过高事件',
            }]
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        remove:function(node,data){

        },
        edit:function(node,data){

        },
        submitForm:function(){
            
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .content{
        height: calc(100% + 15px);
        position: relative;
        top: -15px;
    }
    .right-title{
        height: 40px;
        line-height: 40px;
    }
    .item-left{
        min-width: 65px;
        height: 32px;
        float: left;
        display: flex;
        align-items: center;
    }
    
</style>
