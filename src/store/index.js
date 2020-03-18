import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		wsData:{},
		AjaxUrl:Cookies.get('AjaxUrl')||'',
		language: Cookies.get('language') || 'zh',
		token:"",
		activeIndex:Cookies.get('activeIndex') || 0,
	},
	getters : {
		language: state => state.language,
		getWSData: state => state.wsData,
		AjaxUrl: state => state.AjaxUrl,
		token: state=>state.token,
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
	},
})

export default store
