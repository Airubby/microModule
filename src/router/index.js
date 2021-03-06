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
	{
		path: '/loncom/test',
		name: 'test',
		meta: { title: '测试'},
		component: () => import('@/views/Test.vue')
	}, 
	{ path: '/loncom/401', component: () => import('@/views/errorPage/401') },
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
		component: () => import('@/views/set/index.vue'),
		redirect:'/loncom/set/alarmEvent',
		children:[
			{
				path: '/loncom/set/alarmEvent',
				name: 'AlarmEvent',
				meta: { },
				component: () => import('@/views/set/alarmEvent/index.vue')
			},
			{
				path: '/loncom/set/alarmMask',
				name: 'AlarmMask',
				meta: { },
				component: () => import('@/views/set/alarmMask/index.vue')
			}, 
			{
				path: '/loncom/set/limitSet',
				name: 'LimitSet',
				meta: { },
				component: () => import('@/views/set/limitSet/index.vue')
			}, 
			{
				path: '/loncom/set/dataPublish',
				name: 'DataPublish',
				meta: { },
				component: () => import('@/views/set/dataPublish/index.vue')
			}, 
			{
				path: '/loncom/set/newsInform',
				name: 'NewsInform',
				meta: { },
				component: () => import('@/views/set/newsInform/index.vue')
			}, 
			{
				path: '/loncom/set/configInfo',
				name: 'ConfigInfo',
				meta: { },
				component: () => import('@/views/set/configInfo/index.vue')
			}, 
		]
	}, 
	{
		path: '/loncom/maintain',
		name: 'Maintain',
		component: () => import('@/views/maintain/index.vue'),
		redirect:'/loncom/maintain/dev',
		children:[
			{
				path: '/loncom/maintain/dev',
				name: 'DevManage',
				meta: { },
				component: () => import('@/views/maintain/dev/index.vue')
			},
			{
				path: '/loncom/maintain/interface',
				name: 'InterfaceManage',
				meta: { },
				component: () => import('@/views/maintain/interface/index.vue')
			},
			{
				path: '/loncom/maintain/ganged',
				name: 'GangedManage',
				meta: { },
				component: () => import('@/views/maintain/ganged/index.vue')
			},
			{
				path: '/loncom/maintain/user',
				name: 'UserManage',
				meta: { },
				component: () => import('@/views/maintain/user/index.vue')
			},
			{
				path: '/loncom/maintain/log',
				name: 'LogManage',
				meta: { },
				component: () => import('@/views/maintain/log/index.vue')
			},
			{
				path: '/loncom/maintain/sys',
				name: 'SysManage',
				meta: { },
				component: () => import('@/views/maintain/sys/index.vue')
			},
		]
	}, 
]
export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}
const createRouter = () => new Router({
    // mode: 'history',  //默认hash
    base: process.env.BASE_URL,
    routes: syncRouter
 })

export const router= createRouter()
