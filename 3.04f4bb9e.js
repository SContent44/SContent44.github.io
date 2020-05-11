(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/Components/parent/parent.css":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/css-loader/dist/cjs.js!./src/Components/parent/parent.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".parent {\\r\\n    background-color: blue;\\r\\n    color: orange;\\r\\n    margin: 20px;\\r\\n    padding: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Components/parent/parent.css?C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/parent/index.js":
/*!****************************************!*\
  !*** ./src/Components/parent/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.html */ \"./src/Components/parent/parent.html\");\n/* harmony import */ var _parent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent.css */ \"./src/Components/parent/parent.css\");\n/* harmony import */ var _parent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parent_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar parent = {\n  /** Viewmodel\r\n   * @type { function }\r\n   */\n  viewModel: function viewModel(params) {\n    this.parentValue = params.parentValue;\n    this.childValue = params.childValue;\n  },\n\n  /** Template for the view\r\n   * @type { html }\r\n   */\n  template: _parent_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (parent);\n\n//# sourceURL=webpack:///./src/Components/parent/index.js?");

/***/ }),

/***/ "./src/Components/parent/parent.css":
/*!******************************************!*\
  !*** ./src/Components/parent/parent.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./parent.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/Components/parent/parent.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/Components/parent/parent.css?");

/***/ }),

/***/ "./src/Components/parent/parent.html":
/*!*******************************************!*\
  !*** ./src/Components/parent/parent.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<p class=\\\"parent\\\">Parent component: <b data-bind=\\\"text: parentValue\\\"></b></p>\\r\\n<hr />\\r\\n<child params=\\\"childValue: childValue\\\"></child>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/parent/parent.html?");

/***/ })

}]);