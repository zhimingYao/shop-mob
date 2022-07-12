export default class Request {
	constructor(options) {
		let {
			baseUrl,
			url,
			method,
			timeOut,
			headers
		} = options;
		this.options = options;
		this.baseUrl = baseUrl;
		// this.url = url || '';
		// this.method = method;
		this.timeOut = timeOut || 2000;
		this.headers = headers || {};
		// this.a = null;
		// this.b = null
		this.instance = {
			request(callback) {
				// callback 请求之前执行
				// callback 实参，请求体
				// 难题1:callback 是异步执行的.所有的请求都会执行,request执行一次 callback可能执行多次??
				// 难题2:怎么在request函数外部,Request类内部,获取callback函数
				// request.a = callback;
				// this.a = callback

				Request.a = callback;
			},
			response(callback) {
				// 响应时候执行
				// callback 实参是响应报文
				Request.b = callback;
				// this.b = callback

			}
		}
	}

	static a = null
	static b = null
	get(url, data) {
		return new Promise((resolve, reject) => {
			let res = request.a(this.options); // 执行请求拦截器
			// 请求拦截器中如果没有返回值 不发送去请i去
			if (!res) return;
			uni.request({
				url: res.baseUrl+url,
				method: 'get',
				data: res.data,
				header: res.headers,
				success: (res) => {
					// 执行响应拦截器
					let result = request.b(res)
					if (result) {
						reject(new Error('promise errr'))
						return
					}
					// 服务器响应了
					resolve(result)
				},
				fail: (err) => {
					reject(err)
				}
			})

		})

	}
	post(url, data) {
		return new Promise((resolve, reject) => {
			let res = request.a(this.options); // 执行请求拦截器
			// 请求拦截器中如果没有返回值 不发送去请i去
			if (!res) return
			uni.request({
				url: res.baseUrl + url,
				method: 'post',
				data,
				header: this.headers,
				success: (res) => {
					// 执行响应拦截器
					let result = request.b(res)
					if (!result) {
						reject(new Error('promise errr 拦截器没有return返回值'))
					}else{
						// 服务器响应了
						resolve(result)
					}
			

				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	}

}


// let serve = new RequestRequest({
// 	baseUrl: '',
// 	url: '',
// 	method: '',
// 	timeOut: 200,

// 	headers: {},
// 	// ...
// })


// serve({}) ????

// serve.get('url', {})
// serve.post()

// serve.instans.request(() => {
// 	// 请求之前执行
// })

// serve.instans.response(() => {
// 	// 响应拦截器
// })