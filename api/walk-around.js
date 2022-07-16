import request from "@/utils/request.js"

export function getTypeOneList(data){
	console.log('run')
	return request.post ('/type/getproduct',data)
}

export function getImg(data){
	console.log('run')
	return request.post ('/type/getImg',data)
}