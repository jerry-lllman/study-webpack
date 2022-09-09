(() => { // webpackBootstrap
	// 模块存放在 __webpack_modules__ 这个数组中
	var __webpack_modules__ = ([
		/* 0 */, // 相当于是index.js
		/* 1 */
		((module) => {
			module.exports = (...args) => args.reduce((x, y) => x + y, 0)
		})
	]);
	
	// 模块缓存对象
	var __webpack_module_cache__ = {};

	// 模块加载函数
	function __webpack_require__(moduleId /* 模块id */) {
		// 检查模块是否已经在缓存中
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// 不在缓存中则创建一个模块对象，并将其放入到缓存中
		var module = __webpack_module_cache__[moduleId] = {
			exports: {}
		};

		// 执行这个要加载到模块函数
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

		// 返回导出的 exports 对象（当然不一定就是个对象，如果模块中将 module.exports = 1，那么就是返回 1）
		return module.exports;
	}

	var __webpack_exports__ = {};
	(() => {
		// 通过 __webpack_require__ 函数加载 模块 1（sum模块）
		const sum = __webpack_require__(1)

		console.log(sum(1, 2))
	})();

})()