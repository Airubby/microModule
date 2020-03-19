<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="form-serarch">
                <div class="mb10"><el-button @click="back">{{$t("Back")}}</el-button></div>
                <el-form ref="ValidateForm" class="form-serarch" :model="initParams" label-width="40px">
                    <el-row :gutter="10">
                        <div class="block">
                        <el-col :md="10" :lg="6">
                            <el-form-item :label="$t('StrategyName')" prop="name" label-width="70px">
                                <el-input v-model="initParams.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="10" :lg="6">
                            <el-form-item label="" prop="" label-width="10px">
                                <el-checkbox v-model="initParams.status">{{$t("Enabled")}}</el-checkbox>
                            </el-form-item>
                        </el-col>
                        </div>
                        <div class="block">
                            <el-col :md="15" :lg="10">
                                <el-form-item :label="$t('StrategyDescribe')" prop="detail" label-width="70px">
                                    <el-input v-model="initParams.detail" type="textarea"></el-input>
                                </el-form-item>
                            </el-col>
                        </div>
                        <div class="block color font-size16 mb10" style="padding-left:5px;">
                            {{$t("INinfo")}}
                        </div>
                        <div class="block">
                            <span class="title">{{$t('Signal1')}}</span>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :md="8" :lg="5">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-input v-model="initParams.signal1" readonly>
                                        <template slot="append"><span @click="selectPoint">{{$t("Select")}}</span></template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :md="6" :lg="4">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </div>
                        <div class="block">
                            <span class="title">{{$t('Typeid')}}</span>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </div>
                        <div class="block">
                            <span class="title">{{$t('Signal2')}}</span>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :md="8" :lg="5">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-input v-model="initParams.signal1" readonly>
                                        <template slot="append"><span @click="selectPoint">{{$t("Select")}}</span></template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :md="6" :lg="4">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("GT")}}</el-option>
                                        <el-option label="1" value="1">{{$t("LT")}}</el-option>
                                        <el-option label="1" value="2">{{$t("EQ")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-input placeholder="请输入内容" v-model="initParams.signal1"></el-input>
                                </el-form-item>
                            </el-col>
                        </div>
                        <div class="block color font-size16 mb10" style="padding-left:5px;">
                            {{$t("OUTinfo")}}
                        </div>
                        <div class="block">
                            <span class="title">{{$t('Action')}}</span>
                            <el-col :md="4" :lg="3">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-select v-model="initParams.signal1" :placeholder="$t('PleaseSelect')">
                                        <el-option label="0" value="0">{{$t("Whole")}}</el-option>
                                        <el-option label="1" value="1">{{$t("Enabled")}}</el-option>
                                        <el-option label="1" value="2">{{$t("NotEnabled")}}</el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :md="8" :lg="5">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-input v-model="initParams.signal1" readonly>
                                        <template slot="append"><span @click="selectPoint">{{$t("Select")}}</span></template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :md="10" :lg="7">
                                <el-form-item label="" prop="signal1" label-width="0">
                                    <el-input placeholder="" v-model="initParams.signal1"></el-input>
                                </el-form-item>
                            </el-col>
                        </div>
                        <div class="block">
                            <el-form-item label="" prop="signal1" label-width="55px">
                                <el-button type="primary" @click="submitForm">{{$t("Save")}}</el-button>
                            </el-form-item>
                            
                        </div>
                    </el-row>
                </el-form>
            </div>
        </el-scrollbar>
        <get-point v-if="getPointInfo.visible" :dialogInfo="getPointInfo"></get-point>
  </div>
</template>

<script>
import getPoint from './component/getPoint.vue'
export default {
    components: {
      getPoint
    },
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            initParams:{
                name:"",
                status:false,
                detail:null,
                signal1:null,
            },
            getPointInfo:{
                visible:false,
            }
            
        }
    },
    methods: {
        back() {
            this.$emit("backInfo")
        },
        selectPoint:function(){
            this.getPointInfo.visible=true;
        },
        submitForm:function(){

        }
    },
    
}
</script>
<style lang="less" scoped>
    .block{
        width: 100%;
        overflow: hidden;
    }
    .title{
        padding-left: 5px;
        float: left;
        display: flex;
        align-items: center;
        height: 32px;
        width: 50px;
    }
</style>