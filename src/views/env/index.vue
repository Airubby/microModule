<template>
  <div class="content">
    <el-collapse v-model="activeName" accordion class="collapse collapse2">
        <el-collapse-item title="环境图示" name="1">
            <graphic v-if="activeName=='1'"></graphic>
        </el-collapse-item>
        <el-collapse-item title="环境实时数据" name="2">
            <realdata v-if="activeName=='2'"></realdata>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import graphic from './graphic.vue'
import realdata from './realdata.vue'
export default {
    
    data(){
        return{
            activeName: '1'
        }
    },
    methods: {
        
    },
    components: {
        realdata,graphic
    }
}
</script>
