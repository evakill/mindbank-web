module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./colors.js":
/*!*******************!*\
  !*** ./colors.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  b1: "#181b47",
  r1: "#7e1518",
  g1: "#434343",
  g2: "#A7a7a7",
  g3: "#E5E5E5",
  g4: "#F2F2F2"
});

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/components/Footer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Square = react_pose__WEBPACK_IMPORTED_MODULE_2___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
});

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    _this.state = {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
      h5: false
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero is-small",
        style: {
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g4,
          marginTop: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container has-text-centered",
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "15%",
        src: "/static/img/full_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container is-size-6",
        style: {
          display: "flex",
          justifyContent: "center",
          fontFamily: "Open Sans",
          color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g1,
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h1 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h1: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h1: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h2 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h2: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h2: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/team",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "TEAM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h3 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h3: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h3: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/projects",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "PROJECTS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h3 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h3: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h3: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/projects",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "RESEARCH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h4 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h4: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h4: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/news",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "NEWS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h5 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h5: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h5: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/contact",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "CONTACT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          display: "flex",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.facebook.com/pennmindbank/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g1,
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-lg fa-facebook-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:info@themindbank.net",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g1,
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lg fa-envelope-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.linkedin.com/company/the-mindbank/about/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g1,
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-lg fa-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Square = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.1
  }
});

var CSS = function CSS() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lora|Montserrat|Open+Sans:400,600,800|Lato|Song+Myung|Raleway|Playfair+Display",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleNav", function () {
      console.log(!_this.state.isActive);

      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    });

    _this.state = {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
      h5: false,
      h6: false,
      h7: false,
      isActive: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CSS, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-info is-fixed-top",
        role: "navigation",
        "aria-label": "main navigation",
        style: {
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].b1,
          height: "5rem",
          borderRadius: 0,
          boxShadow: "0px 0px 7px 3px ".concat(_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].g2)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        style: {
          padding: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h1 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h1: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h1: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/icon_white.png",
        alt: "MindBank",
        width: "40",
        height: "40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-burger is-info",
        onClick: this.toggleNav,
        style: {
          color: "white",
          float: "right",
          padding: 10,
          marginTop: 10,
          alignSelf: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), this.state.isActive ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu is-active",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/team",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "TEAM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/projects",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "PROJECTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/research",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "RESEARCH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/news",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "NEWS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/contact",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].dropdownItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "CONTACT"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].bar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h2 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h2: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h2: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h3 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h3: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h3: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/team",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "TEAM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h4 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h4: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h4: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/projects",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "PROJECTS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h5 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h5: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h5: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/research",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "RESEARCH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h6 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h6: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h6: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/news",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "NEWS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h7 ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h7: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h7: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/contact",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].barItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "CONTACT"))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ResearchProject.js":
/*!***************************************!*\
  !*** ./components/ResearchProject.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors */ "./colors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/killenberge/mindbank-web/components/ResearchProject.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Square = react_pose__WEBPACK_IMPORTED_MODULE_3___default.a.div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1
  }
});

var ResearchProject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResearchProject, _React$Component);

  function ResearchProject() {
    _classCallCheck(this, ResearchProject);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResearchProject).apply(this, arguments));
  }

  _createClass(ResearchProject, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-4 is-flex",
        style: {
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.src,
        style: {
          maxHeight: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-3-fullhd is-size-5-desktop is-size-6-mobile has-text-centered",
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].accentText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, " ", this.props.tagline, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-5-fullhd is-size-6-desktop is-size-7-mobile",
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.date, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].redBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-8",
        style: {
          padding: "3%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile",
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, " ", this.props.name, " "), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-3-fullhd is-size-5-desktop is-size-6-mobile",
        style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Our Question: "), this.props.question, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Key Insights: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          listStyleType: "disc",
          paddingLeft: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.insights.map(function (insight) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, insight);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))))));
    }
  }]);

  return ResearchProject;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResearchProject);

/***/ }),

/***/ "./pages/research.js":
/*!***************************!*\
  !*** ./pages/research.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_ResearchProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ResearchProject */ "./components/ResearchProject.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/research.js";







var Research = function Research() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-centered",
    style: {
      padding: "5%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "OUR RESEARCH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Learn about our research initiatives that drive our data-driven insights.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].numberContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "4,200+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].subNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "DATAPOINTS COLLECTED")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].subNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "COMPREHENSIVE STUDIES")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "800+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].subNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "STUDENTS SURVEYED"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-4-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "FEATURED STUDIES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: "10%",
      paddingTop: "2%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResearchProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/static/img/penn-market.png",
    name: "THE PENN MARKET",
    date: "Fall 2018",
    question: "How and why do Penn students spend?",
    insights: ["Determining how students allocate their spending money", "The most influential factors that differentiate providers in each market", "How these results are correlated to demographic segments by gender, age, and social environment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResearchProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/static/img/advertising.png",
    name: "ADVERTISING AT PENN",
    date: "Fall 2018",
    question: "What is the most efficient and effective way to advertise to Penn students?",
    insights: ["The most effective forms of communication that translate into consumer action", "How different targeting tactics effects degree of responsivity"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginBottom: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResearchProject__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/static/img/events.png",
    name: "EVENTS AT PENN",
    date: "Fall 2018",
    question: "How can you premote event attendance at Penn?",
    insights: ["Determining the optimal time to host events for students", "Investigating the factors that compell students to attend events", "How these temporal and behavioral factors differ for differnt types paid and free events"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Research);

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./colors.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    padding: "0 10% 3% 10%",
    marginTop: 100
  },
  banner: {
    backgroundImage: "url(/static/img/banner.png)",
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g4,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "6rem",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0,
    fontWeight: 600
  },
  subtitle: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Open Sans"
  },
  header: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g2,
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0
  },
  text: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Lora"
  },
  bigText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Lora",
    fontSize: "50px"
  },
  accentText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].b1,
    fontFamily: "Montserrat",
    fontWeight: 600
  },
  bannerText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Lato",
    fontWeight: 600
  },
  card: {
    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, .1)",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "3% 5%"
  },
  cardTitle: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].b1,
    fontFamily: "Open Sans",
    margin: 0,
    fontWeight: 600
  },
  cardText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Lora",
    padding: "3% 3% 0 3%"
  },
  cardButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 0,
    backgroundColor: "white",
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1,
    borderWidth: 0,
    float: "right",
    fontFamily: "Lato",
    textDecoration: "none",
    fontWeight: 600
  },
  dropdown: {
    padding: 0,
    margin: 0,
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  dropdownContainer: {
    float: "right",
    boxShadow: "-2px 2px 10px 10px rgba(0, 0, 0, 0.1)",
    width: "30%",
    marginTop: 60
  },
  bar: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    textDecoration: "none"
  },
  dropdownItem: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].b1,
    textDecoration: "none",
    padding: 5,
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 14,
    scale: "1 !important"
  },
  barItem: {
    textDecoration: "none",
    padding: 15,
    color: "white",
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: 400
  },
  redBar: {
    minHeight: "100%",
    minWidth: ".4rem",
    maxWidth: 8,
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1
  },
  redBarHoriz: {
    minHeight: ".4rem",
    minWidth: "100%",
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1
  },
  item: _defineProperty({
    textDecoration: "none",
    padding: 10,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g1,
    fontFamily: "Open Sans"
  }, "textDecoration", "none"),
  numberContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5% 5%"
  },
  number: {
    fontSize: "50px",
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].r1,
    fontFamily: "Open Sans",
    fontWeight: "600"
  },
  subNumber: {
    fontSize: "14px",
    color: _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"].g2
  }
});

/***/ }),

/***/ 8:
/*!*********************************!*\
  !*** multi ./pages/research.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/research.js */"./pages/research.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ })

/******/ });
//# sourceMappingURL=research.js.map