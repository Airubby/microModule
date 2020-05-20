<template>
    <div class="content" id="three-dom">
    </div>
</template>
<script>
import axios from 'axios';
import ThreeMap from './TestThreeMap.js';

export default {
    created () {
        
    },
    mounted() {
        


        let props={dom:"three-dom"}
        // axios.get('/three/testscene.json').then(data => {
        //     let result=data.data;
        //     this.map = new ThreeMap(props,result);
        // })

        this.map = new ThreeMap(props,"/three/rscene.json");
        
    },
    data() {
        return {
            
       }
   },
    methods:{
        

    },
    components:{}
}
</script>

<style scoped lang="less">
   
</style>