// 1:普通函数二次封装
// request.get('',{}).then((c    式
// 2：请求拦截器
// 3：响应拦截器，对服务器返回状态码统一拦截，统一处理
let baseUrl = 'http://192.168.205.20:9528/api'
export default {
	get(url,data){
		return new Promise((resolve,reject)=>{
			uni.request({
				data,
				url:baseUrl+url,
			    method: 'get',
				header:{}, // 配置token
				success:(data)=>{
					// 这里做响应拦截
					resolve(data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	post(url,data){
		return new Promise((resolve,reject)=>{
			uni.request({
				data,
				url:baseUrl+url,
			    method: 'post',
				header:{}, // 配置token
				success:(data)=>{
					// 这里做响应拦截
					resolve(data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	// request.http({})
	http( {url,method,data} ){
		if(method==='get'){
			// this 是什么？？
			this.get(url,data)
		}else{
			this.post(url,data)
		}
	}
}


// 2 class 类型
// 判断this赋值什么对象的逻辑是什么？
// 第一步：看this写在哪里？
//   箭头函数
//   function函数
// 第二步：function函数：看谁触发函数？
// 2.1 call apply bind 触发,this === 实参一实例对象
// 2.2 new  触发  this === new返回额实例对象
// 2.3 事件触发   this === 触发/绑定事件的dom
// 2.4 普通对象触发   this === 调用函数的对象
// 第三步:箭头函数:看距离他最近的那成this





export class http {
	constructor(url,method,data){
		
	}
}