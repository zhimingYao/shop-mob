<template>
	<view class="twoBar">
		<ul>
			<li v-for="(item,index) in icons_wrapper" :key="index">
				<view>
					<image :src="item.img" mode=""></image>
				</view>
				<p>{{item.text}}</p>
			</li>
		</ul>
	</view>
</template>

<script>
	import a from '@/static/img/home/1.png';
	import b from '@/static/img/home/2.png';
	import c from '@/static/img/home/3.png';
	import d from '@/static/img/home/4.png';
	import e from '@/static/img/home/5.png';
	export default {
		data() {
			return {
				icons_wrapper:[{
					img:a,
					text:'新品到货'
				},{
					img:b,
					text:'人气搭配'
				},{
					img:c,
					text:'折扣专区'
				},{
					img:d,
					text:'有货拼团'
				},{
					img:e,
					text:'全部分类'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.twoBar {
		margin-top: 20rpx;
		width: 100vw;
		box-sizing: border-box;
		padding: 15PX 0 15PX;
		background-size: 100% 100%;
		border-bottom: 1px solid #e0e0e0;

		li {
			display: inline-block;
			text-align: center;
			width: 20%;

			image {
				width: 80rpx;
				height: 80rpx;
			}
			p{
				font-size: 14rpx;
			}
		}

	}
</style>
