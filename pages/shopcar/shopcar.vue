<template>
	<view>
		<nologin-show></nologin-show>
	</view>
</template>

<script>
	import NologinShow from "@/pages/shopcar/noLoginShow.vue"
	export default {
		components:{
			NologinShow
		},
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
