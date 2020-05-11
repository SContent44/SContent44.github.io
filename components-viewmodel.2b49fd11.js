(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-viewmodel"],{

/***/ "./src/viewmodels/ko-components/ko-components.html":
/*!*********************************************************!*\
  !*** ./src/viewmodels/ko-components/ko-components.html ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<section>\\r\\n    <h1>Knockout components</h1>\\r\\n    <p>Here are a few very basic components. These components each have their own template and their own stylesheet.</p>\\r\\n    <p>\\r\\n        The child component has a style for when:\\r\\n        <ul>\\r\\n          <li>It is displayed alone</li>\\r\\n          <li>It is nested under a parent</li>\\r\\n          <li>It is nested under a parent that is nested under a grandparent</li>\\r\\n        </ul>\\r\\n    </p>\\r\\n    <h2>Inputs</h2>\\r\\n    <p>Grandparent name: <input data-bind=\\\"value: $root.grandparentInput\\\" /></p>\\r\\n    <p>Parent name: <input data-bind=\\\"value: $root.parentInput\\\" /></p>\\r\\n    <p>Child name: <input data-bind=\\\"value: childInput\\\" /></p>\\r\\n\\r\\n    <h2>Grand parent (two nested components)</h2>\\r\\n    <grandparent\\r\\n        params=\\\"grandparentValue: grandparentDisplay, \\r\\n                parentValue: parentDisplay,\\r\\n                childValue: childDisplay\\\"\\r\\n    ></grandparent>\\r\\n\\r\\n    <h2>Parent (one nest component)</h2>\\r\\n    <parent params=\\\"parentValue: parentDisplay, childValue: childDisplay\\\"></parent>\\r\\n\\r\\n    <h2>Child component (no nested components)</h2>\\r\\n    <child params=\\\"childValue: childDisplay\\\"></child>\\r\\n</section>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/ko-components/ko-components.html?");

/***/ }),

/***/ "./src/viewmodels/ko-components/ko-components.js":
/*!*******************************************************!*\
  !*** ./src/viewmodels/ko-components/ko-components.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ko_components_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ko-components.html */ \"./src/viewmodels/ko-components/ko-components.html\");\n\n\n\nfunction ComponentViewModel() {\n  var _this = this;\n\n  this.view = _ko_components_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  this.grandparentInput = knockout__WEBPACK_IMPORTED_MODULE_0__[\"observable\"](\"Grandparent Name\").extend({\n    required: true\n  });\n  this.parentInput = knockout__WEBPACK_IMPORTED_MODULE_0__[\"observable\"](\"Parent Name\").extend({\n    required: true\n  });\n  this.childInput = knockout__WEBPACK_IMPORTED_MODULE_0__[\"observable\"](\"Child Name\").extend({\n    required: true\n  });\n  this.grandparentDisplay = knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n    return _this.grandparentInput();\n  }, this);\n  this.parentDisplay = knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n    return _this.parentInput();\n  }, this);\n  this.childDisplay = knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n    return _this.childInput();\n  }, this);\n}\n\nvar Component = new ComponentViewModel();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/viewmodels/ko-components/ko-components.js?");

/***/ })

}]);