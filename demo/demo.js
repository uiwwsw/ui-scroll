/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("ui-scroll", [], factory);
  else if (typeof exports === "object") exports["ui-scroll"] = factory();
  else root["ui-scroll"] = factory();
})(this, function () {
  return /******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
      /***/ "./dist/index.js":
        /*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
        /***/ function (module) {
          eval(
            '/*\n * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").\n * This devtool is neither made for production nor for readable output files.\n * It uses "eval()" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with "devtool: false".\n * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(this, function() {\nreturn /******/ (() => { // webpackBootstrap\n/******/ \t"use strict";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ "./index.ts":\n/*!******************!*\\\n  !*** ./index.ts ***!\n  \\******************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\"UxScrollTransition\\": () => (/* reexport safe */ _src_ux_scroll_transition__WEBPACK_IMPORTED_MODULE_0__[\\"default\\"]),\\n/* harmony export */   \\"UxScrollCallback\\": () => (/* reexport safe */ _src_ux_scroll_callback__WEBPACK_IMPORTED_MODULE_1__[\\"default\\"])\\n/* harmony export */ });\\n/* harmony import */ var _src_ux_scroll_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ux-scroll-transition */ \\"./src/ux-scroll-transition.ts\\");\\n/* harmony import */ var _src_ux_scroll_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ux-scroll-callback */ \\"./src/ux-scroll-callback.ts\\");\\n\\n\\n\\n\\n//# sourceURL=webpack://ui-scroll/./index.ts?");\n\n/***/ }),\n\n/***/ "./src/scroll.ts":\n/*!***********************!*\\\n  !*** ./src/scroll.ts ***!\n  \\***********************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\"Direction\\": () => (/* binding */ Direction),\\n/* harmony export */   \\"Size\\": () => (/* binding */ Size),\\n/* harmony export */   \\"default\\": () => (/* binding */ Scroll)\\n/* harmony export */ });\\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ \\"./styles.scss\\");\\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ \\"./src/throttle.ts\\");\\n\\n\\nlet Direction;\\n\\n(function (Direction) {\\n  Direction[\\"Y\\"] = \\"y\\";\\n  Direction[\\"X\\"] = \\"x\\";\\n})(Direction || (Direction = {}));\\n\\nlet Size;\\n\\n(function (Size) {\\n  Size[\\"Y\\"] = \\"height\\";\\n  Size[\\"X\\"] = \\"width\\";\\n})(Size || (Size = {}));\\n\\nclass Scroll {\\n  #props;\\n  #direction = Direction.Y;\\n  #status;\\n  scrollPosition = -1;\\n  scrollDirection = 1;\\n\\n  constructor(props) {\\n    this.#props = props;\\n    this.elements = this.#getElements(this.#props.selector);\\n    this.#onResize();\\n    this.#status = this.elements.map(() => ({\\n      starting: true,\\n      doing: true,\\n      ending: true\\n    }));\\n    this.onResize = (0,_throttle__WEBPACK_IMPORTED_MODULE_1__[\\"default\\"])(this.#onResize, this.#throttleTimer);\\n    this.onScroll = (0,_throttle__WEBPACK_IMPORTED_MODULE_1__[\\"default\\"])(this.#onScroll, this.#throttleTimer);\\n  }\\n\\n  get scrollBottomPosition() {\\n    return this.scrollPosition + this.windowSize;\\n  }\\n\\n  get scrollTopPosition() {\\n    return this.scrollPosition;\\n  } // get #index() {\\n  //   if (this.scrollTopPosition === 0) return 0;\\n  //   if (this.scrollBottomPosition === this.scrollSize)\\n  //     return this.options.length - 1;\\n  //   return this.options.findIndex(\\n  //     ({ startPosition, endPosition, index }) =>\\n  //       startPosition >= this.scrollTopPosition\\n  //   );\\n  // }\\n\\n\\n  get #getStartingOptions() {\\n    return this.options.filter(({\\n      startTopPosition,\\n      startBottomPosition,\\n      index,\\n      starting\\n    }) => starting && (this.scrollDirection ? startTopPosition <= this.scrollBottomPosition : startBottomPosition >= this.scrollTopPosition) && this.#status[index].starting);\\n  }\\n\\n  get #getDoingOptions() {\\n    return this.options.filter(({\\n      startTopPosition,\\n      endBottomPosition,\\n      index,\\n      doing\\n    }) => doing && (this.scrollDirection ? startTopPosition <= this.scrollTopPosition : endBottomPosition >= this.scrollBottomPosition) && this.#status[index].doing);\\n  }\\n\\n  get #getEndingOptions() {\\n    return this.options.filter(({\\n      ending,\\n      index,\\n      endTopPosition,\\n      endBottomPosition\\n    }) => ending && (this.scrollDirection ? endTopPosition <= this.scrollBottomPosition : endBottomPosition >= this.scrollTopPosition) && this.#status[index].ending);\\n  }\\n\\n  get #throttleTimer() {\\n    return this.#props.throttleTimer || 0;\\n  }\\n\\n  #getOptions({\\n    options,\\n    commonOptions\\n  }) {\\n    !options && (options = {});\\n    !commonOptions && (commonOptions = {});\\n    return this.elements.map((x, index) => {\\n      const startPosition = this.#direction === Direction.Y ? x.offsetTop : x.offsetLeft;\\n      const size = this.#direction === Direction.Y ? x.offsetHeight : x.offsetWidth;\\n      const endPosition = startPosition + size;\\n      const startTopMargin = this.#getMargin(commonOptions?.startTopMargin || options[index]?.startTopMargin);\\n      const endTopMargin = this.#getMargin(commonOptions?.endTopMargin || options[index]?.endTopMargin);\\n      const startBottomMargin = this.#getMargin(commonOptions?.startBottomMargin || options[index]?.startBottomMargin);\\n      const endBottomMargin = this.#getMargin(commonOptions?.endBottomMargin || options[index]?.endBottomMargin);\\n      return {\\n        index,\\n        size,\\n        // startPosition: startPosition,\\n        // endPosition: endPosition,\\n        startTopPosition: startPosition + startTopMargin,\\n        endTopPosition: endPosition + endTopMargin,\\n        startBottomPosition: startPosition + startBottomMargin,\\n        endBottomPosition: endPosition + endBottomMargin,\\n        starting: commonOptions?.starting || options[index]?.starting,\\n        doing: commonOptions?.doing || options[index]?.doing,\\n        ending: commonOptions?.ending || options[index]?.ending\\n      };\\n    });\\n  }\\n\\n  #getMargin(margin) {\\n    if (!margin) return 0;\\n    if (margin.includes(\\"px\\")) return Number(margin.replace(\\"px\\", \\"\\"));\\n    if (margin.includes(\\"%\\")) return Number(margin.replace(\\"%\\", \\"\\")) * this.windowSize / 100;\\n    return Number(margin) * this.windowSize;\\n  }\\n\\n  #getElements(selector) {\\n    return Array.prototype.slice.call(document.querySelectorAll(selector));\\n  }\\n\\n  #getWindowSize() {\\n    return this.#direction === Direction.Y ? window.innerHeight : window.innerWidth;\\n  }\\n\\n  #getScrollSize() {\\n    return this.#direction === Direction.Y ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) : Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\\n  }\\n\\n  #checkOptions() {\\n    this.#getStartingOptions.map(({\\n      index\\n    }) => {\\n      const res = this.onStarting(index);\\n      if (res) this.#status[index].starting = false;\\n    });\\n    this.#getDoingOptions.map(({\\n      index\\n    }) => {\\n      const res = this.onDoing(index);\\n      if (res) this.#status[index].doing = false;\\n    });\\n    this.#getEndingOptions.map(({\\n      index\\n    }) => {\\n      const res = this.onEnding(index);\\n      if (res) this.#status[index].ending = false;\\n    });\\n  }\\n\\n  #resetStatus(directive) {\\n    this.scrollDirection = directive;\\n\\n    for (const index in this.#status) {\\n      this.#status[index].starting = true;\\n      this.#status[index].doing = true;\\n      this.#status[index].ending = true;\\n    }\\n  }\\n\\n  #onScroll = this.#throttleUsingRaf(() => {\\n    if (!this.elements) return;\\n\\n    if (this.scrollPosition > window.scrollY) {\\n      this.scrollDirection && this.#resetStatus(0);\\n    } else {\\n      !this.scrollDirection && this.#resetStatus(1);\\n    }\\n\\n    this.#checkOptions();\\n    this.scrollPosition = window.scrollY;\\n  });\\n  #onResize = this.#throttleUsingRaf(() => {\\n    if (!this.elements) return;\\n    this.windowSize = this.#getWindowSize();\\n    this.scrollSize = this.#getScrollSize();\\n    this.options = this.#getOptions({\\n      options: this.#props.options,\\n      commonOptions: this.#props.commonOptions\\n    });\\n  });\\n\\n  #throttleUsingRaf(callback) {\\n    let ticking = false;\\n    return () => {\\n      if (!ticking) {\\n        ticking = true;\\n        requestAnimationFrame(() => {\\n          callback();\\n          ticking = false;\\n        });\\n      }\\n    };\\n  }\\n\\n  onStarting(index) {}\\n\\n  onDoing(index) {}\\n\\n  onEnding(index) {}\\n\\n}\\n\\n//# sourceURL=webpack://ui-scroll/./src/scroll.ts?");\n\n/***/ }),\n\n/***/ "./src/throttle.ts":\n/*!*************************!*\\\n  !*** ./src/throttle.ts ***!\n  \\*************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\"default\\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(fn, wait) {\\n  let inThrottle;\\n  return function (...arg) {\\n    if (inThrottle) return;\\n    inThrottle = setTimeout(() => {\\n      fn.call(this, arg);\\n      inThrottle = false;\\n    }, wait);\\n  };\\n}\\n\\n//# sourceURL=webpack://ui-scroll/./src/throttle.ts?");\n\n/***/ }),\n\n/***/ "./src/ux-scroll-callback.ts":\n/*!***********************************!*\\\n  !*** ./src/ux-scroll-callback.ts ***!\n  \\***********************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\"default\\": () => (/* binding */ UxScrollCallback)\\n/* harmony export */ });\\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \\"./src/scroll.ts\\");\\n\\nclass UxScrollCallback extends _scroll__WEBPACK_IMPORTED_MODULE_0__[\\"default\\"] {\\n  #callbacks;\\n\\n  constructor(props) {\\n    super({ ...props,\\n      commonOptions: {\\n        starting: \\"starting\\",\\n        doing: \\"doing\\",\\n        ending: \\"ending\\",\\n        ...props.commonOptions\\n      }\\n    });\\n    this.#callbacks = props.callbacks;\\n  }\\n\\n  static getStep(level) {\\n    let step = level;\\n    if (level > 100) step = 100;\\n    if (level < 0) step = 0;\\n    return step;\\n  }\\n\\n  onStarting(index) {\\n    const callback = this.#callbacks[index];\\n    const position = this.scrollDirection ? this.options[index].startTopPosition : this.options[index].startBottomPosition;\\n    const level = Math.ceil((this.scrollBottomPosition - position) / this.windowSize * 100);\\n    const step = UxScrollCallback.getStep(level);\\n    const element = this.elements[index];\\n    callback && callback({\\n      status: this.options[index].starting,\\n      index,\\n      step,\\n      element\\n    });\\n    if (level < 0 || level > 100) return true;\\n  }\\n\\n  onDoing(index) {\\n    const callback = this.#callbacks[index];\\n    const position = this.scrollDirection ? this.options[index].endTopPosition : this.options[index].endBottomPosition;\\n    const level = 100 - Math.ceil((position - this.scrollBottomPosition) / (this.options[index].size - this.windowSize) * 100);\\n    const step = UxScrollCallback.getStep(level);\\n    const element = this.elements[index];\\n    callback && callback({\\n      status: this.options[index].doing,\\n      index,\\n      step,\\n      element\\n    });\\n    if (level < 0 || level > 100) return true;\\n  }\\n\\n  onEnding(index) {\\n    const callback = this.#callbacks[index];\\n    const position = this.scrollDirection ? this.options[index].endTopPosition : this.options[index].endBottomPosition;\\n    const level = 100 - Math.ceil((position - this.scrollTopPosition) / this.windowSize * 100);\\n    const step = UxScrollCallback.getStep(level);\\n    const element = this.elements[index];\\n    callback && callback({\\n      status: this.options[index].ending,\\n      index,\\n      step,\\n      element\\n    });\\n    if (level < 0 || level > 100) return true;\\n  }\\n\\n}\\n\\n//# sourceURL=webpack://ui-scroll/./src/ux-scroll-callback.ts?");\n\n/***/ }),\n\n/***/ "./src/ux-scroll-transition.ts":\n/*!*************************************!*\\\n  !*** ./src/ux-scroll-transition.ts ***!\n  \\*************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\"default\\": () => (/* binding */ UxScrollTransition)\\n/* harmony export */ });\\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \\"./src/scroll.ts\\");\\n\\nclass UxScrollTransition extends _scroll__WEBPACK_IMPORTED_MODULE_0__[\\"default\\"] {\\n  constructor(props) {\\n    super({ ...props,\\n      commonOptions: {\\n        starting: \\"ux__transition--animated\\",\\n        startBottomMargin: \\"-1\\",\\n        ...props.commonOptions\\n      }\\n    });\\n  }\\n\\n  onStarting(index) {\\n    if (this.scrollDirection) {\\n      this.elements[index].classList.add(this.options[index].starting);\\n    } else {\\n      this.elements[index].classList.remove(this.options[index].starting);\\n    }\\n\\n    return true;\\n  }\\n\\n}\\n\\n//# sourceURL=webpack://ui-scroll/./src/ux-scroll-transition.ts?");\n\n/***/ }),\n\n/***/ "./styles.scss":\n/*!*********************!*\\\n  !*** ./styles.scss ***!\n  \\*********************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval("__webpack_require__.r(__webpack_exports__);\\n// extracted by mini-css-extract-plugin\\n\\n\\n//# sourceURL=webpack://ui-scroll/./styles.scss?");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_14986__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_14986__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_14986__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_14986__.o(definition, key) && !__nested_webpack_require_14986__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_14986__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_14986__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== \'undefined\' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: \'Module\' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, \'__esModule\', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can\'t be inlined because the eval devtool is used.\n/******/ \tvar __webpack_exports__ = __nested_webpack_require_14986__("./index.ts");\n/******/ \t\n/******/ \treturn __webpack_exports__;\n/******/ })()\n;\n});\n\n//# sourceURL=webpack://ui-scroll/./dist/index.js?'
          );

          /***/
        },

      /***/ "./demo/demo.ts":
        /*!**********************!*\
  !*** ./demo/demo.ts ***!
  \**********************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./dist/index.js");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);\n\nconst c = new ___WEBPACK_IMPORTED_MODULE_0__.UxScrollCallback({\n  selector: ".ux__counting",\n  callbacks: {\n    0: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      if (status !== "doing") return;\n      const test = document.getElementById("test");\n      const children = element.children;\n      const numberElement = children[0].children;\n      const number = step * Number(test.value) / 100;\n      const c1 = Math.floor(number % 10).toString();\n      const c2 = Math.floor(number / 10 % 10).toString();\n      const c3 = Math.floor(number / 100 % 10).toString();\n      const c4 = Math.floor(number / 1000 % 10).toString();\n      numberElement[0].setAttribute("data-value", c4);\n      numberElement[1].setAttribute("data-value", c3);\n      numberElement[2].setAttribute("data-value", c2);\n      numberElement[3].setAttribute("data-value", c1);\n    }\n  }\n});\nconst b = new ___WEBPACK_IMPORTED_MODULE_0__.UxScrollCallback({\n  // throttleTimer: 100,\n  selector: ".ux__sticky",\n  callbacks: {\n    0: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    },\n    1: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    },\n    2: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    },\n    3: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    },\n    4: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    },\n    5: ({\n      status,\n      index,\n      step,\n      element\n    }) => {\n      element.setAttribute(status, step.toString());\n    }\n  }\n});\nconst a = new ___WEBPACK_IMPORTED_MODULE_0__.UxScrollTransition({\n  selector: ".ux__transition"\n});\n\nwindow.onscroll = () => {\n  a.onScroll();\n  b.onScroll();\n  c.onScroll();\n};\n\nwindow.onresize = () => {\n  a.onResize();\n  b.onResize();\n  c.onResize();\n};\n\n//# sourceURL=webpack://ui-scroll/./demo/demo.ts?'
          );

          /***/
        },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ () => module["default"]
            : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__("./demo/demo.ts");
    /******/
    /******/ return __webpack_exports__;
    /******/
  })();
});
