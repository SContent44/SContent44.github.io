(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flickr-viewmodel"],{

/***/ "./src/viewmodels/flickr/detail.html":
/*!*******************************************!*\
  !*** ./src/viewmodels/flickr/detail.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<div class=\\\"modal-content pictureDetail autoclose\\\">\\n    <div class=\\\"modal-header\\\">\\n        <h3>Details</h3>\\n    </div>\\n    <div class=\\\"modal-body\\\">\\n        <p data-bind=\\\"html: description\\\"></p>\\n    </div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/flickr/detail.html?");

/***/ }),

/***/ "./src/viewmodels/flickr/flickr.html":
/*!*******************************************!*\
  !*** ./src/viewmodels/flickr/flickr.html ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<transition>\\r\\n    <section>\\r\\n        <div class=\\\"row\\\" data-bind=\\\"foreach: images\\\">\\r\\n            <div class=\\\"col-sm-6 col-md-3\\\">\\r\\n                <a href=\\\"#\\\" class=\\\"thumbnail\\\" data-bind=\\\"click:$parent.select\\\">\\r\\n                    <img style=\\\"width: 260px; height: 180px;\\\" data-bind=\\\"attr: { src: media.m }\\\" />\\r\\n                </a>\\r\\n            </div>\\r\\n        </div>\\r\\n    </section>\\r\\n</transition>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/viewmodels/flickr/flickr.html?");

/***/ }),

/***/ "./src/viewmodels/flickr/flickr.js":
/*!*****************************************!*\
  !*** ./src/viewmodels/flickr/flickr.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ \"../../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var durandal_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! durandal/core */ \"../durandal-es6/core/index.js\");\n/* harmony import */ var _flickr_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flickr.html */ \"./src/viewmodels/flickr/flickr.html\");\n/* harmony import */ var _detail_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.html */ \"./src/viewmodels/flickr/detail.html\");\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar FlickrViewModel = /*#__PURE__*/function () {\n  function FlickrViewModel() {\n    _classCallCheck(this, FlickrViewModel);\n\n    this.view = _flickr_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    this.images = knockout__WEBPACK_IMPORTED_MODULE_2___default.a.observableArray([]);\n  }\n\n  _createClass(FlickrViewModel, [{\n    key: \"activate\",\n    value: function activate() {\n      var _this = this;\n\n      if (this.images().length > 0) {\n        return true;\n      }\n\n      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! durandal/plugins/http */ \"../durandal-es6/plugins/http.js\")).then(function (http) {\n        return http.default.jsonp(\"http://api.flickr.com/services/feeds/photos_public.gne\", {\n          tags: \"mount ranier\",\n          tagmode: \"any\",\n          format: \"json\"\n        }, \"jsoncallback\").then(function (response) {\n          _this.images(response.items);\n        });\n      });\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"select\",\n    value: function select(itemDetails) {\n      var Item = itemDetails;\n      Item.view = _detail_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n      Item.viewName = \"Flickr item\";\n      durandal_core__WEBPACK_IMPORTED_MODULE_3__[\"app\"].showDialog(Item);\n    } // eslint-disable-next-line class-methods-use-this\n\n  }, {\n    key: \"canDeactivate\",\n    value: function canDeactivate() {\n      // the router's activator calls this function to see if it can leave the screen\n      return durandal_core__WEBPACK_IMPORTED_MODULE_3__[\"app\"].showMessage(\"Are you sure you want to leave this page?\", \"Navigate\", [\"Yes\", \"No\"]);\n    }\n  }]);\n\n  return FlickrViewModel;\n}();\n\nvar Flickr = new FlickrViewModel();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flickr);\n\n//# sourceURL=webpack:///./src/viewmodels/flickr/flickr.js?");

/***/ })

}]);