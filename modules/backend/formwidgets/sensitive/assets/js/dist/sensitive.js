"use strict";
(self["webpackChunk_wintercms_wn_backend_module"] = self["webpackChunk_wintercms_wn_backend_module"] || []).push([["/formwidgets/sensitive/assets/js/dist/sensitive"],{

/***/ "./formwidgets/sensitive/assets/js/src/Sensitive.js":
/*!**********************************************************!*\
  !*** ./formwidgets/sensitive/assets/js/src/Sensitive.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _less_sensitive_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../less/sensitive.less */ "./formwidgets/sensitive/assets/less/sensitive.less");
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

(function (Snowboard) {
  /**
   * Sensitive form widget.
   *
   * Renders a text field that acts as a password or secret field, but can be revealed by the
   * user.
   *
   * @author Ben Thomson <git@alfreido.com>
   * @copyright 2023 Winter CMS
   */
  var Sensitive = /*#__PURE__*/function (_Snowboard$PluginBase) {
    _inherits(Sensitive, _Snowboard$PluginBase);
    function Sensitive() {
      _classCallCheck(this, Sensitive);
      return _callSuper(this, Sensitive, arguments);
    }
    _createClass(Sensitive, [{
      key: "construct",
      value:
      /**
       * Constructor.
       *
       * @param {HTMLElement} element
       */
      function construct(element) {
        var _this = this;
        this.element = element;
        this.config = this.snowboard.dataConfig(this, element);
        this.clean = Boolean(element.dataset.clean);
        this.hidden = true;

        // Child elements
        this.input = element.querySelector('[data-input]');
        this.toggle = element.querySelector('[data-toggle]');
        this.icon = element.querySelector('[data-icon]');
        this.loader = element.querySelector('[data-loader]');
        this.copy = element.querySelector('[data-copy]');

        // Events
        this.events = {
          input: function input() {
            return _this.onInput();
          },
          toggle: function toggle() {
            return _this.onToggle();
          },
          tabChange: function tabChange() {
            return _this.onTabChange();
          },
          copy: function copy() {
            return _this.onCopy();
          }
        };
        this.attachEvents();
      }

      /**
       * Sets the default options for this widget.
       *
       * Available options:
       *
       *  - `data-read-only` - If set, this field will be read-only, but revealable.
       *  - `data-disabled` - If set, this field will be disabled, and unrevealable.
       *  - `data-event-handler=""` - Defines the AJAX event handler that will provide the revealed value.
       *  - `data-hide-on-tab-change` - If set, this field will be hidden when the browser is switched
       *      to another tab or minimized.
       *
       * @returns {Object}
       */
    }, {
      key: "defaults",
      value: function defaults() {
        return {
          readOnly: false,
          disabled: false,
          eventHandler: null,
          hideOnTabChange: false
        };
      }

      /**
       * Attaches event listeners for several interactions.
       */
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        this.input.addEventListener('keydown', this.events.input);
        this.toggle.addEventListener('click', this.events.toggle);
        if (this.config.get('hideOnTabChange')) {
          // Watch for tab change or minimise
          document.addEventListener('visibilitychange', this.events.tabChange);
        }
        if (this.copy) {
          this.copy.addEventListener('click', this.events.copy);
        }
      }

      /**
       * Destructor.
       */
    }, {
      key: "destruct",
      value: function destruct() {
        this.input.removeEventListener('keydown', this.events.input);
        this.toggle.removeEventListener('click', this.events.toggle);
        if (this.config.get('hideOnTabChange')) {
          // Watch for tab change or minimise
          document.removeEventListener('visibilitychange', this.events.tabChange);
        }
        if (this.copy) {
          this.copy.removeEventListener('click', this.events.copy);
        }
        this.input = null;
        this.toggle = null;
        this.icon = null;
        this.loader = null;
        _get(_getPrototypeOf(Sensitive.prototype), "destruct", this).call(this);
      }

      /**
       * Input handler.
       *
       * Resets a clean field to empty if the user types anything in the field without revealing it.
       */
    }, {
      key: "onInput",
      value: function onInput() {
        if (this.clean) {
          this.clean = false;
          this.input.value = '';
        }
      }

      /**
       * Toggle handler.
       *
       * Reveals the value and toggles the visibility of a revealed value.
       */
    }, {
      key: "onToggle",
      value: function onToggle() {
        if (this.input.value !== '' && this.clean) {
          this.reveal();
        } else {
          this.toggleVisibility();
        }
      }

      /**
       * Tab change handler.
       *
       * Fires when the browser is minimized or switched to another tab. This will hide the value.
       */
    }, {
      key: "onTabChange",
      value: function onTabChange() {
        if (document.hidden && !this.hidden) {
          this.toggleVisibility();
        }
      }

      /**
       * Copy handler.
       *
       * Copies the value to the clipboard.
       */
    }, {
      key: "onCopy",
      value: function onCopy() {
        var _this2 = this;
        var promise = new Promise(function (resolve, reject) {
          if (_this2.input.value !== '' && _this2.clean) {
            _this2.reveal(resolve).then(function () {
              return resolve();
            }, function () {
              return reject();
            });
          } else {
            resolve();
          }
        });
        promise.then(function () {
          var isHidden = _this2.hidden;
          if (_this2.hidden) {
            _this2.toggleVisibility();
          }
          _this2.input.focus();
          _this2.input.select();
          try {
            var blob = new Blob([_this2.input.value], {
              type: 'text/plain'
            });
            var item = new ClipboardItem({
              'text/plain': blob
            });
            navigator.clipboard.write([item]);
          } catch (error) {
            _this2.snowboard.error("Clipboard API not supported - ".concat(error));
          }
          _this2.input.blur();
          if (isHidden) {
            _this2.toggleVisibility();
          }
        }, function (error) {
          _this2.snowboard.error("Unable to retrieve hidden value - ".concat(error));
        });
      }

      /**
       * Toggles the visibility of the value within the sensitive field.
       */
    }, {
      key: "toggleVisibility",
      value: function toggleVisibility() {
        this.input.setAttribute('type', this.hidden ? 'text' : 'password');
        this.icon.classList.toggle('icon-eye');
        this.icon.classList.toggle('icon-eye-slash');
        this.hidden = !this.hidden;
      }

      /**
       * Reveals the value of the sensitive field.
       *
       * This will call an AJAX event handler to retrieve the value, allowing for values to be
       * manipulated or controlled by the server.
       *
       * @returns {Promise}
       */
    }, {
      key: "reveal",
      value: function reveal() {
        var _this3 = this;
        return new Promise(function (resolve, reject) {
          // Show loader
          _this3.icon.style.visibility = 'hidden';
          _this3.loader.classList.remove('hide');
          _this3.snowboard.request(_this3.input, _this3.config.get('eventHandler'), {
            success: function success(data) {
              _this3.input.value = data.value;
              _this3.clean = false;

              // Hide loader and reveal
              _this3.icon.style.visibility = 'visible';
              _this3.loader.classList.add('hide');
              _this3.toggleVisibility();
              resolve();
            },
            error: function error(_error) {
              reject(new Error(_error));
            }
          });
        });
      }
    }]);
    return Sensitive;
  }(Snowboard.PluginBase);
  Snowboard.addPlugin('backend.formwidget.sensitive', Sensitive);
  Snowboard['backend.ui.widgethandler']().register('sensitive', 'backend.formwidget.sensitive');
})(window.Snowboard);

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div[data-control=\"sensitive\"] a[data-toggle],\ndiv[data-control=\"sensitive\"] a[data-copy] {\n  box-shadow: none;\n  border: 1px solid #d1d6d9;\n  border-left: 0;\n}\n", "",{"version":3,"sources":["webpack://./formwidgets/sensitive/assets/less/sensitive.less"],"names":[],"mappings":"AAEA;;EAGQ,gBAAA;EACA,yBAAA;EACA,cAAA;AAFR","sourcesContent":["@import \"../../../../assets/less/core/boot.less\";\n\ndiv[data-control=\"sensitive\"] {\n    a[data-toggle],\n    a[data-copy] {\n        box-shadow: none;\n        border: 1px solid @input-group-addon-border-color;\n        border-left: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./formwidgets/sensitive/assets/less/sensitive.less":
/*!**********************************************************!*\
  !*** ./formwidgets/sensitive/assets/less/sensitive.less ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../../../../../node_modules/less-loader/dist/cjs.js!./sensitive.less */ "../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-17.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-17.use[2]!../../node_modules/less-loader/dist/cjs.js!./formwidgets/sensitive/assets/less/sensitive.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_17_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_17_use_2_node_modules_less_loader_dist_cjs_js_sensitive_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/ui/js/build/vendor"], () => (__webpack_exec__("./formwidgets/sensitive/assets/js/src/Sensitive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2Zvcm13aWRnZXRzL3NlbnNpdGl2ZS9hc3NldHMvanMvZGlzdC9zZW5zaXRpdmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFFbkMsQ0FBQyxVQUFDQSxTQUFTLEVBQUs7RUFDWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSSSxJQVNNQyxTQUFTLDBCQUFBQyxxQkFBQTtJQUFBQyxTQUFBLENBQUFGLFNBQUEsRUFBQUMscUJBQUE7SUFBQSxTQUFBRCxVQUFBO01BQUFHLGVBQUEsT0FBQUgsU0FBQTtNQUFBLE9BQUFJLFVBQUEsT0FBQUosU0FBQSxFQUFBSyxTQUFBO0lBQUE7SUFBQUMsWUFBQSxDQUFBTixTQUFBO01BQUFPLEdBQUE7TUFBQUMsS0FBQTtNQUNYO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7TUFDUSxTQUFBQyxVQUFVQyxPQUFPLEVBQUU7UUFBQSxJQUFBQyxLQUFBO1FBQ2YsSUFBSSxDQUFDRCxPQUFPLEdBQUdBLE9BQU87UUFDdEIsSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFVBQVUsQ0FBQyxJQUFJLEVBQUVKLE9BQU8sQ0FBQztRQUN0RCxJQUFJLENBQUNLLEtBQUssR0FBR0MsT0FBTyxDQUFDTixPQUFPLENBQUNPLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQ0csTUFBTSxHQUFHLElBQUk7O1FBRWxCO1FBQ0EsSUFBSSxDQUFDQyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUNDLE1BQU0sR0FBR1gsT0FBTyxDQUFDVSxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQ0UsSUFBSSxHQUFHWixPQUFPLENBQUNVLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDRyxNQUFNLEdBQUdiLE9BQU8sQ0FBQ1UsYUFBYSxDQUFDLGVBQWUsQ0FB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QUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHNOQUFPOzs7O0FBSXhCLGlFQUFlLHNOQUFPLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2ludGVyY21zL3duLWJhY2tlbmQtbW9kdWxlLy4vZm9ybXdpZGdldHMvc2Vuc2l0aXZlL2Fzc2V0cy9qcy9zcmMvU2Vuc2l0aXZlLmpzIiwid2VicGFjazovL0B3aW50ZXJjbXMvd24tYmFja2VuZC1tb2R1bGUvLi9mb3Jtd2lkZ2V0cy9zZW5zaXRpdmUvYXNzZXRzL2xlc3Mvc2Vuc2l0aXZlLmxlc3MiLCJ3ZWJwYWNrOi8vQHdpbnRlcmNtcy93bi1iYWNrZW5kLW1vZHVsZS8uL2Zvcm13aWRnZXRzL3NlbnNpdGl2ZS9hc3NldHMvbGVzcy9zZW5zaXRpdmUubGVzcz9jMGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vbGVzcy9zZW5zaXRpdmUubGVzcyc7XG5cbigoU25vd2JvYXJkKSA9PiB7XG4gICAgLyoqXG4gICAgICogU2Vuc2l0aXZlIGZvcm0gd2lkZ2V0LlxuICAgICAqXG4gICAgICogUmVuZGVycyBhIHRleHQgZmllbGQgdGhhdCBhY3RzIGFzIGEgcGFzc3dvcmQgb3Igc2VjcmV0IGZpZWxkLCBidXQgY2FuIGJlIHJldmVhbGVkIGJ5IHRoZVxuICAgICAqIHVzZXIuXG4gICAgICpcbiAgICAgKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICAgICAqIEBjb3B5cmlnaHQgMjAyMyBXaW50ZXIgQ01TXG4gICAgICovXG4gICAgY2xhc3MgU2Vuc2l0aXZlIGV4dGVuZHMgU25vd2JvYXJkLlBsdWdpbkJhc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdChlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLnNub3dib2FyZC5kYXRhQ29uZmlnKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbiA9IEJvb2xlYW4oZWxlbWVudC5kYXRhc2V0LmNsZWFuKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2hpbGQgZWxlbWVudHNcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlucHV0XScpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZV0nKTtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWNvbl0nKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sb2FkZXJdJyk7XG4gICAgICAgICAgICB0aGlzLmNvcHkgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvcHldJyk7XG5cbiAgICAgICAgICAgIC8vIEV2ZW50c1xuICAgICAgICAgICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6ICgpID0+IHRoaXMub25JbnB1dCgpLFxuICAgICAgICAgICAgICAgIHRvZ2dsZTogKCkgPT4gdGhpcy5vblRvZ2dsZSgpLFxuICAgICAgICAgICAgICAgIHRhYkNoYW5nZTogKCkgPT4gdGhpcy5vblRhYkNoYW5nZSgpLFxuICAgICAgICAgICAgICAgIGNvcHk6ICgpID0+IHRoaXMub25Db3B5KCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhpcyB3aWRnZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBgZGF0YS1yZWFkLW9ubHlgIC0gSWYgc2V0LCB0aGlzIGZpZWxkIHdpbGwgYmUgcmVhZC1vbmx5LCBidXQgcmV2ZWFsYWJsZS5cbiAgICAgICAgICogIC0gYGRhdGEtZGlzYWJsZWRgIC0gSWYgc2V0LCB0aGlzIGZpZWxkIHdpbGwgYmUgZGlzYWJsZWQsIGFuZCB1bnJldmVhbGFibGUuXG4gICAgICAgICAqICAtIGBkYXRhLWV2ZW50LWhhbmRsZXI9XCJcImAgLSBEZWZpbmVzIHRoZSBBSkFYIGV2ZW50IGhhbmRsZXIgdGhhdCB3aWxsIHByb3ZpZGUgdGhlIHJldmVhbGVkIHZhbHVlLlxuICAgICAgICAgKiAgLSBgZGF0YS1oaWRlLW9uLXRhYi1jaGFuZ2VgIC0gSWYgc2V0LCB0aGlzIGZpZWxkIHdpbGwgYmUgaGlkZGVuIHdoZW4gdGhlIGJyb3dzZXIgaXMgc3dpdGNoZWRcbiAgICAgICAgICogICAgICB0byBhbm90aGVyIHRhYiBvciBtaW5pbWl6ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgaGlkZU9uVGFiQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0YWNoZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBzZXZlcmFsIGludGVyYWN0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIGF0dGFjaEV2ZW50cygpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZXZlbnRzLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMudG9nZ2xlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmdldCgnaGlkZU9uVGFiQ2hhbmdlJykpIHtcbiAgICAgICAgICAgICAgICAvLyBXYXRjaCBmb3IgdGFiIGNoYW5nZSBvciBtaW5pbWlzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLmV2ZW50cy50YWJDaGFuZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3B5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudHMuY29weSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIGRlc3RydWN0KCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ldmVudHMuaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy50b2dnbGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZ2V0KCdoaWRlT25UYWJDaGFuZ2UnKSkge1xuICAgICAgICAgICAgICAgIC8vIFdhdGNoIGZvciB0YWIgY2hhbmdlIG9yIG1pbmltaXNlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMuZXZlbnRzLnRhYkNoYW5nZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50cy5jb3B5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBzdXBlci5kZXN0cnVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElucHV0IGhhbmRsZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJlc2V0cyBhIGNsZWFuIGZpZWxkIHRvIGVtcHR5IGlmIHRoZSB1c2VyIHR5cGVzIGFueXRoaW5nIGluIHRoZSBmaWVsZCB3aXRob3V0IHJldmVhbGluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIG9uSW5wdXQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVG9nZ2xlIGhhbmRsZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFJldmVhbHMgdGhlIHZhbHVlIGFuZCB0b2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIGEgcmV2ZWFsZWQgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBvblRvZ2dsZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0LnZhbHVlICE9PSAnJyAmJiB0aGlzLmNsZWFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZlYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFiIGNoYW5nZSBoYW5kbGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBicm93c2VyIGlzIG1pbmltaXplZCBvciBzd2l0Y2hlZCB0byBhbm90aGVyIHRhYi4gVGhpcyB3aWxsIGhpZGUgdGhlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgb25UYWJDaGFuZ2UoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuICYmICF0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcHkgaGFuZGxlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29waWVzIHRoZSB2YWx1ZSB0byB0aGUgY2xpcGJvYXJkLlxuICAgICAgICAgKi9cbiAgICAgICAgb25Db3B5KCkge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAhPT0gJycgJiYgdGhpcy5jbGVhbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVhbChyZXNvbHZlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVqZWN0KCksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHRoaXMuaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5pbnB1dC52YWx1ZV0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBDbGlwYm9hcmRJdGVtKHsgJ3RleHQvcGxhaW4nOiBibG9iIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZShbaXRlbV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZXJyb3IoYENsaXBib2FyZCBBUEkgbm90IHN1cHBvcnRlZCAtICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmVycm9yKGBVbmFibGUgdG8gcmV0cmlldmUgaGlkZGVuIHZhbHVlIC0gJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2YWx1ZSB3aXRoaW4gdGhlIHNlbnNpdGl2ZSBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICh0aGlzLmhpZGRlbikgPyAndGV4dCcgOiAncGFzc3dvcmQnKTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLWV5ZScpO1xuICAgICAgICAgICAgdGhpcy5pY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ljb24tZXllLXNsYXNoJyk7XG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9ICF0aGlzLmhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXZlYWxzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vuc2l0aXZlIGZpZWxkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHdpbGwgY2FsbCBhbiBBSkFYIGV2ZW50IGhhbmRsZXIgdG8gcmV0cmlldmUgdGhlIHZhbHVlLCBhbGxvd2luZyBmb3IgdmFsdWVzIHRvIGJlXG4gICAgICAgICAqIG1hbmlwdWxhdGVkIG9yIGNvbnRyb2xsZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICByZXZlYWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGVyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5yZXF1ZXN0KHRoaXMuaW5wdXQsIHRoaXMuY29uZmlnLmdldCgnZXZlbnRIYW5kbGVyJyksIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRlciBhbmQgcmV2ZWFsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNub3dib2FyZC5hZGRQbHVnaW4oJ2JhY2tlbmQuZm9ybXdpZGdldC5zZW5zaXRpdmUnLCBTZW5zaXRpdmUpO1xuICAgIFNub3dib2FyZFsnYmFja2VuZC51aS53aWRnZXRoYW5kbGVyJ10oKS5yZWdpc3Rlcignc2Vuc2l0aXZlJywgJ2JhY2tlbmQuZm9ybXdpZGdldC5zZW5zaXRpdmUnKTtcbn0pKHdpbmRvdy5Tbm93Ym9hcmQpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXZbZGF0YS1jb250cm9sPVxcXCJzZW5zaXRpdmVcXFwiXSBhW2RhdGEtdG9nZ2xlXSxcXG5kaXZbZGF0YS1jb250cm9sPVxcXCJzZW5zaXRpdmVcXFwiXSBhW2RhdGEtY29weV0ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ2ZDk7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZm9ybXdpZGdldHMvc2Vuc2l0aXZlL2Fzc2V0cy9sZXNzL3NlbnNpdGl2ZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUdRLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vLi4vLi4vYXNzZXRzL2xlc3MvY29yZS9ib290Lmxlc3NcXFwiO1xcblxcbmRpdltkYXRhLWNvbnRyb2w9XFxcInNlbnNpdGl2ZVxcXCJdIHtcXG4gICAgYVtkYXRhLXRvZ2dsZV0sXFxuICAgIGFbZGF0YS1jb3B5XSB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xNy51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTE3LnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZW5zaXRpdmUubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJuYW1lcyI6WyJTbm93Ym9hcmQiLCJTZW5zaXRpdmUiLCJfU25vd2JvYXJkJFBsdWdpbkJhc2UiLCJfaW5oZXJpdHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zdHJ1Y3QiLCJlbGVtZW50IiwiX3RoaXMiLCJjb25maWciLCJzbm93Ym9hcmQiLCJkYXRhQ29uZmlnIiwiY2xlYW4iLCJCb29sZWFuIiwiZGF0YXNldCIsImhpZGRlbiIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImljb24iLCJsb2FkZXIiLCJjb3B5IiwiZXZlbnRzIiwib25JbnB1dCIsIm9uVG9nZ2xlIiwidGFiQ2hhbmdlIiwib25UYWJDaGFuZ2UiLCJvbkNvcHkiLCJhdHRhY2hFdmVudHMiLCJkZWZhdWx0cyIsInJlYWRPbmx5IiwiZGlzYWJsZWQiLCJldmVudEhhbmRsZXIiLCJoaWRlT25UYWJDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0IiwiZG9jdW1lbnQiLCJkZXN0cnVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsInJldmVhbCIsInRvZ2dsZVZpc2liaWxpdHkiLCJfdGhpczIiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiaXNIaWRkZW4iLCJmb2N1cyIsInNlbGVjdCIsImJsb2IiLCJCbG9iIiwidHlwZSIsIml0ZW0iLCJDbGlwYm9hcmRJdGVtIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGUiLCJlcnJvciIsImNvbmNhdCIsImJsdXIiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJfdGhpczMiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJyZW1vdmUiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsImRhdGEiLCJhZGQiLCJFcnJvciIsIlBsdWdpbkJhc2UiLCJhZGRQbHVnaW4iLCJyZWdpc3RlciIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=