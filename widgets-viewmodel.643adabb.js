(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-viewmodel"],{

/***/ "./src/viewmodels/widgets/widgets.html":
/*!*********************************************!*\
  !*** ./src/viewmodels/widgets/widgets.html ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<section>\\n    <h1>Widgets</h1>\\n\\n    <article>\\n        <h2>Alerts</h2>\\n\\n        <div\\n            data-bind=\\\"\\n              widget: {\\n                title:'Widgets work',\\n                text:'This widget is re-usable',\\n                kind:'Alert',\\n                variant:'warning',\\n            }\\\"\\n        ></div>\\n        <!-- ko Alert: {\\n\\t\\t\\ttitle: \\\"Anyways, here are widget examples \\\",\\n\\t\\t\\ttext: \\\"We can change the text to anything we want\\\",\\n            variant: \\\"info\\\",\\n\\t\\t}\\n\\t\\t-->\\n        <!-- /ko -->\\n        <div\\n            data-bind=\\\"\\n              widget: {\\n                title:'Widgets ',\\n                text:'It seems odd we basically could just achieve the same as the compose binding by overriding with a model and/or view',\\n                kind:'Alert',\\n            }\\\"\\n        ></div>\\n    </article>\\n</section>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/widgets/widgets.html?");

/***/ }),

/***/ "./src/viewmodels/widgets/widgets.js":
/*!*******************************************!*\
  !*** ./src/viewmodels/widgets/widgets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.html */ \"./src/viewmodels/widgets/widgets.html\");\n\nvar Widgets = {\n  view: _widgets_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\n\n//# sourceURL=webpack:///./src/viewmodels/widgets/widgets.js?");

/***/ })

}]);