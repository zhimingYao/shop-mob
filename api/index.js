import request from './@/utils/request.js'

// getShopList 返回值是什么?
export function getShopList(page){
	return request.get('/goodList',{
		page,
	})
}