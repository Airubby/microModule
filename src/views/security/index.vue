<template>
  <div class="content">
   <el-collapse v-model="activeName" accordion class="collapse collapse2">
        <el-collapse-item title="安防消防系统状态" name="1">
            <state v-if="activeName=='1'"></state>
        </el-collapse-item>
        <el-collapse-item title="信息列表" name="2">
            <info v-if="activeName=='2'"></info>
        </el-collapse-item>
    </el-collapse> 
  </div>
</template>

<script>
import state from './state.vue'
import info from './info.vue'
export default {
 
    data(){
        return{
            activeName: '1'
        }
    },
    methods: {
        
    },
    components: {
        state,info
    }
}
</script>
