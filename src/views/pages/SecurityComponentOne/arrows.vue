<template>
    <div class="arrows-box" :style="'border-bottom-color:'+tcolor">
        <span :class="{'left':type=='left'}" :style="'border-color:'+tcolor"></span>
    </div>
</template>
<script>
export default {
    created () {
        this.tcolor=this.color?this.color:"#838FA3";
    },
    mounted() {
        
    },
    data(){
        return{
           tcolor:'',
        }
    },
    props:['type','color'],
}
</script>

<style scoped lang="less">
    .arrows-box{
        border-left: 5px solid transparent;
        border-top: 0px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 6px solid #838FA3;
        position: relative;
        span{
            content: "";
            width: 7px;
            height: 9px;
            display: block;
            border: 2px solid #838FA3;
            border-radius: 0 0 0 100%;
            border-top: none;
            border-right: none;
            position: absolute;
            left: -1px;
            bottom: -13px;
            &.left{
                border-radius: 0 0 100% 0;
                border-left: none;
                border-right: 2px solid #838FA3;
                left: -6px;
            }
        }
    }
</style>