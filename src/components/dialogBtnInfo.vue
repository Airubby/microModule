<template>
    <div slot="footer" class="dialog-footer form-serarch">
        <el-button @click="dialogCancel" size="small">{{$t("Cancel")}}</el-button>
        <el-button type="primary" size="small" @click="dialogSure">{{$t("Confirm")}}</el-button>
    </div>
</template>

<script>

export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
        return {
            
        }
    },
    methods:{
      
        //保存的操作
        dialogSure:function(){
            this.$emit('dialogSure');
        },
        //取消操作
        dialogCancel:function(){
            this.dialogInfobtn.visible=false;   
        },

    },
    props:["dialogInfobtn"]  
}
</script>

