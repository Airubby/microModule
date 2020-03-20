<template>
    <div class="content content-flex">
        <div class="table">
            <div class="table-con">
                <div class="table-box table-box-title">
                    <div class="table-title">{{$t("RackNo")}}</div>
                    <div class="table-title">{{$t("AC")}}1(A)</div>
                    <div class="table-title">{{$t("AC")}}2(A)</div>
                    <div class="table-title">{{$t("AC")}}3(A)</div>
                    <div class="table-title">{{$t("DC")}}1(A)</div>
                    <div class="table-title">{{$t("DC")}}2(A)</div>
                    <div class="table-title">{{$t("TDP")}}(KW)</div>
                </div>
                <div class="table-box flex">
                    <div class="table-box-con" v-for="(item,index) in 18">
                        <div class="table-title">{{$t("Rack")}}{{item}}</div>
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
    
</style>
