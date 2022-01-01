/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ux-scroll", [], factory);
	else if(typeof exports === 'object')
		exports["ux-scroll"] = factory();
	else
		root["ux-scroll"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UxScrollTransition\": () => (/* reexport safe */ _ux_scroll_transition__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"UxScrollCallback\": () => (/* reexport safe */ _ux_scroll_callback__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _ux_scroll_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ux-scroll-transition */ \"./src/base/ux-scroll-transition.ts\");\n/* harmony import */ var _ux_scroll_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-scroll-callback */ \"./src/base/ux-scroll-callback.ts\");\n\n\n\n\n//# sourceURL=webpack://ux-scroll/./src/base/index.ts?");

/***/ }),

/***/ "./src/base/scroll.ts":
/*!****************************!*\
  !*** ./src/base/scroll.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Direction\": () => (/* binding */ Direction),\n/* harmony export */   \"Size\": () => (/* binding */ Size),\n/* harmony export */   \"default\": () => (/* binding */ Scroll)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {\n  if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n  return kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;\n};\n\nvar __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n  return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\n\nvar _Scroll_instances, _Scroll_props, _Scroll_direction, _Scroll_status, _Scroll_getStartingOptions_get, _Scroll_getDoingOptions_get, _Scroll_getEndingOptions_get, _Scroll_throttleTimer_get, _Scroll_getOptions, _Scroll_getMargin, _Scroll_getElements, _Scroll_getStatus, _Scroll_getWindowSize, _Scroll_getScrollSize, _Scroll_checkOptions, _Scroll_resetStatus, _Scroll_onScroll, _Scroll_onResize, _Scroll_requestAnimationFrame, _Scroll_setThrottle; // import throttle from \"../utils/throttle\";\n\n\nvar Direction;\n\n(function (Direction) {\n  Direction[\"Y\"] = \"y\";\n  Direction[\"X\"] = \"x\";\n})(Direction || (Direction = {}));\n\nvar Size;\n\n(function (Size) {\n  Size[\"Y\"] = \"height\";\n  Size[\"X\"] = \"width\";\n})(Size || (Size = {}));\n\nvar Scroll = /*#__PURE__*/function () {\n  function Scroll(props) {\n    var _this = this;\n\n    _classCallCheck(this, Scroll);\n\n    _Scroll_instances.add(this);\n\n    _Scroll_props.set(this, void 0);\n\n    _Scroll_direction.set(this, Direction.Y);\n\n    _Scroll_status.set(this, void 0);\n\n    this.scrollPosition = -1;\n    this.scrollDirection = 1;\n\n    _Scroll_onScroll.set(this, __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_requestAnimationFrame).call(this, function () {\n      if (!_this.elements) return;\n\n      if (_this.scrollPosition > window.scrollY) {\n        // console.log(\"업\");\n        _this.scrollDirection && __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_resetStatus).call(_this, 0);\n      } else if (_this.scrollPosition < window.scrollY) {\n        // console.log(\"다운\");\n        !_this.scrollDirection && __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_resetStatus).call(_this, 1);\n      }\n\n      __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_checkOptions).call(_this);\n\n      _this.scrollPosition = window.scrollY;\n    }));\n\n    _Scroll_onResize.set(this, __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_requestAnimationFrame).call(this, function () {\n      if (!_this.elements) return;\n      _this.windowSize = __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_getWindowSize).call(_this);\n      _this.scrollSize = __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_getScrollSize).call(_this);\n      _this.options = __classPrivateFieldGet(_this, _Scroll_instances, \"m\", _Scroll_getOptions).call(_this, {\n        options: __classPrivateFieldGet(_this, _Scroll_props, \"f\").options,\n        commonOptions: __classPrivateFieldGet(_this, _Scroll_props, \"f\").commonOptions\n      });\n    }));\n\n    __classPrivateFieldSet(this, _Scroll_props, props, \"f\");\n\n    this.elements = __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_getElements).call(this);\n\n    __classPrivateFieldSet(this, _Scroll_status, __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_getStatus).call(this), \"f\");\n\n    __classPrivateFieldGet(this, _Scroll_onResize, \"f\").call(this);\n\n    this.onResize = __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_setThrottle).call(this, __classPrivateFieldGet(this, _Scroll_onResize, \"f\"), __classPrivateFieldGet(this, _Scroll_instances, \"a\", _Scroll_throttleTimer_get));\n    this.onScroll = __classPrivateFieldGet(this, _Scroll_instances, \"m\", _Scroll_setThrottle).call(this, __classPrivateFieldGet(this, _Scroll_onScroll, \"f\"), __classPrivateFieldGet(this, _Scroll_instances, \"a\", _Scroll_throttleTimer_get));\n  }\n\n  _createClass(Scroll, [{\n    key: \"scrollBottomPosition\",\n    get: function get() {\n      return this.scrollPosition + this.windowSize;\n    }\n  }, {\n    key: \"scrollTopPosition\",\n    get: function get() {\n      return this.scrollPosition;\n    }\n  }, {\n    key: \"onStarting\",\n    value: function onStarting(index) {}\n  }, {\n    key: \"onDoing\",\n    value: function onDoing(index) {}\n  }, {\n    key: \"onEnding\",\n    value: function onEnding(index) {}\n  }]);\n\n  return Scroll;\n}();\n\n\n_Scroll_props = new WeakMap(), _Scroll_direction = new WeakMap(), _Scroll_status = new WeakMap(), _Scroll_onScroll = new WeakMap(), _Scroll_onResize = new WeakMap(), _Scroll_instances = new WeakSet(), _Scroll_getStartingOptions_get = function _Scroll_getStartingOptions_get() {\n  var _this2 = this;\n\n  return this.options.filter(function (_ref) {\n    var startTopPosition = _ref.startTopPosition,\n        startBottomPosition = _ref.startBottomPosition,\n        index = _ref.index,\n        starting = _ref.starting;\n    return starting && (_this2.scrollDirection ? startTopPosition <= _this2.scrollBottomPosition : startBottomPosition >= _this2.scrollTopPosition) && __classPrivateFieldGet(_this2, _Scroll_status, \"f\")[index].starting;\n  });\n}, _Scroll_getDoingOptions_get = function _Scroll_getDoingOptions_get() {\n  var _this3 = this;\n\n  return this.options.filter(function (_ref2) {\n    var startTopPosition = _ref2.startTopPosition,\n        endBottomPosition = _ref2.endBottomPosition,\n        index = _ref2.index,\n        doing = _ref2.doing;\n    return doing && (_this3.scrollDirection ? startTopPosition <= _this3.scrollTopPosition : endBottomPosition >= _this3.scrollBottomPosition) && __classPrivateFieldGet(_this3, _Scroll_status, \"f\")[index].doing;\n  });\n}, _Scroll_getEndingOptions_get = function _Scroll_getEndingOptions_get() {\n  var _this4 = this;\n\n  return this.options.filter(function (_ref3) {\n    var ending = _ref3.ending,\n        index = _ref3.index,\n        endTopPosition = _ref3.endTopPosition,\n        endBottomPosition = _ref3.endBottomPosition;\n    return ending && (_this4.scrollDirection ? endTopPosition <= _this4.scrollBottomPosition : endBottomPosition >= _this4.scrollTopPosition) && __classPrivateFieldGet(_this4, _Scroll_status, \"f\")[index].ending;\n  });\n}, _Scroll_throttleTimer_get = function _Scroll_throttleTimer_get() {\n  return __classPrivateFieldGet(this, _Scroll_props, \"f\").throttleTimer || 0;\n}, _Scroll_getOptions = function _Scroll_getOptions(_ref4) {\n  var _this5 = this;\n\n  var options = _ref4.options,\n      commonOptions = _ref4.commonOptions;\n  !options && (options = {});\n  !commonOptions && (commonOptions = {});\n  return this.elements.map(function (x, index) {\n    var startPosition = __classPrivateFieldGet(_this5, _Scroll_direction, \"f\") === Direction.Y ? x.offsetTop : x.offsetLeft;\n    var size = __classPrivateFieldGet(_this5, _Scroll_direction, \"f\") === Direction.Y ? x.offsetHeight : x.offsetWidth;\n    var endPosition = startPosition + size;\n    var others = Object.assign(commonOptions, options[index]);\n\n    var startTopMargin = __classPrivateFieldGet(_this5, _Scroll_instances, \"m\", _Scroll_getMargin).call(_this5, others.startTopMargin);\n\n    var endTopMargin = __classPrivateFieldGet(_this5, _Scroll_instances, \"m\", _Scroll_getMargin).call(_this5, others.endTopMargin);\n\n    var startBottomMargin = __classPrivateFieldGet(_this5, _Scroll_instances, \"m\", _Scroll_getMargin).call(_this5, others.startBottomMargin);\n\n    var endBottomMargin = __classPrivateFieldGet(_this5, _Scroll_instances, \"m\", _Scroll_getMargin).call(_this5, others.endBottomMargin);\n\n    return Object.assign(Object.assign({\n      index: index,\n      size: size\n    }, others), {\n      startTopPosition: startPosition + startTopMargin,\n      endTopPosition: endPosition + endTopMargin,\n      startBottomPosition: startPosition + startBottomMargin,\n      endBottomPosition: endPosition + endBottomMargin\n    });\n  });\n}, _Scroll_getMargin = function _Scroll_getMargin(margin) {\n  if (!margin) return 0;\n  if (margin.includes(\"px\")) return Number(margin.replace(\"px\", \"\"));\n  if (margin.includes(\"%\")) return Number(margin.replace(\"%\", \"\")) * this.windowSize / 100;\n  return Number(margin) * this.windowSize;\n}, _Scroll_getElements = function _Scroll_getElements() {\n  return Array.prototype.slice.call(document.querySelectorAll(__classPrivateFieldGet(this, _Scroll_props, \"f\").selector));\n}, _Scroll_getStatus = function _Scroll_getStatus() {\n  return this.elements.map(function () {\n    return {\n      starting: true,\n      doing: true,\n      ending: true\n    };\n  });\n}, _Scroll_getWindowSize = function _Scroll_getWindowSize() {\n  return __classPrivateFieldGet(this, _Scroll_direction, \"f\") === Direction.Y ? window.innerHeight : window.innerWidth;\n}, _Scroll_getScrollSize = function _Scroll_getScrollSize() {\n  return __classPrivateFieldGet(this, _Scroll_direction, \"f\") === Direction.Y ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) : Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n}, _Scroll_checkOptions = function _Scroll_checkOptions() {\n  var _this6 = this;\n\n  __classPrivateFieldGet(this, _Scroll_instances, \"a\", _Scroll_getStartingOptions_get).map(function (_ref5) {\n    var index = _ref5.index;\n\n    var res = _this6.onStarting(index);\n\n    if (res) __classPrivateFieldGet(_this6, _Scroll_status, \"f\")[index].starting = false;\n  });\n\n  __classPrivateFieldGet(this, _Scroll_instances, \"a\", _Scroll_getDoingOptions_get).map(function (_ref6) {\n    var index = _ref6.index;\n\n    var res = _this6.onDoing(index);\n\n    if (res) __classPrivateFieldGet(_this6, _Scroll_status, \"f\")[index].doing = false;\n  });\n\n  __classPrivateFieldGet(this, _Scroll_instances, \"a\", _Scroll_getEndingOptions_get).map(function (_ref7) {\n    var index = _ref7.index;\n\n    var res = _this6.onEnding(index);\n\n    if (res) __classPrivateFieldGet(_this6, _Scroll_status, \"f\")[index].ending = false;\n  });\n}, _Scroll_resetStatus = function _Scroll_resetStatus(directive) {\n  this.scrollDirection = directive;\n\n  for (var index in __classPrivateFieldGet(this, _Scroll_status, \"f\")) {\n    __classPrivateFieldGet(this, _Scroll_status, \"f\")[index].starting = true;\n    __classPrivateFieldGet(this, _Scroll_status, \"f\")[index].doing = true;\n    __classPrivateFieldGet(this, _Scroll_status, \"f\")[index].ending = true;\n  }\n}, _Scroll_requestAnimationFrame = function _Scroll_requestAnimationFrame(callback) {\n  var ticking = false;\n  return function () {\n    if (!ticking) {\n      ticking = true;\n      requestAnimationFrame(function () {\n        callback();\n        ticking = false;\n      });\n    }\n  };\n}, _Scroll_setThrottle = function _Scroll_setThrottle(callback, wait) {\n  var _this7 = this;\n\n  var inThrottle;\n  return function () {\n    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {\n      arg[_key] = arguments[_key];\n    }\n\n    if (inThrottle) return;\n    inThrottle = setTimeout(function () {\n      callback.call(_this7, arg);\n      inThrottle = false;\n    }, wait);\n  };\n};\n\n//# sourceURL=webpack://ux-scroll/./src/base/scroll.ts?");

/***/ }),

/***/ "./src/base/ux-scroll-callback.ts":
/*!****************************************!*\
  !*** ./src/base/ux-scroll-callback.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UxScrollCallback)\n/* harmony export */ });\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/base/scroll.ts\");\n/* harmony import */ var _utils_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/easing */ \"./src/utils/easing.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {\n  if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n  return kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;\n};\n\nvar __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {\n  if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n  if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n  return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\n\nvar _UxScrollCallback_instances, _UxScrollCallback_callbacks, _UxScrollCallback_getStep, _UxScrollCallback_callback;\n\n\n\n\nvar UxScrollCallback = /*#__PURE__*/function (_Scroll) {\n  _inherits(UxScrollCallback, _Scroll);\n\n  var _super = _createSuper(UxScrollCallback);\n\n  function UxScrollCallback(props) {\n    var _this;\n\n    _classCallCheck(this, UxScrollCallback);\n\n    _this = _super.call(this, Object.assign(Object.assign({}, props), {\n      commonOptions: Object.assign({\n        starting: \"starting\",\n        doing: \"doing\",\n        ending: \"ending\",\n        startingFrame: 999,\n        doingFrame: 999,\n        endingFrame: 999,\n        startingEasing: \"inCubic\",\n        doingEasing: \"inCubic\",\n        endingEasing: \"inCubic\"\n      }, props.commonOptions)\n    }));\n\n    _UxScrollCallback_instances.add(_assertThisInitialized(_this));\n\n    _UxScrollCallback_callbacks.set(_assertThisInitialized(_this), void 0);\n\n    __classPrivateFieldSet(_assertThisInitialized(_this), _UxScrollCallback_callbacks, props.callbacks, \"f\");\n\n    return _this;\n  }\n\n  _createClass(UxScrollCallback, [{\n    key: \"onStarting\",\n    value: function onStarting(index) {\n      var frame = this.options[index].startingFrame;\n      var status = this.options[index].starting;\n      var easing = this.options[index].startingEasing;\n      var position = this.scrollDirection ? this.options[index].startTopPosition : this.options[index].startBottomPosition;\n      var level = (this.scrollBottomPosition - position) / this.windowSize;\n      return __classPrivateFieldGet(this, _UxScrollCallback_instances, \"m\", _UxScrollCallback_callback).call(this, {\n        easing: easing,\n        status: status,\n        index: index,\n        level: level,\n        frame: frame\n      });\n    }\n  }, {\n    key: \"onDoing\",\n    value: function onDoing(index) {\n      var frame = this.options[index].doingFrame;\n      var status = this.options[index].doing;\n      var easing = this.options[index].doingEasing;\n      var position = this.scrollDirection ? this.options[index].endTopPosition : this.options[index].endBottomPosition;\n      var level = 1 - (position - this.scrollBottomPosition) / (this.options[index].size - this.windowSize);\n      return __classPrivateFieldGet(this, _UxScrollCallback_instances, \"m\", _UxScrollCallback_callback).call(this, {\n        easing: easing,\n        status: status,\n        index: index,\n        level: level,\n        frame: frame\n      });\n    }\n  }, {\n    key: \"onEnding\",\n    value: function onEnding(index) {\n      var frame = this.options[index].endingFrame;\n      var status = this.options[index].ending;\n      var easing = this.options[index].endingEasing;\n      var position = this.scrollDirection ? this.options[index].endTopPosition : this.options[index].endBottomPosition;\n      var level = 1 - (position - this.scrollTopPosition) / this.windowSize;\n      return __classPrivateFieldGet(this, _UxScrollCallback_instances, \"m\", _UxScrollCallback_callback).call(this, {\n        easing: easing,\n        status: status,\n        index: index,\n        level: level,\n        frame: frame\n      });\n    }\n  }]);\n\n  return UxScrollCallback;\n}(_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n_UxScrollCallback_callbacks = new WeakMap(), _UxScrollCallback_instances = new WeakSet(), _UxScrollCallback_getStep = function _UxScrollCallback_getStep(level, frame, easing) {\n  if (level > 1) level = 1;\n  if (level < 0) level = 0;\n  var acc = _utils_easing__WEBPACK_IMPORTED_MODULE_1__[\"default\"][easing];\n  return Math.ceil(acc(level) * frame);\n}, _UxScrollCallback_callback = function _UxScrollCallback_callback(_ref) {\n  var index = _ref.index,\n      status = _ref.status,\n      level = _ref.level,\n      frame = _ref.frame,\n      easing = _ref.easing;\n\n  var callback = __classPrivateFieldGet(this, _UxScrollCallback_callbacks, \"f\")[index];\n\n  var step = __classPrivateFieldGet(this, _UxScrollCallback_instances, \"m\", _UxScrollCallback_getStep).call(this, level, frame, easing); // const easingLevel = this.\n  // const level = Math.ceil(_level * frame);\n\n\n  var element = this.elements[index];\n  callback && callback({\n    scrollDirection: this.scrollDirection,\n    status: status,\n    index: index,\n    step: step,\n    element: element\n  });\n  if (level < 0 || level > 1) return true;\n};\n\n//# sourceURL=webpack://ux-scroll/./src/base/ux-scroll-callback.ts?");

/***/ }),

/***/ "./src/base/ux-scroll-transition.ts":
/*!******************************************!*\
  !*** ./src/base/ux-scroll-transition.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UxScrollTransition)\n/* harmony export */ });\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/base/scroll.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar UxScrollTransition = /*#__PURE__*/function (_Scroll) {\n  _inherits(UxScrollTransition, _Scroll);\n\n  var _super = _createSuper(UxScrollTransition);\n\n  function UxScrollTransition(props) {\n    _classCallCheck(this, UxScrollTransition);\n\n    return _super.call(this, Object.assign(Object.assign({}, props), {\n      commonOptions: Object.assign({\n        starting: \"ux__transition--animated\",\n        startTopMargin: \".2\",\n        startBottomMargin: \"-1\"\n      }, props.commonOptions)\n    }));\n  }\n\n  _createClass(UxScrollTransition, [{\n    key: \"onStarting\",\n    value: function onStarting(index) {\n      if (this.scrollDirection) {\n        this.elements[index].classList.add(this.options[index].starting);\n      } else {\n        this.elements[index].classList.remove(this.options[index].starting);\n      }\n\n      return true;\n    }\n  }]);\n\n  return UxScrollTransition;\n}(_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://ux-scroll/./src/base/ux-scroll-transition.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UxScrollTransition\": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.UxScrollTransition),\n/* harmony export */   \"UxScrollCallback\": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.UxScrollCallback)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/base/index.ts\");\n\n\n\n\n//# sourceURL=webpack://ux-scroll/./src/index.ts?");

/***/ }),

/***/ "./src/utils/easing.ts":
/*!*****************************!*\
  !*** ./src/utils/easing.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar easingsFunctions = {\n  // No easing, no acceleration\n  linear: function linear(t) {\n    return t;\n  },\n  // Accelerates fast, then slows quickly towards end.\n  quadratic: function quadratic(t) {\n    return t * (-(t * t) * t + 4 * t * t - 6 * t + 4);\n  },\n  // Overshoots over 1 and then returns to 1 towards end.\n  cubic: function cubic(t) {\n    return t * (4 * t * t - 9 * t + 6);\n  },\n  // Overshoots over 1 multiple times - wiggles around 1.\n  elastic: function elastic(t) {\n    return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15);\n  },\n  // Accelerating from zero velocity\n  inQuad: function inQuad(t) {\n    return t * t;\n  },\n  // Decelerating to zero velocity\n  outQuad: function outQuad(t) {\n    return t * (2 - t);\n  },\n  // Acceleration until halfway, then deceleration\n  inOutQuad: function inOutQuad(t) {\n    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;\n  },\n  // Accelerating from zero velocity\n  inCubic: function inCubic(t) {\n    return t * t * t;\n  },\n  // Decelerating to zero velocity\n  outCubic: function outCubic(t) {\n    return --t * t * t + 1;\n  },\n  // Acceleration until halfway, then deceleration\n  inOutCubic: function inOutCubic(t) {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  },\n  // Accelerating from zero velocity\n  inQuart: function inQuart(t) {\n    return t * t * t * t;\n  },\n  // Decelerating to zero velocity\n  outQuart: function outQuart(t) {\n    return 1 - --t * t * t * t;\n  },\n  // Acceleration until halfway, then deceleration\n  inOutQuart: function inOutQuart(t) {\n    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;\n  },\n  // Accelerating from zero velocity\n  inQuint: function inQuint(t) {\n    return t * t * t * t * t;\n  },\n  // Decelerating to zero velocity\n  outQuint: function outQuint(t) {\n    return 1 + --t * t * t * t * t;\n  },\n  // Acceleration until halfway, then deceleration\n  inOutQuint: function inOutQuint(t) {\n    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;\n  },\n  // Accelerating from zero velocity\n  inSine: function inSine(t) {\n    return -Math.cos(t * (Math.PI / 2)) + 1;\n  },\n  // Decelerating to zero velocity\n  outSine: function outSine(t) {\n    return Math.sin(t * (Math.PI / 2));\n  },\n  // Accelerating until halfway, then decelerating\n  inOutSine: function inOutSine(t) {\n    return -(Math.cos(Math.PI * t) - 1) / 2;\n  },\n  // Exponential accelerating from zero velocity\n  inExpo: function inExpo(t) {\n    return Math.pow(2, 10 * (t - 1));\n  },\n  // Exponential decelerating to zero velocity\n  outExpo: function outExpo(t) {\n    return -Math.pow(2, -10 * t) + 1;\n  },\n  // Exponential accelerating until halfway, then decelerating\n  inOutExpo: function inOutExpo(t) {\n    t /= 0.5;\n    if (t < 1) return Math.pow(2, 10 * (t - 1)) / 2;\n    t--;\n    return (-Math.pow(2, -10 * t) + 2) / 2;\n  },\n  // Circular accelerating from zero velocity\n  inCirc: function inCirc(t) {\n    return -Math.sqrt(1 - t * t) + 1;\n  },\n  // Circular decelerating to zero velocity Moves VERY fast at the beginning and\n  // then quickly slows down in the middle. This tween can actually be used\n  // in continuous transitions where target value changes all the time,\n  // because of the very quick start, it hides the jitter between target value changes.\n  outCirc: function outCirc(t) {\n    return Math.sqrt(1 - (t = t - 1) * t);\n  },\n  // Circular acceleration until halfway, then deceleration\n  inOutCirc: function inOutCirc(t) {\n    t /= 0.5;\n    if (t < 1) return -(Math.sqrt(1 - t * t) - 1) / 2;\n    t -= 2;\n    return (Math.sqrt(1 - t * t) + 1) / 2;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (easingsFunctions);\n\n//# sourceURL=webpack://ux-scroll/./src/utils/easing.ts?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ux-scroll/./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});