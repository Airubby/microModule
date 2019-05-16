<template>
  <div class="content">
    <el-collapse v-model="activeName" accordion class="collapse collapse2" id="collapse">
        <el-collapse-item title="环境图示" name="1" >
            <graphic v-if="activeName=='1'&&height!=0" :style="'height:'+height+'px'"></graphic>
        </el-collapse-item>
        <el-collapse-item title="环境实时数据" name="2">
            <realdata v-if="activeName=='2'&&height!=0"></realdata>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import graphic from './graphic.vue'
import realdata from './realdata.vue'
export default {
    mounted() {
        this.height=this.$el.querySelector("#collapse").offsetHeight-48*2-20;
    },
    data(){
        return{
            activeName: '1',
            backName: '1',
            height: 0,
        }
    },
    methods: {
        
    },
    components: {
        realdata,graphic
    }
}
</script>
