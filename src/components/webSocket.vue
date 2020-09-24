<template>
    <span></span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'webSocket',
    created () {
        
    },
    mounted() {
        if(this.sendInfo){
            this.sInfo.cmd=this.sendInfo.cmd;
            //{cmd:"subalarm",returnFn:true,changeSend:true}
            if(!this.sendInfo.changeSend){
                this.sInfo.data=this.wsInfo;
                this.send();
                // this.handleInfo(this.wsInfo)
            }
        }

    },
    computed:{
        ...mapGetters([
            'getWSData'
        ]),
    },
    data() {
        return {
            sendFlag:true,
            sInfo:{
                cmd:"",
                data:[],
            }
       }
    },
    methods:{
       send:function(){
            if(this.$ws&&this.$ws.readyState==1){
                // this.$ws.send("<json>"+JSON.stringify(this.sInfo)+"</json>")
                this.$ws.send(JSON.stringify(this.sInfo))
            }else{
                setTimeout(()=>{
                    if(this.sendFlag){
                        this.send();
                    }
                },1000)
            }
        },
        handleInfo:function(val){
            let arr=[];
            //只支持带devid或者带有pointid的数组
            if(val instanceof Array){
                if(this.sendInfo.cmd=="subdata"||this.sendInfo.cmd=="subbase"){
                    if(val.length>0){
                        for(let i=0;i<val.length;i++){
                            if(val[i].devid){
                                let key=val[i].key?val[i].key:val[i].devid+"_"+val[i].pointid;
                                let pointid=val[i].pointid?val[i].pointid:"";
                                arr.push(val[i].devid+";"+pointid+";"+key);
                            }
                            // if(val[i].devid){
                            //     arr.push({devid:val[i].devid,pointid:val[i].pointid?val[i].pointid:""});
                            // }
                        }
                    }
                }
            }else{
                //只支持对象
            }
            this.sInfo.data=arr;
            this.send();
        },
    },
    destroyed() {
        this.sendFlag=false;
    },
    watch:{
        wsInfo:function(val){
            if(this.sendInfo.changeSend){  //channgeSend 为true  变化了 重新发送
                this.handleInfo(val);
            }
        },
        getWSData: function(val) { 
        //    debugger
            if(val.cmd=="subdata"&&this.sendInfo.cmd=="subdata"){
                this.$emit("backInfo",val.data);
            }else if(val.cmd=="subalarm"&&this.sendInfo.cmd=="subalarm"){
                this.$emit("backInfo",val.data);
            }else if(val.cmd=="subbase"&&this.sendInfo.cmd=="subbase"){
                this.$emit("backInfo",val.data);
            }
            // if(val.cmd=="subdata"&&this.sendInfo.cmd=="subdata"){  //实时数据
            //     if(val.data&&val.data.length>0){
            //         if(this.sendInfo.returnFn){
            //             this.$emit("backInfo",val.data);
            //         }else{
            //             for(let i=0;i<val.data.length;i++){
            //                 for(let j=0;j<this.wsInfo.length;j++){
            //                     //matchInfo=['value:commstate','isalarm:alarmstate']
            //                     if(this.matchInfo){
            //                         if(val.data[i].devid==this.wsInfo[j].devid&&(this.wsInfo[j].pointid?(val.data[i].pointid==this.wsInfo[j].pointid):true)){
            //                             for(let n=0;n<this.matchInfo.length;n++){
            //                                 let item=this.matchInfo[n].split(":");
            //                                 this.wsInfo[j][item[1]]=val.data[i][item[0]];
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }else if(val.cmd=="subcount"&&this.sendInfo.cmd=="subcount"){  //实时获取设备统计数
            //     if(val.data.length>0){
            //         for(let i=0;i<val.data.length;i++){
            //             if(this.matchInfo){
            //                 for(let j=0;j<this.matchInfo.length;j++){
            //                     //matchInfo=['dev_count:devcount','dev_alarmcount:alarmdevcount','dev_comsatecount:commstatecount']
            //                     let item=this.matchInfo[j].split(":");
            //                     let a=item[0].split("_");
            //                     if(a[0]==val.data[i].type&&a[1]==val.data[i].data){
            //                         this.wsInfo[item[1]]=val.data[i].value;
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }else if((val.cmd=="subalarm"&&this.sendInfo.cmd=="subalarm")||(val.cmd=="alarmcount"&&this.sendInfo.cmd=="alarmcount")){ //实时告警
            //     this.$emit("backInfo",val.data);
            // }else if(val.cmd=="subcomputer"&&this.sendInfo.cmd=="subcomputer"){ //服务器使用情况
            //     for(let item in val.data){
            //         this.wsInfo[item]=val.data[item];
            //     }
            // }
        },
    },
    //wsInfo:绑定的数据源，数组或对象；matchInfo:字段匹配；sendInfo:发送数据配置{cmd:"subalarm",returnFn:true,changeSend:true}
    // returnFn为true 返回父组件函数处理，推送的数据可能不在数据源中展示，在其他地方展示的时候，changeSend为true，数据源改变重新下发数据
    props:["wsInfo","sendInfo","matchInfo"],
    components:{}
}
</script>
