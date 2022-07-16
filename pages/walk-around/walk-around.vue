<template>
	<view>
		<view class="top">
			<img src="http://img11.static.yhbimg.com/yhb-img01/2017/04/28/13/0195a172b6ec4c098533f4c5c082fad146.jpg?imageView2/2/w/640/h/240/q/60"
				mode="" />
		</view>
		<view class="content">
			<view class="tab">
				<ul>
					<block v-for="(item,index) in list1" :key="index">
						<li @click="clickLis(item,index)" :class="{fontcolor:cur==index}">{{item}}</li>
					</block>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getTypeOneList,
		getImg
	} from '@/api/walk-around.js'
	export default {
		data() {
			return {
				today: '',
				list: ["本周上新", "销量", "筛选"],
				fontcolor: false,
				cur: false,
				todayShop: [],
				weekShop: [],
				sortShop: []
			}
		},
		methods: {
			clickLis(item, index) {
				// console.log(data);
				// 点击时，添加样式 字体变黑
				this.cur = index;
				// 接收item 根据item 发送请求 获取数据 及渲染
				// if (item == )
				// today

			},
			async getTypeOneList_(parent_name) {
				const res = await getTypeOneList(parent_name);
				// this.todayShop = res.res[0];
			},
			// 本周上新
			async getTypeOneList_w(parent_name) {
				const res = await getTypeOneList(parent_name);
				// let data = res.res.slice(20, 25);
				// this.weekShop = this.weekShop.concat(data);
			},
			// 销量
			async getImg_(parent_name, start, end, sort_) {
				const res = await getImg(parent_name, start, end, sort_);
				// this.sortShop = this.sortShop.concat(res);
			},
		},
		created() {
			let dayGood = ["鞋类"];
			this.getTypeOneList_(dayGood);
			let weekGoods = ["鞋类", "服饰", "配件", "儿童专区"];
			weekGoods.forEach((item) => {
				this.getTypeOneList_w(item);
			});
			let sortGoods = ["鞋类", "服饰", "配件", "儿童专区"];
			sortGoods.forEach((item) => {
				this.getImg_(item, 1, 2, "price");
			});
		},
		onShow() {
			let date = new Date();
			let month = String(date.getMonth() + 1);
			let day = String(date.getDate());
			this.today = month + "月" + day + '日';
		},
		computed: {
			list1() {
				let res = [];
				res.push(String(this.today));
				for (let i = 0; i < this.list.length; i++) {
					res.push(this.list[i])
				}
				return res;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		text-align: center;

		img {
			width: 100%;
		}
	}

	.content {
		.tab {
			border-bottom: 1px solid #dfdfdf;

			ul {
				display: flex;
				justify-content: space-around;

				li {
					color: #c7c7c7;
					height: 50rpx;
					line-height: 50rpx;
					position: relative;

					&:nth-child(4)::after {
						display: block;
						content: "";
						width: 0px;
						height: 0px;
						border: 8px solid transparent;
						border-top-color: #a7a7a7;
						position: absolute;
						top: 20rpx;
						left: 50rpx
					}
				}

				.fontcolor {
					color: #000;
				}

			}
		}
	}
</style>
