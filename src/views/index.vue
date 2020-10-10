<template>
  <div class="content content-flex">
    <div class="content-left">
        <ul>
            <el-scrollbar class="scrollbar">
                <template v-for="item in config">
                    <li @click="enterPage(item)">
                        <router-link :to="{name:item.key}">
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
                <li>
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
            <div id="index-container" class="index-container" style="overflow:hidden">
                <div class="swiper-wrapper">
                    <template v-for="item in alarmList">
                    <div class="swiper-slide">
                        {{item.content}}
                    </div>
                    </template>
                </div>
            </div>
            <div class="index-right-top-list">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        {{getLanguage}}<i class="el-icon-arrow-down el-icon--right"></i>
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
            </div>
            <div class="index-right-top-list" @click="flushPage">
                <i class="el-icon-refresh"></i>刷新
            </div>
            <div class="index-right-top-list">
                <i class="el-icon-s-opportunity"></i>声光
            </div>
            <div class="index-right-top-list">
                <router-link :to="{name:'Alarm'}">
                    <el-badge :value="200" :max="99" class="item">
                        <i class="el-icon-bell"></i>告警
                    </el-badge>
                </router-link>
            </div>
            <div class="index-right-top-list" @click="setSys">
                <i class="el-icon-user"></i>登陆
            </div>
            <div>
                <p style="font-size:26px;">{{date.hours}}:{{date.minutes}}:{{date.seconds}}</p>
                <p class="font-size12">{{date.year}}-{{date.month}}-{{date.day}}<span>{{date.week}}</span></p>
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
import getComponent from '@/views/mixins/getComponent'
export default {
    name: 'index',
    mixins:[getComponent],
    created () {
        this.date=this.setClock();
        
    },
    mounted() {
        setInterval(()=>{
            this.date=this.setClock();
        },1000);
        
  
        new this.$Swiper('#index-container', {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 30,
            loop : true,
            speed:3000,
            autoplay: true
        })
    },
    computed:{
        getLanguage:function(){
            let language=this.$store.state.language;
            if(language=="zh"){
                return "中文"
            }else{
                return "English"
            }
        },
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
            },
            alarmList:[
                {devid:"001",pointid:"01",content:"1,稳定hi速度告警，严重告警"},
                {devid:"001",pointid:"02",content:"2,稳定hi速度告警，严重告警"},
                {devid:"001",pointid:"03",content:"3,稳定hi速度告警，严重告警"},
                {devid:"001",pointid:"04",content:"4,稳定hi速度告警，严重告警"},
            ],
            vWeek: [this.$t("SUN"),this.$t("Mon"),this.$t("Tues"),this.$t("Wed"),this.$t("Thurs"),this.$t("Fir"),this.$t("Sat")]
        }
    },
    methods: {
        setLanguage:function(language){
            this.$i18n.locale = language
            this.$store.dispatch('setLanguage', language)
            this.vWeek=[this.$t("SUN"),this.$t("Mon"),this.$t("Tues"),this.$t("Wed"),this.$t("Thurs"),this.$t("Fir"),this.$t("Sat")];
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
            // vWeek = ["SUN","Mon","Tues","Wed","Thurs","Fir","Sat"];
            let date =  new Date();
            vDate["year"] = date.getFullYear();
            vDate["month"] =( date.getMonth() + 1)<10?("0"+ (date.getMonth() + 1)): date.getMonth() + 1;
            vDate["day"] = date.getDate()<10?("0"+date.getDate()):date.getDate();
            vDate["hours"] = date.getHours()<10?("0"+date.getHours()):date.getHours();
            vDate["minutes"] = date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
            vDate["seconds"] = date.getSeconds()<10?("0"+date.getSeconds()):date.getSeconds();
            vDate["week"] = this.vWeek[date.getDay()];
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
            display: flex;
            white-space: nowrap;
            align-items: center;
            background: #fff;
            width: 100%;
            height: 60px;
            padding: 0 15px;
            .content-right-top-logo{
                font-size: 26px;
                line-height: 60px;
                display: flex;
                align-items: center;
                max-width: 260px;
                min-width: 260px;
                margin-right: 20px;
                img{
                    max-width: 100%;
                    max-height: 60px;
                }
            }
            .index-right-top-list{
                font-size: 17px;
                margin: 0 12px;
                i{
                    font-size: 24px;
                    vertical-align: middle;
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
