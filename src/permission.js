import {router,asyncRouter} from '@/router/index'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式

routerGo();
async function routerGo(){
    router.beforeEach((to, from, next) => {
        // NProgress.start()
        const whiteList = ['/401','/404'] // 不重定向白名单
        if (to.path!=="/"&&whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            //默认没权限
            let toflag=false;
            if(to.path.indexOf("/loncom")!==-1){
                let index=-1;
                for(let i=0;i<asyncRouter.length;i++){
                    if(asyncRouter[i].path===to.path){
                        index=i;
                    }
                }
                if(index===-1){  //是其它配置的导航页面
                    toflag=true;
                }else{  //是预先设置的告警、设置、维护页面
                    //这里根据实际情况判断登录的账号有其中的哪里页面的权限；然后和to.path匹配后设置toflag=true;
                    toflag=true;
                }
            }
            if(toflag){
                next()
            }else{
                next("/404");
            }
        }
    })
    
    router.afterEach((to,from) => {
        let title=to.meta.title?`${to.meta.title}`:'一体化机柜';
        window.document.title = title;
        // NProgress.done() // 结束Progress
    })
}

