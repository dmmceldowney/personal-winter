"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/build/system.debug"],{

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

/***/ "./assets/js/snowboard/ajax/Request.js":
/*!*********************************************!*\
  !*** ./assets/js/snowboard/ajax/Request.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
 * Request plugin.
 *
 * This is the default AJAX handler which will run using the `fetch()` method that is default in modern browsers.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Request = /*#__PURE__*/function (_PluginBase) {
  _inherits(Request, _PluginBase);
  function Request() {
    _classCallCheck(this, Request);
    return _callSuper(this, Request, arguments);
  }
  _createClass(Request, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * The constructor accepts 2 or 3 parameters.
     *
     * If 2 parameters are provided, the first parameter is the handler name and the second
     * parameter is the options. This assumes that this is a detached AJAX request not connected to
     * an element.
     *
     * If 3 parameters are provided, the first parameter is an element or a selector, and the second
     * and third parameters are the handler and options, respectively.
     *
     * @param {HTMLElement|string} element
     * @param {string|Object} handler
     * @param {Object} options
     */
    function construct(element, handler, options) {
      var _this = this;
      if (typeof element === 'string') {
        // Allow the element to be a handler name.
        // This assumes the request is being made against no element, and the handler parameter
        // will contain options.
        if (this.isHandlerName(element)) {
          this.element = null;
          this.handler = element;
          this.options = handler || {};
        } else {
          var matchedElement = document.querySelector(element);
          if (matchedElement === null) {
            throw new Error("No element was found with the given selector: ".concat(element));
          }
          this.element = matchedElement;
          this.handler = handler;
          this.options = options || {};
        }
      } else {
        this.element = element;
        this.handler = handler;
        this.options = options || {};
      }
      this.fetchOptions = {};
      this.responseData = null;
      this.responseError = null;
      this.cancelled = false;
      this.checkRequest();
      if (!this.snowboard.globalEvent('ajaxSetup', this)) {
        this.cancelled = true;
        return;
      }
      if (this.element) {
        var event = new Event('ajaxSetup', {
          cancelable: true
        });
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          this.cancelled = true;
          return;
        }
      }
      if (!this.doClientValidation()) {
        this.cancelled = true;
        return;
      }
      if (this.confirm) {
        this.doConfirm().then(function (confirmed) {
          if (confirmed) {
            _this.doAjax().then(function (response) {
              if (response.cancelled) {
                _this.cancelled = true;
                _this.complete();
                return;
              }
              _this.responseData = response;
              _this.processUpdate(response).then(function () {
                if (response.X_WINTER_SUCCESS === false) {
                  _this.processError(response);
                } else {
                  _this.processResponse(response);
                }
              });
            }, function (error) {
              _this.responseError = error;
              _this.processError(error);
            });
          }
        });
      } else {
        this.doAjax().then(function (response) {
          if (response.cancelled) {
            _this.cancelled = true;
            _this.complete();
            return;
          }
          _this.responseData = response;
          _this.processUpdate(response).then(function () {
            if (response.X_WINTER_SUCCESS === false) {
              _this.processError(response);
            } else {
              _this.processResponse(response);
            }
          });
        }, function (error) {
          _this.responseError = error;
          _this.processError(error);
        });
      }
    }

    /**
     * Dependencies for this plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['cookie', 'jsonParser'];
    }

    /**
     * Validates the element and handler given in the request.
     */
  }, {
    key: "checkRequest",
    value: function checkRequest() {
      if (this.element && this.element instanceof Element === false) {
        throw new Error('The element provided must be an Element instance');
      }
      if (this.handler === undefined) {
        throw new Error('The AJAX handler name is not specified.');
      }
      if (!this.isHandlerName(this.handler)) {
        throw new Error('Invalid AJAX handler name. The correct handler name format is: "onEvent".');
      }
    }

    /**
     * Creates a Fetch request.
     *
     * This method is made available for plugins to extend or override the default fetch() settings with their own.
     *
     * @returns {Promise}
     */
  }, {
    key: "getFetch",
    value: function getFetch() {
      this.fetchOptions = this.options.fetchOptions !== undefined && _typeof(this.options.fetchOptions) === 'object' ? this.options.fetchOptions : {
        method: 'POST',
        headers: this.headers,
        body: this.data,
        redirect: 'follow',
        mode: 'same-origin'
      };
      this.snowboard.globalEvent('ajaxFetchOptions', this.fetchOptions, this);
      return fetch(this.url, this.fetchOptions);
    }

    /**
     * Run client-side validation on the form, if available.
     *
     * @returns {boolean}
     */
  }, {
    key: "doClientValidation",
    value: function doClientValidation() {
      if (this.options.browserValidate === true && this.form) {
        if (this.form.checkValidity() === false) {
          this.form.reportValidity();
          return false;
        }
      }
      return true;
    }

    /**
     * Executes the AJAX query.
     *
     * Returns a Promise object for when the AJAX request is completed.
     *
     * @returns {Promise}
     */
  }, {
    key: "doAjax",
    value: function doAjax() {
      var _this2 = this;
      // Allow plugins to cancel the AJAX request before sending
      if (this.snowboard.globalEvent('ajaxBeforeSend', this) === false) {
        return Promise.resolve({
          cancelled: true
        });
      }
      var ajaxPromise = new Promise(function (resolve, reject) {
        _this2.getFetch().then(function (response) {
          if (!response.ok && response.status !== 406) {
            if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
              response.json().then(function (responseData) {
                if (responseData.message && responseData.exception) {
                  reject(_this2.renderError(responseData.message, responseData.exception, responseData.file, responseData.line, responseData.trace));
                } else {
                  reject(responseData);
                }
              }, function (error) {
                reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
              });
            } else {
              response.text().then(function (responseText) {
                reject(_this2.renderError(responseText));
              }, function (error) {
                reject(_this2.renderError("Unable to process response: ".concat(error)));
              });
            }
            return;
          }
          if (response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('/json')) {
            response.json().then(function (responseData) {
              resolve(_objectSpread(_objectSpread({}, responseData), {}, {
                X_WINTER_SUCCESS: response.status !== 406,
                X_WINTER_RESPONSE_CODE: response.status
              }));
            }, function (error) {
              reject(_this2.renderError("Unable to parse JSON response: ".concat(error)));
            });
          } else {
            response.text().then(function (responseData) {
              resolve(responseData);
            }, function (error) {
              reject(_this2.renderError("Unable to process response: ".concat(error)));
            });
          }
        }, function (responseError) {
          reject(_this2.renderError("Unable to retrieve a response from the server: ".concat(responseError)));
        });
      });
      this.snowboard.globalEvent('ajaxStart', ajaxPromise, this);
      if (this.element) {
        var event = new Event('ajaxPromise');
        event.promise = ajaxPromise;
        this.element.dispatchEvent(event);
      }
      return ajaxPromise;
    }

    /**
     * Prepares for updating the partials from the AJAX response.
     *
     * If any partials are returned from the AJAX response, this method will also action the partial updates.
     *
     * Returns a Promise object which tracks when the partial update is complete.
     *
     * @param {Object} response
     * @returns {Promise}
     */
  }, {
    key: "processUpdate",
    value: function processUpdate(response) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        if (typeof _this3.options.beforeUpdate === 'function') {
          if (_this3.options.beforeUpdate.apply(_this3, [response]) === false) {
            reject();
            return;
          }
        }

        // Extract partial information
        var partials = {};
        Object.entries(response).forEach(function (entry) {
          var _entry = _slicedToArray(entry, 2),
            key = _entry[0],
            value = _entry[1];
          if (key.substr(0, 8) !== 'X_WINTER') {
            partials[key] = value;
          }
        });
        if (Object.keys(partials).length === 0) {
          if (response.X_WINTER_ASSETS) {
            _this3.processAssets(response.X_WINTER_ASSETS).then(function () {
              resolve();
            }, function () {
              reject();
            });
          } else {
            resolve();
          }
          return;
        }
        var promises = _this3.snowboard.globalPromiseEvent('ajaxBeforeUpdate', response, _this3);
        promises.then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!response.X_WINTER_ASSETS) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return _this3.processAssets(response.X_WINTER_ASSETS);
              case 3:
                _this3.doUpdate(partials).then(function () {
                  // Allow for HTML redraw
                  window.requestAnimationFrame(function () {
                    return resolve();
                  });
                }, function () {
                  reject();
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })), function () {
          reject();
        });
      });
    }

    /**
     * Updates the partials with the given content.
     *
     * @param {Object} partials
     * @returns {Promise}
     */
  }, {
    key: "doUpdate",
    value: function doUpdate(partials) {
      var _this4 = this;
      return new Promise(function (resolve) {
        var affected = [];
        Object.entries(partials).forEach(function (entry) {
          var _entry2 = _slicedToArray(entry, 2),
            partial = _entry2[0],
            content = _entry2[1];
          var selector = _this4.options.update && _this4.options.update[partial] ? _this4.options.update[partial] : partial;
          var mode = 'replace';
          if (selector.substr(0, 1) === '@') {
            mode = 'append';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) === '^') {
            mode = 'prepend';
            selector = selector.substr(1);
          } else if (selector.substr(0, 1) !== '#' && selector.substr(0, 1) !== '.') {
            mode = 'noop';
          }
          var elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            elements.forEach(function (element) {
              switch (mode) {
                case 'append':
                  element.innerHTML += content;
                  break;
                case 'prepend':
                  element.innerHTML = content + element.innerHTML;
                  break;
                case 'noop':
                  break;
                case 'replace':
                default:
                  element.innerHTML = content;
                  break;
              }
              affected.push(element);

              // Fire update event for each element that is updated
              _this4.snowboard.globalEvent('ajaxUpdate', element, content, _this4);
              var event = new Event('ajaxUpdate');
              event.content = content;
              element.dispatchEvent(event);
            });
          }
        });
        _this4.snowboard.globalEvent('ajaxUpdateComplete', affected, _this4);
        resolve();
      });
    }

    /**
     * Processes the response data.
     *
     * This fires off all necessary processing functions depending on the response, ie. if there's any flash
     * messages to handle, or any redirects to be undertaken.
     *
     * @param {Object} response
     * @returns {void}
     */
  }, {
    key: "processResponse",
    value: function processResponse(response) {
      if (this.options.success && typeof this.options.success === 'function') {
        if (this.options.success(this.responseData, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further response handling
      if (this.snowboard.globalEvent('ajaxSuccess', this.responseData, this) === false) {
        return;
      }

      // Allow the element to cancel any further response handling
      if (this.element) {
        var event = new Event('ajaxDone', {
          cancelable: true
        });
        event.responseData = this.responseData;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (this.flash && response.X_WINTER_FLASH_MESSAGES) {
        this.processFlashMessages(response.X_WINTER_FLASH_MESSAGES);
      }

      // Check for a redirect from the response, or use the redirect as specified in the options.
      if (this.redirect || response.X_WINTER_REDIRECT) {
        this.processRedirect(this.redirect || response.X_WINTER_REDIRECT);
        return;
      }
      this.complete();
    }

    /**
     * Processes an error response from the AJAX request.
     *
     * This fires off all necessary processing functions depending on the error response, ie. if there's any error or
     * validation messages to handle.
     *
     * @param {Object|Error} error
     */
  }, {
    key: "processError",
    value: function processError(error) {
      if (this.options.error && typeof this.options.error === 'function') {
        if (this.options.error(this.responseError, this) === false) {
          return;
        }
      }

      // Allow plugins to cancel any further error handling
      if (this.snowboard.globalEvent('ajaxError', this.responseError, this) === false) {
        return;
      }

      // Allow the element to cancel any further error handling
      if (this.element) {
        var event = new Event('ajaxFail', {
          cancelable: true
        });
        event.responseError = this.responseError;
        event.request = this;
        this.element.dispatchEvent(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      if (error instanceof Error) {
        this.processErrorMessage(error.message);
      } else {
        var skipError = false;

        // Process validation errors
        if (error.X_WINTER_ERROR_FIELDS) {
          skipError = this.processValidationErrors(error.X_WINTER_ERROR_FIELDS);
        }
        if (error.X_WINTER_ERROR_MESSAGE && !skipError) {
          this.processErrorMessage(error.X_WINTER_ERROR_MESSAGE);
        }
      }
      this.complete();
    }

    /**
     * Processes a redirect response.
     *
     * By default, this processor will simply redirect the user in their browser.
     *
     * Plugins can augment this functionality from the `ajaxRedirect` event. You may also override this functionality on
     * a per-request basis through the `handleRedirectResponse` callback option. If a `false` is returned from either, the
     * redirect will be cancelled.
     *
     * @param {string} url
     * @returns {void}
     */
  }, {
    key: "processRedirect",
    value: function processRedirect(url) {
      var _this5 = this;
      // Run a custom per-request redirect handler. If false is returned, don't run the redirect.
      if (typeof this.options.handleRedirectResponse === 'function') {
        if (this.options.handleRedirectResponse.apply(this, [url]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the redirect
      if (this.snowboard.globalEvent('ajaxRedirect', url, this) === false) {
        return;
      }

      // Indicate that the AJAX request is finished if we're still on the current page
      // so that the loading indicator for redirects that just change the hash value of
      // the URL instead of leaving the page will properly stop.
      // @see https://github.com/octobercms/october/issues/2780
      window.addEventListener('popstate', function () {
        if (_this5.element) {
          var event = document.createEvent('CustomEvent');
          event.eventName = 'ajaxRedirected';
          _this5.element.dispatchEvent(event);
        }
      }, {
        once: true
      });
      window.location.assign(url);
    }

    /**
     * Processes an error message.
     *
     * By default, this processor will simply alert the user through a simple `alert()` call.
     *
     * Plugins can augment this functionality from the `ajaxErrorMessage` event. You may also override this functionality
     * on a per-request basis through the `handleErrorMessage` callback option. If a `false` is returned from either, the
     * error message handling will be cancelled.
     *
     * @param {string} message
     * @returns {void}
     */
  }, {
    key: "processErrorMessage",
    value: function processErrorMessage(message) {
      // Run a custom per-request handler for error messages. If false is returned, do not process the error messages
      // any further.
      if (typeof this.options.handleErrorMessage === 'function') {
        if (this.options.handleErrorMessage.apply(this, [message]) === false) {
          return;
        }
      }

      // Allow plugins to cancel the error message being shown
      if (this.snowboard.globalEvent('ajaxErrorMessage', message, this) === false) {
        return;
      }

      // By default, show a browser error message
      window.alert(message);
    }

    /**
     * Processes flash messages from the response.
     *
     * By default, no flash message handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxFlashMessages` event. You may also override this functionality
     * on a per-request basis through the `handleFlashMessages` callback option. If a `false` is returned from either, the
     * flash message handling will be cancelled.
     *
     * @param {Object} messages
     * @returns
     */
  }, {
    key: "processFlashMessages",
    value: function processFlashMessages(messages) {
      // Run a custom per-request flash handler. If false is returned, don't show the flash message
      if (typeof this.options.handleFlashMessages === 'function') {
        if (this.options.handleFlashMessages.apply(this, [messages]) === false) {
          return;
        }
      }
      this.snowboard.globalEvent('ajaxFlashMessages', messages, this);
    }

    /**
     * Processes validation errors for fields.
     *
     * By default, no validation error handling will occur.
     *
     * Plugins can augment this functionality from the `ajaxValidationErrors` event. You may also override this functionality
     * on a per-request basis through the `handleValidationErrors` callback option. If a `false` is returned from either, the
     * validation error handling will be cancelled.
     *
     * @param {Object} fields
     * @returns
     */
  }, {
    key: "processValidationErrors",
    value: function processValidationErrors(fields) {
      if (typeof this.options.handleValidationErrors === 'function') {
        if (this.options.handleValidationErrors.apply(this, [this.form, fields]) === false) {
          return true;
        }
      }

      // Allow plugins to cancel the validation errors being handled
      if (this.snowboard.globalEvent('ajaxValidationErrors', this.form, fields, this) === false) {
        return true;
      }
      return false;
    }

    /**
     * Processes assets returned by an AJAX request.
     *
     * By default, no asset processing will occur and this will return a resolved Promise.
     *
     * Plugins can augment this functionality from the `ajaxLoadAssets` event. This event is considered blocking, and
     * allows assets to be loaded or processed before continuing with any additional functionality.
     *
     * @param {Object} assets
     * @returns {Promise}
     */
  }, {
    key: "processAssets",
    value: function processAssets(assets) {
      return this.snowboard.globalPromiseEvent('ajaxLoadAssets', assets);
    }

    /**
     * Confirms the request with the user before proceeding.
     *
     * This is an asynchronous method. By default, it will use the browser's `confirm()` method to query the user to
     * confirm the action. This method will return a Promise with a boolean value depending on whether the user confirmed
     * or not.
     *
     * Plugins can augment this functionality from the `ajaxConfirmMessage` event. You may also override this functionality
     * on a per-request basis through the `handleConfirmMessage` callback option. If a `false` is returned from either,
     * the confirmation is assumed to have been denied.
     *
     * @returns {Promise}
     */
  }, {
    key: "doConfirm",
    value: (function () {
      var _doConfirm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var promises, fulfilled;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof this.options.handleConfirmMessage === 'function')) {
                _context2.next = 4;
                break;
              }
              if (!(this.options.handleConfirmMessage.apply(this, [this.confirm]) === false)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", false);
            case 3:
              return _context2.abrupt("return", true);
            case 4:
              if (!(this.snowboard.listensToEvent('ajaxConfirmMessage').length === 0)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", window.confirm(this.confirm));
            case 6:
              // Run custom plugin confirmations
              promises = this.snowboard.globalPromiseEvent('ajaxConfirmMessage', this.confirm, this);
              _context2.prev = 7;
              _context2.next = 10;
              return promises;
            case 10:
              fulfilled = _context2.sent;
              if (!fulfilled) {
                _context2.next = 13;
                break;
              }
              return _context2.abrupt("return", true);
            case 13:
              _context2.next = 18;
              break;
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](7);
              return _context2.abrupt("return", false);
            case 18:
              return _context2.abrupt("return", false);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[7, 15]]);
      }));
      function doConfirm() {
        return _doConfirm.apply(this, arguments);
      }
      return doConfirm;
    }()
    /**
     * Fires off completion events for the Request.
     */
    )
  }, {
    key: "complete",
    value: function complete() {
      if (this.options.complete && typeof this.options.complete === 'function') {
        this.options.complete(this.responseData, this);
      }
      this.snowboard.globalEvent('ajaxDone', this.responseData, this);
      if (this.element) {
        var event = new Event('ajaxAlways');
        event.request = this;
        event.responseData = this.responseData;
        event.responseError = this.responseError;
        this.element.dispatchEvent(event);
      }

      // Fire off the destructor
      this.destruct();
    }
  }, {
    key: "form",
    get: function get() {
      if (this.options.form) {
        if (typeof this.options.form === 'string') {
          return document.querySelector(this.options.form);
        }
        return this.options.form;
      }
      if (!this.element) {
        return null;
      }
      if (this.element.tagName === 'FORM') {
        return this.element;
      }
      return this.element.closest('form');
    }
  }, {
    key: "context",
    get: function get() {
      return {
        handler: this.handler,
        options: this.options
      };
    }
  }, {
    key: "headers",
    get: function get() {
      var headers = {
        'X-Requested-With': 'XMLHttpRequest',
        // Keeps compatibility with jQuery AJAX
        'X-WINTER-REQUEST-HANDLER': this.handler,
        'X-WINTER-REQUEST-PARTIALS': this.extractPartials(this.options.update || [])
      };
      if (this.flash) {
        headers['X-WINTER-REQUEST-FLASH'] = 1;
      }
      if (this.xsrfToken) {
        headers['X-XSRF-TOKEN'] = this.xsrfToken;
      }
      return headers;
    }
  }, {
    key: "loading",
    get: function get() {
      return this.options.loading || false;
    }
  }, {
    key: "url",
    get: function get() {
      return this.options.url || window.location.href;
    }
  }, {
    key: "redirect",
    get: function get() {
      return this.options.redirect && this.options.redirect.length ? this.options.redirect : null;
    }
  }, {
    key: "flash",
    get: function get() {
      return this.options.flash || false;
    }
  }, {
    key: "files",
    get: function get() {
      if (this.options.files === true) {
        if (FormData === undefined) {
          this.snowboard.debug('This browser does not support file uploads');
          return false;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "xsrfToken",
    get: function get() {
      return this.snowboard.cookie().get('XSRF-TOKEN');
    }
  }, {
    key: "data",
    get: function get() {
      var data = _typeof(this.options.data) === 'object' ? this.options.data : {};
      var formData = new FormData(this.form || undefined);
      if (Object.keys(data).length > 0) {
        Object.entries(data).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            key = _entry3[0],
            value = _entry3[1];
          formData.append(key, value);
        });
      }
      return formData;
    }
  }, {
    key: "confirm",
    get: function get() {
      return this.options.confirm || false;
    }

    /**
     * Extracts partials.
     *
     * @param {Object} update
     * @returns {string}
     */
  }, {
    key: "extractPartials",
    value: function extractPartials(update) {
      return Object.keys(update).join('&');
    }

    /**
     * Renders an error with useful debug information.
     *
     * This method is used internally when the AJAX request could not be completed or processed correctly due to an error.
     *
     * @param {string} message
     * @param {string} exception
     * @param {string} file
     * @param {Number} line
     * @param {string[]} trace
     * @returns {Error}
     */
  }, {
    key: "renderError",
    value: function renderError(message, exception, file, line, trace) {
      var error = new Error(message);
      error.exception = exception || null;
      error.file = file || null;
      error.line = line || null;
      error.trace = trace || [];
      return error;
    }

    /**
     * Checks a given string to see if it is a valid AJAX handler name.
     *
     * @param {String} name
     * @returns {Boolean}
     */
  }, {
    key: "isHandlerName",
    value: function isHandlerName(name) {
      return /^(?:\w+:{2})?on[A-Z0-9]/.test(name);
    }
  }]);
  return Request;
}(_abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"]);


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

/***/ "./assets/js/snowboard/main/InnerProxyHandler.js":
/*!*******************************************************!*\
  !*** ./assets/js/snowboard/main/InnerProxyHandler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal proxy for Snowboard.
 *
 * This handler wraps the Snowboard instance that is passed to the constructor of plugin instances.
 * It prevents access to the following methods:
 *  - `attachAbstracts`: No need to attach abstracts again.
 *  - `loadUtilties`: No need to load utilities again.
 *  - `initialise`: Snowboard is already initialised.
 *  - `initialiseSingletons`: Singletons are already initialised.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        throw new Error("You cannot use the \"".concat(prop, "\" Snowboard method within a plugin."));
      }
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (['attachAbstracts', 'loadUtilities', 'initialise', 'initialiseSingletons'].includes(prop)) {
        return false;
      }
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "./assets/js/snowboard/main/PluginLoader.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/main/PluginLoader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginLoader)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InnerProxyHandler */ "./assets/js/snowboard/main/InnerProxyHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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




/**
 * Plugin loader class.
 *
 * This is a provider (factory) class for a single plugin and provides the link between Snowboard framework functionality
 * and the underlying plugin instances. It also provides some basic mocking of plugin methods for testing.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var PluginLoader = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * Binds the Winter framework to the instance.
   *
   * @param {string} name
   * @param {Snowboard} snowboard
   * @param {PluginBase} instance
   */
  function PluginLoader(name, snowboard, instance) {
    _classCallCheck(this, PluginLoader);
    this.name = name;
    this.snowboard = new Proxy(snowboard, _InnerProxyHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.instance = instance;

    // Freeze instance that has been inserted into this loader
    Object.freeze(this.instance);
    this.instances = [];
    this.singleton = {
      initialised: false
    };
    // Prevent further extension of the singleton status object
    Object.seal(this.singleton);
    this.mocks = {};
    this.originalFunctions = {};

    // Freeze loader itself
    Object.freeze(PluginLoader.prototype);
    Object.freeze(this);
  }

  /**
   * Determines if the current plugin has a specific method available.
   *
   * Returns false if the current plugin is a callback function.
   *
   * @param {string} methodName
   * @returns {boolean}
   */
  _createClass(PluginLoader, [{
    key: "hasMethod",
    value: function hasMethod(methodName) {
      if (this.isFunction()) {
        return false;
      }
      return typeof this.instance.prototype[methodName] === 'function';
    }

    /**
     * Calls a prototype method for a plugin. This should generally be used for "static" calls.
     *
     * @param {string} methodName
     * @param {...} args
     * @returns {any}
     */
  }, {
    key: "callMethod",
    value: function callMethod() {
      if (this.isFunction()) {
        return null;
      }
      for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
        parameters[_key] = arguments[_key];
      }
      var args = parameters;
      var methodName = args.shift();
      return this.instance.prototype[methodName](args);
    }

    /**
     * Returns an instance of the current plugin.
     *
     * - If this is a callback function plugin, the function will be returned.
     * - If this is a singleton, the single instance of the plugin will be returned.
     *
     * @returns {PluginBase|Function}
     */
  }, {
    key: "getInstance",
    value: function getInstance() {
      var _this = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parameters[_key2] = arguments[_key2];
      }
      if (this.isFunction()) {
        return this.instance.apply(this, parameters);
      }
      if (!this.dependenciesFulfilled()) {
        var unmet = this.getDependencies().filter(function (item) {
          return !_this.snowboard.getPluginNames().includes(item);
        });
        throw new Error("The \"".concat(this.name, "\" plugin requires the following plugins: ").concat(unmet.join(', ')));
      }
      if (this.isSingleton()) {
        if (this.instances.length === 0) {
          this.initialiseSingleton.apply(this, parameters);
        }

        // Apply mocked methods
        if (Object.keys(this.mocks).length > 0) {
          Object.entries(this.originalFunctions).forEach(function (entry) {
            var _entry = _slicedToArray(entry, 2),
              methodName = _entry[0],
              callback = _entry[1];
            _this.instances[0][methodName] = callback;
          });
          Object.entries(this.mocks).forEach(function (entry) {
            var _entry2 = _slicedToArray(entry, 2),
              methodName = _entry2[0],
              callback = _entry2[1];
            _this.instances[0][methodName] = function () {
              for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                params[_key3] = arguments[_key3];
              }
              return callback.apply(void 0, [_this].concat(params));
            };
          });
        }
        return this.instances[0];
      }

      // Apply mocked methods to prototype
      if (Object.keys(this.mocks).length > 0) {
        Object.entries(this.originalFunctions).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            methodName = _entry3[0],
            callback = _entry3[1];
          _this.instance.prototype[methodName] = callback;
        });
        Object.entries(this.mocks).forEach(function (entry) {
          var _entry4 = _slicedToArray(entry, 2),
            methodName = _entry4[0],
            callback = _entry4[1];
          _this.instance.prototype[methodName] = function () {
            for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = arguments[_key4];
            }
            return callback.apply(void 0, [_this].concat(params));
          };
        });
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this.instances.splice(_this.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      return newInstance;
    }

    /**
     * Gets all instances of the current plugin.
     *
     * If this plugin is a callback function plugin, an empty array will be returned.
     *
     * @returns {PluginBase[]}
     */
  }, {
    key: "getInstances",
    value: function getInstances() {
      if (this.isFunction()) {
        return [];
      }
      return this.instances;
    }

    /**
     * Determines if the current plugin is a simple callback function.
     *
     * @returns {boolean}
     */
  }, {
    key: "isFunction",
    value: function isFunction() {
      return typeof this.instance === 'function' && this.instance.prototype instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false;
    }

    /**
     * Determines if the current plugin is a singleton.
     *
     * @returns {boolean}
     */
  }, {
    key: "isSingleton",
    value: function isSingleton() {
      return this.instance.prototype instanceof _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"] === true;
    }

    /**
     * Determines if a singleton has been initialised.
     *
     * Normal plugins will always return true.
     *
     * @returns {boolean}
     */
  }, {
    key: "isInitialised",
    value: function isInitialised() {
      if (!this.isSingleton()) {
        return true;
      }
      return this.singleton.initialised;
    }

    /**
     * Initialises the singleton instance.
     *
     * @returns {void}
     */
  }, {
    key: "initialiseSingleton",
    value: function initialiseSingleton() {
      var _this2 = this;
      if (!this.isSingleton()) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        parameters[_key5] = arguments[_key5];
      }
      var newInstance = _construct(this.instance, [this.snowboard].concat(parameters));
      newInstance.detach = function () {
        return _this2.instances.splice(_this2.instances.indexOf(newInstance), 1);
      };
      newInstance.construct.apply(newInstance, parameters);
      this.instances.push(newInstance);
      this.singleton.initialised = true;
    }

    /**
     * Gets the dependencies of the current plugin.
     *
     * @returns {string[]}
     */
  }, {
    key: "getDependencies",
    value: function getDependencies() {
      // Callback functions cannot have dependencies.
      if (this.isFunction()) {
        return [];
      }

      // No dependency method specified.
      if (typeof this.instance.prototype.dependencies !== 'function') {
        return [];
      }
      return this.instance.prototype.dependencies().map(function (item) {
        return item.toLowerCase();
      });
    }

    /**
     * Determines if the current plugin has all its dependencies fulfilled.
     *
     * @returns {boolean}
     */
  }, {
    key: "dependenciesFulfilled",
    value: function dependenciesFulfilled() {
      var _this3 = this;
      var dependencies = this.getDependencies();
      var fulfilled = true;
      dependencies.forEach(function (plugin) {
        if (!_this3.snowboard.hasPlugin(plugin)) {
          fulfilled = false;
        }
      });
      return fulfilled;
    }

    /**
     * Allows a method of an instance to be mocked for testing.
     *
     * This mock will be applied for the life of an instance. For singletons, the mock will be applied for the life
     * of the page.
     *
     * Mocks cannot be applied to callback function plugins.
     *
     * @param {string} methodName
     * @param {Function} callback
     */
  }, {
    key: "mock",
    value: function mock(methodName, callback) {
      var _this4 = this;
      if (this.isFunction()) {
        return;
      }
      if (!this.instance.prototype[methodName]) {
        throw new Error("Function \"".concat(methodName, "\" does not exist and cannot be mocked"));
      }
      this.mocks[methodName] = callback;
      this.originalFunctions[methodName] = this.instance.prototype[methodName];
      if (this.isSingleton() && this.instances.length === 0) {
        this.initialiseSingleton();

        // Apply mocked method
        this.instances[0][methodName] = function () {
          for (var _len6 = arguments.length, parameters = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            parameters[_key6] = arguments[_key6];
          }
          return callback.apply(void 0, [_this4].concat(parameters));
        };
      }
    }

    /**
     * Removes a mock callback from future instances.
     *
     * @param {string} methodName
     */
  }, {
    key: "unmock",
    value: function unmock(methodName) {
      if (this.isFunction()) {
        return;
      }
      if (!this.mocks[methodName]) {
        return;
      }
      if (this.isSingleton()) {
        this.instances[0][methodName] = this.originalFunctions[methodName];
      }
      delete this.mocks[methodName];
      delete this.originalFunctions[methodName];
    }
  }]);
  return PluginLoader;
}();


/***/ }),

/***/ "./assets/js/snowboard/main/ProxyHandler.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/main/ProxyHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function get(target, prop, receiver) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return function () {
          var _Reflect$get$propLowe;
          return (_Reflect$get$propLowe = Reflect.get(target, 'plugins')[propLower]).getInstance.apply(_Reflect$get$propLowe, arguments);
        };
      }
    }
    return Reflect.get(target, prop, receiver);
  },
  has: function has(target, prop) {
    if (typeof prop === 'string') {
      var propLower = prop.toLowerCase();
      if (target.hasPlugin(propLower)) {
        return true;
      }
    }
    return Reflect.has(target, prop);
  }
});

/***/ }),

/***/ "./assets/js/snowboard/main/Snowboard.js":
/*!***********************************************!*\
  !*** ./assets/js/snowboard/main/Snowboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snowboard)
/* harmony export */ });
/* harmony import */ var _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/PluginBase */ "./assets/js/snowboard/abstracts/PluginBase.js");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
/* harmony import */ var _PluginLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginLoader */ "./assets/js/snowboard/main/PluginLoader.js");
/* harmony import */ var _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/Cookie */ "./assets/js/snowboard/utilities/Cookie.js");
/* harmony import */ var _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/JsonParser */ "./assets/js/snowboard/utilities/JsonParser.js");
/* harmony import */ var _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/Sanitizer */ "./assets/js/snowboard/utilities/Sanitizer.js");
/* harmony import */ var _utilities_Url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/Url */ "./assets/js/snowboard/utilities/Url.js");
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








/**
 * Snowboard - the Winter JavaScript framework.
 *
 * This class represents the base of a modern take on the Winter JS framework, being fully extensible and taking advantage
 * of modern JavaScript features by leveraging the Laravel Mix compilation framework. It also is coded up to remove the
 * dependency of jQuery.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 * @link https://wintercms.com/docs/snowboard/introduction
 */
var Snowboard = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {boolean} autoSingletons Automatically load singletons when DOM is ready. Default: `true`.
   * @param {boolean} debug Whether debugging logs should be shown. Default: `false`.
   */
  function Snowboard(autoSingletons, debug) {
    _classCallCheck(this, Snowboard);
    this.debugEnabled = typeof debug === 'boolean' && debug === true;
    this.autoInitSingletons = typeof autoSingletons === 'boolean' && autoSingletons === false;
    this.plugins = {};
    this.listeners = {};
    this.foundBaseUrl = null;
    this.readiness = {
      dom: false
    };
    // Seal readiness from being added to further, but allow the properties to be modified.
    Object.seal(this.readiness);
    this.attachAbstracts();

    // Freeze the Snowboard class to prevent further modifications.
    Object.freeze(Snowboard.prototype);
    Object.freeze(this);
    this.loadUtilities();
    this.initialise();
    this.debug('Snowboard framework initialised');
  }

  /**
   * Attaches abstract classes as properties of the Snowboard class.
   *
   * This will allow Javascript functionality with no build process to still extend these abstracts by prefixing
   * them with "Snowboard".
   *
   * ```
   * class MyClass extends Snowboard.PluginBase {
   *     ...
   * }
   * ```
   */
  _createClass(Snowboard, [{
    key: "attachAbstracts",
    value: function attachAbstracts() {
      this.PluginBase = _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"];
      this.Singleton = _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"];
      Object.freeze(this.PluginBase.prototype);
      Object.freeze(this.PluginBase);
      Object.freeze(this.Singleton.prototype);
      Object.freeze(this.Singleton);
    }

    /**
     * Loads the default utilities.
     */
  }, {
    key: "loadUtilities",
    value: function loadUtilities() {
      this.addPlugin('cookie', _utilities_Cookie__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.addPlugin('jsonParser', _utilities_JsonParser__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.addPlugin('sanitizer', _utilities_Sanitizer__WEBPACK_IMPORTED_MODULE_5__["default"]);
      this.addPlugin('url', _utilities_Url__WEBPACK_IMPORTED_MODULE_6__["default"]);
    }

    /**
     * Initialises the framework.
     *
     * Attaches a listener for the DOM being ready and triggers a global "ready" event for plugins to begin attaching
     * themselves to the DOM.
     */
  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;
      window.addEventListener('DOMContentLoaded', function () {
        if (_this.autoInitSingletons) {
          _this.initialiseSingletons();
        }
        _this.globalEvent('ready');
        _this.readiness.dom = true;
      });
    }

    /**
     * Initialises an instance of every singleton.
     */
  }, {
    key: "initialiseSingletons",
    value: function initialiseSingletons() {
      Object.values(this.plugins).forEach(function (plugin) {
        if (plugin.isSingleton() && plugin.dependenciesFulfilled()) {
          plugin.initialiseSingleton();
        }
      });
    }

    /**
     * Adds a plugin to the framework.
     *
     * Plugins are the cornerstone for additional functionality for Snowboard. A plugin must either be an ES2015 class
     * that extends the PluginBase or Singleton abstract classes, or a simple callback function.
     *
     * When a plugin is added, it is automatically assigned as a new magic method in the Snowboard class using the name
     * parameter, and can be called via this method. This method will always be the "lowercase" version of this name.
     *
     * For example, if a plugin is assigned to the name "myPlugin", it can be called via `Snowboard.myplugin()`.
     *
     * @param {string} name
     * @param {PluginBase|Function} instance
     */
  }, {
    key: "addPlugin",
    value: function addPlugin(name, instance) {
      var _this2 = this;
      var lowerName = name.toLowerCase();
      if (this.hasPlugin(lowerName)) {
        throw new Error("A plugin called \"".concat(name, "\" is already registered."));
      }
      if (typeof instance !== 'function' && instance instanceof _abstracts_PluginBase__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
        throw new Error('The provided plugin must extend the PluginBase class, or must be a callback function.');
      }
      if (this[name] !== undefined || this[lowerName] !== undefined) {
        throw new Error('The given name is already in use for a property or method of the Snowboard class.');
      }
      this.plugins[lowerName] = new _PluginLoader__WEBPACK_IMPORTED_MODULE_2__["default"](lowerName, this, instance);
      this.debug("Plugin \"".concat(name, "\" registered"));

      // Check if any singletons now have their dependencies fulfilled, and fire their "ready" handler if we're
      // in a ready state.
      Object.values(this.getPlugins()).forEach(function (plugin) {
        if (plugin.isSingleton() && !plugin.isInitialised() && plugin.dependenciesFulfilled() && plugin.hasMethod('listens') && Object.keys(plugin.callMethod('listens')).includes('ready') && _this2.readiness.dom) {
          var readyMethod = plugin.callMethod('listens').ready;
          plugin.callMethod(readyMethod);
        }
      });
    }

    /**
     * Removes a plugin.
     *
     * Removes a plugin from Snowboard, calling the destructor method for all active instances of the plugin.
     *
     * @param {string} name
     * @returns {void}
     */
  }, {
    key: "removePlugin",
    value: function removePlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        this.debug("Plugin \"".concat(name, "\" already removed"));
        return;
      }

      // Call destructors for all instances
      this.plugins[lowerName].getInstances().forEach(function (instance) {
        instance.destruct();
      });
      delete this.plugins[lowerName];
      delete this[lowerName];
      delete this[name];
      this.debug("Plugin \"".concat(name, "\" removed"));
    }

    /**
     * Determines if a plugin has been registered and is active.
     *
     * A plugin that is still waiting for dependencies to be registered will not be active.
     *
     * @param {string} name
     * @returns {boolean}
     */
  }, {
    key: "hasPlugin",
    value: function hasPlugin(name) {
      var lowerName = name.toLowerCase();
      return this.plugins[lowerName] !== undefined;
    }

    /**
     * Returns an array of registered plugins as PluginLoader objects.
     *
     * @returns {PluginLoader[]}
     */
  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this.plugins;
    }

    /**
     * Returns an array of registered plugins, by name.
     *
     * @returns {string[]}
     */
  }, {
    key: "getPluginNames",
    value: function getPluginNames() {
      return Object.keys(this.plugins);
    }

    /**
     * Returns a PluginLoader object of a given plugin.
     *
     * @returns {PluginLoader}
     */
  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var lowerName = name.toLowerCase();
      if (!this.hasPlugin(lowerName)) {
        throw new Error("No plugin called \"".concat(lowerName, "\" has been registered."));
      }
      return this.plugins[lowerName];
    }

    /**
     * Finds all plugins that listen to the given event.
     *
     * This works for both normal and promise events. It does NOT check that the plugin's listener actually exists.
     *
     * @param {string} eventName
     * @returns {string[]} The name of the plugins that are listening to this event.
     */
  }, {
    key: "listensToEvent",
    value: function listensToEvent(eventName) {
      var plugins = [];
      Object.entries(this.plugins).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          plugin = _entry[1];
        if (plugin.isFunction()) {
          return;
        }
        if (!plugin.dependenciesFulfilled()) {
          return;
        }
        if (!plugin.hasMethod('listens')) {
          return;
        }
        var listeners = plugin.callMethod('listens');
        if (typeof listeners[eventName] === 'string' || typeof listeners[eventName] === 'function') {
          plugins.push(name);
        }
      });
      return plugins;
    }

    /**
     * Add a simple ready listener.
     *
     * Synonymous with jQuery's "$(document).ready()" functionality, this allows inline scripts to
     * attach themselves to Snowboard immediately but only fire when the DOM is ready.
     *
     * @param {Function} callback
     */
  }, {
    key: "ready",
    value: function ready(callback) {
      if (this.readiness.dom) {
        callback();
      }
      this.on('ready', callback);
    }

    /**
     * Adds a simple listener for an event.
     *
     * This can be used for ad-hoc scripts that don't need a full plugin. The given callback will be
     * called when the event name provided fires. This works for both normal and Promise events. For
     * a Promise event, your callback must return a Promise.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      if (!this.listeners[eventName].includes(callback)) {
        this.listeners[eventName].push(callback);
      }
    }

    /**
     * Removes a simple listener for an event.
     *
     * @param {String} eventName
     * @param {Function} callback
     */
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!this.listeners[eventName]) {
        return;
      }
      var index = this.listeners[eventName].indexOf(callback);
      if (index === -1) {
        return;
      }
      this.listeners[eventName].splice(index, 1);
    }

    /**
     * Calls a global event to all registered plugins.
     *
     * If any plugin returns a `false`, the event is considered cancelled.
     *
     * @param {string} eventName
     * @returns {boolean} If event was not cancelled
     */
  }, {
    key: "globalEvent",
    value: function globalEvent(eventName) {
      var _this3 = this;
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }
      this.debug.apply(this, ["Calling global event \"".concat(eventName, "\"")].concat(parameters));

      // Find plugins listening to the event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global event \"".concat(eventName, "\""));
        return true;
      }
      this.debug("Listeners found for global event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var cancelled = false;
      listeners.forEach(function (name) {
        var plugin = _this3.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          // If a plugin has cancelled the event, no further plugins are considered.
          if (cancelled) {
            return;
          }
          if (typeof listenMethod === 'function') {
            try {
              var result = listenMethod.apply(instance, parameters);
              if (result === false) {
                cancelled = true;
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              if (instance[listenMethod].apply(instance, parameters) === false) {
                cancelled = true;
                _this3.debug("Global event \"".concat(eventName, "\" cancelled by \"").concat(name, "\" plugin"));
              }
            } catch (error) {
              _this3.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this3.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners for this event.
      if (!cancelled && this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          // If a listener has cancelled the event, no further listeners are considered.
          if (cancelled) {
            return;
          }
          try {
            if (listener.apply(void 0, parameters) === false) {
              cancelled = true;
              _this3.debug("Global event \"".concat(eventName, " cancelled by an ad-hoc listener."));
            }
          } catch (error) {
            _this3.error("Error thrown in \"".concat(eventName, "\" event by an ad-hoc listener."), error);
          }
        });
      }
      return !cancelled;
    }

    /**
     * Calls a global event to all registered plugins, expecting a Promise to be returned by all.
     *
     * This collates all plugins responses into one large Promise that either expects all to be resolved, or one to reject.
     * If no listeners are found, a resolved Promise is returned.
     *
     * @param {string} eventName
     */
  }, {
    key: "globalPromiseEvent",
    value: function globalPromiseEvent(eventName) {
      var _this4 = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parameters[_key2 - 1] = arguments[_key2];
      }
      this.debug("Calling global promise event \"".concat(eventName, "\""));

      // Find plugins listening to this event.
      var listeners = this.listensToEvent(eventName);
      if (listeners.length === 0) {
        this.debug("No listeners found for global promise event \"".concat(eventName, "\""));
        return Promise.resolve();
      }
      this.debug("Listeners found for global promise event \"".concat(eventName, "\": ").concat(listeners.join(', ')));
      var promises = [];
      listeners.forEach(function (name) {
        var plugin = _this4.getPlugin(name);
        if (plugin.isFunction()) {
          return;
        }
        if (plugin.isSingleton() && plugin.getInstances().length === 0) {
          plugin.initialiseSingleton();
        }
        var listenMethod = plugin.callMethod('listens')[eventName];

        // Call event handler methods for all plugins, if they have a method specified for the event.
        plugin.getInstances().forEach(function (instance) {
          if (typeof listenMethod === 'function') {
            try {
              var instancePromise = listenMethod.apply(instance, parameters);
              if (instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" event by \"").concat(name, "\" plugin."), error);
            }
          } else if (typeof listenMethod === 'string') {
            if (!instance[listenMethod]) {
              throw new Error("Missing \"".concat(listenMethod, "\" method in \"").concat(name, "\" plugin"));
            }
            try {
              var _instancePromise = instance[listenMethod].apply(instance, parameters);
              if (_instancePromise instanceof Promise === false) {
                return;
              }
              promises.push(_instancePromise);
            } catch (error) {
              _this4.error("Error thrown in \"".concat(eventName, "\" promise event by \"").concat(name, "\" plugin."), error);
            }
          } else {
            _this4.error("Listen method for \"".concat(eventName, "\" event in \"").concat(name, "\" plugin is not a function or string."));
          }
        });
      });

      // Find ad-hoc listeners listening to this event.
      if (this.listeners[eventName] && this.listeners[eventName].length > 0) {
        this.debug("Found ".concat(this.listeners[eventName].length, " ad-hoc listener(s) for global promise event \"").concat(eventName, "\""));
        this.listeners[eventName].forEach(function (listener) {
          try {
            var listenerPromise = listener.apply(void 0, parameters);
            if (listenerPromise instanceof Promise === false) {
              return;
            }
            promises.push(listenerPromise);
          } catch (error) {
            _this4.error("Error thrown in \"".concat(eventName, "\" promise event by an ad-hoc listener."), error);
          }
        });
      }
      if (promises.length === 0) {
        return Promise.resolve();
      }
      return Promise.all(promises);
    }

    /**
     * Log a styled message in the console.
     *
     * Includes parameters and a stack trace.
     *
     * @returns {void}
     */
  }, {
    key: "logMessage",
    value: function logMessage(color, bold, message) {
      /* eslint-disable */
      console.groupCollapsed('%c[Snowboard]', "color: ".concat(color, "; font-weight: ").concat(bold ? 'bold' : 'normal', ";"), message);
      for (var _len3 = arguments.length, parameters = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        parameters[_key3 - 3] = arguments[_key3];
      }
      if (parameters.length) {
        console.groupCollapsed("%cParameters %c(".concat(parameters.length, ")"), 'color: rgb(45, 167, 199); font-weight: bold;', 'color: rgb(88, 88, 88); font-weight: normal;');
        var index = 0;
        parameters.forEach(function (param) {
          index += 1;
          console.log("%c".concat(index, ":"), 'color: rgb(88, 88, 88); font-weight: normal;', param);
        });
        console.groupEnd();
        console.groupCollapsed('%cTrace', 'color: rgb(45, 167, 199); font-weight: bold;');
        console.trace();
        console.groupEnd();
      } else {
        console.trace();
      }
      console.groupEnd();
      /* eslint-enable */
    }

    /**
     * Log a message.
     *
     * @returns {void}
     */
  }, {
    key: "log",
    value: function log(message) {
      for (var _len4 = arguments.length, parameters = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        parameters[_key4 - 1] = arguments[_key4];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Log a debug message.
     *
     * These messages are only shown when debugging is enabled.
     *
     * @returns {void}
     */
  }, {
    key: "debug",
    value: function debug(message) {
      if (!this.debugEnabled) {
        return;
      }
      for (var _len5 = arguments.length, parameters = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        parameters[_key5 - 1] = arguments[_key5];
      }
      this.logMessage.apply(this, ['rgb(45, 167, 199)', false, message].concat(parameters));
    }

    /**
     * Logs an error message.
     *
     * @returns {void}
     */
  }, {
    key: "error",
    value: function error(message) {
      for (var _len6 = arguments.length, parameters = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        parameters[_key6 - 1] = arguments[_key6];
      }
      this.logMessage.apply(this, ['rgb(229, 35, 35)', true, message].concat(parameters));
    }
  }]);
  return Snowboard;
}();


/***/ }),

/***/ "./assets/js/snowboard/snowboard.backend.extras.js":
/*!*********************************************************!*\
  !*** ./assets/js/snowboard/snowboard.backend.extras.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extras_Flash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras/Flash */ "./assets/js/snowboard/extras/Flash.js");
/* harmony import */ var _extras_Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras/Transition */ "./assets/js/snowboard/extras/Transition.js");
/* harmony import */ var _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extras/AttachLoading */ "./assets/js/snowboard/extras/AttachLoading.js");
/* harmony import */ var _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras/StripeLoader */ "./assets/js/snowboard/extras/StripeLoader.js");
/* harmony import */ var _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extras/StylesheetLoader */ "./assets/js/snowboard/extras/StylesheetLoader.js");
/* harmony import */ var _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extras/AssetLoader */ "./assets/js/snowboard/extras/AssetLoader.js");
/* harmony import */ var _extras_DataConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extras/DataConfig */ "./assets/js/snowboard/extras/DataConfig.js");







if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the extra plugins.');
}
(function (Snowboard) {
  Snowboard.addPlugin('assetLoader', _extras_AssetLoader__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Snowboard.addPlugin('dataConfig', _extras_DataConfig__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Snowboard.addPlugin('extrasStyles', _extras_StylesheetLoader__WEBPACK_IMPORTED_MODULE_4__["default"]);
  Snowboard.addPlugin('transition', _extras_Transition__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Snowboard.addPlugin('flash', _extras_Flash__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Snowboard.addPlugin('attachLoading', _extras_AttachLoading__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Snowboard.addPlugin('stripeLoader', _extras_StripeLoader__WEBPACK_IMPORTED_MODULE_3__["default"]);
})(window.Snowboard);

/***/ }),

/***/ "./assets/js/snowboard/snowboard.base.debug.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/snowboard.base.debug.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/Snowboard */ "./assets/js/snowboard/main/Snowboard.js");
/* harmony import */ var _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/ProxyHandler */ "./assets/js/snowboard/main/ProxyHandler.js");


(function (window) {
  var snowboard = new Proxy(new _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__["default"](true, true), _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);

  // Cover all aliases
  window.snowboard = snowboard;
  window.Snowboard = snowboard;
  window.SnowBoard = snowboard;
})(window);

/***/ }),

/***/ "./assets/js/snowboard/snowboard.request.js":
/*!**************************************************!*\
  !*** ./assets/js/snowboard/snowboard.request.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax/Request */ "./assets/js/snowboard/ajax/Request.js");

if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the Javascript AJAX request feature.');
}
(function (Snowboard) {
  Snowboard.addPlugin('request', _ajax_Request__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.Snowboard);

/***/ }),

/***/ "./assets/js/snowboard/utilities/Cookie.js":
/*!*************************************************!*\
  !*** ./assets/js/snowboard/utilities/Cookie.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
 * Cookie utility.
 *
 * This utility is a thin wrapper around the "js-cookie" library.
 *
 * @see https://github.com/js-cookie/js-cookie
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Cookie = /*#__PURE__*/function (_Singleton) {
  _inherits(Cookie, _Singleton);
  function Cookie() {
    _classCallCheck(this, Cookie);
    return _callSuper(this, Cookie, arguments);
  }
  _createClass(Cookie, [{
    key: "construct",
    value: function construct() {
      this.defaults = {
        expires: null,
        path: '/',
        domain: null,
        secure: false,
        sameSite: 'Lax'
      };
    }

    /**
     * Set the default cookie parameters for all subsequent "set" and "remove" calls.
     *
     * @param {Object} options
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      var _this = this;
      if (_typeof(options) !== 'object') {
        throw new Error('Cookie defaults must be provided as an object');
      }
      Object.entries(options).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];
        if (_this.defaults[key] !== undefined) {
          _this.defaults[key] = value;
        }
      });
    }

    /**
     * Get the current default cookie parameters.
     *
     * @returns {Object}
     */
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      var _this2 = this;
      var defaults = {};
      Object.entries(this.defaults).forEach(function (entry) {
        var _entry2 = _slicedToArray(entry, 2),
          key = _entry2[0],
          value = _entry2[1];
        if (_this2.defaults[key] !== null) {
          defaults[key] = value;
        }
      });
      return defaults;
    }

    /**
     * Get a cookie by name.
     *
     * If `name` is undefined, returns all cookies as an Object.
     *
     * @param {String} name
     * @returns {Object|String}
     */
  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;
      if (name === undefined) {
        var cookies = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get();
        Object.entries(cookies).forEach(function (entry) {
          var _entry3 = _slicedToArray(entry, 2),
            cookieName = _entry3[0],
            cookieValue = _entry3[1];
          _this3.snowboard.globalEvent('cookie.get', cookieName, cookieValue, function (newValue) {
            cookies[cookieName] = newValue;
          });
        });
        return cookies;
      }
      var value = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(name);

      // Allow plugins to override the gotten value
      this.snowboard.globalEvent('cookie.get', name, value, function (newValue) {
        value = newValue;
      });
      return value;
    }

    /**
     * Set a cookie by name.
     *
     * You can specify additional cookie parameters through the "options" parameter.
     *
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     * @returns {String}
     */
  }, {
    key: "set",
    value: function set(name, value, options) {
      var saveValue = value;

      // Allow plugins to override the value to save
      this.snowboard.globalEvent('cookie.set', name, value, function (newValue) {
        saveValue = newValue;
      });
      return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(name, saveValue, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }

    /**
     * Remove a cookie by name.
     *
     * You can specify the additional cookie parameters via the "options" parameter.
     *
     * @param {String} name
     * @param {Object} options
     * @returns {void}
     */
  }, {
    key: "remove",
    value: function remove(name, options) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(name, _objectSpread(_objectSpread({}, this.getDefaults()), options));
    }
  }]);
  return Cookie;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/JsonParser.js":
/*!*****************************************************!*\
  !*** ./assets/js/snowboard/utilities/JsonParser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JsonParser)
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
 * JSON Parser utility.
 *
 * This utility parses JSON-like data that does not strictly meet the JSON specifications in order to simplify development.
 * It is a safe replacement for JSON.parse(JSON.stringify(eval("({" + value + "})"))) that does not require the use of eval()
 *
 * @author Ayumi Hamasaki
 * @author Ben Thomson <git@alfreido.com>
 * @see https://github.com/octobercms/october/pull/4527
 */
var JsonParser = /*#__PURE__*/function (_Singleton) {
  _inherits(JsonParser, _Singleton);
  function JsonParser() {
    _classCallCheck(this, JsonParser);
    return _callSuper(this, JsonParser, arguments);
  }
  _createClass(JsonParser, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnJSON = function (json) {
        return _this.parse(json);
      };
      window.ocJSON = window.wnJSON;
    }
  }, {
    key: "parse",
    value: function parse(str) {
      var jsonString = this.parseString(str);
      return JSON.parse(jsonString);
    }
  }, {
    key: "parseString",
    value: function parseString(value) {
      var str = value.trim();
      if (!str.length) {
        throw new Error('Broken JSON object.');
      }
      var result = '';
      var type = null;
      var key = null;
      var body = '';

      /*
      * the mistake ','
      */
      while (str && str[0] === ',') {
        str = str.substr(1);
      }

      /*
      * string
      */
      if (str[0] === '"' || str[0] === '\'') {
        if (str[str.length - 1] !== str[0]) {
          throw new Error('Invalid string JSON object.');
        }
        body = '"';
        for (var i = 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            if (str[i + 1] === '\'') {
              body += str[i + 1];
            } else {
              body += str[i];
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[0]) {
            body += '"';
            return body;
          } else if (str[i] === '"') {
            body += '\\"';
          } else {
            body += str[i];
          }
        }
        throw new Error('Invalid string JSON object.');
      }

      /*
      * boolean
      */
      if (str === 'true' || str === 'false') {
        return str;
      }

      /*
      * null
      */
      if (str === 'null') {
        return 'null';
      }

      /*
      * number
      */
      var num = Number(str);
      if (!Number.isNaN(num)) {
        return num.toString();
      }

      /*
      * object
      */
      if (str[0] === '{') {
        type = 'needKey';
        key = null;
        result = '{';
        for (var _i = 1; _i < str.length; _i += 1) {
          if (this.isBlankChar(str[_i])) {
            /* eslint-disable-next-line */
            continue;
          }
          if (type === 'needKey' && (str[_i] === '"' || str[_i] === '\'')) {
            key = this.parseKey(str, _i + 1, str[_i]);
            result += "\"".concat(key, "\"");
            _i += key.length;
            _i += 1;
            type = 'afterKey';
          } else if (type === 'needKey' && this.canBeKeyHead(str[_i])) {
            key = this.parseKey(str, _i);
            result += '"';
            result += key;
            result += '"';
            _i += key.length - 1;
            type = 'afterKey';
          } else if (type === 'afterKey' && str[_i] === ':') {
            result += ':';
            type = ':';
          } else if (type === ':') {
            body = this.getBody(str, _i);
            _i = _i + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody' || type === 'needKey') {
            var last = _i;
            while (str[last] === ',' || this.isBlankChar(str[last])) {
              last += 1;
            }
            if (str[last] === '}' && last === str.length - 1) {
              while (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += '}';
              return result;
            }
            if (last !== _i && result !== '{') {
              result += ',';
              type = 'needKey';
              _i = last - 1;
            }
          }
        }
        throw new Error("Broken JSON object near ".concat(result));
      }

      /*
      * array
      */
      if (str[0] === '[') {
        result = '[';
        type = 'needBody';
        for (var _i2 = 1; _i2 < str.length; _i2 += 1) {
          if (str[_i2] === ' ' || str[_i2] === '\n' || str[_i2] === '\t') {
            /* eslint-disable-next-line */
            continue;
          } else if (type === 'needBody') {
            if (str[_i2] === ',') {
              result += 'null,';
              /* eslint-disable-next-line */
              continue;
            }
            if (str[_i2] === ']' && _i2 === str.length - 1) {
              if (result[result.length - 1] === ',') {
                result = result.substr(0, result.length - 1);
              }
              result += ']';
              return result;
            }
            body = this.getBody(str, _i2);
            _i2 = _i2 + body.originLength - 1;
            result += this.parseString(body.body);
            type = 'afterBody';
          } else if (type === 'afterBody') {
            if (str[_i2] === ',') {
              result += ',';
              type = 'needBody';

              // deal with mistake ","
              while (str[_i2 + 1] === ',' || this.isBlankChar(str[_i2 + 1])) {
                if (str[_i2 + 1] === ',') {
                  result += 'null,';
                }
                _i2 += 1;
              }
            } else if (str[_i2] === ']' && _i2 === str.length - 1) {
              result += ']';
              return result;
            }
          }
        }
        throw new Error("Broken JSON array near ".concat(result));
      }
      return '';
    }
  }, {
    key: "getBody",
    value: function getBody(str, pos) {
      var body = '';

      // parse string body
      if (str[pos] === '"' || str[pos] === '\'') {
        body = str[pos];
        for (var i = pos + 1; i < str.length; i += 1) {
          if (str[i] === '\\') {
            body += str[i];
            if (i + 1 < str.length) {
              body += str[i + 1];
            }
            i += 1;
          } else if (str[i] === str[pos]) {
            body += str[pos];
            return {
              originLength: body.length,
              body: body
            };
          } else {
            body += str[i];
          }
        }
        throw new Error("Broken JSON string body near ".concat(body));
      }

      // parse true / false
      if (str[pos] === 't') {
        if (str.indexOf('true', pos) === pos) {
          return {
            originLength: 'true'.length,
            body: 'true'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }
      if (str[pos] === 'f') {
        if (str.indexOf('f', pos) === pos) {
          return {
            originLength: 'false'.length,
            body: 'false'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse null
      if (str[pos] === 'n') {
        if (str.indexOf('null', pos) === pos) {
          return {
            originLength: 'null'.length,
            body: 'null'
          };
        }
        throw new Error("Broken JSON boolean body near ".concat(str.substr(0, pos + 10)));
      }

      // parse number
      if (str[pos] === '-' || str[pos] === '+' || str[pos] === '.' || str[pos] >= '0' && str[pos] <= '9') {
        body = '';
        for (var _i3 = pos; _i3 < str.length; _i3 += 1) {
          if (str[_i3] === '-' || str[_i3] === '+' || str[_i3] === '.' || str[_i3] >= '0' && str[_i3] <= '9') {
            body += str[_i3];
          } else {
            return {
              originLength: body.length,
              body: body
            };
          }
        }
        throw new Error("Broken JSON number body near ".concat(body));
      }

      // parse object
      if (str[pos] === '{' || str[pos] === '[') {
        var stack = [str[pos]];
        body = str[pos];
        for (var _i4 = pos + 1; _i4 < str.length; _i4 += 1) {
          body += str[_i4];
          if (str[_i4] === '\\') {
            if (_i4 + 1 < str.length) {
              body += str[_i4 + 1];
            }
            _i4 += 1;
          } else if (str[_i4] === '"') {
            if (stack[stack.length - 1] === '"') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '\'') {
              stack.push(str[_i4]);
            }
          } else if (str[_i4] === '\'') {
            if (stack[stack.length - 1] === '\'') {
              stack.pop();
            } else if (stack[stack.length - 1] !== '"') {
              stack.push(str[_i4]);
            }
          } else if (stack[stack.length - 1] !== '"' && stack[stack.length - 1] !== '\'') {
            if (str[_i4] === '{') {
              stack.push('{');
            } else if (str[_i4] === '}') {
              if (stack[stack.length - 1] === '{') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            } else if (str[_i4] === '[') {
              stack.push('[');
            } else if (str[_i4] === ']') {
              if (stack[stack.length - 1] === '[') {
                stack.pop();
              } else {
                throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
              }
            }
          }
          if (!stack.length) {
            return {
              originLength: _i4 - pos,
              body: body
            };
          }
        }
        throw new Error("Broken JSON ".concat(str[pos] === '{' ? 'object' : 'array', " body near ").concat(body));
      }
      throw new Error("Broken JSON body near ".concat(str.substr(pos - 5 >= 0 ? pos - 5 : 0, 50)));
    }
  }, {
    key: "parseKey",
    value: function parseKey(str, pos, quote) {
      var key = '';
      for (var i = pos; i < str.length; i += 1) {
        if (quote && quote === str[i]) {
          return key;
        }
        if (!quote && (str[i] === ' ' || str[i] === ':')) {
          return key;
        }
        key += str[i];
        if (str[i] === '\\' && i + 1 < str.length) {
          key += str[i + 1];
          i += 1;
        }
      }
      throw new Error("Broken JSON syntax near ".concat(key));
    }
  }, {
    key: "canBeKeyHead",
    value: function canBeKeyHead(ch) {
      if (ch[0] === '\\') {
        return false;
      }
      if (ch[0] >= 'a' && ch[0] <= 'z' || ch[0] >= 'A' && ch[0] <= 'Z' || ch[0] === '_') {
        return true;
      }
      if (ch[0] >= '0' && ch[0] <= '9') {
        return true;
      }
      if (ch[0] === '$') {
        return true;
      }
      if (ch.charCodeAt(0) > 255) {
        return true;
      }
      return false;
    }
  }, {
    key: "isBlankChar",
    value: function isBlankChar(ch) {
      return ch === ' ' || ch === '\n' || ch === '\t';
    }
  }]);
  return JsonParser;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/Sanitizer.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/utilities/Sanitizer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sanitizer)
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
 * Sanitizer utility.
 *
 * Client-side HTML sanitizer designed mostly to prevent self-XSS attacks.
 * The sanitizer utility will strip all attributes that start with `on` (usually JS event handlers as attributes, i.e. `onload` or `onerror`) or contain the `javascript:` pseudo protocol in their values.
 *
 * @author Ben Thomson <git@alfreido.com>
 */
var Sanitizer = /*#__PURE__*/function (_Singleton) {
  _inherits(Sanitizer, _Singleton);
  function Sanitizer() {
    _classCallCheck(this, Sanitizer);
    return _callSuper(this, Sanitizer, arguments);
  }
  _createClass(Sanitizer, [{
    key: "construct",
    value: function construct() {
      var _this = this;
      // Add to global function for backwards compatibility
      window.wnSanitize = function (html) {
        return _this.sanitize(html);
      };
      window.ocSanitize = window.wnSanitize;
    }
  }, {
    key: "sanitize",
    value: function sanitize(html, bodyOnly) {
      var parser = new DOMParser();
      var dom = parser.parseFromString(html, 'text/html');
      var returnBodyOnly = bodyOnly !== undefined && typeof bodyOnly === 'boolean' ? bodyOnly : true;
      this.sanitizeNode(dom.getRootNode());
      return returnBodyOnly ? dom.body.innerHTML : dom.innerHTML;
    }
  }, {
    key: "sanitizeNode",
    value: function sanitizeNode(node) {
      var _this2 = this;
      if (node.tagName === 'SCRIPT') {
        node.remove();
        return;
      }
      this.trimAttributes(node);
      var children = Array.from(node.children);
      children.forEach(function (child) {
        _this2.sanitizeNode(child);
      });
    }
  }, {
    key: "trimAttributes",
    value: function trimAttributes(node) {
      if (!node.attributes) {
        return;
      }
      for (var i = 0; i < node.attributes.length; i += 1) {
        var attrName = node.attributes.item(i).name;
        var attrValue = node.attributes.item(i).value;

        /*
        * remove attributes where the names start with "on" (for example: onload, onerror...)
        * remove attributes where the value starts with the "javascript:" pseudo protocol (for example href="javascript:alert(1)")
        */
        /* eslint-disable-next-line */
        if (attrName.indexOf('on') === 0 || attrValue.indexOf('javascript:') === 0) {
          node.removeAttribute(attrName);
        }
      }
    }
  }]);
  return Sanitizer;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/utilities/Url.js":
/*!**********************************************!*\
  !*** ./assets/js/snowboard/utilities/Url.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Url)
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
 * URL utility.
 *
 * This utility provides URL functions.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Url = /*#__PURE__*/function (_Singleton) {
  _inherits(Url, _Singleton);
  function Url() {
    _classCallCheck(this, Url);
    return _callSuper(this, Url, arguments);
  }
  _createClass(Url, [{
    key: "construct",
    value: function construct() {
      this.foundBaseUrl = null;
      this.baseUrl();
    }

    /**
     * Gets a URL based on a relative path.
     *
     * If an absolute URL is provided, it will be returned unchanged.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "to",
    value: function to(url) {
      var urlRegex = /[-a-z0-9_+:]+:\/\/[-a-z0-9@:%._+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()@:%_+.~#?&//=]*)/i;
      if (url.match(urlRegex)) {
        return url;
      }
      var theUrl = url.replace(/^\/+/, '');
      return "".concat(this.baseUrl()).concat(theUrl);
    }

    /**
     * Helper method to get the base URL of this install.
     *
     * This determines the base URL from three sources, in order:
     *  - If Snowboard is loaded via the `{% snowboard %}` tag, it will retrieve the base URL that
     * is automatically included there.
     *  - If a `<base>` tag is available, it will use the URL specified in the base tag.
     *  - Finally, it will take a guess from the current location. This will likely not work for sites
     * that reside in subdirectories.
     *
     * The base URL will always contain a trailing backslash.
     *
     * @returns {string}
     */
  }, {
    key: "baseUrl",
    value: function baseUrl() {
      if (this.foundBaseUrl !== null) {
        return this.foundBaseUrl;
      }
      if (document.querySelector('script[data-module="snowboard-base"]') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.baseUrl);
        return this.foundBaseUrl;
      }
      if (document.querySelector('base') !== null) {
        this.foundBaseUrl = this.validateBaseUrl(document.querySelector('base').getAttribute('href'));
        return this.foundBaseUrl;
      }
      var urlParts = [window.location.protocol, '//', window.location.host, '/'];
      this.foundBaseUrl = urlParts.join('');
      return this.foundBaseUrl;
    }

    /**
     * Validates the base URL, ensuring it is a HTTP/HTTPs URL.
     *
     * If the Snowboard script or <base> tag on the page use a different type of URL, this will fail with
     * an error.
     *
     * @param {string} url
     * @returns {string}
     */
  }, {
    key: "validateBaseUrl",
    value: function validateBaseUrl(url) {
      var urlRegex = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/i;
      var urlParts = urlRegex.exec(url);
      var protocol = urlParts[2];
      var domain = urlParts[4];
      if (protocol && ['http', 'https'].indexOf(protocol.toLowerCase()) === -1) {
        throw new Error('Invalid base URL detected');
      }
      if (!domain) {
        throw new Error('Invalid base URL detected');
      }
      return url.substr(-1) === '/' ? url : "".concat(url, "/");
    }
  }]);
  return Url;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.debug.js"), __webpack_exec__("./assets/js/snowboard/snowboard.request.js"), __webpack_exec__("./assets/js/snowboard/snowboard.backend.extras.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFBa2xCLGdCQUFnQnhYLEdBQUcsRUFBRTtNQUNsQixJQUFNcVgsUUFBUSxHQUFHLDhEQUE4RDtNQUMvRSxJQUFNSyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ25KLElBQUksQ0FBQ2xPLEdBQUcsQ0FBQztNQUNuQyxJQUFNMlgsUUFBUSxHQUFHRCxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzVCLElBQU1wRCxNQUFNLEdBQUdvRCxRQUFRLENBQUMsQ0FBQyxDQUFDO01BRTFCLElBQUlDLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQ2pLLE9BQU8sQ0FBQ2lLLFFBQVEsQ0FBQy9NLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN0RSxNQUFNLElBQUluVSxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDaEQ7TUFDQSxJQUFJLENBQUM2ZCxNQUFNLEVBQUU7UUFDVCxNQUFNLElBQUk3ZCxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDaEQ7TUFFQSxPQUFRdUosR0FBRyxDQUFDNkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUN4QjdCLEdBQUcsTUFBQS9CLE1BQUEsQ0FDQStCLEdBQUcsTUFBRztJQUNuQjtFQUFDO0VBQUEsT0FBQTRSLEdBQUE7QUFBQSxFQTNGNEI5ZSw0REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1BsdWdpbkJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9SZXF1ZXN0LmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Fzc2V0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0F0dGFjaExvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRGF0YUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHJpcGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3R5bGVzaGVldExvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Jbm5lclByb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUGx1Z2luTG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Qcm94eUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Nub3dib2FyZC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3Nub3dib2FyZC5iYWNrZW5kLmV4dHJhcy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3Nub3dib2FyZC5iYXNlLmRlYnVnLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLnJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvQ29va2llLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL0pzb25QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvU2FuaXRpemVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL1VybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBsdWdpbiBiYXNlIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWxsIHBsdWdpbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGlzIHByb3ZpZGVkIHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIGluc3RhbmNlLCBhbmQgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRlblxuICAgICAqIHVubGVzcyB5b3UgYWJzb2x1dGVseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNub3dib2FyZCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdHJlYXRlZCBhcyB0aGUgdHJ1ZSBjb25zdHJ1Y3RvciBvZiBhIHBsdWdpbiwgYW5kIGNhbiBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKiBJdCB3aWxsIGJlIGNhbGxlZCBzdHJhaWdodCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHJlcXVpcmVkIHBsdWdpbnMgZm9yIHRoaXMgc3BlY2lmaWMgbW9kdWxlIHRvIHdvcmsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIHBsdWdpbnMgcmVxdWlyZWQgZm9yIHRoaXMgbW9kdWxlIHRvIHdvcmssIGFzIHN0cmluZ3MuXG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGlzdGVuZXIgbWV0aG9kcyBmb3IgZ2xvYmFsIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRmlyZWQgd2hlbiB0aGlzIHBsdWdpbiBpcyByZW1vdmVkLiBDYW4gYmUgbWFudWFsbHkgY2FsbGVkIGlmIHlvdSBoYXZlIGFub3RoZXIgc2NlbmFyaW8gZm9yXG4gICAgICogZGVzdHJ1Y3Rpb24sIGllLiB0aGUgZWxlbWVudCBhdHRhY2hlZCB0byB0aGUgcGx1Z2luIGlzIHJlbW92ZWQgb3IgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yIChvbGQgbWV0aG9kIG5hbWUpLlxuICAgICAqXG4gICAgICogQWxsb3dzIHByZXZpb3VzIHVzYWdlIG9mIHRoZSBcImRlc3RydWN0b3JcIiBtZXRob2QgdG8gc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBTaW5nbGV0b24gcGx1Z2luIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayB3aWxsIHVzZSB0byBpbnRlcnByZXQgdGhlIGN1cnJlbnQgcGx1Z2luIGFzIGFcbiAqIFwic2luZ2xldG9uXCIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IG9uZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIGNsYXNzIGlzIHVzZWQgYWNyb3NzIHRoZSBib2FyZC5cbiAqXG4gKiBTaW5nbGV0b25zIGFyZSBpbml0aWFsaXNlZCBvbiB0aGUgXCJkb21SZWFkeVwiIGV2ZW50IGJ5IGRlZmF1bHQuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFJlcXVlc3QgcGx1Z2luLlxuICpcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgQUpBWCBoYW5kbGVyIHdoaWNoIHdpbGwgcnVuIHVzaW5nIHRoZSBgZmV0Y2goKWAgbWV0aG9kIHRoYXQgaXMgZGVmYXVsdCBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIDIgb3IgMyBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogSWYgMiBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyB0aGUgaGFuZGxlciBuYW1lIGFuZCB0aGUgc2Vjb25kXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBvcHRpb25zLiBUaGlzIGFzc3VtZXMgdGhhdCB0aGlzIGlzIGEgZGV0YWNoZWQgQUpBWCByZXF1ZXN0IG5vdCBjb25uZWN0ZWQgdG9cbiAgICAgKiBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogSWYgMyBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhbiBlbGVtZW50IG9yIGEgc2VsZWN0b3IsIGFuZCB0aGUgc2Vjb25kXG4gICAgICogYW5kIHRoaXJkIHBhcmFtZXRlcnMgYXJlIHRoZSBoYW5kbGVyIGFuZCBvcHRpb25zLCByZXNwZWN0aXZlbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gYmUgYSBoYW5kbGVyIG5hbWUuXG4gICAgICAgICAgICAvLyBUaGlzIGFzc3VtZXMgdGhlIHJlcXVlc3QgaXMgYmVpbmcgbWFkZSBhZ2FpbnN0IG5vIGVsZW1lbnQsIGFuZCB0aGUgaGFuZGxlciBwYXJhbWV0ZXJcbiAgICAgICAgICAgIC8vIHdpbGwgY29udGFpbiBvcHRpb25zLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBoYW5kbGVyIHx8IHt9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZWxlbWVudCB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gc2VsZWN0b3I6ICR7ZWxlbWVudH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbWF0Y2hlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hlY2tSZXF1ZXN0KCk7XG4gICAgICAgIGlmICghdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTZXR1cCcsIHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhTZXR1cCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZG9DbGllbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRoaXMuZG9Db25maXJtKCkudGhlbigoY29uZmlybWVkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQWpheCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvQWpheCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX1NVQ0NFU1MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzIGZvciB0aGlzIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2Nvb2tpZScsICdqc29uUGFyc2VyJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBlbGVtZW50IGFuZCBoYW5kbGVyIGdpdmVuIGluIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIGNoZWNrUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZWxlbWVudCBwcm92aWRlZCBtdXN0IGJlIGFuIEVsZW1lbnQgaW5zdGFuY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQUpBWCBoYW5kbGVyIG5hbWUgaXMgbm90IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc0hhbmRsZXJOYW1lKHRoaXMuaGFuZGxlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS4gVGhlIGNvcnJlY3QgaGFuZGxlciBuYW1lIGZvcm1hdCBpczogXCJvbkV2ZW50XCIuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRmV0Y2ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG1hZGUgYXZhaWxhYmxlIGZvciBwbHVnaW5zIHRvIGV4dGVuZCBvciBvdmVycmlkZSB0aGUgZGVmYXVsdCBmZXRjaCgpIHNldHRpbmdzIHdpdGggdGhlaXIgb3duLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0RmV0Y2goKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0gKHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnNcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmRhdGEsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RmV0Y2hPcHRpb25zJywgdGhpcy5mZXRjaE9wdGlvbnMsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwgdGhpcy5mZXRjaE9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBjbGllbnQtc2lkZSB2YWxpZGF0aW9uIG9uIHRoZSBmb3JtLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkb0NsaWVudFZhbGlkYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvd3NlclZhbGlkYXRlID09PSB0cnVlICYmIHRoaXMuZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIEFKQVggcXVlcnkuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgZm9yIHdoZW4gdGhlIEFKQVggcmVxdWVzdCBpcyBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBkb0FqYXgoKSB7XG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSBBSkFYIHJlcXVlc3QgYmVmb3JlIHNlbmRpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4QmVmb3JlU2VuZCcsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgY2FuY2VsbGVkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhamF4UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmV0Y2goKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmNsdWRlcygnL2pzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLm1lc3NhZ2UgJiYgcmVzcG9uc2VEYXRhLmV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmV4Y2VwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEudHJhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcGFyc2UgSlNPTiByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZVRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKHJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWF9XSU5URVJfU1VDQ0VTUzogcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9SRVNQT05TRV9DT0RFOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcGFyc2UgSlNPTiByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHByb2Nlc3MgcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAocmVzcG9uc2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHJldHJpZXZlIGEgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyOiAke3Jlc3BvbnNlRXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN0YXJ0JywgYWpheFByb21pc2UsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4UHJvbWlzZScpO1xuICAgICAgICAgICAgZXZlbnQucHJvbWlzZSA9IGFqYXhQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFqYXhQcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciB1cGRhdGluZyB0aGUgcGFydGlhbHMgZnJvbSB0aGUgQUpBWCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIElmIGFueSBwYXJ0aWFscyBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgQUpBWCByZXNwb25zZSwgdGhpcyBtZXRob2Qgd2lsbCBhbHNvIGFjdGlvbiB0aGUgcGFydGlhbCB1cGRhdGVzLlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IHdoaWNoIHRyYWNrcyB3aGVuIHRoZSBwYXJ0aWFsIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHByb2Nlc3NVcGRhdGUocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlLmFwcGx5KHRoaXMsIFtyZXNwb25zZV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBwYXJ0aWFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWFscyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVzcG9uc2UpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN1YnN0cigwLCA4KSAhPT0gJ1hfV0lOVEVSJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJ0aWFscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheEJlZm9yZVVwZGF0ZScsIHJlc3BvbnNlLCB0aGlzKTtcbiAgICAgICAgICAgIHByb21pc2VzLnRoZW4oXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NBc3NldHMocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9VcGRhdGUocGFydGlhbHMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgZm9yIEhUTUwgcmVkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwYXJ0aWFscyB3aXRoIHRoZSBnaXZlbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcnRpYWxzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9VcGRhdGUocGFydGlhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwYXJ0aWFscykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcGFydGlhbCwgY29udGVudF0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9ICh0aGlzLm9wdGlvbnMudXBkYXRlICYmIHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF0pXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVwZGF0ZVtwYXJ0aWFsXVxuICAgICAgICAgICAgICAgICAgICA6IHBhcnRpYWw7XG5cbiAgICAgICAgICAgICAgICBsZXQgbW9kZSA9ICdyZXBsYWNlJztcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ2FwcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdwcmVwZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcjJyAmJiBzZWxlY3Rvci5zdWJzdHIoMCwgMSkgIT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ25vb3AnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJlcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCArIGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdub29wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYWZmZWN0ZWQucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZSB1cGRhdGUgZXZlbnQgZm9yIGVhY2ggZWxlbWVudCB0aGF0IGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlJywgZWxlbWVudCwgY29udGVudCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFVwZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhVcGRhdGVDb21wbGV0ZScsIGFmZmVjdGVkLCB0aGlzKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIHJlc3BvbnNlIGRhdGEuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBmbGFzaFxuICAgICAqIG1lc3NhZ2VzIHRvIGhhbmRsZSwgb3IgYW55IHJlZGlyZWN0cyB0byBiZSB1bmRlcnRha2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2VzcyAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VjY2Vzcyh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3VjY2VzcycsIHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciByZXNwb25zZSBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheERvbmUnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZURhdGEgPSB0aGlzLnJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoICYmIHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGbGFzaE1lc3NhZ2VzKHJlc3BvbnNlLlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBhIHJlZGlyZWN0IGZyb20gdGhlIHJlc3BvbnNlLCBvciB1c2UgdGhlIHJlZGlyZWN0IGFzIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlZGlyZWN0KHRoaXMucmVkaXJlY3QgfHwgcmVzcG9uc2UuWF9XSU5URVJfUkVESVJFQ1QpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciByZXNwb25zZSBmcm9tIHRoZSBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIGZpcmVzIG9mZiBhbGwgbmVjZXNzYXJ5IHByb2Nlc3NpbmcgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGUgZXJyb3IgcmVzcG9uc2UsIGllLiBpZiB0aGVyZSdzIGFueSBlcnJvciBvclxuICAgICAqIHZhbGlkYXRpb24gbWVzc2FnZXMgdG8gaGFuZGxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8RXJyb3J9IGVycm9yXG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lcnJvcih0aGlzLnJlc3BvbnNlRXJyb3IsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yJywgdGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheEZhaWwnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBza2lwRXJyb3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gUHJvY2VzcyB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUykge1xuICAgICAgICAgICAgICAgIHNraXBFcnJvciA9IHRoaXMucHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMoZXJyb3IuWF9XSU5URVJfRVJST1JfRklFTERTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yLlhfV0lOVEVSX0VSUk9SX01FU1NBR0UgJiYgIXNraXBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yTWVzc2FnZShlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZWRpcmVjdCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvY2Vzc29yIHdpbGwgc2ltcGx5IHJlZGlyZWN0IHRoZSB1c2VyIGluIHRoZWlyIGJyb3dzZXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFJlZGlyZWN0YCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eSBvblxuICAgICAqIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZVJlZGlyZWN0UmVzcG9uc2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiByZWRpcmVjdCB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzUmVkaXJlY3QodXJsKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCByZWRpcmVjdCBoYW5kbGVyLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG9uJ3QgcnVuIHRoZSByZWRpcmVjdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVSZWRpcmVjdFJlc3BvbnNlLmFwcGx5KHRoaXMsIFt1cmxdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgcmVkaXJlY3RcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4UmVkaXJlY3QnLCB1cmwsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgQUpBWCByZXF1ZXN0IGlzIGZpbmlzaGVkIGlmIHdlJ3JlIHN0aWxsIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgbG9hZGluZyBpbmRpY2F0b3IgZm9yIHJlZGlyZWN0cyB0aGF0IGp1c3QgY2hhbmdlIHRoZSBoYXNoIHZhbHVlIG9mXG4gICAgICAgIC8vIHRoZSBVUkwgaW5zdGVhZCBvZiBsZWF2aW5nIHRoZSBwYWdlIHdpbGwgcHJvcGVybHkgc3RvcC5cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2N0b2JlcmNtcy9vY3RvYmVyL2lzc3Vlcy8yNzgwXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50TmFtZSA9ICdhamF4UmVkaXJlY3RlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFuIGVycm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSBhbGVydCB0aGUgdXNlciB0aHJvdWdoIGEgc2ltcGxlIGBhbGVydCgpYCBjYWxsLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhFcnJvck1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlRXJyb3JNZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZXJyb3IgbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc0Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCBoYW5kbGVyIGZvciBlcnJvciBtZXNzYWdlcy4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvIG5vdCBwcm9jZXNzIHRoZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICAvLyBhbnkgZnVydGhlci5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRXJyb3JNZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZS5hcHBseSh0aGlzLCBbbWVzc2FnZV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSBlcnJvciBtZXNzYWdlIGJlaW5nIHNob3duXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEVycm9yTWVzc2FnZScsIG1lc3NhZ2UsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCwgc2hvdyBhIGJyb3dzZXIgZXJyb3IgbWVzc2FnZVxuICAgICAgICB3aW5kb3cuYWxlcnQobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGZsYXNoIG1lc3NhZ2VzIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIG9jY3VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhGbGFzaE1lc3NhZ2VzYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUZsYXNoTWVzc2FnZXNgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiBmbGFzaCBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzRmxhc2hNZXNzYWdlcyhtZXNzYWdlcykge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgZmxhc2ggaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHNob3cgdGhlIGZsYXNoIG1lc3NhZ2VcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVGbGFzaE1lc3NhZ2VzLmFwcGx5KHRoaXMsIFttZXNzYWdlc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4Rmxhc2hNZXNzYWdlcycsIG1lc3NhZ2VzLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4VmFsaWRhdGlvbkVycm9yc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogdmFsaWRhdGlvbiBlcnJvciBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGZpZWxkcykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZVZhbGlkYXRpb25FcnJvcnMuYXBwbHkodGhpcywgW3RoaXMuZm9ybSwgZmllbGRzXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgYmVpbmcgaGFuZGxlZFxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhWYWxpZGF0aW9uRXJyb3JzJywgdGhpcy5mb3JtLCBmaWVsZHMsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFzc2V0cyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyBhc3NldCBwcm9jZXNzaW5nIHdpbGwgb2NjdXIgYW5kIHRoaXMgd2lsbCByZXR1cm4gYSByZXNvbHZlZCBQcm9taXNlLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhMb2FkQXNzZXRzYCBldmVudC4gVGhpcyBldmVudCBpcyBjb25zaWRlcmVkIGJsb2NraW5nLCBhbmRcbiAgICAgKiBhbGxvd3MgYXNzZXRzIHRvIGJlIGxvYWRlZCBvciBwcm9jZXNzZWQgYmVmb3JlIGNvbnRpbnVpbmcgd2l0aCBhbnkgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHByb2Nlc3NBc3NldHMoYXNzZXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhMb2FkQXNzZXRzJywgYXNzZXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maXJtcyB0aGUgcmVxdWVzdCB3aXRoIHRoZSB1c2VyIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBhc3luY2hyb25vdXMgbWV0aG9kLiBCeSBkZWZhdWx0LCBpdCB3aWxsIHVzZSB0aGUgYnJvd3NlcidzIGBjb25maXJtKClgIG1ldGhvZCB0byBxdWVyeSB0aGUgdXNlciB0b1xuICAgICAqIGNvbmZpcm0gdGhlIGFjdGlvbi4gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBQcm9taXNlIHdpdGggYSBib29sZWFuIHZhbHVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSB1c2VyIGNvbmZpcm1lZFxuICAgICAqIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Q29uZmlybU1lc3NhZ2VgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlQ29uZmlybU1lc3NhZ2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLFxuICAgICAqIHRoZSBjb25maXJtYXRpb24gaXMgYXNzdW1lZCB0byBoYXZlIGJlZW4gZGVuaWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgZG9Db25maXJtKCkge1xuICAgICAgICAvLyBBbGxvdyBmb3IgYSBjdXN0b20gaGFuZGxlciBmb3IgdGhlIGNvbmZpcm1hdGlvbiwgcGVyIHJlcXVlc3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUNvbmZpcm1NZXNzYWdlLmFwcGx5KHRoaXMsIFt0aGlzLmNvbmZpcm1dKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbm8gcGx1Z2lucyBoYXZlIGN1c3RvbWlzZWQgdGhlIGNvbmZpcm1hdGlvbiwgdXNlIGEgc2ltcGxlIGJyb3dzZXIgY29uZmlybWF0aW9uLlxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQubGlzdGVuc1RvRXZlbnQoJ2FqYXhDb25maXJtTWVzc2FnZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gY3VzdG9tIHBsdWdpbiBjb25maXJtYXRpb25zXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnLCB0aGlzLmNvbmZpcm0sIHRoaXMpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmdWxmaWxsZWQgPSBhd2FpdCBwcm9taXNlcztcbiAgICAgICAgICAgIGlmIChmdWxmaWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIG9mZiBjb21wbGV0aW9uIGV2ZW50cyBmb3IgdGhlIFJlcXVlc3QuXG4gICAgICovXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGxldGUgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbXBsZXRlKHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheERvbmUnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhBbHdheXMnKTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZUVycm9yID0gdGhpcy5yZXNwb25zZUVycm9yO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBvZmYgdGhlIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mb3JtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBoZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLCAvLyBLZWVwcyBjb21wYXRpYmlsaXR5IHdpdGggalF1ZXJ5IEFKQVhcbiAgICAgICAgICAgICdYLVdJTlRFUi1SRVFVRVNULUhBTkRMRVInOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1QQVJUSUFMUyc6IHRoaXMuZXh0cmFjdFBhcnRpYWxzKHRoaXMub3B0aW9ucy51cGRhdGUgfHwgW10pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVdJTlRFUi1SRVFVRVNULUZMQVNIJ10gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueHNyZlRva2VuKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydYLVhTUkYtVE9LRU4nXSA9IHRoaXMueHNyZlRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubG9hZGluZyB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cbiAgICBnZXQgcmVkaXJlY3QoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLnJlZGlyZWN0ICYmIHRoaXMub3B0aW9ucy5yZWRpcmVjdC5sZW5ndGgpID8gdGhpcy5vcHRpb25zLnJlZGlyZWN0IDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgZmxhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmxhc2ggfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVzKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmRlYnVnKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBmaWxlIHVwbG9hZHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB4c3JmVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5jb29raWUoKS5nZXQoJ1hTUkYtVE9LRU4nKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSA/IHRoaXMub3B0aW9ucy5kYXRhIDoge307XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIGdldCBjb25maXJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbmZpcm0gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgcGFydGlhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBleHRyYWN0UGFydGlhbHModXBkYXRlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh1cGRhdGUpLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFuIGVycm9yIHdpdGggdXNlZnVsIGRlYnVnIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IHdoZW4gdGhlIEFKQVggcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIG9yIHByb2Nlc3NlZCBjb3JyZWN0bHkgZHVlIHRvIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhjZXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHRyYWNlXG4gICAgICogQHJldHVybnMge0Vycm9yfVxuICAgICAqL1xuICAgIHJlbmRlckVycm9yKG1lc3NhZ2UsIGV4Y2VwdGlvbiwgZmlsZSwgbGluZSwgdHJhY2UpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIGVycm9yLmV4Y2VwdGlvbiA9IGV4Y2VwdGlvbiB8fCBudWxsO1xuICAgICAgICBlcnJvci5maWxlID0gZmlsZSB8fCBudWxsO1xuICAgICAgICBlcnJvci5saW5lID0gbGluZSB8fCBudWxsO1xuICAgICAgICBlcnJvci50cmFjZSA9IHRyYWNlIHx8IFtdO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGEgZ2l2ZW4gc3RyaW5nIHRvIHNlZSBpZiBpdCBpcyBhIHZhbGlkIEFKQVggaGFuZGxlciBuYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIC9eKD86XFx3Kzp7Mn0pP29uW0EtWjAtOV0vLnRlc3QobmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBc3NldCBMb2FkZXIuXG4gKlxuICogUHJvdmlkZXMgc2ltcGxlIGFzc2V0IGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLCBtYWtpbmcgaXQgZWFzeSB0byBwcmUtbG9hZCBpbWFnZXMgb3JcbiAqIGluY2x1ZGUgSmF2YVNjcmlwdCBvciBDU1MgYXNzZXRzIG9uIHRoZSBmbHkuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBsb2FkZXIgd2lsbCBsaXN0ZW4gdG8gYW55IGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWQgdG8gbG9hZCBpbiBhbiBBSkFYXG4gKiByZXNwb25zZSwgc3VjaCBhcyByZXNwb25zZXMgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gbG9hZCBhc3NldHMgbWFudWFsbHkgYnkgY2FsbGluZyB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYGpzXG4gKiBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAqIFNub3dib2FyZC5hc3NldExvYWRlcigpLnByb2Nlc3NBc3NldHMoYXNzZXRzKTtcbiAqIGBgYFxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheExvYWRBc3NldHM6ICdsb2FkJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFuZCBsb2FkIGFzc2V0cy5cbiAgICAgKlxuICAgICAqIFRoZSBgYXNzZXRzYCBwcm9wZXJ0eSBvZiB0aGlzIG1ldGhvZCByZXF1aXJlcyBhbiBvYmplY3Qgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZyBrZXlzIGFuZCBhblxuICAgICAqIGFycmF5IG9mIHBhdGhzOlxuICAgICAqXG4gICAgICogLSBganNgOiBBbiBhcnJheSBvZiBKYXZhU2NyaXB0IFVSTHMgdG8gbG9hZFxuICAgICAqIC0gYGNzc2A6IEFuIGFycmF5IG9mIENTUyBzdHlsZXNoZWV0IFVSTHMgdG8gbG9hZFxuICAgICAqIC0gYGltZ2A6IEFuIGFycmF5IG9mIGltYWdlIFVSTHMgdG8gcHJlLWxvYWRcbiAgICAgKlxuICAgICAqIEJvdGggYGpzYCBhbmQgYGNzc2AgZmlsZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluamVjdGVkLCBob3dldmVyIGBpbWdgIGZpbGVzIHdpbGwgbm90LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgcmVxdWlyZWQgYXNzZXRzIGFyZSBsb2FkZWQuIElmIGFuXG4gICAgICogYXNzZXQgZmFpbHMgdG8gbG9hZCwgdGhpcyBQcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBFU0xpbnQgKlJFQUxMWSogZG9lc24ndCBsaWtlIHRoaXMgY29kZSwgYnV0IGlnbm9yZSBpdC4gSXQncyB0aGUgb25seSB3YXkgaXQgd29ya3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzZXRzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgbG9hZChhc3NldHMpIHtcbiAgICAgICAgaWYgKGFzc2V0cy5qcyAmJiBhc3NldHMuanMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzY3JpcHQgb2YgYXNzZXRzLmpzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0KHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLmNzcyAmJiBhc3NldHMuY3NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2YgYXNzZXRzLmNzcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuaW1nICYmIGFzc2V0cy5pbWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBhc3NldHMuaW1nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYW5kIGxvYWRzIGEgSmF2YVNjcmlwdCBVUkwgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogVGhlIHNjcmlwdCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9ib2R5PmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNjcmlwdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRTY3JpcHQoc2NyaXB0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNjcmlwdCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NjcmlwdH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2NyaXB0XG4gICAgICAgICAgICBjb25zdCBkb21TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHQpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzY3JpcHQgZmlsZTogXCIke3NjcmlwdH1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tU2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBDU1Mgc3R5bGVzaGVldCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc3R5bGVzaGVldCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9oZWFkPmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNjcmlwdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRTdHlsZShzdHlsZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzdHlsZXNoZWV0IGlzIG5vdCBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdW2hyZWY9XCIke3N0eWxlfVwiXWApO1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzdHlsZXNoZWV0XG4gICAgICAgICAgICBjb25zdCBkb21Dc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgZG9tQ3NzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHN0eWxlKTtcbiAgICAgICAgICAgIGRvbUNzcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnc3R5bGUnLCBzdHlsZSwgZG9tQ3NzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbUNzcy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnc3R5bGUnLCBzdHlsZSwgZG9tQ3NzKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzdHlsZXNoZWV0IGZpbGU6IFwiJHtzdHlsZX1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoZG9tQ3NzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlLWxvYWRzIGFuIGltYWdlLlxuICAgICAqXG4gICAgICogVGhlIGltYWdlIHdpbGwgbm90IGJlIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRJbWFnZShpbWFnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ2ltYWdlJywgaW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ2ltYWdlJywgaW1hZ2UsIGltZyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgaW1hZ2UgZmlsZTogXCIke2ltYWdlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQWxsb3dzIGF0dGFjaGluZyBhIGxvYWRpbmcgY2xhc3Mgb24gZWxlbWVudHMgdGhhdCBhbiBBSkFYIHJlcXVlc3QgaXMgdGFyZ2V0aW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRhY2hMb2FkaW5nIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFqYXhTdGFydDogJ2FqYXhTdGFydCcsXG4gICAgICAgICAgICBhamF4RG9uZTogJ2FqYXhEb25lJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhamF4U3RhcnQocHJvbWlzZSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFqYXhEb25lKGRhdGEsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkRWxlbWVudHMgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0YWNoLWxvYWRpbmddJyk7XG4gICAgICAgICAgICBpZiAobG9hZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2FkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxdWVzdC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRMb2FkaW5nQ2xhc3MocmVxdWVzdC5lbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gKGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09ICcnKVxuICAgICAgICAgICAgPyBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZ1xuICAgICAgICAgICAgOiAnd24tbG9hZGluZyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIERhdGEgY29uZmlndXJhdGlvbiBwcm92aWRlci5cbiAqXG4gKiBQcm92aWRlcyBhIG1lY2hhbmlzbSBmb3IgcGFzc2luZyBjb25maWd1cmF0aW9uIGRhdGEgdGhyb3VnaCBhbiBlbGVtZW50J3MgZGF0YSBhdHRyaWJ1dGVzLiBUaGlzXG4gKiBpcyBnZW5lcmFsbHkgdXNlZCBmb3Igd2lkZ2V0cyBvciBVSSBpbnRlcmFjdGlvbnMgdG8gY29uZmlndXJlIHRoZW0uXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDb25maWcgZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxvY2FsQ29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGluc3RhbmNlLCBlbGVtZW50LCBsb2NhbENvbmZpZykge1xuICAgICAgICBpZiAoaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgU25vd2JvYXJkIHBsdWdpbiB0byBlbmFibGUgZGF0YSBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBjb25maWd1cmF0aW9uIGNhbiBvbmx5IGJlIGV4dHJhY3RlZCBmcm9tIEhUTUwgZWxlbWVudHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5sb2NhbENvbmZpZyA9IGxvY2FsQ29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0ge307XG4gICAgICAgIHRoaXMuYWNjZXB0ZWRDb25maWdzID0ge307XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvbmZpZyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBgY29uZmlnYCBwYXJhbWV0ZXIgaXMgdW5zcGVjaWZpZWQsIHJldHVybnMgdGhlIGVudGlyZSBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1xuICAgICAqL1xuICAgIGdldChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogVGhpcyBhbGxvd3MgeW91IHRvIG92ZXJyaWRlLCBhdCBydW50aW1lLCBhbnkgY29uZmlndXJhdGlvbiB2YWx1ZSBhcyBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwZXJzaXN0XG4gICAgICovXG4gICAgc2V0KGNvbmZpZywgdmFsdWUsIHBlcnNpc3QpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBjb25maWd1cmF0aW9uIGtleSB0byBzZXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChwZXJzaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGF0YXNldFtjb25maWddID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsQ29uZmlnW2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGFsbG93IHlvdSB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIGRhdGEgY29uZmlnIG9uIGEgRE9NIGxldmVsIGFuZCByZS1hcHBseSB0aGVtXG4gICAgICogdG8gdGhlIGNvbmZpZyBvbiB0aGUgSmF2YVNjcmlwdCBzaWRlLlxuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuYWNjZXB0ZWRDb25maWdzID0gdGhpcy5nZXRBY2NlcHRlZENvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZyA9IHRoaXMucHJvY2Vzc0NvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGF2YWlsYWJsZSBjb25maWd1cmF0aW9ucyB0aGF0IGNhbiBiZSBzZXQgdGhyb3VnaCB0aGUgZGF0YSBjb25maWcuXG4gICAgICpcbiAgICAgKiBJZiBhbiBpbnN0YW5jZSBoYXMgYW4gYGFjY2VwdEFsbERhdGFDb25maWdzYCBwcm9wZXJ0eSwgc2V0IHRvIGB0cnVlYCwgdGhlbiBhbGwgZGF0YVxuICAgICAqIGF0dHJpYnV0ZXMgd2lsbCBiZSBhdmFpbGFibGUgYXMgY29uZmlndXJhdGlvbiB2YWx1ZXMuIFRoaXMgY2FuIGJlIGEgc2VjdXJpdHkgY29uY2Vybiwgc29cbiAgICAgKiB0cmVhZCBjYXJlZnVsbHkuXG4gICAgICpcbiAgICAgKiBPdGhlcndpc2UsIGF2YWlsYWJsZSBjb25maWd1cmF0aW9ucyB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIGtleXMgYXZhaWxhYmxlIGluIGFuIG9iamVjdFxuICAgICAqIHJldHVybmVkIGJ5IGEgYGRlZmF1bHRzKClgIG1ldGhvZCBpbiB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW118Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXRBY2NlcHRlZENvbmZpZ3MoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYWNjZXB0QWxsRGF0YUNvbmZpZ3MgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGJlIGFuIGVtcHR5IG9iamVjdCBpZiB0aGUgaW5zdGFuY2UgZWl0aGVyIGRvZXMgbm90IGhhdmUgYSBgZGVmYXVsdHMoKWAgbWV0aG9kLCBvclxuICAgICAqIHRoZSBtZXRob2QgaXRzZWxmIGRvZXMgbm90IHJldHVybiBhbiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSBjb25maWd1cmF0aW9uLlxuICAgICAqXG4gICAgICogTG9hZHMgdXAgdGhlIGRlZmF1bHRzLCB0aGVuIHBvcHVsYXRlcyBpdCB3aXRoIGFueSBjb25maWd1cmF0aW9uIHZhbHVlcyBwcm92aWRlZCBieSB0aGUgZGF0YVxuICAgICAqIGF0dHJpYnV0ZXMsIGJhc2VkIG9uIHRoZSBydWxlcyBvZiB0aGUgYWNjZXB0ZWQgY29uZmlndXJhdGlvbnMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIHRoZW4gY2FjaGVkIGFuZCBhdmFpbGFibGUgdGhyb3VnaCBgY29uZmlnLmdldCgpYCBjYWxscy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgcHJvY2Vzc0NvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREZWZhdWx0cygpO1xuXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSB0cnVlIHx8IHRoaXMuYWNjZXB0ZWRDb25maWdzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29lcmNlVmFsdWUodGhpcy5lbGVtZW50LmRhdGFzZXRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmxvY2FsQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5sb2NhbENvbmZpZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvZXJjZXMgY29uZmlndXJhdGlvbiB2YWx1ZXMgZm9yIEphdmFTY3JpcHQuXG4gICAgICpcbiAgICAgKiBUYWtlcyB0aGUgc3RyaW5nIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGFuZCBjb2VyY2VzIGl0IGludG8gYSBtb3JlIHN1aXRhYmxlXG4gICAgICogdHlwZSBmb3IgSmF2YVNjcmlwdCBwcm9jZXNzaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGNvZXJjZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKHZhbHVlKTtcblxuICAgICAgICAvLyBOdWxsIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVuZGVmaW5lZCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmFzZTY0IHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZS5zdGFydHNXaXRoKCdiYXNlNjQ6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IHN0cmluZ1ZhbHVlLnJlcGxhY2UoL15iYXNlNjQ6LywgJycpO1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF0b2IoYmFzZTY0c3RyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvZXJjZVZhbHVlKGRlY29kZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vbGVhbiB2YWx1ZVxuICAgICAgICBpZiAoWyd0cnVlJywgJ3llcyddLmluY2x1ZGVzKHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoWydmYWxzZScsICdubyddLmluY2x1ZGVzKHN0cmluZ1ZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOdW1lcmljIHZhbHVlXG4gICAgICAgIGlmICgvXlstK10/WzAtOV0rKFxcLlswLTldKyk/JC8udGVzdChzdHJpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc3RyaW5nVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlNPTiB2YWx1ZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmpzb25QYXJzZXIoKS5wYXJzZShzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoc3RyaW5nVmFsdWUgPT09ICcnKSA/IHRydWUgOiBzdHJpbmdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBQcm92aWRlcyBmbGFzaCBtZXNzYWdlcyBmb3IgdGhlIENNUy5cbiAqXG4gKiBGbGFzaCBtZXNzYWdlcyB3aWxsIHBvcCB1cCBhdCB0aGUgdG9wIGNlbnRlciBvZiB0aGUgcGFnZSBhbmQgd2lsbCByZW1haW4gZm9yIDcgc2Vjb25kcyBieSBkZWZhdWx0LiBIb3ZlcmluZyBvdmVyXG4gKiB0aGUgbWVzc2FnZSB3aWxsIHJlc2V0IGFuZCBwYXVzZSB0aGUgdGltZXIuIENsaWNraW5nIG9uIHRoZSBmbGFzaCBtZXNzYWdlIHdpbGwgZGlzbWlzcyBpdC5cbiAqXG4gKiBBcmd1bWVudHM6XG4gKiAgLSBcIm1lc3NhZ2VcIjogVGhlIGNvbnRlbnQgb2YgdGhlIGZsYXNoIG1lc3NhZ2UuIEhUTUwgaXMgYWNjZXB0ZWQuXG4gKiAgLSBcInR5cGVcIjogVGhlIHR5cGUgb2YgZmxhc2ggbWVzc2FnZS4gVGhpcyBpcyBhcHBlbmRlZCBhcyBhIGNsYXNzIHRvIHRoZSBmbGFzaCBtZXNzYWdlIGl0c2VsZi5cbiAqICAtIFwiZHVyYXRpb25cIjogSG93IGxvbmcgdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBzdGF5IHZpc2libGUgZm9yLCBpbiBzZWNvbmRzLiBEZWZhdWx0OiA3IHNlY29uZHMuXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC5mbGFzaCgnVGhpcyBpcyBhIGZsYXNoIG1lc3NhZ2UnLCAnaW5mbycsIDgpO1xuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdChtZXNzYWdlLCB0eXBlLCBkdXJhdGlvbikge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE51bWJlcihkdXJhdGlvbiB8fCA3KTtcblxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmxhc2ggZHVyYXRpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlciwgb3IgemVybycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuY2llcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3RyYW5zaXRpb24nXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyB3aWxsIGVuc3VyZSB0aGUgZmxhc2ggbWVzc2FnZSBpcyByZW1vdmVkIGFuZCB0aW1lb3V0IGlzIGNsZWFyZWQgaWYgdGhlIG1vZHVsZSBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZsYXNoKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2ZsYXNoLmNyZWF0ZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZmxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5mbGFzaC5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZmxhc2guY2xhc3NMaXN0LmFkZCgnZmxhc2gtbWVzc2FnZScsIHRoaXMudHlwZSk7XG4gICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlKCkpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHRoaXMuc3RvcFRpbWVyKCkpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gdGhpcy5zdGFydFRpbWVyKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIuY2xhc3NMaXN0LmFkZCgnZmxhc2gtdGltZXInKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2guYXBwZW5kQ2hpbGQodGhpcy5mbGFzaFRpbWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2guY2xhc3NMaXN0LmFkZCgnbm8tdGltZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBib2R5XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mbGFzaCk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoLCAnc2hvdycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2ZsYXNoLnJlbW92ZScsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoLCAnaGlkZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBmbGFzaCBtZXNzYWdlcyBhdmFpbGFibGUgb24gdGhlIHBhZ2UuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHkgPiBkaXYuZmxhc2gtbWVzc2FnZScpLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lclRyYW5zID0gdGhpcy5zbm93Ym9hcmQudHJhbnNpdGlvbih0aGlzLmZsYXNoVGltZXIsICd0aW1lb3V0JywgbnVsbCwgYCR7dGhpcy5kdXJhdGlvbn0uMHNgLCB0cnVlKTtcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHRpbWVyIGZvciB0aGlzIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lclRyYW5zKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyVHJhbnMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc3RyaXBlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgdGhhdCBpbmRpY2F0ZXMgbG9hZGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaXBlTG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgICAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpO1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0cmlwZSgpIHtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5zdHJpcGVMb2FkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGluZy1pbmRpY2F0b3InLCAnbG9hZGVkJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZScpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZC5jbGFzc0xpc3QuYWRkKCdzdHJpcGUtbG9hZGVkJyk7XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuYXBwZW5kQ2hpbGQodGhpcy5zdHJpcGUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZUxvYWRlZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmluZGljYXRvcik7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG5cbiAgICAgICAgY29uc3QgbmV3U3RyaXBlID0gdGhpcy5zdHJpcGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZChuZXdTdHJpcGUpO1xuICAgICAgICB0aGlzLnN0cmlwZS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5zdHJpcGUgPSBuZXdTdHJpcGU7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3duLWxvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBoaWRlKGZvcmNlKSB7XG4gICAgICAgIHRoaXMuY291bnRlciAtPSAxO1xuXG4gICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3duLWxvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRW1iZWRzIHRoZSBcImV4dHJhc1wiIHN0eWxlc2hlZXQgaW50byB0aGUgcGFnZSwgaWYgaXQgaXMgbm90IGxvYWRlZCB0aHJvdWdoIHRoZSB0aGVtZS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVzaGVldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgbGV0IHN0eWxlc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIERldGVybWluZSBpZiBzdHlsZXNoZWV0IGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpLmZvckVhY2goKGNzcykgPT4ge1xuICAgICAgICAgICAgaWYgKGNzcy5ocmVmLmVuZHNXaXRoKCcvbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2Nzcy9zbm93Ym9hcmQuZXh0cmFzLmNzcycpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdHlsZXNMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgICAgICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5zbm93Ym9hcmQudXJsKCkudG8oJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGVsZW1lbnRzLlxuICpcbiAqIFRyYW5zaXRpb24gYWxsb3dzIENTUyB0cmFuc2l0aW9ucyB0byBiZSBjb250cm9sbGVkIGFuZCBjYWxsYmFja3MgdG8gYmUgcnVuIG9uY2UgY29tcGxldGVkLiBJdCB3b3JrcyBzaW1pbGFyIHRvIFZ1ZVxuICogdHJhbnNpdGlvbnMgd2l0aCAzIHN0YWdlcyBvZiB0cmFuc2l0aW9uLCBhbmQgY2xhc3NlcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSB0cmFuc2l0aW9uIG5hbWUgc3VmZml4ZWQgd2l0aFxuICogdGhlIHN0YWdlIG9mIHRyYW5zaXRpb246XG4gKlxuICogIC0gYGluYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCByZW1vdmVkIGFmdGVyd2FyZHMuIFRoaXMgc2hvdWxkIGJlXG4gKiAgICAgIHVzZWQgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICogIC0gYGFjdGl2ZWA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgYmUgdXNlZCB0byBkZWZpbmUgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24gaXRzZWxmLlxuICogIC0gYG91dGA6IEEgY2xhc3MgYXNzaWduZWQgdG8gdGhlIGVsZW1lbnQgYWZ0ZXIgdGhlIGZpcnN0IGZyYW1lIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCBrZXB0IHRvIHRoZSBlbmQgb2YgdGhlXG4gKiAgICAgIHRyYW5zaXRpb24uIFRoaXMgc2hvdWxkIGRlZmluZSB0aGUgZW5kIHN0YXRlIG9mIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQudHJhbnNpdGlvbihkb2N1bWVudC5lbGVtZW50LCAndHJhbnNpdGlvbicsICgpID0+IHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmUgZWxlbWVudCBhZnRlciA3IHNlY29uZHMnKTtcbiAqICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gKiAgICAgIH0sICc3cycpO1xuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHRyYW5zaXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvbiBUaGUgbmFtZSBvZiB0aGUgdHJhbnNpdGlvbiwgdGhpcyBwcmVmaXhlcyB0aGUgc3RhZ2VzIG9mIHRyYW5zaXRpb24uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIEFuIG9wdGlvbmFsIG92ZXJyaWRlIG9uIHRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uLiBNdXN0IGJlIHNwZWNpZmllZCBhcyAncycgKHNlY3MpIG9yICdtcycgKG1zZWNzKS5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRyYWlsVG8gSWYgdHJ1ZSwgdGhlIFwib3V0XCIgY2xhc3Mgd2lsbCByZW1haW4gYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgdHJhbnNpdGlvbiwgY2FsbGJhY2ssIGR1cmF0aW9uLCB0cmFpbFRvKSB7XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgSFRNTEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCBmb3IgdHJhbnNpdGlvbmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2l0aW9uIG5hbWUgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMucGFyc2VEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhaWxUbyA9ICh0cmFpbFRvID09PSB0cnVlKTtcblxuICAgICAgICB0aGlzLmRvVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgZXZlbnQgY2xhc3NlcyB0byB0aGUgZ2l2ZW4gdHJhbnNpdGlvbiBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBldmVudENsYXNzZXMoLi4uYXJncykge1xuICAgICAgICBjb25zdCBldmVudENsYXNzZXMgPSB7XG4gICAgICAgICAgICBpbjogYCR7dGhpcy50cmFuc2l0aW9ufS1pbmAsXG4gICAgICAgICAgICBhY3RpdmU6IGAke3RoaXMudHJhbnNpdGlvbn0tYWN0aXZlYCxcbiAgICAgICAgICAgIG91dDogYCR7dGhpcy50cmFuc2l0aW9ufS1vdXRgLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRDbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHVybkNsYXNzZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZXZlbnRDbGFzc2VzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5DbGFzc2VzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuQ2xhc3NlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRvVHJhbnNpdGlvbigpIHtcbiAgICAgICAgLy8gQWRkIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgLy8gU3RhcnQgdHJhbnNpdGlvbiAtIHNob3cgXCJpblwiIGFuZCBcImFjdGl2ZVwiIGNsYXNzZXNcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2luJywgJ2FjdGl2ZScpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhIHRyYW5zaXRpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVsndHJhbnNpdGlvbi1kdXJhdGlvbiddICE9PSAnMHMnKSB7XG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byBlbmRcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kKCksIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5ldmVudENsYXNzZXMoJ2luJylbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmV2ZW50Q2xhc3Nlcygnb3V0JylbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzLlxuICAgICAqXG4gICAgICogV2hlbiBhIHRyYW5zaXRpb24gZW5kcywgdGhlIGluc3RhbmNlIG9mIHRoZSB0cmFuc2l0aW9uIGlzIGF1dG9tYXRpY2FsbHkgZGVzdHJ1Y3RlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoJ2FjdGl2ZScsICghdGhpcy50cmFpbFRvKSA/ICdvdXQnIDogJycpLmZvckVhY2goKGV2ZW50Q2xhc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGV2ZW50Q2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGR1cmF0aW9uIG92ZXJyaWRlXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIGEgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB0aGlzLm9uVHJhbnNpdGlvbkVuZCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNsYXNzZXMsIHJlbW92aW5nIGFueSB0cmFuc2l0aW9uIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZXNldENsYXNzZXMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGFzc2VzKCkuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGdpdmVuIGR1cmF0aW9uIGFuZCBjb252ZXJ0cyBpdCB0byBhIFwibXNcIiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkdXJhdGlvblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcGFyc2VEdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSAvXihbMC05XSsoXFwuWzAtOV0rKT8pKG0/cyk/JC8uZXhlYyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcihwYXJzZWRbMV0pO1xuICAgICAgICBjb25zdCB1bml0ID0gKHBhcnNlZFszXSA9PT0gJ3MnKVxuICAgICAgICAgICAgPyAnc2VjJ1xuICAgICAgICAgICAgOiAnbXNlYyc7XG5cbiAgICAgICAgcmV0dXJuICh1bml0ID09PSAnc2VjJylcbiAgICAgICAgICAgID8gYCR7YW1vdW50ICogMTAwMH1tc2BcbiAgICAgICAgICAgIDogYCR7TWF0aC5mbG9vcihhbW91bnQpfW1zYDtcbiAgICB9XG59XG4iLCIvKipcbiAqIEludGVybmFsIHByb3h5IGZvciBTbm93Ym9hcmQuXG4gKlxuICogVGhpcyBoYW5kbGVyIHdyYXBzIHRoZSBTbm93Ym9hcmQgaW5zdGFuY2UgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHBsdWdpbiBpbnN0YW5jZXMuXG4gKiBJdCBwcmV2ZW50cyBhY2Nlc3MgdG8gdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICogIC0gYGF0dGFjaEFic3RyYWN0c2A6IE5vIG5lZWQgdG8gYXR0YWNoIGFic3RyYWN0cyBhZ2Fpbi5cbiAqICAtIGBsb2FkVXRpbHRpZXNgOiBObyBuZWVkIHRvIGxvYWQgdXRpbGl0aWVzIGFnYWluLlxuICogIC0gYGluaXRpYWxpc2VgOiBTbm93Ym9hcmQgaXMgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqICAtIGBpbml0aWFsaXNlU2luZ2xldG9uc2A6IFNpbmdsZXRvbnMgYXJlIGFscmVhZHkgaW5pdGlhbGlzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbm5vdCB1c2UgdGhlIFwiJHtwcm9wfVwiIFNub3dib2FyZCBtZXRob2Qgd2l0aGluIGEgcGx1Z2luLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc1BsdWdpbihwcm9wTG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5wYXJhbXMpID0+IFJlZmxlY3QuZ2V0KHRhcmdldCwgJ3BsdWdpbnMnKVtwcm9wTG93ZXJdLmdldEluc3RhbmNlKC4uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgfSxcblxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcHJvcExvd2VyID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICBpZiAoWydhdHRhY2hBYnN0cmFjdHMnLCAnbG9hZFV0aWxpdGllcycsICdpbml0aWFsaXNlJywgJ2luaXRpYWxpc2VTaW5nbGV0b25zJ10uaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBJbm5lclByb3h5SGFuZGxlciBmcm9tICcuL0lubmVyUHJveHlIYW5kbGVyJztcblxuLyoqXG4gKiBQbHVnaW4gbG9hZGVyIGNsYXNzLlxuICpcbiAqIFRoaXMgaXMgYSBwcm92aWRlciAoZmFjdG9yeSkgY2xhc3MgZm9yIGEgc2luZ2xlIHBsdWdpbiBhbmQgcHJvdmlkZXMgdGhlIGxpbmsgYmV0d2VlbiBTbm93Ym9hcmQgZnJhbWV3b3JrIGZ1bmN0aW9uYWxpdHlcbiAqIGFuZCB0aGUgdW5kZXJseWluZyBwbHVnaW4gaW5zdGFuY2VzLiBJdCBhbHNvIHByb3ZpZGVzIHNvbWUgYmFzaWMgbW9ja2luZyBvZiBwbHVnaW4gbWV0aG9kcyBmb3IgdGVzdGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEJpbmRzIHRoZSBXaW50ZXIgZnJhbWV3b3JrIHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqIEBwYXJhbSB7UGx1Z2luQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzbm93Ym9hcmQsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICAgICAgc25vd2JvYXJkLFxuICAgICAgICAgICAgSW5uZXJQcm94eUhhbmRsZXIsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICAgICAgICAvLyBGcmVlemUgaW5zdGFuY2UgdGhhdCBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoaXMgbG9hZGVyXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5pbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24gPSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgZnVydGhlciBleHRlbnNpb24gb2YgdGhlIHNpbmdsZXRvbiBzdGF0dXMgb2JqZWN0XG4gICAgICAgIE9iamVjdC5zZWFsKHRoaXMuc2luZ2xldG9uKTtcblxuICAgICAgICB0aGlzLm1vY2tzID0ge307XG4gICAgICAgIHRoaXMub3JpZ2luYWxGdW5jdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyBGcmVlemUgbG9hZGVyIGl0c2VsZlxuICAgICAgICBPYmplY3QuZnJlZXplKFBsdWdpbkxvYWRlci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGhhcyBhIHNwZWNpZmljIG1ldGhvZCBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNNZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIHByb3RvdHlwZSBtZXRob2QgZm9yIGEgcGx1Z2luLiBUaGlzIHNob3VsZCBnZW5lcmFsbHkgYmUgdXNlZCBmb3IgXCJzdGF0aWNcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHsuLi59IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIGNhbGxNZXRob2QoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJncyA9IHBhcmFtZXRlcnM7XG4gICAgICAgIGNvbnN0IG1ldGhvZE5hbWUgPSBhcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgcGx1Z2luLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCB0aGUgZnVuY3Rpb24gd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKiAtIElmIHRoaXMgaXMgYSBzaW5nbGV0b24sIHRoZSBzaW5nbGUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2V8RnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2UoLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgY29uc3QgdW5tZXQgPSB0aGlzLmdldERlcGVuZGVuY2llcygpLmZpbHRlcigoaXRlbSkgPT4gIXRoaXMuc25vd2JvYXJkLmdldFBsdWdpbk5hbWVzKCkuaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCIke3RoaXMubmFtZX1cIiBwbHVnaW4gcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBwbHVnaW5zOiAke3VubWV0LmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZHNcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1vY2tzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2ROYW1lLCBjYWxsYmFja10gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kcyB0byBwcm90b3R5cGVcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMub3JpZ2luYWxGdW5jdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMubW9ja3MpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKC4uLnBhcmFtcykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5pbnN0YW5jZSh0aGlzLnNub3dib2FyZCwgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIG5ld0luc3RhbmNlLmRldGFjaCA9ICgpID0+IHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLmluc3RhbmNlcy5pbmRleE9mKG5ld0luc3RhbmNlKSwgMSk7XG4gICAgICAgIG5ld0luc3RhbmNlLmNvbnN0cnVjdCguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChuZXdJbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBJZiB0aGlzIHBsdWdpbiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbiwgYW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5CYXNlW119XG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2VzKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaXMgYSBzaW5nbGV0b24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1NpbmdsZXRvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlIGluc3RhbmNlb2YgU2luZ2xldG9uID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBzaW5nbGV0b24gaGFzIGJlZW4gaW5pdGlhbGlzZWQuXG4gICAgICpcbiAgICAgKiBOb3JtYWwgcGx1Z2lucyB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdGlhbGlzZVNpbmdsZXRvbiguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcbiAgICAgICAgdGhpcy5zaW5nbGV0b24uaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRlcGVuZGVuY2llcyBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbnMgY2Fubm90IGhhdmUgZGVwZW5kZW5jaWVzLlxuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIGRlcGVuZGVuY3kgbWV0aG9kIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZS5kZXBlbmRlbmNpZXMoKS5tYXAoKGl0ZW0pID0+IGl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGFsbCBpdHMgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgICAgICBsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5oYXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVsZmlsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBhIG1ldGhvZCBvZiBhbiBpbnN0YW5jZSB0byBiZSBtb2NrZWQgZm9yIHRlc3RpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZSBvZiBhbiBpbnN0YW5jZS4gRm9yIHNpbmdsZXRvbnMsIHRoZSBtb2NrIHdpbGwgYmUgYXBwbGllZCBmb3IgdGhlIGxpZmVcbiAgICAgKiBvZiB0aGUgcGFnZS5cbiAgICAgKlxuICAgICAqIE1vY2tzIGNhbm5vdCBiZSBhcHBsaWVkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgbW9jayhtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnVuY3Rpb24gXCIke21ldGhvZE5hbWV9XCIgZG9lcyBub3QgZXhpc3QgYW5kIGNhbm5vdCBiZSBtb2NrZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9ja3NbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9uc1ttZXRob2ROYW1lXSA9IHRoaXMuaW5zdGFuY2UucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xldG9uKCkgJiYgdGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgbW9ja2VkIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1ldGVycykgPT4gY2FsbGJhY2sodGhpcywgLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbW9jayBjYWxsYmFjayBmcm9tIGZ1dHVyZSBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqL1xuICAgIHVubW9jayhtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbMF1bbWV0aG9kTmFtZV0gPSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMubW9ja3NbbWV0aG9kTmFtZV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcbmltcG9ydCBQbHVnaW5Mb2FkZXIgZnJvbSAnLi9QbHVnaW5Mb2FkZXInO1xuXG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxpdGllcy9Db29raWUnO1xuaW1wb3J0IEpzb25QYXJzZXIgZnJvbSAnLi4vdXRpbGl0aWVzL0pzb25QYXJzZXInO1xuaW1wb3J0IFNhbml0aXplciBmcm9tICcuLi91dGlsaXRpZXMvU2FuaXRpemVyJztcbmltcG9ydCBVcmwgZnJvbSAnLi4vdXRpbGl0aWVzL1VybCc7XG5cbi8qKlxuICogU25vd2JvYXJkIC0gdGhlIFdpbnRlciBKYXZhU2NyaXB0IGZyYW1ld29yay5cbiAqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGJhc2Ugb2YgYSBtb2Rlcm4gdGFrZSBvbiB0aGUgV2ludGVyIEpTIGZyYW1ld29yaywgYmVpbmcgZnVsbHkgZXh0ZW5zaWJsZSBhbmQgdGFraW5nIGFkdmFudGFnZVxuICogb2YgbW9kZXJuIEphdmFTY3JpcHQgZmVhdHVyZXMgYnkgbGV2ZXJhZ2luZyB0aGUgTGFyYXZlbCBNaXggY29tcGlsYXRpb24gZnJhbWV3b3JrLiBJdCBhbHNvIGlzIGNvZGVkIHVwIHRvIHJlbW92ZSB0aGVcbiAqIGRlcGVuZGVuY3kgb2YgalF1ZXJ5LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQGxpbmsgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2ludHJvZHVjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Ym9hcmQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvU2luZ2xldG9ucyBBdXRvbWF0aWNhbGx5IGxvYWQgc2luZ2xldG9ucyB3aGVuIERPTSBpcyByZWFkeS4gRGVmYXVsdDogYHRydWVgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVidWcgV2hldGhlciBkZWJ1Z2dpbmcgbG9ncyBzaG91bGQgYmUgc2hvd24uIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0b1NpbmdsZXRvbnMsIGRlYnVnKSB7XG4gICAgICAgIHRoaXMuZGVidWdFbmFibGVkID0gKHR5cGVvZiBkZWJ1ZyA9PT0gJ2Jvb2xlYW4nICYmIGRlYnVnID09PSB0cnVlKTtcbiAgICAgICAgdGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMgPSAodHlwZW9mIGF1dG9TaW5nbGV0b25zID09PSAnYm9vbGVhbicgJiYgYXV0b1NpbmdsZXRvbnMgPT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkaW5lc3MgPSB7XG4gICAgICAgICAgICBkb206IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvLyBTZWFsIHJlYWRpbmVzcyBmcm9tIGJlaW5nIGFkZGVkIHRvIGZ1cnRoZXIsIGJ1dCBhbGxvdyB0aGUgcHJvcGVydGllcyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5yZWFkaW5lc3MpO1xuICAgICAgICB0aGlzLmF0dGFjaEFic3RyYWN0cygpO1xuXG4gICAgICAgIC8vIEZyZWV6ZSB0aGUgU25vd2JvYXJkIGNsYXNzIHRvIHByZXZlbnQgZnVydGhlciBtb2RpZmljYXRpb25zLlxuICAgICAgICBPYmplY3QuZnJlZXplKFNub3dib2FyZC5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZFV0aWxpdGllcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmRlYnVnKCdTbm93Ym9hcmQgZnJhbWV3b3JrIGluaXRpYWxpc2VkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYWJzdHJhY3QgY2xhc3NlcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgSmF2YXNjcmlwdCBmdW5jdGlvbmFsaXR5IHdpdGggbm8gYnVpbGQgcHJvY2VzcyB0byBzdGlsbCBleHRlbmQgdGhlc2UgYWJzdHJhY3RzIGJ5IHByZWZpeGluZ1xuICAgICAqIHRoZW0gd2l0aCBcIlNub3dib2FyZFwiLlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY2xhc3MgTXlDbGFzcyBleHRlbmRzIFNub3dib2FyZC5QbHVnaW5CYXNlIHtcbiAgICAgKiAgICAgLi4uXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGF0dGFjaEFic3RyYWN0cygpIHtcbiAgICAgICAgdGhpcy5QbHVnaW5CYXNlID0gUGx1Z2luQmFzZTtcbiAgICAgICAgdGhpcy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlBsdWdpbkJhc2UpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuU2luZ2xldG9uLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBkZWZhdWx0IHV0aWxpdGllcy5cbiAgICAgKi9cbiAgICBsb2FkVXRpbGl0aWVzKCkge1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignY29va2llJywgQ29va2llKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ2pzb25QYXJzZXInLCBKc29uUGFyc2VyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3Nhbml0aXplcicsIFNhbml0aXplcik7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCd1cmwnLCBVcmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBmcmFtZXdvcmsuXG4gICAgICpcbiAgICAgKiBBdHRhY2hlcyBhIGxpc3RlbmVyIGZvciB0aGUgRE9NIGJlaW5nIHJlYWR5IGFuZCB0cmlnZ2VycyBhIGdsb2JhbCBcInJlYWR5XCIgZXZlbnQgZm9yIHBsdWdpbnMgdG8gYmVnaW4gYXR0YWNoaW5nXG4gICAgICogdGhlbXNlbHZlcyB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRTaW5nbGV0b25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxFdmVudCgncmVhZHknKTtcbiAgICAgICAgICAgIHRoaXMucmVhZGluZXNzLmRvbSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGFuIGluc3RhbmNlIG9mIGV2ZXJ5IHNpbmdsZXRvbi5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9ucygpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKHBsdWdpbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbHVnaW4gdG8gdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgYXJlIHRoZSBjb3JuZXJzdG9uZSBmb3IgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQuIEEgcGx1Z2luIG11c3QgZWl0aGVyIGJlIGFuIEVTMjAxNSBjbGFzc1xuICAgICAqIHRoYXQgZXh0ZW5kcyB0aGUgUGx1Z2luQmFzZSBvciBTaW5nbGV0b24gYWJzdHJhY3QgY2xhc3Nlcywgb3IgYSBzaW1wbGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBXaGVuIGEgcGx1Z2luIGlzIGFkZGVkLCBpdCBpcyBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGFzIGEgbmV3IG1hZ2ljIG1ldGhvZCBpbiB0aGUgU25vd2JvYXJkIGNsYXNzIHVzaW5nIHRoZSBuYW1lXG4gICAgICogcGFyYW1ldGVyLCBhbmQgY2FuIGJlIGNhbGxlZCB2aWEgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIGJlIHRoZSBcImxvd2VyY2FzZVwiIHZlcnNpb24gb2YgdGhpcyBuYW1lLlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGEgcGx1Z2luIGlzIGFzc2lnbmVkIHRvIHRoZSBuYW1lIFwibXlQbHVnaW5cIiwgaXQgY2FuIGJlIGNhbGxlZCB2aWEgYFNub3dib2FyZC5teXBsdWdpbigpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfEZ1bmN0aW9ufSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFkZFBsdWdpbihuYW1lLCBpbnN0YW5jZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBwbHVnaW4gY2FsbGVkIFwiJHtuYW1lfVwiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgIT09ICdmdW5jdGlvbicgJiYgaW5zdGFuY2UgaW5zdGFuY2VvZiBQbHVnaW5CYXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgcGx1Z2luIG11c3QgZXh0ZW5kIHRoZSBQbHVnaW5CYXNlIGNsYXNzLCBvciBtdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpc1tuYW1lXSAhPT0gdW5kZWZpbmVkIHx8IHRoaXNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBnaXZlbiBuYW1lIGlzIGFscmVhZHkgaW4gdXNlIGZvciBhIHByb3BlcnR5IG9yIG1ldGhvZCBvZiB0aGUgU25vd2JvYXJkIGNsYXNzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0gPSBuZXcgUGx1Z2luTG9hZGVyKGxvd2VyTmFtZSwgdGhpcywgaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiByZWdpc3RlcmVkYCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHNpbmdsZXRvbnMgbm93IGhhdmUgdGhlaXIgZGVwZW5kZW5jaWVzIGZ1bGZpbGxlZCwgYW5kIGZpcmUgdGhlaXIgXCJyZWFkeVwiIGhhbmRsZXIgaWYgd2UncmVcbiAgICAgICAgLy8gaW4gYSByZWFkeSBzdGF0ZS5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdldFBsdWdpbnMoKSkuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGx1Z2luLmlzU2luZ2xldG9uKClcbiAgICAgICAgICAgICAgICAmJiAhcGx1Z2luLmlzSW5pdGlhbGlzZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKVxuICAgICAgICAgICAgICAgICYmIHBsdWdpbi5oYXNNZXRob2QoJ2xpc3RlbnMnKVxuICAgICAgICAgICAgICAgICYmIE9iamVjdC5rZXlzKHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykpLmluY2x1ZGVzKCdyZWFkeScpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5yZWFkaW5lc3MuZG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeU1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJykucmVhZHk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmNhbGxNZXRob2QocmVhZHlNZXRob2QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luLlxuICAgICAqXG4gICAgICogUmVtb3ZlcyBhIHBsdWdpbiBmcm9tIFNub3dib2FyZCwgY2FsbGluZyB0aGUgZGVzdHJ1Y3RvciBtZXRob2QgZm9yIGFsbCBhY3RpdmUgaW5zdGFuY2VzIG9mIHRoZSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZVBsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzUGx1Z2luKGxvd2VyTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYFBsdWdpbiBcIiR7bmFtZX1cIiBhbHJlYWR5IHJlbW92ZWRgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgZGVzdHJ1Y3RvcnMgZm9yIGFsbCBpbnN0YW5jZXNcbiAgICAgICAgdGhpcy5wbHVnaW5zW2xvd2VyTmFtZV0uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbG93ZXJOYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXNbbmFtZV07XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlbW92ZWRgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcGx1Z2luIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYW5kIGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgcGx1Z2luIHRoYXQgaXMgc3RpbGwgd2FpdGluZyBmb3IgZGVwZW5kZW5jaWVzIHRvIGJlIHJlZ2lzdGVyZWQgd2lsbCBub3QgYmUgYWN0aXZlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHJlZ2lzdGVyZWQgcGx1Z2lucyBhcyBQbHVnaW5Mb2FkZXIgb2JqZWN0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJbXX1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zLCBieSBuYW1lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbk5hbWVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wbHVnaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUGx1Z2luTG9hZGVyIG9iamVjdCBvZiBhIGdpdmVuIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbHVnaW5Mb2FkZXJ9XG4gICAgICovXG4gICAgZ2V0UGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbHVnaW4gY2FsbGVkIFwiJHtsb3dlck5hbWV9XCIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbGwgcGx1Z2lucyB0aGF0IGxpc3RlbiB0byB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdvcmtzIGZvciBib3RoIG5vcm1hbCBhbmQgcHJvbWlzZSBldmVudHMuIEl0IGRvZXMgTk9UIGNoZWNrIHRoYXQgdGhlIHBsdWdpbidzIGxpc3RlbmVyIGFjdHVhbGx5IGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IFRoZSBuYW1lIG9mIHRoZSBwbHVnaW5zIHRoYXQgYXJlIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAqL1xuICAgIGxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zdCBwbHVnaW5zID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wbHVnaW5zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHBsdWdpbl0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBsdWdpbi5kZXBlbmRlbmNpZXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyc1tldmVudE5hbWVdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHNpbXBsZSByZWFkeSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIFN5bm9ueW1vdXMgd2l0aCBqUXVlcnkncyBcIiQoZG9jdW1lbnQpLnJlYWR5KClcIiBmdW5jdGlvbmFsaXR5LCB0aGlzIGFsbG93cyBpbmxpbmUgc2NyaXB0cyB0b1xuICAgICAqIGF0dGFjaCB0aGVtc2VsdmVzIHRvIFNub3dib2FyZCBpbW1lZGlhdGVseSBidXQgb25seSBmaXJlIHdoZW4gdGhlIERPTSBpcyByZWFkeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZGluZXNzLmRvbSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlYWR5JywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzaW1wbGUgbGlzdGVuZXIgZm9yIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCBmb3IgYWQtaG9jIHNjcmlwdHMgdGhhdCBkb24ndCBuZWVkIGEgZnVsbCBwbHVnaW4uIFRoZSBnaXZlbiBjYWxsYmFjayB3aWxsIGJlXG4gICAgICogY2FsbGVkIHdoZW4gdGhlIGV2ZW50IG5hbWUgcHJvdmlkZWQgZmlyZXMuIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBQcm9taXNlIGV2ZW50cy4gRm9yXG4gICAgICogYSBQcm9taXNlIGV2ZW50LCB5b3VyIGNhbGxiYWNrIG11c3QgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uaW5jbHVkZXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGx1Z2luIHJldHVybnMgYSBgZmFsc2VgLCB0aGUgZXZlbnQgaXMgY29uc2lkZXJlZCBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IElmIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAgICovXG4gICAgZ2xvYmFsRXZlbnQoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGVidWcoYENhbGxpbmcgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgLCAuLi5wYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoZSBldmVudC5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5zVG9FdmVudChldmVudE5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgTm8gbGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyhgTGlzdGVuZXJzIGZvdW5kIGZvciBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNTaW5nbGV0b24oKSAmJiBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuTWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIgbWV0aG9kcyBmb3IgYWxsIHBsdWdpbnMsIGlmIHRoZXkgaGF2ZSBhIG1ldGhvZCBzcGVjaWZpZWQgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICAgIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgcGx1Z2luIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIHBsdWdpbnMgYXJlIGNvbnNpZGVyZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCIgY2FuY2VsbGVkIGJ5IFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgZm9yIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICghY2FuY2VsbGVkICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGxpc3RlbmVyIGhhcyBjYW5jZWxsZWQgdGhlIGV2ZW50LCBubyBmdXJ0aGVyIGxpc3RlbmVycyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIoLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgR2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9IGNhbmNlbGxlZCBieSBhbiBhZC1ob2MgbGlzdGVuZXIuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIWNhbmNlbGxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGdsb2JhbCBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLCBleHBlY3RpbmcgYSBQcm9taXNlIHRvIGJlIHJldHVybmVkIGJ5IGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgY29sbGF0ZXMgYWxsIHBsdWdpbnMgcmVzcG9uc2VzIGludG8gb25lIGxhcmdlIFByb21pc2UgdGhhdCBlaXRoZXIgZXhwZWN0cyBhbGwgdG8gYmUgcmVzb2x2ZWQsIG9yIG9uZSB0byByZWplY3QuXG4gICAgICogSWYgbm8gbGlzdGVuZXJzIGFyZSBmb3VuZCwgYSByZXNvbHZlZCBQcm9taXNlIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqL1xuICAgIGdsb2JhbFByb21pc2VFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgLy8gRmluZCBwbHVnaW5zIGxpc3RlbmluZyB0byB0aGlzIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCI6ICR7bGlzdGVuZXJzLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGxpc3Rlbk1ldGhvZC5hcHBseShpbnN0YW5jZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdGVuTWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlW2xpc3Rlbk1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBcIiR7bGlzdGVuTWV0aG9kfVwiIG1ldGhvZCBpbiBcIiR7bmFtZX1cIiBwbHVnaW5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZVByb21pc2UgPSBpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFuY2VQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgXCIke25hbWV9XCIgcGx1Z2luLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihgTGlzdGVuIG1ldGhvZCBmb3IgXCIke2V2ZW50TmFtZX1cIiBldmVudCBpbiBcIiR7bmFtZX1cIiBwbHVnaW4gaXMgbm90IGEgZnVuY3Rpb24gb3Igc3RyaW5nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGaW5kIGFkLWhvYyBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdICYmIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgRm91bmQgJHt0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aH0gYWQtaG9jIGxpc3RlbmVyKHMpIGZvciBnbG9iYWwgcHJvbWlzZSBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lclByb21pc2UgPSBsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGxpc3RlbmVyUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBwcm9taXNlIGV2ZW50IGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIHN0eWxlZCBtZXNzYWdlIGluIHRoZSBjb25zb2xlLlxuICAgICAqXG4gICAgICogSW5jbHVkZXMgcGFyYW1ldGVycyBhbmQgYSBzdGFjayB0cmFjZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZ01lc3NhZ2UoY29sb3IsIGJvbGQsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICclY1tTbm93Ym9hcmRdJyxcbiAgICAgICAgICAgIGBjb2xvcjogJHtjb2xvcn07IGZvbnQtd2VpZ2h0OiAkeyhib2xkKSA/ICdib2xkJyA6ICdub3JtYWwnfTtgLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICApO1xuICAgICAgICBpZiAocGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgICAgYCVjUGFyYW1ldGVycyAlYygke3BhcmFtZXRlcnMubGVuZ3RofSlgLFxuICAgICAgICAgICAgICAgICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoODgsIDg4LCA4OCk7IGZvbnQtd2VpZ2h0OiBub3JtYWw7J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2luZGV4fTpgLCAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnLCBwYXJhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnJWNUcmFjZScsICdjb2xvcjogcmdiKDQ1LCAxNjcsIDE5OSk7IGZvbnQtd2VpZ2h0OiBib2xkOycpO1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBsb2cobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZyBhIGRlYnVnIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGVzZSBtZXNzYWdlcyBhcmUgb25seSBzaG93biB3aGVuIGRlYnVnZ2luZyBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZGVidWcobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICBpZiAoIXRoaXMuZGVidWdFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYig0NSwgMTY3LCAxOTkpJywgZmFsc2UsIG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGVycm9yKG1lc3NhZ2UsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKCdyZ2IoMjI5LCAzNSwgMzUpJywgdHJ1ZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZsYXNoIGZyb20gJy4vZXh0cmFzL0ZsYXNoJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vZXh0cmFzL1RyYW5zaXRpb24nO1xuaW1wb3J0IEF0dGFjaExvYWRpbmcgZnJvbSAnLi9leHRyYXMvQXR0YWNoTG9hZGluZyc7XG5pbXBvcnQgU3RyaXBlTG9hZGVyIGZyb20gJy4vZXh0cmFzL1N0cmlwZUxvYWRlcic7XG5pbXBvcnQgU3R5bGVzaGVldExvYWRlciBmcm9tICcuL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyJztcbmltcG9ydCBBc3NldExvYWRlciBmcm9tICcuL2V4dHJhcy9Bc3NldExvYWRlcic7XG5pbXBvcnQgRGF0YUNvbmZpZyBmcm9tICcuL2V4dHJhcy9EYXRhQ29uZmlnJztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgZXh0cmEgcGx1Z2lucy4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdkYXRhQ29uZmlnJywgRGF0YUNvbmZpZyk7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZXh0cmFzU3R5bGVzJywgU3R5bGVzaGVldExvYWRlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbigndHJhbnNpdGlvbicsIFRyYW5zaXRpb24pO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2ZsYXNoJywgRmxhc2gpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2F0dGFjaExvYWRpbmcnLCBBdHRhY2hMb2FkaW5nKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdzdHJpcGVMb2FkZXInLCBTdHJpcGVMb2FkZXIpO1xufSkod2luZG93LlNub3dib2FyZCk7XG4iLCJpbXBvcnQgU25vd2JvYXJkIGZyb20gJy4vbWFpbi9Tbm93Ym9hcmQnO1xuaW1wb3J0IFByb3h5SGFuZGxlciBmcm9tICcuL21haW4vUHJveHlIYW5kbGVyJztcblxuKCh3aW5kb3cpID0+IHtcbiAgICBjb25zdCBzbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgIG5ldyBTbm93Ym9hcmQodHJ1ZSwgdHJ1ZSksXG4gICAgICAgIFByb3h5SGFuZGxlcixcbiAgICApO1xuXG4gICAgLy8gQ292ZXIgYWxsIGFsaWFzZXNcbiAgICB3aW5kb3cuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgd2luZG93LlNub3dCb2FyZCA9IHNub3dib2FyZDtcbn0pKHdpbmRvdyk7XG4iLCJpbXBvcnQgUmVxdWVzdCBmcm9tICcuL2FqYXgvUmVxdWVzdCc7XG5cbmlmICh3aW5kb3cuU25vd2JvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nub3dib2FyZCBtdXN0IGJlIGxvYWRlZCBpbiBvcmRlciB0byB1c2UgdGhlIEphdmFzY3JpcHQgQUpBWCByZXF1ZXN0IGZlYXR1cmUuJyk7XG59XG5cbigoU25vd2JvYXJkKSA9PiB7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbigncmVxdWVzdCcsIFJlcXVlc3QpO1xufSkod2luZG93LlNub3dib2FyZCk7XG4iLCJpbXBvcnQgQmFzZUNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBDb29raWUgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgaXMgYSB0aGluIHdyYXBwZXIgYXJvdW5kIHRoZSBcImpzLWNvb2tpZVwiIGxpYnJhcnkuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZXhwaXJlczogbnVsbCxcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ0xheCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IGNvb2tpZSBwYXJhbWV0ZXJzIGZvciBhbGwgc3Vic2VxdWVudCBcInNldFwiIGFuZCBcInJlbW92ZVwiIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29va2llIGRlZmF1bHRzIG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhvcHRpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5kZWZhdWx0cykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBJZiBgbmFtZWAgaXMgdW5kZWZpbmVkLCByZXR1cm5zIGFsbCBjb29raWVzIGFzIGFuIE9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge09iamVjdHxTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29va2llcyA9IEJhc2VDb29raWUuZ2V0KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNvb2tpZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2Nvb2tpZU5hbWUsIGNvb2tpZVZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBjb29raWVOYW1lLCBjb29raWVWYWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXNbY29va2llTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY29va2llcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IEJhc2VDb29raWUuZ2V0KG5hbWUpO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIGdvdHRlbiB2YWx1ZVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLmdldCcsIG5hbWUsIHZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSBhZGRpdGlvbmFsIGNvb2tpZSBwYXJhbWV0ZXJzIHRocm91Z2ggdGhlIFwib3B0aW9uc1wiIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXQgc2F2ZVZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBvdmVycmlkZSB0aGUgdmFsdWUgdG8gc2F2ZVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLnNldCcsIG5hbWUsIHZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNhdmVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gQmFzZUNvb2tpZS5zZXQobmFtZSwgc2F2ZVZhbHVlLCB7XG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRzKCksXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSB0aGUgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB2aWEgdGhlIFwib3B0aW9uc1wiIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmUobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBCYXNlQ29va2llLnJlbW92ZShuYW1lLCB7XG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRzKCksXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEpTT04gUGFyc2VyIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHBhcnNlcyBKU09OLWxpa2UgZGF0YSB0aGF0IGRvZXMgbm90IHN0cmljdGx5IG1lZXQgdGhlIEpTT04gc3BlY2lmaWNhdGlvbnMgaW4gb3JkZXIgdG8gc2ltcGxpZnkgZGV2ZWxvcG1lbnQuXG4gKiBJdCBpcyBhIHNhZmUgcmVwbGFjZW1lbnQgZm9yIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZhbChcIih7XCIgKyB2YWx1ZSArIFwifSlcIikpKSB0aGF0IGRvZXMgbm90IHJlcXVpcmUgdGhlIHVzZSBvZiBldmFsKClcbiAqXG4gKiBAYXV0aG9yIEF5dW1pIEhhbWFzYWtpXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2N0b2JlcmNtcy9vY3RvYmVyL3B1bGwvNDUyN1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uUGFyc2VyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIC8vIEFkZCB0byBnbG9iYWwgZnVuY3Rpb24gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHdpbmRvdy53bkpTT04gPSAoanNvbikgPT4gdGhpcy5wYXJzZShqc29uKTtcbiAgICAgICAgd2luZG93Lm9jSlNPTiA9IHdpbmRvdy53bkpTT047XG4gICAgfVxuXG4gICAgcGFyc2Uoc3RyKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSB0aGlzLnBhcnNlU3RyaW5nKHN0cik7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgIH1cblxuICAgIHBhcnNlU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGxldCBzdHIgPSB2YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb2tlbiBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IHR5cGUgPSBudWxsO1xuICAgICAgICBsZXQga2V5ID0gbnVsbDtcbiAgICAgICAgbGV0IGJvZHkgPSAnJztcblxuICAgICAgICAvKlxuICAgICAgICAqIHRoZSBtaXN0YWtlICcsJ1xuICAgICAgICAqL1xuICAgICAgICB3aGlsZSAoc3RyICYmIHN0clswXSA9PT0gJywnKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBzdHJpbmdcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ1wiJyB8fCBzdHJbMF0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICBpZiAoc3RyW3N0ci5sZW5ndGggLSAxXSAhPT0gc3RyWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSA9ICdcIic7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXFxcXFwiJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIGJvb2xlYW5cbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ3RydWUnIHx8IHN0ciA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogbnVsbFxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bWJlclxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAga2V5ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3VsdCA9ICd7JztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0JsYW5rQ2hhcihzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiAoc3RyW2ldID09PSAnXCInIHx8IHN0cltpXSA9PT0gJ1xcJycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpICsgMSwgc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGBcIiR7a2V5fVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSBrZXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJLZXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25lZWRLZXknICYmIHRoaXMuY2FuQmVLZXlIZWFkKHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZUtleShzdHIsIGkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJLZXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyS2V5JyAmJiBzdHJbaV0gPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJzonO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJzonO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5JyB8fCB0eXBlID09PSAnbmVlZEtleScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3QgPSBpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RyW2xhc3RdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbbGFzdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltsYXN0XSA9PT0gJ30nICYmIGxhc3QgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ30nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdCAhPT0gaSAmJiByZXN1bHQgIT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbmVlZEtleSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbGFzdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gb2JqZWN0IG5lYXIgJHtyZXN1bHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIGFycmF5XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdbJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gJ1snO1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkQm9keSc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcgJyB8fCBzdHJbaV0gPT09ICdcXG4nIHx8IHN0cltpXSA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25lZWRCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbnVsbCwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXScgJiYgaSA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHRoaXMuZ2V0Qm9keShzdHIsIGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpICsgYm9keS5vcmlnaW5MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5wYXJzZVN0cmluZyhib2R5LmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJCb2R5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlckJvZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWFsIHdpdGggbWlzdGFrZSBcIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltpICsgMV0gPT09ICcsJyB8fCB0aGlzLmlzQmxhbmtDaGFyKHN0cltpICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBhcnJheSBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGdldEJvZHkoc3RyLCBwb3MpIHtcbiAgICAgICAgbGV0IGJvZHkgPSAnJztcblxuICAgICAgICAvLyBwYXJzZSBzdHJpbmcgYm9keVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICdcIicgfHwgc3RyW3Bvc10gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBzdHJbcG9zXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltwb3NdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBib2R5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIHN0cmluZyBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgdHJ1ZSAvIGZhbHNlXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ3QnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ3RydWUnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICd0cnVlJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnZicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignZicsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ2ZhbHNlJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgbnVsbFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICduJykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdudWxsJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAnbnVsbCcubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnbnVsbCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgbnVtYmVyXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJy0nIHx8IHN0cltwb3NdID09PSAnKycgfHwgc3RyW3Bvc10gPT09ICcuJyB8fCAoc3RyW3Bvc10gPj0gJzAnICYmIHN0cltwb3NdIDw9ICc5JykpIHtcbiAgICAgICAgICAgIGJvZHkgPSAnJztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICctJyB8fCBzdHJbaV0gPT09ICcrJyB8fCBzdHJbaV0gPT09ICcuJyB8fCAoc3RyW2ldID49ICcwJyAmJiBzdHJbaV0gPD0gJzknKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBib2R5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG51bWJlciBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2Ugb2JqZWN0XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ3snIHx8IHN0cltwb3NdID09PSAnWycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW1xuICAgICAgICAgICAgICAgIHN0cltwb3NdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJvZHkgPSBzdHJbcG9zXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvcyArIDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXCInICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ3snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgnWycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGkgLSBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9keSBuZWFyICR7c3RyLnN1YnN0cigocG9zIC0gNSA+PSAwKSA/IHBvcyAtIDUgOiAwLCA1MCl9YCk7XG4gICAgfVxuXG4gICAgcGFyc2VLZXkoc3RyLCBwb3MsIHF1b3RlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocXVvdGUgJiYgcXVvdGUgPT09IHN0cltpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXF1b3RlICYmIChzdHJbaV0gPT09ICcgJyB8fCBzdHJbaV0gPT09ICc6JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgKz0gc3RyW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcgJiYgaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAga2V5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzeW50YXggbmVhciAke2tleX1gKTtcbiAgICB9XG5cbiAgICBjYW5CZUtleUhlYWQoY2gpIHtcbiAgICAgICAgaWYgKGNoWzBdID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGNoWzBdID49ICdhJyAmJiBjaFswXSA8PSAneicpIHx8IChjaFswXSA+PSAnQScgJiYgY2hbMF0gPD0gJ1onKSB8fCBjaFswXSA9PT0gJ18nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hbMF0gPj0gJzAnICYmIGNoWzBdIDw9ICc5Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID09PSAnJCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaC5jaGFyQ29kZUF0KDApID4gMjU1KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0JsYW5rQ2hhcihjaCkge1xuICAgICAgICByZXR1cm4gY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHQnO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogU2FuaXRpemVyIHV0aWxpdHkuXG4gKlxuICogQ2xpZW50LXNpZGUgSFRNTCBzYW5pdGl6ZXIgZGVzaWduZWQgbW9zdGx5IHRvIHByZXZlbnQgc2VsZi1YU1MgYXR0YWNrcy5cbiAqIFRoZSBzYW5pdGl6ZXIgdXRpbGl0eSB3aWxsIHN0cmlwIGFsbCBhdHRyaWJ1dGVzIHRoYXQgc3RhcnQgd2l0aCBgb25gICh1c3VhbGx5IEpTIGV2ZW50IGhhbmRsZXJzIGFzIGF0dHJpYnV0ZXMsIGkuZS4gYG9ubG9hZGAgb3IgYG9uZXJyb3JgKSBvciBjb250YWluIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbCBpbiB0aGVpciB2YWx1ZXMuXG4gKlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuaXRpemVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIC8vIEFkZCB0byBnbG9iYWwgZnVuY3Rpb24gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHdpbmRvdy53blNhbml0aXplID0gKGh0bWwpID0+IHRoaXMuc2FuaXRpemUoaHRtbCk7XG4gICAgICAgIHdpbmRvdy5vY1Nhbml0aXplID0gd2luZG93LnduU2FuaXRpemU7XG4gICAgfVxuXG4gICAgc2FuaXRpemUoaHRtbCwgYm9keU9ubHkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgY29uc3QgcmV0dXJuQm9keU9ubHkgPSAoYm9keU9ubHkgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYm9keU9ubHkgPT09ICdib29sZWFuJylcbiAgICAgICAgICAgID8gYm9keU9ubHlcbiAgICAgICAgICAgIDogdHJ1ZTtcblxuICAgICAgICB0aGlzLnNhbml0aXplTm9kZShkb20uZ2V0Um9vdE5vZGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIChyZXR1cm5Cb2R5T25seSkgPyBkb20uYm9keS5pbm5lckhUTUwgOiBkb20uaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIHNhbml0aXplTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmltQXR0cmlidXRlcyhub2RlKTtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20obm9kZS5jaGlsZHJlbik7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemVOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpbUF0dHJpYnV0ZXMobm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLnZhbHVlO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgbmFtZXMgc3RhcnQgd2l0aCBcIm9uXCIgKGZvciBleGFtcGxlOiBvbmxvYWQsIG9uZXJyb3IuLi4pXG4gICAgICAgICAgICAqIHJlbW92ZSBhdHRyaWJ1dGVzIHdoZXJlIHRoZSB2YWx1ZSBzdGFydHMgd2l0aCB0aGUgXCJqYXZhc2NyaXB0OlwiIHBzZXVkbyBwcm90b2NvbCAoZm9yIGV4YW1wbGUgaHJlZj1cImphdmFzY3JpcHQ6YWxlcnQoMSlcIilcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgIGlmIChhdHRyTmFtZS5pbmRleE9mKCdvbicpID09PSAwIHx8IGF0dHJWYWx1ZS5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBVUkwgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgcHJvdmlkZXMgVVJMIGZ1bmN0aW9ucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5iYXNlVXJsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIFVSTCBiYXNlZCBvbiBhIHJlbGF0aXZlIHBhdGguXG4gICAgICpcbiAgICAgKiBJZiBhbiBhYnNvbHV0ZSBVUkwgaXMgcHJvdmlkZWQsIGl0IHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdG8odXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL1stYS16MC05Xys6XSs6XFwvXFwvWy1hLXowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXowLTkoKV17MSw2fVxcYihbLWEtejAtOSgpQDolXysufiM/Ji8vPV0qKS9pO1xuXG4gICAgICAgIGlmICh1cmwubWF0Y2godXJsUmVnZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhlVXJsID0gdXJsLnJlcGxhY2UoL15cXC8rLywgJycpO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmwoKX0ke3RoZVVybH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBiYXNlIFVSTCBvZiB0aGlzIGluc3RhbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIGRldGVybWluZXMgdGhlIGJhc2UgVVJMIGZyb20gdGhyZWUgc291cmNlcywgaW4gb3JkZXI6XG4gICAgICogIC0gSWYgU25vd2JvYXJkIGlzIGxvYWRlZCB2aWEgdGhlIGB7JSBzbm93Ym9hcmQgJX1gIHRhZywgaXQgd2lsbCByZXRyaWV2ZSB0aGUgYmFzZSBVUkwgdGhhdFxuICAgICAqIGlzIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgdGhlcmUuXG4gICAgICogIC0gSWYgYSBgPGJhc2U+YCB0YWcgaXMgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYmFzZSB0YWcuXG4gICAgICogIC0gRmluYWxseSwgaXQgd2lsbCB0YWtlIGEgZ3Vlc3MgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbi4gVGhpcyB3aWxsIGxpa2VseSBub3Qgd29yayBmb3Igc2l0ZXNcbiAgICAgKiB0aGF0IHJlc2lkZSBpbiBzdWJkaXJlY3Rvcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBiYXNlIFVSTCB3aWxsIGFsd2F5cyBjb250YWluIGEgdHJhaWxpbmcgYmFja3NsYXNoLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBiYXNlVXJsKCkge1xuICAgICAgICBpZiAodGhpcy5mb3VuZEJhc2VVcmwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykuZGF0YXNldC5iYXNlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gW1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgJy8vJyxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgJy8nLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHVybFBhcnRzLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kQmFzZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGJhc2UgVVJMLCBlbnN1cmluZyBpdCBpcyBhIEhUVFAvSFRUUHMgVVJMLlxuICAgICAqXG4gICAgICogSWYgdGhlIFNub3dib2FyZCBzY3JpcHQgb3IgPGJhc2U+IHRhZyBvbiB0aGUgcGFnZSB1c2UgYSBkaWZmZXJlbnQgdHlwZSBvZiBVUkwsIHRoaXMgd2lsbCBmYWlsIHdpdGhcbiAgICAgKiBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgICB2YWxpZGF0ZUJhc2VVcmwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oKFteOi8/I10rKTopPyhcXC9cXC8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/L2k7XG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gdXJsUmVnZXguZXhlYyh1cmwpO1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHVybFBhcnRzWzJdO1xuICAgICAgICBjb25zdCBkb21haW4gPSB1cmxQYXJ0c1s0XTtcblxuICAgICAgICBpZiAocHJvdG9jb2wgJiYgWydodHRwJywgJ2h0dHBzJ10uaW5kZXhPZihwcm90b2NvbC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZG9tYWluKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmFzZSBVUkwgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodXJsLnN1YnN0cigtMSkgPT09ICcvJylcbiAgICAgICAgICAgID8gdXJsXG4gICAgICAgICAgICA6IGAke3VybH0vYDtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUGx1Z2luQmFzZSIsInNub3dib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0IiwiZGVwZW5kZW5jaWVzIiwibGlzdGVucyIsImRlc3RydWN0IiwiZGV0YWNoIiwiZGVzdHJ1Y3RvciIsImRlZmF1bHQiLCJTaW5nbGV0b24iLCJfUGx1Z2luQmFzZSIsIl9pbmhlcml0cyIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJpc0FycmF5Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iaiIsIl90b1Byb3BlcnR5S2V5IiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsImVsZW1lbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsIl90aGlzIiwiaXNIYW5kbGVyTmFtZSIsIm1hdGNoZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZmV0Y2hPcHRpb25zIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VFcnJvciIsImNhbmNlbGxlZCIsImNoZWNrUmVxdWVzdCIsImdsb2JhbEV2ZW50IiwiZXZlbnQiLCJFdmVudCIsImNhbmNlbGFibGUiLCJyZXF1ZXN0IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkb0NsaWVudFZhbGlkYXRpb24iLCJjb25maXJtIiwiZG9Db25maXJtIiwiY29uZmlybWVkIiwiZG9BamF4IiwicmVzcG9uc2UiLCJwcm9jZXNzVXBkYXRlIiwiWF9XSU5URVJfU1VDQ0VTUyIsInByb2Nlc3NFcnJvciIsInByb2Nlc3NSZXNwb25zZSIsIkVsZW1lbnQiLCJnZXRGZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiZGF0YSIsInJlZGlyZWN0IiwibW9kZSIsImZldGNoIiwidXJsIiwiYnJvd3NlclZhbGlkYXRlIiwiZm9ybSIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIl90aGlzMiIsImFqYXhQcm9taXNlIiwib2siLCJzdGF0dXMiLCJoYXMiLCJnZXQiLCJpbmNsdWRlcyIsImpzb24iLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwicmVuZGVyRXJyb3IiLCJmaWxlIiwibGluZSIsInRyYWNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsIlhfV0lOVEVSX1JFU1BPTlNFX0NPREUiLCJwcm9taXNlIiwiX3RoaXMzIiwiYmVmb3JlVXBkYXRlIiwicGFydGlhbHMiLCJlbnRyaWVzIiwiZW50cnkiLCJfZW50cnkiLCJzdWJzdHIiLCJYX1dJTlRFUl9BU1NFVFMiLCJwcm9jZXNzQXNzZXRzIiwicHJvbWlzZXMiLCJnbG9iYWxQcm9taXNlRXZlbnQiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRvVXBkYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXM0IiwiYWZmZWN0ZWQiLCJfZW50cnkyIiwicGFydGlhbCIsImNvbnRlbnQiLCJzZWxlY3RvciIsInVwZGF0ZSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsInN1Y2Nlc3MiLCJmbGFzaCIsIlhfV0lOVEVSX0ZMQVNIX01FU1NBR0VTIiwicHJvY2Vzc0ZsYXNoTWVzc2FnZXMiLCJYX1dJTlRFUl9SRURJUkVDVCIsInByb2Nlc3NSZWRpcmVjdCIsInByb2Nlc3NFcnJvck1lc3NhZ2UiLCJza2lwRXJyb3IiLCJYX1dJTlRFUl9FUlJPUl9GSUVMRFMiLCJwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyIsIlhfV0lOVEVSX0VSUk9SX01FU1NBR0UiLCJfdGhpczUiLCJoYW5kbGVSZWRpcmVjdFJlc3BvbnNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUV2ZW50IiwiZXZlbnROYW1lIiwib25jZSIsImxvY2F0aW9uIiwiYXNzaWduIiwiaGFuZGxlRXJyb3JNZXNzYWdlIiwiYWxlcnQiLCJtZXNzYWdlcyIsImhhbmRsZUZsYXNoTWVzc2FnZXMiLCJmaWVsZHMiLCJoYW5kbGVWYWxpZGF0aW9uRXJyb3JzIiwiYXNzZXRzIiwiX2RvQ29uZmlybSIsIl9jYWxsZWUyIiwiZnVsZmlsbGVkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaGFuZGxlQ29uZmlybU1lc3NhZ2UiLCJsaXN0ZW5zVG9FdmVudCIsInQwIiwidGFnTmFtZSIsImNsb3Nlc3QiLCJleHRyYWN0UGFydGlhbHMiLCJ4c3JmVG9rZW4iLCJsb2FkaW5nIiwiaHJlZiIsImZpbGVzIiwiRm9ybURhdGEiLCJkZWJ1ZyIsImNvb2tpZSIsImZvcm1EYXRhIiwiX2VudHJ5MyIsImFwcGVuZCIsImpvaW4iLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJGIiwiX2UiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIl9lMiIsIkFzc2V0TG9hZGVyIiwiX1NpbmdsZXRvbiIsImFqYXhMb2FkQXNzZXRzIiwiX2xvYWQiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInNjcmlwdCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJzdHlsZSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJpbWFnZSIsImpzIiwibG9hZFNjcmlwdCIsInQxIiwiY3NzIiwibG9hZFN0eWxlIiwidDIiLCJ0MyIsImltZyIsImxvYWRJbWFnZSIsInQ0IiwidDUiLCJsb2FkIiwiX3giLCJsb2FkZWQiLCJkb21TY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZG9tQ3NzIiwiaGVhZCIsIkltYWdlIiwic3JjIiwiQXR0YWNoTG9hZGluZyIsImFqYXhTdGFydCIsImFqYXhEb25lIiwibG9hZEVsZW1lbnRzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2V0TG9hZGluZ0NsYXNzIiwiZGF0YXNldCIsImF0dGFjaExvYWRpbmciLCJyZW1vdmUiLCJEYXRhQ29uZmlnIiwibG9jYWxDb25maWciLCJIVE1MRWxlbWVudCIsImluc3RhbmNlQ29uZmlnIiwiYWNjZXB0ZWRDb25maWdzIiwicmVmcmVzaCIsImNvbmZpZyIsInNldCIsInBlcnNpc3QiLCJnZXRBY2NlcHRlZENvbmZpZ3MiLCJwcm9jZXNzQ29uZmlnIiwiYWNjZXB0QWxsRGF0YUNvbmZpZ3MiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwiY29lcmNlVmFsdWUiLCJzdHJpbmdWYWx1ZSIsInN0YXJ0c1dpdGgiLCJiYXNlNjRzdHIiLCJyZXBsYWNlIiwiZGVjb2RlZCIsImF0b2IiLCJ0b0xvd2VyQ2FzZSIsImpzb25QYXJzZXIiLCJwYXJzZSIsIkZsYXNoIiwiZHVyYXRpb24iLCJjbGVhciIsInRpbWVyIiwiZmxhc2hUaW1lciIsImNsZWFyVGltZW91dCIsIl9nZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdG9wVGltZXIiLCJzdGFydFRpbWVyIiwiYXBwZW5kQ2hpbGQiLCJ0cmFuc2l0aW9uIiwidGltZXJUcmFucyIsInNldFRpbWVvdXQiLCJjYW5jZWwiLCJTdHJpcGVMb2FkZXIiLCJyZWFkeSIsImNvdW50ZXIiLCJjcmVhdGVTdHJpcGUiLCJzaG93IiwiaGlkZSIsImluZGljYXRvciIsInN0cmlwZSIsInN0cmlwZUxvYWRlZCIsIm5ld1N0cmlwZSIsImNsb25lTm9kZSIsImZvcmNlIiwiU3R5bGVzaGVldExvYWRlciIsInN0eWxlc0xvYWRlZCIsImVuZHNXaXRoIiwic3R5bGVzaGVldCIsInRvIiwiVHJhbnNpdGlvbiIsImNhbGxiYWNrIiwidHJhaWxUbyIsInBhcnNlRHVyYXRpb24iLCJkb1RyYW5zaXRpb24iLCJldmVudENsYXNzZXMiLCJfbGVuIiwiX2tleSIsImFjdGl2ZSIsIm91dCIsInJldHVybkNsYXNzZXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicmVzZXRDbGFzc2VzIiwiZXZlbnRDbGFzcyIsImdldENvbXB1dGVkU3R5bGUiLCJvblRyYW5zaXRpb25FbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyc2VkIiwiZXhlYyIsImFtb3VudCIsInVuaXQiLCJNYXRoIiwiZmxvb3IiLCJwcm9wIiwicmVjZWl2ZXIiLCJwcm9wTG93ZXIiLCJoYXNQbHVnaW4iLCJfUmVmbGVjdCRnZXQkcHJvcExvd2UiLCJnZXRJbnN0YW5jZSIsIklubmVyUHJveHlIYW5kbGVyIiwiUGx1Z2luTG9hZGVyIiwiUHJveHkiLCJmcmVlemUiLCJpbnN0YW5jZXMiLCJzaW5nbGV0b24iLCJpbml0aWFsaXNlZCIsInNlYWwiLCJtb2NrcyIsIm9yaWdpbmFsRnVuY3Rpb25zIiwiaGFzTWV0aG9kIiwibWV0aG9kTmFtZSIsImlzRnVuY3Rpb24iLCJjYWxsTWV0aG9kIiwicGFyYW1ldGVycyIsInNoaWZ0IiwiX2xlbjIiLCJfa2V5MiIsImRlcGVuZGVuY2llc0Z1bGZpbGxlZCIsInVubWV0IiwiZ2V0RGVwZW5kZW5jaWVzIiwiaXRlbSIsImdldFBsdWdpbk5hbWVzIiwiaXNTaW5nbGV0b24iLCJpbml0aWFsaXNlU2luZ2xldG9uIiwiX2xlbjMiLCJwYXJhbXMiLCJfa2V5MyIsIl9lbnRyeTQiLCJfbGVuNCIsIl9rZXk0IiwibmV3SW5zdGFuY2UiLCJfY29uc3RydWN0Iiwic3BsaWNlIiwiZ2V0SW5zdGFuY2VzIiwiaXNJbml0aWFsaXNlZCIsIl9sZW41IiwiX2tleTUiLCJtYXAiLCJwbHVnaW4iLCJtb2NrIiwiX2xlbjYiLCJfa2V5NiIsInVubW9jayIsIkNvb2tpZSIsIkpzb25QYXJzZXIiLCJTYW5pdGl6ZXIiLCJVcmwiLCJTbm93Ym9hcmQiLCJhdXRvU2luZ2xldG9ucyIsImRlYnVnRW5hYmxlZCIsImF1dG9Jbml0U2luZ2xldG9ucyIsInBsdWdpbnMiLCJsaXN0ZW5lcnMiLCJmb3VuZEJhc2VVcmwiLCJyZWFkaW5lc3MiLCJkb20iLCJhdHRhY2hBYnN0cmFjdHMiLCJsb2FkVXRpbGl0aWVzIiwiaW5pdGlhbGlzZSIsImFkZFBsdWdpbiIsImluaXRpYWxpc2VTaW5nbGV0b25zIiwibG93ZXJOYW1lIiwiZ2V0UGx1Z2lucyIsInJlYWR5TWV0aG9kIiwicmVtb3ZlUGx1Z2luIiwiZ2V0UGx1Z2luIiwib24iLCJvZmYiLCJpbmRleCIsImxpc3Rlbk1ldGhvZCIsInJlc3VsdCIsImxpc3RlbmVyIiwiaW5zdGFuY2VQcm9taXNlIiwibGlzdGVuZXJQcm9taXNlIiwiYWxsIiwibG9nTWVzc2FnZSIsImNvbG9yIiwiYm9sZCIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsInBhcmFtIiwibG9nIiwiZ3JvdXBFbmQiLCJQcm94eUhhbmRsZXIiLCJTbm93Qm9hcmQiLCJCYXNlQ29va2llIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInNldERlZmF1bHRzIiwiY29va2llcyIsImNvb2tpZU5hbWUiLCJjb29raWVWYWx1ZSIsIm5ld1ZhbHVlIiwic2F2ZVZhbHVlIiwid25KU09OIiwib2NKU09OIiwic3RyIiwianNvblN0cmluZyIsInBhcnNlU3RyaW5nIiwiSlNPTiIsInRyaW0iLCJudW0iLCJpc0JsYW5rQ2hhciIsInBhcnNlS2V5IiwiY2FuQmVLZXlIZWFkIiwiZ2V0Qm9keSIsIm9yaWdpbkxlbmd0aCIsImxhc3QiLCJwb3MiLCJzdGFjayIsInF1b3RlIiwiY2giLCJjaGFyQ29kZUF0Iiwid25TYW5pdGl6ZSIsImh0bWwiLCJzYW5pdGl6ZSIsIm9jU2FuaXRpemUiLCJib2R5T25seSIsInBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJldHVybkJvZHlPbmx5Iiwic2FuaXRpemVOb2RlIiwiZ2V0Um9vdE5vZGUiLCJub2RlIiwidHJpbUF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiYXR0cmlidXRlcyIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwiYmFzZVVybCIsInVybFJlZ2V4IiwibWF0Y2giLCJ0aGVVcmwiLCJ2YWxpZGF0ZUJhc2VVcmwiLCJnZXRBdHRyaWJ1dGUiLCJ1cmxQYXJ0cyIsInByb3RvY29sIiwiaG9zdCJdLCJzb3VyY2VSb290IjoiIn0=