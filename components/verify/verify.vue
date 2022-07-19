<template>
	<view class="verify">
		<view class="text">
			<span>请将下列图片点击翻转至正向朝上</span>
			<span @click="update()" >刷新<img :src="loading" alt=""></span>
		</view>
		<view class="verify-img">
			<ul>
				<li v-for="(item,index) in verifyData" :key="index" >
					<!-- #ifdef MP-WEIXIN -->
					<img :src="item.img" alt="" 
					:class="{'deg-top':degcss[index]==0,
					'deg-right':degcss[index]==1,
					'deg-bottom':degcss[index]==2,
					'deg-left':degcss[index]==3}"
					@click="changedeg(index)">
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<img :src="item.img" alt="" 
					:ref="index"
					:class="'a'+index"
					:style="`transform: rotate(${deg[index]}deg);`" 
					@click="changedeg(index)">
					<!-- #endif -->
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import loading from "@/static/img/usercenter/加载.png"
	import {
		getproduct
	} from "@/api/login.js"
	export default {
		name: "verify",
		data() {
			return {
				shopData: [
					{img:loading}
				],
				loading,
				deg:[90,180,270,0],
				degcss:[0,1,2,3]
			};
		},
		methods: {
		   	getproduct() {
				let data = {
					parent_name: "鞋类"
				}
				getproduct(data).then(res => {
					// console.log(res);
					this.shopData = res.res
					// console.log(this.verifyData)
				})
			},
			update(){
				// console.log('111');
				this.getproduct()
			},
			// #ifdef MP-WEIXIN
			changedeg(index){
				if (this.degcss[index] >= 3) {
					this.degcss[index] = 0
				} else {
					this.degcss[index] += 1
				}
				// console.log(this.degcss);
				// 更新小程序里里面的图片元素
				this.$forceUpdate()
				/**
				 * Array.every(backcall)
				 * backcall:回掉函数
				 * 回参1：数组里面的项
				 * 回参2：数组里面的下标
				 * 回参3：数组本体
				 * 
				 * 返回值：满足回调条件 true
				 *         否则 false
				 */
				let res = this.degcss.every((deg)=>{
					return deg == 0
				})
				if (res) {
					console.log('都放正了');
					this.$emit('verifyres',true)
				} else {
					this.$emit('verifyres',false)
				}
			}
			// #endif
			// #ifndef MP-WEIXIN
			changedeg(index){
				// console.log(index,this.deg[index]);
				// console.log(this.$refs[index][0].style);
				// console.log(this);
				if (this.deg[index] >= 270) {
					this.deg[index] = 0
				} else {
					this.deg[index] += 90
				}
				this.$refs[index][0].style.cssText= `transform: rotate(${this.deg[index]}deg);`
				let res = this.deg.every((deg)=>{
					return deg == 0
				})
				if (res) {
					// console.log('都放正了');
					this.$emit('verifyres',true)
				} else {
					this.$emit('verifyres',false)
				}
			}
			// #endif
		},
		created() {
			this.getproduct()
		},
		computed: {
			verifyData() {
				// console.log('111');
				let res = [];
				this.deg =[];
				this.degcss =[];
				for (let i = 0; i < 4; i++) {
					// console.log(Math.random());
					// console.log(this.shopData.length);
					let num =  Math.floor(Math.random()*this.shopData.length)
					let degnum = Math.floor(Math.random()*4)
					// console.log(num);
					res.push(this.shopData[num]|| {})
					this.deg.push(degnum*90)
					this.degcss.push(degnum)
				}
				return res
			}
		},
		//bug watch 深度监听数组未生效
		// watch:{
		// 	deg:{
		// 		deep:true,
		// 		handler(val,old){
		// 			console.log(val,old);
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.verify {
		width: 84vw;
		height: 24vh;
		margin: 0 auto;
		font-size: 14px;
		.text{
			width: 100%;
			display: flex;
			justify-content: space-between;
			span:nth-child(2) {
				margin-left: 15vw;
				color: red;
				font-size: 16px;
			}
			span{
				img {
					width: 16px;
					height: 16px;
					position: relative;
					top: 3px;
				}
			}
		}

		.verify-img {
			margin-top: 3vh;
			width: 84vw;
			ul{
				display: flex;
				justify-content: space-around;
				flex-wrap: nowrap;
				li {
					width: 70px;
					height: 10vh;
					margin-left: 2vw;
					border: 1px solid #999;
					img{
						width: 100%;
						height: 100%;
					}
				}
				li:nth-child(1){
					margin-left: 0;
				}
			}
		}
	}
	// .a0{
	// 	transform: rotate(30deg)
	// }
	.deg-top{
		transform: rotate(0deg);
	}
	.deg-right{
		transform: rotate(90deg);
	}
	.deg-bottom{
		transform: rotate(180deg);
	}
	.deg-left{
		transform: rotate(270deg);
	}
</style>
