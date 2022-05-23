// var __webpack_modules__ = ([
// /* 0 */,
//   /* 1 */
//   /*!****************!*\
//     !*** ./sum.js ***!
//     \****************/
//   /*! unknown exports (runtime-defined) */
//   /*! runtime requirements: module */
//   /*! CommonJS bailout: module.exports is used directly at 1:0-14 */
//   ((module) => {
//     module.exports = (...args) => args.reduce((x, y) => x + y, 0)
//   })
// ]);
// /************************************************************************/
// // The module cache
// var __webpack_module_cache__ = {};

// // The require function
// function __webpack_require__(moduleId) {
//   // Check if module is in cache
//   var cachedModule = __webpack_module_cache__[moduleId];
//   if (cachedModule !== undefined) {
//     return cachedModule.exports;
//   }
//   // Create a new module (and put it into the cache)
//   var module = __webpack_module_cache__[moduleId] = {
//     // no module.id needed
//     // no module.loaded needed
//     exports: {}
//   };

//   // Execute the module function
//   __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

//   // Return the exports of the module
//   return module.exports;
// }

// /************************************************************************/
// var __webpack_exports__ = {};
// // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
// (() => {
//   /*!******************!*\
//     !*** ./index.js ***!
//     \******************/
//   /*! unknown exports (runtime-defined) */
//   /*! runtime requirements: __webpack_require__ */
//   const sum = __webpack_require__(/*! ./sum */ 1)

//   console.log(sum(1, 2))
// })();

// 存放的模块，是一个数组
const __webpack_modules__ = [
  ,
  ((module) => {
    // sum.js 中的内容
    module.exports = (...args) => args.reduce((x, y) => x + y, 0)
  })
]

// 模块缓存（也就是说如果模块已经被引用过了就直接从这儿拿）
const __webpack_module_cache__ = {}

// moduleId 为 __webpack_modules__ 的下标
function __webpack_require__(moduleId) {
  // 如果能从缓存里面拿到，则直接返回
  const cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) return cachedModule.exports
  
  // 缓存内拿不到，则创建一个对象同时内部包含一个 exports 对象并存入到缓存内
  const module = __webpack_module_cache__[moduleId] = {
    exports: {}
  }
  
  // 接着通过执行 __webpack_modules__  中的moduleId对应函数并传入 module 对象
  // 通过函数内赋值 module.exports 获得 sum 函数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  
  // 最后返回 module 中的 exports 对象
  return module.exports
}

(() => {
  // index.js 中的内容
  const sum = __webpack_require__(1)

  console.log(sum(1, 2))
})();
