<template>
    <div class="_switch" :class="{'_switch-open':type=='open'}">
        <div class="_switch-left"></div>
        <div class="_switch-right"></div>
        <div class="_switch-line"></div>
    </div>
</template>
<script>
export default {
    props:['type'],
}
</script>

<style scoped lang="less">
    ._switch{
        min-width:68px;
        height: 2px;
        width: 100%;
        display: flex;
        justify-content:space-between;
        position: relative;
        ._switch-left{
            width: calc(100% - 38px);
            height: 100%;
            background: #838FA3;
            position: relative;
        }
        ._switch-left:after{
            content: "";
            width: 3px;
            height: 3px;
            border: 2px solid #838FA3;
            position: absolute;
            right: -5px;
            border-radius: 50%;
            bottom: -2px;
        }
        ._switch-right{
            width: 14px;
            height: 100%;
            background: #838FA3;
            position: relative;
        }
        ._switch-right:before{
            content: "";
            width: 3px;
            height: 3px;
            border: 2px solid #838FA3;
            position: absolute;
            left: -5px;
            border-radius: 50%;
            bottom: -2px;
        }
        ._switch-line{
            width: 21px;
            height: 2px;
            background: #838FA3;
            position: absolute;
            right: 14px;
            bottom: 3px;
            transform-origin: left center;
        }
    }
    ._switch-open{
        ._switch-line{
            background:#F75B49;
            transform: rotate(-20deg);
        }
        ._switch-left:after,
        ._switch-right:before{
            border-color: #F75B49;
        }
    }
</style>