<template>
  <div class="content">
    <div id="swiper-container" class="swiper-container">
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper" id="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in arr">
                <component :is="item.component" :data="item"></component>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import DevManageComponent from './dev'
import InterfaceManageComponent from './interface'
import GangedManageComponent from './ganged'
import UserManageComponent from './user'
import LogManageComponent from './log'
import SysManageComponent from './sys'
import swiper from '@/views/public/mixin/swiper'
export default {
    mixins:[swiper],
    components: {DevManageComponent,InterfaceManageComponent,GangedManageComponent,UserManageComponent,LogManageComponent,SysManageComponent},
    created () {
        let arr=[
            {key:"DevManage",component:"DevManageComponent"},
            {key:"InterfaceManage",component:"InterfaceManageComponent"},
            {key:"GangedManage",component:"GangedManageComponent"},
            {key:"UserManage",component:"UserManageComponent"},
            {key:"LogManage",component:"LogManageComponent"},
            {key:"SysManage",component:"SysManageComponent"},
        ]
        this.arr=arr;
    },
    
    mounted() {
        
    },
    data(){
        return{
            
        }
    },
    methods: {
        
    },
    
}
</script>
