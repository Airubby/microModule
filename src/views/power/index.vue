<template>
    <div class="content">
        <el-collapse v-model="activeName" accordion class="collapse collapse3">
            <el-collapse-item title="MDC配电拓扑" name="1">
                <inverter v-if="activeName=='1'"></inverter>
            </el-collapse-item>
            <el-collapse-item title="末端配电实时数据" name="2">
                <realdata v-if="activeName=='2'"></realdata>
            </el-collapse-item>
            <el-collapse-item title="逆变器拓扑图" name="3">
               <topology v-if="activeName=='3'"></topology>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import inverter from './inverter.vue'
import realdata from './realdata.vue'
import topology from './topology.vue'
export default {
  name: 'home',
    created () {
        
    },
    mounted() {
        
    },
    data(){
        return{
            activeName: '1'
        }
    },
  methods: {
    
  },
  components: {
    inverter,realdata,topology
  }
}
</script>
