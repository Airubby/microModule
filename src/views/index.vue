<template>
  <div class="content content-flex">
    <div class="content-left">
      <ul>
        <li>
           <router-link to="/loncom/home">
            <img src="~@/assets/images/zjk.png">
            <p>主监控</p>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/power">
            <img src="~@/assets/images/pd.png">
            <p>配电</p>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/hvdc">
            <img src="~@/assets/images/hvdc.png">
            <p>HVDC</p>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/env">
            <img src="~@/assets/images/hj.png">
            <p>环境</p>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/air">
            <img src="~@/assets/images/kt.png">
            <p>空调</p>
           </router-link>
        </li>
        <li>
           <router-link to="/loncom/security">
            <img src="~@/assets/images/af.png">
            <p>安防与消防</p>
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
                <li @click="switcFullScreen">
                    <a href="javascript:;">全屏切换</a>
                </li>
                <li>
                    <router-link to="/loncom/alarm">
                        <el-badge :value="200" :max="99" class="item">
                            <i class="el-icon-message-solid"></i>告警
                        </el-badge>
                    </router-link>
                </li>
                <li>
                    <router-link to="/loncom/his">
                        <i class="el-icon-timer"></i>历史
                    </router-link>
                </li>
                <li>
                    <router-link to="/loncom/set">
                        <i class="el-icon-s-tools"></i>设置
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;">
                        <p style="font-size:22px;">{{date.hours}}:{{date.minutes}}:{{date.seconds}}</p>
                        <p>{{date.year}}/{{date.month}}/{{date.day}}</p>
                    </a>
                </li>
            </ul>
          </div>
      </div>
      <div class="content-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'index',
    provide(){
      return{
        changeTitle:this.changeTitle
      }
    },
    created () {
        this.date=this.$tool.setClock();
    },
    mounted() {
        let _this=this;
        setInterval(function(){
            _this.date=_this.$tool.setClock();
        },1000);
    },
    data(){
        return{
            title:'',
            date:{
                year:'',
                month:'',
                day:'',
                hours:'',
                minutes:'',
                seconds:''
            }
        }
    },
    methods: {
        switcFullScreen:function(){
            this.$tool.switcFullScreen();
        },
        changeTitle:function(title){
            this.$nextTick(() => {
                this.title=title;
                this.$el.querySelector(".content-logo-title").style.display="none";
                this.$el.querySelector(".his-detail-title").style.display="block";
            })
        },
        toBack:function(){
            this.$router.go(-1);
        },
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
    .his-detail-title{
        display:none;
        cursor: pointer;
    }
</style>
