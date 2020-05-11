(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["binding-viewmodel"],{

/***/ "./src/viewmodels/binding/binding.html":
/*!*********************************************!*\
  !*** ./src/viewmodels/binding/binding.html ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<section>\\r\\n    <h1>Using the compose binding</h1>\\r\\n    <p>Shared context input: <input data-bind=\\\"value: $root.sharedInput\\\" /></p>\\r\\n    <p>Own context input: <input data-bind=\\\"value: $root.ownInput\\\" /></p>\\r\\n\\r\\n    <h2>Shared context</h2>\\r\\n    <p>\\r\\n        <code>data-bind=\\\"compose:sharedVMScreen</code> where <code>sharedVMScreen</code> is the just the html template\\r\\n        directly passed in.\\r\\n    </p>\\r\\n    <div data-bind=\\\"compose:sharedVMScreen\\\"></div>\\r\\n\\r\\n    <h2>Own context with a function that returns an object</h2>\\r\\n    <p>\\r\\n        <code>data-bind=\\\"compose:ownVMScreen()</code> where <code>ownVMScreen()</code> is a function that return an\\r\\n        object with which has a view property on it.\\r\\n    </p>\\r\\n    <div data-bind=\\\"compose:ownVMScreen()\\\"></div>\\r\\n\\r\\n    <h2>Own context that is an object</h2>\\r\\n    <p>\\r\\n        <code>data-bind=\\\"compose:anotherOwnVMScreen</code> where <code>anotherOwnVMScreen</code> is an object with which\\r\\n        has a view property on it.\\r\\n    </p>\\r\\n    <div data-bind=\\\"compose:anotherOwnVMScreen\\\"></div>\\r\\n</section>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/binding/binding.html?");

/***/ }),

/***/ "./src/viewmodels/binding/binding.js":
/*!*******************************************!*\
  !*** ./src/viewmodels/binding/binding.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _binding_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding.html */ \"./src/viewmodels/binding/binding.html\");\n/* harmony import */ var _dynamic_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic.html */ \"./src/viewmodels/binding/dynamic.html\");\n\n\n\n\nfunction BindingViewModel() {\n  var _this = this;\n\n  this.view = _binding_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // Composing a view that does not have it's own viewmodel by just passing view in directly.\n\n  this.sharedVMScreen = _dynamic_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  this.someData = knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n    return _this.sharedInput();\n  }, this); // Function that returns object\n\n  this.ownVMScreen = function () {\n    var obj = {\n      model: {\n        someData: knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n          return _this.ownInput();\n        }, _this),\n        viewName: \"ownVMScreen\"\n      },\n      view: _dynamic_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    };\n    return obj;\n  }; // Input for each of the someData values\n\n\n  this.sharedInput = knockout__WEBPACK_IMPORTED_MODULE_0__[\"observable\"](\"Shares parent context\").extend({\n    required: true\n  });\n  this.ownInput = knockout__WEBPACK_IMPORTED_MODULE_0__[\"observable\"](\"Own binding context\").extend({\n    required: true\n  });\n  this.anotherOwnVMScreen = {\n    view: _dynamic_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    model: {\n      someData: knockout__WEBPACK_IMPORTED_MODULE_0__[\"pureComputed\"](function () {\n        return _this.ownInput();\n      }, this)\n    }\n  };\n}\n\nvar Binding = new BindingViewModel();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Binding);\n\n//# sourceURL=webpack:///./src/viewmodels/binding/binding.js?");

/***/ }),

/***/ "./src/viewmodels/binding/dynamic.html":
/*!*********************************************!*\
  !*** ./src/viewmodels/binding/dynamic.html ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<section>\\r\\n    <p><strong data-bind=\\\"text: someData\\\"></strong></p>\\r\\n    <p>This is the same view used by all three compose bindings on the page</p>\\r\\n</section>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/binding/dynamic.html?");

/***/ })

}]);