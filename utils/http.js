import axios from './@/utils/axios.js'

export default const serve = axios({
	baseUrl:'http://192.168.205.20:0528/api',
	timeOut: 5000
})

// 请求拦截器
serve.instans.request((config)=>{
	config.headers = {
		author:'admin-token'
	}
	return config
})

serve.instans.responest((res)=>{
	// 拦截服务器响应状态。
	
	// 对所有表示失败的验证码进行验证处理
	
	// 对token过期，无效token 登录师失效，进行拦截
	return res.data 
})