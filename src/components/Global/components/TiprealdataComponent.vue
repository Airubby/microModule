<template>
    <div class="content content-flex">
        <div class="table">
            <div class="table-con">
                <div class="table-box">
                    <div class="table-box-title">机柜编号</div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流A</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>直流1</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流B</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>直流2</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流C</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>功耗</p><p>(KW)</p></div>
                        </div>
                    </div>
                </div>
                <div class="table-box" v-for="item in table">
                    <div class="table-box-title">{{item}}</div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content">A</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">1</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">B</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">2</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">C</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-con">
                <div class="table-box">
                    <div class="table-box-title">机柜编号</div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流A</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>直流1</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流B</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>直流2</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>交流C</p><p>(A)</p></div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"><p>功耗</p><p>(KW)</p></div>
                        </div>
                    </div>
                </div>
                <div class="table-box" v-for="item in table">
                    <div class="table-box-title">{{item}}</div>
                    <div class="table-box-con">
                        <div class="table-box-cont">
                            <div class="table-box-content">A</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">1</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">B</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">2</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content">C</div>
                        </div>
                        <div class="table-box-cont">
                            <div class="table-box-content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="~@/assets/images/zb.png" class="table-img">
        </div>
    </div>
</template>

<script>

export default {
    computed: {
      
    },
    data(){
        return{
            table:['01','02','03','04','05','06','07','08','09']
        }
    },
    methods: {
      
    },
    components: {
      
    }
}
</script>
<style scoped lang="less">
    .table{
        width: 100%;
        height: 100%;
        padding: 0 30px;
        position:relative;
        .table-con{
            width:100%;
            height: calc(50% - 40px);
            margin-bottom: 35px;
            border: 1px solid #336699;
            display:flex;
            .table-box{
                border:1px solid #AABDD8;
                width: 9%;
                .table-box-title{
                    height: 40px;
                    line-height: 40px;
                    background:#637899;
                    text-align: center;
                    font-size: 16px;
                    color:#fff;
                }
                .table-box-con{
                    height: calc(100% - 40px);
                    display: flex;
                    flex-wrap: wrap;
                    .table-box-cont{
                        width:50%;
                        border-top: 1px solid #aabdd8;
                        border-right: 1px solid #aabdd8;
                        .table-box-content{
                            padding: 5px;
                            p{
                                display:inline;
                            }
                        }
                    }
                    .table-box-cont:nth-of-type(2n+1){
                        background:#9BAFCC;
                    }
                    .table-box-cont:nth-of-type(2n){
                        border-right: none;
                        background:#B8C8E0;
                        color:#fff;
                    }
                    .table-box-cont:nth-last-of-type(1){
                        background:#fff;
                        color:#637899;
                    }
                }
            }
            .table-box:nth-of-type(1){
                width: 19%;
                .table-box-title{
                    background:none;
                    color: #637899;
                }
                .table-box-con{
                    .table-box-cont{
                        display: table;
                        height: 33.33%;
                        .table-box-content{
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                        }
                    }
                    .table-box-cont:nth-of-type(2n+1){
                        background:none;
                        color: #637899;
                    }
                    .table-box-cont:nth-of-type(2n){
                        background:none;
                        color:#637899;
                    }
                }
                
            }
        }
        .table-con:nth-of-type(1){
            margin-top: 20px;
        }
        .table-img{
            position: absolute;
            right:-2px;
            bottom:-2px;
        }
    }
</style>
