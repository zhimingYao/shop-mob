import request from './@/utils/request.js'

export function login(data){
	return request.post('/user/login',data)
}

export function register(data){
	return request.post('/user/register',data)
}

export function infoModify(data){
	return request.post('/user/infoModify',data)
}

export function getproduct(data){
	return request.post('/type/getproduct',data)
}