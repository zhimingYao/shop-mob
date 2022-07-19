<template>
	<view class="login">
		<nav>
			<navigator url="/pages/mine/mine" open-type="navigateBack">
				<button class="backmine"></button>
			</navigator>
			<navigator url="/pages/register/register">
				<button class="onregister">注册</button>
			</navigator>
		</nav>
		<view class="uni-form-item">
			<view class="uni-input">
				<span><img :src="username" alt=""></span><input @input="onKeyUser" type="text"
					placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img :src="passward" alt=""></span><input @input="onKeyPsd" type="password"
					placeholder="请输入密码" />
			</view>
		</view>
		<view class="verify">
			<verify @verifyres="verifyres"></verify>
		</view>
		<view class="bottom">
			<button class="login" v-if="dislogin" @click.native="login">点击登录</button>
			<button class="nologin" v-else >点击登录</button>
			<navigator url="/pages/resetpsd/resetpsd" open-type="navigate">
				<button class="resetPsd" ><ins>忘记密码？</ins></button>
			</navigator>
		</view>

	</view>
</template>

<script>
	import username from "@/static/img/usercenter/用户名-登录页.png"
	import passward from "@/static/img/usercenter/密码.png"
	import { login } from "@/api/login.js"
	export default {
		data() {
			return {
				// 用户名
				inputUser: '',
				// 密码
				inputPsd: '',
				username,
				passward,
				dislogin:false,
			}
		},
		// onLoad() {
		// 	this.onLogin()
		// },
		methods: {
			onKeyUser: function(event) {
				this.inputUser = event.target.value
			},
			onKeyPsd: function(event) {
				this.inputPsd = event.target.value
			},
			login() {
				let token = {
					username: this.inputUser,
					password: this.inputPsd
				}
				login(token).then(data => {
					console.log(data);
					uni.setStorage({
						key: 'user',
						data: data.data,
						success: function () {
							console.log('success');
						}
					});
					uni.reLaunch({
						url: '/pages/home/home',
						success() {
							console.log('登陆成功');
						}
					});
				})
			},
			back(){
				// console.log('111');
				uni.reLaunch({
					url:"/pages/mine/mine",
				})
			},
			verifyres(res){
				console.log(res);
				this.dislogin = res
			},
			resetPsd(){
				uni.reLaunch({
					url:"/pages/resetpsd/resetpsd",
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100vw;
		margin: 0px auto;

		nav {
			width: 100vw;
			height: 18vh;
			background-image: url(http://img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290);
			background-size: 100% 100%;

			.backmine {
				float: left;
				top: 3vh;
				left: 3vh;
				width: 30px;
				height: 30px;
				line-height: 4vh;
				text-align: center;
				border-radius: 50%;
				border: 1px solid white;
				background-image: url("@/static/img/search/to-left.png");
				background-color: rgba(0, 0, 0, 0);
				background-size: 80%;
				background-repeat: no-repeat;
				background-position: 30% 30%;
				color: white;
			}

			.onregister {
				float: right;
				top: 3vh;
				right: 3vh;
				padding: 1vh 6vw;
				border-radius: 50px;
				border: 1px solid white;
				background-color: rgba(0, 0, 0, 0);
				color: white;
			}
		}

		.uni-form-item {
			width: 84vw;
			height: 18vh;
			margin: 0 auto;
			margin-top: 4vh;

			.uni-input {
				width: 84vw;
				height: 6vh;
				line-height: 6.5vh;
				border-bottom: 1px solid #999;
				margin-top: 1vh;
				display: flex;

				input {
					padding: 2vh;
				}

				span {
					margin-top: 1vh;
				}

				span>img {
					width: 6vw;
					height: 3vh;
				}
			}
		}

		.bottom {
			.login {
				padding: 12px;
				width: 82vw;
				background-color: #444444;
				color: white;
			}
			
			.nologin{
				padding: 12px;
				width: 82vw;
				background-color: #ddd;
				color: white;
				cursor: not-allowed;
			}

			.resetPsd {
				margin-top: 1vh;
				margin-right: 5vw;
				width: 108px;
			}
		}
	}
</style>
