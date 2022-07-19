<template>
	<view class="register">
		<view class="nav">
			<view class="nav-back">
				<navigator url="/pages/login/login" open-type="navigateBack">
					<button class="back"></button>
				</navigator>
			</view>
			<view class="nav-title">
				<h3>注册</h3>
			</view>
			<view class="nav-meta">
				
			</view>
		</view>
		<view class="uni-form-item">
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyUser" type="text" placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyEmil" type="text" placeholder="请输入邮箱" />
			</view>
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyPsd" type="password" placeholder="请输入密码" />
			</view>
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyPho" type="text" placeholder="请输入手机号" /><button>获取验证码</button>
			</view>
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onVaceholder" type="text" placeholder="请输入验证码" />
			</view>
		</view>
		<view class="verify">
			<verify @verifyres="verifyres"></verify>
		</view>
		<view class="onregister">
			<button :class="{'disabled':disabled}" @click.native="getRegister">注册</button>
			<view class="agreement">
				<p>注册即表示您已阅读并同意</p>
				<view class="">
					<span><ins>有货用户服务协议</ins></span>
					<span><ins>有货隐私条款</ins></span>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		register
	} from '@/api/login.js'
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
				// 禁止点击注册
				disabled:true,
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
			},
			verifyres(res){
				this.disabled = !res;
			}
		}
	}
</script>

<style lang="scss">
	.register {
		width: 100vw; 
		margin: 0px auto;
		.nav{
			width: 100vw;
			height: 46px;
			padding: 10px;
			background-color: #fff;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.nav-back{
				width: 15%;
				height: 100%;
				.back {
					width: 30px;
					height: 30px;
					line-height: 4vh;
					text-align: center;
					border-radius: 50%;
					border: 1px solid #000;
					background-image: url("@/static/img/search/to-left.png");
					background-color: rgba(0, 0, 0, 0.5);
					background-size: 80%;
					background-repeat: no-repeat;
					background-position: 30% 30%;
				}
			}
			.nav-title{
				width: 70%;
				text-align: center;
				h3{
					
				}
			}
			.nav-meta{
				width: 15%;
			}
		}
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
			height: 24vh;
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
				width: 82vw;
				background-color: #444444;
				color: white;
			}
			.disabled{
				padding: 12px;
				width: 80vw;
				background-color: #d9d9d9;
				color: white;
			}
			.agreement{
				display: flex;
				justify-content: space-around;
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
