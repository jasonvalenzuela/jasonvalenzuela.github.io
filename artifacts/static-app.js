(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(31)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(30);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(19);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(33);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(34);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(29)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(13);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/global-styles.ts


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    body {\n    font-family: 'Roboto', sans-serif;\n    color: #545E6C;\n    background: #f5f5f5;\n    font-size: 14px;\n    padding: 30px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    }\n    @media (max-width: 767px) {\n        body{ \n            padding: 0;\n        }\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n    font-weight: 700;\n    }\n    p {\n    line-height: 1.5;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/App.tsx


function App_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background: #42a8c0;\n  max-width: 960px;\n  margin: 0 auto;\n  position: relative;\n  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n"]);

  App_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(GlobalStyles, null), /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], null, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], {
    pattern: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);
var Wrapper = external_styled_components_default.a.div(App_templateObject());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(4);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("/Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/node_modules/react-static/lib/browser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(16);

// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/common/SidebarContainer.ts


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SidebarContainer = external_styled_components_default.a.div(_templateObject());
/* harmony default export */ var common_SidebarContainer = (SidebarContainer);
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/main-sidebar/ContactSection.tsx


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  ", " {\n    margin-bottom: 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ContactSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin-left: 5px;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer;\n"]);

  ContactSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ContactTypeToIconMap = {
  email: free_solid_svg_icons_["faEnvelope"],
  phone: free_solid_svg_icons_["faPhone"],
  linkedin: free_brands_svg_icons_["faLinkedinIn"],
  github: free_brands_svg_icons_["faGithub"]
};

var ContactSection_ContactSectionRow = function ContactSectionRow(_ref) {
  var contactType = _ref.contactType,
      text = _ref.text,
      href = _ref.href;
  return /*#__PURE__*/external_react_default.a.createElement(ContactRowBase, null, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: ContactTypeToIconMap[contactType]
  }), /*#__PURE__*/external_react_default.a.createElement(ContactRowLink, {
    href: href,
    target: "_blank"
  }, text));
};

var ContactSection_ContactSection = function ContactSection(_ref2) {
  var contactContent = _ref2.contactContent;
  return /*#__PURE__*/external_react_default.a.createElement(ContactRoot, null, contactContent.map(function (_ref3, index) {
    var contactType = _ref3.contactType,
        text = _ref3.text,
        href = _ref3.href;
    return /*#__PURE__*/external_react_default.a.createElement(ContactSection_ContactSectionRow, {
      key: index,
      contactType: contactType,
      text: text,
      href: href
    });
  }));
};

/* harmony default export */ var main_sidebar_ContactSection = (ContactSection_ContactSection);
var ContactRowLink = external_styled_components_default.a.a(ContactSection_templateObject());
var ContactRowBase = external_styled_components_default.a.div(_templateObject2());
var ContactRoot = external_styled_components_default()(common_SidebarContainer)(_templateObject3(), ContactRowBase);
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/main-sidebar/ProfileSection.tsx


function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ProfileSection_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 32px;\n  font-weight: 900;\n  margin-top: 0;\n  margin-bottom: 10px;\n"]);

  ProfileSection_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ProfileSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  max-width: 100px;\n  margin-bottom: 15px;\n  border: 0px solid #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n"]);

  ProfileSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ProfileSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.2);\n  text-align: center;\n  color: #fff;\n"]);

  ProfileSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ProfileSection_ProfileSection = function ProfileSection(_ref) {
  var profileImage = _ref.profileImage,
      name = _ref.name,
      tagline = _ref.tagline;
  return /*#__PURE__*/external_react_default.a.createElement(ProfileRoot, null, /*#__PURE__*/external_react_default.a.createElement(ProfileImage, {
    src: profileImage
  }), /*#__PURE__*/external_react_default.a.createElement(ProfileName, null, name), /*#__PURE__*/external_react_default.a.createElement(ProfileTagline, null, tagline));
};

/* harmony default export */ var main_sidebar_ProfileSection = (ProfileSection_ProfileSection);
var ProfileRoot = external_styled_components_default.a.div(ProfileSection_templateObject());
var ProfileImage = external_styled_components_default.a.img(ProfileSection_templateObject2());
var ProfileName = external_styled_components_default.a.h1(ProfileSection_templateObject3());
var ProfileTagline = external_styled_components_default.a.h3(_templateObject4());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/common/SidebarTitle.ts


function SidebarTitle_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 15px;\n"]);

  SidebarTitle_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SidebarTitle = external_styled_components_default.a.h2(SidebarTitle_templateObject());
/* harmony default export */ var common_SidebarTitle = (SidebarTitle);
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/main-sidebar/EducationSection.tsx


function EducationSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]);

  EducationSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function EducationSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 5px;\n"]);

  EducationSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var EducationSection_EducationSection = function EducationSection(_ref) {
  var degree = _ref.degree,
      university = _ref.university,
      yearStart = _ref.yearStart,
      yearEnd = _ref.yearEnd;
  return /*#__PURE__*/external_react_default.a.createElement(common_SidebarContainer, null, /*#__PURE__*/external_react_default.a.createElement(common_SidebarTitle, null, "Education"), /*#__PURE__*/external_react_default.a.createElement(DegreeText, null, degree), /*#__PURE__*/external_react_default.a.createElement(UniversityInfo, null, university), /*#__PURE__*/external_react_default.a.createElement(UniversityInfo, null, yearStart, " - ", yearEnd));
};

/* harmony default export */ var main_sidebar_EducationSection = (EducationSection_EducationSection);
var DegreeText = external_styled_components_default.a.h4(EducationSection_templateObject());
var UniversityInfo = external_styled_components_default.a.h5(EducationSection_templateObject2());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/common/SidebarList.tsx


function SidebarList_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n\n  & > :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);

  SidebarList_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function SidebarList_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 14px;\n"]);

  SidebarList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SidebarList_SidebarList = function SidebarList(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return /*#__PURE__*/external_react_default.a.createElement(common_SidebarContainer, null, /*#__PURE__*/external_react_default.a.createElement(common_SidebarTitle, null, title), /*#__PURE__*/external_react_default.a.createElement(SidebarListContainer, null, content.map(function (text, index) {
    return /*#__PURE__*/external_react_default.a.createElement(SidebarListText, {
      key: index
    }, text);
  })));
};

/* harmony default export */ var common_SidebarList = (SidebarList_SidebarList);
var SidebarListText = external_styled_components_default.a.div(SidebarList_templateObject());
var SidebarListContainer = external_styled_components_default.a.div(SidebarList_templateObject2());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/containers/MainSidebar.tsx


function MainSidebar_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background: #42a8c0;\n  position: absolute;\n  right: 0;\n  width: 240px;\n  height: 100%;\n  min-height: 800px;\n  color: #fff;\n\n  @media (max-width: 767px) {\n    position: static;\n    width: inherit;\n  }\n"]);

  MainSidebar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var MainSidebar_profileImage = __webpack_require__(42);

var profileContent = {
  profileImage: MainSidebar_profileImage,
  name: "Jason Valenzuela",
  tagline: "Software Developer"
};
var MainSidebar_contactContent = [{
  contactType: "email",
  text: "jev4zs@virginia.edu",
  href: "mailto:jev4zs@virginia.edu"
}, {
  contactType: "phone",
  text: "(571)-337-4895",
  href: "tel:(571)-337-4895"
}, {
  contactType: "linkedin",
  text: "Jason Valenzuela",
  href: "https://www.linkedin.com/in/jason-valenzuela/"
}, {
  contactType: "github",
  text: "toyotathon",
  href: "https://github.com/toyotathon"
}];
var educationContent = {
  degree: "B.S. Computer Science",
  university: "University of Virginia",
  yearStart: "2013",
  yearEnd: "2017"
};
var interestContent = {
  title: "Interests",
  content: ["Web Development", "Mobile Application Development", "Machine Learning", "Functional Programming", "Data Science"]
};
/* harmony default export */ var MainSidebar = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(SidebarRoot, null, /*#__PURE__*/external_react_default.a.createElement(main_sidebar_ProfileSection, profileContent), /*#__PURE__*/external_react_default.a.createElement(main_sidebar_ContactSection, {
    contactContent: MainSidebar_contactContent
  }), /*#__PURE__*/external_react_default.a.createElement(main_sidebar_EducationSection, educationContent), /*#__PURE__*/external_react_default.a.createElement(common_SidebarList, interestContent));
});
var SidebarRoot = external_styled_components_default.a.div(MainSidebar_templateObject());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/common/IndexContentContainer.tsx


function IndexContentContainer_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n"]);

  IndexContentContainer_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function IndexContentContainer_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  text-transform: uppercase;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 20px;\n  color: #2d7788;\n  font-weight: 500;\n"]);

  IndexContentContainer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function IndexContentContainer_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background-color: #2d7788;\n  margin-right: 10px;\n  height: 30px;\n  width: 30px !important;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  IndexContentContainer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var MainSectionTypeToIcon = {
  career: free_solid_svg_icons_["faUser"],
  experience: free_solid_svg_icons_["faBriefcase"],
  projects: free_solid_svg_icons_["faArchive"]
};

var IndexContentContainer_MainContainerTitle = function MainContainerTitle(_ref) {
  var sectionType = _ref.sectionType,
      children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement(TitleBase, null, /*#__PURE__*/external_react_default.a.createElement(IconBase, null, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: MainSectionTypeToIcon[sectionType],
    size: "xs",
    color: "#fff"
  })), children);
};

var IndexContentContainer_IndexContentContainer = function IndexContentContainer(_ref2) {
  var className = _ref2.className,
      sectionType = _ref2.sectionType,
      title = _ref2.title,
      children = _ref2.children;
  return /*#__PURE__*/external_react_default.a.createElement(ContainerBase, {
    className: className
  }, /*#__PURE__*/external_react_default.a.createElement(IndexContentContainer_MainContainerTitle, {
    sectionType: sectionType
  }, title), children);
};

/* harmony default export */ var common_IndexContentContainer = (IndexContentContainer_IndexContentContainer);
var IconBase = external_styled_components_default.a.div(IndexContentContainer_templateObject());
var TitleBase = external_styled_components_default.a.h2(IndexContentContainer_templateObject2());
var ContainerBase = external_styled_components_default.a.div(IndexContentContainer_templateObject3());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/index-page/CareerProfileSection.tsx


function CareerProfileSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  ", ":not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);

  CareerProfileSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function CareerProfileSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n"]);

  CareerProfileSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CareerProfileSection_CareerProfileSection = function CareerProfileSection(_ref) {
  var careerProfileContent = _ref.careerProfileContent;
  return /*#__PURE__*/external_react_default.a.createElement(CareerContentBase, {
    sectionType: "career",
    title: "Career Profile"
  }, careerProfileContent.map(function (text, index) {
    return /*#__PURE__*/external_react_default.a.createElement(SectionText, {
      key: index
    }, text);
  }));
};

/* harmony default export */ var index_page_CareerProfileSection = (CareerProfileSection_CareerProfileSection);
var SectionText = external_styled_components_default.a.p(CareerProfileSection_templateObject());
var CareerContentBase = external_styled_components_default()(common_IndexContentContainer)(CareerProfileSection_templateObject2(), SectionText);
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(14);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/index-page/ExperienceSection.tsx



function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  color: #97aac3;\n  font-size: 14px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  color: #3f4650;\n  font-size: 16px;\n  margin: 0;\n\n  @media (max-width: 767px) {\n    margin-bottom: 5px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function ExperienceSection_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n"]);

  ExperienceSection_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ExperienceSection_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]);

  ExperienceSection_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ExperienceSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  ", ":not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]);

  ExperienceSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ExperienceSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  flex-direction: column;\n\n  & > :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);

  ExperienceSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ExperienceSection_ExperienceTitle = function ExperienceTitle(_ref) {
  var position = _ref.position,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      companyName = _ref.companyName,
      location = _ref.location;
  return /*#__PURE__*/external_react_default.a.createElement(ExperienceTitleBase, null, /*#__PURE__*/external_react_default.a.createElement(ExperiencePositionAndDatesRow, null, /*#__PURE__*/external_react_default.a.createElement(ExperienceHeaderText, null, position), /*#__PURE__*/external_react_default.a.createElement(ExperienceSubText, null, startDate, " - ", endDate)), /*#__PURE__*/external_react_default.a.createElement(ExperienceSubText, null, companyName, ", ", location));
};

var ExperienceSection_ExperienceContentSection = function ExperienceContentSection(_ref2) {
  var details = _ref2.details,
      description = _ref2.description;
  return /*#__PURE__*/external_react_default.a.createElement(ExperienceContentBase, null, /*#__PURE__*/external_react_default.a.createElement(ExperienceSection_ExperienceTitle, details), description.map(function (text, index) {
    return /*#__PURE__*/external_react_default.a.createElement(ExperienceContentText, {
      key: index
    }, text);
  }));
};

var ExperienceSection_ExperienceSection = function ExperienceSection(_ref3) {
  var experienceContent = _ref3.experienceContent;
  return /*#__PURE__*/external_react_default.a.createElement(ExperienceSectionBase, {
    sectionType: "experience",
    title: "Experience"
  }, experienceContent.map(function (content, index) {
    return /*#__PURE__*/external_react_default.a.createElement(ExperienceSection_ExperienceContentSection, extends_default()({}, content, {
      key: index
    }));
  }));
};

/* harmony default export */ var index_page_ExperienceSection = (ExperienceSection_ExperienceSection);
var ExperienceContentBase = external_styled_components_default.a.div(ExperienceSection_templateObject());
var ExperienceSectionBase = external_styled_components_default()(common_IndexContentContainer)(ExperienceSection_templateObject2(), ExperienceContentBase);
var ExperienceTitleBase = external_styled_components_default.a.div(ExperienceSection_templateObject3());
var ExperienceContentText = external_styled_components_default.a.p(ExperienceSection_templateObject4());
var ExperiencePositionAndDatesRow = external_styled_components_default.a.div(_templateObject5());
var ExperienceHeaderText = external_styled_components_default.a.h3(_templateObject6());
var ExperienceSubText = external_styled_components_default.a.div(_templateObject7());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/components/index-page/ProjectsSection.tsx


function ProjectsSection_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 16px;\n  color: #2d7788;\n"]);

  ProjectsSection_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ProjectsSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  ", ":not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]);

  ProjectsSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ProjectsSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n"]);

  ProjectsSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ProjectsSection_ProjectsSection = function ProjectsSection(_ref) {
  var projectsContent = _ref.projectsContent;
  return /*#__PURE__*/external_react_default.a.createElement(ProjectContentBase, {
    sectionType: "projects",
    title: "Projects"
  }, projectsContent.map(function (_ref2) {
    var link = _ref2.link,
        name = _ref2.name,
        description = _ref2.description;
    return /*#__PURE__*/external_react_default.a.createElement(ProjectDescriptionBase, null, /*#__PURE__*/external_react_default.a.createElement(ProjectLink, {
      href: link,
      target: "_blank"
    }, name), " ", "- ", description);
  }));
};

/* harmony default export */ var index_page_ProjectsSection = (ProjectsSection_ProjectsSection);
var ProjectDescriptionBase = external_styled_components_default.a.p(ProjectsSection_templateObject());
var ProjectContentBase = external_styled_components_default()(common_IndexContentContainer)(ProjectsSection_templateObject2(), ProjectDescriptionBase);
var ProjectLink = external_styled_components_default.a.a(ProjectsSection_templateObject3());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/containers/IndexPageContent.tsx


function IndexPageContent_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background: #fff;\n  padding: 60px;\n  padding-right: 300px;\n\n  & > :not(:last-child) {\n    margin-bottom: 60px;\n  }\n\n  @media (max-width: 767px) {\n    padding: 30px;\n  }\n"]);

  IndexPageContent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var IndexPageContent_careerProfileContent = ["I am full stack software developer and a computer science graduate from the University of Virginia looking for software development roles in the Eugene-Springfield, OR area. I am also open to roles in Corvallis, Portland, or remote. I have a breadth of experience in software development, ranging from web and mobile development to machine learning and data analytics, and I enjoy expanding my knowledge of my craft and delivering pleasurable experiences to clients and stakeholders.", "Please feel free to reach out to me with any questions about my background or information about a role for which I am a fit!"];
var IndexPageContent_experienceContent = [{
  details: {
    position: "Software Developer",
    startDate: "March 2018",
    endDate: "July 2019",
    companyName: "Twenty Ideas",
    location: "Eugene, OR"
  },
  description: ["At Twenty Ideas, I had the opportunity to alongside talented developers and designers to create enjoyable software experiences for a variety of projects and clients. The projects ranged from data collection and analysis, web and mobile development, machine learning, and game development.", "During my time, I worked with several different tech stacks depending on the needs of the projects. For web development projects, I used React/Typescript and Kotlin/Spring Boot. For machine learning, I worked with the Analytic Spot machine learning framework and Apache Spark for data processing and classification. For web and mobile development projects, I used Ionic, Angular and Typescript to create cross-platform applications."]
}, {
  details: {
    position: "Software Developer",
    startDate: "July 2017",
    endDate: "March 2018",
    companyName: "Comcast",
    location: "Reston, VA"
  },
  description: ["I worked with the Video Acquisition Deployment Engineering and Research (VADER) team at Comcast, where I provided support for the ingest and delivery of video content, which comes in the form of legacy QAM, IP, and MPEG video formats.", "My role consisted of compiling data and creating tools to handle the asset payload, and monitor the health and status of the infrastructure that handles the storage and transcoding of video content. These tools are written in Java and Ruby, and they communicate with the data services that handle content delivery. I also communicated with content providers on issues that they were having with the technologies that the team was using."]
}, {
  details: {
    position: "Web Developer",
    startDate: "May 2017",
    endDate: "August 2017",
    companyName: "UVA School of Architecture",
    location: "Charlottesville, VA"
  },
  description: ["I worked alongside a graduated Architecture student to develop The Material Exchange, a platform for Architecture students to buy, sell, or exchange their leftover project material to other students. The project was done as an effort to promote ecological sustainability within the Architecture school to tackle the issue of unused paper and project materials leftover after each semester.", "The platform utilized the Django REST Framework for the backend, and React.js was used for the frontend. The system was deployed with Heroku services, and Circle CI was used for continuous integration."]
}];
var IndexPageContent_projectsContent = [{
  link: "https://github.com/OpenEugene/openboard",
  name: "Openboard",
  description: "Collaborating with contributors in the Eugene Tech community to create an open source bulletin board for publicizing announcements relevant to other members of the community. It is being built with Elm, Go, and gRPC and will include a REST API to allow for other clients to consume this data."
}, {
  link: "https://github.com/hackoregon/civic",
  name: "Hack Oregon",
  description: "Working as a front-end engineer for this organization, which is a rapid prototyping lab taking a creative approach to data projects that bring insight to complex issues in the public interest. I am using React and Redux to help build out the component library that other Hack Oregon projects use."
}, {
  link: "https://github.com/toyotathon/service-learning-practicum",
  name: "Service Learning Practicum",
  description: "Implemented a data management system for Georgia's Healing House, a non-profit organization in Charlottesville, VA, alongside five other senior students. The system utilized the Django framework and other Python libraries for statistical analysis and display."
}];

var IndexPageContent_IndexPageContent = function IndexPageContent() {
  return /*#__PURE__*/external_react_default.a.createElement(MainWrapper, null, /*#__PURE__*/external_react_default.a.createElement(index_page_CareerProfileSection, {
    careerProfileContent: IndexPageContent_careerProfileContent
  }), /*#__PURE__*/external_react_default.a.createElement(index_page_ExperienceSection, {
    experienceContent: IndexPageContent_experienceContent
  }), /*#__PURE__*/external_react_default.a.createElement(index_page_ProjectsSection, {
    projectsContent: IndexPageContent_projectsContent
  }));
};

/* harmony default export */ var containers_IndexPageContent = (IndexPageContent_IndexPageContent);
var MainWrapper = external_styled_components_default.a.div(IndexPageContent_templateObject());
// CONCATENATED MODULE: /Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/src/pages/index.tsx



/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(MainSidebar, null), /*#__PURE__*/external_react_default.a.createElement(containers_IndexPageContent, null));
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(6);

var _router = __webpack_require__(13);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(27);
module.exports = __webpack_require__(35);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(26)["default"];

var _require = __webpack_require__(17),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(17),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(28),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);






Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/index.tsx': t_1
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 4,
	"./": 4,
	"./index": 4,
	"./index.js": 4
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(19);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(36);

var _interopRequireDefault = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(14));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(38));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(39);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(40)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("/Users/jasonvalenzuela/projects/jasonvalenzuela.github.io/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9-23.2377d150.png";

/***/ })
/******/ ]);
});