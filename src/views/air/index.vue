<template>
  <div class="content">
    <public-component :data="arr"></public-component>
  </div>
</template>

<script>
import index from '@/views/public/mixin/index'
export default {
    mixins:[index],
    created () {
        let arr=[
            {key:"HumitureChart",component:"HumitureComponent"},
            {
              key:"ForTheReturnChart",component:"EchartBarComponent",
              title:"温度(℃)",
              dev:[
                {
					"name":"空调1",
					point:[
						{"devid":"01",pointid:"0101",name:"供水温度(℃)"},{"devid":"01",pointid:"0102",name:"回水温度(℃)"}
					]
                },
                {
					"name":"空调2",
					point:[
						{"devid":"02",pointid:"0201",name:"供水温度(℃)"},{"devid":"02",pointid:"0202",name:"回水温度(℃)"}
					]
				},
              ]
            },
            {key:"FanAndWaterChart",component:"FanAndWaterComponent"},
            {key:"AirRealData",component:"AirRealDataComponent"},
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
    components: {
       
    }
}
</script>
