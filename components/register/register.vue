<template>
	<view class="register">
		<view class="uni-form-item">
			<view class="uni-input">
				<span><img src="../../static/img/tabbar/profile_active.jpg" alt=""></span><input @input="onKeyUser" type="text" placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/邮箱.png" alt=""></span><input @input="onKeyEmil" type="text" placeholder="请输入邮箱" />
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/密码.png" alt=""></span><input @input="onKeyPsd" type="password" placeholder="请输入密码" />
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/手机.png" alt=""></span><input @input="onKeyPho" type="text" placeholder="请输入手机号" /><button>获取验证码</button>
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/验证码.png" alt=""></span><input @input="onVaceholder" type="text" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="verify">
			<span>请将下列图片点击翻转至正向朝上</span><span>换一批<img src="../../static/icons/刷新 (1).png" alt=""></span>
			<view class="verify-img">
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</view>
		</view>
		<view class="onregister">
			<button @click.native="getRegister">注册</button>
			<p>注册即表示您已阅读并同意</p>
			<span><ins>有货用户服务协议</ins></span>
			<span><ins>有货隐私条款</ins></span>
		</view>
	</view>

</template>

<script>
	import {
		getRegister
	} from '@/api/register.js'
	export default {
		data() {
			return {
				// 随机生成验证码
				// verification:666666,
				// 验证验证码
				inputVer: 666666,
				// 账号
				inputUser: '',
				// 邮箱
				inputEmil: '',
				// 手机号
				inputPho: '',
				// 密码
				inputPsd: '',

			};
		},
		methods: {
			onKeyUser: function(event) {
				this.inputUser = event.target.value
			},
			onKeyPsd: function(event) {
				this.inputPsd = event.target.value
			},
			onKeyPho: function(event) {
				this.inputPho = event.target.value
			},
			onKeyEmil: function(event) {
				this.inputEmil = event.target.value
			},
			onVaceholder: function(event) {
				this.inputVer = event.target.value
			},
			getRegister() {
				let register = {
					username: this.inputUser,
					password: this.inputPsd,
					email: this.inputEmil,
					VerificationCode: this.inputVer
				}
				getRegister(register).then(data => {
					console.log(data);
				})
			}
		}
	}
</script>

<style lang="scss">
	.register {
		width: 100vw;
		margin: 0px auto;
		.uni-form-item {
			padding-top: 3vh;
			width: 84vw;
			height: 34vh;
			margin: 0 auto;

			.uni-input {
				width: 84vw;
				height: 6vh;
				line-height: 6.5vh;
				border-bottom: 1px solid #999;
				display: flex;

				button {
					width: 28vw;
					height: 3vh;
					line-height: 3vh;
					padding: 0;
					font-size: 12px;
					background-color: #444444;
					margin-top: 2vh;
					color: white;
				}

				input {
					padding: 2vh;
				}
				span>img {
					width: 4.5vw;
					height: 2vh;
				}
			}
		}

		.verify {
			width: 84vw;
			height: 18vh;
			margin: 0 auto;
			font-size: 14px;

			span:nth-child(2) {
				margin-left: 13vw;
				color: red;
				font-size: 16px;
			}
			
			span>img {
				width: 4.5vw;
				height: 2vh;
			}

			.verify-img {
				margin-top: 2vh;
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

		.onregister {
			width: 84vw;
			margin: 0 auto;
			text-align: left;
			button {
				padding: 12px;
				width: 80vw;
				background-color: #d9d9d9;
				color: white;
			}
			p{
				margin-top: 1vh;
				margin-bottom: 1vh;
				font-size: 12px;
			}
			span{
				font-size: 14px;
				color: red;
				padding-right: 3vw;
			}
		}
	}
</style>
