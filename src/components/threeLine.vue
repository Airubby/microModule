<template>
    <div class="_threeline">
        <div class="tline"></div>
        <div class="tline"></div>
        <div class="tline"></div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped lang="less">
    ._threeline{
        width:32px;
        height: 60px;
        position:relative;
        .tline{
            width: 14px;
            height:2px;
            background:#5E6673;
            position:absolute;
            left:50%;
            top:0;
            margin-left: -7px;
        }
        .tline:nth-of-type(2){
            width: 20px;
            height:2px;
            background:#5E6673;
            position:absolute;
            left:50%;
            top: 5px;
            margin-left: -10px;
        }
        .tline:nth-of-type(3){
            width: 32px;
            height:2px;
            background:#5E6673;
            position:absolute;
            left:50%;
            top:10px;
            margin-left: -16px;
        }
        .line{
            width:2px;
            height:50px;
            background:#5E6673;
            position:absolute;
            left:50%;
            bottom:0;
            margin-left: -1px;
        }
    }
</style>