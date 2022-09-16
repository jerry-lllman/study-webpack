
const sum = (...args) => args.reduce((a, b) => a + b, 0)

export default sum

setTimeout(() => {
	// 假设 add 是一个巨大的 lib，那么就可以使用上 webpackPreload
	import(
		/* webpackChunkName: 'add' */
		/* webpackPreload: true */
		 './add').then(m => {
		console.log(m.default(1, 6))
	})
}, 3000)