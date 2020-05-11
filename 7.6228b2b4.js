(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/widgets/alert/alert.html":
/*!**************************************!*\
  !*** ./src/widgets/alert/alert.html ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<div class=\\\"alert fade in\\\" role=\\\"alert\\\" data-bind=\\\"css: className\\\">\\n    <!-- ko if: canClose -->\\n    <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n        <span aria-hidden=\\\"true\\\">×</span>\\n    </button>\\n    <!-- /ko -->\\n\\n    <h4 data-bind=\\\"text: title\\\"></h4>\\n    <p data-bind=\\\"text: text\\\"></p>\\n</div>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/widgets/alert/alert.html?");

/***/ }),

/***/ "./src/widgets/alert/alert.js":
/*!************************************!*\
  !*** ./src/widgets/alert/alert.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"../../node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _alert_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.html */ \"./src/widgets/alert/alert.html\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar AlertViewModel = /*#__PURE__*/function () {\n  function AlertViewModel() {\n    var _this = this;\n\n    _classCallCheck(this, AlertViewModel);\n\n    this.view = _alert_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    this.variant = knockout__WEBPACK_IMPORTED_MODULE_1___default.a.observable(\"\");\n    this.text = knockout__WEBPACK_IMPORTED_MODULE_1___default.a.observable(\"\");\n    this.title = knockout__WEBPACK_IMPORTED_MODULE_1___default.a.observable(\"\");\n    this.canClose = knockout__WEBPACK_IMPORTED_MODULE_1___default.a.observable(true);\n    this.className = knockout__WEBPACK_IMPORTED_MODULE_1___default.a.pureComputed(function () {\n      var classes = [\"alert-\".concat(_this.variant())];\n\n      if (_this.canClose()) {\n        classes.push(\"alert-dismissable\");\n      }\n\n      return classes.join(\" \");\n    }, this);\n  }\n\n  _createClass(AlertViewModel, [{\n    key: \"activate\",\n    value: function activate(settings) {\n      this.variant(settings.variant || \"danger\");\n      this.text(settings.text);\n      this.title(settings.title);\n      this.canClose(settings.canClose !== false);\n    }\n  }]);\n\n  return AlertViewModel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlertViewModel);\n\n//# sourceURL=webpack:///./src/widgets/alert/alert.js?");

/***/ })

}]);