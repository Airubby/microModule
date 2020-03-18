<template>
    <div class="_battery " :class="{'_battery1':direction==false}">
        <div class="battery-box">
            <div class="battery-triangle"></div>
            <!-- <div class="tline"></div>
            <div class="tline"></div>
            <div class="line"></div> -->
        </div>
        <div class="battery-pack">
            <div class="battery-pack-box">
                <div class="battery-pack-bulge"></div>
                <div class="battery-pack-symbol"></div>
            </div>
            <div class="battery-pack-box">
                <div class="battery-pack-bulge"></div>
                <div class="battery-pack-symbol"></div>
            </div>
        </div>
    </div>
</template>
<script>
import threeLine from './threeLine.vue'
export default {
    props: {
        direction: {
            type: Boolean,
            default: false
        }
    },
    created () {
        
    },
    mounted() {
       
    },
    data() {
        return {
            
       }
    },
    methods:{
       
    },
    watch:{
        
    },
    components:{threeLine}
}
</script>

<style scoped lang="less">
    ._battery{
        width: 50px;
        height: 46px;
        position: relative;
        .battery-box{
            width:100%;
            height: 85%;
            padding: 2px;
            position:relative;
            background: #FFF5E1;
            border: 2px solid #FFC85C;
            .battery-triangle{
                border-right: 42px solid #FFC85C;
                border-bottom: 12px solid transparent;
                height: 50%;
                width: 0;
            }
        }
        .battery-pack{
            width:100%;
            height: 15%;
            position: relative;
            .battery-pack-box{
                width: 25%;
                height:100%;
                position:absolute;
                left: 12%;
                .battery-pack-bulge{
                    width:100%;
                    height:100%;
                    background: #FFF5E1;
                    border:2px solid #FFC85C;
                    border-top:none;
                }
                .battery-pack-symbol{
                    width:100%;
                    height:100%;
                    position:relative;
                }
                .battery-pack-symbol:before{
                    content: "";
                    width:calc(100% - 4px);
                    height:2px;
                    background: #FFC85C;
                    position: absolute;
                    left: 2px;
                    bottom: 21px;
                }
            }
            .battery-pack-box:nth-of-type(2){
                left:auto;
                right:12%;
                .battery-pack-symbol:after{
                    content: "";
                    width: 2px;
                    height: 8px;
                    background: #FFC85C;
                    position: absolute;
                    left: 5px;
                    bottom: 18px;
                }
            }
        }
    }
    ._battery1{
        transform: rotateX(180deg);
    }
</style>