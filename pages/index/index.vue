<template>
	<div class="content">
		<!-- navigator 链接标签，
		    url 跳转链接，页面地址
			bug:智能跳转到 二级页面，不能跳转到tabBar页面
			open-type 设置跳转链接类型
		 -->
		<!-- <navigator url="/pages/detal/detal" hover-class="navigator-hover">
			<button type="default">跳转到新页面二级页面</button>
		</navigator>
		<navigator url="/pages/shopcar/shopcar" open-type="switchTab" hover-class="navigator-hover">
			<button type="default">跳转到新页面tabBar</button>
		</navigator> -->
		

		<div class="list">
			<Shop @click.native="linkDetail" :shop="item" v-for="item in shopList" :key="item.Id"></Shop>
		</div>
	</div>
</template>

<script>
	import {
		getShopList
	} from "@/api/index.js"
	import Shop from './shop.vue'
	export default {
		data() {
			return {
				shopList: [],
			}
		},
		components: {
			Shop,
		},
		// 微信小程序平台初始化不能用created 
		// #ifndef MP-WEIXIN
		created() {
			this.getShopList()
		},
		// #endif

		// #ifdef MP-WEIXIN
		onLaunch() {
			this.getShopList()
		},
		// #endif
		methods: {
			getShopList() {
				console.log('get shop list run ');
				// 发送请求
				getShopList(1).then(res => {
					this.shopList = res.data
				})

			},
			linkDetail(){
				// api方式跳转来链接
				uni.navigateTo({
					url:'/pages/detal/detal'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
