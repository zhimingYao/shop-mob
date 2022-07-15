import Vue from 'vue'
import ShopView from './shopview.vue'

export default {
	install(Vue){
		Vue.component('shop-view',ShopView)
	}
}