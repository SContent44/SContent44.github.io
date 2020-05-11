(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/Components/grandparent/grandparent.css":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/css-loader/dist/cjs.js!./src/Components/grandparent/grandparent.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".grandparent {\\r\\n    background-color: yellow;\\r\\n    color: purple;\\r\\n    margin: 20px;\\r\\n    padding: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Components/grandparent/grandparent.css?C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/grandparent/grandparent.css":
/*!****************************************************!*\
  !*** ./src/Components/grandparent/grandparent.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./grandparent.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/Components/grandparent/grandparent.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/Components/grandparent/grandparent.css?");

/***/ }),

/***/ "./src/Components/grandparent/grandparent.html":
/*!*****************************************************!*\
  !*** ./src/Components/grandparent/grandparent.html ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<p class=\\\"grandparent\\\">Grandparent component: <b data-bind=\\\"text: grandparentValue\\\"> </b></p>\\r\\n<hr />\\r\\n<parent params=\\\"parentValue: parentValue, childValue: childValue\\\"></parent>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/grandparent/grandparent.html?");

/***/ }),

/***/ "./src/Components/grandparent/index.js":
/*!*********************************************!*\
  !*** ./src/Components/grandparent/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grandparent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grandparent.html */ \"./src/Components/grandparent/grandparent.html\");\n/* harmony import */ var _grandparent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grandparent.css */ \"./src/Components/grandparent/grandparent.css\");\n/* harmony import */ var _grandparent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grandparent_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar grandparent = {\n  viewModel: function viewModel(params) {\n    this.grandparentValue = params.grandparentValue;\n    this.parentValue = params.parentValue;\n    this.childValue = params.childValue;\n  },\n  template: _grandparent_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (grandparent);\n\n//# sourceURL=webpack:///./src/Components/grandparent/index.js?");

/***/ })

}]);