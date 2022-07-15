<template>
	<view>
		<home-top></home-top>
		<Swiper></Swiper>
		<two-bar></two-bar>
		<shop></shop>
	</view>
</template>

<script>
	import HomeTop from "@/pages/home/components/homeTop.vue"
	import Swiper from '@/pages/home/components/swiper.vue'
	import TwoBar from '@/pages/home/components/homeTwoBar.vue'
	import Shop from '@/pages/home/components/shop.vue'
	export default {
		components: {
			HomeTop,
			Swiper,
			TwoBar,
			Shop
		},
		// 点击搜索跳转搜索页面
		onNavigationBarButtonTap:function(e){
			// console.log(e);
			if (e.onclick==='search') {
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		},
		watch:{
			scroll() {
				console.log('111');
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
