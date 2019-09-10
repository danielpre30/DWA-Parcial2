/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n\n\nconst el = document.createElement('div');\nconst objAttr = {\n  class: 'inn-container home'\n};\nlet total = 2500701;\nconst children = [Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('img', {\n  class: 'home__img',\n  src: 'https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg',\n  alt: 'Model'\n}), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('p', {\n  class: 'home__username'\n}, ['Hello, Pamela']), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div', {\n  class: 'home__amount'\n}, [`<span>${total}</span>`, Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('p', {\n  class: 'home__amount--info'\n}, ['Total Amount'])]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('section', {\n  class: 'home__buttons'\n}, [`<button id=\"btn-right\">WITHDRAW 10000</button>`, `<button id=\"btn-left\">WITHDRAW 5000</button>`])];\nconst app = Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(el, objAttr, children);\nconsole.log(app);\nconst root = document.getElementById('root');\nroot.appendChild(app); // Calculate\n\nconst btnRight = document.getElementById('btn-right');\nconst btnLeft = document.getElementById('btn-left');\nconst withDrawRight = 1000;\nconst withDrawLeft = 5000;\nconst ammount = document.querySelector('.home__amount');\n\nfunction updateAccountNode(withdraw) {\n  total -= withdraw;\n  const newTotalNode = document.createElement('span');\n  newTotalNode.innerHTML = total;\n  ammount.replaceChild(newTotalNode, ammount.firstChild);\n}\n\nbtnRight.addEventListener('click', e => {\n  e.preventDefault();\n  updateAccountNode(withDrawRight);\n});\nbtnLeft.addEventListener('click', e => {\n  e.preventDefault();\n  updateAccountNode(withDrawLeft);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2NzcydcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vanMvdXRpbHMnXHJcblxyXG5jb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IG9iakF0dHIgPSB7IGNsYXNzOiAnaW5uLWNvbnRhaW5lciBob21lJyB9XHJcbmxldCB0b3RhbCA9IDI1MDA3MDFcclxuXHJcbmNvbnN0IGNoaWxkcmVuID0gW1xyXG4gIGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcclxuICAgIGNsYXNzOiAnaG9tZV9faW1nJyxcclxuICAgIHNyYzogJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMDgvMjgvMDgvMzEvbW9kZWwtNDI5NzMzXzk2MF83MjAuanBnJyxcclxuICAgIGFsdDogJ01vZGVsJ1xyXG4gIH0pLFxyXG4gIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAnaG9tZV9fdXNlcm5hbWUnIH0sIFsnSGVsbG8sIFBhbWVsYSddKSxcclxuICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaG9tZV9fYW1vdW50JyB9LCBbXHJcbiAgICBgPHNwYW4+JHt0b3RhbH08L3NwYW4+YCxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7IGNsYXNzOiAnaG9tZV9fYW1vdW50LS1pbmZvJyB9LCBbXHJcbiAgICAgICdUb3RhbCBBbW91bnQnXHJcbiAgICBdKVxyXG4gIF0pLFxyXG4gIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7IGNsYXNzOiAnaG9tZV9fYnV0dG9ucycgfSwgW1xyXG4gICAgYDxidXR0b24gaWQ9XCJidG4tcmlnaHRcIj5XSVRIRFJBVyAxMDAwMDwvYnV0dG9uPmAsXHJcbiAgICBgPGJ1dHRvbiBpZD1cImJ0bi1sZWZ0XCI+V0lUSERSQVcgNTAwMDwvYnV0dG9uPmBcclxuICBdKVxyXG5dXHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVFbGVtZW50KGVsLCBvYmpBdHRyLCBjaGlsZHJlbilcclxuXHJcbmNvbnNvbGUubG9nKGFwcClcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbnJvb3QuYXBwZW5kQ2hpbGQoYXBwKVxyXG5cclxuLy8gQ2FsY3VsYXRlXHJcbmNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1yaWdodCcpXHJcbmNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWxlZnQnKVxyXG5jb25zdCB3aXRoRHJhd1JpZ2h0ID0gMTAwMFxyXG5jb25zdCB3aXRoRHJhd0xlZnQgPSA1MDAwXHJcbmNvbnN0IGFtbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fYW1vdW50JylcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUFjY291bnROb2RlICh3aXRoZHJhdykge1xyXG4gIHRvdGFsIC09IHdpdGhkcmF3XHJcbiAgY29uc3QgbmV3VG90YWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgbmV3VG90YWxOb2RlLmlubmVySFRNTCA9IHRvdGFsXHJcbiAgYW1tb3VudC5yZXBsYWNlQ2hpbGQobmV3VG90YWxOb2RlLCBhbW1vdW50LmZpcnN0Q2hpbGQpXHJcbn1cclxuXHJcbmJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgdXBkYXRlQWNjb3VudE5vZGUod2l0aERyYXdSaWdodClcclxufSlcclxuXHJcbmJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICB1cGRhdGVBY2NvdW50Tm9kZSh3aXRoRHJhd0xlZnQpXHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: addAttributes, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAttributes\", function() { return addAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/**\r\n * Add attributes to an HTMLElement instance\r\n * \r\n * @param {HTMLElement} el an HTMLInstance\r\n * @param  {object} objAttr attributes of HTML elements\r\n * @example\r\n * \r\n * const el = document.createElement('div')\r\n * addAttributes(el, { class: 'root' })\r\n * <div class=\"root\"></div>\r\n */\nfunction addAttributes(el, objAttr) {\n  Object.keys(objAttr).forEach(attr => {\n    el.setAttribute(attr, objAttr[attr]);\n  });\n}\n/**\r\n * @param {HTMLElement || string} type type of HTML element\r\n * @param {object} objAttr attributes of HTML elements\r\n * @param {Array} children children of this element\r\n * @returns {HTMLElement} HTML elements and their children\r\n */\n\nfunction createElement(type, objAttr, children) {\n  const el = type instanceof HTMLElement ? type : document.createElement(type);\n  addAttributes(el, objAttr);\n\n  if (children && children.length >= 0) {\n    children.forEach(child => {\n      child instanceof HTMLElement ? el.appendChild(child) : el.innerHTML += child;\n    });\n  }\n\n  return el;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanM/OTk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWRkIGF0dHJpYnV0ZXMgdG8gYW4gSFRNTEVsZW1lbnQgaW5zdGFuY2VcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIGFuIEhUTUxJbnN0YW5jZVxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9iakF0dHIgYXR0cmlidXRlcyBvZiBIVE1MIGVsZW1lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqIFxyXG4gKiBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAqIGFkZEF0dHJpYnV0ZXMoZWwsIHsgY2xhc3M6ICdyb290JyB9KVxyXG4gKiA8ZGl2IGNsYXNzPVwicm9vdFwiPjwvZGl2PlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZXMgKGVsLCBvYmpBdHRyKSB7XHJcbiAgT2JqZWN0LmtleXMob2JqQXR0cikuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIG9iakF0dHJbYXR0cl0pXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfHwgc3RyaW5nfSB0eXBlIHR5cGUgb2YgSFRNTCBlbGVtZW50XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpBdHRyIGF0dHJpYnV0ZXMgb2YgSFRNTCBlbGVtZW50c1xyXG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlbiBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBIVE1MIGVsZW1lbnRzIGFuZCB0aGVpciBjaGlsZHJlblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIG9iakF0dHIsIGNoaWxkcmVuKSB7XHJcbiAgY29uc3QgZWwgPSB0eXBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcclxuICAgID8gdHlwZVxyXG4gICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgXHJcbiAgYWRkQXR0cmlidXRlcyhlbCwgb2JqQXR0cilcclxuXHJcbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+PSAwKSB7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XHJcbiAgICAgICAgPyBlbC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICA6IGVsLmlubmVySFRNTCArPSBjaGlsZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBlbFxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzM5ODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/styles.scss\n");

/***/ })

/******/ });