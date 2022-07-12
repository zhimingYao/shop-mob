import App from './App'

// 编译器的语法：https://uniapp.dcloud.net.cn/tutorial/platform.html

// #ifndef VUE3
import Vue from 'vue'

App.mpType = 'app'

import test from '@/components/test/index.js'
// import SvgIcon from '@/components/SvgIcon/index.js'
Vue.use(test)
// Vue.use(SvgIcon)

const app = new Vue({
	...App
})
app.$mount()
// #endif

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
