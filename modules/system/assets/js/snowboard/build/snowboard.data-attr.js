"use strict";
(self["webpackChunk_wintercms_wn_system_module"] = self["webpackChunk_wintercms_wn_system_module"] || []).push([["/assets/js/snowboard/build/snowboard.data-attr"],{

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

/***/ "./assets/js/snowboard/ajax/handlers/AttributeRequest.js":
/*!***************************************************************!*\
  !*** ./assets/js/snowboard/ajax/handlers/AttributeRequest.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttributeRequest)
/* harmony export */ });
/* harmony import */ var _abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstracts/Singleton */ "./assets/js/snowboard/abstracts/Singleton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
 * Enable Data Attributes API for AJAX requests.
 *
 * This is an extension of the base AJAX functionality that includes handling of HTML data attributes for processing
 * AJAX requests. It is separated from the base AJAX functionality to allow developers to opt-out of data attribute
 * requests if they do not intend to use them.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var AttributeRequest = /*#__PURE__*/function (_Singleton) {
  _inherits(AttributeRequest, _Singleton);
  function AttributeRequest() {
    _classCallCheck(this, AttributeRequest);
    return _callSuper(this, AttributeRequest, arguments);
  }
  _createClass(AttributeRequest, [{
    key: "listens",
    value:
    /**
     * Listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready',
        ajaxSetup: 'onAjaxSetup'
      };
    }

    /**
     * Ready event callback.
     *
     * Attaches handlers to the window to listen for all request interactions.
     */
  }, {
    key: "ready",
    value: function ready() {
      this.attachHandlers();
      this.disableDefaultFormValidation();
    }

    /**
     * Dependencies.
     *
     * @returns {string[]}
     */
  }, {
    key: "dependencies",
    value: function dependencies() {
      return ['request', 'jsonParser'];
    }

    /**
     * Destructor.
     *
     * Detaches all handlers.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.detachHandlers();
      _get(_getPrototypeOf(AttributeRequest.prototype), "destruct", this).call(this);
    }

    /**
     * Attaches the necessary handlers for all request interactions.
     */
  }, {
    key: "attachHandlers",
    value: function attachHandlers() {
      var _this = this;
      window.addEventListener('change', function (event) {
        return _this.changeHandler(event);
      });
      window.addEventListener('click', function (event) {
        return _this.clickHandler(event);
      });
      window.addEventListener('keydown', function (event) {
        return _this.keyDownHandler(event);
      });
      window.addEventListener('submit', function (event) {
        return _this.submitHandler(event);
      });
    }

    /**
     * Disables default form validation for AJAX forms.
     *
     * A form that contains a `data-request` attribute to specify an AJAX call without including a `data-browser-validate`
     * attribute means that the AJAX callback function will likely be handling the validation instead.
     */
  }, {
    key: "disableDefaultFormValidation",
    value: function disableDefaultFormValidation() {
      document.querySelectorAll('form[data-request]:not([data-browser-validate])').forEach(function (form) {
        form.setAttribute('novalidate', true);
      });
    }

    /**
     * Detaches the necessary handlers for all request interactions.
     */
  }, {
    key: "detachHandlers",
    value: function detachHandlers() {
      var _this2 = this;
      window.removeEventListener('change', function (event) {
        return _this2.changeHandler(event);
      });
      window.removeEventListener('click', function (event) {
        return _this2.clickHandler(event);
      });
      window.removeEventListener('keydown', function (event) {
        return _this2.keyDownHandler(event);
      });
      window.removeEventListener('submit', function (event) {
        return _this2.submitHandler(event);
      });
    }

    /**
     * Handles changes to select, radio, checkbox and file inputs.
     *
     * @param {Event} event
     */
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      // Check that we are changing a valid element
      if (!event.target.matches('select[data-request], input[type=radio][data-request], input[type=checkbox][data-request], input[type=file][data-request]')) {
        return;
      }
      this.processRequestOnElement(event.target);
    }

    /**
     * Handles clicks on hyperlinks and buttons.
     *
     * This event can bubble up the hierarchy to find a suitable request element.
     *
     * @param {Event} event
     */
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var currentElement = event.target;
      while (currentElement.tagName !== 'HTML') {
        if (!currentElement.matches('a[data-request], button[data-request], input[type=button][data-request], input[type=submit][data-request]')) {
          currentElement = currentElement.parentElement;
        } else {
          event.preventDefault();
          this.processRequestOnElement(currentElement);
          break;
        }
      }
    }

    /**
     * Handles key presses on inputs
     *
     * @param {Event} event
     */
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      // Check that we are inputting into a valid element
      if (!event.target.matches('input')) {
        return;
      }

      // Check that the input type is valid
      var validTypes = ['checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'image', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'time', 'url', 'week'];
      if (validTypes.indexOf(event.target.getAttribute('type')) === -1) {
        return;
      }
      if (event.key === 'Enter' && event.target.matches('*[data-request]')) {
        this.processRequestOnElement(event.target);
        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (event.target.matches('*[data-track-input]')) {
        this.trackInput(event.target);
      }
    }

    /**
     * Handles form submissions.
     *
     * @param {Event} event
     */
  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      // Check that we are submitting a valid form
      if (!event.target.matches('form[data-request]')) {
        return;
      }
      event.preventDefault();
      this.processRequestOnElement(event.target);
    }

    /**
     * Processes a request on a given element, using its data attributes.
     *
     * @param {HTMLElement} element
     */
  }, {
    key: "processRequestOnElement",
    value: function processRequestOnElement(element) {
      var data = element.dataset;
      var handler = String(data.request);
      var options = {
        confirm: 'requestConfirm' in data ? String(data.requestConfirm) : null,
        redirect: 'requestRedirect' in data ? String(data.requestRedirect) : null,
        loading: 'requestLoading' in data ? String(data.requestLoading) : null,
        flash: 'requestFlash' in data,
        files: 'requestFiles' in data,
        browserValidate: 'requestBrowserValidate' in data,
        form: 'requestForm' in data ? String(data.requestForm) : null,
        url: 'requestUrl' in data ? String(data.requestUrl) : null,
        update: 'requestUpdate' in data ? this.parseData(String(data.requestUpdate)) : [],
        data: 'requestData' in data ? this.parseData(String(data.requestData)) : []
      };
      this.snowboard.request(element, handler, options);
    }

    /**
     * Sets up an AJAX request via HTML attributes.
     *
     * @param {Request} request
     */
  }, {
    key: "onAjaxSetup",
    value: function onAjaxSetup(request) {
      if (!request.element) {
        return;
      }
      var fieldName = request.element.getAttribute('name');
      var data = _objectSpread(_objectSpread({}, this.getParentRequestData(request.element)), request.options.data);
      if (request.element && request.element.matches('input, textarea, select, button') && !request.form && fieldName && !request.options.data[fieldName]) {
        data[fieldName] = request.element.value;
      }
      request.options.data = data;
    }

    /**
     * Parses and collates all data from elements up the DOM hierarchy.
     *
     * @param {Element} target
     * @returns {Object}
     */
  }, {
    key: "getParentRequestData",
    value: function getParentRequestData(target) {
      var _this3 = this;
      var elements = [];
      var data = {};
      var currentElement = target;
      while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
        elements.push(currentElement.parentElement);
        currentElement = currentElement.parentElement;
      }
      elements.reverse();
      elements.forEach(function (element) {
        var elementData = element.dataset;
        if ('requestData' in elementData) {
          data = _objectSpread(_objectSpread({}, data), _this3.parseData(elementData.requestData));
        }
      });
      return data;
    }

    /**
     * Parses data in the Winter/October JSON format.
     *
     * @param {String} data
     * @returns {Object}
     */
  }, {
    key: "parseData",
    value: function parseData(data) {
      var value;
      if (data === undefined) {
        value = '';
      }
      if (_typeof(value) === 'object') {
        return value;
      }
      try {
        return this.snowboard.jsonparser().parse("{".concat(data, "}"));
      } catch (e) {
        throw new Error("Error parsing the data attribute on element: ".concat(e.message));
      }
    }
  }, {
    key: "trackInput",
    value: function trackInput(element) {
      var _this4 = this;
      var lastValue = element.dataset.lastValue;
      var interval = element.dataset.trackInput || 300;
      if (lastValue !== undefined && lastValue === element.value) {
        return;
      }
      this.resetTrackInputTimer(element);
      element.dataset.inputTimer = window.setTimeout(function () {
        if (element.dataset.request) {
          _this4.processRequestOnElement(element);
          return;
        }

        // Traverse up the hierarchy and find a form that sends an AJAX query
        var currentElement = element;
        while (currentElement.parentElement && currentElement.parentElement.tagName !== 'HTML') {
          currentElement = currentElement.parentElement;
          if (currentElement.tagName === 'FORM' && currentElement.dataset.request) {
            _this4.processRequestOnElement(currentElement);
            break;
          }
        }
      }, interval);
    }
  }, {
    key: "resetTrackInputTimer",
    value: function resetTrackInputTimer(element) {
      if (element.dataset.inputTimer) {
        window.clearTimeout(element.dataset.inputTimer);
        element.dataset.inputTimer = null;
      }
    }
  }]);
  return AttributeRequest;
}(_abstracts_Singleton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/snowboard/snowboard.data-attr.js":
/*!****************************************************!*\
  !*** ./assets/js/snowboard/snowboard.data-attr.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax/handlers/AttributeRequest */ "./assets/js/snowboard/ajax/handlers/AttributeRequest.js");

if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the HTML data attribute AJAX request feature.');
}
(function (Snowboard) {
  Snowboard.addPlugin('attributeRequest', _ajax_handlers_AttributeRequest__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.Snowboard);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/snowboard/snowboard.data-attr.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Fzc2V0cy9qcy9zbm93Ym9hcmQvYnVpbGQvc25vd2JvYXJkLmRhdGEtYXR0ci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBUXFCQSxVQUFVO0VBQzNCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxXQUFZQyxTQUFTLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0VBQzlCOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBTUEsU0FBQUMsVUFBQSxFQUFZLENBQ1o7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUFFLGFBQUEsRUFBZTtNQUNYLE9BQU8sRUFBRTtJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFLQSxTQUFBRyxRQUFBLEVBQVU7TUFDTixPQUFPLENBQUMsQ0FBQztJQUNiOztJQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxJO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFJLFNBQUEsRUFBVztNQUNQLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1QsU0FBUztJQUN6Qjs7SUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBSkk7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBS0EsU0FBQU0sV0FBQSxFQUFhO01BQ1QsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQztJQUNuQjtFQUFDO0VBQUEsT0FBQVQsVUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFWTs7QUFF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QUFPLENBQUM7VUFDckM7UUFDSjs7UUFFQTtRQUNBLElBQUlULGNBQWMsR0FBR1MsT0FBTztRQUM1QixPQUFPVCxjQUFjLENBQUNFLGFBQWEsSUFBSUYsY0FBYyxDQUFDRSxhQUFhLENBQUNELE9BQU8sS0FBSyxNQUFNLEVBQUU7VUFDcEZELGNBQWMsR0FBR0EsY0FBYyxDQUFDRSxhQUFhO1VBRTdDLElBQUlGLGNBQWMsQ0FBQ0MsT0FBTyxLQUFLLE1BQU0sSUFBSUQsY0FBYyxDQUFDVyxPQUFPLENBQUNHLE9BQU8sRUFBRTtZQUNyRW1DLE1BQUksQ0FBQ2xELHVCQUF1QixDQUFDQyxjQUFjLENBQUM7WUFDNUM7VUFDSjtRQUNKO01BQ0osQ0FBQyxFQUFFbUQsUUFBUSxDQUFDO0lBQ2hCO0VBQUM7SUFBQTlGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RixxQkFBcUIzQyxPQUFPLEVBQUU7TUFDMUIsSUFBSUEsT0FBTyxDQUFDRSxPQUFPLENBQUMwQyxVQUFVLEVBQUU7UUFDNUJ0RSxNQUFNLENBQUN3RSxZQUFZLENBQUM5QyxPQUFPLENBQUNFLE9BQU8sQ0FBQzBDLFVBQVUsQ0FBQztRQUMvQzVDLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDMEMsVUFBVSxHQUFHLElBQUk7TUFDckM7SUFDSjtFQUFDO0VBQUEsT0FBQWxGLGdCQUFBO0FBQUEsRUE3VHlDTCw0REFBUzs7Ozs7Ozs7Ozs7OztBQ1poQztBQUV2QixJQUFJaUIsTUFBTSxDQUFDeUUsU0FBUyxLQUFLZixTQUFTLEVBQUU7RUFDaEMsTUFBTSxJQUFJTSxLQUFLLENBQUMsd0ZBQXdGLENBQUM7QUFDN0c7QUFFQSxDQUFDLFVBQUNTLFNBQVMsRUFBSztFQUNaQSxTQUFTLENBQUNDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRXRGLHVFQUFnQixDQUFDO0FBQzdELENBQUMsRUFBRVksTUFBTSxDQUFDeUUsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLXN5c3RlbS1tb2R1bGUvLi9hc3NldHMvanMvc25vd2JvYXJkL2Fic3RyYWN0cy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L2hhbmRsZXJzL0F0dHJpYnV0ZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1zeXN0ZW0tbW9kdWxlLy4vYXNzZXRzL2pzL3Nub3dib2FyZC9zbm93Ym9hcmQuZGF0YS1hdHRyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUGx1Z2luIGJhc2UgYWJzdHJhY3QuXG4gKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgYmFzZSBmdW5jdGlvbmFsaXR5IGZvciBhbGwgcGx1Z2lucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGUgY29uc3RydWN0b3IgaXMgcHJvdmlkZWQgdGhlIFNub3dib2FyZCBmcmFtZXdvcmsgaW5zdGFuY2UsIGFuZCBzaG91bGQgbm90IGJlIG92ZXJ3cml0dGVuXG4gICAgICogdW5sZXNzIHlvdSBhYnNvbHV0ZWx5IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc25vd2JvYXJkKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB0cmVhdGVkIGFzIHRoZSB0cnVlIGNvbnN0cnVjdG9yIG9mIGEgcGx1Z2luLCBhbmQgY2FuIGJlIG92ZXJ3cml0dGVuLlxuICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHN0cmFpZ2h0IGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgcmVxdWlyZWQgcGx1Z2lucyBmb3IgdGhpcyBzcGVjaWZpYyBtb2R1bGUgdG8gd29yay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgb2YgcGx1Z2lucyByZXF1aXJlZCBmb3IgdGhpcyBtb2R1bGUgdG8gd29yaywgYXMgc3RyaW5ncy5cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsaXN0ZW5lciBtZXRob2RzIGZvciBnbG9iYWwgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBGaXJlZCB3aGVuIHRoaXMgcGx1Z2luIGlzIHJlbW92ZWQuIENhbiBiZSBtYW51YWxseSBjYWxsZWQgaWYgeW91IGhhdmUgYW5vdGhlciBzY2VuYXJpbyBmb3JcbiAgICAgKiBkZXN0cnVjdGlvbiwgaWUuIHRoZSBlbGVtZW50IGF0dGFjaGVkIHRvIHRoZSBwbHVnaW4gaXMgcmVtb3ZlZCBvciBjaGFuZ2VkLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zbm93Ym9hcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1Z2luIGRlc3RydWN0b3IgKG9sZCBtZXRob2QgbmFtZSkuXG4gICAgICpcbiAgICAgKiBBbGxvd3MgcHJldmlvdXMgdXNhZ2Ugb2YgdGhlIFwiZGVzdHJ1Y3RvclwiIG1ldGhvZCB0byBzdGlsbCB3b3JrLlxuICAgICAqL1xuICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJ1Y3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBwbHVnaW4gYWJzdHJhY3QuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIHdpbGwgdXNlIHRvIGludGVycHJldCB0aGUgY3VycmVudCBwbHVnaW4gYXMgYVxuICogXCJzaW5nbGV0b25cIi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IG9ubHkgb25lIGluc3RhbmNlIG9mIHRoZSBwbHVnaW4gY2xhc3MgaXMgdXNlZCBhY3Jvc3MgdGhlIGJvYXJkLlxuICpcbiAqIFNpbmdsZXRvbnMgYXJlIGluaXRpYWxpc2VkIG9uIHRoZSBcImRvbVJlYWR5XCIgZXZlbnQgYnkgZGVmYXVsdC5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xldG9uIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uLy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEVuYWJsZSBEYXRhIEF0dHJpYnV0ZXMgQVBJIGZvciBBSkFYIHJlcXVlc3RzLlxuICpcbiAqIFRoaXMgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEFKQVggZnVuY3Rpb25hbGl0eSB0aGF0IGluY2x1ZGVzIGhhbmRsaW5nIG9mIEhUTUwgZGF0YSBhdHRyaWJ1dGVzIGZvciBwcm9jZXNzaW5nXG4gKiBBSkFYIHJlcXVlc3RzLiBJdCBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgYmFzZSBBSkFYIGZ1bmN0aW9uYWxpdHkgdG8gYWxsb3cgZGV2ZWxvcGVycyB0byBvcHQtb3V0IG9mIGRhdGEgYXR0cmlidXRlXG4gKiByZXF1ZXN0cyBpZiB0aGV5IGRvIG5vdCBpbnRlbmQgdG8gdXNlIHRoZW0uXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZVJlcXVlc3QgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIExpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFNldHVwOiAnb25BamF4U2V0dXAnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWR5IGV2ZW50IGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQXR0YWNoZXMgaGFuZGxlcnMgdG8gdGhlIHdpbmRvdyB0byBsaXN0ZW4gZm9yIGFsbCByZXF1ZXN0IGludGVyYWN0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0JywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYWxsIGhhbmRsZXJzLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaEhhbmRsZXJzKCk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgbmVjZXNzYXJ5IGhhbmRsZXJzIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgYXR0YWNoSGFuZGxlcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLmtleURvd25IYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHRoaXMuc3VibWl0SGFuZGxlcihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIGRlZmF1bHQgZm9ybSB2YWxpZGF0aW9uIGZvciBBSkFYIGZvcm1zLlxuICAgICAqXG4gICAgICogQSBmb3JtIHRoYXQgY29udGFpbnMgYSBgZGF0YS1yZXF1ZXN0YCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBBSkFYIGNhbGwgd2l0aG91dCBpbmNsdWRpbmcgYSBgZGF0YS1icm93c2VyLXZhbGlkYXRlYFxuICAgICAqIGF0dHJpYnV0ZSBtZWFucyB0aGF0IHRoZSBBSkFYIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgbGlrZWx5IGJlIGhhbmRsaW5nIHRoZSB2YWxpZGF0aW9uIGluc3RlYWQuXG4gICAgICovXG4gICAgZGlzYWJsZURlZmF1bHRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybVtkYXRhLXJlcXVlc3RdOm5vdChbZGF0YS1icm93c2VyLXZhbGlkYXRlXSknKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyB0aGUgbmVjZXNzYXJ5IGhhbmRsZXJzIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWNoSGFuZGxlcnMoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLmtleURvd25IYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHRoaXMuc3VibWl0SGFuZGxlcihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2hhbmdlcyB0byBzZWxlY3QsIHJhZGlvLCBjaGVja2JveCBhbmQgZmlsZSBpbnB1dHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgY2hhbmdpbmcgYSB2YWxpZCBlbGVtZW50XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnc2VsZWN0W2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9cmFkaW9dW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9Y2hlY2tib3hdW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9ZmlsZV1bZGF0YS1yZXF1ZXN0XScsXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNsaWNrcyBvbiBoeXBlcmxpbmtzIGFuZCBidXR0b25zLlxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBjYW4gYnViYmxlIHVwIHRoZSBoaWVyYXJjaHkgdG8gZmluZCBhIHN1aXRhYmxlIHJlcXVlc3QgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRFbGVtZW50Lm1hdGNoZXMoXG4gICAgICAgICAgICAgICAgJ2FbZGF0YS1yZXF1ZXN0XSwgYnV0dG9uW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9YnV0dG9uXVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPXN1Ym1pdF1bZGF0YS1yZXF1ZXN0XScsXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXkgcHJlc3NlcyBvbiBpbnB1dHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgaW5wdXR0aW5nIGludG8gYSB2YWxpZCBlbGVtZW50XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbnB1dCB0eXBlIGlzIHZhbGlkXG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZXMgPSBbXG4gICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdkYXRldGltZScsXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdpbWFnZScsXG4gICAgICAgICAgICAnbW9udGgnLFxuICAgICAgICAgICAgJ251bWJlcicsXG4gICAgICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgICAgICdyYW5nZScsXG4gICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICd0ZWwnLFxuICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgJ3RpbWUnLFxuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgICAgICAnd2VlaycsXG4gICAgICAgIF07XG4gICAgICAgIGlmICh2YWxpZFR5cGVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJypbZGF0YS1yZXF1ZXN0XScpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJypbZGF0YS10cmFjay1pbnB1dF0nKSkge1xuICAgICAgICAgICAgdGhpcy50cmFja0lucHV0KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGZvcm0gc3VibWlzc2lvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgc3VibWl0dGluZyBhIHZhbGlkIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhcbiAgICAgICAgICAgICdmb3JtW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZXF1ZXN0IG9uIGEgZ2l2ZW4gZWxlbWVudCwgdXNpbmcgaXRzIGRhdGEgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzUmVxdWVzdE9uRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlbGVtZW50LmRhdGFzZXQ7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IFN0cmluZyhkYXRhLnJlcXVlc3QpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlybTogKCdyZXF1ZXN0Q29uZmlybScgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0Q29uZmlybSkgOiBudWxsLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICgncmVxdWVzdFJlZGlyZWN0JyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RSZWRpcmVjdCkgOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogKCdyZXF1ZXN0TG9hZGluZycgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0TG9hZGluZykgOiBudWxsLFxuICAgICAgICAgICAgZmxhc2g6ICgncmVxdWVzdEZsYXNoJyBpbiBkYXRhKSxcbiAgICAgICAgICAgIGZpbGVzOiAoJ3JlcXVlc3RGaWxlcycgaW4gZGF0YSksXG4gICAgICAgICAgICBicm93c2VyVmFsaWRhdGU6ICgncmVxdWVzdEJyb3dzZXJWYWxpZGF0ZScgaW4gZGF0YSksXG4gICAgICAgICAgICBmb3JtOiAoJ3JlcXVlc3RGb3JtJyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RGb3JtKSA6IG51bGwsXG4gICAgICAgICAgICB1cmw6ICgncmVxdWVzdFVybCcgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0VXJsKSA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGU6ICgncmVxdWVzdFVwZGF0ZScgaW4gZGF0YSkgPyB0aGlzLnBhcnNlRGF0YShTdHJpbmcoZGF0YS5yZXF1ZXN0VXBkYXRlKSkgOiBbXSxcbiAgICAgICAgICAgIGRhdGE6ICgncmVxdWVzdERhdGEnIGluIGRhdGEpID8gdGhpcy5wYXJzZURhdGEoU3RyaW5nKGRhdGEucmVxdWVzdERhdGEpKSA6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnJlcXVlc3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhbiBBSkFYIHJlcXVlc3QgdmlhIEhUTUwgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqL1xuICAgIG9uQWpheFNldHVwKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHJlcXVlc3QuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRQYXJlbnRSZXF1ZXN0RGF0YShyZXF1ZXN0LmVsZW1lbnQpLFxuICAgICAgICAgICAgLi4ucmVxdWVzdC5vcHRpb25zLmRhdGEsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudCAmJiByZXF1ZXN0LmVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicpICYmICFyZXF1ZXN0LmZvcm0gJiYgZmllbGROYW1lICYmICFyZXF1ZXN0Lm9wdGlvbnMuZGF0YVtmaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICBkYXRhW2ZpZWxkTmFtZV0gPSByZXF1ZXN0LmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0Lm9wdGlvbnMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGFuZCBjb2xsYXRlcyBhbGwgZGF0YSBmcm9tIGVsZW1lbnRzIHVwIHRoZSBET00gaGllcmFyY2h5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFBhcmVudFJlcXVlc3REYXRhKHRhcmdldCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudERhdGEgPSBlbGVtZW50LmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmICgncmVxdWVzdERhdGEnIGluIGVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wYXJzZURhdGEoZWxlbWVudERhdGEucmVxdWVzdERhdGEpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBkYXRhIGluIHRoZSBXaW50ZXIvT2N0b2JlciBKU09OIGZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZURhdGEoZGF0YSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5qc29ucGFyc2VyKCkucGFyc2UoYHske2RhdGF9fWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHBhcnNpbmcgdGhlIGRhdGEgYXR0cmlidXRlIG9uIGVsZW1lbnQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tJbnB1dChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbGFzdFZhbHVlIH0gPSBlbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZWxlbWVudC5kYXRhc2V0LnRyYWNrSW5wdXQgfHwgMzAwO1xuXG4gICAgICAgIGlmIChsYXN0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBsYXN0VmFsdWUgPT09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRUcmFja0lucHV0VGltZXIoZWxlbWVudCk7XG5cbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJhdmVyc2UgdXAgdGhlIGhpZXJhcmNoeSBhbmQgZmluZCBhIGZvcm0gdGhhdCBzZW5kcyBhbiBBSkFYIHF1ZXJ5XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nICYmIGN1cnJlbnRFbGVtZW50LmRhdGFzZXQucmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRUcmFja0lucHV0VGltZXIoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIpO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEF0dHJpYnV0ZVJlcXVlc3QgZnJvbSAnLi9hamF4L2hhbmRsZXJzL0F0dHJpYnV0ZVJlcXVlc3QnO1xuXG5pZiAod2luZG93LlNub3dib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTbm93Ym9hcmQgbXVzdCBiZSBsb2FkZWQgaW4gb3JkZXIgdG8gdXNlIHRoZSBIVE1MIGRhdGEgYXR0cmlidXRlIEFKQVggcmVxdWVzdCBmZWF0dXJlLicpO1xufVxuXG4oKFNub3dib2FyZCkgPT4ge1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2F0dHJpYnV0ZVJlcXVlc3QnLCBBdHRyaWJ1dGVSZXF1ZXN0KTtcbn0pKHdpbmRvdy5Tbm93Ym9hcmQpO1xuIl0sIm5hbWVzIjpbIlBsdWdpbkJhc2UiLCJzbm93Ym9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbnN0cnVjdCIsImRlcGVuZGVuY2llcyIsImxpc3RlbnMiLCJkZXN0cnVjdCIsImRldGFjaCIsImRlc3RydWN0b3IiLCJkZWZhdWx0IiwiU2luZ2xldG9uIiwiX1BsdWdpbkJhc2UiLCJfaW5oZXJpdHMiLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiQXR0cmlidXRlUmVxdWVzdCIsIl9TaW5nbGV0b24iLCJyZWFkeSIsImFqYXhTZXR1cCIsImF0dGFjaEhhbmRsZXJzIiwiZGlzYWJsZURlZmF1bHRGb3JtVmFsaWRhdGlvbiIsImRldGFjaEhhbmRsZXJzIiwiX2dldCIsIl9nZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsImNhbGwiLCJfdGhpcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNoYW5nZUhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsInN1Ym1pdEhhbmRsZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZm9ybSIsInNldEF0dHJpYnV0ZSIsIl90aGlzMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJtYXRjaGVzIiwicHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsInRhZ05hbWUiLCJwYXJlbnRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZFR5cGVzIiwiaW5kZXhPZiIsImdldEF0dHJpYnV0ZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInRyYWNrSW5wdXQiLCJlbGVtZW50IiwiZGF0YSIsImRhdGFzZXQiLCJoYW5kbGVyIiwiU3RyaW5nIiwicmVxdWVzdCIsIm9wdGlvbnMiLCJjb25maXJtIiwicmVxdWVzdENvbmZpcm0iLCJyZWRpcmVjdCIsInJlcXVlc3RSZWRpcmVjdCIsImxvYWRpbmciLCJyZXF1ZXN0TG9hZGluZyIsImZsYXNoIiwiZmlsZXMiLCJicm93c2VyVmFsaWRhdGUiLCJyZXF1ZXN0Rm9ybSIsInVybCIsInJlcXVlc3RVcmwiLCJ1cGRhdGUiLCJwYXJzZURhdGEiLCJyZXF1ZXN0VXBkYXRlIiwicmVxdWVzdERhdGEiLCJvbkFqYXhTZXR1cCIsImZpZWxkTmFtZSIsIl9vYmplY3RTcHJlYWQiLCJnZXRQYXJlbnRSZXF1ZXN0RGF0YSIsIl90aGlzMyIsImVsZW1lbnRzIiwicHVzaCIsInJldmVyc2UiLCJlbGVtZW50RGF0YSIsInVuZGVmaW5lZCIsIl90eXBlb2YiLCJqc29ucGFyc2VyIiwicGFyc2UiLCJjb25jYXQiLCJlIiwiRXJyb3IiLCJtZXNzYWdlIiwiX3RoaXM0IiwibGFzdFZhbHVlIiwiaW50ZXJ2YWwiLCJyZXNldFRyYWNrSW5wdXRUaW1lciIsImlucHV0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiU25vd2JvYXJkIiwiYWRkUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==