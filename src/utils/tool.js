import echarts from 'echarts'
import Vue from 'vue'
import CryptoJS from 'crypto-js/crypto-js'

// 默认的 KEY 与 iv 如果没有给
const KEY = "loncom";//""中与后台一样  密码
const keySize=128;
const fillKey = (key) => { 
    const filledKey = Buffer.alloc(keySize / 8); 
    const keys = Buffer.from(key); 
    if (keys.length < filledKey.length) { 
        filledKey.map((b, i) => filledKey[i] = keys[i]); 
    }
    return filledKey; 
}
/**
 * AES加密 ：字符串 key iv  返回base64
 */
function Encrypt(word, keyStr) {
    let key = keyStr ? CryptoJS.enc.Utf8.parse(fillKey(keyStr)):CryptoJS.enc.Utf8.parse(fillKey(KEY));
    let srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,  //mode 为ECB  不需要iv
        padding: CryptoJS.pad.Pkcs7
    });
    // console.log("-=-=-=-", encrypted.ciphertext)
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
function Decrypt(word, keyStr, ivStr) {
    let key = keyStr ? CryptoJS.enc.Utf8.parse(fillKey(keyStr)):CryptoJS.enc.Utf8.parse(fillKey(KEY));
    let base64 = CryptoJS.enc.Base64.parse(word);
    let src = CryptoJS.enc.Base64.stringify(base64);
    var decrypt = CryptoJS.AES.decrypt(src, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

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
function echartAir(ID,title,legend,xData,yData,color){
    // var legend=["上","中","下"];
    // var xData=["1","2","3","4","5"];
    // var yData=[
    //     {
    //         name: '上',
    //         type: 'bar',
    //         barWidth: '20%',
    //         data: [29,23,4,5,6]
    //     },
    //     {
    //         name: '中',
    //         type: 'bar',
    //         barWidth: '20%',
    //         data: [29,23,4,5,6]
    //     },
    //     {
    //         name: '下',
    //         type: 'bar',
    //         barWidth: '20%',
    //         data: [29,23,4,5,6]
    //     }
    // ];
    // var color=["#5984CD","#EF5959","#7BC0A1","#EAB03F"];
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
            top:'35px',
            bottom: '25px',
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
            data: legend,
        },
        xAxis:  {
            name:'空调编号',
            nameLocation:'start',
            nameTextStyle:{
                color:'#555',
                fontSize: 14,
                padding:[30,-10,0,0]
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
        series: yData
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
function echartPUE(ID,xData,yData){
    var xData=["2018-10-11 09:00:11", "2018-10-11 09:03", "2018-10-11 09:13", "2018-10-11 09:14",
     "2018-10-11 09:24","2018-10-11 09:34","2018-10-11 09:44","2018-10-11 09:54","2018-10-11 10:04","2018-10-11 10:14","2018-10-11 10:24"];
    
    var yData=[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310];
    let color=["#fff"];
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:color,
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '15px',
            right: '20px',
            top:'20px',
            bottom: '10px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:"#f00",
                        width:1,
                    }
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color:"#fff",
                        width:1,
                        type:"solid",
                    }
                },
                axisTick:{
                    show:false
                },     
                axisLabel:{
                    color:"#fff",
                    formatter: function (value, index) {
                        return Format('hh:dd',new Date(value));
                    }
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                data :xData
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:"#fff",
                        width:1,
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#fff",
                        width:1,
                        type:"solid",
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#fff",
					formatter: '{value}'
                }
            }
        ],
        series : [
            {
                name:'pue',
                type:'line',
                smooth:"true", //平滑
                data:yData
            },
        ]
    };
    myChart.setOption(option, true);
    window.addEventListener("resize", () => { 
        setTimeout(function(){
            myChart.resize();
        },0)
    });
    return myChart;
}
function pieChar(ID,data){
    var data=[
        {value:335, name:'IT能耗'},
        {value:910, name:'其它能耗'},
    ];
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:["#95E3D3","#8DFF18","#0077E9","#7B2DD8"],
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        series: [
            {
                type:'pie',
                center:['60%','50%'],
                radius: ['50%', '80%'],
                label: {
                    normal: {
                        formatter: ' {b|{b} }{per|{d}%} ',
                        rich: {
                            b: {
                                fontSize: 12,
                                lineHeight: 33,
                                color: "#fff"
                            },
                            per: {
                                color: '#fff',
                                fontSize: 14,
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                itemStyle:{
                    borderColor:"#fff",  
                    borderWidth: 1,
                },
                data:data
            }
        ]
    };
    myChart.setOption(option, true);
    window.addEventListener("resize", () => { 
        setTimeout(function(){
            myChart.resize();
        },0)
    });
    return myChart; 
}
function gaugeChar(ID,value,min,max,title,color){
    var value=30,min=0,max=60,title="PUE";
    var color=[[0.333333, '#4A86B1'],[0.5,"#4A86B1"],[1, '#4A86B1']];
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        tooltip : {
            formatter: "{a}<br/>{c}"
        },
        series: [
            {
                name: title,
                silent:true,
                type: 'gauge',
                radius: '130%',
                min:min,
                max:max,
                startAngle:180,
                endAngle:0,
                splitNumber:6,
                center: ['50%', '80%'],
                axisLine:{
                    length:'10',
                    lineStyle:{
                        color:color,
                        width:'25',
                    }
                },
                splitLine:{
                    show:true,
                    length:'25',
                    lineStyle:{
                        color:"#B3D6EF"
                    }
                },
                pointer:{
                    length:'70%',
                    width:'10%'
                },
                itemStyle:{
                    color: "#B3D6EF",
                },
                axisLabel:{
                    color:"#B3D6EF"
                },
                detail: {
                    show: true,
                    lineHeight: 15,
                    offsetCenter: ['0%', '0%'],
                    formatter:'{num|'+value+'}\n{text|℃}',
                    rich: {
                        num: {
                            width:60,
                            height:60,
                            fontSize:18,
                            borderWidth:2,
                            borderColor:"#B3D6EF",
                            borderRadius:[60,60,60,60],
                            backgroundColor:"#61A5D5",
                            color:"#fff",
                        },
                        text: {
                            color: '#fff',
                            fontSize: 12,
                            padding: [10, 0],
                            borderRadius: 2
                        }
                    },

                },
                data: [{value: value}]
            }
        ]
    };
    myChart.setOption(option, true);
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
        // let regPos = /^\d+(\.\d+)?$/; //非负浮点数
        let regPos = /^([1-9]+)$/;  //大于0的正整数
        // let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regPos.test(obj.value)){
            obj.callback()
        }else{
            obj.callback('请输入正数数值')
        }
    }
    
}
function checkPasspord(obj) {
    if (!obj.value) {
        if(obj.rules.required){
            obj.callback(new Error('不能为空'))
        }else{
            obj.callback()
        }
    } else {
        let regPos = /^[A-Za-z0-9]{6,20}$/; 
        if(regPos.test(obj.value)){
            obj.callback()
        }else{
            obj.callback('密码6到20位且只能为数字和字母')
        }
    } 
}
export default {
    arrayContains,
    switcFullScreen,
    Format,
    echartfn,
    echartAir,
    echartLine,
    echartPUE,
    pieChar,
    gaugeChar,
    clickLegend,
    wsConnection,
    checkPORT,
    checkIP,
    checkEMAIL,
    checkPHONE,
    checkNumber,
    checkPasspord
}