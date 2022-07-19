<template>
	<view class="resetPsd">
		<view class="uni-form-item"> 
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyUser" type="text" placeholder="请输入用户名" />
			</view>
			<view class="uni-input">
				<span><img src="" alt=""></span><input @input="onKeyPsd" type="password" placeholder="请输入密码" />
			</view>
		</view>
		<view class="verify">
			<verify @verifyres="verifyres"></verify>
		</view>
	    <view>
	    	<button :class="{'change':true,'disabled':disabled}" @click.native="resetPsd">修改密码</button>
	    </view>
	</view>
</template>

<script>
	import {infoModify} from "@/api/login.js"
	export default {
		name: "resetpsd",
		data() {
			return {
				// 用户名
				inputUser: '',
				// 密码
				inputPsd: '',
				disabled:true,
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
			},
			verifyres(res){
				this.disabled = !res
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
			height: 24vh;
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
	
	.change{
			padding: 12px;
			width: 82vw;
			background-color: #444444;
			color: white;
	}
	.disabled{
		padding: 12px;
		width: 82vw;
		background-color: #ddd;
		color: white;
		cursor: not-allowed;
	}
	}
</style>
