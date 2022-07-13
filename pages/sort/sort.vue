<template>
	<view>
		<!-- 搜索 -->
		<uni-search-bar @confirm="search" @input="input" placeholder="搜索商品"></uni-search-bar>
		<!-- 内容 -->
		<view class="">
			<uni-row class="demo-uni-row" :width="nvueWidth">
				<!-- 左 -->
				<uni-col :span="8">
					<view class="demo-uni-col dark sort-left">
						<block v-for="(item,index) in sortFirst" :key="index">
							<view class="sort-left-item" @click.native="clickChange(item,index)" :class="{backgroundColor:cur==index}">
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
	export default {
		data() {
			return {
				nvueWidth: "100%",
				// 一级分类数据
				sortFirst:["鞋类","服饰","配饰","儿童专区"],
				// 记录当前点击的一级分类
				cur:false,
				// 二级分类数据
				sortSecond:[],
				
			}
		},
		methods: {
			// 点击样式变化 右侧渲染二级分类
			clickChange(item,index){
				this.cur=index;
				
			},
			// 点击二级分类
			clickChangeSecond(item,index){
				// 发请求获取二级分类
				
			}
		}
	}
</script>

<style scoped>
.sort-left-item{
	padding-left: 20rpx;
	height: 70rpx;
	line-height: 70rpx;
}
.backgroundColor{
	background-color: #e7e6dd;
	border-left: 3px solid #aa0000;
}
</style>
