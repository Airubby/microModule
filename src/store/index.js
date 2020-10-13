import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {router,resetRouter,asyncRouter } from '@/router/index'
Vue.use(Vuex)
/**
 * 递归过滤异步路由表，生成router数据结构
 * @param asyncRouterMap
 * @param data
 */
const rootPath="/loncom";
function filterAsyncRouter(data) {
    data.map((item)=>{
		let addr=item.component;
		item.component = () => import(`@/views/public/pageIndex.vue`);
		item.name= item.component;
		item.path=rootPath+`/${addr}`;
        if(item.children&&item.children.length>0){
            item["redirect"]=rootPath+`/${addr}/`+item.children[0].component;
            item.children=filterAsyncRouter(item.children);
        }
    })
    return data;
}
const store = new Vuex.Store({
	state: {
		wsData:{},
		AjaxUrl:Cookies.get('AjaxUrl')||'',
		language: Cookies.get('language') || 'zh',
		token:"",
		activeIndex:Cookies.get('activeIndex') || 0,
		config:[], //所有导航
		currentConfig:{},  //当前导航
		currentComponent:"",  //当前组件
	},
	getters : {
		language: state => state.language,
		getWSData: state => state.wsData,
		AjaxUrl: state => state.AjaxUrl,
		token: state=>state.token,
		config: state=>state.config,
		currentConfig:state=>state.currentConfig,
		currentComponent:state=>state.currentComponent,
	},
	mutations: {
		SET_WSDATA(state,wsData){
			state.wsData=wsData;
		},
		SET_AJAXURL(state,ajaxUrl){
			state.AjaxUrl=ajaxUrl;
			Cookies.set('AjaxUrl', ajaxUrl)
		},
		// 中英文
		SET_LANGUAGE(state, language){
			state.language = language
			Cookies.set('language', language)
		},
		SET_TOKEN(state, token){
			state.token = token
			Cookies.set('TOKEN', token)
		},
		SET_CONFIG(state, config){
			resetRouter(); //重置初始路由
			state.config = config
			let data=config;
			let redirect=data.length>0?`${rootPath}/`+data[0].key:`${rootPath}/401`;
			let newRouter={
				path: rootPath,
				name:'loncom',
				component: () => import('@/views/index.vue'),
				redirect:redirect,
				children:[]
			}
			if(data.length>0){
				let arr=[];
				for(let i=0;i<data.length;i++){
					let children=[];
					if(data[i].children&&data[i].children.length>0){
						for(let j=0;j<data[i].children.length;j++){
							children.push({
								path: `${rootPath}/`+data[i].key+"/"+data[i].children[j].key,
								name: data[i].children[j].key,
								meta:{componentName:data[i].children[j].component},
								component: () => import('@/views/public/pageIndex.vue'),
							})
							if(data[i].children[j].relation&&data[i].children[j].relation.length>0){
								for(let m=0;m<data[i].children[j].relation.length;m++){
									children.push({
										path: `${rootPath}/`+data[i].key+"/"+data[i].children[j].key+"/"+data[i].children[j].relation[m].key,
										name: data[i].children[j].relation[m].key,
										meta:{componentName:data[i].children[j].relation[m].component},
										component: () => import('@/views/public/pageIndex.vue'),
									})
								}
							}
						}
					}
					if(children.length>0){
						arr.push({
							path: `${rootPath}/`+data[i].key,
							name: data[i].key,
							meta:{componentName:data[i].component},
							component: () => import('@/views/public/pageMoreIndex.vue'),
							redirect:children[0].path,
							children:children
						});
					}else{
						arr.push({
							path: `${rootPath}/`+data[i].key,
							name: data[i].key,
							meta:{componentName:data[i].component},
							component: () => import('@/views/public/pageIndex.vue'),
						});
						if(data[i].relation&&data[i].relation.length>0){
							for(let m=0;m<data[i].relation.length;m++){
								children.push({
									path: `${rootPath}/`+data[i].key+"/"+data[i].relation[m].key,
									name: data[i].relation[m].key,
									meta:{componentName:data[i].relation[m].component},
									component: () => import('@/views/public/pageIndex.vue'),
								})
							}
						}
					}
					
				}
				newRouter.children=arr.concat(asyncRouter);
				// let theAsyncRouter = filterAsyncRouter(data);
				// if(theAsyncRouter){
				// 	newRouter.redirect=rootPath+theAsyncRouter[0].component;
				// 	newRouter.children=theAsyncRouter;
				// }
			}
			router.addRoutes([newRouter]);
		},
		SET_CURRENTCONFIG(state,currentConfig){
			state.currentConfig=currentConfig
		},
		SET_CURRENTCOMPONENT(state,currentComponent){
			state.currentComponent=currentComponent
		},
	},
	actions: {
		setwsData({commit},wsData){
			commit('SET_WSDATA',wsData)
		},
		setAjaxUrl({commit},ajaxUrl){
			commit('SET_AJAXURL',ajaxUrl)
		},
		// 中英文
		setLanguage({ commit }, language) {
			commit('SET_LANGUAGE', language)
		},
		setToken({ commit }, token) {
			commit('SET_TOKEN', token)
		},
		setConfig({ commit }, config) {
			commit('SET_CONFIG', config)
		},
		setCurrentConfig({ commit }, currentConfig){
			commit('SET_CURRENTCONFIG', currentConfig)
		},
		setCurrentComponent({ commit }, currentComponent){
			commit('SET_CURRENTCOMPONENT', currentComponent)
		},
	},
})

export default store
