<template>
    <div class="content" id="three-dom">
        <!-- <el-table-pagination
                :url="$ajaxUrl+'/dev/queryPage'"
                list-field="data" 
                total-field="total"
                method='post' 
                page-size-key="pagesize"
                page-index-key="pageindex"
                :params="initParams"
                :showPagination="true"
                :showSelectAll="true"
                :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="selection"></el-table-column>
            </el-table-pagination> -->
            <webSocket :wsInfo="back_data" :sendInfo="{cmd:'subdata',returnFn:true}"></webSocket>
    </div>
</template>
<script>
// import axios from 'axios';
// import ThreeMap from './TestThreeMap.js';
import webSocket from '@/components/webSocket.vue'
export default {
    created () {
        
    },
    mounted() {
        
        // this.$api.post("/user/queryPage",{name:"123",pas:'1223',items:[{aa:'11'}]},r=>{
        //     console.log(r)
        // })

        let props={dom:"three-dom"}
        // axios.get('/three/testscene.json').then(data => {
        //     let result=data.data;
        //     this.map = new ThreeMap(props,result);
        // })

        // this.map = new ThreeMap(props,"/three/rscene.json");
        
    },
    data() {
        return {
            initParams:{
                name:null,pas:'1223',items:[{aa:'11'}]
            },
            table_columns:[],
            back_data:[
                {"devid":"333559815783055360",pointid:"333559815934050304"},
                {"devid":"333559815783055360",pointid:"333559816022130688"},
            ]
       }
   },
    methods:{
        

    },
    components:{webSocket}
}
</script>

<style scoped lang="less">
   
</style>