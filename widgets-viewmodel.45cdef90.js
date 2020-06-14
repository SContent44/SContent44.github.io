(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-viewmodel"],{

/***/ "./src/viewmodels/widgets/widgets.html":
/*!*********************************************!*\
  !*** ./src/viewmodels/widgets/widgets.html ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<transition>\\r\\n    <section>\\r\\n        <h1>Widgets</h1>\\r\\n\\r\\n        <article>\\r\\n            <h2>Alerts</h2>\\r\\n\\r\\n            <div\\r\\n                data-bind=\\\"\\r\\n              widget: {\\r\\n                title:'Widgets work',\\r\\n                text:'This widget is re-usable',\\r\\n                kind:'Alert',\\r\\n                variant:'warning',\\r\\n            }\\\"\\r\\n            ></div>\\r\\n            <!-- ko Alert: {\\r\\n\\t\\t\\ttitle: \\\"Anyways, here are widget examples \\\",\\r\\n\\t\\t\\ttext: \\\"We can change the text to anything we want\\\",\\r\\n            variant: \\\"info\\\",\\r\\n\\t\\t}\\r\\n\\t\\t-->\\r\\n            <!-- /ko -->\\r\\n            <div\\r\\n                data-bind=\\\"\\r\\n              widget: {\\r\\n                title:'Widgets ',\\r\\n                text:'It seems odd we basically could just achieve the same as the compose binding by overriding with a model and/or view',\\r\\n                kind:'Alert',\\r\\n            }\\\"\\r\\n            ></div>\\r\\n        </article>\\r\\n    </section>\\r\\n</transition>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/widgets/widgets.html?");

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