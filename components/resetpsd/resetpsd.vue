<template>
	<view class="resetPsd">
		<view class="uni-form-item">
			<view class="uni-input">
				<span><img src="../../static/icons/224用户.png" alt=""></span><input @input="onKeyUser" type="text" placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img src="../../static/icons/密码.png" alt=""></span><input @input="onKeyPsd" type="password" placeholder="请输入密码" />
			</view>
		</view>
		<view class="verify">
			<span>请将下列图片点击翻转至正向朝上</span><span>换一批</span>
			<view class="verify-img">
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</view>
		</view>
	    <view>
	    	<button class="bottom-button" @click.native="resetPsd">修改密码</button>
	    </view>
	</view>
</template>

<script>
	import {changePassword} from "@/api/resetPsd.js"
	export default {
		name: "resetpsd",
		data() {
			return {
				// 用户名
				inputUser: '',
				// 密码
				inputPsd: '',
			};
		},
		methods:{
			onKeyUser: function(event) {
				this.inputUser = event.target.value
			},
			onKeyPsd: function(event) {
				this.inputPsd = event.target.value
			},
			resetPsd(){
				let token = {
					username: this.inputUser,
					password: this.inputPsd
				}
				changePassword(token).then(data => {
					console.log(data);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.resetPsd {
		width: 100vw;
		margin: 0 auto;
		padding-top: 17vh;
		.uni-form-item {
			width: 84vw;
			height: 18vh;
			margin: 0 auto;

			.uni-input {
				width: 84vw;
				height: 6vh;
				line-height: 6.5vh;
				border-bottom: 1px solid #999;
				display: flex;

				input {
					padding: 2vh;
				}
				span{
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
	
	.bottom-button{
			padding: 12px;
			width: 82vw;
			background-color: #444444;
			color: white;
	}
	}
</style>
