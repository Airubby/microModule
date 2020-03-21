<template>
    <div class="content">
        <div class="font-size16 color mb5">登录超时时间</div>
        <div class="">
            <el-radio-group v-model="initParams.type">
                <el-radio :label="1">10分钟</el-radio>
                <el-radio :label="30">30分钟</el-radio>
                <el-radio :label="0">永不超时</el-radio>
                <el-radio :label="111">
                    <span>自定义超时时间</span>
                    <span style="width:120px;margin-left:5px;display: inline-block;"><el-input v-model="initParams.user"></el-input></span>
                </el-radio>
            </el-radio-group>
        </div>
        <el-button type="primary" @click="submitForm">{{$t("Save")}}</el-button>
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
                type:1,
                user:"",
                user:null,
            },
            
        }
    },
    methods: {
        submitForm:function(){
            
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    
</style>
