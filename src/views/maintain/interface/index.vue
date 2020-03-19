<template>
  <div class="content">
        <el-scrollbar class="scrollbar">
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("SNMPset")}}</div>
                    <div><span class="border-right">{{$t("IsEnabled")}}</span>161,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('snmpInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("BIset")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>192.168.1.4,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('biInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("MQTTset")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>192.168.1.4,16</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('mqttInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("AOIset")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>通道2</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('aoiInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("SMIset")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>COM2</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('smiInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("EmailSet")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>slfdslf</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('emailInfo')"></span>
                </div>
            </div>
            <div class="list-box">
                <div class="box-left">
                    <div class="color mb5 font-size16">{{$t("PhoneSet")}}</div>
                    <div><span class="border-right">{{$t("NotEnabled")}}</span>slfdslf</div>
                </div>
                <div class="box-right">
                    <span class="el-icon-edit-outline" @click="ConfigSet('phoneInfo')"></span>
                </div>
            </div>
        </el-scrollbar>
        <snmp v-if="setInfo.snmpInfo.visible" :dialogInfo="setInfo.snmpInfo"></snmp>
        <aoi v-if="setInfo.aoiInfo.visible" :dialogInfo="setInfo.aoiInfo"></aoi>
  </div>
</template>

<script>
import snmp from './component/snmp.vue'
import aoi from './component/aoi.vue'
export default {
    components: {snmp,aoi},
    created () {
        
    },
    
    mounted() {
        
    },
    data(){
        return{
            setInfo:{
                snmpInfo:{
                    visible:false,
                },
                biInfo:{
                    visible:false,
                },
                mqttInfo:{
                    visible:false,
                },
                aoiInfo:{
                    visible:false,
                },
                smiInfo:{
                    visible:false,
                },
                emailInfo:{
                    visible:false,
                },
                phoneInfo:{
                    visible:false,
                }
            }
            
        }
    },
    methods: {
        ConfigSet:function(type){
            this.setInfo[type].visible=true;
        },

    },
    
}
</script>
<style lang="less" scoped>
    
</style>