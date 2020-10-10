<template>
	<div class="content">
		<div class="content">
			<ul class="content-nav">
				<template v-for="item in currentConfig">
                    <li>
                        <router-link :to="{name:item.key}">
                            {{$t(item.language)}}
                        </router-link>
                    </li>
                </template>
			</ul>
			<div class="content-con">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components:{},
	computed:{},
	props:{
		currentConfig:{
            type:Array,
            default:function(){
                return []
            }
        },
	},
	created(){
		
	},
	data(){
		return{
			
		}
	},
	methods:{
		
	},
	watch:{
		
	}
}
</script>
<style lang="less" scoped>
	.content-nav{
		width:100%;
		height: 48px;
		display: flex;
		justify-content: space-around;
		li{
			width: 100%;
			height: 100%;
			text-align: center;
			line-height: 48px;
			a{
				display: block;
				background: #718199;
				color: #fff;
				&.router-link-exact-active{
					background: #5a687b;
				}
			}
		}
	}
	.content-con{
		width: 100%;
		height: calc(100% - 48px);
	}
</style>