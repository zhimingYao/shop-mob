<template>
	<div class="item">
<!-- 		<img :src="shop.img_list_url" alt="">
		<div>{{shop.title}}</div> -->
	</div>
</template>

<script>
	export default {
		name:'Shop',
		props: {
			shop: {
				type:Object,
				default(){
					return {
						img_list_url:'@/static/logo.png',
						id:123,
						title:'商品名称',
						price:'00'
					}
				}
			}
		}
	}
</script>

<style scoped>
	item{
		display: inline-block;
	}
</style>