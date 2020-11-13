<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="upsbox">
                            <div class="imgbox">
                                <img src="./UpsComponent/images/ups-model.png" class="img">
                            </div>
                            <div class="infobox">
                                <div class="info-left">
                                    <div class="maparea maparea1">
                                        <div class="title">电池正极电压(V)</div>
                                        <div class="number">240.5</div>
                                    </div>
                                    <div class="maparea">
                                        <div class="title">电池负极电压(V)</div>
                                        <div class="number">240.5</div>
                                    </div>
                                </div>
                                <div class="info-img">
                                    <img src="./UpsComponent/images/ups-modelimage.png" class="img">
                                </div>
                                <div class="info-right">
                                    <div class="table-box table-box1">
                                        <div class="table-box-list">
                                            <div class="table-box-span table-box-span-title title">UPS输入</div>
                                            <div class="table-box-span border-left title">A相</div>
                                            <div class="table-box-span border-left title">B相</div>
                                            <div class="table-box-span border-left title">C相</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">电压(V)</div>
                                            <div class="table-box-span border-left">220</div>
                                            <div class="table-box-span border-left">220</div>
                                            <div class="table-box-span border-left">220</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">频率(Hz)</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                        </div>
                                    </div>
                                    <div class="table-box table-box2">
                                        <div class="table-box-list">
                                            <div class="table-box-span table-box-span-title title">UPS输入</div>
                                            <div class="table-box-span border-left title">A相</div>
                                            <div class="table-box-span border-left title">B相</div>
                                            <div class="table-box-span border-left title">C相</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">电流(A)</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">电压(V)</div>
                                            <div class="table-box-span border-left">220</div>
                                            <div class="table-box-span border-left">220</div>
                                            <div class="table-box-span border-left">220</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">负载百分比(%)</div>
                                            <div class="table-box-span border-left">20</div>
                                            <div class="table-box-span border-left">20</div>
                                            <div class="table-box-span border-left">22</div>
                                        </div>
                                        <div class="table-box-list border-top">
                                            <div class="table-box-span table-box-span-title title">频率(Hz)</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                            <div class="table-box-span border-left">5.0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>

export default {
    components: {
     
    },
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width: 965px;
        height:460px;
        .upsbox{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .img{
                max-width: 100%;
                max-height: 100%;
            }
            .infobox{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                margin-left: 30px;
            }
            .maparea{
                background: #3CB2FF;
                color: #fff;
                width: 140px;
                height: 80px;
                padding: 10px;
                text-align: left;
                &.maparea1{
                    margin: 100px 0 40px 0;
                }
                .title{
                    font-size: 12px;
                }
                .number{
                    font-size: 24px;
                }
            }
            .info-right{
                position: relative;
                .table-box1{
                    position: relative;
                    top: -20px;
                }
                .table-box2{
                    position: absolute;
                    bottom: -20px;
                }
            }
            .table-box{
                border: 1px solid rgba(228, 231, 233, 0.5);
            }
            .table-box-list{
                display: flex;
            }
            .table-box-list .table-box-span{
                width: 60px;
                min-height: 30px;
                line-height: 30px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #3CB2FF;
                color: #fff;
            }
            .table-box-list .table-box-span.table-box-span-title{
                width: 120px;
                
            }
            .table-box-list .title{
                background: #3087C0;
            }
            .border-top{
                border-top: 1px solid rgba(228, 231, 233, 0.5);
            }
            .border-left{
                border-left: 1px solid rgba(228, 231, 233, 0.5);
            }
        }
    }
</style>