<template>
    <div class="content flex">
        <div class="con-left">
            <div class="font-size16 color mb5">
                {{$t("UserList")}}
                <i class="el-icon-setting fr" style="font-size:20px;"></i>
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
                        default-expand-all
                        :expand-on-click-node="false">
                        <div class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span v-if="node.level===1" class="btn">
                                <i class="el-icon-circle-plus-outline"></i>
                            </span>
                            <span v-else class="btn">
                                <i class="el-icon-remove-outline" @click="() => remove(node, data)"></i>
                                <i class="el-icon-edit-outline ml5" @click="() => edit(node, data)"></i>
                            </span>
                        </div>
                    </el-tree>
                </el-scrollbar>
            </div>
        </div>
        <div class="con-right">
            <div class="font-size16 color mb5">{{$t("UserInfo")}}</div>
            <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="56px">
                <el-row :gutter="30">
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('UserName')" prop="user">
                            <el-input v-model="initParams.user"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('FullName')" prop="name" label-width="70px">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Password')" prop="password">
                            <el-input v-model="initParams.password"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('SurePassword')" prop="surePassword" label-width="70px">
                            <el-input v-model="initParams.surePassword"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Wkno')" prop="wkno">
                            <el-input v-model="initParams.wkno"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Email')" prop="email" label-width="70px">
                            <el-input v-model="initParams.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Phone')" prop="phone">
                            <el-input v-model="initParams.phone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="11" :lg="9">
                        <el-form-item :label="$t('Wechat')" prop="Wechat" label-width="70px">
                            <el-input v-model="initParams.Wechat"></el-input>
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
                user:null,
                name:null,
                password:null,
                surePassword:null,
                wkno:null,
                email:null,
                phone:null,
                Wechat:null,
            },
            treedata :[{
                id: 1,
                label: '管理员',
                children: [{
                    id: 4,
                    label: '用户一',
                }]
                }, {
                    id: 2,
                    label: '运维员',
                    children: [{
                            id: 5,
                            label: '张三',
                        }, {
                            id: 6,
                            label: '李四',
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
