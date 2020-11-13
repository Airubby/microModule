<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <img src="./UpsComponent/images/ups-tuopu.png" class="img">
                        <div class="maparea-title">
                            主路逆变供电
                        </div>
                        <div class="table-box table-box1">
                            <div class="table-box-list">
                                <div class="table-box-span table-box-span-title title">UPS旁路</div>
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
                                <div class="table-box-span table-box-span-title title">电压(V)</div>
                                <div class="table-box-span border-left">220</div>
                                <div class="table-box-span border-left">220</div>
                                <div class="table-box-span border-left">220</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">电流(A)</div>
                                <div class="table-box-span border-left">5.0</div>
                                <div class="table-box-span border-left">5.0</div>
                                <div class="table-box-span border-left">5.0</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">频率(Hz)</div>
                                <div class="table-box-span border-left">15</div>
                                <div class="table-box-span border-left">15</div>
                                <div class="table-box-span border-left">15</div>
                            </div>
                        </div>
                        <div class="table-box table-box3">
                            <div class="table-box-list">
                                <div class="table-box-span table-box-span-title title">蓄电池</div>
                                <div class="table-box-span border-left"></div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">电池电压(V)</div>
                                <div class="table-box-span border-left">110</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">电流(A)</div>
                                <div class="table-box-span border-left">2.0</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">运行状态</div>
                                <div class="table-box-span border-left">浮充</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">剩余容量(%)</div>
                                <div class="table-box-span border-left">20</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">后备时间(min)</div>
                                <div class="table-box-span border-left">60</div>
                            </div>
                        </div>
                        <div class="table-box table-box4">
                            <div class="table-box-list">
                                <div class="table-box-span table-box-span-title title">UPS输出</div>
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
                                <div class="table-box-span table-box-span-title title">电流(A)</div>
                                <div class="table-box-span border-left">5.0</div>
                                <div class="table-box-span border-left">5.0</div>
                                <div class="table-box-span border-left">5.0</div>
                            </div>
                            <div class="table-box-list border-top">
                                <div class="table-box-span table-box-span-title title">频率(Hz)</div>
                                <div class="table-box-span border-left">15</div>
                                <div class="table-box-span border-left">15</div>
                                <div class="table-box-span border-left">15</div>
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
            showInfo:{
                visible:false,
            }
        }
    },
    methods: {
        
    },
    
}
</script>
<style scoped lang="less">
    .scrollbarbox .scrollbarbox-con{
        vertical-align: top;
    }
    .scrollbarbox-content{
        width: 865px;
        height:400px;
        position: relative;
        .img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            max-width: 100%;
            max-height: 100%;
        }
        .table-box{
            position: absolute;
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
        .maparea-title{
            position: absolute;
            right: -30px;
            top: 100px;
            min-width: 125px;
            height: 55px;
            border-radius: 5px;
            background: #3CB2FF;
            color: #fff;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .table-box1{
            left: -160px;
            top: 90px;
        }
        .table-box2{
            left: -160px;
            top: 330px;
        }
        .table-box3{
            left: 320px;
            top: 370px;
        }
        .table-box4{
            right: -120px;
            top: 330px;
        }
    }
</style>