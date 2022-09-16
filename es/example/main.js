(() => { // webpackBootstrap
	"use strict";
	var __webpack_modules__ = ([
		/* 0 */,
		/* 1 */
		((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			// 标记是 ESM
			__webpack_require__.r(__webpack_exports__);
			// 设置模块 exports 值
			__webpack_require__.d(__webpack_exports__, {
				// 注意这里的值是个函数，会跟 __webpack_require__.d 方法中的 Object.defineProperty 的 getter 配合使用
				"default": () => (__WEBPACK_DEFAULT_EXPORT__),
				"name": () => (/* binding */ name)
			});
			const sum = (...args) => args.reduce((x, y) => x + y, 0)

			// 默认导出 export default
			const __WEBPACK_DEFAULT_EXPORT__ = (sum);

			let name = 'sum'
		})
	]);

	// 模块缓存
	var __webpack_module_cache__ = {};

	//  require
	function __webpack_require__(moduleId) {
		// 检查模块是否在缓存
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// 创建一个新模块，并将其放入到缓存中
		var module = __webpack_module_cache__[moduleId] = {
			exports: {}
		};

		// 执行模块函数
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

		// 返回模块
		return module.exports;
	}

	(() => {
		// 使用 getter 用以定义 exports 的属性
		__webpack_require__.d = (exports, definition) => {
			for (var key in definition) {
				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
				}
			}
		};
	})();

	(() => {
		// Object.prototype.hasOwnProperty 的简写
		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
	})();

	(() => {
		// exports.__esModule = true，用以标记一个 ESM 模块
		__webpack_require__.r = (exports) => {
			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();
	
	var __webpack_exports__ = {};
	
	(() => {
		__webpack_require__.r(__webpack_exports__);
		// 加载模块，并返回模块内容
		var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

		console.log((0, _sum__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 4))
		console.log(_sum__WEBPACK_IMPORTED_MODULE_0__.name)
		console.log(_sum__WEBPACK_IMPORTED_MODULE_0__)
	})();

})();

// __webpack_require__    ：用于加载模块
// __webpack_require__.d  ：使用 getter 用以定义 exports 的属性
// __webpack_require__.o  ：Object.prototype.hasOwnProperty
// __webpack_require__.r  ：用来标记是 ESM