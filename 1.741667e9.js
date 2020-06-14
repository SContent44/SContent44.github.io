(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/Components/parent/index.js":
/*!****************************************!*\
  !*** ./src/Components/parent/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent.html */ \"./src/Components/parent/parent.html\");\n/* harmony import */ var _parent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent.css */ \"./src/Components/parent/parent.css\");\n/* harmony import */ var _parent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parent_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar parent = {\n  /** Viewmodel\n   * @type { function }\n   */\n  viewModel: function viewModel(params) {\n    this.parentValue = params.parentValue;\n    this.childValue = params.childValue;\n    this.styles = _parent_css__WEBPACK_IMPORTED_MODULE_1___default.a;\n  },\n\n  /** Template for the view\n   * @type { html }\n   */\n  template: _parent_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (parent);\n\n//# sourceURL=webpack:///./src/Components/parent/index.js?");

/***/ }),

/***/ "./src/Components/parent/parent.css":
/*!******************************************!*\
  !*** ./src/Components/parent/parent.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"component\":\"_2pc4LiqMRBqRasQ1clOEHk\"};\n\n//# sourceURL=webpack:///./src/Components/parent/parent.css?");

/***/ }),

/***/ "./src/Components/parent/parent.html":
/*!*******************************************!*\
  !*** ./src/Components/parent/parent.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<p data-bind=\\\"class: styles.component\\\">Parent component: <b data-bind=\\\"text: parentValue\\\"></b></p>\\n<hr />\\n<child params=\\\"childValue: childValue\\\"></child>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/parent/parent.html?");

/***/ })

}]);