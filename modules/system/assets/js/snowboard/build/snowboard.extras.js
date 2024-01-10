"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.extras"],{

/***/ "./assets/js/snowboard/abstracts/PluginBase.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/abstracts/PluginBase.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginBase)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Plugin base abstract.
 *
 * This class provides the base functionality for all plugins.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginBase = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * The constructor is provided the Snowboard framework instance, and should not be overwritten
   * unless you absolutely know what you're doing.
   *
   * @param {Snowboard} snowboard
   */
  function PluginBase(snowboard) {
    _classCallCheck(this, PluginBase);
    this.snowboard = snowboard;
  }

  /**
   * Plugin constructor.
   *
   * This method should be treated as the true constructor of a plugin, and can be overwritten.
   * It will be called straight after construction.
   */
  _createClass(PluginBase, [{
    key: "construct",
    value: function construct() {}

    /**
     * Defines the required plugins for this specific module to work.
     *
     * @returns {string[]} An array of plugins required for this module to work, as strings.
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return [];
    }

    /**
     * Defines the listener methods for global events.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {};
    }

    /**
     * Plugin destructor.
     *
     * Fired when this plugin is removed. Can be manually called if you have another scenario for
     * destruction, ie. the element attached to the plugin is removed or changed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detach();
      delete this.snowboard;
    }

    /**
     * Plugin destructor (old method name).
     *
     * Allows previous usage of the "destructor" method to still work.
     */
  }, {
    key: "destructor",
    value: function destructor() {
      this.destruct();
    }
  }]);
  return PluginBase;
}();


/***/ }),

/***/ "./assets/js/snowboard/abstracts/Singleton.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/abstracts/Singleton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Singleton)
/* harmony export */ });
/* harmony import */ var _PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Singleton plugin abstract.
 *
 * This is a special definition class that the Snowboard framework will use to interpret the current plugin as a
 * "singleton". This will ensure that only one instance of the plugin class is used across the board.
 *
 * Singletons are initialised on the "domReady" event by default.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Singleton = /*#__PURE__*/function (_PluginBase) {
  _inherits(Singleton, _PluginBase);
  function Singleton() {
    _classCallCheck(this, Singleton);
    return _callSuper(this, Singleton, arguments);
  }
  return _createClass(Singleton);
}(_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/AssetLoader.js":
/*!***************************************************!*\
  !*** ./assets/js/snowboard/extras/AssetLoader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Asset Loader.
 *
 * Provides simple asset loading functionality for Snowboard, making it easy to pre-load images or
 * include JavaScript or CSS assets on the fly.
 *
 * By default, this loader will listen to any assets that have been requested to load in an AJAX
 * response, such as responses from a component.
 *
 * You can also load assets manually by calling the following:
 *
 * ```js
 * Snowboard.addPlugin('assetLoader', AssetLoader);
 * Snowboard.assetLoader().processAssets(assets);
 * ```
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AssetLoader = /*#__PURE__*/function (_Singleton) {
  _inherits(AssetLoader, _Singleton);
  function AssetLoader() {
    _classCallCheck(this, AssetLoader);
    return _callSuper(this, AssetLoader, arguments);
  }
  _createClass(AssetLoader, [{
    key: "listens",
    value:
    /**
     * Event listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ajaxLoadAssets: 'load'
      };
    }

    /**
     * Process and load assets.
     *
     * The `assets` property of this method requires an object with any of the following keys and an
     * array of paths:
     *
     * - `js`: An array of JavaScript URLs to load
     * - `css`: An array of CSS stylesheet URLs to load
     * - `img`: An array of image URLs to pre-load
     *
     * Both `js` and `css` files will be automatically injected, however `img` files will not.
     *
     * This method will return a Promise that resolves when all required assets are loaded. If an
     * asset fails to load, this Promise will be rejected.
     *
     * ESLint *REALLY* doesn't like this code, but ignore it. It's the only way it works.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assets) {
        var _iterator, _step, script, _iterator2, _step2, style, _iterator3, _step3, image;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(assets.js && assets.js.length > 0)) {
                _context.next = 24;
                break;
              }
              _iterator = _createForOfIteratorHelper(assets.js);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              script = _step.value;
              _context.prev = 6;
              _context.next = 9;
              return this.loadScript(script);
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](6);
              return _context.abrupt("return", Promise.reject(_context.t0));
            case 14:
              _context.next = 4;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](2);
              _iterator.e(_context.t1);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
              if (!(assets.css && assets.css.length > 0)) {
                _context.next = 48;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(assets.css);
              _context.prev = 26;
              _iterator2.s();
            case 28:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 40;
                break;
              }
              style = _step2.value;
              _context.prev = 30;
              _context.next = 33;
              return this.loadStyle(style);
            case 33:
              _context.next = 38;
              break;
            case 35:
              _context.prev = 35;
              _context.t2 = _context["catch"](30);
              return _context.abrupt("return", Promise.reject(_context.t2));
            case 38:
              _context.next = 28;
              break;
            case 40:
              _context.next = 45;
              break;
            case 42:
              _context.prev = 42;
              _context.t3 = _context["catch"](26);
              _iterator2.e(_context.t3);
            case 45:
              _context.prev = 45;
              _iterator2.f();
              return _context.finish(45);
            case 48:
              if (!(assets.img && assets.img.length > 0)) {
                _context.next = 72;
                break;
              }
              _iterator3 = _createForOfIteratorHelper(assets.img);
              _context.prev = 50;
              _iterator3.s();
            case 52:
              if ((_step3 = _iterator3.n()).done) {
                _context.next = 64;
                break;
              }
              image = _step3.value;
              _context.prev = 54;
              _context.next = 57;
              return this.loadImage(image);
            case 57:
              _context.next = 62;
              break;
            case 59:
              _context.prev = 59;
              _context.t4 = _context["catch"](54);
              return _context.abrupt("return", Promise.reject(_context.t4));
            case 62:
              _context.next = 52;
              break;
            case 64:
              _context.next = 69;
              break;
            case 66:
              _context.prev = 66;
              _context.t5 = _context["catch"](50);
              _iterator3.e(_context.t5);
            case 69:
              _context.prev = 69;
              _iterator3.f();
              return _context.finish(69);
            case 72:
              return _context.abrupt("return", Promise.resolve());
            case 73:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 18, 21, 24], [6, 11], [26, 42, 45, 48], [30, 35], [50, 66, 69, 72], [54, 59]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
    /**
     * Injects and loads a JavaScript URL into the DOM.
     *
     * The script will be appended before the closing `</body>` tag.
     *
     * @param {String} script
     * @returns {Promise}
     */
    )
  }, {
    key: "loadScript",
    value: function loadScript(script) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        // Check that script is not already loaded
        var loaded = document.querySelector("script[src=\"".concat(script, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create script
        var domScript = document.createElement('script');
        domScript.setAttribute('type', 'text/javascript');
        domScript.setAttribute('src', script);
        domScript.addEventListener('load', function () {
          _this.snowboard.globalEvent('assetLoader.loaded', 'script', script, domScript);
          resolve();
        });
        domScript.addEventListener('error', function () {
          _this.snowboard.globalEvent('assetLoader.error', 'script', script, domScript);
          reject(new Error("Unable to load script file: \"".concat(script, "\"")));
        });
        document.body.append(domScript);
      });
    }

    /**
     * Injects and loads a CSS stylesheet into the DOM.
     *
     * The stylesheet will be appended before the closing `</head>` tag.
     *
     * @param {String} script
     * @returns {Promise}
     */
  }, {
    key: "loadStyle",
    value: function loadStyle(style) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        // Check that stylesheet is not already loaded
        var loaded = document.querySelector("link[rel=\"stylesheet\"][href=\"".concat(style, "\"]"));
        if (loaded) {
          resolve();
          return;
        }

        // Create stylesheet
        var domCss = document.createElement('link');
        domCss.setAttribute('rel', 'stylesheet');
        domCss.setAttribute('href', style);
        domCss.addEventListener('load', function () {
          _this2.snowboard.globalEvent('assetLoader.loaded', 'style', style, domCss);
          resolve();
        });
        domCss.addEventListener('error', function () {
          _this2.snowboard.globalEvent('assetLoader.error', 'style', style, domCss);
          reject(new Error("Unable to load stylesheet file: \"".concat(style, "\"")));
        });
        document.head.append(domCss);
      });
    }

    /**
     * Pre-loads an image.
     *
     * The image will not be injected into the DOM.
     *
     * @param {String} image
     * @returns {Promise}
     */
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.addEventListener('load', function () {
          _this3.snowboard.globalEvent('assetLoader.loaded', 'image', image, img);
          resolve();
        });
        img.addEventListener('error', function () {
          _this3.snowboard.globalEvent('assetLoader.error', 'image', image, img);
          reject(new Error("Unable to load image file: \"".concat(image, "\"")));
        });
        img.src = image;
      });
    }
  }]);
  return AssetLoader;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/AttachLoading.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/extras/AttachLoading.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachLoading)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Allows attaching a loading class on elements that an AJAX request is targeting.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttachLoading = /*#__PURE__*/function (_Singleton) {
  _inherits(AttachLoading, _Singleton);
  function AttachLoading() {
    _classCallCheck(this, AttachLoading);
    return _callSuper(this, AttachLoading, arguments);
  }
  _createClass(AttachLoading, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ajaxStart: 'ajaxStart',
        ajaxDone: 'ajaxDone'
      };
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise, request) {
      var _this = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.add(_this.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.add(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "ajaxDone",
    value: function ajaxDone(data, request) {
      var _this2 = this;
      if (!request.element) {
        return;
      }
      if (request.element.tagName === 'FORM') {
        var loadElements = request.element.querySelectorAll('[data-attach-loading]');
        if (loadElements.length > 0) {
          loadElements.forEach(function (element) {
            element.classList.remove(_this2.getLoadingClass(element));
          });
        }
      } else if (request.element.dataset.attachLoading !== undefined) {
        request.element.classList.remove(this.getLoadingClass(request.element));
      }
    }
  }, {
    key: "getLoadingClass",
    value: function getLoadingClass(element) {
      return element.dataset.attachLoading !== undefined && element.dataset.attachLoading !== '' ? element.dataset.attachLoading : 'wn-loading';
    }
  }]);
  return AttachLoading;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/DataConfig.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/extras/DataConfig.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataConfig)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Data configuration provider.
 *
 * Provides a mechanism for passing configuration data through an element's data attributes. This
 * is generally used for widgets or UI interactions to configure them.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var DataConfig = /*#__PURE__*/function (_PluginBase) {
  _inherits(DataConfig, _PluginBase);
  function DataConfig() {
    _classCallCheck(this, DataConfig);
    return _callSuper(this, DataConfig, arguments);
  }
  _createClass(DataConfig, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {PluginBase} instance
     * @param {HTMLElement} element
     * @param {Object} localConfig
     */
    function construct(instance, element, localConfig) {
      if (instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('You must provide a Snowboard plugin to enable data configuration');
      }
      if (element instanceof HTMLElement === false) {
        throw new Error('Data configuration can only be extracted from HTML elements');
      }
      this.instance = instance;
      this.element = element;
      this.localConfig = localConfig || {};
      this.instanceConfig = {};
      this.acceptedConfigs = {};
      this.refresh();
    }

    /**
     * Gets the config for this instance.
     *
     * If the `config` parameter is unspecified, returns the entire configuration.
     *
     * @param {string} config
     */
  }, {
    key: "get",
    value: function get(config) {
      if (config === undefined) {
        return this.instanceConfig;
      }
      if (this.instanceConfig[config] !== undefined) {
        return this.instanceConfig[config];
      }
      return undefined;
    }

    /**
     * Sets the config for this instance.
     *
     * This allows you to override, at runtime, any configuration value as necessary.
     *
     * @param {string} config
     * @param {any} value
     * @param {boolean} persist
     */
  }, {
    key: "set",
    value: function set(config, value, persist) {
      if (config === undefined) {
        throw new Error('You must provide a configuration key to set');
      }
      this.instanceConfig[config] = value;
      if (persist === true) {
        this.element.dataset[config] = value;
        this.localConfig[config] = value;
      }
    }

    /**
     * Refreshes the configuration from the element.
     *
     * This will allow you to make changes to the data config on a DOM level and re-apply them
     * to the config on the JavaScript side.
     */
  }, {
    key: "refresh",
    value: function refresh() {
      this.acceptedConfigs = this.getAcceptedConfigs();
      this.instanceConfig = this.processConfig();
    }

    /**
     * Determines the available configurations that can be set through the data config.
     *
     * If an instance has an `acceptAllDataConfigs` property, set to `true`, then all data
     * attributes will be available as configuration values. This can be a security concern, so
     * tread carefully.
     *
     * Otherwise, available configurations will be determined by the keys available in an object
     * returned by a `defaults()` method in the instance.
     *
     * @returns {string[]|boolean}
     */
  }, {
    key: "getAcceptedConfigs",
    value: function getAcceptedConfigs() {
      if (this.instance.acceptAllDataConfigs !== undefined && this.instance.acceptAllDataConfigs === true) {
        return true;
      }
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return Object.keys(this.instance.defaults());
      }
      return false;
    }

    /**
     * Returns the default values for the instance.
     *
     * This will be an empty object if the instance either does not have a `defaults()` method, or
     * the method itself does not return an object.
     *
     * @returns {object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      if (this.instance.defaults !== undefined && typeof this.instance.defaults === 'function' && _typeof(this.instance.defaults()) === 'object') {
        return this.instance.defaults();
      }
      return {};
    }

    /**
     * Processes the configuration.
     *
     * Loads up the defaults, then populates it with any configuration values provided by the data
     * attributes, based on the rules of the accepted configurations.
     *
     * This configuration object is then cached and available through `config.get()` calls.
     *
     * @returns {object}
     */
  }, {
    key: "processConfig",
    value: function processConfig() {
      var config = this.getDefaults();
      if (this.acceptedConfigs === false) {
        return config;
      }

      /* eslint-disable */
      for (var key in this.element.dataset) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(key)) {
          config[key] = this.coerceValue(this.element.dataset[key]);
        }
      }
      for (var _key in this.localConfig) {
        if (this.acceptedConfigs === true || this.acceptedConfigs.includes(_key)) {
          config[_key] = this.localConfig[_key];
        }
      }
      /* eslint-enable */

      return config;
    }

    /**
     * Coerces configuration values for JavaScript.
     *
     * Takes the string value returned from the data attribute and coerces it into a more suitable
     * type for JavaScript processing.
     *
     * @param {*} value
     * @returns {*}
     */
  }, {
    key: "coerceValue",
    value: function coerceValue(value) {
      var stringValue = String(value);

      // Null value
      if (stringValue === 'null') {
        return null;
      }

      // Undefined value
      if (stringValue === 'undefined') {
        return undefined;
      }

      // Base64 value
      if (stringValue.startsWith('base64:')) {
        var base64str = stringValue.replace(/^base64:/, '');
        var decoded = atob(base64str);
        return this.coerceValue(decoded);
      }

      // Boolean value
      if (['true', 'yes'].includes(stringValue.toLowerCase())) {
        return true;
      }
      if (['false', 'no'].includes(stringValue.toLowerCase())) {
        return false;
      }

      // Numeric value
      if (/^[-+]?[0-9]+(\.[0-9]+)?$/.test(stringValue)) {
        return Number(stringValue);
      }

      // JSON value
      try {
        return this.snowboard.jsonParser().parse(stringValue);
      } catch (e) {
        return stringValue === '' ? true : stringValue;
      }
    }
  }]);
  return DataConfig;
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/Flash.js":
/*!*********************************************!*\
  !*** ./assets/js/snowboard/extras/Flash.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Flash)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Provides flash messages for the CMS.
 *
 * Flash messages will pop up at the top center of the page and will remain for 7 seconds by default. Hovering over
 * the message will reset and pause the timer. Clicking on the flash message will dismiss it.
 *
 * Arguments:
 *  - "message": The content of the flash message. HTML is accepted.
 *  - "type": The type of flash message. This is appended as a class to the flash message itself.
 *  - "duration": How long the flash message will stay visible for, in seconds. Default: 7 seconds.
 *
 * Usage:
 *      Snowboard.flash('This is a flash message', 'info', 8);
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Flash = /*#__PURE__*/function (_PluginBase) {
  _inherits(Flash, _PluginBase);
  function Flash() {
    _classCallCheck(this, Flash);
    return _callSuper(this, Flash, arguments);
  }
  _createClass(Flash, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {string} message
     * @param {string} type
     * @param {Number} duration
     */
    function construct(message, type, duration) {
      this.message = message;
      this.type = type || 'default';
      this.duration = Number(duration || 7);
      if (this.duration < 0) {
        throw new Error('Flash duration must be a positive number, or zero');
      }
      this.clear();
      this.timer = null;
      this.flashTimer = null;
      this.create();
    }

    /**
     * Defines dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['transition'];
    }

    /**
     * Destructor.
     *
     * This will ensure the flash message is removed and timeout is cleared if the module is removed.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      if (this.timer !== null) {
        window.clearTimeout(this.timer);
      }
      if (this.flashTimer) {
        this.flashTimer.remove();
      }
      if (this.flash) {
        this.flash.remove();
        this.flash = null;
        this.flashTimer = null;
      }
      _get(_getPrototypeOf(Flash.prototype), "destruct", this).call(this);
    }

    /**
     * Creates the flash message.
     */
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      this.snowboard.globalEvent('flash.create', this);
      this.flash = document.createElement('DIV');
      this.flash.innerHTML = this.message;
      this.flash.classList.add('flash-message', this.type);
      this.flash.removeAttribute('data-control');
      this.flash.addEventListener('click', function () {
        return _this.remove();
      });
      this.flash.addEventListener('mouseover', function () {
        return _this.stopTimer();
      });
      this.flash.addEventListener('mouseout', function () {
        return _this.startTimer();
      });
      if (this.duration > 0) {
        this.flashTimer = document.createElement('DIV');
        this.flashTimer.classList.add('flash-timer');
        this.flash.appendChild(this.flashTimer);
      } else {
        this.flash.classList.add('no-timer');
      }

      // Add to body
      document.body.appendChild(this.flash);
      this.snowboard.transition(this.flash, 'show', function () {
        _this.startTimer();
      });
    }

    /**
     * Removes the flash message.
     */
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;
      this.snowboard.globalEvent('flash.remove', this);
      this.stopTimer();
      this.snowboard.transition(this.flash, 'hide', function () {
        _this2.flash.remove();
        _this2.flash = null;
        _this2.destruct();
      });
    }

    /**
     * Clears all flash messages available on the page.
     */
  }, {
    key: "clear",
    value: function clear() {
      document.querySelectorAll('body > div.flash-message').forEach(function (element) {
        return element.remove();
      });
    }

    /**
     * Starts the timer for this flash message.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this3 = this;
      if (this.duration === 0) {
        return;
      }
      this.timerTrans = this.snowboard.transition(this.flashTimer, 'timeout', null, "".concat(this.duration, ".0s"), true);
      this.timer = window.setTimeout(function () {
        return _this3.remove();
      }, this.duration * 1000);
    }

    /**
     * Resets the timer for this flash message.
     */
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      if (this.timerTrans) {
        this.timerTrans.cancel();
      }
      if (this.timer) {
        window.clearTimeout(this.timer);
      }
    }
  }]);
  return Flash;
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/FlashListener.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/extras/FlashListener.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashListener)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Defines a default listener for flash events.
 *
 * Connects the Flash plugin to various events that use flash messages.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FlashListener = /*#__PURE__*/function (_Singleton) {
  _inherits(FlashListener, _Singleton);
  function FlashListener() {
    _classCallCheck(this, FlashListener);
    return _callSuper(this, FlashListener, arguments);
  }
  _createClass(FlashListener, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['flash'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxErrorMessage: 'ajaxErrorMessage',
        ajaxFlashMessages: 'ajaxFlashMessages'
      };
    }

    /**
     * Do flash messages for PHP flash responses.
     */
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;
      document.querySelectorAll('[data-control="flash-message"]').forEach(function (element) {
        _this.snowboard.flash(element.innerHTML, element.dataset.flashType, element.dataset.flashDuration);
        element.remove();
      });
    }

    /**
     * Shows a flash message for AJAX errors.
     *
     * @param {string} message
     * @returns {Boolean}
     */
  }, {
    key: "ajaxErrorMessage",
    value: function ajaxErrorMessage(message) {
      this.snowboard.flash(message, 'error');
      return false;
    }

    /**
     * Shows flash messages returned directly from AJAX functionality.
     *
     * @param {Object} messages
     */
  }, {
    key: "ajaxFlashMessages",
    value: function ajaxFlashMessages(messages) {
      var _this2 = this;
      Object.entries(messages).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          cssClass = _entry[0],
          message = _entry[1];
        _this2.snowboard.flash(message, cssClass);
      });
      return false;
    }
  }]);
  return FlashListener;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/FormValidation.js":
/*!******************************************************!*\
  !*** ./assets/js/snowboard/extras/FormValidation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidation)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Adds AJAX-driven form validation to Snowboard requests.
 *
 * Documentation for this feature can be found here:
 * https://wintercms.com/docs/snowboard/extras#ajax-validation
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var FormValidation = /*#__PURE__*/function (_Singleton) {
  _inherits(FormValidation, _Singleton);
  function FormValidation() {
    _classCallCheck(this, FormValidation);
    return _callSuper(this, FormValidation, arguments);
  }
  _createClass(FormValidation, [{
    key: "construct",
    value:
    /**
     * Constructor.
     */
    function construct() {
      this.errorBags = [];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxStart: 'clearValidation',
        ajaxValidationErrors: 'doValidation'
      };
    }

    /**
     * Ready event handler.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.collectErrorBags(document);
    }

    /**
     * Retrieves validation errors from an AJAX response and passes them through to the error bags.
     *
     * This handler returns false to cancel any further validation handling, and prevents the flash
     * message that is displayed by default for field errors in AJAX requests from showing.
     *
     * @param {HTMLFormElement} form
     * @param {Object} invalidFields
     * @param {Request} request
     * @returns {Boolean}
     */
  }, {
    key: "doValidation",
    value: function doValidation(form, invalidFields, request) {
      var _this = this;
      if (request.element.dataset.requestValidate === undefined) {
        return null;
      }
      if (!form) {
        return null;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === form;
      });
      errorBags.forEach(function (errorBag) {
        _this.showErrorBag(errorBag, invalidFields);
      });
      return false;
    }

    /**
     * Clears any validation errors in the given form.
     *
     * @param {Promise} promise
     * @param {Request} request
     * @returns {void}
     */
  }, {
    key: "clearValidation",
    value: function clearValidation(promise, request) {
      var _this2 = this;
      if (request.element.dataset.requestValidate === undefined) {
        return;
      }
      if (!request.form) {
        return;
      }
      var errorBags = this.errorBags.filter(function (errorBag) {
        return errorBag.form === request.form;
      });
      errorBags.forEach(function (errorBag) {
        _this2.hideErrorBag(errorBag);
      });
    }

    /**
     * Collects error bags (elements with "data-validate-error" attribute) and links them to a
     * placeholder and form.
     *
     * The error bags will be initially hidden, and will only show when validation errors occur.
     *
     * @param {HTMLElement} rootNode
     */
  }, {
    key: "collectErrorBags",
    value: function collectErrorBags(rootNode) {
      var _this3 = this;
      rootNode.querySelectorAll('[data-validate-error], [data-validate-for]').forEach(function (errorBag) {
        var form = errorBag.closest('form[data-request-validate]');

        // If this error bag does not reside within a validating form, remove it
        if (!form) {
          errorBag.parentNode.removeChild(errorBag);
          return;
        }

        // Find message list node, if available
        var messageListElement = null;
        if (errorBag.matches('[data-validate-error]')) {
          messageListElement = errorBag.querySelector('[data-message]');
        }

        // Create a placeholder node
        var placeholder = document.createComment('');

        // Register error bag and replace with placeholder
        var errorBagData = {
          element: errorBag,
          form: form,
          validateFor: errorBag.dataset.validateFor ? errorBag.dataset.validateFor.split(/\s*,\s*/) : '*',
          placeholder: placeholder,
          messageListElement: messageListElement ? messageListElement.cloneNode(true) : null,
          messageListAnchor: null,
          customMessage: errorBag.dataset.validateFor ? errorBag.textContent !== '' || errorBag.childNodes.length > 0 : false
        };

        // If an message list element exists, create another placeholder to act as an anchor point
        if (messageListElement) {
          var messageListAnchor = document.createComment('');
          messageListElement.parentNode.replaceChild(messageListAnchor, messageListElement);
          errorBagData.messageListAnchor = messageListAnchor;
        }
        errorBag.parentNode.replaceChild(placeholder, errorBag);
        _this3.errorBags.push(errorBagData);
      });
    }

    /**
     * Hides an error bag, replacing the error messages with a placeholder node.
     *
     * @param {Object} errorBag
     */
  }, {
    key: "hideErrorBag",
    value: function hideErrorBag(errorBag) {
      if (errorBag.element.isConnected) {
        errorBag.element.parentNode.replaceChild(errorBag.placeholder, errorBag.element);
      }
    }

    /**
     * Shows an error bag with the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     */
  }, {
    key: "showErrorBag",
    value: function showErrorBag(errorBag, invalidFields) {
      if (!this.errorBagValidatesField(errorBag, invalidFields)) {
        return;
      }
      if (!errorBag.element.isConnected) {
        errorBag.placeholder.parentNode.replaceChild(errorBag.element, errorBag.placeholder);
      }
      if (errorBag.validateFor !== '*') {
        if (!errorBag.customMessage) {
          var firstField = Object.keys(invalidFields).filter(function (field) {
            return errorBag.validateFor.includes(field);
          }).shift();
          var _invalidFields$firstF = _slicedToArray(invalidFields[firstField], 1);
          errorBag.element.innerHTML = _invalidFields$firstF[0];
        }
      } else if (errorBag.messageListElement) {
        // Remove previous error messages
        errorBag.element.querySelectorAll('[data-validation-message]').forEach(function (message) {
          message.parentNode.removeChild(message);
        });
        Object.entries(invalidFields).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            errors = _entry[1];
          errors.forEach(function (error) {
            var messageElement = errorBag.messageListElement.cloneNode(true);
            messageElement.dataset.validationMessage = '';
            messageElement.innerHTML = error;
            errorBag.messageListAnchor.after(messageElement);
          });
        });
      } else {
        var _invalidFields$Object = _slicedToArray(invalidFields[Object.keys(invalidFields).shift()], 1);
        errorBag.element.innerHTML = _invalidFields$Object[0];
      }
    }

    /**
     * Determines if a given error bag applies for the given invalid fields.
     *
     * @param {Object} errorBag
     * @param {Object} invalidFields
     * @returns {Boolean}
     */
  }, {
    key: "errorBagValidatesField",
    value: function errorBagValidatesField(errorBag, invalidFields) {
      if (errorBag.validateFor === '*') {
        return true;
      }
      return Object.keys(invalidFields).filter(function (field) {
        return errorBag.validateFor.includes(field);
      }).length > 0;
    }
  }]);
  return FormValidation;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/StripeLoader.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/extras/StripeLoader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Displays a stripe at the top of the page that indicates loading.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StripeLoader = /*#__PURE__*/function (_Singleton) {
  _inherits(StripeLoader, _Singleton);
  function StripeLoader() {
    _classCallCheck(this, StripeLoader);
    return _callSuper(this, StripeLoader, arguments);
  }
  _createClass(StripeLoader, [{
    key: "dependencies",
    value:
    /**
     * Defines dependenices.
     *
     * @returns {string[]}
     */
    function dependencies() {
      return ['request'];
    }

    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'ready',
        ajaxStart: 'ajaxStart'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      this.counter = 0;
      this.createStripe();
    }
  }, {
    key: "ajaxStart",
    value: function ajaxStart(promise) {
      var _this = this;
      this.show();
      promise.then(function () {
        _this.hide();
      })["catch"](function () {
        _this.hide();
      });
    }
  }, {
    key: "createStripe",
    value: function createStripe() {
      this.indicator = document.createElement('DIV');
      this.stripe = document.createElement('DIV');
      this.stripeLoaded = document.createElement('DIV');
      this.indicator.classList.add('stripe-loading-indicator', 'loaded');
      this.stripe.classList.add('stripe');
      this.stripeLoaded.classList.add('stripe-loaded');
      this.indicator.appendChild(this.stripe);
      this.indicator.appendChild(this.stripeLoaded);
      document.body.appendChild(this.indicator);
    }
  }, {
    key: "show",
    value: function show() {
      this.counter += 1;
      var newStripe = this.stripe.cloneNode(true);
      this.indicator.appendChild(newStripe);
      this.stripe.remove();
      this.stripe = newStripe;
      if (this.counter > 1) {
        return;
      }
      this.indicator.classList.remove('loaded');
      document.body.classList.add('wn-loading');
    }
  }, {
    key: "hide",
    value: function hide(force) {
      this.counter -= 1;
      if (force === true) {
        this.counter = 0;
      }
      if (this.counter <= 0) {
        this.indicator.classList.add('loaded');
        document.body.classList.remove('wn-loading');
      }
    }
  }]);
  return StripeLoader;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/StylesheetLoader.js":
/*!********************************************************!*\
  !*** ./assets/js/snowboard/extras/StylesheetLoader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StylesheetLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Embeds the "extras" stylesheet into the page, if it is not loaded through the theme.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var StylesheetLoader = /*#__PURE__*/function (_Singleton) {
  _inherits(StylesheetLoader, _Singleton);
  function StylesheetLoader() {
    _classCallCheck(this, StylesheetLoader);
    return _callSuper(this, StylesheetLoader, arguments);
  }
  _createClass(StylesheetLoader, [{
    key: "listens",
    value:
    /**
     * Defines listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready'
      };
    }
  }, {
    key: "ready",
    value: function ready() {
      var stylesLoaded = false;

      // Determine if stylesheet is already loaded
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (css.href.endsWith('/modules/system/assets/css/snowboard.extras.css')) {
          stylesLoaded = true;
        }
      });
      if (!stylesLoaded) {
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', this.snowboard.url().to('/modules/system/assets/css/snowboard.extras.css'));
        document.head.appendChild(stylesheet);
      }
    }
  }]);
  return StylesheetLoader;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/extras/Transition.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/extras/Transition.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Provides transition support for elements.
 *
 * Transition allows CSS transitions to be controlled and callbacks to be run once completed. It works similar to Vue
 * transitions with 3 stages of transition, and classes assigned to the element with the transition name suffixed with
 * the stage of transition:
 *
 *  - `in`: A class assigned to the element for the first frame of the transition, removed afterwards. This should be
 *      used to define the initial state of the transition.
 *  - `active`: A class assigned to the element for the duration of the transition. This should be used to define the
 *      transition itself.
 *  - `out`: A class assigned to the element after the first frame of the transition and kept to the end of the
 *      transition. This should define the end state of the transition.
 *
 * Usage:
 *      Snowboard.transition(document.element, 'transition', () => {
 *          console.log('Remove element after 7 seconds');
 *          this.remove();
 *      }, '7s');
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Transition = /*#__PURE__*/function (_PluginBase) {
  _inherits(Transition, _PluginBase);
  function Transition() {
    _classCallCheck(this, Transition);
    return _callSuper(this, Transition, arguments);
  }
  _createClass(Transition, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {HTMLElement} element The element to transition
     * @param {string} transition The name of the transition, this prefixes the stages of transition.
     * @param {Function} callback An optional callback to call when the transition ends.
     * @param {Number} duration An optional override on the transition duration. Must be specified as 's' (secs) or 'ms' (msecs).
     * @param {Boolean} trailTo If true, the "out" class will remain after the end of the transition.
     */
    function construct(element, transition, callback, duration, trailTo) {
      if (element instanceof HTMLElement === false) {
        throw new Error('A HTMLElement must be provided for transitioning');
      }
      this.element = element;
      if (typeof transition !== 'string') {
        throw new Error('Transition name must be specified as a string');
      }
      this.transition = transition;
      if (callback && typeof callback !== 'function') {
        throw new Error('Callback must be a valid function');
      }
      this.callback = callback;
      if (duration) {
        this.duration = this.parseDuration(duration);
      } else {
        this.duration = null;
      }
      this.trailTo = trailTo === true;
      this.doTransition();
    }

    /**
     * Maps event classes to the given transition state.
     *
     * @param  {...any} args
     * @returns {Array}
     */
  }, {
    key: "eventClasses",
    value: function eventClasses() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var eventClasses = {
        "in": "".concat(this.transition, "-in"),
        active: "".concat(this.transition, "-active"),
        out: "".concat(this.transition, "-out")
      };
      if (args.length === 0) {
        return Object.values(eventClasses);
      }
      var returnClasses = [];
      Object.entries(eventClasses).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (args.indexOf(key) !== -1) {
          returnClasses.push(value);
        }
      });
      return returnClasses;
    }

    /**
     * Executes the transition.
     *
     * @returns {void}
     */
  }, {
    key: "doTransition",
    value: function doTransition() {
      var _this = this;
      // Add duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = this.duration;
      }
      this.resetClasses();

      // Start transition - show "in" and "active" classes
      this.eventClasses('in', 'active').forEach(function (eventClass) {
        _this.element.classList.add(eventClass);
      });
      window.requestAnimationFrame(function () {
        // Ensure a transition exists
        if (window.getComputedStyle(_this.element)['transition-duration'] !== '0s') {
          // Listen for the transition to end
          _this.element.addEventListener('transitionend', function () {
            return _this.onTransitionEnd();
          }, {
            once: true
          });
          window.requestAnimationFrame(function () {
            _this.element.classList.remove(_this.eventClasses('in')[0]);
            _this.element.classList.add(_this.eventClasses('out')[0]);
          });
        } else {
          _this.resetClasses();
          if (_this.callback) {
            _this.callback.apply(_this.element);
          }
          _this.destruct();
        }
      });
    }

    /**
     * Callback function when the transition ends.
     *
     * When a transition ends, the instance of the transition is automatically destructed.
     *
     * @returns {void}
     */
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      var _this2 = this;
      this.eventClasses('active', !this.trailTo ? 'out' : '').forEach(function (eventClass) {
        _this2.element.classList.remove(eventClass);
      });
      if (this.callback) {
        this.callback.apply(this.element);
      }

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }
      this.destruct();
    }

    /**
     * Cancels a transition.
     *
     * @returns {void}
     */
  }, {
    key: "cancel",
    value: function cancel() {
      var _this3 = this;
      this.element.removeEventListener('transitionend', function () {
        return _this3.onTransitionEnd;
      }, {
        once: true
      });
      this.resetClasses();

      // Remove duration override
      if (this.duration !== null) {
        this.element.style.transitionDuration = null;
      }

      // Call destructor
      this.destruct();
    }

    /**
     * Resets the classes, removing any transition classes.
     *
     * @returns {void}
     */
  }, {
    key: "resetClasses",
    value: function resetClasses() {
      var _this4 = this;
      this.eventClasses().forEach(function (eventClass) {
        _this4.element.classList.remove(eventClass);
      });
    }

    /**
     * Parses a given duration and converts it to a "ms" value.
     *
     * @param {String} duration
     * @returns {String}
     */
  }, {
    key: "parseDuration",
    value: function parseDuration(duration) {
      var parsed = /^([0-9]+(\.[0-9]+)?)(m?s)?$/.exec(duration);
      var amount = Number(parsed[1]);
      var unit = parsed[3] === 's' ? 'sec' : 'msec';
      return unit === 'sec' ? "".concat(amount * 1000, "ms") : "".concat(Math.floor(amount), "ms");
    }
  }]);
  return Transition;
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/snowboard.extras.js":
/*!*************************************************!*\
  !*** ./assets/js/snowboard/snowboard.extras.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extras_Flash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras/Flash */ "./assets/js/snowboard/extras/Flash.js");
/* harmony import */ var _extras_FlashListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras/FlashListener */ "./assets/js/snowboard/extras/FlashListener.js");
/* harmony import */ var _extras_FormValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extras/FormValidation */ "./assets/js/snowboard/extras/FormValidation.js");
/* harmony import */ var _extras_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/Transition */ "./assets/js/snowboard/extras/Transition.js");
/* harmony import */ var _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extras/AttachLoading */ "./assets/js/snowboard/extras/AttachLoading.js");
/* harmony import */ var _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extras/StripeLoader */ "./assets/js/snowboard/extras/StripeLoader.js");
/* harmony import */ var _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/StylesheetLoader */ "./assets/js/snowboard/extras/StylesheetLoader.js");
/* harmony import */ var _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extras/AssetLoader */ "./assets/js/snowboard/extras/AssetLoader.js");
/* harmony import */ var _extras_DataConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extras/DataConfig */ "./assets/js/snowboard/extras/DataConfig.js");









if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the extra plugins.');
}
(function (Snowboard) {
  Snowboard.addPlugin('assetLoader', _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_7__["default"]);
  Snowboard.addPlugin('dataConfig', _extras_DataConfig__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Snowboard.addPlugin('extrasStyles', _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Snowboard.addPlugin('transition', _extras_Transition__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Snowboard.addPlugin('flash', _extras_Flash__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Snowboard.addPlugin('flashListener', _extras_FlashListener__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Snowboard.addPlugin('formValidation', _extras_FormValidation__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Snowboard.addPlugin('attachLoading', _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Snowboard.addPlugin('stripeLoader', _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_5__["default"]);
})(window.Snowboard);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.extras.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmV4dHJhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBUXFCQSxVQUFVO0VBQzNCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxXQUFZQyxTQUFTLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0VBQzlCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUMsVUFBQSxFQUFZLENBQ1o7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFFLGFBQUEsRUFBZTtNQUNYLE9BQU8sRUFBRTtJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRyxRQUFBLEVBQVU7TUFDTixPQUFPLENBQUMsQ0FBQztJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFJLFNBQUEsRUFBVztNQUNQLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1QsU0FBUztJQUN6Qjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQU0sV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztJQUNuQjtFQUFDO0VBQUEsT0FBQVQsVUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFWTs7QUFFakI7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LENBQUMsZUFBZSxFQUFFbEcsNkRBQWEsQ0FBQztFQUNuRGlHLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFdEYsOERBQWMsQ0FBQztFQUNyRHFGLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLGVBQWUsRUFBRS9KLDZEQUFhLENBQUM7RUFDbkQ4SixTQUFTLENBQUNDLFNBQVMsQ0FBQyxjQUFjLEVBQUU3Qyw0REFBWSxDQUFDO0FBQ3JELENBQUMsRUFBRWxFLE1BQU0sQ0FBQzhHLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1BsdWdpbkJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Fzc2V0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0F0dGFjaExvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRGF0YUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaExpc3RlbmVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Zvcm1WYWxpZGF0aW9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQuZXh0cmFzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFzc2V0IExvYWRlci5cbiAqXG4gKiBQcm92aWRlcyBzaW1wbGUgYXNzZXQgbG9hZGluZyBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQsIG1ha2luZyBpdCBlYXN5IHRvIHByZS1sb2FkIGltYWdlcyBvclxuICogaW5jbHVkZSBKYXZhU2NyaXB0IG9yIENTUyBhc3NldHMgb24gdGhlIGZseS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIGxvYWRlciB3aWxsIGxpc3RlbiB0byBhbnkgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIHJlcXVlc3RlZCB0byBsb2FkIGluIGFuIEFKQVhcbiAqIHJlc3BvbnNlLCBzdWNoIGFzIHJlc3BvbnNlcyBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gYWxzbyBsb2FkIGFzc2V0cyBtYW51YWxseSBieSBjYWxsaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBganNcbiAqIFNub3dib2FyZC5hZGRQbHVnaW4oJ2Fzc2V0TG9hZGVyJywgQXNzZXRMb2FkZXIpO1xuICogU25vd2JvYXJkLmFzc2V0TG9hZGVyKCkucHJvY2Vzc0Fzc2V0cyhhc3NldHMpO1xuICogYGBgXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4TG9hZEFzc2V0czogJ2xvYWQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW5kIGxvYWQgYXNzZXRzLlxuICAgICAqXG4gICAgICogVGhlIGBhc3NldHNgIHByb3BlcnR5IG9mIHRoaXMgbWV0aG9kIHJlcXVpcmVzIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXMgYW5kIGFuXG4gICAgICogYXJyYXkgb2YgcGF0aHM6XG4gICAgICpcbiAgICAgKiAtIGBqc2A6IEFuIGFycmF5IG9mIEphdmFTY3JpcHQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgY3NzYDogQW4gYXJyYXkgb2YgQ1NTIHN0eWxlc2hlZXQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgaW1nYDogQW4gYXJyYXkgb2YgaW1hZ2UgVVJMcyB0byBwcmUtbG9hZFxuICAgICAqXG4gICAgICogQm90aCBganNgIGFuZCBgY3NzYCBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQsIGhvd2V2ZXIgYGltZ2AgZmlsZXMgd2lsbCBub3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCByZXF1aXJlZCBhc3NldHMgYXJlIGxvYWRlZC4gSWYgYW5cbiAgICAgKiBhc3NldCBmYWlscyB0byBsb2FkLCB0aGlzIFByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIEVTTGludCAqUkVBTExZKiBkb2Vzbid0IGxpa2UgdGhpcyBjb2RlLCBidXQgaWdub3JlIGl0LiBJdCdzIHRoZSBvbmx5IHdheSBpdCB3b3Jrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKGFzc2V0cykge1xuICAgICAgICBpZiAoYXNzZXRzLmpzICYmIGFzc2V0cy5qcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBhc3NldHMuanMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuY3NzICYmIGFzc2V0cy5jc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBhc3NldHMuY3NzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5pbWcgJiYgYXNzZXRzLmltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGFzc2V0cy5pbWcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBKYXZhU2NyaXB0IFVSTCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc2NyaXB0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2JvZHk+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFNjcmlwdChzY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2NyaXB0IGlzIG5vdCBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7c2NyaXB0fVwiXWApO1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzY3JpcHRcbiAgICAgICAgICAgIGNvbnN0IGRvbVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNjcmlwdCk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnc2NyaXB0Jywgc2NyaXB0LCBkb21TY3JpcHQpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHNjcmlwdCBmaWxlOiBcIiR7c2NyaXB0fVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkb21TY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIENTUyBzdHlsZXNoZWV0IGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzdHlsZXNoZWV0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2hlYWQ+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHN0eWxlc2hlZXQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZj1cIiR7c3R5bGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHN0eWxlc2hlZXRcbiAgICAgICAgICAgIGNvbnN0IGRvbUNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdocmVmJywgc3R5bGUpO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQgZmlsZTogXCIke3N0eWxlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChkb21Dc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmUtbG9hZHMgYW4gaW1hZ2UuXG4gICAgICpcbiAgICAgKiBUaGUgaW1hZ2Ugd2lsbCBub3QgYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGltYWdlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZEltYWdlKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBpbWFnZSBmaWxlOiBcIiR7aW1hZ2V9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGEgbG9hZGluZyBjbGFzcyBvbiBlbGVtZW50cyB0aGF0IGFuIEFKQVggcmVxdWVzdCBpcyB0YXJnZXRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGFjaExvYWRpbmcgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgICAgIGFqYXhEb25lOiAnYWpheERvbmUnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWpheERvbmUoZGF0YSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExvYWRpbmdDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gJycpXG4gICAgICAgICAgICA/IGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nXG4gICAgICAgICAgICA6ICd3bi1sb2FkaW5nJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogRGF0YSBjb25maWd1cmF0aW9uIHByb3ZpZGVyLlxuICpcbiAqIFByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBwYXNzaW5nIGNvbmZpZ3VyYXRpb24gZGF0YSB0aHJvdWdoIGFuIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXMuIFRoaXNcbiAqIGlzIGdlbmVyYWxseSB1c2VkIGZvciB3aWRnZXRzIG9yIFVJIGludGVyYWN0aW9ucyB0byBjb25maWd1cmUgdGhlbS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNvbmZpZyBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbG9jYWxDb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoaW5zdGFuY2UsIGVsZW1lbnQsIGxvY2FsQ29uZmlnKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBTbm93Ym9hcmQgcGx1Z2luIHRvIGVuYWJsZSBkYXRhIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGNvbmZpZ3VyYXRpb24gY2FuIG9ubHkgYmUgZXh0cmFjdGVkIGZyb20gSFRNTCBlbGVtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmxvY2FsQ29uZmlnID0gbG9jYWxDb25maWcgfHwge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogSWYgdGhlIGBjb25maWdgIHBhcmFtZXRlciBpcyB1bnNwZWNpZmllZCwgcmV0dXJucyB0aGUgZW50aXJlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICovXG4gICAgZ2V0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUsIGF0IHJ1bnRpbWUsIGFueSBjb25maWd1cmF0aW9uIHZhbHVlIGFzIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcnNpc3RcbiAgICAgKi9cbiAgICBzZXQoY29uZmlnLCB2YWx1ZSwgcGVyc2lzdCkge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIGNvbmZpZ3VyYXRpb24ga2V5IHRvIHNldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHBlcnNpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kYXRhc2V0W2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgeW91IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgZGF0YSBjb25maWcgb24gYSBET00gbGV2ZWwgYW5kIHJlLWFwcGx5IHRoZW1cbiAgICAgKiB0byB0aGUgY29uZmlnIG9uIHRoZSBKYXZhU2NyaXB0IHNpZGUuXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB0aGlzLmdldEFjY2VwdGVkQ29uZmlncygpO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0gdGhpcy5wcm9jZXNzQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY2FuIGJlIHNldCB0aHJvdWdoIHRoZSBkYXRhIGNvbmZpZy5cbiAgICAgKlxuICAgICAqIElmIGFuIGluc3RhbmNlIGhhcyBhbiBgYWNjZXB0QWxsRGF0YUNvbmZpZ3NgIHByb3BlcnR5LCBzZXQgdG8gYHRydWVgLCB0aGVuIGFsbCBkYXRhXG4gICAgICogYXR0cmlidXRlcyB3aWxsIGJlIGF2YWlsYWJsZSBhcyBjb25maWd1cmF0aW9uIHZhbHVlcy4gVGhpcyBjYW4gYmUgYSBzZWN1cml0eSBjb25jZXJuLCBzb1xuICAgICAqIHRyZWFkIGNhcmVmdWxseS5cbiAgICAgKlxuICAgICAqIE90aGVyd2lzZSwgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUga2V5cyBhdmFpbGFibGUgaW4gYW4gb2JqZWN0XG4gICAgICogcmV0dXJuZWQgYnkgYSBgZGVmYXVsdHMoKWAgbWV0aG9kIGluIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXXxib29sZWFufVxuICAgICAqL1xuICAgIGdldEFjY2VwdGVkQ29uZmlncygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYmUgYW4gZW1wdHkgb2JqZWN0IGlmIHRoZSBpbnN0YW5jZSBlaXRoZXIgZG9lcyBub3QgaGF2ZSBhIGBkZWZhdWx0cygpYCBtZXRob2QsIG9yXG4gICAgICogdGhlIG1ldGhvZCBpdHNlbGYgZG9lcyBub3QgcmV0dXJuIGFuIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBMb2FkcyB1cCB0aGUgZGVmYXVsdHMsIHRoZW4gcG9wdWxhdGVzIGl0IHdpdGggYW55IGNvbmZpZ3VyYXRpb24gdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhXG4gICAgICogYXR0cmlidXRlcywgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHRoZSBhY2NlcHRlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgdGhlbiBjYWNoZWQgYW5kIGF2YWlsYWJsZSB0aHJvdWdoIGBjb25maWcuZ2V0KClgIGNhbGxzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERlZmF1bHRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb2VyY2VWYWx1ZSh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubG9jYWxDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmxvY2FsQ29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29lcmNlcyBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgSmF2YVNjcmlwdC5cbiAgICAgKlxuICAgICAqIFRha2VzIHRoZSBzdHJpbmcgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYW5kIGNvZXJjZXMgaXQgaW50byBhIG1vcmUgc3VpdGFibGVcbiAgICAgKiB0eXBlIGZvciBKYXZhU2NyaXB0IHByb2Nlc3NpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29lcmNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIC8vIE51bGwgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5kZWZpbmVkIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXNlNjQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLnN0YXJ0c1dpdGgoJ2Jhc2U2NDonKSkge1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gc3RyaW5nVmFsdWUucmVwbGFjZSgvXmJhc2U2NDovLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXRvYihiYXNlNjRzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29lcmNlVmFsdWUoZGVjb2RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb29sZWFuIHZhbHVlXG4gICAgICAgIGlmIChbJ3RydWUnLCAneWVzJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChbJ2ZhbHNlJywgJ25vJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE51bWVyaWMgdmFsdWVcbiAgICAgICAgaWYgKC9eWy0rXT9bMC05XSsoXFwuWzAtOV0rKT8kLy50ZXN0KHN0cmluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09OIHZhbHVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvblBhcnNlcigpLnBhcnNlKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmdWYWx1ZSA9PT0gJycpID8gdHJ1ZSA6IHN0cmluZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGZsYXNoIG1lc3NhZ2VzIGZvciB0aGUgQ01TLlxuICpcbiAqIEZsYXNoIG1lc3NhZ2VzIHdpbGwgcG9wIHVwIGF0IHRoZSB0b3AgY2VudGVyIG9mIHRoZSBwYWdlIGFuZCB3aWxsIHJlbWFpbiBmb3IgNyBzZWNvbmRzIGJ5IGRlZmF1bHQuIEhvdmVyaW5nIG92ZXJcbiAqIHRoZSBtZXNzYWdlIHdpbGwgcmVzZXQgYW5kIHBhdXNlIHRoZSB0aW1lci4gQ2xpY2tpbmcgb24gdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBkaXNtaXNzIGl0LlxuICpcbiAqIEFyZ3VtZW50czpcbiAqICAtIFwibWVzc2FnZVwiOiBUaGUgY29udGVudCBvZiB0aGUgZmxhc2ggbWVzc2FnZS4gSFRNTCBpcyBhY2NlcHRlZC5cbiAqICAtIFwidHlwZVwiOiBUaGUgdHlwZSBvZiBmbGFzaCBtZXNzYWdlLiBUaGlzIGlzIGFwcGVuZGVkIGFzIGEgY2xhc3MgdG8gdGhlIGZsYXNoIG1lc3NhZ2UgaXRzZWxmLlxuICogIC0gXCJkdXJhdGlvblwiOiBIb3cgbG9uZyB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIHN0YXkgdmlzaWJsZSBmb3IsIGluIHNlY29uZHMuIERlZmF1bHQ6IDcgc2Vjb25kcy5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLmZsYXNoKCdUaGlzIGlzIGEgZmxhc2ggbWVzc2FnZScsICdpbmZvJywgOCk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0KG1lc3NhZ2UsIHR5cGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTnVtYmVyKGR1cmF0aW9uIHx8IDcpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGbGFzaCBkdXJhdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLCBvciB6ZXJvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsndHJhbnNpdGlvbiddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgZW5zdXJlIHRoZSBmbGFzaCBtZXNzYWdlIGlzIHJlbW92ZWQgYW5kIHRpbWVvdXQgaXMgY2xlYXJlZCBpZiB0aGUgbW9kdWxlIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2hUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2guY3JlYXRlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5mbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmZsYXNoLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCdmbGFzaC1tZXNzYWdlJywgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5zdG9wVGltZXIoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5jbGFzc0xpc3QuYWRkKCdmbGFzaC10aW1lcicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoVGltZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCduby10aW1lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGJvZHlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdzaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2gucmVtb3ZlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGZsYXNoIG1lc3NhZ2VzIGF2YWlsYWJsZSBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IGRpdi5mbGFzaC1tZXNzYWdlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyVHJhbnMgPSB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2hUaW1lciwgJ3RpbWVvdXQnLCBudWxsLCBgJHt0aGlzLmR1cmF0aW9ufS4wc2AsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyVHJhbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJUcmFucy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGVmaW5lcyBhIGRlZmF1bHQgbGlzdGVuZXIgZm9yIGZsYXNoIGV2ZW50cy5cbiAqXG4gKiBDb25uZWN0cyB0aGUgRmxhc2ggcGx1Z2luIHRvIHZhcmlvdXMgZXZlbnRzIHRoYXQgdXNlIGZsYXNoIG1lc3NhZ2VzLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaExpc3RlbmVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2ZsYXNoJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhFcnJvck1lc3NhZ2U6ICdhamF4RXJyb3JNZXNzYWdlJyxcbiAgICAgICAgICAgIGFqYXhGbGFzaE1lc3NhZ2VzOiAnYWpheEZsYXNoTWVzc2FnZXMnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIGZsYXNoIG1lc3NhZ2VzIGZvciBQSFAgZmxhc2ggcmVzcG9uc2VzLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb250cm9sPVwiZmxhc2gtbWVzc2FnZVwiXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmZsYXNoKFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5mbGFzaFR5cGUsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZsYXNoRHVyYXRpb24sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGZsYXNoIG1lc3NhZ2UgZm9yIEFKQVggZXJyb3JzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBhamF4RXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2gobWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBmbGFzaCBtZXNzYWdlcyByZXR1cm5lZCBkaXJlY3RseSBmcm9tIEFKQVggZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqL1xuICAgIGFqYXhGbGFzaE1lc3NhZ2VzKG1lc3NhZ2VzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2VzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2Nzc0NsYXNzLCBtZXNzYWdlXSA9IGVudHJ5O1xuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2gobWVzc2FnZSwgY3NzQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQWRkcyBBSkFYLWRyaXZlbiBmb3JtIHZhbGlkYXRpb24gdG8gU25vd2JvYXJkIHJlcXVlc3RzLlxuICpcbiAqIERvY3VtZW50YXRpb24gZm9yIHRoaXMgZmVhdHVyZSBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vd2ludGVyY21zLmNvbS9kb2NzL3Nub3dib2FyZC9leHRyYXMjYWpheC12YWxpZGF0aW9uXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0aW9uIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JCYWdzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2NsZWFyVmFsaWRhdGlvbicsXG4gICAgICAgICAgICBhamF4VmFsaWRhdGlvbkVycm9yczogJ2RvVmFsaWRhdGlvbicsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZHkgZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0RXJyb3JCYWdzKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSBhbiBBSkFYIHJlc3BvbnNlIGFuZCBwYXNzZXMgdGhlbSB0aHJvdWdoIHRvIHRoZSBlcnJvciBiYWdzLlxuICAgICAqXG4gICAgICogVGhpcyBoYW5kbGVyIHJldHVybnMgZmFsc2UgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHZhbGlkYXRpb24gaGFuZGxpbmcsIGFuZCBwcmV2ZW50cyB0aGUgZmxhc2hcbiAgICAgKiBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIGJ5IGRlZmF1bHQgZm9yIGZpZWxkIGVycm9ycyBpbiBBSkFYIHJlcXVlc3RzIGZyb20gc2hvd2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBkb1ZhbGlkYXRpb24oZm9ybSwgaW52YWxpZEZpZWxkcywgcmVxdWVzdCkge1xuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQucmVxdWVzdFZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckJhZ3MgPSB0aGlzLmVycm9yQmFncy5maWx0ZXIoKGVycm9yQmFnKSA9PiBlcnJvckJhZy5mb3JtID09PSBmb3JtKTtcbiAgICAgICAgZXJyb3JCYWdzLmZvckVhY2goKGVycm9yQmFnKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvckJhZyhlcnJvckJhZywgaW52YWxpZEZpZWxkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IHZhbGlkYXRpb24gZXJyb3JzIGluIHRoZSBnaXZlbiBmb3JtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2xlYXJWYWxpZGF0aW9uKHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LnJlcXVlc3RWYWxpZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXF1ZXN0LmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVycm9yQmFncyA9IHRoaXMuZXJyb3JCYWdzLmZpbHRlcigoZXJyb3JCYWcpID0+IGVycm9yQmFnLmZvcm0gPT09IHJlcXVlc3QuZm9ybSk7XG4gICAgICAgIGVycm9yQmFncy5mb3JFYWNoKChlcnJvckJhZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3JCYWcoZXJyb3JCYWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0cyBlcnJvciBiYWdzIChlbGVtZW50cyB3aXRoIFwiZGF0YS12YWxpZGF0ZS1lcnJvclwiIGF0dHJpYnV0ZSkgYW5kIGxpbmtzIHRoZW0gdG8gYVxuICAgICAqIHBsYWNlaG9sZGVyIGFuZCBmb3JtLlxuICAgICAqXG4gICAgICogVGhlIGVycm9yIGJhZ3Mgd2lsbCBiZSBpbml0aWFsbHkgaGlkZGVuLCBhbmQgd2lsbCBvbmx5IHNob3cgd2hlbiB2YWxpZGF0aW9uIGVycm9ycyBvY2N1ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3ROb2RlXG4gICAgICovXG4gICAgY29sbGVjdEVycm9yQmFncyhyb290Tm9kZSkge1xuICAgICAgICByb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWxpZGF0ZS1lcnJvcl0sIFtkYXRhLXZhbGlkYXRlLWZvcl0nKS5mb3JFYWNoKChlcnJvckJhZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGVycm9yQmFnLmNsb3Nlc3QoJ2Zvcm1bZGF0YS1yZXF1ZXN0LXZhbGlkYXRlXScpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVycm9yIGJhZyBkb2VzIG5vdCByZXNpZGUgd2l0aGluIGEgdmFsaWRhdGluZyBmb3JtLCByZW1vdmUgaXRcbiAgICAgICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgICAgIGVycm9yQmFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXJyb3JCYWcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmluZCBtZXNzYWdlIGxpc3Qgbm9kZSwgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUxpc3RFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChlcnJvckJhZy5tYXRjaGVzKCdbZGF0YS12YWxpZGF0ZS1lcnJvcl0nKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0RWxlbWVudCA9IGVycm9yQmFnLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lc3NhZ2VdJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBsYWNlaG9sZGVyIG5vZGVcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGVycm9yIGJhZyBhbmQgcmVwbGFjZSB3aXRoIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICBjb25zdCBlcnJvckJhZ0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZXJyb3JCYWcsXG4gICAgICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcjogKGVycm9yQmFnLmRhdGFzZXQudmFsaWRhdGVGb3IpXG4gICAgICAgICAgICAgICAgICAgID8gZXJyb3JCYWcuZGF0YXNldC52YWxpZGF0ZUZvci5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgICAgICAgICAgOiAnKicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RFbGVtZW50OiAobWVzc2FnZUxpc3RFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICA/IG1lc3NhZ2VMaXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0QW5jaG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1c3RvbU1lc3NhZ2U6IChlcnJvckJhZy5kYXRhc2V0LnZhbGlkYXRlRm9yKVxuICAgICAgICAgICAgICAgICAgICA/IChlcnJvckJhZy50ZXh0Q29udGVudCAhPT0gJycgfHwgZXJyb3JCYWcuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSWYgYW4gbWVzc2FnZSBsaXN0IGVsZW1lbnQgZXhpc3RzLCBjcmVhdGUgYW5vdGhlciBwbGFjZWhvbGRlciB0byBhY3QgYXMgYW4gYW5jaG9yIHBvaW50XG4gICAgICAgICAgICBpZiAobWVzc2FnZUxpc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUxpc3RBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWVzc2FnZUxpc3RBbmNob3IsIG1lc3NhZ2VMaXN0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZXJyb3JCYWdEYXRhLm1lc3NhZ2VMaXN0QW5jaG9yID0gbWVzc2FnZUxpc3RBbmNob3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yQmFnLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBlcnJvckJhZyk7XG5cbiAgICAgICAgICAgIHRoaXMuZXJyb3JCYWdzLnB1c2goZXJyb3JCYWdEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgYW4gZXJyb3IgYmFnLCByZXBsYWNpbmcgdGhlIGVycm9yIG1lc3NhZ2VzIHdpdGggYSBwbGFjZWhvbGRlciBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yQmFnXG4gICAgICovXG4gICAgaGlkZUVycm9yQmFnKGVycm9yQmFnKSB7XG4gICAgICAgIGlmIChlcnJvckJhZy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBlcnJvckJhZy5lbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVycm9yQmFnLnBsYWNlaG9sZGVyLCBlcnJvckJhZy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGFuIGVycm9yIGJhZyB3aXRoIHRoZSBnaXZlbiBpbnZhbGlkIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkRmllbGRzXG4gICAgICovXG4gICAgc2hvd0Vycm9yQmFnKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSB7XG4gICAgICAgIGlmICghdGhpcy5lcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvckJhZy5lbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBlcnJvckJhZy5wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlcnJvckJhZy5lbGVtZW50LCBlcnJvckJhZy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JCYWcudmFsaWRhdGVGb3IgIT09ICcqJykge1xuICAgICAgICAgICAgaWYgKCFlcnJvckJhZy5jdXN0b21NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RGaWVsZCA9IE9iamVjdC5rZXlzKGludmFsaWRGaWVsZHMpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBlcnJvckJhZy52YWxpZGF0ZUZvci5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgIC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIFtlcnJvckJhZy5lbGVtZW50LmlubmVySFRNTF0gPSBpbnZhbGlkRmllbGRzW2ZpcnN0RmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yQmFnLm1lc3NhZ2VMaXN0RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBlcnJvckJhZy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbGlkYXRpb24tbWVzc2FnZV0nKS5mb3JFYWNoKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGludmFsaWRGaWVsZHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgZXJyb3JzXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZXJyb3JCYWcubWVzc2FnZUxpc3RFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuZGF0YXNldC52YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5pbm5lckhUTUwgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JCYWcubWVzc2FnZUxpc3RBbmNob3IuYWZ0ZXIobWVzc2FnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBbZXJyb3JCYWcuZWxlbWVudC5pbm5lckhUTUxdID0gaW52YWxpZEZpZWxkc1tPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBnaXZlbiBlcnJvciBiYWcgYXBwbGllcyBmb3IgdGhlIGdpdmVuIGludmFsaWQgZmllbGRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yQmFnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGludmFsaWRGaWVsZHNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBlcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkKGVycm9yQmFnLCBpbnZhbGlkRmllbGRzKSB7XG4gICAgICAgIGlmIChlcnJvckJhZy52YWxpZGF0ZUZvciA9PT0gJyonKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKVxuICAgICAgICAgICAgLmZpbHRlcigoZmllbGQpID0+IGVycm9yQmFnLnZhbGlkYXRlRm9yLmluY2x1ZGVzKGZpZWxkKSlcbiAgICAgICAgICAgIC5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzdHJpcGUgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSB0aGF0IGluZGljYXRlcyBsb2FkaW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpcGVMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RyaXBlKCk7XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RyaXBlKCkge1xuICAgICAgICB0aGlzLmluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkaW5nLWluZGljYXRvcicsICdsb2FkZWQnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUuY2xhc3NMaXN0LmFkZCgnc3RyaXBlJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlTG9hZGVkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5kaWNhdG9yKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcblxuICAgICAgICBjb25zdCBuZXdTdHJpcGUgPSB0aGlzLnN0cmlwZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKG5ld1N0cmlwZSk7XG4gICAgICAgIHRoaXMuc3RyaXBlLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IG5ld1N0cmlwZTtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIGhpZGUoZm9yY2UpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyIC09IDE7XG5cbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd24tbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbWJlZHMgdGhlIFwiZXh0cmFzXCIgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgbG9hZGVkIHRocm91Z2ggdGhlIHRoZW1lLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNoZWV0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICBsZXQgc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHN0eWxlc2hlZXQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJykuZm9yRWFjaCgoY3NzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzLmhyZWYuZW5kc1dpdGgoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0eWxlc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnNub3dib2FyZC51cmwoKS50bygnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHRyYW5zaXRpb24gc3VwcG9ydCBmb3IgZWxlbWVudHMuXG4gKlxuICogVHJhbnNpdGlvbiBhbGxvd3MgQ1NTIHRyYW5zaXRpb25zIHRvIGJlIGNvbnRyb2xsZWQgYW5kIGNhbGxiYWNrcyB0byBiZSBydW4gb25jZSBjb21wbGV0ZWQuIEl0IHdvcmtzIHNpbWlsYXIgdG8gVnVlXG4gKiB0cmFuc2l0aW9ucyB3aXRoIDMgc3RhZ2VzIG9mIHRyYW5zaXRpb24sIGFuZCBjbGFzc2VzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIHRyYW5zaXRpb24gbmFtZSBzdWZmaXhlZCB3aXRoXG4gKiB0aGUgc3RhZ2Ugb2YgdHJhbnNpdGlvbjpcbiAqXG4gKiAgLSBgaW5gOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24sIHJlbW92ZWQgYWZ0ZXJ3YXJkcy4gVGhpcyBzaG91bGQgYmVcbiAqICAgICAgdXNlZCB0byBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKiAgLSBgYWN0aXZlYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBiZSB1c2VkIHRvIGRlZmluZSB0aGVcbiAqICAgICAgdHJhbnNpdGlvbiBpdHNlbGYuXG4gKiAgLSBgb3V0YDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24gYW5kIGtlcHQgdG8gdGhlIGVuZCBvZiB0aGVcbiAqICAgICAgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgZGVmaW5lIHRoZSBlbmQgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC50cmFuc2l0aW9uKGRvY3VtZW50LmVsZW1lbnQsICd0cmFuc2l0aW9uJywgKCkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZSBlbGVtZW50IGFmdGVyIDcgc2Vjb25kcycpO1xuICogICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAqICAgICAgfSwgJzdzJyk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gdHJhbnNpdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uIFRoZSBuYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCB0aGlzIHByZWZpeGVzIHRoZSBzdGFnZXMgb2YgdHJhbnNpdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gQW4gb3B0aW9uYWwgb3ZlcnJpZGUgb24gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24uIE11c3QgYmUgc3BlY2lmaWVkIGFzICdzJyAoc2Vjcykgb3IgJ21zJyAobXNlY3MpLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJhaWxUbyBJZiB0cnVlLCB0aGUgXCJvdXRcIiBjbGFzcyB3aWxsIHJlbWFpbiBhZnRlciB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCB0cmFuc2l0aW9uLCBjYWxsYmFjaywgZHVyYXRpb24sIHRyYWlsVG8pIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBIVE1MRWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0cmFuc2l0aW9uaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zaXRpb24gbmFtZSBtdXN0IGJlIHNwZWNpZmllZCBhcyBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbFRvID0gKHRyYWlsVG8gPT09IHRydWUpO1xuXG4gICAgICAgIHRoaXMuZG9UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBldmVudCBjbGFzc2VzIHRvIHRoZSBnaXZlbiB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGV2ZW50Q2xhc3NlcyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgIGluOiBgJHt0aGlzLnRyYW5zaXRpb259LWluYCxcbiAgICAgICAgICAgIGFjdGl2ZTogYCR7dGhpcy50cmFuc2l0aW9ufS1hY3RpdmVgLFxuICAgICAgICAgICAgb3V0OiBgJHt0aGlzLnRyYW5zaXRpb259LW91dGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudENsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0dXJuQ2xhc3NlcyA9IFtdO1xuICAgICAgICBPYmplY3QuZW50cmllcyhldmVudENsYXNzZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybkNsYXNzZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5DbGFzc2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZG9UcmFuc2l0aW9uKCkge1xuICAgICAgICAvLyBBZGQgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBTdGFydCB0cmFuc2l0aW9uIC0gc2hvdyBcImluXCIgYW5kIFwiYWN0aXZlXCIgY2xhc3Nlc1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnaW4nLCAnYWN0aXZlJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGEgdHJhbnNpdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gIT09ICcwcycpIHtcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGVuZFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQoKSwge1xuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmV2ZW50Q2xhc3NlcygnaW4nKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXZlbnRDbGFzc2VzKCdvdXQnKVswXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdHJhbnNpdGlvbiBlbmRzLCB0aGUgaW5zdGFuY2Ugb2YgdGhlIHRyYW5zaXRpb24gaXMgYXV0b21hdGljYWxseSBkZXN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnYWN0aXZlJywgKCF0aGlzLnRyYWlsVG8pID8gJ291dCcgOiAnJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbHMgYSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2xhc3NlcywgcmVtb3ZpbmcgYW55IHRyYW5zaXRpb24gY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlc2V0Q2xhc3NlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZ2l2ZW4gZHVyYXRpb24gYW5kIGNvbnZlcnRzIGl0IHRvIGEgXCJtc1wiIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IC9eKFswLTldKyhcXC5bMC05XSspPykobT9zKT8kLy5leGVjKGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gTnVtYmVyKHBhcnNlZFsxXSk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAocGFyc2VkWzNdID09PSAncycpXG4gICAgICAgICAgICA/ICdzZWMnXG4gICAgICAgICAgICA6ICdtc2VjJztcblxuICAgICAgICByZXR1cm4gKHVuaXQgPT09ICdzZWMnKVxuICAgICAgICAgICAgPyBgJHthbW91bnQgKiAxMDAwfW1zYFxuICAgICAgICAgICAgOiBgJHtNYXRoLmZsb29yKGFtb3VudCl9bXNgO1xuICAgIH1cbn1cbiIsImltcG9ydCBGbGFzaCBmcm9tICcuL2V4dHJhcy9GbGFzaCc7XG5pbXBvcnQgRmxhc2hMaXN0ZW5lciBmcm9tICcuL2V4dHJhcy9GbGFzaExpc3RlbmVyJztcbmltcG9ydCBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL2V4dHJhcy9Gb3JtVmFsaWRhdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL2V4dHJhcy9UcmFuc2l0aW9uJztcbmltcG9ydCBBdHRhY2hMb2FkaW5nIGZyb20gJy4vZXh0cmFzL0F0dGFjaExvYWRpbmcnO1xuaW1wb3J0IFN0cmlwZUxvYWRlciBmcm9tICcuL2V4dHJhcy9TdHJpcGVMb2FkZXInO1xuaW1wb3J0IFN0eWxlc2hlZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvU3R5bGVzaGVldExvYWRlcic7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSAnLi9leHRyYXMvQXNzZXRMb2FkZXInO1xuaW1wb3J0IERhdGFDb25maWcgZnJvbSAnLi9leHRyYXMvRGF0YUNvbmZpZyc7XG5cbmlmICh3aW5kb3cuU25vd2JvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nub3dib2FyZCBtdXN0IGJlIGxvYWRlZCBpbiBvcmRlciB0byB1c2UgdGhlIGV4dHJhIHBsdWdpbnMuJyk7XG59XG5cbigoU25vd2JvYXJkKSA9PiB7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXNzZXRMb2FkZXInLCBBc3NldExvYWRlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZGF0YUNvbmZpZycsIERhdGFDb25maWcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2V4dHJhc1N0eWxlcycsIFN0eWxlc2hlZXRMb2FkZXIpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3RyYW5zaXRpb24nLCBUcmFuc2l0aW9uKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaCcsIEZsYXNoKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdmbGFzaExpc3RlbmVyJywgRmxhc2hMaXN0ZW5lcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZm9ybVZhbGlkYXRpb24nLCBGb3JtVmFsaWRhdGlvbik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXR0YWNoTG9hZGluZycsIEF0dGFjaExvYWRpbmcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3N0cmlwZUxvYWRlcicsIFN0cmlwZUxvYWRlcik7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2luaGVyaXRzIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsImVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcHBseSIsInVuZGVmaW5lZCIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3NldFByb3RvdHlwZU9mIiwiQXNzZXRMb2FkZXIiLCJfU2luZ2xldG9uIiwiYWpheExvYWRBc3NldHMiLCJfbG9hZCIsIl9jYWxsZWUiLCJhc3NldHMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInNjcmlwdCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJzdHlsZSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJpbWFnZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJqcyIsImxvYWRTY3JpcHQiLCJ0MCIsInQxIiwiY3NzIiwibG9hZFN0eWxlIiwidDIiLCJ0MyIsImltZyIsImxvYWRJbWFnZSIsInQ0IiwidDUiLCJsb2FkIiwiX3giLCJfdGhpcyIsImxvYWRlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImRvbVNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2xvYmFsRXZlbnQiLCJib2R5IiwiYXBwZW5kIiwiX3RoaXMyIiwiZG9tQ3NzIiwiaGVhZCIsIl90aGlzMyIsIkltYWdlIiwic3JjIiwiQXR0YWNoTG9hZGluZyIsImFqYXhTdGFydCIsImFqYXhEb25lIiwicHJvbWlzZSIsInJlcXVlc3QiLCJlbGVtZW50IiwidGFnTmFtZSIsImxvYWRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRMb2FkaW5nQ2xhc3MiLCJkYXRhc2V0IiwiYXR0YWNoTG9hZGluZyIsImRhdGEiLCJyZW1vdmUiLCJEYXRhQ29uZmlnIiwibG9jYWxDb25maWciLCJIVE1MRWxlbWVudCIsImluc3RhbmNlQ29uZmlnIiwiYWNjZXB0ZWRDb25maWdzIiwicmVmcmVzaCIsImdldCIsImNvbmZpZyIsInNldCIsInBlcnNpc3QiLCJnZXRBY2NlcHRlZENvbmZpZ3MiLCJwcm9jZXNzQ29uZmlnIiwiYWNjZXB0QWxsRGF0YUNvbmZpZ3MiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwiaW5jbHVkZXMiLCJjb2VyY2VWYWx1ZSIsInN0cmluZ1ZhbHVlIiwic3RhcnRzV2l0aCIsImJhc2U2NHN0ciIsInJlcGxhY2UiLCJkZWNvZGVkIiwiYXRvYiIsInRvTG93ZXJDYXNlIiwianNvblBhcnNlciIsInBhcnNlIiwiRmxhc2giLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJjbGVhciIsInRpbWVyIiwiZmxhc2hUaW1lciIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImZsYXNoIiwiX2dldCIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInN0b3BUaW1lciIsInN0YXJ0VGltZXIiLCJhcHBlbmRDaGlsZCIsInRyYW5zaXRpb24iLCJ0aW1lclRyYW5zIiwic2V0VGltZW91dCIsImNhbmNlbCIsIkZsYXNoTGlzdGVuZXIiLCJyZWFkeSIsImFqYXhFcnJvck1lc3NhZ2UiLCJhamF4Rmxhc2hNZXNzYWdlcyIsImZsYXNoVHlwZSIsImZsYXNoRHVyYXRpb24iLCJtZXNzYWdlcyIsImVudHJpZXMiLCJlbnRyeSIsIl9lbnRyeSIsIl9zbGljZWRUb0FycmF5IiwiY3NzQ2xhc3MiLCJGb3JtVmFsaWRhdGlvbiIsImVycm9yQmFncyIsImFqYXhWYWxpZGF0aW9uRXJyb3JzIiwiY29sbGVjdEVycm9yQmFncyIsImRvVmFsaWRhdGlvbiIsImZvcm0iLCJpbnZhbGlkRmllbGRzIiwicmVxdWVzdFZhbGlkYXRlIiwiZmlsdGVyIiwiZXJyb3JCYWciLCJzaG93RXJyb3JCYWciLCJjbGVhclZhbGlkYXRpb24iLCJoaWRlRXJyb3JCYWciLCJyb290Tm9kZSIsImNsb3Nlc3QiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtZXNzYWdlTGlzdEVsZW1lbnQiLCJtYXRjaGVzIiwicGxhY2Vob2xkZXIiLCJjcmVhdGVDb21tZW50IiwiZXJyb3JCYWdEYXRhIiwidmFsaWRhdGVGb3IiLCJzcGxpdCIsImNsb25lTm9kZSIsIm1lc3NhZ2VMaXN0QW5jaG9yIiwiY3VzdG9tTWVzc2FnZSIsInRleHRDb250ZW50IiwiY2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZCIsImlzQ29ubmVjdGVkIiwiZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZCIsImZpcnN0RmllbGQiLCJmaWVsZCIsInNoaWZ0IiwiX2ludmFsaWRGaWVsZHMkZmlyc3RGIiwiZXJyb3JzIiwibWVzc2FnZUVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImFmdGVyIiwiX2ludmFsaWRGaWVsZHMkT2JqZWN0IiwiU3RyaXBlTG9hZGVyIiwiY291bnRlciIsImNyZWF0ZVN0cmlwZSIsInNob3ciLCJoaWRlIiwiaW5kaWNhdG9yIiwic3RyaXBlIiwic3RyaXBlTG9hZGVkIiwibmV3U3RyaXBlIiwiZm9yY2UiLCJTdHlsZXNoZWV0TG9hZGVyIiwic3R5bGVzTG9hZGVkIiwiaHJlZiIsImVuZHNXaXRoIiwic3R5bGVzaGVldCIsInVybCIsInRvIiwiVHJhbnNpdGlvbiIsImNhbGxiYWNrIiwidHJhaWxUbyIsInBhcnNlRHVyYXRpb24iLCJkb1RyYW5zaXRpb24iLCJldmVudENsYXNzZXMiLCJfbGVuIiwiX2tleSIsImFjdGl2ZSIsIm91dCIsInJldHVybkNsYXNzZXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicmVzZXRDbGFzc2VzIiwiZXZlbnRDbGFzcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldENvbXB1dGVkU3R5bGUiLCJvblRyYW5zaXRpb25FbmQiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl90aGlzNCIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwiU25vd2JvYXJkIiwiYWRkUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==