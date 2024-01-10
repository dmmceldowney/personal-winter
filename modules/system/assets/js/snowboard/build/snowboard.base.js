"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.base"],{

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
/******/ __webpack_require__.O(0, ["assets/js/snowboard/build/snowboard.vendor"], () => (__webpack_exec__("./assets/js/snowboard/snowboard.base.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQSxJQVFxQkEsVUFBVTtFQUMzQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksU0FBQUEsV0FBWUMsU0FBUyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsVUFBQTtJQUNuQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM5Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSUUsWUFBQSxDQUFBSCxVQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFDLFVBQUEsRUFBWSxDQUNaOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBRixHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRSxhQUFBLEVBQWU7TUFDWCxPQUFPLEVBQUU7SUFDYjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQUcsUUFBQSxFQUFVO01BQ04sT0FBTyxDQUFDLENBQUM7SUFDYjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSTtJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBSSxTQUFBLEVBQVc7TUFDUCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNULFNBQVM7SUFDekI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFHLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFNLFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFBQztFQUFBLE9BQUFULFVBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRVk7O0FBRWpCO0FB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QUFDQyxRQUFRLEVBQ3hCLElBQUksRUFDSjlILE1BQU0sQ0FBQzZILFFBQVEsQ0FBQ0UsSUFBSSxFQUNwQixHQUFHLENBQ047TUFDRCxJQUFJLENBQUN0SSxZQUFZLEdBQUdtSSxRQUFRLENBQUNuTCxJQUFJLENBQUMsRUFBRSxDQUFDO01BRXJDLE9BQU8sSUFBSSxDQUFDZ0QsWUFBWTtJQUM1Qjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSSTtJQUFBL0csR0FBQTtJQUFBQyxLQUFBLEVBU0MsU0FBQThPLGdCQUFnQlAsR0FBRyxFQUFFO01BQ2xCLElBQU1DLFFBQVEsR0FBRyw4REFBOEQ7TUFDL0UsSUFBTVMsUUFBUSxHQUFHVCxRQUFRLENBQUNhLElBQUksQ0FBQ2QsR0FBRyxDQUFDO01BQ25DLElBQU1ZLFFBQVEsR0FBR0YsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUM1QixJQUFNOUUsTUFBTSxHQUFHOEUsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUUxQixJQUFJRSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUNoSyxPQUFPLENBQUNnSyxRQUFRLENBQUNqTyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDdEUsTUFBTSxJQUFJRSxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDaEQ7TUFDQSxJQUFJLENBQUMrSSxNQUFNLEVBQUU7UUFDVCxNQUFNLElBQUkvSSxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDaEQ7TUFFQSxPQUFRbU4sR0FBRyxDQUFDMUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUN4QjBDLEdBQUcsTUFBQWxOLE1BQUEsQ0FDQWtOLEdBQUcsTUFBRztJQUNuQjtFQUFDO0VBQUEsT0FBQWpJLEdBQUE7QUFBQSxFQTNGNEI5Riw0REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYWJzdHJhY3RzL1BsdWdpbkJhc2UuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Jbm5lclByb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUGx1Z2luTG9hZGVyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvbWFpbi9Qcm94eUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Nub3dib2FyZC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3Nub3dib2FyZC5iYXNlLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL0Nvb2tpZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Kc29uUGFyc2VyLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tc3lzdGVtLW1vZHVsZS8uL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL1Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9VcmwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQbHVnaW4gYmFzZSBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBwbHVnaW5zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBpcyBwcm92aWRlZCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayBpbnN0YW5jZSwgYW5kIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0ZW5cbiAgICAgKiB1bmxlc3MgeW91IGFic29sdXRlbHkga25vdyB3aGF0IHlvdSdyZSBkb2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U25vd2JvYXJkfSBzbm93Ym9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzbm93Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdGhlIHRydWUgY29uc3RydWN0b3Igb2YgYSBwbHVnaW4sIGFuZCBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gICAgICogSXQgd2lsbCBiZSBjYWxsZWQgc3RyYWlnaHQgYWZ0ZXIgY29uc3RydWN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSByZXF1aXJlZCBwbHVnaW5zIGZvciB0aGlzIHNwZWNpZmljIG1vZHVsZSB0byB3b3JrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBwbHVnaW5zIHJlcXVpcmVkIGZvciB0aGlzIG1vZHVsZSB0byB3b3JrLCBhcyBzdHJpbmdzLlxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxpc3RlbmVyIG1ldGhvZHMgZm9yIGdsb2JhbCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEZpcmVkIHdoZW4gdGhpcyBwbHVnaW4gaXMgcmVtb3ZlZC4gQ2FuIGJlIG1hbnVhbGx5IGNhbGxlZCBpZiB5b3UgaGF2ZSBhbm90aGVyIHNjZW5hcmlvIGZvclxuICAgICAqIGRlc3RydWN0aW9uLCBpZS4gdGhlIGVsZW1lbnQgYXR0YWNoZWQgdG8gdGhlIHBsdWdpbiBpcyByZW1vdmVkIG9yIGNoYW5nZWQuXG4gICAgICovXG4gICAgZGVzdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gZGVzdHJ1Y3RvciAob2xkIG1ldGhvZCBuYW1lKS5cbiAgICAgKlxuICAgICAqIEFsbG93cyBwcmV2aW91cyB1c2FnZSBvZiB0aGUgXCJkZXN0cnVjdG9yXCIgbWV0aG9kIHRvIHN0aWxsIHdvcmsuXG4gICAgICovXG4gICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4vUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogU2luZ2xldG9uIHBsdWdpbiBhYnN0cmFjdC5cbiAqXG4gKiBUaGlzIGlzIGEgc3BlY2lhbCBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgd2lsbCB1c2UgdG8gaW50ZXJwcmV0IHRoZSBjdXJyZW50IHBsdWdpbiBhcyBhXG4gKiBcInNpbmdsZXRvblwiLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgb25seSBvbmUgaW5zdGFuY2Ugb2YgdGhlIHBsdWdpbiBjbGFzcyBpcyB1c2VkIGFjcm9zcyB0aGUgYm9hcmQuXG4gKlxuICogU2luZ2xldG9ucyBhcmUgaW5pdGlhbGlzZWQgb24gdGhlIFwiZG9tUmVhZHlcIiBldmVudCBieSBkZWZhdWx0LlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGV0b24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbn1cbiIsIi8qKlxuICogSW50ZXJuYWwgcHJveHkgZm9yIFNub3dib2FyZC5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgd3JhcHMgdGhlIFNub3dib2FyZCBpbnN0YW5jZSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb2YgcGx1Z2luIGluc3RhbmNlcy5cbiAqIEl0IHByZXZlbnRzIGFjY2VzcyB0byB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKiAgLSBgYXR0YWNoQWJzdHJhY3RzYDogTm8gbmVlZCB0byBhdHRhY2ggYWJzdHJhY3RzIGFnYWluLlxuICogIC0gYGxvYWRVdGlsdGllc2A6IE5vIG5lZWQgdG8gbG9hZCB1dGlsaXRpZXMgYWdhaW4uXG4gKiAgLSBgaW5pdGlhbGlzZWA6IFNub3dib2FyZCBpcyBhbHJlYWR5IGluaXRpYWxpc2VkLlxuICogIC0gYGluaXRpYWxpc2VTaW5nbGV0b25zYDogU2luZ2xldG9ucyBhcmUgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnYXR0YWNoQWJzdHJhY3RzJywgJ2xvYWRVdGlsaXRpZXMnLCAnaW5pdGlhbGlzZScsICdpbml0aWFsaXNlU2luZ2xldG9ucyddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2Fubm90IHVzZSB0aGUgXCIke3Byb3B9XCIgU25vd2JvYXJkIG1ldGhvZCB3aXRoaW4gYSBwbHVnaW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IElubmVyUHJveHlIYW5kbGVyIGZyb20gJy4vSW5uZXJQcm94eUhhbmRsZXInO1xuXG4vKipcbiAqIFBsdWdpbiBsb2FkZXIgY2xhc3MuXG4gKlxuICogVGhpcyBpcyBhIHByb3ZpZGVyIChmYWN0b3J5KSBjbGFzcyBmb3IgYSBzaW5nbGUgcGx1Z2luIGFuZCBwcm92aWRlcyB0aGUgbGluayBiZXR3ZWVuIFNub3dib2FyZCBmcmFtZXdvcmsgZnVuY3Rpb25hbGl0eVxuICogYW5kIHRoZSB1bmRlcmx5aW5nIHBsdWdpbiBpbnN0YW5jZXMuIEl0IGFsc28gcHJvdmlkZXMgc29tZSBiYXNpYyBtb2NraW5nIG9mIHBsdWdpbiBtZXRob2RzIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5Mb2FkZXIge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQmluZHMgdGhlIFdpbnRlciBmcmFtZXdvcmsgdG8gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNub3dib2FyZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgICAgICBzbm93Ym9hcmQsXG4gICAgICAgICAgICBJbm5lclByb3h5SGFuZGxlcixcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG4gICAgICAgIC8vIEZyZWV6ZSBpbnN0YW5jZSB0aGF0IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhpcyBsb2FkZXJcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IHtcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIGV4dGVuc2lvbiBvZiB0aGUgc2luZ2xldG9uIHN0YXR1cyBvYmplY3RcbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5zaW5nbGV0b24pO1xuXG4gICAgICAgIHRoaXMubW9ja3MgPSB7fTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgICAgIC8vIEZyZWV6ZSBsb2FkZXIgaXRzZWxmXG4gICAgICAgIE9iamVjdC5mcmVlemUoUGx1Z2luTG9hZGVyLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGEgc3BlY2lmaWMgbWV0aG9kIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc01ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPT09ICdmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgcHJvdG90eXBlIG1ldGhvZCBmb3IgYSBwbHVnaW4uIFRoaXMgc2hvdWxkIGdlbmVyYWxseSBiZSB1c2VkIGZvciBcInN0YXRpY1wiIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gey4uLn0gYXJnc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgY2FsbE1ldGhvZCguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0gcGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0oYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgaXMgYSBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW4sIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIC0gSWYgdGhpcyBpcyBhIHNpbmdsZXRvbiwgdGhlIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luQmFzZXxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICBjb25zdCB1bm1ldCA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCkuZmlsdGVyKChpdGVtKSA9PiAhdGhpcy5zbm93Ym9hcmQuZ2V0UGx1Z2luTmFtZXMoKS5pbmNsdWRlcyhpdGVtKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIiR7dGhpcy5uYW1lfVwiIHBsdWdpbiByZXF1aXJlcyB0aGUgZm9sbG93aW5nIHBsdWdpbnM6ICR7dW5tZXQuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yaWdpbmFsRnVuY3Rpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbXMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RzIHRvIHByb3RvdHlwZVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2NrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCBhbiBlbXB0eSBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2VbXX1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgc2ltcGxlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbmdsZXRvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2luZ2xldG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTaW5nbGV0b24gPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHNpbmdsZXRvbiBoYXMgYmVlbiBpbml0aWFsaXNlZC5cbiAgICAgKlxuICAgICAqIE5vcm1hbCBwbHVnaW5zIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uLmluaXRpYWxpc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuaW5zdGFuY2UodGhpcy5zbm93Ym9hcmQsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICBuZXdJbnN0YW5jZS5kZXRhY2ggPSAoKSA9PiB0aGlzLmluc3RhbmNlcy5zcGxpY2UodGhpcy5pbnN0YW5jZXMuaW5kZXhPZihuZXdJbnN0YW5jZSksIDEpO1xuICAgICAgICBuZXdJbnN0YW5jZS5jb25zdHJ1Y3QoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2gobmV3SW5zdGFuY2UpO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVwZW5kZW5jaWVzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gZGVwZW5kZW5jeSBtZXRob2Qgc3BlY2lmaWVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcygpLm1hcCgoaXRlbSkgPT4gaXRlbS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBoYXMgYWxsIGl0cyBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICAgIGxldCBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmhhc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgZnVsZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdWxmaWxsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIGEgbWV0aG9kIG9mIGFuIGluc3RhbmNlIHRvIGJlIG1vY2tlZCBmb3IgdGVzdGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgbW9jayB3aWxsIGJlIGFwcGxpZWQgZm9yIHRoZSBsaWZlIG9mIGFuIGluc3RhbmNlLiBGb3Igc2luZ2xldG9ucywgdGhlIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZVxuICAgICAqIG9mIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogTW9ja3MgY2Fubm90IGJlIGFwcGxpZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBtb2NrKG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBcIiR7bWV0aG9kTmFtZX1cIiBkb2VzIG5vdCBleGlzdCBhbmQgY2Fubm90IGJlIG1vY2tlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdID0gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSAmJiB0aGlzLmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbWV0ZXJzKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBtb2NrIGNhbGxiYWNrIGZyb20gZnV0dXJlIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICovXG4gICAgdW5tb2NrKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1vY2tzW21ldGhvZE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiBSZWZsZWN0LmdldCh0YXJnZXQsICdwbHVnaW5zJylbcHJvcExvd2VyXS5nZXRJbnN0YW5jZSguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG5cbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IFBsdWdpbkxvYWRlciBmcm9tICcuL1BsdWdpbkxvYWRlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbGl0aWVzL0Nvb2tpZSc7XG5pbXBvcnQgSnNvblBhcnNlciBmcm9tICcuLi91dGlsaXRpZXMvSnNvblBhcnNlcic7XG5pbXBvcnQgU2FuaXRpemVyIGZyb20gJy4uL3V0aWxpdGllcy9TYW5pdGl6ZXInO1xuaW1wb3J0IFVybCBmcm9tICcuLi91dGlsaXRpZXMvVXJsJztcblxuLyoqXG4gKiBTbm93Ym9hcmQgLSB0aGUgV2ludGVyIEphdmFTY3JpcHQgZnJhbWV3b3JrLlxuICpcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgYmFzZSBvZiBhIG1vZGVybiB0YWtlIG9uIHRoZSBXaW50ZXIgSlMgZnJhbWV3b3JrLCBiZWluZyBmdWxseSBleHRlbnNpYmxlIGFuZCB0YWtpbmcgYWR2YW50YWdlXG4gKiBvZiBtb2Rlcm4gSmF2YVNjcmlwdCBmZWF0dXJlcyBieSBsZXZlcmFnaW5nIHRoZSBMYXJhdmVsIE1peCBjb21waWxhdGlvbiBmcmFtZXdvcmsuIEl0IGFsc28gaXMgY29kZWQgdXAgdG8gcmVtb3ZlIHRoZVxuICogZGVwZW5kZW5jeSBvZiBqUXVlcnkuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAbGluayBodHRwczovL3dpbnRlcmNtcy5jb20vZG9jcy9zbm93Ym9hcmQvaW50cm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dib2FyZCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9TaW5nbGV0b25zIEF1dG9tYXRpY2FsbHkgbG9hZCBzaW5nbGV0b25zIHdoZW4gRE9NIGlzIHJlYWR5LiBEZWZhdWx0OiBgdHJ1ZWAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWJ1ZyBXaGV0aGVyIGRlYnVnZ2luZyBsb2dzIHNob3VsZCBiZSBzaG93bi4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRvU2luZ2xldG9ucywgZGVidWcpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z0VuYWJsZWQgPSAodHlwZW9mIGRlYnVnID09PSAnYm9vbGVhbicgJiYgZGVidWcgPT09IHRydWUpO1xuICAgICAgICB0aGlzLmF1dG9Jbml0U2luZ2xldG9ucyA9ICh0eXBlb2YgYXV0b1NpbmdsZXRvbnMgPT09ICdib29sZWFuJyAmJiBhdXRvU2luZ2xldG9ucyA9PT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWRpbmVzcyA9IHtcbiAgICAgICAgICAgIGRvbTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNlYWwgcmVhZGluZXNzIGZyb20gYmVpbmcgYWRkZWQgdG8gZnVydGhlciwgYnV0IGFsbG93IHRoZSBwcm9wZXJ0aWVzIHRvIGJlIG1vZGlmaWVkLlxuICAgICAgICBPYmplY3Quc2VhbCh0aGlzLnJlYWRpbmVzcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoQWJzdHJhY3RzKCk7XG5cbiAgICAgICAgLy8gRnJlZXplIHRoZSBTbm93Ym9hcmQgY2xhc3MgdG8gcHJldmVudCBmdXJ0aGVyIG1vZGlmaWNhdGlvbnMuXG4gICAgICAgIE9iamVjdC5mcmVlemUoU25vd2JvYXJkLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkVXRpbGl0aWVzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoJ1Nub3dib2FyZCBmcmFtZXdvcmsgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhYnN0cmFjdCBjbGFzc2VzIGFzIHByb3BlcnRpZXMgb2YgdGhlIFNub3dib2FyZCBjbGFzcy5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyBKYXZhc2NyaXB0IGZ1bmN0aW9uYWxpdHkgd2l0aCBubyBidWlsZCBwcm9jZXNzIHRvIHN0aWxsIGV4dGVuZCB0aGVzZSBhYnN0cmFjdHMgYnkgcHJlZml4aW5nXG4gICAgICogdGhlbSB3aXRoIFwiU25vd2JvYXJkXCIuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjbGFzcyBNeUNsYXNzIGV4dGVuZHMgU25vd2JvYXJkLlBsdWdpbkJhc2Uge1xuICAgICAqICAgICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYXR0YWNoQWJzdHJhY3RzKCkge1xuICAgICAgICB0aGlzLlBsdWdpbkJhc2UgPSBQbHVnaW5CYXNlO1xuICAgICAgICB0aGlzLlNpbmdsZXRvbiA9IFNpbmdsZXRvbjtcblxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZS5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24ucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlNpbmdsZXRvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGRlZmF1bHQgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIGxvYWRVdGlsaXRpZXMoKSB7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdjb29raWUnLCBDb29raWUpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignanNvblBhcnNlcicsIEpzb25QYXJzZXIpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignc2FuaXRpemVyJywgU2FuaXRpemVyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3VybCcsIFVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIEF0dGFjaGVzIGEgbGlzdGVuZXIgZm9yIHRoZSBET00gYmVpbmcgcmVhZHkgYW5kIHRyaWdnZXJzIGEgZ2xvYmFsIFwicmVhZHlcIiBldmVudCBmb3IgcGx1Z2lucyB0byBiZWdpbiBhdHRhY2hpbmdcbiAgICAgKiB0aGVtc2VsdmVzIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsb2JhbEV2ZW50KCdyZWFkeScpO1xuICAgICAgICAgICAgdGhpcy5yZWFkaW5lc3MuZG9tID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYW4gaW5zdGFuY2Ugb2YgZXZlcnkgc2luZ2xldG9uLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2VTaW5nbGV0b25zKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucGx1Z2lucykuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsdWdpbiB0byB0aGUgZnJhbWV3b3JrLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBhcmUgdGhlIGNvcm5lcnN0b25lIGZvciBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgZm9yIFNub3dib2FyZC4gQSBwbHVnaW4gbXVzdCBlaXRoZXIgYmUgYW4gRVMyMDE1IGNsYXNzXG4gICAgICogdGhhdCBleHRlbmRzIHRoZSBQbHVnaW5CYXNlIG9yIFNpbmdsZXRvbiBhYnN0cmFjdCBjbGFzc2VzLCBvciBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBwbHVnaW4gaXMgYWRkZWQsIGl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYXMgYSBuZXcgbWFnaWMgbWV0aG9kIGluIHRoZSBTbm93Ym9hcmQgY2xhc3MgdXNpbmcgdGhlIG5hbWVcbiAgICAgKiBwYXJhbWV0ZXIsIGFuZCBjYW4gYmUgY2FsbGVkIHZpYSB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgYmUgdGhlIFwibG93ZXJjYXNlXCIgdmVyc2lvbiBvZiB0aGlzIG5hbWUuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYSBwbHVnaW4gaXMgYXNzaWduZWQgdG8gdGhlIG5hbWUgXCJteVBsdWdpblwiLCBpdCBjYW4gYmUgY2FsbGVkIHZpYSBgU25vd2JvYXJkLm15cGx1Z2luKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V8RnVuY3Rpb259IGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGx1Z2luKG5hbWUsIGluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIHBsdWdpbiBjYWxsZWQgXCIke25hbWV9XCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZSAhPT0gJ2Z1bmN0aW9uJyAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBwbHVnaW4gbXVzdCBleHRlbmQgdGhlIFBsdWdpbkJhc2UgY2xhc3MsIG9yIG11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzW25hbWVdICE9PSB1bmRlZmluZWQgfHwgdGhpc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdpdmVuIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgZm9yIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSA9IG5ldyBQbHVnaW5Mb2FkZXIobG93ZXJOYW1lLCB0aGlzLCBpbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlZ2lzdGVyZWRgKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgc2luZ2xldG9ucyBub3cgaGF2ZSB0aGVpciBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLCBhbmQgZmlyZSB0aGVpciBcInJlYWR5XCIgaGFuZGxlciBpZiB3ZSdyZVxuICAgICAgICAvLyBpbiBhIHJlYWR5IHN0YXRlLlxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2V0UGx1Z2lucygpKS5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbHVnaW4uaXNTaW5nbGV0b24oKVxuICAgICAgICAgICAgICAgICYmICFwbHVnaW4uaXNJbml0aWFsaXNlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpXG4gICAgICAgICAgICAgICAgJiYgT2JqZWN0LmtleXMocGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKSkuaW5jbHVkZXMoJ3JlYWR5JylcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnJlYWRpbmVzcy5kb21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5TWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKS5yZWFkeTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uY2FsbE1ldGhvZChyZWFkeU1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luIGZyb20gU25vd2JvYXJkLCBjYWxsaW5nIHRoZSBkZXN0cnVjdG9yIG1ldGhvZCBmb3IgYWxsIGFjdGl2ZSBpbnN0YW5jZXMgb2YgdGhlIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIGFscmVhZHkgcmVtb3ZlZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9ycyBmb3IgYWxsIGluc3RhbmNlc1xuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXS5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgcmVtb3ZlZGApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZCBhbmQgaXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQSBwbHVnaW4gdGhhdCBpcyBzdGlsbCB3YWl0aW5nIGZvciBkZXBlbmRlbmNpZXMgdG8gYmUgcmVnaXN0ZXJlZCB3aWxsIG5vdCBiZSBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1BsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMucGx1Z2luc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zIGFzIFBsdWdpbkxvYWRlciBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcltdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiByZWdpc3RlcmVkIHBsdWdpbnMsIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0UGx1Z2luTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBsdWdpbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQbHVnaW5Mb2FkZXIgb2JqZWN0IG9mIGEgZ2l2ZW4gcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcn1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsdWdpbiBjYWxsZWQgXCIke2xvd2VyTmFtZX1cIiBoYXMgYmVlbiByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCBwbHVnaW5zIHRoYXQgbGlzdGVuIHRvIHRoZSBnaXZlbiBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBwcm9taXNlIGV2ZW50cy4gSXQgZG9lcyBOT1QgY2hlY2sgdGhhdCB0aGUgcGx1Z2luJ3MgbGlzdGVuZXIgYWN0dWFsbHkgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gVGhlIG5hbWUgb2YgdGhlIHBsdWdpbnMgdGhhdCBhcmUgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICovXG4gICAgbGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgcGx1Z2luXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwbHVnaW4uaGFzTWV0aG9kKCdsaXN0ZW5zJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2ltcGxlIHJlYWR5IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogU3lub255bW91cyB3aXRoIGpRdWVyeSdzIFwiJChkb2N1bWVudCkucmVhZHkoKVwiIGZ1bmN0aW9uYWxpdHksIHRoaXMgYWxsb3dzIGlubGluZSBzY3JpcHRzIHRvXG4gICAgICogYXR0YWNoIHRoZW1zZWx2ZXMgdG8gU25vd2JvYXJkIGltbWVkaWF0ZWx5IGJ1dCBvbmx5IGZpcmUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5yZWFkaW5lc3MuZG9tKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbigncmVhZHknLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBhZC1ob2Mgc2NyaXB0cyB0aGF0IGRvbid0IG5lZWQgYSBmdWxsIHBsdWdpbi4gVGhlIGdpdmVuIGNhbGxiYWNrIHdpbGwgYmVcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgbmFtZSBwcm92aWRlZCBmaXJlcy4gVGhpcyB3b3JrcyBmb3IgYm90aCBub3JtYWwgYW5kIFByb21pc2UgZXZlbnRzLiBGb3JcbiAgICAgKiBhIFByb21pc2UgZXZlbnQsIHlvdXIgY2FsbGJhY2sgbXVzdCByZXR1cm4gYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmNsdWRlcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgc2ltcGxlIGxpc3RlbmVyIGZvciBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBnbG9iYWwgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIElmIGFueSBwbHVnaW4gcmV0dXJucyBhIGBmYWxzZWAsIHRoZSBldmVudCBpcyBjb25zaWRlcmVkIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgZXZlbnQgd2FzIG5vdCBjYW5jZWxsZWRcbiAgICAgKi9cbiAgICBnbG9iYWxFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImAsIC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgIC8vIEZpbmQgcGx1Z2lucyBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiOiAke2xpc3RlbmVycy5qb2luKCcsICcpfWApO1xuXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwbHVnaW4gaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgcGx1Z2lucyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgXCIke2xpc3Rlbk1ldGhvZH1cIiBtZXRob2QgaW4gXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIiBjYW5jZWxsZWQgYnkgXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudC5cbiAgICAgICAgaWYgKCFjYW5jZWxsZWQgJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYEZvdW5kICR7dGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGh9IGFkLWhvYyBsaXN0ZW5lcihzKSBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbGlzdGVuZXIgaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgbGlzdGVuZXJzIGFyZSBjb25zaWRlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX0gY2FuY2VsbGVkIGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhY2FuY2VsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMsIGV4cGVjdGluZyBhIFByb21pc2UgdG8gYmUgcmV0dXJuZWQgYnkgYWxsLlxuICAgICAqXG4gICAgICogVGhpcyBjb2xsYXRlcyBhbGwgcGx1Z2lucyByZXNwb25zZXMgaW50byBvbmUgbGFyZ2UgUHJvbWlzZSB0aGF0IGVpdGhlciBleHBlY3RzIGFsbCB0byBiZSByZXNvbHZlZCwgb3Igb25lIHRvIHJlamVjdC5cbiAgICAgKiBJZiBubyBsaXN0ZW5lcnMgYXJlIGZvdW5kLCBhIHJlc29sdmVkIFByb21pc2UgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICovXG4gICAgZ2xvYmFsUHJvbWlzZUV2ZW50KGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmRlYnVnKGBDYWxsaW5nIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYE5vIGxpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcoYExpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmdldEluc3RhbmNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3Rlbk1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJylbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIG1ldGhvZHMgZm9yIGFsbCBwbHVnaW5zLCBpZiB0aGV5IGhhdmUgYSBtZXRob2Qgc3BlY2lmaWVkIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgICBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VQcm9taXNlID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbmNlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgcHJvbWlzZSBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyUHJvbWlzZSA9IGxpc3RlbmVyKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobGlzdGVuZXJQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgc3R5bGVkIG1lc3NhZ2UgaW4gdGhlIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBJbmNsdWRlcyBwYXJhbWV0ZXJzIGFuZCBhIHN0YWNrIHRyYWNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgbG9nTWVzc2FnZShjb2xvciwgYm9sZCwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgJyVjW1Nub3dib2FyZF0nLFxuICAgICAgICAgICAgYGNvbG9yOiAke2NvbG9yfTsgZm9udC13ZWlnaHQ6ICR7KGJvbGQpID8gJ2JvbGQnIDogJ25vcm1hbCd9O2AsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgICBgJWNQYXJhbWV0ZXJzICVjKCR7cGFyYW1ldGVycy5sZW5ndGh9KWAsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgICAgICAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aW5kZXh9OmAsICdjb2xvcjogcmdiKDg4LCA4OCwgODgpOyBmb250LXdlaWdodDogbm9ybWFsOycsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCclY1RyYWNlJywgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgZGVidWcgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIFRoZXNlIG1lc3NhZ2VzIGFyZSBvbmx5IHNob3duIHdoZW4gZGVidWdnaW5nIGlzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWJ1Z0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYigyMjksIDM1LCAzNSknLCB0cnVlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU25vd2JvYXJkIGZyb20gJy4vbWFpbi9Tbm93Ym9hcmQnO1xuaW1wb3J0IFByb3h5SGFuZGxlciBmcm9tICcuL21haW4vUHJveHlIYW5kbGVyJztcblxuKCh3aW5kb3cpID0+IHtcbiAgICBjb25zdCBzbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgIG5ldyBTbm93Ym9hcmQoKSxcbiAgICAgICAgUHJveHlIYW5kbGVyLFxuICAgICk7XG5cbiAgICAvLyBDb3ZlciBhbGwgYWxpYXNlc1xuICAgIHdpbmRvdy5zbm93Ym9hcmQgPSBzbm93Ym9hcmQ7XG4gICAgd2luZG93LlNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd0JvYXJkID0gc25vd2JvYXJkO1xufSkod2luZG93KTtcbiIsImltcG9ydCBCYXNlQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIENvb2tpZSB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBpcyBhIHRoaW4gd3JhcHBlciBhcm91bmQgdGhlIFwianMtY29va2llXCIgbGlicmFyeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgZG9tYWluOiBudWxsLFxuICAgICAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnTGF4JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgY29va2llIHBhcmFtZXRlcnMgZm9yIGFsbCBzdWJzZXF1ZW50IFwic2V0XCIgYW5kIFwicmVtb3ZlXCIgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29raWUgZGVmYXVsdHMgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBkZWZhdWx0IGNvb2tpZSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmRlZmF1bHRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRzW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIElmIGBuYW1lYCBpcyB1bmRlZmluZWQsIHJldHVybnMgYWxsIGNvb2tpZXMgYXMgYW4gT2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fFN0cmluZ31cbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gQmFzZUNvb2tpZS5nZXQoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29va2llcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbY29va2llTmFtZSwgY29va2llVmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLmdldCcsIGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29va2llc1tjb29raWVOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29raWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gQmFzZUNvb2tpZS5nZXQobmFtZSk7XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBvdmVycmlkZSB0aGUgZ290dGVuIHZhbHVlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuZ2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IGFkZGl0aW9uYWwgY29va2llIHBhcmFtZXRlcnMgdGhyb3VnaCB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzYXZlVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIG92ZXJyaWRlIHRoZSB2YWx1ZSB0byBzYXZlXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdjb29raWUuc2V0JywgbmFtZSwgdmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2F2ZVZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBCYXNlQ29va2llLnNldChuYW1lLCBzYXZlVmFsdWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGNvb2tpZSBieSBuYW1lLlxuICAgICAqXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IHRoZSBhZGRpdGlvbmFsIGNvb2tpZSBwYXJhbWV0ZXJzIHZpYSB0aGUgXCJvcHRpb25zXCIgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbW92ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIEJhc2VDb29raWUucmVtb3ZlKG5hbWUsIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdHMoKSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogSlNPTiBQYXJzZXIgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgcGFyc2VzIEpTT04tbGlrZSBkYXRhIHRoYXQgZG9lcyBub3Qgc3RyaWN0bHkgbWVldCB0aGUgSlNPTiBzcGVjaWZpY2F0aW9ucyBpbiBvcmRlciB0byBzaW1wbGlmeSBkZXZlbG9wbWVudC5cbiAqIEl0IGlzIGEgc2FmZSByZXBsYWNlbWVudCBmb3IgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmFsKFwiKHtcIiArIHZhbHVlICsgXCJ9KVwiKSkpIHRoYXQgZG9lcyBub3QgcmVxdWlyZSB0aGUgdXNlIG9mIGV2YWwoKVxuICpcbiAqIEBhdXRob3IgQXl1bWkgSGFtYXNha2lcbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vY3RvYmVyY21zL29jdG9iZXIvcHVsbC80NTI3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25QYXJzZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduSlNPTiA9IChqc29uKSA9PiB0aGlzLnBhcnNlKGpzb24pO1xuICAgICAgICB3aW5kb3cub2NKU09OID0gd2luZG93LnduSlNPTjtcbiAgICB9XG5cbiAgICBwYXJzZShzdHIpIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHRoaXMucGFyc2VTdHJpbmcoc3RyKTtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfVxuXG4gICAgcGFyc2VTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgbGV0IHN0ciA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnJva2VuIEpTT04gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgICAgIGxldCBrZXkgPSBudWxsO1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8qXG4gICAgICAgICogdGhlIG1pc3Rha2UgJywnXG4gICAgICAgICovXG4gICAgICAgIHdoaWxlIChzdHIgJiYgc3RyWzBdID09PSAnLCcpIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIHN0cmluZ1xuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAnXCInIHx8IHN0clswXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGlmIChzdHJbc3RyLmxlbmd0aCAtIDFdICE9PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nIEpTT04gb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5ID0gJ1wiJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaSArIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBzdHJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9ICdcXFxcXCInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYm9vbGVhblxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyID09PSAndHJ1ZScgfHwgc3RyID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBudWxsXG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHIgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogbnVtYmVyXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihzdHIpO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihudW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyWzBdID09PSAneycpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnbmVlZEtleSc7XG4gICAgICAgICAgICBrZXkgPSBudWxsO1xuICAgICAgICAgICAgcmVzdWx0ID0gJ3snO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmxhbmtDaGFyKHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ25lZWRLZXknICYmIChzdHJbaV0gPT09ICdcIicgfHwgc3RyW2ldID09PSAnXFwnJykpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZUtleShzdHIsIGkgKyAxLCBzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYFwiJHtrZXl9XCJgO1xuICAgICAgICAgICAgICAgICAgICBpICs9IGtleS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEtleScgJiYgdGhpcy5jYW5CZUtleUhlYWQoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlS2V5KHN0ciwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXCInO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgaSArPSBrZXkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlcktleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJLZXknICYmIHN0cltpXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnOic7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnOic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHRoaXMuZ2V0Qm9keShzdHIsIGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpICsgYm9keS5vcmlnaW5MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5wYXJzZVN0cmluZyhib2R5LmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJCb2R5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlckJvZHknIHx8IHR5cGUgPT09ICduZWVkS2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdHJbbGFzdF0gPT09ICcsJyB8fCB0aGlzLmlzQmxhbmtDaGFyKHN0cltsYXN0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2xhc3RdID09PSAnfScgJiYgbGFzdCA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSBpICYmIHJlc3VsdCAhPT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkS2V5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBsYXN0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBvYmplY3QgbmVhciAke3Jlc3VsdH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnWyc7XG4gICAgICAgICAgICB0eXBlID0gJ25lZWRCb2R5JztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJ1xcbicgfHwgc3RyW2ldID09PSAnXFx0Jykge1xuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmVlZEJvZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdudWxsLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICddJyAmJiBpID09PSBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICddJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gdGhpcy5nZXRCb2R5KHN0ciwgaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBib2R5Lm9yaWdpbkxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnBhcnNlU3RyaW5nKGJvZHkuYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdhZnRlckJvZHknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyQm9keScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICduZWVkQm9keSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYWwgd2l0aCBtaXN0YWtlIFwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RyW2kgKyAxXSA9PT0gJywnIHx8IHRoaXMuaXNCbGFua0NoYXIoc3RyW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbnVsbCwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScgJiYgaSA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGFycmF5IG5lYXIgJHtyZXN1bHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0Qm9keShzdHIsIHBvcykge1xuICAgICAgICBsZXQgYm9keSA9ICcnO1xuXG4gICAgICAgIC8vIHBhcnNlIHN0cmluZyBib2R5XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ1wiJyB8fCBzdHJbcG9zXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgIGJvZHkgPSBzdHJbcG9zXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvcyArIDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IHN0cltwb3NdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW3Bvc107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gc3RyaW5nIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSB0cnVlIC8gZmFsc2VcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAndCcpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZigndHJ1ZScsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ3RydWUnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ3RydWUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9vbGVhbiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKDAsIHBvcyArIDEwKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICdmJykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdmJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAnZmFsc2UnLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudWxsXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ251bGwnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICdudWxsJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdudWxsJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBudW1iZXJcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnLScgfHwgc3RyW3Bvc10gPT09ICcrJyB8fCBzdHJbcG9zXSA9PT0gJy4nIHx8IChzdHJbcG9zXSA+PSAnMCcgJiYgc3RyW3Bvc10gPD0gJzknKSkge1xuICAgICAgICAgICAgYm9keSA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJy0nIHx8IHN0cltpXSA9PT0gJysnIHx8IHN0cltpXSA9PT0gJy4nIHx8IChzdHJbaV0gPj0gJzAnICYmIHN0cltpXSA8PSAnOScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGJvZHkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gbnVtYmVyIGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJzZSBvYmplY3RcbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAneycgfHwgc3RyW3Bvc10gPT09ICdbJykge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBbXG4gICAgICAgICAgICAgICAgc3RyW3Bvc10sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYm9keSA9IHN0cltwb3NdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcG9zICsgMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcIicgJiYgc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgneycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gJHsoc3RyW3Bvc10gPT09ICd7JyA/ICdvYmplY3QnIDogJ2FycmF5Jyl9IGJvZHkgbmVhciAke2JvZHl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogaSAtIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib2R5IG5lYXIgJHtzdHIuc3Vic3RyKChwb3MgLSA1ID49IDApID8gcG9zIC0gNSA6IDAsIDUwKX1gKTtcbiAgICB9XG5cbiAgICBwYXJzZUtleShzdHIsIHBvcywgcXVvdGUpIHtcbiAgICAgICAgbGV0IGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChxdW90ZSAmJiBxdW90ZSA9PT0gc3RyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcXVvdGUgJiYgKHN0cltpXSA9PT0gJyAnIHx8IHN0cltpXSA9PT0gJzonKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSArPSBzdHJbaV07XG5cbiAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJyAmJiBpICsgMSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIHN5bnRheCBuZWFyICR7a2V5fWApO1xuICAgIH1cblxuICAgIGNhbkJlS2V5SGVhZChjaCkge1xuICAgICAgICBpZiAoY2hbMF0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY2hbMF0gPj0gJ2EnICYmIGNoWzBdIDw9ICd6JykgfHwgKGNoWzBdID49ICdBJyAmJiBjaFswXSA8PSAnWicpIHx8IGNoWzBdID09PSAnXycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaFswXSA+PSAnMCcgJiYgY2hbMF0gPD0gJzknKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hbMF0gPT09ICckJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoLmNoYXJDb2RlQXQoMCkgPiAyNTUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQmxhbmtDaGFyKGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdCc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBTYW5pdGl6ZXIgdXRpbGl0eS5cbiAqXG4gKiBDbGllbnQtc2lkZSBIVE1MIHNhbml0aXplciBkZXNpZ25lZCBtb3N0bHkgdG8gcHJldmVudCBzZWxmLVhTUyBhdHRhY2tzLlxuICogVGhlIHNhbml0aXplciB1dGlsaXR5IHdpbGwgc3RyaXAgYWxsIGF0dHJpYnV0ZXMgdGhhdCBzdGFydCB3aXRoIGBvbmAgKHVzdWFsbHkgSlMgZXZlbnQgaGFuZGxlcnMgYXMgYXR0cmlidXRlcywgaS5lLiBgb25sb2FkYCBvciBgb25lcnJvcmApIG9yIGNvbnRhaW4gdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sIGluIHRoZWlyIHZhbHVlcy5cbiAqXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5pdGl6ZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgLy8gQWRkIHRvIGdsb2JhbCBmdW5jdGlvbiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgd2luZG93LnduU2FuaXRpemUgPSAoaHRtbCkgPT4gdGhpcy5zYW5pdGl6ZShodG1sKTtcbiAgICAgICAgd2luZG93Lm9jU2FuaXRpemUgPSB3aW5kb3cud25TYW5pdGl6ZTtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZShodG1sLCBib2R5T25seSkge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICBjb25zdCByZXR1cm5Cb2R5T25seSA9IChib2R5T25seSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBib2R5T25seSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgPyBib2R5T25seVxuICAgICAgICAgICAgOiB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2FuaXRpemVOb2RlKGRvbS5nZXRSb290Tm9kZSgpKTtcblxuICAgICAgICByZXR1cm4gKHJldHVybkJvZHlPbmx5KSA/IGRvbS5ib2R5LmlubmVySFRNTCA6IGRvbS5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgc2FuaXRpemVOb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaW1BdHRyaWJ1dGVzKG5vZGUpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKTtcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYW5pdGl6ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmltQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSkudmFsdWU7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIHJlbW92ZSBhdHRyaWJ1dGVzIHdoZXJlIHRoZSBuYW1lcyBzdGFydCB3aXRoIFwib25cIiAoZm9yIGV4YW1wbGU6IG9ubG9hZCwgb25lcnJvci4uLilcbiAgICAgICAgICAgICogcmVtb3ZlIGF0dHJpYnV0ZXMgd2hlcmUgdGhlIHZhbHVlIHN0YXJ0cyB3aXRoIHRoZSBcImphdmFzY3JpcHQ6XCIgcHNldWRvIHByb3RvY29sIChmb3IgZXhhbXBsZSBocmVmPVwiamF2YXNjcmlwdDphbGVydCgxKVwiKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgaWYgKGF0dHJOYW1lLmluZGV4T2YoJ29uJykgPT09IDAgfHwgYXR0clZhbHVlLmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIFVSTCB1dGlsaXR5LlxuICpcbiAqIFRoaXMgdXRpbGl0eSBwcm92aWRlcyBVUkwgZnVuY3Rpb25zLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLmJhc2VVcmwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgVVJMIGJhc2VkIG9uIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKlxuICAgICAqIElmIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICB0byh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvWy1hLXowLTlfKzpdKzpcXC9cXC9bLWEtejAtOUA6JS5fK34jPV17MSwyNTZ9XFwuW2EtejAtOSgpXXsxLDZ9XFxiKFstYS16MC05KClAOiVfKy5+Iz8mLy89XSopL2k7XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCh1cmxSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aGVVcmwgPSB1cmwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybCgpfSR7dGhlVXJsfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgdGhlIGJhc2UgVVJMIG9mIHRoaXMgaW5zdGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZGV0ZXJtaW5lcyB0aGUgYmFzZSBVUkwgZnJvbSB0aHJlZSBzb3VyY2VzLCBpbiBvcmRlcjpcbiAgICAgKiAgLSBJZiBTbm93Ym9hcmQgaXMgbG9hZGVkIHZpYSB0aGUgYHslIHNub3dib2FyZCAlfWAgdGFnLCBpdCB3aWxsIHJldHJpZXZlIHRoZSBiYXNlIFVSTCB0aGF0XG4gICAgICogaXMgYXV0b21hdGljYWxseSBpbmNsdWRlZCB0aGVyZS5cbiAgICAgKiAgLSBJZiBhIGA8YmFzZT5gIHRhZyBpcyBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBiYXNlIHRhZy5cbiAgICAgKiAgLSBGaW5hbGx5LCBpdCB3aWxsIHRha2UgYSBndWVzcyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBUaGlzIHdpbGwgbGlrZWx5IG5vdCB3b3JrIGZvciBzaXRlc1xuICAgICAqIHRoYXQgcmVzaWRlIGluIHN1YmRpcmVjdG9yaWVzLlxuICAgICAqXG4gICAgICogVGhlIGJhc2UgVVJMIHdpbGwgYWx3YXlzIGNvbnRhaW4gYSB0cmFpbGluZyBiYWNrc2xhc2guXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJhc2VVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kQmFzZVVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKS5kYXRhc2V0LmJhc2VVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSBbXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgICAgICAnLy8nLFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICAnLycsXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdXJsUGFydHMuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgYmFzZSBVUkwsIGVuc3VyaW5nIGl0IGlzIGEgSFRUUC9IVFRQcyBVUkwuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgU25vd2JvYXJkIHNjcmlwdCBvciA8YmFzZT4gdGFnIG9uIHRoZSBwYWdlIHVzZSBhIGRpZmZlcmVudCB0eXBlIG9mIFVSTCwgdGhpcyB3aWxsIGZhaWwgd2l0aFxuICAgICAqIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgIHZhbGlkYXRlQmFzZVVybCh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXigoW146Lz8jXSspOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vaTtcbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSB1cmxSZWdleC5leGVjKHVybCk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gdXJsUGFydHNbMl07XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVybFBhcnRzWzRdO1xuXG4gICAgICAgIGlmIChwcm90b2NvbCAmJiBbJ2h0dHAnLCAnaHR0cHMnXS5pbmRleE9mKHByb3RvY29sLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkb21haW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBiYXNlIFVSTCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh1cmwuc3Vic3RyKC0xKSA9PT0gJy8nKVxuICAgICAgICAgICAgPyB1cmxcbiAgICAgICAgICAgIDogYCR7dXJsfS9gO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQbHVnaW5CYXNlIiwic25vd2JvYXJkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJkZXBlbmRlbmNpZXMiLCJsaXN0ZW5zIiwiZGVzdHJ1Y3QiLCJkZXRhY2giLCJkZXN0cnVjdG9yIiwiZGVmYXVsdCIsIlNpbmdsZXRvbiIsIl9QbHVnaW5CYXNlIiwiX2luaGVyaXRzIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsImdldCIsInRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJFcnJvciIsImNvbmNhdCIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsIlJlZmxlY3QiLCJnZXRJbnN0YW5jZSIsImFwcGx5IiwiaGFzIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJuYW1lIiwiaW5zdGFuY2UiLCJQcm94eSIsIk9iamVjdCIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJwcm90b3R5cGUiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJfbGVuIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIkFycmF5IiwiX2tleSIsImFyZ3MiLCJzaGlmdCIsIl90aGlzIiwiX2xlbjIiLCJfa2V5MiIsImRlcGVuZGVuY2llc0Z1bGZpbGxlZCIsInVubWV0IiwiZ2V0RGVwZW5kZW5jaWVzIiwiZmlsdGVyIiwiaXRlbSIsImdldFBsdWdpbk5hbWVzIiwiam9pbiIsImlzU2luZ2xldG9uIiwiaW5pdGlhbGlzZVNpbmdsZXRvbiIsImtleXMiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiX2VudHJ5IiwiX3NsaWNlZFRvQXJyYXkiLCJjYWxsYmFjayIsIl9lbnRyeTIiLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5MyIsIl9lbnRyeTQiLCJfbGVuNCIsIl9rZXk0IiwibmV3SW5zdGFuY2UiLCJfY29uc3RydWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX3RoaXMyIiwiX2xlbjUiLCJfa2V5NSIsIm1hcCIsIl90aGlzMyIsImZ1bGZpbGxlZCIsInBsdWdpbiIsIm1vY2siLCJfdGhpczQiLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWciLCJkZWJ1Z0VuYWJsZWQiLCJhdXRvSW5pdFNpbmdsZXRvbnMiLCJwbHVnaW5zIiwibGlzdGVuZXJzIiwiZm91bmRCYXNlVXJsIiwicmVhZGluZXNzIiwiZG9tIiwiYXR0YWNoQWJzdHJhY3RzIiwibG9hZFV0aWxpdGllcyIsImluaXRpYWxpc2UiLCJhZGRQbHVnaW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJnbG9iYWxFdmVudCIsInZhbHVlcyIsImxvd2VyTmFtZSIsInVuZGVmaW5lZCIsImdldFBsdWdpbnMiLCJyZWFkeU1ldGhvZCIsInJlYWR5IiwicmVtb3ZlUGx1Z2luIiwiZ2V0UGx1Z2luIiwibGlzdGVuc1RvRXZlbnQiLCJldmVudE5hbWUiLCJvbiIsIm9mZiIsImluZGV4IiwiY2FuY2VsbGVkIiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwiZXJyb3IiLCJsaXN0ZW5lciIsImdsb2JhbFByb21pc2VFdmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJvbWlzZXMiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJhbGwiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwibWVzc2FnZSIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsInBhcmFtIiwibG9nIiwiZ3JvdXBFbmQiLCJ0cmFjZSIsIlByb3h5SGFuZGxlciIsIlNub3dCb2FyZCIsIkJhc2VDb29raWUiLCJfU2luZ2xldG9uIiwiZGVmYXVsdHMiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJvcHRpb25zIiwiX3R5cGVvZiIsImdldERlZmF1bHRzIiwiY29va2llcyIsImNvb2tpZU5hbWUiLCJjb29raWVWYWx1ZSIsIm5ld1ZhbHVlIiwic2V0Iiwic2F2ZVZhbHVlIiwiX29iamVjdFNwcmVhZCIsInJlbW92ZSIsInduSlNPTiIsImpzb24iLCJwYXJzZSIsIm9jSlNPTiIsInN0ciIsImpzb25TdHJpbmciLCJwYXJzZVN0cmluZyIsIkpTT04iLCJ0cmltIiwidHlwZSIsImJvZHkiLCJzdWJzdHIiLCJpIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJ0b1N0cmluZyIsImlzQmxhbmtDaGFyIiwicGFyc2VLZXkiLCJjYW5CZUtleUhlYWQiLCJnZXRCb2R5Iiwib3JpZ2luTGVuZ3RoIiwibGFzdCIsInBvcyIsInN0YWNrIiwicG9wIiwicXVvdGUiLCJjaCIsImNoYXJDb2RlQXQiLCJ3blNhbml0aXplIiwiaHRtbCIsInNhbml0aXplIiwib2NTYW5pdGl6ZSIsImJvZHlPbmx5IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmV0dXJuQm9keU9ubHkiLCJzYW5pdGl6ZU5vZGUiLCJnZXRSb290Tm9kZSIsImlubmVySFRNTCIsIm5vZGUiLCJ0YWdOYW1lIiwidHJpbUF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImZyb20iLCJjaGlsZCIsImF0dHJpYnV0ZXMiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJhc2VVcmwiLCJ0byIsInVybCIsInVybFJlZ2V4IiwibWF0Y2giLCJ0aGVVcmwiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsaWRhdGVCYXNlVXJsIiwiZGF0YXNldCIsImdldEF0dHJpYnV0ZSIsInVybFBhcnRzIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJleGVjIl0sInNvdXJjZVJvb3QiOiIifQ==