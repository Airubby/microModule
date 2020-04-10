import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
	{
		path:'/',
		redirect:'/loncom',
		component: () => import('@/views/index.vue'),
	},
	// {
	// 	path: '/loncom',
	// 	name: 'index',
	// 	meta: { title: '首页'},
	// 	component: () => import('@/views/index.vue'),
	// 	redirect:'/loncom/home',
	// 	children:[
	// 	{
	// 		path: '/loncom/home',
	// 		name: 'Home',
	// 		meta: { title: '主监控'},
	// 		component: () => import('@/views/home/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/power',
	// 		name: 'Power',
	// 		meta: { title: '配电'},
	// 		component: () => import('@/views/power/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/hvdc',
	// 		name: 'Hvdc',
	// 		meta: { title: 'hvdc'},
	// 		component: () => import('@/views/hvdc/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/env',
	// 		name: 'Env',
	// 		meta: { title: '环境'},
	// 		component: () => import('@/views/env/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/air',
	// 		name: 'Air',
	// 		meta: { title: '空调'},
	// 		component: () => import('@/views/air/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/security',
	// 		name: 'Security',
	// 		meta: { title: '安防'},
	// 		component: () => import('@/views/security/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/alarm',
	// 		name: 'Alarm',
	// 		meta: { title: '告警'},
	// 		component: () => import('@/views/alarm/index.vue')
	// 	},
	// 	{
	// 		path: '/loncom/his',
	// 		name: 'His',
	// 		meta: { title: '历史'},
	// 		component: () => import('@/views/his/index.vue')
	// 	}, 
	// 	{
	// 		path: '/loncom/set',
	// 		name: 'Set',
	// 		meta: { title: '设置'},
	// 		component: () => import('@/views/set/index.vue')
	// 	}, 
	// 	{
	// 		path: '/loncom/maintain',
	// 		name: 'Maintain',
	// 		meta: { title: '维护'},
	// 		component: () => import('@/views/maintain/index.vue')
	// 	}, 
    // ]
  	// },
  
  { path: '*', component: () => import('@/views/errorPage/404') },
  
];
/**
 * 重写路由的push方法  解决 Navigating to current location ("url") is not allowed
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export const asyncRouter=[
	{
		path: '/loncom/alarm',
		name: 'Alarm',
		meta: { title: '告警'},
		component: () => import('@/views/alarm/index.vue')
	},
	{
		path: '/loncom/set',
		name: 'Set',
		meta: { title: '设置'},
		component: () => import('@/views/set/index.vue')
	}, 
	{
		path: '/loncom/maintain',
		name: 'Maintain',
		meta: { title: '维护'},
		component: () => import('@/views/maintain/index.vue')
	}, 
]
export const router= new Router({
  //mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes:syncRouter
})
