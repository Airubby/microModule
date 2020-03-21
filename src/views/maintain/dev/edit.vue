<template>
  <div class="content">
      <el-scrollbar class="scrollbar">
            <div class="table_search">
                <div class="form-serarch">
                    <el-button @click="back">{{$t("Back")}}</el-button>
                </div>
                <div>
                    <el-button @click="back" type="primary">{{$t("Save")}}</el-button>
                </div>
            </div>
            <el-form :model="initParams" :rules="rules" ref="ValidateForm" class="form-serarch" label-position="top">
                <el-row :gutter="15">
                    <el-col :md="8" :lg="7">
                        <el-form-item :label="$t('DevName')" prop="name">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="8" :lg="7">
                        <el-form-item :label="$t('DevCode')" prop="name">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="8" :lg="7">
                        <el-form-item :label="$t('InstallationLocation')" prop="name">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="8" :lg="7">
                        <el-form-item :label="$t('DevClassify')" prop="name">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="8" :lg="7">
                        <el-form-item :label="$t('AcquisitionChannel')" prop="name">
                            <el-input v-model="initParams.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-scrollbar>
  </div>
</template>

<script>
export default {
    props:["data"],
    created () {
        console.log(this.data)
    },
    
    mounted() {
        
    },
    data(){
        return{
            initParams:{
                name:null,
            },
            rules:[]
        }
    },
    methods: {
        back() {
            this.$emit("backInfo")
        },
        
    },
    
}
</script>
<style lang="less" scoped>
    .table_search{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
</style>