<template>
	<div class="content">
		<div class="list">
			<shop @click.native="linkDetail" :shop="item" v-for="item in shopList" :key="item.Id"></shop>
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
				let data = {
					store_id:'1',
				}
				getShopList(data).then(res => {
					console.log(res);
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
