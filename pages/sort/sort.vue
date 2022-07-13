<template>
	<view class="sort">
		<!-- #ifdef MP-WEIXIN -->
		<text class="text">商品分类</text>
		<!--  #endif -->

		<!-- 搜索 -->
		<uni-search-bar @confirm="search" @input="input" bgColor="#f1f1f1" placeholder="搜索商品"></uni-search-bar>
		<!-- 内容 -->
		<view class="">
			<uni-row class="demo-uni-row" :width="nvueWidth">
				<!-- 左 -->
				<uni-col :span="8">
					<view class="demo-uni-col dark sort-left">
						<block v-for="(item,index) in sortFirst" :key="index">
							<view class="sort-left-item" @click.native="clickChange(item,index)"
								:class="{backgroundColor:cur==index}">
								{{item}}
							</view>
						</block>
					</view>
				</uni-col>
				<!-- 右 -->
				<uni-col :span="16">
					<view class="demo-uni-col light">
						<block v-for="(item,index) in sortSecond" :key="index">
							<view class="sort-left-item" @click.native="clickChangeSecond(item,index)">
								{{item}}
							</view>
						</block>
					</view>
				</uni-col>
			</uni-row>
		</view>

	</view>
</template>

<script>
	import {
		getParentName,
		getSecond
	} from '@/api/sort.js';

	export default {
		data() {
			return {
				nvueWidth: "100%",
				// 一级分类数据
				sortFirst: [],
				// 记录当前点击的一级分类
				cur: false,
				// 二级分类数据
				sortSecond: [],
			}
		},
		methods: {
			// 获取一级分类
			getParentName() {
				getParentName().then(res => {
					this.sortFirst = res.data;
					// 页面加载获取第一个一级分类下的二级分类
					this.getSecond()
				}).catch(err => {
					console.log(err)
				})
			},

			// 获取二级分类
			getSecond() {
				var parent_name = this.sortFirst[0];
				getSecond({
					parent_name
				}).then(res => {
					this.sortSecond = res.data;
				}).catch(err => {
					console.log(err)
				})
			},

			// 点击样式变化 右侧渲染二级分类
			clickChange(item, index) {
				this.cur = index;
				// 发请求获取二级分类
				getSecond({
					parent_name: item
				}).then(res => {
					this.sortSecond = res.data;
				}).catch(err => {
					console.log(err)
				})
			},
			// 点击二级分类
			clickChangeSecond(item, index) {

			}
		},
		onLoad() {
			// 页面加载 获取一级分类
			this.getParentName()
		}
	}
</script>

<style lang="scss" scoped>
	.sort {
		/*#ifdef MP-WEIXIN*/
		margin-top: 60rpx;
		/*#endif*/
	}

	.sort-left-item {
		padding-left: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
	}

	.backgroundColor {
		background-color: #f1f1f1;
		border-left: 3px solid #aa0000;
	}

	/deep/ .uni-searchbar__box {
		border-radius: 20px !important;
	}
</style>
