<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
/* bug: uniapp 使用npm包引入文件坑 */
/* bug: uniapp 使用第三方库 样式文件需要在全局的css中导入 */
@import './node_modules/vant/lib/index.css';
	
	
	/*每个页面公共css */
</style>
