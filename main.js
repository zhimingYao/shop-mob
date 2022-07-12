import App from './App'

// 编译器的语法：https://uniapp.dcloud.net.cn/tutorial/platform.html

// 没有注释表示所有平台都编译。
// ifndef 平台关键字  表示：如果不是某个运行平台。则编译下面代码
// #ifndef VUE3
import Vue from 'vue'
// import request from '@/utils/request.js'

// #ifdef H5
console.log('如何使用vant开发')
// import Vant from 'vant';
// Vue.use(Vant)
// #endif
// 将一个独立模块如何挂在到全局上
// Vue.prototype.$aixos = request

App.mpType = 'app'
// import test from '@/components/test/test.vue'
// Vue.component('iarco-test',test)
import test from '@/components/test/index.js'
Vue.use(test)

const app = new Vue({
	...App
})
app.$mount()
// #endif

// endif   表示：上面平台代码 编译结束

// ifdef 平台关键字  表示：下面代码支持哪个平台
//  表示：如果运行平台是vue3 者编译下面代码
// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
