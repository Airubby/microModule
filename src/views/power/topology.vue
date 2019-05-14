<template>
    <div class="content content-flex">
        <el-scrollbar class="scrollbar">
            <div class="scrollbarbox">
                <div class="scrollbarbox-con">
                    <div class="scrollbarbox-content">
                        <div class="topology-box topology-box1">
                            <div class="box left">市电输入(V)</div>
                            <div class="box center">123</div>
                            <div class="box right">旁路</div>
                        </div>
                        <div class="topology-box topology-box2">
                            <div class="box left">直流电压(V)</div>
                            <div class="box center">123</div>
                            <div class="box right">输入</div>
                        </div>
                        <div class="topology-box topology-box3">
                            <img src="~@/assets/images/nibianqi.png">
                        </div>
                        <div class="topology-box topology-box4">
                            <div class="box right">输出</div>
                            <div class="box left">
                                <p>电压(V)</p>
                                <p>电流(A)</p>
                                <p>功率(KW)</p>
                                <p>负载率(%)</p>
                            </div>
                            <div class="box center">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                            </div>
                        </div>
                        <em class="line line1 alarm"></em>
                        <em class="line line2 alarm"></em>
                        <em class="line line3 alarm"></em>
                        <em class="line line4 lost"></em>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>

export default {
    computed: {
      
    },
    data(){
        return{
          
        }
    },
    methods: {
      
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .scrollbarbox-content{
        width: 800px;
        height:280px;
        .topology-box{
            width: 200px;
            height: 80px;
            position:absolute;
            background: #52CB7B;
            color:#fff;
            display:table;
            .box{
                display:table-cell;
                vertical-align: middle;
                text-align:center;
                p{
                    height:40px;
                    line-height:40px;
                }
            }
            .left{
                width: 100px;
                text-align:right;
                background: #4ABD70;
                padding-right: 3px;
            }
            .right{
                width: 27px;
                background: #36AB5A;
                padding: 0 2px;
                font-size:16px;
            }
        }
        .topology-box1{
            left: 0; 
            top: 0;
        }
        .topology-box2{
            left: 0;
            bottom: 40px;
        }
        .topology-box3{
            width: 90px;
            height: 90px;
            left: 320px;
            bottom: 30px;
            background: none;
        }
        .topology-box4{
            right: 0;
            bottom:0;
            height: 160px;
        }
        .line{
            background: #35CD00;
            position:absolute;
        }
        .line.alarm{
            background:#FF0000;
        }
        .line.lost{
            background:#DDDDDD;
        }
        .line1{
            width:285px;
            height:3px;
            left: 200px;
            top: 39px;
        }
        .line2{
            width:3px;
            height:160px;
            left:485px;
            top: 39px;
        }
        .line3{
            width:190px;
            height:3px;
            right:200px;
            bottom: 80px;
        }
        .line4{
            width: 120px;
            height: 3px;
            left: 200px;
            bottom: 80px;
        }
    }
</style>