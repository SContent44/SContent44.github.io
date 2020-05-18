(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["router-viewmodel"],{

/***/ "./src/viewmodels/router/index.html":
/*!******************************************!*\
  !*** ./src/viewmodels/router/index.html ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<section id=\\\"async\\\">\\n    <header><h3>Router</h3></header>\\n\\n    <article>\\n        <header><h4>How?</h4></header>\\n        <p>\\n            Typically Durandals <code>router</code> module requires you to specify a\\n            <code>moduleId</code>\\n            for each route.\\n        </p>\\n\\n        <p>\\n            To allow Webpack to know these are actual module dependencies, we instead set each\\n            <code>moduleId</code> to a function that returns the actual ViewModel instance instead.\\n        </p>\\n    </article>\\n    <br />\\n\\n    <article>\\n        <header><h4>Asynchronous Routes</h4></header>\\n\\n        <ul class=\\\"nav nav-tabs\\\" data-bind=\\\"foreach: router.navigationModel\\\">\\n            <li data-bind=\\\"css: { active: isActive }\\\">\\n                <a data-bind=\\\"attr: { href: hash }, html: title\\\"></a>\\n            </li>\\n        </ul>\\n\\n        <div\\n            class=\\\"container\\\"\\n            style=\\\"padding-top: 20px;\\\"\\n            data-bind=\\\"router: { transition: 'fadeIn', cacheViews: true }\\\"\\n        ></div>\\n    </article>\\n</section>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/router/index.html?");

/***/ }),

/***/ "./src/viewmodels/router/index.js":
/*!****************************************!*\
  !*** ./src/viewmodels/router/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"../../node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var durandal_plugins_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! durandal/plugins/router */ \"../durandal-es6/plugins/router.js\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ \"./src/viewmodels/router/index.html\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/viewmodels/router/routes.js\");\n\n\n\n\nvar Index = {\n  view: _index_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nIndex.router = durandal_plugins_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createChildRouter().makeRelative({\n  fromParent: true\n}).map(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).buildNavigationModel();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/viewmodels/router/index.js?");

/***/ }),

/***/ "./src/viewmodels/router/routes.js":
/*!*****************************************!*\
  !*** ./src/viewmodels/router/routes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ \"../../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _viewmodels_how_how__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewmodels/how/how */ \"./src/viewmodels/router/viewmodels/how/how.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  route: \"\",\n  title: \"How\",\n  moduleId: function hows() {\n    return _viewmodels_how_how__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  },\n  moduleName: \"How\",\n  nav: true\n}, {\n  route: \"nested\",\n  title: \"Nested async route\",\n  moduleId: function nested() {\n    return __webpack_require__.e(/*! import() | nested-async-route */ \"nested-async-route\").then(__webpack_require__.bind(null, /*! ./viewmodels/nested/nested */ \"./src/viewmodels/router/viewmodels/nested/nested.js\"));\n  },\n  nav: true\n}]);\n\n//# sourceURL=webpack:///./src/viewmodels/router/routes.js?");

/***/ }),

/***/ "./src/viewmodels/router/viewmodels/how/how.html":
/*!*******************************************************!*\
  !*** ./src/viewmodels/router/viewmodels/how/how.html ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<div>\\n    <p>\\n        We also are able to split our routes from the main application into asynchronous routes using\\n        <code>dynamic imports</code>.\\n    </p>\\n    <p>\\n        This child route is a <code>static import</code> for the parent route so it is bundled together with it, however\\n        the parent route is <code>dynamically imported</code> so it's split from our main applications bundle.\\n    </p>\\n    <p>\\n        You can see this in action if you open the developer console and click on the do a refresh of this page without\\n        caching.\\n    </p>\\n</div>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/router/viewmodels/how/how.html?");

/***/ }),

/***/ "./src/viewmodels/router/viewmodels/how/how.js":
/*!*****************************************************!*\
  !*** ./src/viewmodels/router/viewmodels/how/how.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _how_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how.html */ \"./src/viewmodels/router/viewmodels/how/how.html\");\n\nvar How = {\n  view: _how_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (How);\n\n//# sourceURL=webpack:///./src/viewmodels/router/viewmodels/how/how.js?");

/***/ })

}]);