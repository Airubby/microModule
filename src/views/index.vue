<template>
  <div class="content content-flex">
    <div class="content-left">
      <ul>
        <li>
           <router-link to="/loncom/home">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/zjk.png">
                        <p>主监控</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/power">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/pd.png">
                        <p>配电</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/hvdc">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/hvdc.png">
                        <p>HVDC</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/air">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/kt.png">
                        <p>制冷</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/env">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/hj.png">
                        <p>环境</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/security">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/af.png">
                        <p>安防</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/his" @click="flushPage">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/af.png">
                        <p>历史</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/set">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/af.png">
                        <p>设置</p>
                    </div>
                </div>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/maintain">
                <div class="nav-box">
                    <div class="nav-box-con">
                        <img src="~@/assets/images/af.png">
                        <p>维护</p>
                    </div>
                </div>
           </router-link>
        </li>
      </ul>
    </div>
    <div class="content-right">
      <div class="content-right-top">
          <div class="content-right-top-logo">
            <span class="content-logo-title">M108-MDC-F</span>
            <span class="his-detail-title" @click="toBack">
                <img src="~@/assets/images/back.png">
                {{title}}
            </span>
          </div>
          <div class="content-right-top-right">
            <ul>
                <!-- <li @click="switcFullScreen">
                    <a href="javascript:;">全屏切换</a>
                </li> -->
                <li @click="flushPage">
                    <a href="javascript:;">刷新</a>
                </li>
                <li>
                    <router-link to="/loncom/his">
                        <i class="el-icon-timer"></i>声光
                    </router-link>
                </li>
                <li>
                    <router-link to="/loncom/alarm">
                        <el-badge :value="200" :max="99" class="item">
                            <i class="el-icon-message-solid"></i>告警
                        </el-badge>
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;" @click="setSys">
                        <i class="el-icon-s-tools"></i>登陆
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <p style="font-size:26px;">{{date.hours}}:{{date.minutes}}:{{date.seconds}}</p>
                        <p class="font-size12">{{date.year}}-{{date.month}}-{{date.day}}<span>{{date.week}}</span></p>
                    </a>
                </li>
            </ul>
          </div>
      </div>
      <div class="content-body">
        <router-view  v-if="isRouterAlive"/>
      </div>
    </div>
    <check-password :dialogInfo="checkInfo" v-if="checkInfo.visible"></check-password>
  </div>
</template>

<script>
import checkPassword from './set/component/dialogCheck.vue'
export default {
    name: 'index',
    provide(){
      return{
        changeTitle:this.changeTitle
      }
    },
    created () {
        this.date=this.setClock();
    },
    mounted() {
        setInterval(()=>{
            this.date=this.setClock();
        },1000);
    },
    data(){
        return{
            title:'',
            isRouterAlive:true,
            date:{
                year:'',
                month:'',
                day:'',
                hours:'',
                minutes:'',
                seconds:''
            },
            checkInfo:{
                visible: false,
            }
        }
    },
    methods: {
        flushPage:function(){
            this.isRouterAlive=false;
            this.$nextTick(function(){
                this.isRouterAlive=true;
            })
        },
        setClock:function(){
            let vWeek,vDate={};
            // vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
            vWeek = ["SUN","Mon","Tues","Wed","Thurs","Fir","Sat"];
            let date =  new Date();
            vDate["year"] = date.getFullYear();
            vDate["month"] =( date.getMonth() + 1)<10?("0"+ (date.getMonth() + 1)): date.getMonth() + 1;
            vDate["day"] = date.getDate()<10?("0"+date.getDate()):date.getDate();
            vDate["hours"] = date.getHours()<10?("0"+date.getHours()):date.getHours();
            vDate["minutes"] = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
            vDate["seconds"] = date.getSeconds()<10?("0"+date.getSeconds()):date.getSeconds();
            vDate["week"] = this.$t(vWeek[date.getDay()]);
            return vDate;
        },
        switcFullScreen:function(){
            this.$tool.switcFullScreen();
        },
        changeTitle:function(title){
            this.$nextTick(() => {
                if(title){
                    this.title=title;
                    this.$el.querySelector(".content-logo-title").style.display="none";
                    this.$el.querySelector(".his-detail-title").style.display="block";
                }else{
                    this.$el.querySelector(".content-logo-title").style.display="block";
                    this.$el.querySelector(".his-detail-title").style.display="none";
                }
            })
        },
        toBack:function(){
            this.$router.go(-1);
        },
        setSys:function(){
            this.checkInfo.visible=true;
        },
    },
    components: {
        checkPassword
    }
}
</script>
<style lang="less" scoped>
    .his-detail-title{
        display:none;
        cursor: pointer;
    }
</style>
