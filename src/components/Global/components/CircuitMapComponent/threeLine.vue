<template>
    <div class="_threeline" :style="{height:height+'px'}" :class="{'_threeline1':direction==false}">
        <div class="tline"></div>
        <div class="tline"></div>
        <div class="tline"></div>
        <div class="line" :style="{height:getHeight+'px'}"></div>
    </div>
</template>
<script>
export default {
    props: {
        height: {
            type: [String,Number],
            default: "60"
        },
        direction: {
            type: Boolean,
            default: true
        }
    },
    computed:{
        getHeight:function(){
            return parseInt(this.height)-12
        }
    },
}
</script>

<style scoped lang="less">
    ._threeline{
        width:32px;
        position:relative;
        .tline{
            width: 12px;
            height:2px;
            background:#838FA3;
            position:absolute;
            left:50%;
            top:0;
            margin-left: -6px;
        }
        .tline:nth-of-type(2){
            width: 18px;
            height:2px;
            background:#838FA3;
            position:absolute;
            left:50%;
            top: 5px;
            margin-left: -9px;
        }
        .tline:nth-of-type(3){
            width: 26px;
            height:2px;
            background:#838FA3;
            position:absolute;
            left:50%;
            top:10px;
            margin-left: -13px;
        }
        .line{
            width:2px;
            background:#838FA3;
            position:absolute;
            left:50%;
            top:12px;
            margin-left: -1px;
        }
    }
    ._threeline1{
        transform: rotateX(180deg);
    }
</style>