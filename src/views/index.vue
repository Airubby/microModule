<template>
  <div class="content content-flex">
    <div class="content-left">
        <ul>
            <el-scrollbar class="scrollbar">
                <template v-for="item in config">
                    <li @click="flushPage">
                        <router-link :to="{name:item.component}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img :src="'/images/'+item.img"></div>
                                    <p>{{$t(item.language)}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </template>
                <!-- <li @click="flushPage">
                    <router-link :to="{name:'Power'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-distribution.png"></div>
                                    <p>{{$t("Power")}}</p>
                                </div>
                            </div>
                    </router-link>
                    </li>
                    <li @click="flushPage">
                    <router-link :to="{name:'Hvdc'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-hvdc.png"></div>
                                    <p>HVDC</p>
                                </div>
                            </div>
                    </router-link>
                    </li>
                    <li @click="flushPage">
                    <router-link :to="{name:'Air'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-refrigeration.png"></div>
                                    <p>{{$t("Air")}}</p>
                                </div>
                            </div>
                    </router-link>
                    </li>
                    <li @click="flushPage">
                    <router-link :to="{name:'Env'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-environment.png"></div>
                                    <p>环境</p>
                                </div>
                            </div>
                    </router-link>
                    </li>
                    <li @click="flushPage">
                    <router-link :to="{name:'Security'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-security.png"></div>
                                    <p>安防</p>
                                </div>
                            </div>
                    </router-link>
                    </li>
                    <li @click="flushPage">
                    <router-link :to="{name:'His'}">
                            <div class="nav-box">
                                <div class="nav-box-con">
                                    <div class="nav-box-con-img"><img src="/images/menu-history.png"></div>
                                    <p>历史</p>
                                </div>
                            </div>
                    </router-link>
                </li> -->
                <li @click="flushPage">
                    <router-link :to="{name:'Set'}">
                        <div class="nav-box">
                            <div class="nav-box-con">
                                <div class="nav-box-con-img"><img src="/images/menu-setup.png"></div>
                                <p>设置</p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li @click="flushPage">
                    <router-link :to="{name:'Maintain'}">
                        <div class="nav-box">
                            <div class="nav-box-con">
                                <div class="nav-box-con-img"><img src="/images/menu-maintain.png"></div>
                                <p>维护</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </el-scrollbar>
        </ul>
    </div>
    <div class="content-right">
      <div class="content-right-top">
          <div class="content-right-top-logo">
            <img src="/images/logo.png">
          </div>
          <div class="content-right-top-right">
            <ul>
                <!-- <li @click="switcFullScreen">
                    <a href="javascript:;">全屏切换</a>
                </li> -->
                <li>
                    <a href="javascript:;">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span @click="setLanguage('zh')">中文</span>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <span @click="setLanguage('en')">英文</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </a>
                </li>
                <li @click="flushPage">
                    <a href="javascript:;">
                        <i class="el-icon-refresh"></i>刷新
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="el-icon-s-opportunity"></i>声光
                    </a>
                </li>
                <li>
                    <router-link :to="{name:'Alarm'}">
                        <el-badge :value="200" :max="99" class="item">
                            <i class="el-icon-bell"></i>告警
                        </el-badge>
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;" @click="setSys">
                        <i class="el-icon-user"></i>登陆
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
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
export default {
    name: 'index',
    created () {
        this.date=this.setClock();
        let lang=Cookies.get('language')||'zh';
        console.log(lang)
        if(lang=='zh'){
            this.language="中文"
        }else{
            this.language="English"
        }
    },
    mounted() {
        setInterval(()=>{
            this.date=this.setClock();
        },1000);
    },
    computed:{
        ...mapGetters([
            'config'
        ]),
    },
    data(){
        return{
            title:'',
            isRouterAlive:true,
            language:"中文",
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
        setLanguage:function(language){
            if(language=="zh"){
                this.language="中文"
            }else{
                this.language="English"
            }
            this.$i18n.locale = language
            this.$store.dispatch('setLanguage', language)
            this.flushPage();
        },
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
        toBack:function(){
            this.$router.go(-1);
        },
        setSys:function(){
            this.checkInfo.visible=true;
        },
        outSys:function(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
        }
    },
    components: {
        checkPassword
    }
}
</script>
<style lang="less" scoped>
    .content-left,
    .content-left ul {
        width: 100px;
        height: 100%;
        background: #354052;
        li {
            width: 100%;
            height: calc(100% / 9);
            .nav-box{
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                .nav-box-con{
                    vertical-align: middle;
                    text-align: center;
                    font-size: 14px;
                    width: calc(100% - 6px);
                    border-left: 6px solid #354052;
                    .nav-box-con-img{
                        width: 30px;
                        height: 30px;
                        overflow: hidden;
                        margin: 0 auto 2px auto;
                    }
                    img{
                        height: 30px;
                    }
                    p{
                        color: #A0ACBF;
                    }
                }
            }
            a.router-link-active{
                .nav-box-con-img img{
                    margin-left: -30px;
                }
                .nav-box .nav-box-con{
                    border-color: #3CB2FF;
                    p{
                        color: #3CB2FF;
                    }
                } 
            }
        }
        li:nth-last-of-type(1){
            border: none;
        }
    }
    .content-right {
        width: calc(100% - 100px);
        height: 100%;
        .content-right-top{
            width: 100%;
            height: 60px;
            display: flex;
            background: #fff;
            padding-left: 20px;
            justify-content: space-between;
            .content-right-top-logo{
                font-size: 26px;
                line-height: 60px;
                display: flex;
                align-items: center;
                img{
                    max-height: 60px;
                }
            }
            .content-right-top-right{
                ul{
                    height: 100%;
                    li{
                        height: 100%;
                        float: left;
                        display: table;
                        padding: 0 15px;
                        font-size: 17px;
                        a{
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                            border-bottom: 2px solid #fff;
                            img{
                                height: 30px;
                            }
                            i{
                                font-size: 24px;
                                vertical-align: middle;
                            }
                        }
                        .router-link-active{
                            color: #3CB2FF;
                            border-color: #3CB2FF;
                        }
                    }
                }
            }
        }
        .content-body{
            width: 100%;
            height: calc(100% - 60px);
            padding: 10px;
        }
    }
    .el-dropdown-link{
        font-size: 17px;
        i{
            font-size: 20px !important;
        }
    }
</style>
