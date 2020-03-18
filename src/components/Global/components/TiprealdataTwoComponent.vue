<template>
    <div class="content content-flex">
        <div class="table">
            <div class="table-con">
                <div class="table-box table-box-title">
                    <div class="table-title">机柜编号</div>
                    <div class="table-title">
                        <span>交流1(A)</span>
                        <span>直流1(A)</span>
                    </div>
                    <div class="table-title">
                        <span>交流2(A)</span>
                        <span>直流2(A)</span>
                    </div>
                    <div class="table-title">
                        <span>交流3(A)</span>
                        <span>功耗(KW)</span>
                    </div>
                </div>
                <div class="table-box flex">
                    <div class="table-box-con" v-for="(item,index) in 9">
                        <div class="table-title">机柜{{item}}</div>
                        <div class="table-title">
                            <span>0.00</span>
                            <span>0.00</span>
                        </div>
                        <div class="table-title">
                            <span class="active">0.00</span>
                            <span>0.00</span>
                        </div>
                        <div class="table-title">
                            <span>0.00</span>
                            <span>0.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-con">
                <div class="table-box table-box-title">
                    <div class="table-title">机柜编号</div>
                    <div class="table-title">
                        <span>交流1(A)</span>
                        <span>直流1(A)</span>
                    </div>
                    <div class="table-title">
                        <span>交流2(A)</span>
                        <span>直流2(A)</span>
                    </div>
                    <div class="table-title">
                        <span>交流3(A)</span>
                        <span>功耗(KW)</span>
                    </div>
                </div>
                <div class="table-box flex">
                    <div class="table-box-con" v-for="(item,index) in 9">
                        <div class="table-title">机柜{{item+9}}</div>
                        <div class="table-title">
                            <span>0.00</span>
                            <span>0.00</span>
                        </div>
                        <div class="table-title">
                            <span class="active">0.00</span>
                            <span>0.00</span>
                        </div>
                        <div class="table-title">
                            <span>0.00</span>
                            <span>0.00</span>
                        </div>
                    </div>
                </div>
            </div>
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
        position:relative;
        .flex{
            display: flex;
            justify-content: space-between;
        }
        .table-con{
            width:100%;
            display:flex;
            margin: 40px auto;
            .table-box{
                width: 150px;
                .table-box-con{
                    width: 100%;
                }
                .table-title{
                    position: relative;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    color:#838FA3;
                    overflow: hidden;
                    display: flex;
                    justify-content: space-around;
                    border-bottom: 1px solid #E4E7E9;
                    border-right: 1px solid #E4E7E9;
                    span{
                        width: 50%;
                        display: block;
                    }
                    &:after{
                        content: "";
                        height: 100%;
                        width: 1px;
                        position: absolute;
                        left: 50%;
                        top: 0;
                        background: #E4E7E9;
                    }
                    .active{
                        background: #DAF0FF;
                    }
                }
                .table-title:nth-of-type(1){
                    background: #E4E7E9;
                    &:after{
                        background: none;
                    }
                }
            }
            .table-box:nth-of-type(2){
                width: calc(100% - 150px);
            }
            .table-box-title{
                .table-title{
                    border-left: 1px solid #e4e7e9;
                }
            }

        }
    }
</style>
