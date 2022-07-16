<template>
	<view class="box">
		<view class="shopview" v-for="(item,index) in shopDate" :key="index" @click="detail">
			<div class="img">
				<image :src="item.img" mode=""></image>
			</div>
			<div class="title">
				<p>{{item.title}}</p>
				<span class="newprice">￥{{item.price}}</span>
				<span class="oldprice">￥{{item.price+100}}</span>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ShopView",
		props: {
			shopDate: Array
		},
		methods: {
			detail(){
				uni.navigateTo({
					url:"/pages/detal/detal"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		width: 100%;
		margin: 0 6%;

		.shopview {
			display: inline-block;
			width: 40%;
			margin-right: 34px;
			margin-bottom: 34px;
			background-color: #fff;
			border-radius: 15px;
			font-size: 20rpx;

			.img {
				width: 100%;
				image {
					width: 100%;
					border-radius: 15px;
				}
			}

			.title {
				background-color: #fff;
				margin: 10px;

				p {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					
					padding: 5px;
				}

				.newprice {
					color: red;
					margin-right: 10px;
				}
				.oldprice{
					color: #aaa;
					font-size: 15rpx;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
