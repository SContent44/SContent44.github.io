(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/Components/transition/index.js":
/*!********************************************!*\
  !*** ./src/Components/transition/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _transition_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition.html */ \"./src/Components/transition/transition.html\");\n\n\nvar transition = {\n  viewModel: {\n    createViewModel: function createViewModel(params, componentInfo) {\n      var vm = {\n        transitionStyle: knockout__WEBPACK_IMPORTED_MODULE_0___default.a.observable(\"\"),\n        displayInitial: knockout__WEBPACK_IMPORTED_MODULE_0___default.a.observable(false),\n        viewPrimed: knockout__WEBPACK_IMPORTED_MODULE_0___default.a.observable(false)\n      };\n      var sub = knockout__WEBPACK_IMPORTED_MODULE_0___default.a.bindingEvent.subscribe(componentInfo.element, // element we're bound to\n      \"descendantsComplete\", // lifeCycle function we're binding to\n      function (node) {\n        vm.viewPrimed(true);\n      });\n\n      var transitionIn = function transitionIn() {\n        vm.displayInitial(true);\n        vm.transitionStyle(\"animated fadeIn\");\n      };\n\n      vm.transitionSet = knockout__WEBPACK_IMPORTED_MODULE_0___default.a.computed(function () {\n        if (vm.viewPrimed()) {\n          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.ignoreDependencies(transitionIn);\n        }\n      }).extend({\n        deferred: true\n      });\n\n      vm.dispose = function () {\n        sub.dispose();\n      };\n\n      return vm;\n    }\n  },\n  template: _transition_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (transition);\n\n//# sourceURL=webpack:///./src/Components/transition/index.js?");

/***/ }),

/***/ "./src/Components/transition/transition.html":
/*!***************************************************!*\
  !*** ./src/Components/transition/transition.html ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<div data-bind=\\\"css: transitionStyle(), visible: displayInitial()\\\">\\r\\n    <!-- ko template: { nodes: $componentTemplateNodes, data: $root } -->\\r\\n    <!-- /ko -->\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/Components/transition/transition.html?");

/***/ })

}]);