<template>
    <div class="content flex">
        <div class="con-left">
            <div class="font-size16 color mb5 flex">
                <span>设备列表</span>
                <el-checkbox v-model="initParams.check">仅显示屏蔽设备</el-checkbox>
            </div>
            <div class="input mb10">
                <el-input
                    :placeholder="$t('PleaseInput')"
                    v-model="search">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div style="width:100%;height:calc(100% - 65px)">
                <el-scrollbar class="scrollbar">
                    <el-tree
                        :data="treedata"
                        node-key="id"
                        :expand-on-click-node="false">
                    </el-tree>
                </el-scrollbar>
            </div>
        </div>
        <div class="con-right">
            <div class="font-size16 color mb5">监控状态</div>
            <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="0">
                <el-row :gutter="10">
                    <el-col :md="24" :lg="24">
                        <el-form-item label="" prop="">
                            <el-radio-group v-model="initParams.type">
                                <el-radio :label="3">正常</el-radio>
                                <el-radio :label="6">维护</el-radio>
                                <el-radio :label="9">停用</el-radio>
                            </el-radio-group>
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
            search:null,
            initParams:{
                check:false,
                type:6,
            },
            treedata :[{
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
                                }
                            ]
                        }
                    ]
                }]
            }]
        }
    },
    methods: {
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
    .custom-tree-node{
        width: calc(100% - 60px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        i{
            font-size: 16px;
            &:hover{
                color: #3CB2FF;
            }
        }
        .btn{
            display: none;
        }
        &:hover .btn{
            display: block;
        }
    }
</style>
