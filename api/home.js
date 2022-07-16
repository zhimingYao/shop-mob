import request from '@/utils/request.js'

/* 主页轮播图 */
export function getSwiper(){
    return request.post('/type/getSwiper')
}

/* 获取一级分类 */ 
export function getParentName(){
	return request.post('/type/getParentName')
}

// 获取一级分类下的商品
export function getProduct(data){
	return request.post('/type/getImg',data)
}