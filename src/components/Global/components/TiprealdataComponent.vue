<template>
    <div class="content content-flex">
        <div class="table">
            <div class="table-con">
                <div class="table-box table-box-title">
                    <div class="table-title">机柜编号</div>
                    <div class="table-title">交流1(A)</div>
                    <div class="table-title">交流2(A)</div>
                    <div class="table-title">交流3(A)</div>
                    <div class="table-title">直流1(A)</div>
                    <div class="table-title">直流2(A)</div>
                    <div class="table-title">功耗(KW)</div>
                </div>
                <div class="table-box flex">
                    <div class="table-box-con" v-for="(item,index) in 18">
                        <div class="table-title">机柜{{item}}</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title active">0.00</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title">0.00</div>
                        <div class="table-title">0.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    created () {
        console.log("222222222222222222222222")  
    },
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
            .table-box{
                width: 75px;
                .table-box-con{
                    width: 100%;
                }
                .table-title{
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 14px;
                    overflow: hidden;
                    color:#838FA3;
                    border-bottom: 1px solid #E4E7E9;
                    border-right: 1px solid #e4e7e9;
                    &.active{
                        background: #DAF0FF;
                    }
                }
                .table-title:nth-of-type(1){
                    background: #E4E7E9;
                }
            }
            .table-box:nth-of-type(2){
                width: calc(100% - 75px);
            }
            .table-box-title{
                .table-title{
                    border-left: 1px solid #e4e7e9;
                }
            }

        }
    }
</style>
