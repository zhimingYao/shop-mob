import App from './App'

// 编译器的语法：https://uniapp.dcloud.net.cn/tutorial/platform.html

// #ifndef VUE3
import Vue from 'vue'
import ShopView from '@/components/ShopView/shopview.js'

App.mpType = 'app'
Vue.use(ShopView)

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
