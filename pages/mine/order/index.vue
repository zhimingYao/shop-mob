<template>
	<view class="order">
		<view class="title">
			<ul>
				<li>
					<h3>我的订单</h3>
				</li>
				<li>
					<h3>全部订单<i>></i></h3>
				</li>
			</ul>
		</view>
		<view class="content">
			<view class="orderinfo">
				<ul>
					<li>
						<view>
							<img :src="pay" alt="">
							<span>待付款</span>
						</view>
					</li>
					<li>
						<view>
							<img :src="shipments" alt="">
							<span>待发货</span>
						</view>
					</li>
					<li>
						<view>
							<img :src="receipt" alt="">
							<span>待收货</span>
						</view>
					</li>
				</ul>
			</view>
			<view class="orderinfo">
				<ul>
					<li>
						<view>
							<p>0</p>
							<span>待付款</span>
						</view>
					</li>
					<li>
						<view>
							<p>0</p>
							<span>待发货</span>
						</view>
					</li>
					<li>
						<view>
							<p>0</p>
							<span>待收货</span>
						</view>
					</li>
				</ul>
			</view>
		</view>
		
	</view>
</template>

<script>
	import pay from "@/static/img/usercenter/待付款.png";
	import shipments from "@/static/img/usercenter/待发货.png";
	import receipt from "@/static/img/usercenter/待收货.png";
	export default {
		name:"Order",
		data(){
			return {
				pay,
				shipments,
				receipt,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		width: 100%;
		//#ifdef MP-WEIXIN
		height: 40vh;
		//#endif
		background-color: #fff;
		.orderinfo{
			border-top: 2px solid #e3e3e3;
			padding-top: 2vh;
			padding-bottom: 2vh;
			ul{
				display: flex;
				justify-content: space-evenly;
				li{
					width: 100%;
					height: 100%;
					view{
						text-align: center;
						img{
							width: 20%;
							height: 20px;
						}
						span{
							display: block;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	.title {
		background-color: #fff;
		padding: 3%;
	
		ul {
			display: flex;
			justify-content: space-between;
			
			li {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				img{
					position: relative;
					top: 0;
					width: 8vw;
					height: 4vh;
					padding: 0 2vw;
					overflow: hidden;
				}
				h3 {
					font-size: 16px;
					font-weight: 400;
					font-family: "宋体";
					i{
						display: inline;
					}
				}
			}
		}
	}
</style>