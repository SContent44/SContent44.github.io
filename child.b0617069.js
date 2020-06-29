(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child"],{

/***/ "./src/Components/child/child.css":
/*!****************************************!*\
  !*** ./src/Components/child/child.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"component\":\"x8j42SK7jCZIAjmv9GsAC\"};\n\n//# sourceURL=webpack:///./src/Components/child/child.css?");

/***/ }),

/***/ "./src/Components/child/child.html":
/*!*****************************************!*\
  !*** ./src/Components/child/child.html ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<p data-bind=\\\"class: styles.component\\\">\\n    Child component:\\n    <i data-bind=\\\"text: childValue\\\"></i>\\n</p>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/child/child.html?");

/***/ }),

/***/ "./src/Components/child/index.js":
/*!***************************************!*\
  !*** ./src/Components/child/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _child_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child.html */ \"./src/Components/child/child.html\");\n/* harmony import */ var _child_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child.css */ \"./src/Components/child/child.css\");\n/* harmony import */ var _child_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_child_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar child = {\n  viewModel: function viewModel(params) {\n    this.childValue = params.childValue;\n    this.styles = _child_css__WEBPACK_IMPORTED_MODULE_1___default.a;\n  },\n  template: _child_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (child);\n\n//# sourceURL=webpack:///./src/Components/child/index.js?");

/***/ })

}]);