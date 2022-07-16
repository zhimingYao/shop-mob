import request from "@/utils/request.js"

// 获取一级分类
export function getParentName(data){
	console.log('run')
	return request.post ('/type/getParentName',data)
}

// 获取二级分类
export function getSecond(data){
	console.log('run')
	return request.post ('/wares/getSecond',data)
}