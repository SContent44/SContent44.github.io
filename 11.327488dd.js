(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "../durandal-es6/transitions/entrance.js":
/*!***********************************************!*\
  !*** ../durandal-es6/transitions/entrance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"../../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"../../node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"../../node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _core_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/system */ \"../durandal-es6/core/system.js\");\n\n\n\n\n/* eslint-disable func-names */\n\n\n/**\n * The entrance transition module.\n * @module entrance\n * @requires jquery\n * @requires system\n */\n\nfunction EntranceModule() {\n  var fadeOutDuration = 100;\n  var endValues = {\n    left: \"0px\",\n    opacity: 1\n  };\n  var clearValues = {\n    left: \"\",\n    top: \"\",\n    right: \"\",\n    bottom: \"\",\n    position: \"\",\n    opacity: \"\"\n  };\n  var isIE = navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/);\n  var animation = false;\n  var domPrefixes = \"Webkit Moz O ms Khtml\".split(\" \");\n  var elm = document.createElement(\"div\");\n\n  if (elm.style.animationName !== undefined) {\n    animation = true;\n  }\n\n  if (!animation) {\n    for (var i = 0; i < domPrefixes.length; i += 1) {\n      if (elm.style[\"\".concat(domPrefixes[i], \"AnimationName\")] !== undefined) {\n        animation = true;\n        break;\n      }\n    }\n  }\n\n  if (animation) {\n    if (isIE) {\n      _core_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].log(\"Using CSS3/jQuery mixed animations.\");\n    } else {\n      _core_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].log(\"Using CSS3 animations.\");\n    }\n  } else {\n    _core_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].log(\"Using jQuery animations.\");\n  }\n\n  function removeAnimationClasses(ele, fadeOnly) {\n    ele.classList.remove(fadeOnly ? \"entrance-in-fade\" : \"entrance-in\");\n    ele.classList.remove(\"entrance-out\");\n  }\n  /**\n   * @class EntranceModule\n   * @constructor\n   */\n\n\n  var entrance = function entrance(context) {\n    return _core_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defer(function (dfd) {\n      function endTransition() {\n        dfd.resolve();\n      }\n\n      function scrollIfNeeded() {\n        if (!context.keepScrollPosition) {\n          jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).scrollTop(0);\n        }\n      }\n\n      if (!context.child) {\n        jquery__WEBPACK_IMPORTED_MODULE_3___default()(context.activeView).fadeOut(fadeOutDuration, endTransition);\n      } else {\n        var duration = context.duration || 500;\n        var $child = jquery__WEBPACK_IMPORTED_MODULE_3___default()(context.child);\n        var fadeOnly = !!context.fadeOnly;\n        var startValues = {\n          display: \"block\",\n          opacity: 0,\n          position: \"absolute\",\n          left: fadeOnly || animation ? \"0px\" : \"20px\",\n          right: 0,\n          top: 0,\n          bottom: 0\n        };\n\n        var startTransition = function startTransition() {\n          scrollIfNeeded();\n          context.triggerAttach();\n\n          if (animation) {\n            removeAnimationClasses(context.child, fadeOnly);\n            context.child.classList.add(fadeOnly ? \"entrance-in-fade\" : \"entrance-in\");\n            setTimeout(function () {\n              removeAnimationClasses(context.child, fadeOnly);\n\n              if (context.activeView) {\n                removeAnimationClasses(context.activeView, fadeOnly);\n              }\n\n              $child.css(clearValues);\n              endTransition();\n            }, duration);\n          } else {\n            $child.animate(endValues, {\n              duration: duration,\n              easing: \"swing\",\n              always: function always() {\n                $child.css(clearValues);\n                endTransition();\n              }\n            });\n          }\n        };\n\n        $child.css(startValues);\n\n        if (context.activeView) {\n          if (animation && !isIE) {\n            removeAnimationClasses(context.activeView, fadeOnly);\n            context.activeView.classList.add(\"entrance-out\");\n            setTimeout(startTransition, fadeOutDuration);\n          } else {\n            jquery__WEBPACK_IMPORTED_MODULE_3___default()(context.activeView).fadeOut({\n              duration: fadeOutDuration,\n              always: startTransition\n            });\n          }\n        } else {\n          startTransition();\n        }\n      }\n    }).promise();\n  };\n\n  return entrance;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new EntranceModule());\n\n//# sourceURL=webpack:///../durandal-es6/transitions/entrance.js?");

/***/ })

}]);