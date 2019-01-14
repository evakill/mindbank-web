webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Square = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
});
var pages = ["/", "About", "Team", "Projects", "Contact"];

var CSS = function CSS() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
    integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      hovering: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CSS, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {
        inverse: true,
        collapseOnSelect: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar.Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "React-Bootstrap")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar.Toggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar.Collapse, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
        eventKey: 1,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Link"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Link"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavDropdown, {
        eventKey: 3,
        title: "Dropdown",
        id: "basic-nav-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        eventKey: 3.1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        eventKey: 3.2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        eventKey: 3.3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        divider: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        eventKey: 3.3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Separated link"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
        pullRight: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
        eventKey: 1,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Link Right"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
        eventKey: 2,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Link Right")))), ";");
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // <nav className="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation" style={{backgroundColor: colors.b1, height: 80, borderRadius: 0}}>
//  <div className="navbar-brand" style={{color: colors.b1}}>
//    <div href="/" style={{padding:5}}>
//    <Square
//      pose={this.state.hovering ? "hovered" : "idle"}
//      onMouseEnter={() => this.setState({ hovering: true })}
//      onMouseLeave={() => this.setState({ hovering: false })}>
//    <img
//      src="/static/img/icon.png"
//      alt="The MindBank"
//      width="45"
//      height="45"/>
//      </Square>
//    </div>
//
//    <div className="button navbar-burger is-info" data-target="navMenu">
//      <span></span>
//      <span></span>
//      <span></span>
//    </div>
//  </div>
//
//  <div className="navbar-menu" id="navMenu">
//    <div className="navbar-start"></div>
//    <div className="navbar-end">
//      <a className="navbar-item" href="/about">
//        <b>About Us</b>
//      </a>
//      <a className="navbar-item" href="/team">
//        <b>Team</b>
//      </a>
//      <a className="navbar-item" href="/projects">
//        <b>Projects</b>
//      </a>
//      <a className="navbar-item" href="/contact">
//        <b>Contact</b>
//      </a>
//    </div>
//  </div>
// </nav>


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/isobject/index.js":
false,

/***/ "./node_modules/react-responsive-navbar/dist/index.es.js":
false,

/***/ "./node_modules/reactjs-navigation/build/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.es.js":
false,

/***/ "./node_modules/styled-components/node_modules/hoist-non-react-statics/index.js":
false,

/***/ "./node_modules/stylis/stylis.js":
false

})
//# sourceMappingURL=index.js.7d30ba58dc0ef7749d13.hot-update.js.map