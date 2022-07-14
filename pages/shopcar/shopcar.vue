<template>
	<view>
		购物车
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		// app h5支持
		// #ifndef MP-WEIXIN
		onNavigationBarButtonTap(e) {
			console.log(e.onclick);
			console.log("e.onclick");
			// if ("goHome" === e.onclick) {
			console.log("111222");
			//跳转到home.vue页面
			uni.reLaunch({
				url: '../index/index'
			});
			// }
		},
		// #endif
		created() {

		}

	}
</script>

<style>

</style>
