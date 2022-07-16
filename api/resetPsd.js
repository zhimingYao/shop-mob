import request from '@/utils/request.js'

// 登录
export function changePassword(data) {
	return request.post('/user/changePassword', data)
}