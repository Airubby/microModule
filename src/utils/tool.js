import echarts from 'echarts'
import Vue from 'vue'

function Format(fmt,value){
  let date=value?new Date(value):new Date();
  let o = {
      "M+": date.getMonth() + 1, //月份 
      "d+": date.getDate(), //日 
      "h+": date.getHours(), //小时 
      "m+": date.getMinutes(), //分 
      "s+": date.getSeconds(), //秒 
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
      "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
//全屏切换
let isFullScreen=false;//是否是全屏状态
function switcFullScreen(){
    if(isFullScreen){//是全屏就退出全屏
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }else{//不是就全屏
        var element=document.documentElement;
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    isFullScreen=!isFullScreen;
}
function arrayContains(v,arr){
  if(arr.indexOf(v)==-1){
    return false;
  }else{
    return true;
  }
}
function setClock(){
    let vWeek,vDate={};
    vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    let date =  new Date();
    vDate["year"] = date.getFullYear();
    vDate["month"] =( date.getMonth() + 1)<10?("0"+ (date.getMonth() + 1)): date.getMonth() + 1;
    vDate["day"] = date.getDate()<10?("0"+date.getDate()):date.getDate();
    vDate["hours"] = date.getHours()<10?("0"+date.getHours()):date.getHours();
    vDate["minutes"] = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
    vDate["seconds"] = date.getSeconds()<10?("0"+date.getSeconds()):date.getSeconds();
    vDate["week"] = vWeek[date.getDay()];
    return vDate;
    // document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;
    // setTimeout('setClock()',1000);
}
function echartfn(ID,title,xData,up,middle,down,color){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById(ID))
    // 绘制图表
    myChart.setOption({
        color:color,
        title:{
            text:title,  
            x:'left',
            top: 0,
            textStyle:{
                color:"#555",
                fontSize:14,
            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            } 
        },
        grid: {
            left: '75px',
            right: '25px',
            top:'45px',
            bottom: '50px',
        },
        legend: {
            top:'0px',
            right:'0',
            textStyle:{
                rich:{
                    a:{
                        color:color[0],
                        fontSize:16,
                    },
                    b:{
                        color:color[1],
                        fontSize:16,
                    }
                }
            },
            data: ["上","中"],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['冷通道','热通道'];
                var data=["上","中"];
                data.forEach(function(value,i){
                    if(value == name){
                        index = i;
                    }
                });
                if(index==0){
                    return '{a|'+clientlabels[index]+'}';
                }else{
                    return '{b|'+clientlabels[index]+'}';
                }
                
            },
        },
        xAxis:  {
            name:'机柜编码',
            nameLocation:'start',
            nameTextStyle:{
                color:'#555',
                fontSize: 14,
                padding:[60,-10,0,0]
            },
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:"#DBDBDA",
                    width:1,
                }
            },
            splitLine:{
                show:false,
            },
            axisTick:{
                show:true
            },
            axisLabel:{
                interval:0,  //强制显示所有标签
                backgroundColor:'#637880',
                color:'#fff',
                padding:2,
                // formatter:'上\r中\r下\n{value}',
                formatter:function(value){
                    var info='{text|上}{text|中}{text|下}\n{value|'+value+'}'
                    return info
                },
                rich:{
                    text:{
                        color:"#fff",
                        padding:[0,1,1,1],
                        height: 20,
                        lineHeight: 20
                    },
                    value:{
                        color:"#fff",
                        lineHeight: 20
                    },
                }
            },
            data: xData,
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:"#DBDBDA",
                    width:1,
                }
            },
            axisTick:{
                show:true
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:"#213342",
                    width:1,
                    type:"dashed",
                }
            },
            axisLabel:{
                color:"#000"
            },
            
        },
        series: [
            {
                name: '上',
                type: 'bar',
                barWidth: '20%',
                data: up
            },
            {
                name: '中',
                type: 'bar',
                barWidth: '20%',
                data: middle
            },
            {
                name: '下',
                type: 'bar',
                barWidth: '20%',
                data: down
            }
        ]
    });
    window.addEventListener("resize", () => { 
        setTimeout(function(){
            myChart.resize();
        },0)
    });
    return myChart;
}
function echartLine(ID,title,subtitle,legend,xData,yData){
    // 基于准备好的dom，初始化echarts实例
    // var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
    //  "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
    // var legend=[{
    //     name:"实时IT设备电能",
    //     icon:'rect'
    // },{
    //     name: "机房实时总电能",
    //     icon:'rect'
    // }];
    // var title="℃";
    // var subtitle="温度";
    // var yData=[
    //     {
    //         name:'实时IT设备电能',
    //         type:'line',
    //         smooth:"true", //平滑
    //         data:[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310]
    //     },
    //     {
    //         name:'机房实时总电能',
    //         type:'line',
    //         smooth:"true", //平滑
    //         data:[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18]
    //     },
    // ];
    let color=["#00B564","#FF9655","#51B1DC","#64E572","#FFCD4D"];
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:color,
         title: {
            text:"{text|"+title+"} {subtext|"+subtitle+"}",  
            top:10,
            left:15,
            textStyle:{
                rich:{
                    text:{
                        color:"#fff",
                        fontWeight:'normal',
                        fontSize:'14',
                        backgroundColor:'#00B564',
                        padding:[1,4,4,4],
                        verticalAlign:'bottom'
                    },
                    subtext:{
                        fontSize: 14,
                        color:"#333",
                    }
                }
                
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            top:'10px',
            right:'0',
            textStyle:{
                color:"#000"
            },
            data:legend
        },
        grid: {
            left: '15px',
            right: '40px',
            top:'55px',
            bottom: '5px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    lineStyle:{
                        color:"#D8DEDD",
                        width:1,
                    }
                },
                axisTick:{
                    show:false
                },     
                axisLabel:{
                    color:"#000",
                    formatter: function (value, index) {
                        return Format('yyyy-MM-dd',new Date(value));
                    }
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                data :xData
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:false,
                },
                axisLine:{
                    lineStyle:{
                        color:"#D8DEDD",
                        width:1,
                    }
                },
                 splitLine:{
                    show:false,
                    lineStyle:{
                        color:"#1c3042",
                        width:1,
                        type:"dashed",
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#000",
					formatter: '{value}'
                }
            }
        ],
        series : yData
    };
    myChart.setOption(option, true);
    window.addEventListener("resize", () => { 
        setTimeout(function(){
            myChart.resize();
        },0)
    });
    return myChart;
}
function clickLegend(ID,xData,legend,title,color,series){
    // var xData=['01','02','03','04','05','06','07'];
    // var legend=["温度","电压","内阻"];
    // var title=["℃","V","Ω"];
    // var color=["#FFB34C","#5DC49E","#378EE9"];
    // var series=[
    //         {
    //             name: "温度",
    //             type: 'bar',
    //             barWidth: '20%',
    //             data: [120, 132, 101, 134, 90, 230, 400]
    //         },
    //         {
    //             name: "电压",
    //             type: 'bar',
    //             barWidth: '20%',
    //             data: [220, 182, 191, 234, 290, 330, 400]
    //         },
    //         {
    //             name: "内阻",
    //             type: 'bar',
    //             barWidth: '20%',
    //             data: [220, 182, 191, 234, 290, 330, 400]
    //         }
    //     ];
    var show=legend[0];
    var titlebg=color[0];
    var showtitle=title[0];
    var selected={}
    var rich={};
    for(let i=0;i<legend.length;i++){
        if(i==0){
            selected[legend[i]]=true
        }else{
            selected[legend[i]]=false
        }
        rich["rich"+i]={color:color[i]};
    }
    rich["rich"+legend.length]={color:"#ccc"};
   
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:color,
        title:{
            text:showtitle,  
            left:10,
            top: 5,
            backgroundColor:titlebg,
            textStyle:{
                color:"#fff",
                fontSize:14,
            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            } 
        },
        grid: {
            left: '35px',
            right: '15px',
            top:'65px',
            bottom: '45px',
        },
        legend: {
            top:'5px',
            right:'10px',
            textStyle:{
                rich:rich
            },
            data: legend,
            formatter: function(name) {
                var index = 0;
                legend.forEach(function(value,i){
                    if(value == name){
                        index = i;
                    }
                });
                if(name==show){
                    return '{rich'+index+'|'+legend[index]+'}';
                }else{
                    return '{rich'+legend.length+'|'+legend[index]+'}';
                }
                
            },
            selected:selected
        },
        xAxis:  {
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:"#DBDBDA",
                    width:1,
                }
            },
            splitLine:{
                show:false,
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                interval:0,  //强制显示所有标签
                color:'#000',
            },
            data: xData,
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:"#DBDBDA",
                    width:1,
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false,
                lineStyle:{
                    color:"#213342",
                    width:1,
                    type:"dashed",
                }
            },
            axisLabel:{
                color:"#000"
            },
            
        },
        series: series
    };
    function legendselectchanged(param){
        console.log(param)
        let selected=param.selected;
        let stitle,bgcolor;
        for(let item in selected){
            if(item==param.name){
                selected[item]=true;
            }else{
                selected[item]=false;
            }
        }
        for(let i=0;i<legend.length;i++){
            if(legend[i]==param.name){
                stitle=title[i];
                bgcolor=color[i];
                break;
            }
        }
        show=param.name;
        myChart.setOption({
            title:{
                text:stitle,
                backgroundColor:bgcolor
            },
            legend:{
                selected:selected
            }
        });
    }
    
    myChart.setOption(option, true);
    myChart.on("legendselectchanged",legendselectchanged)
    window.addEventListener("resize", () => { 
        setTimeout(function(){
            myChart.resize();
        },0)
    });
    return myChart; 
}
function wsConnection(sendMsg, callback) {
  try {
      //var SOCKECT_ADDR = "ws://" + url +":"+ port;
      //let host=window.document.location.host;
      //let SOCKECT_ADDR="ws://"+host+"/ws"
      let SOCKECT_ADDR="ws://192.168.16.6:8088/ws"
      let ws = new WebSocket(SOCKECT_ADDR);
      Vue.prototype.$ws=ws;
      ws.onopen = function (event) {
          console.log(event)
          console.log("已经与服务器建立了连接\r\n当前连接状态：" + event);
          ws.send(sendMsg);
      };
    
      ws.onmessage = callback;
      ws.onclose = function (event) {
        console.log(event)
      };
      ws.onerror = function (event) {
        console.log("WebSocket异常！" + event.toString());
      };
      Vue.prototype.$ws=ws;

  } catch (ex) {
      console.log(ex);
  }
}
function checkPORT(obj) {
    console.log(obj);
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else if (Math.round(Number(obj.value)) !== Number(obj.value)) {
        obj.callback(new Error('必须为整数数字'))
    } else {
        if(Number(obj.value)>65535||Number(obj.value)<1){
            obj.callback("端口范围在1-65535之间")
        }else{
            obj.callback()
        }
    }
}
function checkIP(obj) {
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else {
      var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
        if(reg.test(obj.value)){
            obj.callback()
        }else{
            obj.callback("ip格式错误")
        }
    }
    
}
function checkEMAIL(obj) {
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else {
      var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if(reg.test(obj.value)){
            obj.callback()
        }else{
            obj.callback("邮箱格式错误")
        }
    }
    
}
function checkPHONE(obj) {
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else {
      var reg = /^1[345789]\d{9}$/
        if(reg.test(obj.value)){
            obj.callback()
        }else{
            obj.callback("手机格式错误")
        }
    }
    
}
function checkNumber(obj) {
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else {
        let regPos = /^\d+(\.\d+)?$/; //非负浮点数
        //let regPos = /^([1-9]+)$/;  //大于0的正整数
        // let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regPos.test(obj.value)){
            obj.callback()
        }else{
            obj.callback('请输入正数数值')
        }
    }
    
}
export default {
    arrayContains,
    switcFullScreen,
    Format,
    setClock,
    echartfn,
    echartLine,
    clickLegend,
    wsConnection,
    checkPORT,
    checkIP,
    checkEMAIL,
    checkPHONE,
    checkNumber
}