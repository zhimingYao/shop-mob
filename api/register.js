import request from '@/utils/request.js'

// 获取6位随机数
// export function getMessage(data) {
// 	return request.post('/user/getMessage', data)
// }

// 注册
export function getRegister(data) {
	return request.post('/user/register', data)
}