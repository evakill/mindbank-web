webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/news.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  function News(props) {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          padding: "0 3% 3%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "has-text-centered",
        style: {
          padding: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "NEWS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Follow us on Facebook for updates, events, and original content.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        style: {
          padding: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2043312005790391&width=500&show_text=true&appId=1730719700366447&height=490",
        width: "500",
        height: "490",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1981189738669285&width=500&show_text=true&appId=1730719700366447&height=530",
        width: "500",
        height: "530",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1625975954190667&width=500&show_text=true&appId=1730719700366447&height=570",
        width: "500",
        height: "570",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F2036134663174792&width=500&show_text=true&appId=1730719700366447&height=690",
        width: "500",
        height: "690",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1970569109731348&width=500&show_text=true&appId=1730719700366447&height=550",
        width: "500",
        height: "550",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpennmindbank%2Fposts%2F1938400149614911&width=500&show_text=true&appId=1730719700366447&height=500",
        width: "500",
        height: "500",
        style: {
          border: "none",
          overflow: "hidden",
          margin: "5%"
        },
        scrolling: "no",
        frameborder: "0",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/news")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=news.js.a83955ecdb984c164b4d.hot-update.js.map