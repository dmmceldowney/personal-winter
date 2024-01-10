"use strict";
(self["webpackChunk_wintercms_wn_backend_module"] = self["webpackChunk_wintercms_wn_backend_module"] || []).push([["/assets/ui/js/build/backend"],{

/***/ "./assets/ui/js/ajax/Handler.js":
/*!**************************************!*\
  !*** ./assets/ui/js/ajax/Handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var jquery_events_to_dom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-events-to-dom-events */ "../../node_modules/jquery-events-to-dom-events/dist/index.m.js");
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
 * Backend AJAX handler.
 *
 * This is a utility script that resolves some backwards-compatibility issues with the functionality
 * that relies on the old framework, and ensures that Snowboard works well within the Backend
 * environment.
 *
 * Functions:
 *  - Adds the "render" jQuery event to Snowboard requests that widgets use to initialise.
 *  - Ensures the CSRF token is included in requests.
 *
 * @copyright 2021 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var Handler = /*#__PURE__*/function (_Snowboard$Singleton) {
  _inherits(Handler, _Snowboard$Singleton);
  function Handler() {
    _classCallCheck(this, Handler);
    return _callSuper(this, Handler, arguments);
  }
  _createClass(Handler, [{
    key: "listens",
    value:
    /**
     * Event listeners.
     *
     * @returns {Object}
     */
    function listens() {
      return {
        ready: 'ready',
        ajaxFetchOptions: 'ajaxFetchOptions',
        ajaxUpdateComplete: 'ajaxUpdateComplete'
      };
    }

    /**
     * Ready handler.
     *
     * Fires off a "render" event.
     */
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;
      if (!window.jQuery) {
        return;
      }

      // Add global event for rendering in Snowboard
      (0,jquery_events_to_dom_events__WEBPACK_IMPORTED_MODULE_0__.delegate)('render');
      document.addEventListener('$render', function () {
        _this.snowboard.globalEvent('render');
      });

      // Add "render" event for backwards compatibility
      window.jQuery(document).trigger('render');
    }

    /**
     * Adds the jQuery AJAX prefilter that the old framework uses to inject the CSRF token in AJAX
     * calls.
     */
  }, {
    key: "addPrefilter",
    value: function addPrefilter() {
      var _this2 = this;
      if (!window.jQuery) {
        return;
      }
      window.jQuery.ajaxPrefilter(function (options) {
        if (_this2.hasToken()) {
          if (!options.headers) {
            options.headers = {};
          }
          options.headers['X-CSRF-TOKEN'] = _this2.getToken();
        }
      });
    }

    /**
     * Fetch options handler.
     *
     * Ensures that the CSRF token is included in Snowboard requests.
     *
     * @param {Object} options
     */
  }, {
    key: "ajaxFetchOptions",
    value: function ajaxFetchOptions(options) {
      if (this.hasToken()) {
        options.headers['X-CSRF-TOKEN'] = this.getToken();
      }
    }

    /**
     * Update complete handler.
     *
     * Fires off a "render" event when partials are updated so that any widgets included in
     * responses are correctly initialised.
     */
  }, {
    key: "ajaxUpdateComplete",
    value: function ajaxUpdateComplete() {
      if (!window.jQuery) {
        return;
      }

      // Add "render" event for backwards compatibility
      window.jQuery(document).trigger('render');
    }

    /**
     * Determines if a CSRF token is available.
     *
     * @returns {Boolean}
     */
  }, {
    key: "hasToken",
    value: function hasToken() {
      var tokenElement = document.querySelector('meta[name="csrf-token"]');
      if (!tokenElement) {
        return false;
      }
      if (!tokenElement.hasAttribute('content')) {
        return false;
      }
      return true;
    }

    /**
     * Gets the CSRF token.
     *
     * @returns {String}
     */
  }, {
    key: "getToken",
    value: function getToken() {
      return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }
  }]);
  return Handler;
}(Snowboard.Singleton);


/***/ }),

/***/ "./assets/ui/js/index.js":
/*!*******************************!*\
  !*** ./assets/ui/js/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _ajax_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax/Handler */ "./assets/ui/js/ajax/Handler.js");
/* harmony import */ var _ui_EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/EventHandler */ "./assets/ui/js/ui/EventHandler.js");
/* harmony import */ var _ui_WidgetHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/WidgetHandler */ "./assets/ui/js/ui/WidgetHandler.js");




if (window.Snowboard === undefined) {
  throw new Error('Snowboard must be loaded in order to use the Backend UI.');
}
(function (Snowboard) {
  Snowboard.addPlugin('backend.ajax.handler', _ajax_Handler__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Snowboard.addPlugin('backend.ui.eventHandler', _ui_EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Snowboard.addPlugin('backend.ui.widgetHandler', _ui_WidgetHandler__WEBPACK_IMPORTED_MODULE_3__["default"]);

  // Add the pre-filter immediately
  Snowboard['backend.ajax.handler']().addPrefilter();

  // Add polyfill for AssetManager
  window.AssetManager = {
    load: function load(assets, callback) {
      Snowboard.assetLoader().load(assets).then(function () {
        if (callback && typeof callback === 'function') {
          callback();
        }
      });
    }
  };
  window.assetManager = window.AssetManager;
})(window.Snowboard);

// Add Vue to global scope
window.Vue = vue__WEBPACK_IMPORTED_MODULE_0__;

/***/ }),

/***/ "./assets/ui/js/ui/EventHandler.js":
/*!*****************************************!*\
  !*** ./assets/ui/js/ui/EventHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandler)
/* harmony export */ });
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
 * Widget event handler.
 *
 * Extends a widget with event handling functionality, allowing for the quick definition of events
 * and listening for events on a specific instance of a widget.
 *
 * This is a complement to Snowboard's global events - these events will still fire in order to
 * allow external code to listen and handle events. Local events can cancel the global event (and
 * further local events) by returning `false` from the callback.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var EventHandler = /*#__PURE__*/function (_Snowboard$PluginBase) {
  _inherits(EventHandler, _Snowboard$PluginBase);
  function EventHandler() {
    _classCallCheck(this, EventHandler);
    return _callSuper(this, EventHandler, arguments);
  }
  _createClass(EventHandler, [{
    key: "construct",
    value:
    /**
     * Constructor.
     *
     * @param {PluginBase} instance
     * @param {String} eventPrefix
     */
    function construct(instance, eventPrefix) {
      if (instance instanceof Snowboard.PluginBase === false) {
        throw new Error('Event handling can only be applied to Snowboard classes.');
      }
      if (!eventPrefix) {
        throw new Error('Event prefix is required.');
      }
      this.instance = instance;
      this.eventPrefix = eventPrefix;
      this.events = [];
    }

    /**
     * Registers a listener for a widget's event.
     *
     * @param {String} event
     * @param {Function} callback
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      this.events.push({
        event: event,
        callback: callback
      });
    }

    /**
     * Deregisters a listener for a widget's event.
     *
     * @param {String} event
     * @param {Function} callback
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      this.events = this.events.filter(function (registeredEvent) {
        return registeredEvent.event !== event || registeredEvent.callback !== callback;
      });
    }

    /**
     * Registers a listener for a widget's event that will only fire once.
     *
     * @param {String} event
     * @param {Function} callback
     */
  }, {
    key: "once",
    value: function once(event, _callback) {
      var _this = this;
      var length = this.events.push({
        event: event,
        callback: function callback() {
          _callback.apply(void 0, arguments);
          _this.events.splice(length - 1, 1);
        }
      });
    }

    /**
     * Fires an event on the widget.
     *
     * Local events are fired first, then a global event is fired afterwards.
     *
     * @param {String} eventName
     * @param  {...any} parameters
     */
  }, {
    key: "fire",
    value: function fire(eventName) {
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }
      // Fire local events first
      var events = this.events.filter(function (registeredEvent) {
        return registeredEvent.event === eventName;
      });
      var cancelled = false;
      events.forEach(function (event) {
        if (cancelled) {
          return;
        }
        if (event.callback.apply(event, parameters) === false) {
          cancelled = true;
        }
      });
      if (!cancelled) {
        var _this$snowboard;
        (_this$snowboard = this.snowboard).globalEvent.apply(_this$snowboard, ["".concat(this.eventPrefix, ".").concat(eventName)].concat(parameters));
      }
    }

    /**
     * Fires a promise event on the widget.
     *
     * Local events are fired first, then a global event is fired afterwards.
     *
     * @param {String} eventName
     * @param  {...any} parameters
     */
  }, {
    key: "firePromise",
    value: function firePromise(eventName) {
      var _this2 = this;
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parameters[_key2 - 1] = arguments[_key2];
      }
      var events = this.events.filter(function (registeredEvent) {
        return registeredEvent.event === eventName;
      });
      var promises = events.filter(function (event) {
        return event !== null;
      }, events.map(function (event) {
        return event.callback.apply(event, parameters);
      }));
      Promise.all(promises).then(function () {
        var _this2$snowboard;
        (_this2$snowboard = _this2.snowboard).globalPromiseEvent.apply(_this2$snowboard, ["".concat(_this2.eventPrefix, ".").concat(eventName)].concat(parameters));
      });
    }
  }]);
  return EventHandler;
}(Snowboard.PluginBase);


/***/ }),

/***/ "./assets/ui/js/ui/WidgetHandler.js":
/*!******************************************!*\
  !*** ./assets/ui/js/ui/WidgetHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WidgetHandler)
/* harmony export */ });
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
 * Backend widget handler.
 *
 * Handles the creation and disposal of widgets in the Backend. Widgets should include this as
 * a dependency in order to be loaded and initialised after the handler, in order to correctly
 * register.
 *
 * @copyright 2022 Winter.
 * @author Ben Thomson <git@alfreido.com>
 */
var WidgetHandler = /*#__PURE__*/function (_Snowboard$Singleton) {
  _inherits(WidgetHandler, _Snowboard$Singleton);
  function WidgetHandler() {
    _classCallCheck(this, WidgetHandler);
    return _callSuper(this, WidgetHandler, arguments);
  }
  _createClass(WidgetHandler, [{
    key: "construct",
    value:
    /**
     * Constructor.
     */
    function construct() {
      var _this = this;
      this.registeredWidgets = [];
      this.elements = [];
      this.events = {
        mutate: function mutate(mutations) {
          return _this.onMutation(mutations);
        }
      };
      this.observer = null;
    }

    /**
     * Listeners.
     *
     * @returns {Object}
     */
  }, {
    key: "listens",
    value: function listens() {
      return {
        ready: 'onReady',
        render: 'onRender',
        ajaxUpdate: 'onAjaxUpdate'
      };
    }

    /**
     * Registers a widget as a given data control.
     *
     * Registering a widget will allow any element that contains a "data-control" attribute matching
     * the control name to be initialized with the given widget.
     *
     * You may optionally provide a callback that will be fired when an instance of the widget is
     * initialized - the callback will be provided the element and the widget instance as parameters.
     *
     * @param {String} control
     * @param {Snowboard.PluginBase} widget
     * @param {Function} callback
     */
  }, {
    key: "register",
    value: function register(control, widget, callback) {
      this.registeredWidgets.push({
        control: control,
        widget: widget,
        callback: callback
      });
    }

    /**
     * Unregisters a data control.
     *
     * @param {String} control
     */
  }, {
    key: "unregister",
    value: function unregister(control) {
      this.registeredWidgets = this.registeredWidgets.filter(function (widget) {
        return widget.control !== control;
      });
    }

    /**
     * Ready handler.
     *
     * Initializes widgets within the entire document.
     */
  }, {
    key: "onReady",
    value: function onReady() {
      this.initializeWidgets(document.body);

      // Register a DOM observer and watch for any removed nodes
      if (!this.observer) {
        this.observer = new MutationObserver(this.events.mutate);
        this.observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }

    /**
     * Render handler.
     *
     * Initializes widgets within the entire document.
     */
  }, {
    key: "onRender",
    value: function onRender() {
      this.initializeWidgets(document.body);
    }

    /**
     * AJAX update handler.
     *
     * Initializes widgets inside an update element from an AJAX response.
     *
     * @param {HTMLElement} element
     */
  }, {
    key: "onAjaxUpdate",
    value: function onAjaxUpdate(element) {
      this.initializeWidgets(element);
    }

    /**
     * Initializes all widgets within an element.
     *
     * If an element contains a "data-control" attribute matching a registered widget, the widget
     * is initialized and attached to the element as a "widget" property.
     *
     * Only one widget may be initialized to a particular element.
     *
     * @param {HTMLElement} element
     */
  }, {
    key: "initializeWidgets",
    value: function initializeWidgets(element) {
      var _this2 = this;
      this.registeredWidgets.forEach(function (widget) {
        var instances = element.querySelectorAll("[data-control=\"".concat(widget.control, "\"]:not([data-widget-initialized])"));
        if (instances.length) {
          instances.forEach(function (instance) {
            // Prevent double-widget initialization
            if (instance.dataset.widgetInitialized) {
              return;
            }
            var widgetInstance = _this2.snowboard[widget.widget](instance);
            _this2.elements.push({
              element: instance,
              instance: widgetInstance
            });
            instance.dataset.widgetInitialized = true;
            _this2.snowboard.globalEvent('backend.widget.initialized', instance, widgetInstance);
            if (typeof widget.callback === 'function') {
              widget.callback(widgetInstance, instance);
            }
          });
        }
      });
    }

    /**
     * Returns a widget that is attached to the given element, if any.
     *
     * @param {HTMLElement} element
     * @returns {Snowboard.PluginBase|null}
     */
  }, {
    key: "getWidget",
    value: function getWidget(element) {
      var found = this.elements.find(function (widget) {
        return widget.element === element;
      });
      if (found) {
        return found.instance;
      }
      return null;
    }

    /**
     * Callback for mutation events.
     *
     * We're only tracking removed nodes, to ensure that those widgets are disposed of.
     *
     * @param {MutationRecord[]} mutations
     */
  }, {
    key: "onMutation",
    value: function onMutation(mutations) {
      var _this3 = this;
      var removedNodes = mutations.filter(function (mutation) {
        return mutation.removedNodes.length;
      }).map(function (mutation) {
        return Array.from(mutation.removedNodes);
      }).flat();
      if (!removedNodes.length) {
        return;
      }
      removedNodes.forEach(function (node) {
        var widgets = _this3.elements.filter(function (widget) {
          return node.contains(widget.element);
        });
        if (widgets.length) {
          widgets.forEach(function (widget) {
            widget.instance.destruct();
            _this3.elements = _this3.elements.filter(function (element) {
              return element !== widget;
            });
          });
        }
      });
    }
  }]);
  return WidgetHandler;
}(Snowboard.Singleton);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/ui/js/build/vendor"], () => (__webpack_exec__("./assets/ui/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDM0IsTUFBTSxDQUFDLFVBQUMrQyxPQUFPO2NBQUEsT0FBS0EsT0FBTyxLQUFLWCxNQUFNO1lBQUEsRUFBQztVQUN6RSxDQUFDLENBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7RUFBQSxPQUFBWCxhQUFBO0FBQUEsRUF6S3NDckQsU0FBUyxDQUFDQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1iYWNrZW5kLW1vZHVsZS8uL2Fzc2V0cy91aS9qcy9hamF4L0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1iYWNrZW5kLW1vZHVsZS8uL2Fzc2V0cy91aS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLWJhY2tlbmQtbW9kdWxlLy4vYXNzZXRzL3VpL2pzL3VpL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLWJhY2tlbmQtbW9kdWxlLy4vYXNzZXRzL3VpL2pzL3VpL1dpZGdldEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsZWdhdGUgfSBmcm9tICdqcXVlcnktZXZlbnRzLXRvLWRvbS1ldmVudHMnO1xuXG4vKipcbiAqIEJhY2tlbmQgQUpBWCBoYW5kbGVyLlxuICpcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IHNjcmlwdCB0aGF0IHJlc29sdmVzIHNvbWUgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgaXNzdWVzIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHlcbiAqIHRoYXQgcmVsaWVzIG9uIHRoZSBvbGQgZnJhbWV3b3JrLCBhbmQgZW5zdXJlcyB0aGF0IFNub3dib2FyZCB3b3JrcyB3ZWxsIHdpdGhpbiB0aGUgQmFja2VuZFxuICogZW52aXJvbm1lbnQuXG4gKlxuICogRnVuY3Rpb25zOlxuICogIC0gQWRkcyB0aGUgXCJyZW5kZXJcIiBqUXVlcnkgZXZlbnQgdG8gU25vd2JvYXJkIHJlcXVlc3RzIHRoYXQgd2lkZ2V0cyB1c2UgdG8gaW5pdGlhbGlzZS5cbiAqICAtIEVuc3VyZXMgdGhlIENTUkYgdG9rZW4gaXMgaW5jbHVkZWQgaW4gcmVxdWVzdHMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXIgZXh0ZW5kcyBTbm93Ym9hcmQuU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBFdmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeTogJ3JlYWR5JyxcbiAgICAgICAgICAgIGFqYXhGZXRjaE9wdGlvbnM6ICdhamF4RmV0Y2hPcHRpb25zJyxcbiAgICAgICAgICAgIGFqYXhVcGRhdGVDb21wbGV0ZTogJ2FqYXhVcGRhdGVDb21wbGV0ZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZHkgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEZpcmVzIG9mZiBhIFwicmVuZGVyXCIgZXZlbnQuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGlmICghd2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGdsb2JhbCBldmVudCBmb3IgcmVuZGVyaW5nIGluIFNub3dib2FyZFxuICAgICAgICBkZWxlZ2F0ZSgncmVuZGVyJyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJyRyZW5kZXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgncmVuZGVyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBcInJlbmRlclwiIGV2ZW50IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB3aW5kb3cualF1ZXJ5KGRvY3VtZW50KS50cmlnZ2VyKCdyZW5kZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBqUXVlcnkgQUpBWCBwcmVmaWx0ZXIgdGhhdCB0aGUgb2xkIGZyYW1ld29yayB1c2VzIHRvIGluamVjdCB0aGUgQ1NSRiB0b2tlbiBpbiBBSkFYXG4gICAgICogY2FsbHMuXG4gICAgICovXG4gICAgYWRkUHJlZmlsdGVyKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5qUXVlcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5qUXVlcnkuYWpheFByZWZpbHRlcigob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBvcHRpb25zIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBFbnN1cmVzIHRoYXQgdGhlIENTUkYgdG9rZW4gaXMgaW5jbHVkZWQgaW4gU25vd2JvYXJkIHJlcXVlc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBhamF4RmV0Y2hPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjb21wbGV0ZSBoYW5kbGVyLlxuICAgICAqXG4gICAgICogRmlyZXMgb2ZmIGEgXCJyZW5kZXJcIiBldmVudCB3aGVuIHBhcnRpYWxzIGFyZSB1cGRhdGVkIHNvIHRoYXQgYW55IHdpZGdldHMgaW5jbHVkZWQgaW5cbiAgICAgKiByZXNwb25zZXMgYXJlIGNvcnJlY3RseSBpbml0aWFsaXNlZC5cbiAgICAgKi9cbiAgICBhamF4VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIGlmICghd2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIFwicmVuZGVyXCIgZXZlbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHdpbmRvdy5qUXVlcnkoZG9jdW1lbnQpLnRyaWdnZXIoJ3JlbmRlcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBDU1JGIHRva2VuIGlzIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1Rva2VuKCkge1xuICAgICAgICBjb25zdCB0b2tlbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG5cbiAgICAgICAgaWYgKCF0b2tlbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRva2VuRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgQ1NSRiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQmFja2VuZEFqYXhIYW5kbGVyIGZyb20gJy4vYWpheC9IYW5kbGVyJztcbmltcG9ydCBCYWNrZW5kVWlFdmVudEhhbmRsZXIgZnJvbSAnLi91aS9FdmVudEhhbmRsZXInO1xuaW1wb3J0IEJhY2tlbmRVaVdpZGdldEhhbmRsZXIgZnJvbSAnLi91aS9XaWRnZXRIYW5kbGVyJztcblxuaWYgKHdpbmRvdy5Tbm93Ym9hcmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU25vd2JvYXJkIG11c3QgYmUgbG9hZGVkIGluIG9yZGVyIHRvIHVzZSB0aGUgQmFja2VuZCBVSS4nKTtcbn1cblxuKChTbm93Ym9hcmQpID0+IHtcbiAgICBTbm93Ym9hcmQuYWRkUGx1Z2luKCdiYWNrZW5kLmFqYXguaGFuZGxlcicsIEJhY2tlbmRBamF4SGFuZGxlcik7XG4gICAgU25vd2JvYXJkLmFkZFBsdWdpbignYmFja2VuZC51aS5ldmVudEhhbmRsZXInLCBCYWNrZW5kVWlFdmVudEhhbmRsZXIpO1xuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2JhY2tlbmQudWkud2lkZ2V0SGFuZGxlcicsIEJhY2tlbmRVaVdpZGdldEhhbmRsZXIpO1xuXG4gICAgLy8gQWRkIHRoZSBwcmUtZmlsdGVyIGltbWVkaWF0ZWx5XG4gICAgU25vd2JvYXJkWydiYWNrZW5kLmFqYXguaGFuZGxlciddKCkuYWRkUHJlZmlsdGVyKCk7XG5cbiAgICAvLyBBZGQgcG9seWZpbGwgZm9yIEFzc2V0TWFuYWdlclxuICAgIHdpbmRvdy5Bc3NldE1hbmFnZXIgPSB7XG4gICAgICAgIGxvYWQ6IChhc3NldHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBTbm93Ym9hcmQuYXNzZXRMb2FkZXIoKS5sb2FkKGFzc2V0cykudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHdpbmRvdy5hc3NldE1hbmFnZXIgPSB3aW5kb3cuQXNzZXRNYW5hZ2VyO1xufSkod2luZG93LlNub3dib2FyZCk7XG5cbi8vIEFkZCBWdWUgdG8gZ2xvYmFsIHNjb3BlXG53aW5kb3cuVnVlID0gVnVlO1xuIiwiLyoqXG4gKiBXaWRnZXQgZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBFeHRlbmRzIGEgd2lkZ2V0IHdpdGggZXZlbnQgaGFuZGxpbmcgZnVuY3Rpb25hbGl0eSwgYWxsb3dpbmcgZm9yIHRoZSBxdWljayBkZWZpbml0aW9uIG9mIGV2ZW50c1xuICogYW5kIGxpc3RlbmluZyBmb3IgZXZlbnRzIG9uIGEgc3BlY2lmaWMgaW5zdGFuY2Ugb2YgYSB3aWRnZXQuXG4gKlxuICogVGhpcyBpcyBhIGNvbXBsZW1lbnQgdG8gU25vd2JvYXJkJ3MgZ2xvYmFsIGV2ZW50cyAtIHRoZXNlIGV2ZW50cyB3aWxsIHN0aWxsIGZpcmUgaW4gb3JkZXIgdG9cbiAqIGFsbG93IGV4dGVybmFsIGNvZGUgdG8gbGlzdGVuIGFuZCBoYW5kbGUgZXZlbnRzLiBMb2NhbCBldmVudHMgY2FuIGNhbmNlbCB0aGUgZ2xvYmFsIGV2ZW50IChhbmRcbiAqIGZ1cnRoZXIgbG9jYWwgZXZlbnRzKSBieSByZXR1cm5pbmcgYGZhbHNlYCBmcm9tIHRoZSBjYWxsYmFjay5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRIYW5kbGVyIGV4dGVuZHMgU25vd2JvYXJkLlBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFByZWZpeFxuICAgICAqL1xuICAgIGNvbnN0cnVjdChpbnN0YW5jZSwgZXZlbnRQcmVmaXgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgU25vd2JvYXJkLlBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IGhhbmRsaW5nIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gU25vd2JvYXJkIGNsYXNzZXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFldmVudFByZWZpeCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBwcmVmaXggaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLmV2ZW50UHJlZml4ID0gZXZlbnRQcmVmaXg7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIgZm9yIGEgd2lkZ2V0J3MgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcmVnaXN0ZXJzIGEgbGlzdGVuZXIgZm9yIGEgd2lkZ2V0J3MgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLmV2ZW50cy5maWx0ZXIoKHJlZ2lzdGVyZWRFdmVudCkgPT4gcmVnaXN0ZXJlZEV2ZW50LmV2ZW50ICE9PSBldmVudCB8fCByZWdpc3RlcmVkRXZlbnQuY2FsbGJhY2sgIT09IGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lciBmb3IgYSB3aWRnZXQncyBldmVudCB0aGF0IHdpbGwgb25seSBmaXJlIG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9uY2UoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBjYWxsYmFjazogKC4uLnBhcmFtZXRlcnMpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UobGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiB0aGUgd2lkZ2V0LlxuICAgICAqXG4gICAgICogTG9jYWwgZXZlbnRzIGFyZSBmaXJlZCBmaXJzdCwgdGhlbiBhIGdsb2JhbCBldmVudCBpcyBmaXJlZCBhZnRlcndhcmRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIGZpcmUoZXZlbnROYW1lLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIC8vIEZpcmUgbG9jYWwgZXZlbnRzIGZpcnN0XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzLmZpbHRlcigocmVnaXN0ZXJlZEV2ZW50KSA9PiByZWdpc3RlcmVkRXZlbnQuZXZlbnQgPT09IGV2ZW50TmFtZSk7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbGxiYWNrKC4uLnBhcmFtZXRlcnMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudChgJHt0aGlzLmV2ZW50UHJlZml4fS4ke2V2ZW50TmFtZX1gLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgcHJvbWlzZSBldmVudCBvbiB0aGUgd2lkZ2V0LlxuICAgICAqXG4gICAgICogTG9jYWwgZXZlbnRzIGFyZSBmaXJlZCBmaXJzdCwgdGhlbiBhIGdsb2JhbCBldmVudCBpcyBmaXJlZCBhZnRlcndhcmRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIGZpcmVQcm9taXNlKGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5maWx0ZXIoKHJlZ2lzdGVyZWRFdmVudCkgPT4gcmVnaXN0ZXJlZEV2ZW50LmV2ZW50ID09PSBldmVudE5hbWUpO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IGV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudCAhPT0gbnVsbCwgZXZlbnRzLm1hcCgoZXZlbnQpID0+IGV2ZW50LmNhbGxiYWNrKC4uLnBhcmFtZXRlcnMpKSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsUHJvbWlzZUV2ZW50KGAke3RoaXMuZXZlbnRQcmVmaXh9LiR7ZXZlbnROYW1lfWAsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEJhY2tlbmQgd2lkZ2V0IGhhbmRsZXIuXG4gKlxuICogSGFuZGxlcyB0aGUgY3JlYXRpb24gYW5kIGRpc3Bvc2FsIG9mIHdpZGdldHMgaW4gdGhlIEJhY2tlbmQuIFdpZGdldHMgc2hvdWxkIGluY2x1ZGUgdGhpcyBhc1xuICogYSBkZXBlbmRlbmN5IGluIG9yZGVyIHRvIGJlIGxvYWRlZCBhbmQgaW5pdGlhbGlzZWQgYWZ0ZXIgdGhlIGhhbmRsZXIsIGluIG9yZGVyIHRvIGNvcnJlY3RseVxuICogcmVnaXN0ZXIuXG4gKlxuICogQGNvcHlyaWdodCAyMDIyIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldEhhbmRsZXIgZXh0ZW5kcyBTbm93Ym9hcmQuU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFdpZGdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIG11dGF0ZTogKG11dGF0aW9ucykgPT4gdGhpcy5vbk11dGF0aW9uKG11dGF0aW9ucyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAnb25SZWFkeScsXG4gICAgICAgICAgICByZW5kZXI6ICdvblJlbmRlcicsXG4gICAgICAgICAgICBhamF4VXBkYXRlOiAnb25BamF4VXBkYXRlJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSB3aWRnZXQgYXMgYSBnaXZlbiBkYXRhIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBSZWdpc3RlcmluZyBhIHdpZGdldCB3aWxsIGFsbG93IGFueSBlbGVtZW50IHRoYXQgY29udGFpbnMgYSBcImRhdGEtY29udHJvbFwiIGF0dHJpYnV0ZSBtYXRjaGluZ1xuICAgICAqIHRoZSBjb250cm9sIG5hbWUgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gd2lkZ2V0LlxuICAgICAqXG4gICAgICogWW91IG1heSBvcHRpb25hbGx5IHByb3ZpZGUgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbiBpbnN0YW5jZSBvZiB0aGUgd2lkZ2V0IGlzXG4gICAgICogaW5pdGlhbGl6ZWQgLSB0aGUgY2FsbGJhY2sgd2lsbCBiZSBwcm92aWRlZCB0aGUgZWxlbWVudCBhbmQgdGhlIHdpZGdldCBpbnN0YW5jZSBhcyBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZC5QbHVnaW5CYXNlfSB3aWRnZXRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbnRyb2wsIHdpZGdldCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkV2lkZ2V0cy5wdXNoKHtcbiAgICAgICAgICAgIGNvbnRyb2wsXG4gICAgICAgICAgICB3aWRnZXQsXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSBkYXRhIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29udHJvbFxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoY29udHJvbCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRXaWRnZXRzID0gdGhpcy5yZWdpc3RlcmVkV2lkZ2V0cy5maWx0ZXIoKHdpZGdldCkgPT4gd2lkZ2V0LmNvbnRyb2wgIT09IGNvbnRyb2wpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWR5IGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBJbml0aWFsaXplcyB3aWRnZXRzIHdpdGhpbiB0aGUgZW50aXJlIGRvY3VtZW50LlxuICAgICAqL1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpZGdldHMoZG9jdW1lbnQuYm9keSk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYSBET00gb2JzZXJ2ZXIgYW5kIHdhdGNoIGZvciBhbnkgcmVtb3ZlZCBub2Rlc1xuICAgICAgICBpZiAoIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmV2ZW50cy5tdXRhdGUpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBJbml0aWFsaXplcyB3aWRnZXRzIHdpdGhpbiB0aGUgZW50aXJlIGRvY3VtZW50LlxuICAgICAqL1xuICAgIG9uUmVuZGVyKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVXaWRnZXRzKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFKQVggdXBkYXRlIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBJbml0aWFsaXplcyB3aWRnZXRzIGluc2lkZSBhbiB1cGRhdGUgZWxlbWVudCBmcm9tIGFuIEFKQVggcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgb25BamF4VXBkYXRlKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplV2lkZ2V0cyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhbGwgd2lkZ2V0cyB3aXRoaW4gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIElmIGFuIGVsZW1lbnQgY29udGFpbnMgYSBcImRhdGEtY29udHJvbFwiIGF0dHJpYnV0ZSBtYXRjaGluZyBhIHJlZ2lzdGVyZWQgd2lkZ2V0LCB0aGUgd2lkZ2V0XG4gICAgICogaXMgaW5pdGlhbGl6ZWQgYW5kIGF0dGFjaGVkIHRvIHRoZSBlbGVtZW50IGFzIGEgXCJ3aWRnZXRcIiBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIE9ubHkgb25lIHdpZGdldCBtYXkgYmUgaW5pdGlhbGl6ZWQgdG8gYSBwYXJ0aWN1bGFyIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgaW5pdGlhbGl6ZVdpZGdldHMoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRXaWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb250cm9sPVwiJHt3aWRnZXQuY29udHJvbH1cIl06bm90KFtkYXRhLXdpZGdldC1pbml0aWFsaXplZF0pYCk7XG5cbiAgICAgICAgICAgIGlmIChpbnN0YW5jZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZG91YmxlLXdpZGdldCBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuZGF0YXNldC53aWRnZXRJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkZ2V0SW5zdGFuY2UgPSB0aGlzLnNub3dib2FyZFt3aWRnZXQud2lkZ2V0XShpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiB3aWRnZXRJbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmRhdGFzZXQud2lkZ2V0SW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYmFja2VuZC53aWRnZXQuaW5pdGlhbGl6ZWQnLCBpbnN0YW5jZSwgd2lkZ2V0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0LmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuY2FsbGJhY2sod2lkZ2V0SW5zdGFuY2UsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgd2lkZ2V0IHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIGVsZW1lbnQsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7U25vd2JvYXJkLlBsdWdpbkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRXaWRnZXQoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBmb3VuZCA9IHRoaXMuZWxlbWVudHMuZmluZCgod2lkZ2V0KSA9PiB3aWRnZXQuZWxlbWVudCA9PT0gZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gZm91bmQuaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmb3IgbXV0YXRpb24gZXZlbnRzLlxuICAgICAqXG4gICAgICogV2UncmUgb25seSB0cmFja2luZyByZW1vdmVkIG5vZGVzLCB0byBlbnN1cmUgdGhhdCB0aG9zZSB3aWRnZXRzIGFyZSBkaXNwb3NlZCBvZi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TXV0YXRpb25SZWNvcmRbXX0gbXV0YXRpb25zXG4gICAgICovXG4gICAgb25NdXRhdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGVzID0gbXV0YXRpb25zLmZpbHRlcigobXV0YXRpb24pID0+IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGgpLm1hcCgobXV0YXRpb24pID0+IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKSkuZmxhdCgpO1xuICAgICAgICBpZiAoIXJlbW92ZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aWRnZXRzID0gdGhpcy5lbGVtZW50cy5maWx0ZXIoKHdpZGdldCkgPT4gbm9kZS5jb250YWlucyh3aWRnZXQuZWxlbWVudCkpO1xuICAgICAgICAgICAgaWYgKHdpZGdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0cy5mb3JFYWNoKCh3aWRnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0Lmluc3RhbmNlLmRlc3RydWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudCAhPT0gd2lkZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImRlbGVnYXRlIiwiSGFuZGxlciIsIl9Tbm93Ym9hcmQkU2luZ2xldG9uIiwiX2luaGVyaXRzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwibGlzdGVucyIsInJlYWR5IiwiYWpheEZldGNoT3B0aW9ucyIsImFqYXhVcGRhdGVDb21wbGV0ZSIsIl90aGlzIiwid2luZG93IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic25vd2JvYXJkIiwiZ2xvYmFsRXZlbnQiLCJ0cmlnZ2VyIiwiYWRkUHJlZmlsdGVyIiwiX3RoaXMyIiwiYWpheFByZWZpbHRlciIsIm9wdGlvbnMiLCJoYXNUb2tlbiIsImhlYWRlcnMiLCJnZXRUb2tlbiIsInRva2VuRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJTbm93Ym9hcmQiLCJTaW5nbGV0b24iLCJkZWZhdWx0IiwiVnVlIiwiQmFja2VuZEFqYXhIYW5kbGVyIiwiQmFja2VuZFVpRXZlbnRIYW5kbGVyIiwiQmFja2VuZFVpV2lkZ2V0SGFuZGxlciIsInVuZGVmaW5lZCIsIkVycm9yIiwiYWRkUGx1Z2luIiwiQXNzZXRNYW5hZ2VyIiwibG9hZCIsImFzc2V0cyIsImNhbGxiYWNrIiwiYXNzZXRMb2FkZXIiLCJ0aGVuIiwiYXNzZXRNYW5hZ2VyIiwiRXZlbnRIYW5kbGVyIiwiX1Nub3dib2FyZCRQbHVnaW5CYXNlIiwiY29uc3RydWN0IiwiaW5zdGFuY2UiLCJldmVudFByZWZpeCIsIlBsdWdpbkJhc2UiLCJldmVudHMiLCJvbiIsImV2ZW50IiwicHVzaCIsIm9mZiIsImZpbHRlciIsInJlZ2lzdGVyZWRFdmVudCIsIm9uY2UiLCJsZW5ndGgiLCJhcHBseSIsInNwbGljZSIsImZpcmUiLCJldmVudE5hbWUiLCJfbGVuIiwicGFyYW1ldGVycyIsIkFycmF5IiwiX2tleSIsImNhbmNlbGxlZCIsImZvckVhY2giLCJfdGhpcyRzbm93Ym9hcmQiLCJjb25jYXQiLCJmaXJlUHJvbWlzZSIsIl9sZW4yIiwiX2tleTIiLCJwcm9taXNlcyIsIm1hcCIsIlByb21pc2UiLCJhbGwiLCJfdGhpczIkc25vd2JvYXJkIiwiZ2xvYmFsUHJvbWlzZUV2ZW50IiwiV2lkZ2V0SGFuZGxlciIsInJlZ2lzdGVyZWRXaWRnZXRzIiwiZWxlbWVudHMiLCJtdXRhdGUiLCJtdXRhdGlvbnMiLCJvbk11dGF0aW9uIiwib2JzZXJ2ZXIiLCJyZW5kZXIiLCJhamF4VXBkYXRlIiwicmVnaXN0ZXIiLCJjb250cm9sIiwid2lkZ2V0IiwidW5yZWdpc3RlciIsIm9uUmVhZHkiLCJpbml0aWFsaXplV2lkZ2V0cyIsImJvZHkiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJvblJlbmRlciIsIm9uQWpheFVwZGF0ZSIsImVsZW1lbnQiLCJpbnN0YW5jZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0YXNldCIsIndpZGdldEluaXRpYWxpemVkIiwid2lkZ2V0SW5zdGFuY2UiLCJnZXRXaWRnZXQiLCJmb3VuZCIsImZpbmQiLCJfdGhpczMiLCJyZW1vdmVkTm9kZXMiLCJtdXRhdGlvbiIsImZyb20iLCJmbGF0Iiwibm9kZSIsIndpZGdldHMiLCJjb250YWlucyIsImRlc3RydWN0Il0sInNvdXJjZVJvb3QiOiIifQ==