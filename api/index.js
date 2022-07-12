import request from './@/utils/request.js'

// getShopList 返回值是什么?
export function getShopList(page){
	return request.get('/goodList',{
		page,
	})
	
	// return request.get的return
	// return newPromises实例对象
	// return {
	//  [[promiseState]]: Pending    promise状态
	//  [[PromiseResult]]:undefined,  表示程序运算结果
	// }
	
	// promise 异步:promiseState  PromiseResult 值更改是异步的
	// promiseState 当执行 resolve 或者reject 函数.更改
	//       resolve  pending---->fulfilled
	//               PromiseResult:undefine----> resolve 实参
	//       reject   pending --->rejected
	//               PromiseResult:undefine----> rejecth 实参
	// 结论
	// new promise 回调函数是同步的
	// then catch  回调函数是异步的
	
	
}