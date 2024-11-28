/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactContent.js":
/*!*******************************!*\
  !*** ./src/contactContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactContent: () => (/* binding */ contactContent)\n/* harmony export */ });\nlet contactContent = document.createElement(\"div\");\r\n\r\nlet heading = document.createElement(\"h1\");\r\nheading.innerText=\"Contact Us\";\r\ncontactContent.appendChild(heading);\r\n\r\nlet paragraph = document.createElement(\"p\");\r\nparagraph.innerText=\"Phone: 226-747-4748\";\r\ncontactContent.appendChild(paragraph);\r\n\r\nlet paragraph2 = document.createElement(\"p\");\r\nparagraph2.innerText=\"E-mail: arestauran@restaurant.com\";\r\ncontactContent.appendChild(paragraph2);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/contactContent.js?");

/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeContent: () => (/* binding */ homeContent)\n/* harmony export */ });\nlet homeContent = document.createElement(\"div\");\r\n\r\nlet heading = document.createElement(\"h1\");\r\nheading.innerText=\"A Restaurant\";\r\nhomeContent.appendChild(heading);\r\n\r\nlet heading2 = document.createElement(\"h2\");\r\nheading2.innerText=\"For when you want to go to a restaurant\";\r\nhomeContent.appendChild(heading2);\r\n\r\nlet paragraph = document.createElement(\"p\");\r\nparagraph.innerText=\"We have food. We have drinks. You can eat and drink them here after paying our reasonable prices.\";\r\nhomeContent.appendChild(paragraph);\r\n\r\nlet paragraph2 = document.createElement(\"p\");\r\nparagraph2.innerText=\"We are open during business hours and closed outside of business hours.\";\r\nhomeContent.appendChild(paragraph2);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/homeContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContent.js */ \"./src/homeContent.js\");\n/* harmony import */ var _menuContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuContent.js */ \"./src/menuContent.js\");\n/* harmony import */ var _contactContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactContent.js */ \"./src/contactContent.js\");\n\r\n\r\n\r\n\r\n\r\nfunction showHome(){\r\n    let content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_homeContent_js__WEBPACK_IMPORTED_MODULE_0__.homeContent);\r\n}\r\n\r\nfunction showMenu(){\r\n    let content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_menuContent_js__WEBPACK_IMPORTED_MODULE_1__.menuContent);\r\n}\r\n\r\nfunction showContact(){\r\n    let content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_contactContent_js__WEBPACK_IMPORTED_MODULE_2__.contactContent);\r\n}\r\n\r\n\r\n// add events to nav buttons\r\nlet home = document.getElementById(\"home\");\r\nhome.addEventListener(\"click\", showHome);\r\n\r\ndocument.getElementById(\"menu\").addEventListener(\"click\", showMenu);\r\ndocument.getElementById(\"contact\").addEventListener(\"click\", showContact);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuContent: () => (/* binding */ menuContent)\n/* harmony export */ });\nlet menuContent = document.createElement(\"div\");\r\n\r\nlet heading = document.createElement(\"h1\");\r\nheading.innerText=\"Menu\";\r\nmenuContent.appendChild(heading);\r\n\r\nlet heading2 = document.createElement(\"h2\");\r\nheading2.innerText=\"Starters\";\r\nmenuContent.appendChild(heading2);\r\n\r\nlet paragraph = document.createElement(\"p\");\r\nparagraph.innerText=\"Artichoke dip\";\r\nmenuContent.appendChild(paragraph);\r\n\r\nlet paragraph2 = document.createElement(\"p\");\r\nparagraph2.innerText=\"Caesar Salad\";\r\nmenuContent.appendChild(paragraph2);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/menuContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;