<template>
	<view class="all">
		<view class="nologin-show">
			<view class="text">
				<image src="../../static/icons/感叹号-圈.png" alt=""></image>
				请您先<button @click="goLogin">登录</button>可以同步手机和电脑的商品
			</view>
			<image class="car" src="../../static/icons/_购物车.png" alt=""></image>
			<text class="noshop">您的购物车暂无商品</text>
			<button class="look" @click="walkAround">随便逛逛</button>
		</view>

		<!-- 推荐 -->
		<view class="recommend">
			<text class="title">
				为你优选新品
			</text>
		</view>
	</view>

</template>

<script>
	export default {
		name: "NologinShow",
		data() {
			return {

			}
		},
		methods: {
			// 点击登录 跳转登陆页面
			goLogin() {

			},
			// 点击随便逛逛，跳转到随便逛逛页面
			walkAround() {
				//跳转到walk-around.vue页面
				uni.navigateTo({
					url: '/pages/walk-around/walk-around'
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.all {
		width: 100%;
		text-align: center;

		.nologin-show {
			width: 100%;
			line-height: 50rpx;
			color: #55aa7f;
			text-align: center;
			background-color: #e3e3e3;
			padding: 20rpx 0 60rpx 0;

			.text {
				width: 754rpx;
				margin: 0 auto;
				text-align: center;
				display: flex;
				justify-content: center;
				line-height: 50rpx;

				image {
					height: 40rpx !important;
					width: 40rpx;
				}

				button {
					width: 142rpx;
					height: 50rpx;
					line-height: 50rpx;
					border-radius: 0%;
					background-color: #ff0000;
					color: #fff;
				}
			}

			.car {
				width: 150rpx;
				height: 150rpx;
				margin: 80rpx 0;

			}

			.noshop {
				color: #000;
				font-size: 13px
			}

			.look {
				width: 250rpx;
				height: 60rpx;
				line-height: 60rpx;
				margin: 30rpx auto 0 auto;
				background-color: #000;
				color: #fff;
			}

			text {
				display: block;
			}


		}

		// 推荐
		.recommend {
			width: 100%;
			text-align: center;
			padding: 40rpx 0 40rpx 0;

			.title {
				margin: 0 auto;
				font-size: 25px;
				color: #787878;
			}
		}
	}
</style>
