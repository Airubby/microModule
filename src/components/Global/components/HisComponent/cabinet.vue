<template>
    <div class="_cabinet" :style="'background:'+tcolor">
        <!--type 'pd':配电单元，'zl':整流柜，'dc':电池柜，'jg':设备单元，'kt':精密空调，'llfp':冷量分配单元，'gk':管控单元-->
        <div class="img" v-if="type">
            <img :src="require('@/assets/images/lsp_'+type+'.png')">
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>
<script>
export default {
    created () {
        this.tcolor=this.color?this.color:"#F2F2F2";
    },
    mounted() {
        
    },
    data(){
        return{
           tcolor:'',
        }
    },
    props:['type','color','title'],
}
</script>

<style scoped lang="less">
    ._cabinet{
        width: 100%;
        height:100%;
        .img{
            width: 100%;
            padding: 15px 20% 5px;
            img{
                width: 100%;
            }
        }
        .title{
            width: 22px;
            margin: 0 auto;
            color: #fff;
            font-size: 16px;
        }
    }
</style>