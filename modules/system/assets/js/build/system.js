"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/build/system"],{

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

/***/ "./assets/js/snowboard/snowboard.base.js":
/*!***********************************************!*\
  !*** ./assets/js/snowboard/snowboard.base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/Snowboard */ "./assets/js/snowboard/main/Snowboard.js");
/* harmony import */ var _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/ProxyHandler */ "./assets/js/snowboard/main/ProxyHandler.js");


(function (window) {
  var snowboard = new Proxy(new _main_Snowboard__WEBPACK_IMPORTED_MODULE_0__["default"](), _main_ProxyHandler__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.js"), __webpack_exec__("./assets/js/snowboard/snowboard.request.js"), __webpack_exec__("./assets/js/snowboard/snowboard.backend.extras.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFFO01BQ2xCLElBQU1xWCxRQUFRLEdBQUcsOERBQThEO01BQy9FLElBQU1LLFFBQVEsR0FBR0wsUUFBUSxDQUFDbkosSUFBSSxDQUFDbE8sR0FBRyxDQUFDO01BQ25DLElBQU0yWCxRQUFRLEdBQUdELFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFDNUIsSUFBTXBELE1BQU0sR0FBR29ELFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFFMUIsSUFBSUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDakssT0FBTyxDQUFDaUssUUFBUSxDQUFDL00sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3RFLE1BQU0sSUFBSW5VLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztNQUNoRDtNQUNBLElBQUksQ0FBQzZkLE1BQU0sRUFBRTtRQUNULE1BQU0sSUFBSTdkLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztNQUNoRDtNQUVBLE9BQVF1SixHQUFHLENBQUM2QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQ3hCN0IsR0FBRyxNQUFBL0IsTUFBQSxDQUNBK0IsR0FBRyxNQUFHO0lBQ25CO0VBQUM7RUFBQSxPQUFBNFIsR0FBQTtBQUFBLEVBM0Y0QjllLDREQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXNzZXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXR0YWNoTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL0lubmVyUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9QbHVnaW5Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Byb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhY2tlbmQuZXh0cmFzLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLmJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQucmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvSnNvblBhcnNlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9TYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUmVxdWVzdCBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBBSkFYIGhhbmRsZXIgd2hpY2ggd2lsbCBydW4gdXNpbmcgdGhlIGBmZXRjaCgpYCBtZXRob2QgdGhhdCBpcyBkZWZhdWx0IGluIG1vZGVybiBicm93c2Vycy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFjY2VwdHMgMiBvciAzIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBJZiAyIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSBoYW5kbGVyIG5hbWUgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBwYXJhbWV0ZXIgaXMgdGhlIG9wdGlvbnMuIFRoaXMgYXNzdW1lcyB0aGF0IHRoaXMgaXMgYSBkZXRhY2hlZCBBSkFYIHJlcXVlc3Qgbm90IGNvbm5lY3RlZCB0b1xuICAgICAqIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBJZiAzIHBhcmFtZXRlcnMgYXJlIHByb3ZpZGVkLCB0aGUgZmlyc3QgcGFyYW1ldGVyIGlzIGFuIGVsZW1lbnQgb3IgYSBzZWxlY3RvciwgYW5kIHRoZSBzZWNvbmRcbiAgICAgKiBhbmQgdGhpcmQgcGFyYW1ldGVycyBhcmUgdGhlIGhhbmRsZXIgYW5kIG9wdGlvbnMsIHJlc3BlY3RpdmVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBiZSBhIGhhbmRsZXIgbmFtZS5cbiAgICAgICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGUgcmVxdWVzdCBpcyBiZWluZyBtYWRlIGFnYWluc3Qgbm8gZWxlbWVudCwgYW5kIHRoZSBoYW5kbGVyIHBhcmFtZXRlclxuICAgICAgICAgICAgLy8gd2lsbCBjb250YWluIG9wdGlvbnMuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGhhbmRsZXIgfHwge307XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBlbGVtZW50IHdhcyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBzZWxlY3RvcjogJHtlbGVtZW50fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBtYXRjaGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jaGVja1JlcXVlc3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFNldHVwJywgdGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFNldHVwJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5kb0NsaWVudFZhbGlkYXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5kb0NvbmZpcm0oKS50aGVuKChjb25maXJtZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9BamF4KCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMgZm9yIHRoaXMgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnY29va2llJywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGVsZW1lbnQgYW5kIGhhbmRsZXIgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgY2hlY2tSZXF1ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBlbGVtZW50IHByb3ZpZGVkIG11c3QgYmUgYW4gRWxlbWVudCBpbnN0YW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBBSkFYIGhhbmRsZXIgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSGFuZGxlck5hbWUodGhpcy5oYW5kbGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFKQVggaGFuZGxlciBuYW1lLiBUaGUgY29ycmVjdCBoYW5kbGVyIG5hbWUgZm9ybWF0IGlzOiBcIm9uRXZlbnRcIi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBGZXRjaCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbWFkZSBhdmFpbGFibGUgZm9yIHBsdWdpbnMgdG8gZXh0ZW5kIG9yIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZldGNoKCkgc2V0dGluZ3Mgd2l0aCB0aGVpciBvd24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRGZXRjaCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSAodGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmZldGNoT3B0aW9uc1xuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGZXRjaE9wdGlvbnMnLCB0aGlzLmZldGNoT3B0aW9ucywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB0aGlzLmZldGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGNsaWVudC1zaWRlIHZhbGlkYXRpb24gb24gdGhlIGZvcm0sIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRvQ2xpZW50VmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm93c2VyVmFsaWRhdGUgPT09IHRydWUgJiYgdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgQUpBWCBxdWVyeS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCBmb3Igd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGlzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvQWpheCgpIHtcbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIEFKQVggcmVxdWVzdCBiZWZvcmUgc2VuZGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhCZWZvcmVTZW5kJywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFqYXhQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRGZXRjaCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEubWVzc2FnZSAmJiByZXNwb25zZURhdGEuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS50cmFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IocmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9TVUNDRVNTOiByZXNwb25zZS5zdGF0dXMgIT09IDQwNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1JFU1BPTlNFX0NPREU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwYXJzZSBKU09OIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChyZXNwb25zZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcmV0cmlldmUgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXI6ICR7cmVzcG9uc2VFcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U3RhcnQnLCBhamF4UHJvbWlzZSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhQcm9taXNlJyk7XG4gICAgICAgICAgICBldmVudC5wcm9taXNlID0gYWpheFByb21pc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWpheFByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHVwZGF0aW5nIHRoZSBwYXJ0aWFscyBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogSWYgYW55IHBhcnRpYWxzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBBSkFYIHJlc3BvbnNlLCB0aGlzIG1ldGhvZCB3aWxsIGFsc28gYWN0aW9uIHRoZSBwYXJ0aWFsIHVwZGF0ZXMuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3Qgd2hpY2ggdHJhY2tzIHdoZW4gdGhlIHBhcnRpYWwgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUuYXBwbHkodGhpcywgW3Jlc3BvbnNlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHBhcnRpYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpYWxzID0ge307XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhyZXNwb25zZSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3Vic3RyKDAsIDgpICE9PSAnWF9XSU5URVInKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcnRpYWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfQVNTRVRTKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4QmVmb3JlVXBkYXRlJywgcmVzcG9uc2UsIHRoaXMpO1xuICAgICAgICAgICAgcHJvbWlzZXMudGhlbihcbiAgICAgICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0Fzc2V0cyhyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZShwYXJ0aWFscykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyBmb3IgSFRNTCByZWRyYXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcnRpYWxzIHdpdGggdGhlIGdpdmVuIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFydGlhbHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBkb1VwZGF0ZShwYXJ0aWFscykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkID0gW107XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhcnRpYWxzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtwYXJ0aWFsLCBjb250ZW50XSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gKHRoaXMub3B0aW9ucy51cGRhdGUgJiYgdGhpcy5vcHRpb25zLnVwZGF0ZVtwYXJ0aWFsXSlcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdXG4gICAgICAgICAgICAgICAgICAgIDogcGFydGlhbDtcblxuICAgICAgICAgICAgICAgIGxldCBtb2RlID0gJ3JlcGxhY2UnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnYXBwZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT09ICdeJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ3ByZXBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSAhPT0gJyMnICYmIHNlbGVjdG9yLnN1YnN0cigwLCAxKSAhPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnbm9vcCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmVwZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50ICsgZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vb3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZmZlY3RlZC5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIHVwZGF0ZSBldmVudCBmb3IgZWFjaCBlbGVtZW50IHRoYXQgaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhVcGRhdGUnLCBlbGVtZW50LCBjb250ZW50LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4VXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZUNvbXBsZXRlJywgYWZmZWN0ZWQsIHRoaXMpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0aGUgcmVzcG9uc2UgZGF0YS5cbiAgICAgKlxuICAgICAqIFRoaXMgZmlyZXMgb2ZmIGFsbCBuZWNlc3NhcnkgcHJvY2Vzc2luZyBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSByZXNwb25zZSwgaWUuIGlmIHRoZXJlJ3MgYW55IGZsYXNoXG4gICAgICogbWVzc2FnZXMgdG8gaGFuZGxlLCBvciBhbnkgcmVkaXJlY3RzIHRvIGJlIHVuZGVydGFrZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWNjZXNzICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWNjZXNzKHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciByZXNwb25zZSBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTdWNjZXNzJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4RG9uZScsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2ggJiYgcmVzcG9uc2UuWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZsYXNoTWVzc2FnZXMocmVzcG9uc2UuWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGEgcmVkaXJlY3QgZnJvbSB0aGUgcmVzcG9uc2UsIG9yIHVzZSB0aGUgcmVkaXJlY3QgYXMgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxuICAgICAgICBpZiAodGhpcy5yZWRpcmVjdCB8fCByZXNwb25zZS5YX1dJTlRFUl9SRURJUkVDVCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVkaXJlY3QodGhpcy5yZWRpcmVjdCB8fCByZXNwb25zZS5YX1dJTlRFUl9SRURJUkVDVCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFuIGVycm9yIHJlc3BvbnNlIGZyb20gdGhlIEFKQVggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFRoaXMgZmlyZXMgb2ZmIGFsbCBuZWNlc3NhcnkgcHJvY2Vzc2luZyBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSBlcnJvciByZXNwb25zZSwgaWUuIGlmIHRoZXJlJ3MgYW55IGVycm9yIG9yXG4gICAgICogdmFsaWRhdGlvbiBtZXNzYWdlcyB0byBoYW5kbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxFcnJvcn0gZXJyb3JcbiAgICAgKi9cbiAgICBwcm9jZXNzRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lcnJvciAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yKHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RXJyb3InLCB0aGlzLnJlc3BvbnNlRXJyb3IsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4RmFpbCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRXJyb3IgPSB0aGlzLnJlc3BvbnNlRXJyb3I7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNraXBFcnJvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAgICAgICAgICBpZiAoZXJyb3IuWF9XSU5URVJfRVJST1JfRklFTERTKSB7XG4gICAgICAgICAgICAgICAgc2tpcEVycm9yID0gdGhpcy5wcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSAmJiAhc2tpcEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3JNZXNzYWdlKGVycm9yLlhfV0lOVEVSX0VSUk9SX01FU1NBR0UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhIHJlZGlyZWN0IHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgcmVkaXJlY3QgdGhlIHVzZXIgaW4gdGhlaXIgYnJvd3Nlci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4UmVkaXJlY3RgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5IG9uXG4gICAgICogYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlUmVkaXJlY3RSZXNwb25zZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHJlZGlyZWN0IHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZWRpcmVjdCh1cmwpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IHJlZGlyZWN0IGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBydW4gdGhlIHJlZGlyZWN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVSZWRpcmVjdFJlc3BvbnNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UuYXBwbHkodGhpcywgW3VybF0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSByZWRpcmVjdFxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhSZWRpcmVjdCcsIHVybCwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBBSkFYIHJlcXVlc3QgaXMgZmluaXNoZWQgaWYgd2UncmUgc3RpbGwgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBsb2FkaW5nIGluZGljYXRvciBmb3IgcmVkaXJlY3RzIHRoYXQganVzdCBjaGFuZ2UgdGhlIGhhc2ggdmFsdWUgb2ZcbiAgICAgICAgLy8gdGhlIFVSTCBpbnN0ZWFkIG9mIGxlYXZpbmcgdGhlIHBhZ2Ugd2lsbCBwcm9wZXJseSBzdG9wLlxuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vY3RvYmVyY21zL29jdG9iZXIvaXNzdWVzLzI3ODBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgZXZlbnQuZXZlbnROYW1lID0gJ2FqYXhSZWRpcmVjdGVkJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvY2Vzc29yIHdpbGwgc2ltcGx5IGFsZXJ0IHRoZSB1c2VyIHRocm91Z2ggYSBzaW1wbGUgYGFsZXJ0KClgIGNhbGwuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheEVycm9yTWVzc2FnZWAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVFcnJvck1lc3NhZ2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiBlcnJvciBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzRXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGhhbmRsZXIgZm9yIGVycm9yIG1lc3NhZ2VzLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG8gbm90IHByb2Nlc3MgdGhlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIC8vIGFueSBmdXJ0aGVyLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRXJyb3JNZXNzYWdlLmFwcGx5KHRoaXMsIFttZXNzYWdlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIGVycm9yIG1lc3NhZ2UgYmVpbmcgc2hvd25cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RXJyb3JNZXNzYWdlJywgbWVzc2FnZSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBzaG93IGEgYnJvd3NlciBlcnJvciBtZXNzYWdlXG4gICAgICAgIHdpbmRvdy5hbGVydChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgZmxhc2ggbWVzc2FnZXMgZnJvbSB0aGUgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyBmbGFzaCBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheEZsYXNoTWVzc2FnZXNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlRmxhc2hNZXNzYWdlc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHByb2Nlc3NGbGFzaE1lc3NhZ2VzKG1lc3NhZ2VzKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCBmbGFzaCBoYW5kbGVyLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG9uJ3Qgc2hvdyB0aGUgZmxhc2ggbWVzc2FnZVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVGbGFzaE1lc3NhZ2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMuYXBwbHkodGhpcywgW21lc3NhZ2VzXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGbGFzaE1lc3NhZ2VzJywgbWVzc2FnZXMsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB2YWxpZGF0aW9uIGVycm9ycyBmb3IgZmllbGRzLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdmFsaWRhdGlvbiBlcnJvciBoYW5kbGluZyB3aWxsIG9jY3VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhWYWxpZGF0aW9uRXJyb3JzYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZVZhbGlkYXRpb25FcnJvcnNgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMoZmllbGRzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVZhbGlkYXRpb25FcnJvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycy5hcHBseSh0aGlzLCBbdGhpcy5mb3JtLCBmaWVsZHNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBiZWluZyBoYW5kbGVkXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFZhbGlkYXRpb25FcnJvcnMnLCB0aGlzLmZvcm0sIGZpZWxkcywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYXNzZXRzIHJldHVybmVkIGJ5IGFuIEFKQVggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGFzc2V0IHByb2Nlc3Npbmcgd2lsbCBvY2N1ciBhbmQgdGhpcyB3aWxsIHJldHVybiBhIHJlc29sdmVkIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheExvYWRBc3NldHNgIGV2ZW50LiBUaGlzIGV2ZW50IGlzIGNvbnNpZGVyZWQgYmxvY2tpbmcsIGFuZFxuICAgICAqIGFsbG93cyBhc3NldHMgdG8gYmUgbG9hZGVkIG9yIHByb2Nlc3NlZCBiZWZvcmUgY29udGludWluZyB3aXRoIGFueSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzZXRzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc0Fzc2V0cyhhc3NldHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheExvYWRBc3NldHMnLCBhc3NldHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm1zIHRoZSByZXF1ZXN0IHdpdGggdGhlIHVzZXIgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuIEJ5IGRlZmF1bHQsIGl0IHdpbGwgdXNlIHRoZSBicm93c2VyJ3MgYGNvbmZpcm0oKWAgbWV0aG9kIHRvIHF1ZXJ5IHRoZSB1c2VyIHRvXG4gICAgICogY29uZmlybSB0aGUgYWN0aW9uLiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2Ugd2l0aCBhIGJvb2xlYW4gdmFsdWUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHVzZXIgY29uZmlybWVkXG4gICAgICogb3Igbm90LlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhDb25maXJtTWVzc2FnZWAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVDb25maXJtTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsXG4gICAgICogdGhlIGNvbmZpcm1hdGlvbiBpcyBhc3N1bWVkIHRvIGhhdmUgYmVlbiBkZW5pZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBkb0NvbmZpcm0oKSB7XG4gICAgICAgIC8vIEFsbG93IGZvciBhIGN1c3RvbSBoYW5kbGVyIGZvciB0aGUgY29uZmlybWF0aW9uLCBwZXIgcmVxdWVzdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlQ29uZmlybU1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlQ29uZmlybU1lc3NhZ2UuYXBwbHkodGhpcywgW3RoaXMuY29uZmlybV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBubyBwbHVnaW5zIGhhdmUgY3VzdG9taXNlZCB0aGUgY29uZmlybWF0aW9uLCB1c2UgYSBzaW1wbGUgYnJvd3NlciBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5saXN0ZW5zVG9FdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmNvbmZpcm0odGhpcy5jb25maXJtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBjdXN0b20gcGx1Z2luIGNvbmZpcm1hdGlvbnNcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhDb25maXJtTWVzc2FnZScsIHRoaXMuY29uZmlybSwgdGhpcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGZpbGxlZCA9IGF3YWl0IHByb21pc2VzO1xuICAgICAgICAgICAgaWYgKGZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgb2ZmIGNvbXBsZXRpb24gZXZlbnRzIGZvciB0aGUgUmVxdWVzdC5cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wbGV0ZSAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29tcGxldGUodGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RG9uZScsIHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheEFsd2F5cycpO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZURhdGEgPSB0aGlzLnJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRXJyb3IgPSB0aGlzLnJlc3BvbnNlRXJyb3I7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9mZiB0aGUgZGVzdHJ1Y3RvclxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGhlYWRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsIC8vIEtlZXBzIGNvbXBhdGliaWxpdHkgd2l0aCBqUXVlcnkgQUpBWFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtSEFORExFUic6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgICdYLVdJTlRFUi1SRVFVRVNULVBBUlRJQUxTJzogdGhpcy5leHRyYWN0UGFydGlhbHModGhpcy5vcHRpb25zLnVwZGF0ZSB8fCBbXSksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ1gtV0lOVEVSLVJFUVVFU1QtRkxBU0gnXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy54c3JmVG9rZW4pIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ1gtWFNSRi1UT0tFTiddID0gdGhpcy54c3JmVG9rZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2FkaW5nIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIGdldCByZWRpcmVjdCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMucmVkaXJlY3QgJiYgdGhpcy5vcHRpb25zLnJlZGlyZWN0Lmxlbmd0aCkgPyB0aGlzLm9wdGlvbnMucmVkaXJlY3QgOiBudWxsO1xuICAgIH1cblxuICAgIGdldCBmbGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mbGFzaCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZmlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChGb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZGVidWcoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGZpbGUgdXBsb2FkcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHhzcmZUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmNvb2tpZSgpLmdldCgnWFNSRi1UT0tFTicpO1xuICAgIH1cblxuICAgIGdldCBkYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCcpID8gdGhpcy5vcHRpb25zLmRhdGEgOiB7fTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0gfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uZmlybSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBwYXJ0aWFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGV4dHJhY3RQYXJ0aWFscyh1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVwZGF0ZSkuam9pbignJicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYW4gZXJyb3Igd2l0aCB1c2VmdWwgZGVidWcgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgb3IgcHJvY2Vzc2VkIGNvcnJlY3RseSBkdWUgdG8gYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleGNlcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHJhY2VcbiAgICAgKiBAcmV0dXJucyB7RXJyb3J9XG4gICAgICovXG4gICAgcmVuZGVyRXJyb3IobWVzc2FnZSwgZXhjZXB0aW9uLCBmaWxlLCBsaW5lLCB0cmFjZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgZXJyb3IuZXhjZXB0aW9uID0gZXhjZXB0aW9uIHx8IG51bGw7XG4gICAgICAgIGVycm9yLmZpbGUgPSBmaWxlIHx8IG51bGw7XG4gICAgICAgIGVycm9yLmxpbmUgPSBsaW5lIHx8IG51bGw7XG4gICAgICAgIGVycm9yLnRyYWNlID0gdHJhY2UgfHwgW107XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYSBnaXZlbiBzdHJpbmcgdG8gc2VlIGlmIGl0IGlzIGEgdmFsaWQgQUpBWCBoYW5kbGVyIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gL14oPzpcXHcrOnsyfSk/b25bQS1aMC05XS8udGVzdChuYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFzc2V0IExvYWRlci5cbiAqXG4gKiBQcm92aWRlcyBzaW1wbGUgYXNzZXQgbG9hZGluZyBmdW5jdGlvbmFsaXR5IGZvciBTbm93Ym9hcmQsIG1ha2luZyBpdCBlYXN5IHRvIHByZS1sb2FkIGltYWdlcyBvclxuICogaW5jbHVkZSBKYXZhU2NyaXB0IG9yIENTUyBhc3NldHMgb24gdGhlIGZseS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIGxvYWRlciB3aWxsIGxpc3RlbiB0byBhbnkgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIHJlcXVlc3RlZCB0byBsb2FkIGluIGFuIEFKQVhcbiAqIHJlc3BvbnNlLCBzdWNoIGFzIHJlc3BvbnNlcyBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIFlvdSBjYW4gYWxzbyBsb2FkIGFzc2V0cyBtYW51YWxseSBieSBjYWxsaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGBganNcbiAqIFNub3dib2FyZC5hZGRQbHVnaW4oJ2Fzc2V0TG9hZGVyJywgQXNzZXRMb2FkZXIpO1xuICogU25vd2JvYXJkLmFzc2V0TG9hZGVyKCkucHJvY2Vzc0Fzc2V0cyhhc3NldHMpO1xuICogYGBgXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4TG9hZEFzc2V0czogJ2xvYWQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYW5kIGxvYWQgYXNzZXRzLlxuICAgICAqXG4gICAgICogVGhlIGBhc3NldHNgIHByb3BlcnR5IG9mIHRoaXMgbWV0aG9kIHJlcXVpcmVzIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nIGtleXMgYW5kIGFuXG4gICAgICogYXJyYXkgb2YgcGF0aHM6XG4gICAgICpcbiAgICAgKiAtIGBqc2A6IEFuIGFycmF5IG9mIEphdmFTY3JpcHQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgY3NzYDogQW4gYXJyYXkgb2YgQ1NTIHN0eWxlc2hlZXQgVVJMcyB0byBsb2FkXG4gICAgICogLSBgaW1nYDogQW4gYXJyYXkgb2YgaW1hZ2UgVVJMcyB0byBwcmUtbG9hZFxuICAgICAqXG4gICAgICogQm90aCBganNgIGFuZCBgY3NzYCBmaWxlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQsIGhvd2V2ZXIgYGltZ2AgZmlsZXMgd2lsbCBub3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCByZXF1aXJlZCBhc3NldHMgYXJlIGxvYWRlZC4gSWYgYW5cbiAgICAgKiBhc3NldCBmYWlscyB0byBsb2FkLCB0aGlzIFByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cbiAgICAgKlxuICAgICAqIEVTTGludCAqUkVBTExZKiBkb2Vzbid0IGxpa2UgdGhpcyBjb2RlLCBidXQgaWdub3JlIGl0LiBJdCdzIHRoZSBvbmx5IHdheSBpdCB3b3Jrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKGFzc2V0cykge1xuICAgICAgICBpZiAoYXNzZXRzLmpzICYmIGFzc2V0cy5qcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBhc3NldHMuanMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuY3NzICYmIGFzc2V0cy5jc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBhc3NldHMuY3NzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5pbWcgJiYgYXNzZXRzLmltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGFzc2V0cy5pbWcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBKYXZhU2NyaXB0IFVSTCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc2NyaXB0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2JvZHk+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFNjcmlwdChzY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2NyaXB0IGlzIG5vdCBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7c2NyaXB0fVwiXWApO1xuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzY3JpcHRcbiAgICAgICAgICAgIGNvbnN0IGRvbVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNjcmlwdCk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnc2NyaXB0Jywgc2NyaXB0LCBkb21TY3JpcHQpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHNjcmlwdCBmaWxlOiBcIiR7c2NyaXB0fVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkb21TY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIENTUyBzdHlsZXNoZWV0IGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzdHlsZXNoZWV0IHdpbGwgYmUgYXBwZW5kZWQgYmVmb3JlIHRoZSBjbG9zaW5nIGA8L2hlYWQ+YCB0YWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NyaXB0XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHN0eWxlc2hlZXQgaXMgbm90IGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZj1cIiR7c3R5bGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHN0eWxlc2hlZXRcbiAgICAgICAgICAgIGNvbnN0IGRvbUNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgICBkb21Dc3Muc2V0QXR0cmlidXRlKCdocmVmJywgc3R5bGUpO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9tQ3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdzdHlsZScsIHN0eWxlLCBkb21Dc3MpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIHN0eWxlc2hlZXQgZmlsZTogXCIke3N0eWxlfVwiYCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChkb21Dc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmUtbG9hZHMgYW4gaW1hZ2UuXG4gICAgICpcbiAgICAgKiBUaGUgaW1hZ2Ugd2lsbCBub3QgYmUgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGltYWdlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZEltYWdlKGltYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5sb2FkZWQnLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIuZXJyb3InLCAnaW1hZ2UnLCBpbWFnZSwgaW1nKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBpbWFnZSBmaWxlOiBcIiR7aW1hZ2V9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBbGxvd3MgYXR0YWNoaW5nIGEgbG9hZGluZyBjbGFzcyBvbiBlbGVtZW50cyB0aGF0IGFuIEFKQVggcmVxdWVzdCBpcyB0YXJnZXRpbmcuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGFjaExvYWRpbmcgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgICAgIGFqYXhEb25lOiAnYWpheERvbmUnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWpheERvbmUoZGF0YSwgcmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRFbGVtZW50cyA9IHJlcXVlc3QuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hdHRhY2gtbG9hZGluZ10nKTtcbiAgICAgICAgICAgIGlmIChsb2FkRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5lbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldExvYWRpbmdDbGFzcyhyZXF1ZXN0LmVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExvYWRpbmdDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAoZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gJycpXG4gICAgICAgICAgICA/IGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nXG4gICAgICAgICAgICA6ICd3bi1sb2FkaW5nJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogRGF0YSBjb25maWd1cmF0aW9uIHByb3ZpZGVyLlxuICpcbiAqIFByb3ZpZGVzIGEgbWVjaGFuaXNtIGZvciBwYXNzaW5nIGNvbmZpZ3VyYXRpb24gZGF0YSB0aHJvdWdoIGFuIGVsZW1lbnQncyBkYXRhIGF0dHJpYnV0ZXMuIFRoaXNcbiAqIGlzIGdlbmVyYWxseSB1c2VkIGZvciB3aWRnZXRzIG9yIFVJIGludGVyYWN0aW9ucyB0byBjb25maWd1cmUgdGhlbS5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNvbmZpZyBleHRlbmRzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbG9jYWxDb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoaW5zdGFuY2UsIGVsZW1lbnQsIGxvY2FsQ29uZmlnKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSBTbm93Ym9hcmQgcGx1Z2luIHRvIGVuYWJsZSBkYXRhIGNvbmZpZ3VyYXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhIGNvbmZpZ3VyYXRpb24gY2FuIG9ubHkgYmUgZXh0cmFjdGVkIGZyb20gSFRNTCBlbGVtZW50cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmxvY2FsQ29uZmlnID0gbG9jYWxDb25maWcgfHwge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY29uZmlnIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogSWYgdGhlIGBjb25maWdgIHBhcmFtZXRlciBpcyB1bnNwZWNpZmllZCwgcmV0dXJucyB0aGUgZW50aXJlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnXG4gICAgICovXG4gICAgZ2V0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VDb25maWdbY29uZmlnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUsIGF0IHJ1bnRpbWUsIGFueSBjb25maWd1cmF0aW9uIHZhbHVlIGFzIG5lY2Vzc2FyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBlcnNpc3RcbiAgICAgKi9cbiAgICBzZXQoY29uZmlnLCB2YWx1ZSwgcGVyc2lzdCkge1xuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIGNvbmZpZ3VyYXRpb24ga2V5IHRvIHNldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHBlcnNpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kYXRhc2V0W2NvbmZpZ10gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxDb25maWdbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYWxsb3cgeW91IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgZGF0YSBjb25maWcgb24gYSBET00gbGV2ZWwgYW5kIHJlLWFwcGx5IHRoZW1cbiAgICAgKiB0byB0aGUgY29uZmlnIG9uIHRoZSBKYXZhU2NyaXB0IHNpZGUuXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5hY2NlcHRlZENvbmZpZ3MgPSB0aGlzLmdldEFjY2VwdGVkQ29uZmlncygpO1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnID0gdGhpcy5wcm9jZXNzQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY2FuIGJlIHNldCB0aHJvdWdoIHRoZSBkYXRhIGNvbmZpZy5cbiAgICAgKlxuICAgICAqIElmIGFuIGluc3RhbmNlIGhhcyBhbiBgYWNjZXB0QWxsRGF0YUNvbmZpZ3NgIHByb3BlcnR5LCBzZXQgdG8gYHRydWVgLCB0aGVuIGFsbCBkYXRhXG4gICAgICogYXR0cmlidXRlcyB3aWxsIGJlIGF2YWlsYWJsZSBhcyBjb25maWd1cmF0aW9uIHZhbHVlcy4gVGhpcyBjYW4gYmUgYSBzZWN1cml0eSBjb25jZXJuLCBzb1xuICAgICAqIHRyZWFkIGNhcmVmdWxseS5cbiAgICAgKlxuICAgICAqIE90aGVyd2lzZSwgYXZhaWxhYmxlIGNvbmZpZ3VyYXRpb25zIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB0aGUga2V5cyBhdmFpbGFibGUgaW4gYW4gb2JqZWN0XG4gICAgICogcmV0dXJuZWQgYnkgYSBgZGVmYXVsdHMoKWAgbWV0aG9kIGluIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXXxib29sZWFufVxuICAgICAqL1xuICAgIGdldEFjY2VwdGVkQ29uZmlncygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hY2NlcHRBbGxEYXRhQ29uZmlncyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlZmF1bHRzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpID09PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgYmUgYW4gZW1wdHkgb2JqZWN0IGlmIHRoZSBpbnN0YW5jZSBlaXRoZXIgZG9lcyBub3QgaGF2ZSBhIGBkZWZhdWx0cygpYCBtZXRob2QsIG9yXG4gICAgICogdGhlIG1ldGhvZCBpdHNlbGYgZG9lcyBub3QgcmV0dXJuIGFuIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICpcbiAgICAgKiBMb2FkcyB1cCB0aGUgZGVmYXVsdHMsIHRoZW4gcG9wdWxhdGVzIGl0IHdpdGggYW55IGNvbmZpZ3VyYXRpb24gdmFsdWVzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhXG4gICAgICogYXR0cmlidXRlcywgYmFzZWQgb24gdGhlIHJ1bGVzIG9mIHRoZSBhY2NlcHRlZCBjb25maWd1cmF0aW9ucy5cbiAgICAgKlxuICAgICAqIFRoaXMgY29uZmlndXJhdGlvbiBvYmplY3QgaXMgdGhlbiBjYWNoZWQgYW5kIGF2YWlsYWJsZSB0aHJvdWdoIGBjb25maWcuZ2V0KClgIGNhbGxzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERlZmF1bHRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IHRydWUgfHwgdGhpcy5hY2NlcHRlZENvbmZpZ3MuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb2VyY2VWYWx1ZSh0aGlzLmVsZW1lbnQuZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMubG9jYWxDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmxvY2FsQ29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29lcmNlcyBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgSmF2YVNjcmlwdC5cbiAgICAgKlxuICAgICAqIFRha2VzIHRoZSBzdHJpbmcgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYW5kIGNvZXJjZXMgaXQgaW50byBhIG1vcmUgc3VpdGFibGVcbiAgICAgKiB0eXBlIGZvciBKYXZhU2NyaXB0IHByb2Nlc3NpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29lcmNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIC8vIE51bGwgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5kZWZpbmVkIHZhbHVlXG4gICAgICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXNlNjQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlLnN0YXJ0c1dpdGgoJ2Jhc2U2NDonKSkge1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gc3RyaW5nVmFsdWUucmVwbGFjZSgvXmJhc2U2NDovLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXRvYihiYXNlNjRzdHIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29lcmNlVmFsdWUoZGVjb2RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb29sZWFuIHZhbHVlXG4gICAgICAgIGlmIChbJ3RydWUnLCAneWVzJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChbJ2ZhbHNlJywgJ25vJ10uaW5jbHVkZXMoc3RyaW5nVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE51bWVyaWMgdmFsdWVcbiAgICAgICAgaWYgKC9eWy0rXT9bMC05XSsoXFwuWzAtOV0rKT8kLy50ZXN0KHN0cmluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHJpbmdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKU09OIHZhbHVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuanNvblBhcnNlcigpLnBhcnNlKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmdWYWx1ZSA9PT0gJycpID8gdHJ1ZSA6IHN0cmluZ1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGZsYXNoIG1lc3NhZ2VzIGZvciB0aGUgQ01TLlxuICpcbiAqIEZsYXNoIG1lc3NhZ2VzIHdpbGwgcG9wIHVwIGF0IHRoZSB0b3AgY2VudGVyIG9mIHRoZSBwYWdlIGFuZCB3aWxsIHJlbWFpbiBmb3IgNyBzZWNvbmRzIGJ5IGRlZmF1bHQuIEhvdmVyaW5nIG92ZXJcbiAqIHRoZSBtZXNzYWdlIHdpbGwgcmVzZXQgYW5kIHBhdXNlIHRoZSB0aW1lci4gQ2xpY2tpbmcgb24gdGhlIGZsYXNoIG1lc3NhZ2Ugd2lsbCBkaXNtaXNzIGl0LlxuICpcbiAqIEFyZ3VtZW50czpcbiAqICAtIFwibWVzc2FnZVwiOiBUaGUgY29udGVudCBvZiB0aGUgZmxhc2ggbWVzc2FnZS4gSFRNTCBpcyBhY2NlcHRlZC5cbiAqICAtIFwidHlwZVwiOiBUaGUgdHlwZSBvZiBmbGFzaCBtZXNzYWdlLiBUaGlzIGlzIGFwcGVuZGVkIGFzIGEgY2xhc3MgdG8gdGhlIGZsYXNoIG1lc3NhZ2UgaXRzZWxmLlxuICogIC0gXCJkdXJhdGlvblwiOiBIb3cgbG9uZyB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIHN0YXkgdmlzaWJsZSBmb3IsIGluIHNlY29uZHMuIERlZmF1bHQ6IDcgc2Vjb25kcy5cbiAqXG4gKiBVc2FnZTpcbiAqICAgICAgU25vd2JvYXJkLmZsYXNoKCdUaGlzIGlzIGEgZmxhc2ggbWVzc2FnZScsICdpbmZvJywgOCk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0KG1lc3NhZ2UsIHR5cGUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gTnVtYmVyKGR1cmF0aW9uIHx8IDcpO1xuXG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGbGFzaCBkdXJhdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLCBvciB6ZXJvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5jaWVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsndHJhbnNpdGlvbiddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgZW5zdXJlIHRoZSBmbGFzaCBtZXNzYWdlIGlzIHJlbW92ZWQgYW5kIHRpbWVvdXQgaXMgY2xlYXJlZCBpZiB0aGUgbW9kdWxlIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2hUaW1lcikge1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2gucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2guY3JlYXRlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5mbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmZsYXNoLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCdmbGFzaC1tZXNzYWdlJywgdGhpcy50eXBlKTtcbiAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICB0aGlzLmZsYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmUoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5zdG9wVGltZXIoKSk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnN0YXJ0VGltZXIoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lci5jbGFzc0xpc3QuYWRkKCdmbGFzaC10aW1lcicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoVGltZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5jbGFzc0xpc3QuYWRkKCduby10aW1lcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGJvZHlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZsYXNoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdzaG93JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnZmxhc2gucmVtb3ZlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2gsICdoaWRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGZsYXNoIG1lc3NhZ2VzIGF2YWlsYWJsZSBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IGRpdi5mbGFzaC1tZXNzYWdlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyVHJhbnMgPSB0aGlzLnNub3dib2FyZC50cmFuc2l0aW9uKHRoaXMuZmxhc2hUaW1lciwgJ3RpbWVvdXQnLCBudWxsLCBgJHt0aGlzLmR1cmF0aW9ufS4wc2AsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5kdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgdGltZXIgZm9yIHRoaXMgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyVHJhbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJUcmFucy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzdHJpcGUgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSB0aGF0IGluZGljYXRlcyBsb2FkaW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpcGVMb2FkZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsncmVxdWVzdCddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHk6ICdyZWFkeScsXG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RyaXBlKCk7XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RyaXBlKCkge1xuICAgICAgICB0aGlzLmluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkaW5nLWluZGljYXRvcicsICdsb2FkZWQnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUuY2xhc3NMaXN0LmFkZCgnc3RyaXBlJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlTG9hZGVkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5kaWNhdG9yKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcblxuICAgICAgICBjb25zdCBuZXdTdHJpcGUgPSB0aGlzLnN0cmlwZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKG5ld1N0cmlwZSk7XG4gICAgICAgIHRoaXMuc3RyaXBlLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IG5ld1N0cmlwZTtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIGhpZGUoZm9yY2UpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyIC09IDE7XG5cbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd24tbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbWJlZHMgdGhlIFwiZXh0cmFzXCIgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgbG9hZGVkIHRocm91Z2ggdGhlIHRoZW1lLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNoZWV0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICBsZXQgc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHN0eWxlc2hlZXQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJykuZm9yRWFjaCgoY3NzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzLmhyZWYuZW5kc1dpdGgoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0eWxlc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnNub3dib2FyZC51cmwoKS50bygnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHRyYW5zaXRpb24gc3VwcG9ydCBmb3IgZWxlbWVudHMuXG4gKlxuICogVHJhbnNpdGlvbiBhbGxvd3MgQ1NTIHRyYW5zaXRpb25zIHRvIGJlIGNvbnRyb2xsZWQgYW5kIGNhbGxiYWNrcyB0byBiZSBydW4gb25jZSBjb21wbGV0ZWQuIEl0IHdvcmtzIHNpbWlsYXIgdG8gVnVlXG4gKiB0cmFuc2l0aW9ucyB3aXRoIDMgc3RhZ2VzIG9mIHRyYW5zaXRpb24sIGFuZCBjbGFzc2VzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIHRyYW5zaXRpb24gbmFtZSBzdWZmaXhlZCB3aXRoXG4gKiB0aGUgc3RhZ2Ugb2YgdHJhbnNpdGlvbjpcbiAqXG4gKiAgLSBgaW5gOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24sIHJlbW92ZWQgYWZ0ZXJ3YXJkcy4gVGhpcyBzaG91bGQgYmVcbiAqICAgICAgdXNlZCB0byBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKiAgLSBgYWN0aXZlYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBiZSB1c2VkIHRvIGRlZmluZSB0aGVcbiAqICAgICAgdHJhbnNpdGlvbiBpdHNlbGYuXG4gKiAgLSBgb3V0YDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24gYW5kIGtlcHQgdG8gdGhlIGVuZCBvZiB0aGVcbiAqICAgICAgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgZGVmaW5lIHRoZSBlbmQgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC50cmFuc2l0aW9uKGRvY3VtZW50LmVsZW1lbnQsICd0cmFuc2l0aW9uJywgKCkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZSBlbGVtZW50IGFmdGVyIDcgc2Vjb25kcycpO1xuICogICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAqICAgICAgfSwgJzdzJyk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gdHJhbnNpdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uIFRoZSBuYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCB0aGlzIHByZWZpeGVzIHRoZSBzdGFnZXMgb2YgdHJhbnNpdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gQW4gb3B0aW9uYWwgb3ZlcnJpZGUgb24gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24uIE11c3QgYmUgc3BlY2lmaWVkIGFzICdzJyAoc2Vjcykgb3IgJ21zJyAobXNlY3MpLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJhaWxUbyBJZiB0cnVlLCB0aGUgXCJvdXRcIiBjbGFzcyB3aWxsIHJlbWFpbiBhZnRlciB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCB0cmFuc2l0aW9uLCBjYWxsYmFjaywgZHVyYXRpb24sIHRyYWlsVG8pIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBIVE1MRWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0cmFuc2l0aW9uaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zaXRpb24gbmFtZSBtdXN0IGJlIHNwZWNpZmllZCBhcyBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbFRvID0gKHRyYWlsVG8gPT09IHRydWUpO1xuXG4gICAgICAgIHRoaXMuZG9UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBldmVudCBjbGFzc2VzIHRvIHRoZSBnaXZlbiB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGV2ZW50Q2xhc3NlcyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgIGluOiBgJHt0aGlzLnRyYW5zaXRpb259LWluYCxcbiAgICAgICAgICAgIGFjdGl2ZTogYCR7dGhpcy50cmFuc2l0aW9ufS1hY3RpdmVgLFxuICAgICAgICAgICAgb3V0OiBgJHt0aGlzLnRyYW5zaXRpb259LW91dGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudENsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0dXJuQ2xhc3NlcyA9IFtdO1xuICAgICAgICBPYmplY3QuZW50cmllcyhldmVudENsYXNzZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybkNsYXNzZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5DbGFzc2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZG9UcmFuc2l0aW9uKCkge1xuICAgICAgICAvLyBBZGQgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBTdGFydCB0cmFuc2l0aW9uIC0gc2hvdyBcImluXCIgYW5kIFwiYWN0aXZlXCIgY2xhc3Nlc1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnaW4nLCAnYWN0aXZlJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGEgdHJhbnNpdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gIT09ICcwcycpIHtcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGVuZFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQoKSwge1xuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmV2ZW50Q2xhc3NlcygnaW4nKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXZlbnRDbGFzc2VzKCdvdXQnKVswXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdHJhbnNpdGlvbiBlbmRzLCB0aGUgaW5zdGFuY2Ugb2YgdGhlIHRyYW5zaXRpb24gaXMgYXV0b21hdGljYWxseSBkZXN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnYWN0aXZlJywgKCF0aGlzLnRyYWlsVG8pID8gJ291dCcgOiAnJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbHMgYSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2xhc3NlcywgcmVtb3ZpbmcgYW55IHRyYW5zaXRpb24gY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlc2V0Q2xhc3NlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZ2l2ZW4gZHVyYXRpb24gYW5kIGNvbnZlcnRzIGl0IHRvIGEgXCJtc1wiIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IC9eKFswLTldKyhcXC5bMC05XSspPykobT9zKT8kLy5leGVjKGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gTnVtYmVyKHBhcnNlZFsxXSk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAocGFyc2VkWzNdID09PSAncycpXG4gICAgICAgICAgICA/ICdzZWMnXG4gICAgICAgICAgICA6ICdtc2VjJztcblxuICAgICAgICByZXR1cm4gKHVuaXQgPT09ICdzZWMnKVxuICAgICAgICAgICAgPyBgJHthbW91bnQgKiAxMDAwfW1zYFxuICAgICAgICAgICAgOiBgJHtNYXRoLmZsb29yKGFtb3VudCl9bXNgO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSW50ZXJuYWwgcHJveHkgZm9yIFNub3dib2FyZC5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgd3JhcHMgdGhlIFNub3dib2FyZCBpbnN0YW5jZSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb2YgcGx1Z2luIGluc3RhbmNlcy5cbiAqIEl0IHByZXZlbnRzIGFjY2VzcyB0byB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKiAgLSBgYXR0YWNoQWJzdHJhY3RzYDogTm8gbmVlZCB0byBhdHRhY2ggYWJzdHJhY3RzIGFnYWluLlxuICogIC0gYGxvYWRVdGlsdGllc2A6IE5vIG5lZWQgdG8gbG9hZCB1dGlsaXRpZXMgYWdhaW4uXG4gKiAgLSBgaW5pdGlhbGlzZWA6IFNub3dib2FyZCBpcyBhbHJlYWR5IGluaXRpYWxpc2VkLlxuICogIC0gYGluaXRpYWxpc2VTaW5nbGV0b25zYDogU2luZ2xldG9ucyBhcmUgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnYXR0YWNoQWJzdHJhY3RzJywgJ2xvYWRVdGlsaXRpZXMnLCAnaW5pdGlhbGlzZScsICdpbml0aWFsaXNlU2luZ2xldG9ucyddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2Fubm90IHVzZSB0aGUgXCIke3Byb3B9XCIgU25vd2JvYXJkIG1ldGhvZCB3aXRoaW4gYSBwbHVnaW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IElubmVyUHJveHlIYW5kbGVyIGZyb20gJy4vSW5uZXJQcm94eUhhbmRsZXInO1xuXG4vKipcbiAqIFBsdWdpbiBsb2FkZXIgY2xhc3MuXG4gKlxuICogVGhpcyBpcyBhIHByb3ZpZGVyIChmYWN0b3J5KSBjbGFzcyBmb3IgYSBzaW5nbGUgcGx1Z2luIGFuZCBwcm92aWRlcyB0aGUgbGluayBiZXR3ZWVuIFNub3dib2FyZCBmcmFtZXdvcmsgZnVuY3Rpb25hbGl0eVxuICogYW5kIHRoZSB1bmRlcmx5aW5nIHBsdWdpbiBpbnN0YW5jZXMuIEl0IGFsc28gcHJvdmlkZXMgc29tZSBiYXNpYyBtb2NraW5nIG9mIHBsdWdpbiBtZXRob2RzIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5Mb2FkZXIge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQmluZHMgdGhlIFdpbnRlciBmcmFtZXdvcmsgdG8gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNub3dib2FyZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgICAgICBzbm93Ym9hcmQsXG4gICAgICAgICAgICBJbm5lclByb3h5SGFuZGxlcixcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG4gICAgICAgIC8vIEZyZWV6ZSBpbnN0YW5jZSB0aGF0IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhpcyBsb2FkZXJcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IHtcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIGV4dGVuc2lvbiBvZiB0aGUgc2luZ2xldG9uIHN0YXR1cyBvYmplY3RcbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5zaW5nbGV0b24pO1xuXG4gICAgICAgIHRoaXMubW9ja3MgPSB7fTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgICAgIC8vIEZyZWV6ZSBsb2FkZXIgaXRzZWxmXG4gICAgICAgIE9iamVjdC5mcmVlemUoUGx1Z2luTG9hZGVyLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGEgc3BlY2lmaWMgbWV0aG9kIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc01ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPT09ICdmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgcHJvdG90eXBlIG1ldGhvZCBmb3IgYSBwbHVnaW4uIFRoaXMgc2hvdWxkIGdlbmVyYWxseSBiZSB1c2VkIGZvciBcInN0YXRpY1wiIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gey4uLn0gYXJnc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgY2FsbE1ldGhvZCguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0gcGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0oYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgaXMgYSBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW4sIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIC0gSWYgdGhpcyBpcyBhIHNpbmdsZXRvbiwgdGhlIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luQmFzZXxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICBjb25zdCB1bm1ldCA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCkuZmlsdGVyKChpdGVtKSA9PiAhdGhpcy5zbm93Ym9hcmQuZ2V0UGx1Z2luTmFtZXMoKS5pbmNsdWRlcyhpdGVtKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIiR7dGhpcy5uYW1lfVwiIHBsdWdpbiByZXF1aXJlcyB0aGUgZm9sbG93aW5nIHBsdWdpbnM6ICR7dW5tZXQuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yaWdpbmFsRnVuY3Rpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbXMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RzIHRvIHByb3RvdHlwZVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2NrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCBhbiBlbXB0eSBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2VbXX1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgc2ltcGxlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbmdsZXRvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2luZ2xldG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTaW5nbGV0b24gPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHNpbmdsZXRvbiBoYXMgYmVlbiBpbml0aWFsaXNlZC5cbiAgICAgKlxuICAgICAqIE5vcm1hbCBwbHVnaW5zIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uLmluaXRpYWxpc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuaW5zdGFuY2UodGhpcy5zbm93Ym9hcmQsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICBuZXdJbnN0YW5jZS5kZXRhY2ggPSAoKSA9PiB0aGlzLmluc3RhbmNlcy5zcGxpY2UodGhpcy5pbnN0YW5jZXMuaW5kZXhPZihuZXdJbnN0YW5jZSksIDEpO1xuICAgICAgICBuZXdJbnN0YW5jZS5jb25zdHJ1Y3QoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2gobmV3SW5zdGFuY2UpO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVwZW5kZW5jaWVzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gZGVwZW5kZW5jeSBtZXRob2Qgc3BlY2lmaWVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcygpLm1hcCgoaXRlbSkgPT4gaXRlbS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBoYXMgYWxsIGl0cyBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICAgIGxldCBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmhhc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgZnVsZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdWxmaWxsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIGEgbWV0aG9kIG9mIGFuIGluc3RhbmNlIHRvIGJlIG1vY2tlZCBmb3IgdGVzdGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgbW9jayB3aWxsIGJlIGFwcGxpZWQgZm9yIHRoZSBsaWZlIG9mIGFuIGluc3RhbmNlLiBGb3Igc2luZ2xldG9ucywgdGhlIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZVxuICAgICAqIG9mIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogTW9ja3MgY2Fubm90IGJlIGFwcGxpZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBtb2NrKG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBcIiR7bWV0aG9kTmFtZX1cIiBkb2VzIG5vdCBleGlzdCBhbmQgY2Fubm90IGJlIG1vY2tlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdID0gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSAmJiB0aGlzLmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbWV0ZXJzKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBtb2NrIGNhbGxiYWNrIGZyb20gZnV0dXJlIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICovXG4gICAgdW5tb2NrKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1vY2tzW21ldGhvZE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiBSZWZsZWN0LmdldCh0YXJnZXQsICdwbHVnaW5zJylbcHJvcExvd2VyXS5nZXRJbnN0YW5jZSguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG5cbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IFBsdWdpbkxvYWRlciBmcm9tICcuL1BsdWdpbkxvYWRlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbGl0aWVzL0Nvb2tpZSc7XG5pbXBvcnQgSnNvblBhcnNlciBmcm9tICcuLi91dGlsaXRpZXMvSnNvblBhcnNlcic7XG5pbXBvcnQgU2FuaXRpemVyIGZyb20gJy4uL3V0aWxpdGllcy9TYW5pdGl6ZXInO1xuaW1wb3J0IFVybCBmcm9tICcuLi91dGlsaXRpZXMvVXJsJztcblxuLyoqXG4gKiBTbm93Ym9hcmQgLSB0aGUgV2ludGVyIEphdmFTY3JpcHQgZnJhbWV3b3JrLlxuICpcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgYmFzZSBvZiBhIG1vZGVybiB0YWtlIG9uIHRoZSBXaW50ZXIgSlMgZnJhbWV3b3JrLCBiZWluZyBmdWxseSBleHRlbnNpYmxlIGFuZCB0YWtpbmcgYWR2YW50YWdlXG4gKiBvZiBtb2Rlcm4gSmF2YVNjcmlwdCBmZWF0dXJlcyBieSBsZXZlcmFnaW5nIHRoZSBMYXJhdmVsIE1peCBjb21waWxhdGlvbiBmcmFtZXdvcmsuIEl0IGFsc28gaXMgY29kZWQgdXAgdG8gcmVtb3ZlIHRoZVxuICogZGVwZW5kZW5jeSBvZiBqUXVlcnkuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAbGluayBodHRwczovL3dpbnRlcmNtcy5jb20vZG9jcy9zbm93Ym9hcmQvaW50cm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dib2FyZCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9TaW5nbGV0b25zIEF1dG9tYXRpY2FsbHkgbG9hZCBzaW5nbGV0b25zIHdoZW4gRE9NIGlzIHJlYWR5LiBEZWZhdWx0OiBgdHJ1ZWAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWJ1ZyBXaGV0aGVyIGRlYnVnZ2luZyBsb2dzIHNob3VsZCBiZSBzaG93bi4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRvU2luZ2xldG9ucywgZGVidWcpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z0VuYWJsZWQgPSAodHlwZW9mIGRlYnVnID09PSAnYm9vbGVhbicgJiYgZGVidWcgPT09IHRydWUpO1xuICAgICAgICB0aGlzLmF1dG9Jbml0U2luZ2xldG9ucyA9ICh0eXBlb2YgYXV0b1NpbmdsZXRvbnMgPT09ICdib29sZWFuJyAmJiBhdXRvU2luZ2xldG9ucyA9PT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWRpbmVzcyA9IHtcbiAgICAgICAgICAgIGRvbTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNlYWwgcmVhZGluZXNzIGZyb20gYmVpbmcgYWRkZWQgdG8gZnVydGhlciwgYnV0IGFsbG93IHRoZSBwcm9wZXJ0aWVzIHRvIGJlIG1vZGlmaWVkLlxuICAgICAgICBPYmplY3Quc2VhbCh0aGlzLnJlYWRpbmVzcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoQWJzdHJhY3RzKCk7XG5cbiAgICAgICAgLy8gRnJlZXplIHRoZSBTbm93Ym9hcmQgY2xhc3MgdG8gcHJldmVudCBmdXJ0aGVyIG1vZGlmaWNhdGlvbnMuXG4gICAgICAgIE9iamVjdC5mcmVlemUoU25vd2JvYXJkLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkVXRpbGl0aWVzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoJ1Nub3dib2FyZCBmcmFtZXdvcmsgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhYnN0cmFjdCBjbGFzc2VzIGFzIHByb3BlcnRpZXMgb2YgdGhlIFNub3dib2FyZCBjbGFzcy5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyBKYXZhc2NyaXB0IGZ1bmN0aW9uYWxpdHkgd2l0aCBubyBidWlsZCBwcm9jZXNzIHRvIHN0aWxsIGV4dGVuZCB0aGVzZSBhYnN0cmFjdHMgYnkgcHJlZml4aW5nXG4gICAgICogdGhlbSB3aXRoIFwiU25vd2JvYXJkXCIuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjbGFzcyBNeUNsYXNzIGV4dGVuZHMgU25vd2JvYXJkLlBsdWdpbkJhc2Uge1xuICAgICAqICAgICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYXR0YWNoQWJzdHJhY3RzKCkge1xuICAgICAgICB0aGlzLlBsdWdpbkJhc2UgPSBQbHVnaW5CYXNlO1xuICAgICAgICB0aGlzLlNpbmdsZXRvbiA9IFNpbmdsZXRvbjtcblxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZS5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24ucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlNpbmdsZXRvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGRlZmF1bHQgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIGxvYWRVdGlsaXRpZXMoKSB7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdjb29raWUnLCBDb29raWUpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignanNvblBhcnNlcicsIEpzb25QYXJzZXIpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignc2FuaXRpemVyJywgU2FuaXRpemVyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3VybCcsIFVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIEF0dGFjaGVzIGEgbGlzdGVuZXIgZm9yIHRoZSBET00gYmVpbmcgcmVhZHkgYW5kIHRyaWdnZXJzIGEgZ2xvYmFsIFwicmVhZHlcIiBldmVudCBmb3IgcGx1Z2lucyB0byBiZWdpbiBhdHRhY2hpbmdcbiAgICAgKiB0aGVtc2VsdmVzIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsb2JhbEV2ZW50KCdyZWFkeScpO1xuICAgICAgICAgICAgdGhpcy5yZWFkaW5lc3MuZG9tID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYW4gaW5zdGFuY2Ugb2YgZXZlcnkgc2luZ2xldG9uLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2VTaW5nbGV0b25zKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucGx1Z2lucykuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsdWdpbiB0byB0aGUgZnJhbWV3b3JrLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBhcmUgdGhlIGNvcm5lcnN0b25lIGZvciBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgZm9yIFNub3dib2FyZC4gQSBwbHVnaW4gbXVzdCBlaXRoZXIgYmUgYW4gRVMyMDE1IGNsYXNzXG4gICAgICogdGhhdCBleHRlbmRzIHRoZSBQbHVnaW5CYXNlIG9yIFNpbmdsZXRvbiBhYnN0cmFjdCBjbGFzc2VzLCBvciBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBwbHVnaW4gaXMgYWRkZWQsIGl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYXMgYSBuZXcgbWFnaWMgbWV0aG9kIGluIHRoZSBTbm93Ym9hcmQgY2xhc3MgdXNpbmcgdGhlIG5hbWVcbiAgICAgKiBwYXJhbWV0ZXIsIGFuZCBjYW4gYmUgY2FsbGVkIHZpYSB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgYmUgdGhlIFwibG93ZXJjYXNlXCIgdmVyc2lvbiBvZiB0aGlzIG5hbWUuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYSBwbHVnaW4gaXMgYXNzaWduZWQgdG8gdGhlIG5hbWUgXCJteVBsdWdpblwiLCBpdCBjYW4gYmUgY2FsbGVkIHZpYSBgU25vd2JvYXJkLm15cGx1Z2luKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V8RnVuY3Rpb259IGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGx1Z2luKG5hbWUsIGluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIHBsdWdpbiBjYWxsZWQgXCIke25hbWV9XCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZSAhPT0gJ2Z1bmN0aW9uJyAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBwbHVnaW4gbXVzdCBleHRlbmQgdGhlIFBsdWdpbkJhc2UgY2xhc3MsIG9yIG11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzW25hbWVdICE9PSB1bmRlZmluZWQgfHwgdGhpc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdpdmVuIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgZm9yIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSA9IG5ldyBQbHVnaW5Mb2FkZXIobG93ZXJOYW1lLCB0aGlzLCBpbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlZ2lzdGVyZWRgKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgc2luZ2xldG9ucyBub3cgaGF2ZSB0aGVpciBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLCBhbmQgZmlyZSB0aGVpciBcInJlYWR5XCIgaGFuZGxlciBpZiB3ZSdyZVxuICAgICAgICAvLyBpbiBhIHJlYWR5IHN0YXRlLlxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2V0UGx1Z2lucygpKS5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbHVnaW4uaXNTaW5nbGV0b24oKVxuICAgICAgICAgICAgICAgICYmICFwbHVnaW4uaXNJbml0aWFsaXNlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpXG4gICAgICAgICAgICAgICAgJiYgT2JqZWN0LmtleXMocGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKSkuaW5jbHVkZXMoJ3JlYWR5JylcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnJlYWRpbmVzcy5kb21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5TWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKS5yZWFkeTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uY2FsbE1ldGhvZChyZWFkeU1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luIGZyb20gU25vd2JvYXJkLCBjYWxsaW5nIHRoZSBkZXN0cnVjdG9yIG1ldGhvZCBmb3IgYWxsIGFjdGl2ZSBpbnN0YW5jZXMgb2YgdGhlIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIGFscmVhZHkgcmVtb3ZlZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9ycyBmb3IgYWxsIGluc3RhbmNlc1xuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXS5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgcmVtb3ZlZGApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZCBhbmQgaXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQSBwbHVnaW4gdGhhdCBpcyBzdGlsbCB3YWl0aW5nIGZvciBkZXBlbmRlbmNpZXMgdG8gYmUgcmVnaXN0ZXJlZCB3aWxsIG5vdCBiZSBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1BsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMucGx1Z2luc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zIGFzIFBsdWdpbkxvYWRlciBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcltdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiByZWdpc3RlcmVkIHBsdWdpbnMsIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0UGx1Z2luTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBsdWdpbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQbHVnaW5Mb2FkZXIgb2JqZWN0IG9mIGEgZ2l2ZW4gcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcn1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsdWdpbiBjYWxsZWQgXCIke2xvd2VyTmFtZX1cIiBoYXMgYmVlbiByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCBwbHVnaW5zIHRoYXQgbGlzdGVuIHRvIHRoZSBnaXZlbiBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBwcm9taXNlIGV2ZW50cy4gSXQgZG9lcyBOT1QgY2hlY2sgdGhhdCB0aGUgcGx1Z2luJ3MgbGlzdGVuZXIgYWN0dWFsbHkgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gVGhlIG5hbWUgb2YgdGhlIHBsdWdpbnMgdGhhdCBhcmUgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICovXG4gICAgbGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgcGx1Z2luXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwbHVnaW4uaGFzTWV0aG9kKCdsaXN0ZW5zJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2ltcGxlIHJlYWR5IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogU3lub255bW91cyB3aXRoIGpRdWVyeSdzIFwiJChkb2N1bWVudCkucmVhZHkoKVwiIGZ1bmN0aW9uYWxpdHksIHRoaXMgYWxsb3dzIGlubGluZSBzY3JpcHRzIHRvXG4gICAgICogYXR0YWNoIHRoZW1zZWx2ZXMgdG8gU25vd2JvYXJkIGltbWVkaWF0ZWx5IGJ1dCBvbmx5IGZpcmUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5yZWFkaW5lc3MuZG9tKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbigncmVhZHknLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBhZC1ob2Mgc2NyaXB0cyB0aGF0IGRvbid0IG5lZWQgYSBmdWxsIHBsdWdpbi4gVGhlIGdpdmVuIGNhbGxiYWNrIHdpbGwgYmVcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgbmFtZSBwcm92aWRlZCBmaXJlcy4gVGhpcyB3b3JrcyBmb3IgYm90aCBub3JtYWwgYW5kIFByb21pc2UgZXZlbnRzLiBGb3JcbiAgICAgKiBhIFByb21pc2UgZXZlbnQsIHlvdXIgY2FsbGJhY2sgbXVzdCByZXR1cm4gYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmNsdWRlcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgc2ltcGxlIGxpc3RlbmVyIGZvciBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBnbG9iYWwgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIElmIGFueSBwbHVnaW4gcmV0dXJucyBhIGBmYWxzZWAsIHRoZSBldmVudCBpcyBjb25zaWRlcmVkIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgZXZlbnQgd2FzIG5vdCBjYW5jZWxsZWRcbiAgICAgKi9cbiAgICBnbG9iYWxFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImAsIC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgIC8vIEZpbmQgcGx1Z2lucyBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiOiAke2xpc3RlbmVycy5qb2luKCcsICcpfWApO1xuXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwbHVnaW4gaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgcGx1Z2lucyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgXCIke2xpc3Rlbk1ldGhvZH1cIiBtZXRob2QgaW4gXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIiBjYW5jZWxsZWQgYnkgXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudC5cbiAgICAgICAgaWYgKCFjYW5jZWxsZWQgJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYEZvdW5kICR7dGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGh9IGFkLWhvYyBsaXN0ZW5lcihzKSBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbGlzdGVuZXIgaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgbGlzdGVuZXJzIGFyZSBjb25zaWRlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX0gY2FuY2VsbGVkIGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhY2FuY2VsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMsIGV4cGVjdGluZyBhIFByb21pc2UgdG8gYmUgcmV0dXJuZWQgYnkgYWxsLlxuICAgICAqXG4gICAgICogVGhpcyBjb2xsYXRlcyBhbGwgcGx1Z2lucyByZXNwb25zZXMgaW50byBvbmUgbGFyZ2UgUHJvbWlzZSB0aGF0IGVpdGhlciBleHBlY3RzIGFsbCB0byBiZSByZXNvbHZlZCwgb3Igb25lIHRvIHJlamVjdC5cbiAgICAgKiBJZiBubyBsaXN0ZW5lcnMgYXJlIGZvdW5kLCBhIHJlc29sdmVkIFByb21pc2UgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICovXG4gICAgZ2xvYmFsUHJvbWlzZUV2ZW50KGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmRlYnVnKGBDYWxsaW5nIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYE5vIGxpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcoYExpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmdldEluc3RhbmNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3Rlbk1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJylbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIG1ldGhvZHMgZm9yIGFsbCBwbHVnaW5zLCBpZiB0aGV5IGhhdmUgYSBtZXRob2Qgc3BlY2lmaWVkIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgICBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VQcm9taXNlID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbmNlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgcHJvbWlzZSBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyUHJvbWlzZSA9IGxpc3RlbmVyKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobGlzdGVuZXJQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgc3R5bGVkIG1lc3NhZ2UgaW4gdGhlIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBJbmNsdWRlcyBwYXJhbWV0ZXJzIGFuZCBhIHN0YWNrIHRyYWNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgbG9nTWVzc2FnZShjb2xvciwgYm9sZCwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgJyVjW1Nub3dib2FyZF0nLFxuICAgICAgICAgICAgYGNvbG9yOiAke2NvbG9yfTsgZm9udC13ZWlnaHQ6ICR7KGJvbGQpID8gJ2JvbGQnIDogJ25vcm1hbCd9O2AsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgICBgJWNQYXJhbWV0ZXJzICVjKCR7cGFyYW1ldGVycy5sZW5ndGh9KWAsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgICAgICAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aW5kZXh9OmAsICdjb2xvcjogcmdiKDg4LCA4OCwgODgpOyBmb250LXdlaWdodDogbm9ybWFsOycsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCclY1RyYWNlJywgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgZGVidWcgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIFRoZXNlIG1lc3NhZ2VzIGFyZSBvbmx5IHNob3duIHdoZW4gZGVidWdnaW5nIGlzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWJ1Z0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYigyMjksIDM1LCAzNSknLCB0cnVlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRmxhc2ggZnJvbSAnLi9leHRyYXMvRmxhc2gnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9leHRyYXMvVHJhbnNpdGlvbic7XG5pbXBvcnQgQXR0YWNoTG9hZGluZyBmcm9tICcuL2V4dHJhcy9BdHRhY2hMb2FkaW5nJztcbmltcG9ydCBTdHJpcGVMb2FkZXIgZnJvbSAnLi9leHRyYXMvU3RyaXBlTG9hZGVyJztcbmltcG9ydCBTdHlsZXNoZWV0TG9hZGVyIGZyb20gJy4vZXh0cmFzL1N0eWxlc2hlZXRMb2FkZXInO1xuaW1wb3J0IEFzc2V0TG9hZGVyIGZyb20gJy4vZXh0cmFzL0Fzc2V0TG9hZGVyJztcbmltcG9ydCBEYXRhQ29uZmlnIGZyb20gJy4vZXh0cmFzL0RhdGFDb25maWcnO1xuXG5pZiAod2luZG93LlNub3dib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTbm93Ym9hcmQgbXVzdCBiZSBsb2FkZWQgaW4gb3JkZXIgdG8gdXNlIHRoZSBleHRyYSBwbHVnaW5zLicpO1xufVxuXG4oKFNub3dib2FyZCkgPT4ge1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2Fzc2V0TG9hZGVyJywgQXNzZXRMb2FkZXIpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2RhdGFDb25maWcnLCBEYXRhQ29uZmlnKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdleHRyYXNTdHlsZXMnLCBTdHlsZXNoZWV0TG9hZGVyKTtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCd0cmFuc2l0aW9uJywgVHJhbnNpdGlvbik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignZmxhc2gnLCBGbGFzaCk7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYXR0YWNoTG9hZGluZycsIEF0dGFjaExvYWRpbmcpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3N0cmlwZUxvYWRlcicsIFN0cmlwZUxvYWRlcik7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiIsImltcG9ydCBTbm93Ym9hcmQgZnJvbSAnLi9tYWluL1Nub3dib2FyZCc7XG5pbXBvcnQgUHJveHlIYW5kbGVyIGZyb20gJy4vbWFpbi9Qcm94eUhhbmRsZXInO1xuXG4oKHdpbmRvdykgPT4ge1xuICAgIGNvbnN0IHNub3dib2FyZCA9IG5ldyBQcm94eShcbiAgICAgICAgbmV3IFNub3dib2FyZCgpLFxuICAgICAgICBQcm94eUhhbmRsZXIsXG4gICAgKTtcblxuICAgIC8vIENvdmVyIGFsbCBhbGlhc2VzXG4gICAgd2luZG93LnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Qm9hcmQgPSBzbm93Ym9hcmQ7XG59KSh3aW5kb3cpO1xuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9hamF4L1JlcXVlc3QnO1xuXG5pZiAod2luZG93LlNub3dib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTbm93Ym9hcmQgbXVzdCBiZSBsb2FkZWQgaW4gb3JkZXIgdG8gdXNlIHRoZSBKYXZhc2NyaXB0IEFKQVggcmVxdWVzdCBmZWF0dXJlLicpO1xufVxuXG4oKFNub3dib2FyZCkgPT4ge1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ3JlcXVlc3QnLCBSZXF1ZXN0KTtcbn0pKHdpbmRvdy5Tbm93Ym9hcmQpO1xuIiwiaW1wb3J0IEJhc2VDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogQ29va2llIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IGlzIGEgdGhpbiB3cmFwcGVyIGFyb3VuZCB0aGUgXCJqcy1jb29raWVcIiBsaWJyYXJ5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBkb21haW46IG51bGwsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdMYXgnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycyBmb3IgYWxsIHN1YnNlcXVlbnQgXCJzZXRcIiBhbmQgXCJyZW1vdmVcIiBjYWxscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb2tpZSBkZWZhdWx0cyBtdXN0IGJlIHByb3ZpZGVkIGFzIGFuIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldERlZmF1bHRzKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZGVmYXVsdHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogSWYgYG5hbWVgIGlzIHVuZGVmaW5lZCwgcmV0dXJucyBhbGwgY29va2llcyBhcyBhbiBPYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICAgICAqL1xuICAgIGdldChuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBCYXNlQ29va2llLmdldCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb29raWVzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb29raWVOYW1lLCBjb29raWVWYWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgY29va2llTmFtZSwgY29va2llVmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzW2Nvb2tpZU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSBCYXNlQ29va2llLmdldChuYW1lKTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSBnb3R0ZW4gdmFsdWVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB0aHJvdWdoIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNhdmVWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIHZhbHVlIHRvIHNhdmVcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5zZXQnLCBuYW1lLCB2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzYXZlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEJhc2VDb29raWUuc2V0KG5hbWUsIHNhdmVWYWx1ZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhlIGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdmlhIHRoZSBcIm9wdGlvbnNcIiBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgQmFzZUNvb2tpZS5yZW1vdmUobmFtZSwge1xuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0cygpLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBKU09OIFBhcnNlciB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwYXJzZXMgSlNPTi1saWtlIGRhdGEgdGhhdCBkb2VzIG5vdCBzdHJpY3RseSBtZWV0IHRoZSBKU09OIHNwZWNpZmljYXRpb25zIGluIG9yZGVyIHRvIHNpbXBsaWZ5IGRldmVsb3BtZW50LlxuICogSXQgaXMgYSBzYWZlIHJlcGxhY2VtZW50IGZvciBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2YWwoXCIoe1wiICsgdmFsdWUgKyBcIn0pXCIpKSkgdGhhdCBkb2VzIG5vdCByZXF1aXJlIHRoZSB1c2Ugb2YgZXZhbCgpXG4gKlxuICogQGF1dGhvciBBeXVtaSBIYW1hc2FraVxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9wdWxsLzQ1MjdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblBhcnNlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25KU09OID0gKGpzb24pID0+IHRoaXMucGFyc2UoanNvbik7XG4gICAgICAgIHdpbmRvdy5vY0pTT04gPSB3aW5kb3cud25KU09OO1xuICAgIH1cblxuICAgIHBhcnNlKHN0cikge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gdGhpcy5wYXJzZVN0cmluZyhzdHIpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgc3RyID0gdmFsdWUudHJpbSgpO1xuXG4gICAgICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm9rZW4gSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCB0eXBlID0gbnVsbDtcbiAgICAgICAgbGV0IGtleSA9IG51bGw7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiB0aGUgbWlzdGFrZSAnLCdcbiAgICAgICAgKi9cbiAgICAgICAgd2hpbGUgKHN0ciAmJiBzdHJbMF0gPT09ICcsJykge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdcIicgfHwgc3RyWzBdID09PSAnXFwnJykge1xuICAgICAgICAgICAgaWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gIT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkgPSAnXCInO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0clswXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1xcXFxcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBib29sZWFuXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICd0cnVlJyB8fCBzdHIgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bGxcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudW1iZXJcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cik7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgIGtleSA9IG51bGw7XG4gICAgICAgICAgICByZXN1bHQgPSAneyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCbGFua0NoYXIoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgKHN0cltpXSA9PT0gJ1wiJyB8fCBzdHJbaV0gPT09ICdcXCcnKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSArIDEsIHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBgXCIke2tleX1cImA7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiB0aGlzLmNhbkJlS2V5SGVhZChzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyS2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlcktleScgJiYgc3RyW2ldID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICc6JztcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICc6JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScgfHwgdHlwZSA9PT0gJ25lZWRLZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltsYXN0XSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2xhc3RdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbbGFzdF0gPT09ICd9JyAmJiBsYXN0ID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICd9JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3QgIT09IGkgJiYgcmVzdWx0ICE9PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGxhc3QgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG9iamVjdCBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnWycpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICdbJztcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnXFxuJyB8fCBzdHJbaV0gPT09ICdcXHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduZWVkQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVhbCB3aXRoIG1pc3Rha2UgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbaSArIDFdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYXJyYXkgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBnZXRCb2R5KHN0ciwgcG9zKSB7XG4gICAgICAgIGxldCBib2R5ID0gJyc7XG5cbiAgICAgICAgLy8gcGFyc2Ugc3RyaW5nIGJvZHlcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnXCInIHx8IHN0cltwb3NdID09PSAnXFwnJykge1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyW3Bvc10pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzdHJpbmcgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIHRydWUgLyBmYWxzZVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd0Jykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCd0cnVlJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAndHJ1ZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ2YnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ2YnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdmYWxzZScubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bGxcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnbicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignbnVsbCcsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ251bGwnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ251bGwnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG51bWJlclxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICctJyB8fCBzdHJbcG9zXSA9PT0gJysnIHx8IHN0cltwb3NdID09PSAnLicgfHwgKHN0cltwb3NdID49ICcwJyAmJiBzdHJbcG9zXSA8PSAnOScpKSB7XG4gICAgICAgICAgICBib2R5ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLScgfHwgc3RyW2ldID09PSAnKycgfHwgc3RyW2ldID09PSAnLicgfHwgKHN0cltpXSA+PSAnMCcgJiYgc3RyW2ldIDw9ICc5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogYm9keS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBudW1iZXIgYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIG9iamVjdFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICd7JyB8fCBzdHJbcG9zXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IFtcbiAgICAgICAgICAgICAgICBzdHJbcG9zXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1wiJyAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCd7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBpIC0gcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoKHBvcyAtIDUgPj0gMCkgPyBwb3MgLSA1IDogMCwgNTApfWApO1xuICAgIH1cblxuICAgIHBhcnNlS2V5KHN0ciwgcG9zLCBxdW90ZSkge1xuICAgICAgICBsZXQga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHF1b3RlICYmIHF1b3RlID09PSBzdHJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFxdW90ZSAmJiAoc3RyW2ldID09PSAnICcgfHwgc3RyW2ldID09PSAnOicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICs9IHN0cltpXTtcblxuICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnICYmIGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtleSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3ludGF4IG5lYXIgJHtrZXl9YCk7XG4gICAgfVxuXG4gICAgY2FuQmVLZXlIZWFkKGNoKSB7XG4gICAgICAgIGlmIChjaFswXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjaFswXSA+PSAnYScgJiYgY2hbMF0gPD0gJ3onKSB8fCAoY2hbMF0gPj0gJ0EnICYmIGNoWzBdIDw9ICdaJykgfHwgY2hbMF0gPT09ICdfJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID49ICcwJyAmJiBjaFswXSA8PSAnOScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA9PT0gJyQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2guY2hhckNvZGVBdCgwKSA+IDI1NSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNCbGFua0NoYXIoY2gpIHtcbiAgICAgICAgcmV0dXJuIGNoID09PSAnICcgfHwgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx0JztcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFNhbml0aXplciB1dGlsaXR5LlxuICpcbiAqIENsaWVudC1zaWRlIEhUTUwgc2FuaXRpemVyIGRlc2lnbmVkIG1vc3RseSB0byBwcmV2ZW50IHNlbGYtWFNTIGF0dGFja3MuXG4gKiBUaGUgc2FuaXRpemVyIHV0aWxpdHkgd2lsbCBzdHJpcCBhbGwgYXR0cmlidXRlcyB0aGF0IHN0YXJ0IHdpdGggYG9uYCAodXN1YWxseSBKUyBldmVudCBoYW5kbGVycyBhcyBhdHRyaWJ1dGVzLCBpLmUuIGBvbmxvYWRgIG9yIGBvbmVycm9yYCkgb3IgY29udGFpbiB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2wgaW4gdGhlaXIgdmFsdWVzLlxuICpcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbml0aXplciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICAvLyBBZGQgdG8gZ2xvYmFsIGZ1bmN0aW9uIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cud25TYW5pdGl6ZSA9IChodG1sKSA9PiB0aGlzLnNhbml0aXplKGh0bWwpO1xuICAgICAgICB3aW5kb3cub2NTYW5pdGl6ZSA9IHdpbmRvdy53blNhbml0aXplO1xuICAgIH1cblxuICAgIHNhbml0aXplKGh0bWwsIGJvZHlPbmx5KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgIGNvbnN0IHJldHVybkJvZHlPbmx5ID0gKGJvZHlPbmx5ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGJvZHlPbmx5ID09PSAnYm9vbGVhbicpXG4gICAgICAgICAgICA/IGJvZHlPbmx5XG4gICAgICAgICAgICA6IHRydWU7XG5cbiAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoZG9tLmdldFJvb3ROb2RlKCkpO1xuXG4gICAgICAgIHJldHVybiAocmV0dXJuQm9keU9ubHkpID8gZG9tLmJvZHkuaW5uZXJIVE1MIDogZG9tLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZU5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpbUF0dHJpYnV0ZXMobm9kZSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhbml0aXplTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaW1BdHRyaWJ1dGVzKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIG5hbWVzIHN0YXJ0IHdpdGggXCJvblwiIChmb3IgZXhhbXBsZTogb25sb2FkLCBvbmVycm9yLi4uKVxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgdmFsdWUgc3RhcnRzIHdpdGggdGhlIFwiamF2YXNjcmlwdDpcIiBwc2V1ZG8gcHJvdG9jb2wgKGZvciBleGFtcGxlIGhyZWY9XCJqYXZhc2NyaXB0OmFsZXJ0KDEpXCIpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICBpZiAoYXR0ck5hbWUuaW5kZXhPZignb24nKSA9PT0gMCB8fCBhdHRyVmFsdWUuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogVVJMIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHByb3ZpZGVzIFVSTCBmdW5jdGlvbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZVVybCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBVUkwgYmFzZWQgb24gYSByZWxhdGl2ZSBwYXRoLlxuICAgICAqXG4gICAgICogSWYgYW4gYWJzb2x1dGUgVVJMIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvKHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9bLWEtejAtOV8rOl0rOlxcL1xcL1stYS16MC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16MC05KCldezEsNn1cXGIoWy1hLXowLTkoKUA6JV8rLn4jPyYvLz1dKikvaTtcblxuICAgICAgICBpZiAodXJsLm1hdGNoKHVybFJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoZVVybCA9IHVybC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsKCl9JHt0aGVVcmx9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCB0aGUgYmFzZSBVUkwgb2YgdGhpcyBpbnN0YWxsLlxuICAgICAqXG4gICAgICogVGhpcyBkZXRlcm1pbmVzIHRoZSBiYXNlIFVSTCBmcm9tIHRocmVlIHNvdXJjZXMsIGluIG9yZGVyOlxuICAgICAqICAtIElmIFNub3dib2FyZCBpcyBsb2FkZWQgdmlhIHRoZSBgeyUgc25vd2JvYXJkICV9YCB0YWcsIGl0IHdpbGwgcmV0cmlldmUgdGhlIGJhc2UgVVJMIHRoYXRcbiAgICAgKiBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHRoZXJlLlxuICAgICAqICAtIElmIGEgYDxiYXNlPmAgdGFnIGlzIGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGJhc2UgdGFnLlxuICAgICAqICAtIEZpbmFsbHksIGl0IHdpbGwgdGFrZSBhIGd1ZXNzIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24uIFRoaXMgd2lsbCBsaWtlbHkgbm90IHdvcmsgZm9yIHNpdGVzXG4gICAgICogdGhhdCByZXNpZGUgaW4gc3ViZGlyZWN0b3JpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYmFzZSBVUkwgd2lsbCBhbHdheXMgY29udGFpbiBhIHRyYWlsaW5nIGJhY2tzbGFzaC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYmFzZVVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRCYXNlVXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1tb2R1bGU9XCJzbm93Ym9hcmQtYmFzZVwiXScpLmRhdGFzZXQuYmFzZVVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kQmFzZVVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IFtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgICcvLycsXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgICcvJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB1cmxQYXJ0cy5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEJhc2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBiYXNlIFVSTCwgZW5zdXJpbmcgaXQgaXMgYSBIVFRQL0hUVFBzIFVSTC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBTbm93Ym9hcmQgc2NyaXB0IG9yIDxiYXNlPiB0YWcgb24gdGhlIHBhZ2UgdXNlIGEgZGlmZmVyZW50IHR5cGUgb2YgVVJMLCB0aGlzIHdpbGwgZmFpbCB3aXRoXG4gICAgICogYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICAgdmFsaWRhdGVCYXNlVXJsKHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9eKChbXjovPyNdKyk6KT8oXFwvXFwvKFteLz8jXSopKT8oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPy9pO1xuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IHVybFJlZ2V4LmV4ZWModXJsKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB1cmxQYXJ0c1syXTtcbiAgICAgICAgY29uc3QgZG9tYWluID0gdXJsUGFydHNbNF07XG5cbiAgICAgICAgaWYgKHByb3RvY29sICYmIFsnaHR0cCcsICdodHRwcyddLmluZGV4T2YocHJvdG9jb2wudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmFzZSBVUkwgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRvbWFpbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHVybC5zdWJzdHIoLTEpID09PSAnLycpXG4gICAgICAgICAgICA/IHVybFxuICAgICAgICAgICAgOiBgJHt1cmx9L2A7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBsdWdpbkJhc2UiLCJzbm93Ym9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbnN0cnVjdCIsImRlcGVuZGVuY2llcyIsImxpc3RlbnMiLCJkZXN0cnVjdCIsImRldGFjaCIsImRlc3RydWN0b3IiLCJkZWZhdWx0IiwiU2luZ2xldG9uIiwiX1BsdWdpbkJhc2UiLCJfaW5oZXJpdHMiLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiaXNBcnJheSIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJfdG9Qcm9wZXJ0eUtleSIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsInRvUHJpbWl0aXZlIiwiTnVtYmVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiYmluZCIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIl9zZXRQcm90b3R5cGVPZiIsIlJlcXVlc3QiLCJlbGVtZW50IiwiaGFuZGxlciIsIm9wdGlvbnMiLCJfdGhpcyIsImlzSGFuZGxlck5hbWUiLCJtYXRjaGVkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImZldGNoT3B0aW9ucyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlRXJyb3IiLCJjYW5jZWxsZWQiLCJjaGVja1JlcXVlc3QiLCJnbG9iYWxFdmVudCIsImV2ZW50IiwiRXZlbnQiLCJjYW5jZWxhYmxlIiwicmVxdWVzdCIsImRpc3BhdGNoRXZlbnQiLCJkZWZhdWx0UHJldmVudGVkIiwiZG9DbGllbnRWYWxpZGF0aW9uIiwiY29uZmlybSIsImRvQ29uZmlybSIsImNvbmZpcm1lZCIsImRvQWpheCIsInJlc3BvbnNlIiwicHJvY2Vzc1VwZGF0ZSIsIlhfV0lOVEVSX1NVQ0NFU1MiLCJwcm9jZXNzRXJyb3IiLCJwcm9jZXNzUmVzcG9uc2UiLCJFbGVtZW50IiwiZ2V0RmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJyZWRpcmVjdCIsIm1vZGUiLCJmZXRjaCIsInVybCIsImJyb3dzZXJWYWxpZGF0ZSIsImZvcm0iLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJfdGhpczIiLCJhamF4UHJvbWlzZSIsIm9rIiwic3RhdHVzIiwiaGFzIiwiZ2V0IiwiaW5jbHVkZXMiLCJqc29uIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsInJlbmRlckVycm9yIiwiZmlsZSIsImxpbmUiLCJ0cmFjZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJYX1dJTlRFUl9SRVNQT05TRV9DT0RFIiwicHJvbWlzZSIsIl90aGlzMyIsImJlZm9yZVVwZGF0ZSIsInBhcnRpYWxzIiwiZW50cmllcyIsImVudHJ5IiwiX2VudHJ5Iiwic3Vic3RyIiwiWF9XSU5URVJfQVNTRVRTIiwicHJvY2Vzc0Fzc2V0cyIsInByb21pc2VzIiwiZ2xvYmFsUHJvbWlzZUV2ZW50IiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJkb1VwZGF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzNCIsImFmZmVjdGVkIiwiX2VudHJ5MiIsInBhcnRpYWwiLCJjb250ZW50Iiwic2VsZWN0b3IiLCJ1cGRhdGUiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lckhUTUwiLCJzdWNjZXNzIiwiZmxhc2giLCJYX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyIsInByb2Nlc3NGbGFzaE1lc3NhZ2VzIiwiWF9XSU5URVJfUkVESVJFQ1QiLCJwcm9jZXNzUmVkaXJlY3QiLCJwcm9jZXNzRXJyb3JNZXNzYWdlIiwic2tpcEVycm9yIiwiWF9XSU5URVJfRVJST1JfRklFTERTIiwicHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMiLCJYX1dJTlRFUl9FUlJPUl9NRVNTQUdFIiwiX3RoaXM1IiwiaGFuZGxlUmVkaXJlY3RSZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVFdmVudCIsImV2ZW50TmFtZSIsIm9uY2UiLCJsb2NhdGlvbiIsImFzc2lnbiIsImhhbmRsZUVycm9yTWVzc2FnZSIsImFsZXJ0IiwibWVzc2FnZXMiLCJoYW5kbGVGbGFzaE1lc3NhZ2VzIiwiZmllbGRzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImFzc2V0cyIsIl9kb0NvbmZpcm0iLCJfY2FsbGVlMiIsImZ1bGZpbGxlZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImhhbmRsZUNvbmZpcm1NZXNzYWdlIiwibGlzdGVuc1RvRXZlbnQiLCJ0MCIsInRhZ05hbWUiLCJjbG9zZXN0IiwiZXh0cmFjdFBhcnRpYWxzIiwieHNyZlRva2VuIiwibG9hZGluZyIsImhyZWYiLCJmaWxlcyIsIkZvcm1EYXRhIiwiZGVidWciLCJjb29raWUiLCJmb3JtRGF0YSIsIl9lbnRyeTMiLCJhcHBlbmQiLCJqb2luIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsInN0ZXAiLCJfZTIiLCJBc3NldExvYWRlciIsIl9TaW5nbGV0b24iLCJhamF4TG9hZEFzc2V0cyIsIl9sb2FkIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJzY3JpcHQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwic3R5bGUiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiaW1hZ2UiLCJqcyIsImxvYWRTY3JpcHQiLCJ0MSIsImNzcyIsImxvYWRTdHlsZSIsInQyIiwidDMiLCJpbWciLCJsb2FkSW1hZ2UiLCJ0NCIsInQ1IiwibG9hZCIsIl94IiwibG9hZGVkIiwiZG9tU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRvbUNzcyIsImhlYWQiLCJJbWFnZSIsInNyYyIsIkF0dGFjaExvYWRpbmciLCJhamF4U3RhcnQiLCJhamF4RG9uZSIsImxvYWRFbGVtZW50cyIsImNsYXNzTGlzdCIsImFkZCIsImdldExvYWRpbmdDbGFzcyIsImRhdGFzZXQiLCJhdHRhY2hMb2FkaW5nIiwicmVtb3ZlIiwiRGF0YUNvbmZpZyIsImxvY2FsQ29uZmlnIiwiSFRNTEVsZW1lbnQiLCJpbnN0YW5jZUNvbmZpZyIsImFjY2VwdGVkQ29uZmlncyIsInJlZnJlc2giLCJjb25maWciLCJzZXQiLCJwZXJzaXN0IiwiZ2V0QWNjZXB0ZWRDb25maWdzIiwicHJvY2Vzc0NvbmZpZyIsImFjY2VwdEFsbERhdGFDb25maWdzIiwiZGVmYXVsdHMiLCJnZXREZWZhdWx0cyIsImNvZXJjZVZhbHVlIiwic3RyaW5nVmFsdWUiLCJzdGFydHNXaXRoIiwiYmFzZTY0c3RyIiwicmVwbGFjZSIsImRlY29kZWQiLCJhdG9iIiwidG9Mb3dlckNhc2UiLCJqc29uUGFyc2VyIiwicGFyc2UiLCJGbGFzaCIsImR1cmF0aW9uIiwiY2xlYXIiLCJ0aW1lciIsImZsYXNoVGltZXIiLCJjbGVhclRpbWVvdXQiLCJfZ2V0IiwicmVtb3ZlQXR0cmlidXRlIiwic3RvcFRpbWVyIiwic3RhcnRUaW1lciIsImFwcGVuZENoaWxkIiwidHJhbnNpdGlvbiIsInRpbWVyVHJhbnMiLCJzZXRUaW1lb3V0IiwiY2FuY2VsIiwiU3RyaXBlTG9hZGVyIiwicmVhZHkiLCJjb3VudGVyIiwiY3JlYXRlU3RyaXBlIiwic2hvdyIsImhpZGUiLCJpbmRpY2F0b3IiLCJzdHJpcGUiLCJzdHJpcGVMb2FkZWQiLCJuZXdTdHJpcGUiLCJjbG9uZU5vZGUiLCJmb3JjZSIsIlN0eWxlc2hlZXRMb2FkZXIiLCJzdHlsZXNMb2FkZWQiLCJlbmRzV2l0aCIsInN0eWxlc2hlZXQiLCJ0byIsIlRyYW5zaXRpb24iLCJjYWxsYmFjayIsInRyYWlsVG8iLCJwYXJzZUR1cmF0aW9uIiwiZG9UcmFuc2l0aW9uIiwiZXZlbnRDbGFzc2VzIiwiX2xlbiIsIl9rZXkiLCJhY3RpdmUiLCJvdXQiLCJyZXR1cm5DbGFzc2VzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInJlc2V0Q2xhc3NlcyIsImV2ZW50Q2xhc3MiLCJnZXRDb21wdXRlZFN0eWxlIiwib25UcmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwicHJvcCIsInJlY2VpdmVyIiwicHJvcExvd2VyIiwiaGFzUGx1Z2luIiwiX1JlZmxlY3QkZ2V0JHByb3BMb3dlIiwiZ2V0SW5zdGFuY2UiLCJJbm5lclByb3h5SGFuZGxlciIsIlBsdWdpbkxvYWRlciIsIlByb3h5IiwiZnJlZXplIiwiaW5zdGFuY2VzIiwic2luZ2xldG9uIiwiaW5pdGlhbGlzZWQiLCJzZWFsIiwibW9ja3MiLCJvcmlnaW5hbEZ1bmN0aW9ucyIsImhhc01ldGhvZCIsIm1ldGhvZE5hbWUiLCJpc0Z1bmN0aW9uIiwiY2FsbE1ldGhvZCIsInBhcmFtZXRlcnMiLCJzaGlmdCIsIl9sZW4yIiwiX2tleTIiLCJkZXBlbmRlbmNpZXNGdWxmaWxsZWQiLCJ1bm1ldCIsImdldERlcGVuZGVuY2llcyIsIml0ZW0iLCJnZXRQbHVnaW5OYW1lcyIsImlzU2luZ2xldG9uIiwiaW5pdGlhbGlzZVNpbmdsZXRvbiIsIl9sZW4zIiwicGFyYW1zIiwiX2tleTMiLCJfZW50cnk0IiwiX2xlbjQiLCJfa2V5NCIsIm5ld0luc3RhbmNlIiwiX2NvbnN0cnVjdCIsInNwbGljZSIsImdldEluc3RhbmNlcyIsImlzSW5pdGlhbGlzZWQiLCJfbGVuNSIsIl9rZXk1IiwibWFwIiwicGx1Z2luIiwibW9jayIsIl9sZW42IiwiX2tleTYiLCJ1bm1vY2siLCJDb29raWUiLCJKc29uUGFyc2VyIiwiU2FuaXRpemVyIiwiVXJsIiwiU25vd2JvYXJkIiwiYXV0b1NpbmdsZXRvbnMiLCJkZWJ1Z0VuYWJsZWQiLCJhdXRvSW5pdFNpbmdsZXRvbnMiLCJwbHVnaW5zIiwibGlzdGVuZXJzIiwiZm91bmRCYXNlVXJsIiwicmVhZGluZXNzIiwiZG9tIiwiYXR0YWNoQWJzdHJhY3RzIiwibG9hZFV0aWxpdGllcyIsImluaXRpYWxpc2UiLCJhZGRQbHVnaW4iLCJpbml0aWFsaXNlU2luZ2xldG9ucyIsImxvd2VyTmFtZSIsImdldFBsdWdpbnMiLCJyZWFkeU1ldGhvZCIsInJlbW92ZVBsdWdpbiIsImdldFBsdWdpbiIsIm9uIiwib2ZmIiwiaW5kZXgiLCJsaXN0ZW5NZXRob2QiLCJyZXN1bHQiLCJsaXN0ZW5lciIsImluc3RhbmNlUHJvbWlzZSIsImxpc3RlbmVyUHJvbWlzZSIsImFsbCIsImxvZ01lc3NhZ2UiLCJjb2xvciIsImJvbGQiLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJwYXJhbSIsImxvZyIsImdyb3VwRW5kIiwiUHJveHlIYW5kbGVyIiwiU25vd0JvYXJkIiwiQmFzZUNvb2tpZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwic2FtZVNpdGUiLCJzZXREZWZhdWx0cyIsImNvb2tpZXMiLCJjb29raWVOYW1lIiwiY29va2llVmFsdWUiLCJuZXdWYWx1ZSIsInNhdmVWYWx1ZSIsInduSlNPTiIsIm9jSlNPTiIsInN0ciIsImpzb25TdHJpbmciLCJwYXJzZVN0cmluZyIsIkpTT04iLCJ0cmltIiwibnVtIiwiaXNCbGFua0NoYXIiLCJwYXJzZUtleSIsImNhbkJlS2V5SGVhZCIsImdldEJvZHkiLCJvcmlnaW5MZW5ndGgiLCJsYXN0IiwicG9zIiwic3RhY2siLCJxdW90ZSIsImNoIiwiY2hhckNvZGVBdCIsInduU2FuaXRpemUiLCJodG1sIiwic2FuaXRpemUiLCJvY1Nhbml0aXplIiwiYm9keU9ubHkiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyZXR1cm5Cb2R5T25seSIsInNhbml0aXplTm9kZSIsImdldFJvb3ROb2RlIiwibm9kZSIsInRyaW1BdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsImJhc2VVcmwiLCJ1cmxSZWdleCIsIm1hdGNoIiwidGhlVXJsIiwidmFsaWRhdGVCYXNlVXJsIiwiZ2V0QXR0cmlidXRlIiwidXJsUGFydHMiLCJwcm90b2NvbCIsImhvc3QiXSwic291cmNlUm9vdCI6IiJ9