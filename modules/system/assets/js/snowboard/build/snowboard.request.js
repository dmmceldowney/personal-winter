"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.request"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.request.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLnJlcXVlc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSxJQVFxQkEsVUFBVTtFQUMzQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksU0FBQUEsV0FBWUMsU0FBUyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsVUFBQTtJQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM5Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSUUsWUFBQSxDQUFBSCxVQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFDLFVBQUEsRUFBWSxDQUNaOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRixHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRSxhQUFBLEVBQWU7TUFDWCxPQUFPLEVBQUU7SUFDYjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQUcsUUFBQSxFQUFVO01BQ04sT0FBTyxDQUFDLENBQUM7SUFDYjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSTtJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBSSxTQUFBLEVBQVc7TUFDUCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNULFNBQVM7SUFDekI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFHLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFNLFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFBQztFQUFBLE9BQUFULFVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NqRUwscUpBQUFhLG1CQUFBLFlBQUFB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Ozs7O0FDVmpDO0FBRWQsSUFBSW9RLE1BQU0sQ0FBQzRELFNBQVMsS0FBSy9MLFNBQVMsRUFBRTtFQUNoQyxNQUFNLElBQUk5RCxLQUFLLENBQUMsK0VBQStFLENBQUM7QUFDcEc7QUFFQSxDQUFDLFVBQUM2UCxTQUFTLEVBQUs7RUFDWkEsU0FBUyxDQUFDQyxTQUFTLENBQUMsU0FBUyxFQUFFNUkscURBQU8sQ0FBQztBQUMzQyxDQUFDLEVBQUUrRSxNQUFNLENBQUM0RCxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9QbHVnaW5CYXNlLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWpheC9SZXF1ZXN0LmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvc25vd2JvYXJkLnJlcXVlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQbHVnaW4gYmFzZSBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBwbHVnaW5zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBpcyBwcm92aWRlZCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayBpbnN0YW5jZSwgYW5kIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgKiB1bmxlc3MgeW91IGFic29sdXRlbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzbm93Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdGhlIHRydWUgY29uc3RydWN0b3Igb2YgYSBwbHVnaW4sIGFuZCBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gICAgICogSXQgd2lsbCBiZSBjYWxsZWQgc3RyYWlnaHQgYWZ0ZXIgY29uc3RydWN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSByZXF1aXJlZCBwbHVnaW5zIGZvciB0aGlzIHNwZWNpZmljIG1vZHVsZSB0byB3b3JrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBwbHVnaW5zIHJlcXVpcmVkIGZvciB0aGlzIG1vZHVsZSB0byB3b3JrLCBhcyBzdHJpbmdzLlxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxpc3RlbmVyIG1ldGhvZHMgZm9yIGdsb2JhbCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEZpcmVkIHdoZW4gdGhpcyBwbHVnaW4gaXMgcmVtb3ZlZC4gQ2FuIGJlIG1hbnVhbGx5IGNhbGxlZCBpZiB5b3UgaGF2ZSBhbm90aGVyIHNjZW5hcmlvIGZvclxuICAgICAqIGRlc3RydWN0aW9uLCBpZS4gdGhlIGVsZW1lbnQgYXR0YWNoZWQgdG8gdGhlIHBsdWdpbiBpcyByZW1vdmVkIG9yIGNoYW5nZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3RvciAob2xkIG1ldGhvZCBuYW1lKS5cbiAgICAgKlxuICAgICAqIEFsbG93cyBwcmV2aW91cyB1c2FnZSBvZiB0aGUgXCJkZXN0cnVjdG9yXCIgbWV0aG9kIHRvIHN0aWxsIHdvcmsuXG4gICAgICovXG4gICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBSZXF1ZXN0IHBsdWdpbi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IEFKQVggaGFuZGxlciB3aGljaCB3aWxsIHJ1biB1c2luZyB0aGUgYGZldGNoKClgIG1ldGhvZCB0aGF0IGlzIGRlZmF1bHQgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgYWNjZXB0cyAyIG9yIDMgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIElmIDIgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlIGhhbmRsZXIgbmFtZSBhbmQgdGhlIHNlY29uZFxuICAgICAqIHBhcmFtZXRlciBpcyB0aGUgb3B0aW9ucy4gVGhpcyBhc3N1bWVzIHRoYXQgdGhpcyBpcyBhIGRldGFjaGVkIEFKQVggcmVxdWVzdCBub3QgY29ubmVjdGVkIHRvXG4gICAgICogYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIElmIDMgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQsIHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYW4gZWxlbWVudCBvciBhIHNlbGVjdG9yLCBhbmQgdGhlIHNlY29uZFxuICAgICAqIGFuZCB0aGlyZCBwYXJhbWV0ZXJzIGFyZSB0aGUgaGFuZGxlciBhbmQgb3B0aW9ucywgcmVzcGVjdGl2ZWx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSBlbGVtZW50IHRvIGJlIGEgaGFuZGxlciBuYW1lLlxuICAgICAgICAgICAgLy8gVGhpcyBhc3N1bWVzIHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYWdhaW5zdCBubyBlbGVtZW50LCBhbmQgdGhlIGhhbmRsZXIgcGFyYW1ldGVyXG4gICAgICAgICAgICAvLyB3aWxsIGNvbnRhaW4gb3B0aW9ucy5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGFuZGxlck5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gaGFuZGxlciB8fCB7fTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGVsZW1lbnQgd2FzIGZvdW5kIHdpdGggdGhlIGdpdmVuIHNlbGVjdG9yOiAke2VsZW1lbnR9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG1hdGNoZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoZWNrUmVxdWVzdCgpO1xuICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4U2V0dXAnLCB0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4U2V0dXAnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmRvQ2xpZW50VmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLmRvQ29uZmlybSgpLnRoZW4oKGNvbmZpcm1lZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZShyZXNwb25zZSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX1NVQ0NFU1MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb0FqYXgoKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9TVUNDRVNTID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcGVuZGVuY2llcyBmb3IgdGhpcyBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydjb29raWUnLCAnanNvblBhcnNlciddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgZWxlbWVudCBhbmQgaGFuZGxlciBnaXZlbiBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBjaGVja1JlcXVlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgcHJvdmlkZWQgbXVzdCBiZSBhbiBFbGVtZW50IGluc3RhbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFKQVggaGFuZGxlciBuYW1lIGlzIG5vdCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNIYW5kbGVyTmFtZSh0aGlzLmhhbmRsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQUpBWCBoYW5kbGVyIG5hbWUuIFRoZSBjb3JyZWN0IGhhbmRsZXIgbmFtZSBmb3JtYXQgaXM6IFwib25FdmVudFwiLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIEZldGNoIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBtYWRlIGF2YWlsYWJsZSBmb3IgcGx1Z2lucyB0byBleHRlbmQgb3Igb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmV0Y2goKSBzZXR0aW5ncyB3aXRoIHRoZWlyIG93bi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldEZldGNoKCkge1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9ICh0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZldGNoT3B0aW9ucycsIHRoaXMuZmV0Y2hPcHRpb25zLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHRoaXMuZmV0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBvbiB0aGUgZm9ybSwgaWYgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZG9DbGllbnRWYWxpZGF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb3dzZXJWYWxpZGF0ZSA9PT0gdHJ1ZSAmJiB0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBBSkFYIHF1ZXJ5LlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IGZvciB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgaXMgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZG9BamF4KCkge1xuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgQUpBWCByZXF1ZXN0IGJlZm9yZSBzZW5kaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEJlZm9yZVNlbmQnLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEZldGNoKCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgIT09IDQwNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSAmJiByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5jbHVkZXMoJy9qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5tZXNzYWdlICYmIHJlc3BvbnNlRGF0YS5leGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5leGNlcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLnRyYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihyZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHByb2Nlc3MgcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmNsdWRlcygnL2pzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhfV0lOVEVSX1NVQ0NFU1M6IHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWF9XSU5URVJfUkVTUE9OU0VfQ09ERTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHBhcnNlIEpTT04gcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byBwcm9jZXNzIHJlc3BvbnNlOiAke2Vycm9yfWApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucmVuZGVyRXJyb3IoYFVuYWJsZSB0byByZXRyaWV2ZSBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcjogJHtyZXNwb25zZUVycm9yfWApKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTdGFydCcsIGFqYXhQcm9taXNlLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheFByb21pc2UnKTtcbiAgICAgICAgICAgIGV2ZW50LnByb21pc2UgPSBhamF4UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhamF4UHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBmb3IgdXBkYXRpbmcgdGhlIHBhcnRpYWxzIGZyb20gdGhlIEFKQVggcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBJZiBhbnkgcGFydGlhbHMgYXJlIHJldHVybmVkIGZyb20gdGhlIEFKQVggcmVzcG9uc2UsIHRoaXMgbWV0aG9kIHdpbGwgYWxzbyBhY3Rpb24gdGhlIHBhcnRpYWwgdXBkYXRlcy5cbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIG9iamVjdCB3aGljaCB0cmFja3Mgd2hlbiB0aGUgcGFydGlhbCB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzVXBkYXRlKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZS5hcHBseSh0aGlzLCBbcmVzcG9uc2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4dHJhY3QgcGFydGlhbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgY29uc3QgcGFydGlhbHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdWJzdHIoMCwgOCkgIT09ICdYX1dJTlRFUicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFydGlhbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXNzZXRzKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhCZWZvcmVVcGRhdGUnLCByZXNwb25zZSwgdGhpcyk7XG4gICAgICAgICAgICBwcm9taXNlcy50aGVuKFxuICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzQXNzZXRzKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvVXBkYXRlKHBhcnRpYWxzKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IGZvciBIVE1MIHJlZHJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGFydGlhbHMgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJ0aWFsc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGRvVXBkYXRlKHBhcnRpYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocGFydGlhbHMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3BhcnRpYWwsIGNvbnRlbnRdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAodGhpcy5vcHRpb25zLnVwZGF0ZSAmJiB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51cGRhdGVbcGFydGlhbF1cbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGUgPSAncmVwbGFjZSc7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpID09PSAnQCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdhcHBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAncHJlcGVuZCc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnIycgJiYgc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdub29wJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQgKyBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFmZmVjdGVkLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmUgdXBkYXRlIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQgdGhhdCBpcyB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZScsIGVsZW1lbnQsIGNvbnRlbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhVcGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VXBkYXRlQ29tcGxldGUnLCBhZmZlY3RlZCwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSByZXNwb25zZSBkYXRhLlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZmxhc2hcbiAgICAgKiBtZXNzYWdlcyB0byBoYW5kbGUsIG9yIGFueSByZWRpcmVjdHMgdG8gYmUgdW5kZXJ0YWtlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3MgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Y2Nlc3ModGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN1Y2Nlc3MnLCB0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgcmVzcG9uc2UgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhEb25lJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VEYXRhID0gdGhpcy5yZXNwb25zZURhdGE7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCAmJiByZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRmxhc2hNZXNzYWdlcyhyZXNwb25zZS5YX1dJTlRFUl9GTEFTSF9NRVNTQUdFUyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgYSByZWRpcmVjdCBmcm9tIHRoZSByZXNwb25zZSwgb3IgdXNlIHRoZSByZWRpcmVjdCBhcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICAgIGlmICh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZWRpcmVjdCh0aGlzLnJlZGlyZWN0IHx8IHJlc3BvbnNlLlhfV0lOVEVSX1JFRElSRUNUKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhpcyBmaXJlcyBvZmYgYWxsIG5lY2Vzc2FyeSBwcm9jZXNzaW5nIGZ1bmN0aW9ucyBkZXBlbmRpbmcgb24gdGhlIGVycm9yIHJlc3BvbnNlLCBpZS4gaWYgdGhlcmUncyBhbnkgZXJyb3Igb3JcbiAgICAgKiB2YWxpZGF0aW9uIG1lc3NhZ2VzIHRvIGhhbmRsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEVycm9yfSBlcnJvclxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXJyb3IodGhpcy5yZXNwb25zZUVycm9yLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciBlcnJvciBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvcicsIHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyB0aGUgZWxlbWVudCB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhGYWlsJywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2tpcEVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpIHtcbiAgICAgICAgICAgICAgICBza2lwRXJyb3IgPSB0aGlzLnByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzKGVycm9yLlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5YX1dJTlRFUl9FUlJPUl9NRVNTQUdFICYmICFza2lwRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvck1lc3NhZ2UoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGEgcmVkaXJlY3QgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb2Nlc3NvciB3aWxsIHNpbXBseSByZWRpcmVjdCB0aGUgdXNlciBpbiB0aGVpciBicm93c2VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhSZWRpcmVjdGAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHkgb25cbiAgICAgKiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVSZWRpcmVjdFJlc3BvbnNlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogcmVkaXJlY3Qgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvY2Vzc1JlZGlyZWN0KHVybCkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgcmVkaXJlY3QgaGFuZGxlci4gSWYgZmFsc2UgaXMgcmV0dXJuZWQsIGRvbid0IHJ1biB0aGUgcmVkaXJlY3QuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlUmVkaXJlY3RSZXNwb25zZS5hcHBseSh0aGlzLCBbdXJsXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHJlZGlyZWN0XG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFJlZGlyZWN0JywgdXJsLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIEFKQVggcmVxdWVzdCBpcyBmaW5pc2hlZCBpZiB3ZSdyZSBzdGlsbCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciByZWRpcmVjdHMgdGhhdCBqdXN0IGNoYW5nZSB0aGUgaGFzaCB2YWx1ZSBvZlxuICAgICAgICAvLyB0aGUgVVJMIGluc3RlYWQgb2YgbGVhdmluZyB0aGUgcGFnZSB3aWxsIHByb3Blcmx5IHN0b3AuXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29jdG9iZXJjbXMvb2N0b2Jlci9pc3N1ZXMvMjc4MFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgICAgICBldmVudC5ldmVudE5hbWUgPSAnYWpheFJlZGlyZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgYWxlcnQgdGhlIHVzZXIgdGhyb3VnaCBhIHNpbXBsZSBgYWxlcnQoKWAgY2FsbC5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4RXJyb3JNZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUVycm9yTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGVycm9yIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICAvLyBSdW4gYSBjdXN0b20gcGVyLXJlcXVlc3QgaGFuZGxlciBmb3IgZXJyb3IgbWVzc2FnZXMuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkbyBub3QgcHJvY2VzcyB0aGUgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgLy8gYW55IGZ1cnRoZXIuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUVycm9yTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UuYXBwbHkodGhpcywgW21lc3NhZ2VdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCB0aGUgZXJyb3IgbWVzc2FnZSBiZWluZyBzaG93blxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhFcnJvck1lc3NhZ2UnLCBtZXNzYWdlLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHNob3cgYSBicm93c2VyIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgd2luZG93LmFsZXJ0KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBmbGFzaCBtZXNzYWdlcyBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBvY2N1ci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4Rmxhc2hNZXNzYWdlc2AgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVGbGFzaE1lc3NhZ2VzYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlciwgdGhlXG4gICAgICogZmxhc2ggbWVzc2FnZSBoYW5kbGluZyB3aWxsIGJlIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc0ZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGZsYXNoIGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBzaG93IHRoZSBmbGFzaCBtZXNzYWdlXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRmxhc2hNZXNzYWdlcy5hcHBseSh0aGlzLCBbbWVzc2FnZXNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheEZsYXNoTWVzc2FnZXMnLCBtZXNzYWdlcywgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHZhbGlkYXRpb24gZXJyb3JzIGZvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheFZhbGlkYXRpb25FcnJvcnNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlVmFsaWRhdGlvbkVycm9yc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHZhbGlkYXRpb24gZXJyb3IgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGRzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBwcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhmaWVsZHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVWYWxpZGF0aW9uRXJyb3JzLmFwcGx5KHRoaXMsIFt0aGlzLmZvcm0sIGZpZWxkc10pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIHZhbGlkYXRpb24gZXJyb3JzIGJlaW5nIGhhbmRsZWRcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4VmFsaWRhdGlvbkVycm9ycycsIHRoaXMuZm9ybSwgZmllbGRzLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhc3NldHMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gYXNzZXQgcHJvY2Vzc2luZyB3aWxsIG9jY3VyIGFuZCB0aGlzIHdpbGwgcmV0dXJuIGEgcmVzb2x2ZWQgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4TG9hZEFzc2V0c2AgZXZlbnQuIFRoaXMgZXZlbnQgaXMgY29uc2lkZXJlZCBibG9ja2luZywgYW5kXG4gICAgICogYWxsb3dzIGFzc2V0cyB0byBiZSBsb2FkZWQgb3IgcHJvY2Vzc2VkIGJlZm9yZSBjb250aW51aW5nIHdpdGggYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NldHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBwcm9jZXNzQXNzZXRzKGFzc2V0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KCdhamF4TG9hZEFzc2V0cycsIGFzc2V0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlybXMgdGhlIHJlcXVlc3Qgd2l0aCB0aGUgdXNlciBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gYXN5bmNocm9ub3VzIG1ldGhvZC4gQnkgZGVmYXVsdCwgaXQgd2lsbCB1c2UgdGhlIGJyb3dzZXIncyBgY29uZmlybSgpYCBtZXRob2QgdG8gcXVlcnkgdGhlIHVzZXIgdG9cbiAgICAgKiBjb25maXJtIHRoZSBhY3Rpb24uIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgdXNlciBjb25maXJtZWRcbiAgICAgKiBvciBub3QuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheENvbmZpcm1NZXNzYWdlYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZUNvbmZpcm1NZXNzYWdlYCBjYWxsYmFjayBvcHRpb24uIElmIGEgYGZhbHNlYCBpcyByZXR1cm5lZCBmcm9tIGVpdGhlcixcbiAgICAgKiB0aGUgY29uZmlybWF0aW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSBiZWVuIGRlbmllZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGRvQ29uZmlybSgpIHtcbiAgICAgICAgLy8gQWxsb3cgZm9yIGEgY3VzdG9tIGhhbmRsZXIgZm9yIHRoZSBjb25maXJtYXRpb24sIHBlciByZXF1ZXN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGVDb25maXJtTWVzc2FnZS5hcHBseSh0aGlzLCBbdGhpcy5jb25maXJtXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vIHBsdWdpbnMgaGF2ZSBjdXN0b21pc2VkIHRoZSBjb25maXJtYXRpb24sIHVzZSBhIHNpbXBsZSBicm93c2VyIGNvbmZpcm1hdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmxpc3RlbnNUb0V2ZW50KCdhamF4Q29uZmlybU1lc3NhZ2UnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIGN1c3RvbSBwbHVnaW4gY29uZmlybWF0aW9uc1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJywgdGhpcy5jb25maXJtLCB0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnVsZmlsbGVkID0gYXdhaXQgcHJvbWlzZXM7XG4gICAgICAgICAgICBpZiAoZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBvZmYgY29tcGxldGlvbiBldmVudHMgZm9yIHRoZSBSZXF1ZXN0LlxuICAgICAqL1xuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBsZXRlICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb21wbGV0ZSh0aGlzLnJlc3BvbnNlRGF0YSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhEb25lJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4QWx3YXlzJyk7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVzcG9uc2VFcnJvciA9IHRoaXMucmVzcG9uc2VFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb2ZmIHRoZSBkZXN0cnVjdG9yXG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICBnZXQgZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5mb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5mb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50YWdOYW1lID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG5cbiAgICBnZXQgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JywgLy8gS2VlcHMgY29tcGF0aWJpbGl0eSB3aXRoIGpRdWVyeSBBSkFYXG4gICAgICAgICAgICAnWC1XSU5URVItUkVRVUVTVC1IQU5ETEVSJzogdGhpcy5oYW5kbGVyLFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtUEFSVElBTFMnOiB0aGlzLmV4dHJhY3RQYXJ0aWFscyh0aGlzLm9wdGlvbnMudXBkYXRlIHx8IFtdKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1XSU5URVItUkVRVUVTVC1GTEFTSCddID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnhzcmZUb2tlbikge1xuICAgICAgICAgICAgaGVhZGVyc1snWC1YU1JGLVRPS0VOJ10gPSB0aGlzLnhzcmZUb2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cblxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvYWRpbmcgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgZ2V0IHJlZGlyZWN0KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5yZWRpcmVjdCAmJiB0aGlzLm9wdGlvbnMucmVkaXJlY3QubGVuZ3RoKSA/IHRoaXMub3B0aW9ucy5yZWRpcmVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGZsYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZsYXNoIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBmaWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxlcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKEZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5kZWJ1ZygnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmlsZSB1cGxvYWRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeHNyZlRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbm93Ym9hcmQuY29va2llKCkuZ2V0KCdYU1JGLVRPS0VOJyk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5kYXRhID09PSAnb2JqZWN0JykgPyB0aGlzLm9wdGlvbnMuZGF0YSA6IHt9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSB8fCB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25maXJtIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHBhcnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZXh0cmFjdFBhcnRpYWxzKHVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModXBkYXRlKS5qb2luKCcmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbiBlcnJvciB3aXRoIHVzZWZ1bCBkZWJ1ZyBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSB3aGVuIHRoZSBBSkFYIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBvciBwcm9jZXNzZWQgY29ycmVjdGx5IGR1ZSB0byBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4Y2VwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0cmFjZVxuICAgICAqIEByZXR1cm5zIHtFcnJvcn1cbiAgICAgKi9cbiAgICByZW5kZXJFcnJvcihtZXNzYWdlLCBleGNlcHRpb24sIGZpbGUsIGxpbmUsIHRyYWNlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5leGNlcHRpb24gPSBleGNlcHRpb24gfHwgbnVsbDtcbiAgICAgICAgZXJyb3IuZmlsZSA9IGZpbGUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IubGluZSA9IGxpbmUgfHwgbnVsbDtcbiAgICAgICAgZXJyb3IudHJhY2UgPSB0cmFjZSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIGdpdmVuIHN0cmluZyB0byBzZWUgaWYgaXQgaXMgYSB2YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiAvXig/Olxcdys6ezJ9KT9vbltBLVowLTldLy50ZXN0KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vYWpheC9SZXF1ZXN0JztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgSmF2YXNjcmlwdCBBSkFYIHJlcXVlc3QgZmVhdHVyZS4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdyZXF1ZXN0JywgUmVxdWVzdCk7XG59KSh3aW5kb3cuU25vd2JvYXJkKTtcbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsImlzQXJyYXkiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwib2JqIiwiX3RvUHJvcGVydHlLZXkiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJ0b1ByaW1pdGl2ZSIsIk51bWJlciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsIl9QbHVnaW5CYXNlIiwiZWxlbWVudCIsImhhbmRsZXIiLCJvcHRpb25zIiwiX3RoaXMiLCJpc0hhbmRsZXJOYW1lIiwibWF0Y2hlZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJmZXRjaE9wdGlvbnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZUVycm9yIiwiY2FuY2VsbGVkIiwiY2hlY2tSZXF1ZXN0IiwiZ2xvYmFsRXZlbnQiLCJldmVudCIsIkV2ZW50IiwiY2FuY2VsYWJsZSIsInJlcXVlc3QiLCJkaXNwYXRjaEV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImRvQ2xpZW50VmFsaWRhdGlvbiIsImNvbmZpcm0iLCJkb0NvbmZpcm0iLCJjb25maXJtZWQiLCJkb0FqYXgiLCJyZXNwb25zZSIsInByb2Nlc3NVcGRhdGUiLCJYX1dJTlRFUl9TVUNDRVNTIiwicHJvY2Vzc0Vycm9yIiwicHJvY2Vzc1Jlc3BvbnNlIiwiRWxlbWVudCIsImdldEZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwicmVkaXJlY3QiLCJtb2RlIiwiZmV0Y2giLCJ1cmwiLCJicm93c2VyVmFsaWRhdGUiLCJmb3JtIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3RoaXMyIiwiYWpheFByb21pc2UiLCJvayIsInN0YXR1cyIsImhhcyIsImdldCIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJyZW5kZXJFcnJvciIsImZpbGUiLCJsaW5lIiwidHJhY2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiWF9XSU5URVJfUkVTUE9OU0VfQ09ERSIsInByb21pc2UiLCJfdGhpczMiLCJiZWZvcmVVcGRhdGUiLCJwYXJ0aWFscyIsImVudHJpZXMiLCJlbnRyeSIsIl9lbnRyeSIsInN1YnN0ciIsIlhfV0lOVEVSX0FTU0VUUyIsInByb2Nlc3NBc3NldHMiLCJwcm9taXNlcyIsImdsb2JhbFByb21pc2VFdmVudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZG9VcGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpczQiLCJhZmZlY3RlZCIsIl9lbnRyeTIiLCJwYXJ0aWFsIiwiY29udGVudCIsInNlbGVjdG9yIiwidXBkYXRlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwic3VjY2VzcyIsImZsYXNoIiwiWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMiLCJwcm9jZXNzRmxhc2hNZXNzYWdlcyIsIlhfV0lOVEVSX1JFRElSRUNUIiwicHJvY2Vzc1JlZGlyZWN0IiwicHJvY2Vzc0Vycm9yTWVzc2FnZSIsInNraXBFcnJvciIsIlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyIsInByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzIiwiWF9XSU5URVJfRVJST1JfTUVTU0FHRSIsIl90aGlzNSIsImhhbmRsZVJlZGlyZWN0UmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlRXZlbnQiLCJldmVudE5hbWUiLCJvbmNlIiwibG9jYXRpb24iLCJhc3NpZ24iLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJhbGVydCIsIm1lc3NhZ2VzIiwiaGFuZGxlRmxhc2hNZXNzYWdlcyIsImZpZWxkcyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJhc3NldHMiLCJfZG9Db25maXJtIiwiX2NhbGxlZTIiLCJmdWxmaWxsZWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJoYW5kbGVDb25maXJtTWVzc2FnZSIsImxpc3RlbnNUb0V2ZW50IiwidDAiLCJ0YWdOYW1lIiwiY2xvc2VzdCIsImV4dHJhY3RQYXJ0aWFscyIsInhzcmZUb2tlbiIsImxvYWRpbmciLCJocmVmIiwiZmlsZXMiLCJGb3JtRGF0YSIsImRlYnVnIiwiY29va2llIiwiZm9ybURhdGEiLCJfZW50cnkzIiwiYXBwZW5kIiwiam9pbiIsIlNub3dib2FyZCIsImFkZFBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=