<template>
	<view class="login">
		<nav>
			<navigator url="/pages/mine/mine">
				<button class="backmine">返</button>
			</navigator>
			<navigator url="/components/register/register">
				<button class="onregister">注册</button>
			</navigator>
		</nav>
		<view class="uni-form-item">
			<view class="uni-input">
				<span><img src="../../static/icons/224用户.png" alt=""></span><input @input="onKeyUser" type="text"
					placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/密码.png" alt=""></span><input @input="onKeyPsd" type="password"
					placeholder="请输入密码" />
			</view>
		</view>
		<view class="verify">
			<span>请将下列图片点击翻转至正向朝上</span><span>刷新<img src="../../static/icons/刷新 (1).png" alt=""></span>
			<view class="verify-img">
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</view>
		</view>
		<view class="bottom">
			<button class="onlogin" @click.native="onLogin">点击登录</button>
			<navigator url="/components/resetpsd/resetpsd">
				<button class="resetPsd"><ins>忘记密码？</ins></button>
			</navigator>
		</view>

	</view>
</template>

<script>
	import {
		getLogin
	} from '@/api/login.js'
	export default {
		data() {
			return {
				// 用户名
				inputUser: '',
				// 密码
				inputPsd: '',

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
			onLogin() {
				let token = {
					username: this.inputUser,
					password: this.inputPsd
				}
				getLogin(token).then(data => {
					console.log(data);
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
			background-image: url(@/static/logintop.jpg);
			background-size: 100% 100%;

			.backmine {
				float: left;
				top: 3vh;
				left: 3vh;
				width: 9vw;
				height: 4vh;
				line-height: 4vh;
				text-align: center;
				border-radius: 50%;
				border: 1px solid white;
				background-color: rgba(0, 0, 0, 0);
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

		.verify {
			width: 84vw;
			height: 18vh;
			margin: 0 auto;
			font-size: 14px;

			span:nth-child(2) {
				margin-left: 15vw;
				color: red;
				font-size: 16px;
			}

			span>img {
				width: 4.5vw;
				height: 2vh;
			}

			.verify-img {
				margin-top: 3vh;
				width: 84vw;
				height: 10vh;

				li {
					display: inline-block;
					width: 18.96vw;
					height: 9vh;
					margin-left: 2vw;
					border: 1px solid #999;
				}

				li:nth-child(1) {
					margin-left: 0;
				}
			}
		}

		.bottom {
			.onlogin {
				padding: 12px;
				width: 82vw;
				background-color: #444444;
				color: white;
			}

			.resetPsd {
				margin-top: 1vh;
				margin-right: 5vw;
				width: 108px;
			}
		}
	}
</style>
