import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const syncRouter=[
	{
		path:'/',
		redirect:'/loncom',
		component: () => import('@/views/index.vue'),
	},
	{
		path: '/loncom',
		name: 'index',
		meta: { title: '首页'},
		component: () => import('@/views/index.vue'),
		redirect:'/loncom/home',
		children:[
		{
			path: '/loncom/home',
			name: 'home',
			meta: { title: '主监控'},
			component: () => import('@/views/home/index.vue')
		},
		{
			path: '/loncom/power',
			name: 'power',
			meta: { title: '配电'},
			component: () => import('@/views/power/index.vue')
		},
		{
			path: '/loncom/hvdc',
			name: 'hvdc',
			meta: { title: 'hvdc'},
			component: () => import('@/views/hvdc/index.vue')
		},
		{
			path: '/loncom/env',
			name: 'env',
			meta: { title: '环境'},
			component: () => import('@/views/env/index.vue')
		},
		{
			path: '/loncom/air',
			name: 'air',
			meta: { title: '空调'},
			component: () => import('@/views/air/index.vue')
		},
		{
			path: '/loncom/security',
			name: 'security',
			meta: { title: '安防'},
			component: () => import('@/views/security/index.vue')
		},
		{
			path: '/loncom/alarm',
			name: 'alarm',
			meta: { title: '告警'},
			component: () => import('@/views/alarm/index.vue')
		},
		{
			path: '/loncom/his',
			name: 'his',
			meta: { title: '历史'},
			component: () => import('@/views/his/index.vue')
		}, 
		{
			path: '/loncom/his/detail',
			name: 'hisdetail',
			meta: { title: '历史详情'},
			component: () => import('@/views/his/detail.vue')
		}, 
		{
			path: '/loncom/set',
			name: 'set',
			meta: { title: '设置'},
			component: () => import('@/views/set/index.vue')
		}, 
    ]
  },
  {
	path:'/test',
	component: () => import('@/views/test/index.vue'),
	},
  { path: '*', component: () => import('@/views/errorPage/404') },
  
];

export const asyncRouter=[]
export const router= new Router({
//   mode: 'history',
  base: process.env.BASE_URL,
  routes:syncRouter
})
