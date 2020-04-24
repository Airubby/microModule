import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {router,asyncRouter } from '@/router/index'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		wsData:{},
		AjaxUrl:Cookies.get('AjaxUrl')||'',
		language: Cookies.get('language') || 'zh',
		token:"",
		activeIndex:Cookies.get('activeIndex') || 0,
		config:[],
		componentArr:[],
	},
	getters : {
		language: state => state.language,
		getWSData: state => state.wsData,
		AjaxUrl: state => state.AjaxUrl,
		token: state=>state.token,
		config: state=>state.config,
		componentArr: state=>state.componentArr,
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
			state.config = config
			let data=config;
			console.log(asyncRouter)
			console.log(data)
			if(data.length>0){
				let redirect="/loncom/"+data[0].component;
				let newRouter={
					path: '/loncom',
					name:'loncom',
					component: () => import('@/views/index.vue'),
					redirect:redirect,
					children:[]
				}
				let arr=[];
				for(let i=0;i<data.length;i++){
					arr.push({
						path: '/loncom/'+data[i].component,
						name: data[i].component,
						component: () => import('@/views/public/page.vue'),
					});
				}
				for(let i=0;i<asyncRouter.length;i++){
					arr.push(asyncRouter[i]);
				}
				newRouter.children=arr;
				router.addRoutes([newRouter]);
			}else{
				let newRouter={
					path: '/loncom',
					name:'loncom',
					component: () => import('@/views/index.vue'),
					redirect:'/loncom/401',
				}
				router.addRoutes([newRouter]);
			}
			
		},
		SET_COMPONENT_ARR(state, arr){
			state.componentArr = arr
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
		setComponentArr({ commit }, arr) {
			commit('SET_COMPONENT_ARR', arr)
		},
	},
})

export default store
