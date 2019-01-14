webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _this = undefined,
    _jsxFileName = "/Users/killenberge/mindbank-web/components/Footer.js";




var Square = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
});
var styles = {};

var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero is-small",
    style: {
      backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].g4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container has-text-centered",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "bottom"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].b1,
      fontFamily: "Montserrat"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, " THE MINDBANK ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "Open Sans",
      color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].b3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
    pose: _this.state.h2 ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return _this.setState({
        h2: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return _this.setState({
        h2: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/about",
    style: _this.state.isActive ? styles.dropdownItem : styles.barItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "About Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
    pose: _this.state.h3 ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return _this.setState({
        h3: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return _this.setState({
        h3: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/team",
    style: _this.state.isActive ? styles.dropdownItem : styles.barItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Team"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
    pose: _this.state.h4 ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return _this.setState({
        h4: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return _this.setState({
        h4: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/projects",
    style: _this.state.isActive ? styles.dropdownItem : styles.barItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
    pose: _this.state.h5 ? "hovered" : "idle",
    onMouseEnter: function onMouseEnter() {
      return _this.setState({
        h5: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return _this.setState({
        h5: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/contact",
    style: _this.state.isActive ? styles.dropdownItem : styles.barItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].b1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].b1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_1__["default"].b1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.763a5aec62f58e6c5cf1.hot-update.js.map