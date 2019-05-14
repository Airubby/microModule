<template>
    <div class="_battery " :class="{'_battery1':direction==false}">
        <div class="battery-threeline"><threeLine></threeLine></div>
        <div class="battery-box">
            <div class="battery-triangle"></div>
            <div class="tline"></div>
            <div class="tline"></div>
            <div class="line"></div>
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
    props:['direction'],
    components:{threeLine}
}
</script>

<style scoped lang="less">
    ._battery{
        width: 100px;
        height: 150px;
        position: relative;
        .battery-threeline{
            width: 32px;
            height: 60px;
            position:absolute;
            left:50%;
            margin-left:-16px;
            top:-46px;
            z-index: 99;
        }
        .battery-box{
            width:100%;
            height: 100px;
            padding: 2px;
            position:relative;
            border: 3px solid #FFC85C;
            .battery-triangle{
                border-right: 90px solid #FFC85C;
                border-bottom: 40px solid transparent;
                height: 44px;
                width: 0;
            }
            .tline{
                position: absolute;
                left:50%;
                top: 10px;
                width: 32px;
                height: 12px;
                margin-left: -16px;
            }
            .tline:before{
                content:"";
                width: 20px;
                height:2px;
                background:#5E6673;
                position: absolute;
                top:0;
                left:6px;
            }
            .tline:after{
                content:"";
                width: 32px;
                height:2px;
                background:#5E6673;
                position: absolute;
                top: 10px;
                left: 0;
            }
            .tline:nth-of-type(2){
                top:auto;
                bottom:10px;
            }
            .line{
                width:2px;
                height: 50px;
                background:#ccc;
                left: 50%;
                margin-left: -1px;
                border: 1px dashed #5e6673;
                position:absolute;
                top:22px;
            }

        }
        .battery-pack{
            width:100%;
            height: 50px;
            position: relative;
            .battery-pack-box{
                width: 26px;
                height:100%;
                position:absolute;
                left: 15px;
                .battery-pack-bulge{
                    width:26px;
                    height:22px;
                    border:3px solid #FFC85C;
                    border-top:none;
                }
                .battery-pack-symbol{
                    width:20px;
                    height:20px;
                    position:relative;
                }
                .battery-pack-symbol:before{
                    content: "";
                    width:19px;
                    height:3px;
                    background: #FFC85C;
                    position: absolute;
                    left: 3px;
                    top: 12px;
                }
            }
            .battery-pack-box:nth-of-type(2){
                left:auto;
                right:15px;
                .battery-pack-symbol:after{
                    content: "";
                    width:3px;
                    height:19px;
                    background: #FFC85C;
                    position: absolute;
                    left: 11px;
                    top: 4px;
                }
            }
        }
    }
    ._battery1{
        transform: rotateX(180deg);
    }
</style>