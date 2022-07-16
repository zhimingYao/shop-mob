<template>
	<view class="person">
		<view class="user-info">
			<view class="content">
				<view class="has-login" v-if="login">
					<view class="avatar">
						<img :src="tzof" alt="123" @click="userpage">
					</view>
					<view class="info">
						<p>aaa</p>
						<span>#1243204919@qq.com#</span>
					</view>
					<view class="QR-code">
						<view class="QR-icon" @click="QRcode()">
							<img :src="mean" alt="12">
						</view>
					</view>
					<view class="bg"></view>
				</view>
				<view class="go-login" v-else>
					<span>登录/注册</span>
				</view>
			</view>
		</view>
		<view class="user-do">
			<view class="main">
				<view class="default">
					<view class="title">
						<ul>
							<li>
								<h3>默认频道</h3>
							</li>
							<li>
								<h3>主页<i>></i></h3>
							</li>
						</ul>
					</view>
				</view>
				<view class="order" @click="orderpage">
					<order></order>
				</view>
				<view class="purse">
					<view class="voucher" @click="voucherpage">
						<view class="title">
							<ul>
								<li>
									<img :src="voucher" alt="">
									<h3>优惠劵</h3>
								</li>
								<li>
									<h3><i>></i></h3>
								</li>
							</ul>
						</view>
					</view>
					<view class="money" @click="walletpage">
						<view class="title">
							<ul>
								<li>
									<img :src="money" alt="">
									<h3>有货币</h3>
								</li>
								<li>
									<h3><i>></i></h3>
								</li>
							</ul>
						</view>
					</view>
				</view>
				<view class="commiunication">
					<view class="news">
						<view class="title">
							<ul>
								<li>
									<img :src="news" alt="">
									<h3>消息</h3>
								</li>
								<li>
									<h3><i>></i></h3>
								</li>
							</ul>
						</view>
					</view>
					<view class="serve">
						<view class="title">
							<ul>
								<li>
									<img :src="customer" alt="">
									<h3>服务与支持</h3>
								</li>
								<li>
									<h3><i>></i></h3>
								</li>
							</ul>
						</view>
					</view>
				</view>
				<view class="img_1">
					<img :src="active_1" alt="">
				</view>
				<view class="img_2">
					<img :src="active_2" alt="">
				</view>
			</view>
		</view>
		<view class="similar-shop">
			<view class="title">
				<h3><span>|</span>为你优选</h3>
			</view>
			<view class="shoplist">

			</view>
		</view>
	</view>
</template>

<script>
	import tzof from "@/static/img/usercenter/tzof.png"
	import mean from "@/static/img/usercenter/二维码.png"
	import Order from "@/pages/mine/order/index.vue"
	import voucher from "@/static/img/usercenter/优惠劵.png"
	import money from "@/static/img/usercenter/货币.png"
	import news from "@/static/img/usercenter/消息.png"
	import customer from "@/static/img/usercenter/客服.png"
	import active_1 from "@/static/img/usercenter/活动1.jpg"
	import active_2 from "@/static/img/usercenter/活动2.jpg"
	export default {
		data() {
			return {
				login: true,
				tzof: tzof,
				mean: mean,
				voucher,
				money,
				news,
				customer,
				active_1,
				active_2,
			}
		},
		components:{
			Order,
		},
		methods: {
			myback() {
				console.log('111');
			},
			mybar() {
				console.log('222');
			},
			QRcode() {
				console.log('333');
			},
			userpage(){
				console.log('444');
			},
			orderpage(){
				console.log('555');
			},
			voucherpage(){
				console.log('666');
			},
			walletpage(){
				console.log('777');
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			let eventName = e.onclick;
			if (eventName == 'myback') {
				this.myback()
			}
			if (eventName == 'mybar') {
				this.mybar()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.person {
		padding: 0;
		margin: 0 auto;
	}

	.user-info {
		position: relative;
		width: 100vw;
		height: 12.3vh;

		.bg {
			width: 100%;
			height: 100%;
			background-image: url(https://cf-images.ap-northeast-1.prod.boltdns.net/v1/jit/6010958340001/67ac13a6-702d-4c3d-bdd0-f55b81e3adc9/main/1280x720/27s40ms/match/image.jpg);
			background-size: cover;
			background-position: center;
			filter: blur(8px);
			transform: scale(1.4);
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}

		.content {
			position: absolute;
			border: 1px solid #f0f0f0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			color: #fff;
			padding: 0 4vw;

			.has-login {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 2.3vh 0;

				.avatar {
					width: 15%;
					img {
						width: 100%;
						height: 100%;
						border-radius: 50% 50%;
					}
				}

				.info {
					width: 65%;

					p {
						line-height: 28px;
					}
				}

				.QR-code {
					width: 10%;
					position: relative;
					img {
						width: 50%;
						position: absolute;
						right: 0;
					}
				}
			}

			.go-login {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 2.3vh 0;

				span {
					border: 1px solid #fff;
					margin: 0 auto;
					padding: 0.6vh 10%;
					font-size: 14px;
				}
			}
		}
	}

	.user-do {
		width: 100%;
		background-color: #f0f0f0;
		padding-bottom: 1.5vh;
		.main {
			background-color: #f0f0f0;
			.default {
				background-color: #fff;
				margin-bottom: 1.5vh;
			}
			.order{
				margin-bottom: 1.5vh;
			}
			.purse{
				margin-bottom: 1.5vh;
				.voucher{
					border-bottom: 2px solid #e3e3e3;
					.title{
						
					}
				}
				.money{
					
				}
			}
			.commiunication{
				margin-bottom: 1.5vh;
				.news{
					border-bottom: 2px solid #e3e3e3;
				}
			}
			.img_1 {
				margin-bottom: 1.5vh;
				img{
					width: 100%;
				}
			}
			
			.img_2 {
				img{
					width: 100%;
				}
			}
		}
	}


	.similar-shop {}

	.title {
		background-color: #fff;
		padding: 3%;

		ul {
			display: flex;
			justify-content: space-between;

			li {
				display: flex;
				align-items: center;
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
				}
			}
		}
	}
</style>
