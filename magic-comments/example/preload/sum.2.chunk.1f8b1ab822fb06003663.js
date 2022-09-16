"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2],[
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const sum = (...args) => args.reduce((a, b) => a + b, 0)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);

setTimeout(() => {
	// 假设 add 是一个巨大的 lib，那么就可以使用上 webpackPreload
	__webpack_require__.e(/* import() | add */ 0).then(__webpack_require__.bind(__webpack_require__, 2)).then(m => {
		console.log(m.default(1, 6))
	})
}, 3000)

/***/ })
]]);