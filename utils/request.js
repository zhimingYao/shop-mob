// 1:普通函数二次封装
// request.get('',{}).then((c    式
// 2：请求拦截器
// 3：响应拦截器，对服务器返回状态码统一拦截，统一处理
let baseUrl = 'http://192.168.205.61:3000'
export default {
	get(url, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				data,
				url: baseUrl + url,
				method: 'get',
				header: {}, // 配置token
				success: (res) => {
					// 这里做响应拦截
					resolve(res.data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	post(url, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				data,
				url: baseUrl + url,
				method: 'post',
				header: {}, // 配置token
				success: (res) => {
					// 这里做响应拦截
					resolve(res.data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	// request.http({})
	http({
		url,
		method,
		data
	}) {
		if (method === 'get') {
			// this 是什么？？
			this.get(url, data)
		} else {
			this.post(url, data)
		}
	}
}



export class http {
	constructor(url, method, data) {

	}
}
