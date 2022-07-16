import request from '@/utils/request.js'

// 登录
export function getLogin(data) {
	return request.post('/user/login', data)
}
