(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/Components/grandparent/grandparent.css":
/*!****************************************************!*\
  !*** ./src/Components/grandparent/grandparent.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"component\":\"_1Tpf_pubX37UZJzSR7S3P0\"};\n\n//# sourceURL=webpack:///./src/Components/grandparent/grandparent.css?");

/***/ }),

/***/ "./src/Components/grandparent/grandparent.html":
/*!*****************************************************!*\
  !*** ./src/Components/grandparent/grandparent.html ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<p data-bind=\\\"class: styles.component\\\">Grandparent component: <b data-bind=\\\"text: grandparentValue\\\"> </b></p>\\n<hr />\\n<parent params=\\\"parentValue: parentValue, childValue: childValue\\\"></parent>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/grandparent/grandparent.html?");

/***/ }),

/***/ "./src/Components/grandparent/index.js":
/*!*********************************************!*\
  !*** ./src/Components/grandparent/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grandparent_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grandparent.html */ \"./src/Components/grandparent/grandparent.html\");\n/* harmony import */ var _grandparent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grandparent.css */ \"./src/Components/grandparent/grandparent.css\");\n/* harmony import */ var _grandparent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grandparent_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar grandparent = {\n  viewModel: function viewModel(params) {\n    this.grandparentValue = params.grandparentValue;\n    this.parentValue = params.parentValue;\n    this.childValue = params.childValue;\n    this.styles = _grandparent_css__WEBPACK_IMPORTED_MODULE_1___default.a;\n  },\n  template: _grandparent_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (grandparent);\n\n//# sourceURL=webpack:///./src/Components/grandparent/index.js?");

/***/ })

}]);