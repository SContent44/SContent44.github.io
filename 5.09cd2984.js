(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../node_modules/core-js/internals/to-object.js\");\nvar nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"../../node_modules/core-js/internals/object-get-prototype-of.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"../../node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {\n  getPrototypeOf: function getPrototypeOf(it) {\n    return nativeGetPrototypeOf(toObject(it));\n  }\n});\n\n\n\n//# sourceURL=webpack:///C:/Users/Simon/Desktop/official_repo/durandal-es6/node_modules/core-js/modules/es.object.get-prototype-of.js?");

/***/ }),

/***/ "../durandal-es6/plugins/observable.js":
/*!*********************************************!*\
  !*** ../durandal-es6/plugins/observable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"../../node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"../../node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"../../node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"../../node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ \"../../node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"../../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"../../node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _core_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/system */ \"../durandal-es6/core/system.js\");\n/* harmony import */ var _core_binder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/binder */ \"../durandal-es6/core/binder.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! knockout */ \"../../node_modules/knockout/build/output/knockout-latest.js\");\n/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Enables automatic observability of plain javascript object for ES5 compatible browsers. Also, converts promise properties into observables that are updated when the promise resolves.\n * @module observable\n * @requires system\n * @requires binder\n * @requires knockout\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new observableModule());\n\nfunction observableModule() {\n  var observableModule,\n      toString = Object.prototype.toString,\n      nonObservableTypes = [\"[object Function]\", \"[object String]\", \"[object Boolean]\", \"[object Number]\", \"[object Date]\", \"[object RegExp]\"],\n      observableArrayMethods = [\"remove\", \"removeAll\", \"destroy\", \"destroyAll\", \"replace\"],\n      arrayMethods = [\"pop\", \"reverse\", \"sort\", \"shift\", \"slice\"],\n      additiveArrayFunctions = [\"push\", \"unshift\"],\n      es5Functions = [\"filter\", \"map\", \"reduce\", \"reduceRight\", \"forEach\", \"every\", \"some\"],\n      arrayProto = Array.prototype,\n      observableArrayFunctions = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observableArray.fn,\n      logConversion = false,\n      changeDetectionMethod = undefined,\n      skipPromises = false,\n      shouldIgnorePropertyName;\n  /**\n   * You can call observable(obj, propertyName) to get the observable function for the specified property on the object.\n   * @class ObservableModule\n   */\n\n  if (!(\"getPropertyDescriptor\" in Object)) {\n    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n    var getPrototypeOf = Object.getPrototypeOf;\n\n    Object[\"getPropertyDescriptor\"] = function (o, name) {\n      var proto = o,\n          descriptor;\n\n      while (proto && !(descriptor = getOwnPropertyDescriptor(proto, name))) {\n        proto = getPrototypeOf(proto);\n      }\n\n      return descriptor;\n    };\n  }\n\n  function defaultShouldIgnorePropertyName(propertyName) {\n    var first = propertyName[0];\n    return first === \"_\" || first === \"$\" || changeDetectionMethod && propertyName === changeDetectionMethod;\n  }\n\n  function isNode(obj) {\n    return !!(obj && obj.nodeType !== undefined && _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isNumber(obj.nodeType));\n  }\n\n  function canConvertType(value) {\n    if (!value || isNode(value) || value.ko === knockout__WEBPACK_IMPORTED_MODULE_11___default.a || value.jquery) {\n      return false;\n    }\n\n    var type = toString.call(value);\n    return nonObservableTypes.indexOf(type) == -1 && !(value === true || value === false);\n  }\n\n  function createLookup(obj) {\n    var value = {};\n    Object.defineProperty(obj, \"__observable__\", {\n      enumerable: false,\n      configurable: false,\n      writable: false,\n      value: value\n    });\n    return value;\n  }\n\n  function makeObservableArray(original, observable, hasChanged) {\n    var lookup = original.__observable__,\n        notify = true;\n\n    if (lookup && lookup.__full__) {\n      return;\n    }\n\n    lookup = lookup || createLookup(original);\n    lookup.__full__ = true;\n    es5Functions.forEach(function (methodName) {\n      observable[methodName] = function () {\n        return arrayProto[methodName].apply(original, arguments);\n      };\n    });\n    observableArrayMethods.forEach(function (methodName) {\n      original[methodName] = function () {\n        notify = false;\n        var methodCallResult = observableArrayFunctions[methodName].apply(observable, arguments);\n        notify = true;\n        return methodCallResult;\n      };\n    });\n    arrayMethods.forEach(function (methodName) {\n      original[methodName] = function () {\n        if (notify) {\n          observable.valueWillMutate();\n        }\n\n        var methodCallResult = arrayProto[methodName].apply(original, arguments);\n\n        if (notify) {\n          observable.valueHasMutated();\n        }\n\n        return methodCallResult;\n      };\n    });\n    additiveArrayFunctions.forEach(function (methodName) {\n      original[methodName] = function () {\n        for (var i = 0, len = arguments.length; i < len; i++) {\n          convertObject(arguments[i], hasChanged);\n        }\n\n        if (notify) {\n          observable.valueWillMutate();\n        }\n\n        var methodCallResult = arrayProto[methodName].apply(original, arguments);\n\n        if (notify) {\n          observable.valueHasMutated();\n        }\n\n        return methodCallResult;\n      };\n    });\n\n    original[\"splice\"] = function () {\n      for (var i = 2, len = arguments.length; i < len; i++) {\n        convertObject(arguments[i], hasChanged);\n      }\n\n      if (notify) {\n        observable.valueWillMutate();\n      }\n\n      var methodCallResult = arrayProto[\"splice\"].apply(original, arguments);\n\n      if (notify) {\n        observable.valueHasMutated();\n      }\n\n      return methodCallResult;\n    };\n\n    for (var i = 0, len = original.length; i < len; i++) {\n      convertObject(original[i], hasChanged);\n    }\n  }\n  /**\n   * Converts an entire object into an observable object by re-writing its attributes using ES5 getters and setters. Attributes beginning with '_' or '$' are ignored.\n   * @method convertObject\n   * @param {object} obj The target object to convert.\n   */\n\n\n  function convertObject(obj, hasChanged) {\n    var lookup, value;\n\n    if (changeDetectionMethod) {\n      if (obj && obj[changeDetectionMethod]) {\n        if (hasChanged) {\n          hasChanged = hasChanged.slice(0);\n        } else {\n          hasChanged = [];\n        }\n\n        hasChanged.push(obj[changeDetectionMethod]);\n      }\n    }\n\n    if (!canConvertType(obj)) {\n      return;\n    }\n\n    lookup = obj.__observable__;\n\n    if (lookup && lookup.__full__) {\n      return;\n    }\n\n    lookup = lookup || createLookup(obj);\n    lookup.__full__ = true;\n\n    if (_core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isArray(obj)) {\n      var observable = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observableArray(obj);\n      makeObservableArray(obj, observable, hasChanged);\n    } else {\n      for (var propertyName in obj) {\n        if (shouldIgnorePropertyName(propertyName)) {\n          continue;\n        }\n\n        if (!lookup[propertyName]) {\n          var descriptor = Object.getPropertyDescriptor(obj, propertyName);\n\n          if (descriptor && (descriptor.get || descriptor.set)) {\n            defineProperty(obj, propertyName, {\n              get: descriptor.get,\n              set: descriptor.set\n            });\n          } else {\n            value = obj[propertyName];\n\n            if (!_core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isFunction(value)) {\n              convertProperty(obj, propertyName, value, hasChanged);\n            }\n          }\n        }\n      }\n    }\n\n    if (logConversion) {\n      _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].log(\"Converted\", obj);\n    }\n  }\n\n  function innerSetter(observable, newValue, isArray) {\n    //if this was originally an observableArray, then always check to see if we need to add/replace the array methods (if newValue was an entirely new array)\n    if (isArray) {\n      if (!newValue) {\n        //don't allow null, force to an empty array\n        newValue = [];\n        makeObservableArray(newValue, observable);\n      } else if (!newValue.destroyAll) {\n        makeObservableArray(newValue, observable);\n      }\n    } else {\n      convertObject(newValue);\n    } //call the update to the observable after the array as been updated.\n\n\n    observable(newValue);\n  }\n  /**\n   * Converts a normal property into an observable property using ES5 getters and setters.\n   * @method convertProperty\n   * @param {object} obj The target object on which the property to convert lives.\n   * @param {string} propertyName The name of the property to convert.\n   * @param {object} [original] The original value of the property. If not specified, it will be retrieved from the object.\n   * @return {KnockoutObservable} The underlying observable.\n   */\n\n\n  function convertProperty(obj, propertyName, original, hasChanged) {\n    var observable,\n        isArray,\n        lookup = obj.__observable__ || createLookup(obj);\n\n    if (original === undefined) {\n      original = obj[propertyName];\n    }\n\n    if (_core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isArray(original)) {\n      observable = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observableArray(original);\n      makeObservableArray(original, observable, hasChanged);\n      isArray = true;\n    } else if (typeof original == \"function\") {\n      if (knockout__WEBPACK_IMPORTED_MODULE_11___default.a.isObservable(original)) {\n        observable = original;\n      } else {\n        return null;\n      }\n    } else if (!skipPromises && _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isPromise(original)) {\n      observable = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observable();\n      original.then(function (result) {\n        if (_core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isArray(result)) {\n          var oa = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observableArray(result);\n          makeObservableArray(result, oa, hasChanged);\n          result = oa;\n        }\n\n        observable(result);\n      });\n    } else {\n      observable = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.observable(original);\n      convertObject(original, hasChanged);\n    }\n\n    if (hasChanged && hasChanged.length > 0) {\n      hasChanged.forEach(function (func) {\n        if (_core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isArray(original)) {\n          observable.subscribe(function (arrayChanges) {\n            func(obj, propertyName, null, arrayChanges);\n          }, null, \"arrayChange\");\n        } else {\n          observable.subscribe(function (newValue) {\n            func(obj, propertyName, newValue, null);\n          });\n        }\n      });\n    }\n\n    Object.defineProperty(obj, propertyName, {\n      configurable: true,\n      enumerable: true,\n      get: observable,\n      set: knockout__WEBPACK_IMPORTED_MODULE_11___default.a.isWriteableObservable(observable) ? function (newValue) {\n        if (newValue && _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isPromise(newValue) && !skipPromises) {\n          newValue.then(function (result) {\n            innerSetter(observable, result, _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isArray(result));\n          });\n        } else {\n          innerSetter(observable, newValue, isArray);\n        }\n      } : undefined\n    });\n    lookup[propertyName] = observable;\n    return observable;\n  }\n  /**\n   * Defines a computed property using ES5 getters and setters.\n   * @method defineProperty\n   * @param {object} obj The target object on which to create the property.\n   * @param {string} propertyName The name of the property to define.\n   * @param {function|object} evaluatorOrOptions The Knockout computed function or computed options object.\n   * @return {KnockoutObservable} The underlying computed observable.\n   */\n\n\n  function defineProperty(obj, propertyName, evaluatorOrOptions) {\n    var computedOptions = {\n      owner: obj,\n      deferEvaluation: true\n    },\n        computed;\n\n    if (typeof evaluatorOrOptions === \"function\") {\n      computedOptions.read = evaluatorOrOptions;\n    } else {\n      if (\"value\" in evaluatorOrOptions) {\n        _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error('For defineProperty, you must not specify a \"value\" for the property. You must provide a \"get\" function.');\n      }\n\n      if (typeof evaluatorOrOptions.get !== \"function\" && typeof evaluatorOrOptions.read !== \"function\") {\n        _core_system__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error('For defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called \"get\".');\n      }\n\n      computedOptions.read = evaluatorOrOptions.get || evaluatorOrOptions.read;\n      computedOptions.write = evaluatorOrOptions.set || evaluatorOrOptions.write;\n    }\n\n    computed = knockout__WEBPACK_IMPORTED_MODULE_11___default.a.computed(computedOptions);\n    Object.defineProperty(obj, propertyName, {\n      configurable: true,\n      enumerable: true,\n      value: computed\n    });\n    return convertProperty(obj, propertyName, computed);\n  }\n\n  observableModule = function observableModule(obj, propertyName) {\n    var lookup, observable, value;\n\n    if (!obj) {\n      return null;\n    }\n\n    lookup = obj.__observable__;\n\n    if (lookup) {\n      observable = lookup[propertyName];\n\n      if (observable) {\n        return observable;\n      }\n    }\n\n    value = obj[propertyName];\n\n    if (knockout__WEBPACK_IMPORTED_MODULE_11___default.a.isObservable(value)) {\n      return value;\n    }\n\n    return convertProperty(obj, propertyName, value);\n  };\n\n  observableModule.defineProperty = defineProperty;\n  observableModule.convertProperty = convertProperty;\n  observableModule.convertObject = convertObject;\n  /**\n   * Installs the plugin into the view model binder's `beforeBind` hook so that objects are automatically converted before being bound.\n   * @method install\n   */\n\n  observableModule.install = function (options) {\n    var original = _core_binder__WEBPACK_IMPORTED_MODULE_10__[\"default\"].binding;\n\n    _core_binder__WEBPACK_IMPORTED_MODULE_10__[\"default\"].binding = function (obj, view, instruction) {\n      if (instruction.applyBindings && !instruction.skipConversion) {\n        convertObject(obj);\n      }\n\n      original(obj, view);\n    };\n\n    logConversion = options.logConversion;\n\n    if (options.changeDetection) {\n      changeDetectionMethod = options.changeDetection;\n    }\n\n    skipPromises = options.skipPromises;\n    shouldIgnorePropertyName = options.shouldIgnorePropertyName || defaultShouldIgnorePropertyName;\n  };\n\n  return observableModule;\n}\n\n//# sourceURL=webpack:///../durandal-es6/plugins/observable.js?");

/***/ })

}]);