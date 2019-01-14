webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Square = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

var styles = {
  card: _defineProperty({
    boxShadow: "0px 0px 15px 7px ".concat(_colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g3),
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
  }, "padding", "5%")
};

var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero is-primary is-medium",
    style: {
      backgroundImage: "url(/static/img/consulting.jpg)",
      padding: "0 3rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body is-flex",
    style: {
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-flex",
    style: {
      flexDirection: "row"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/fullLogo.png",
    width: "50%",
    style: {
      alignSelf: "flex-end",
      paddingBottom: '5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%",
      width: 10,
      backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1,
      color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "h")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "We are a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "student consulting group"), " at the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "University of Pennsylvania"), ". "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " We work with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "student-led startups"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "campus organizations"), ", and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "established companies"), " focused on the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "collegiate environment."), " ")))));
};

var InfoBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InfoBox, _React$Component);

  function InfoBox(props) {
    var _this;

    _classCallCheck(this, InfoBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoBox).call(this, props));
    _this.state = {
      hProjects: false,
      hTeam: false
    };
    return _this;
  }

  _createClass(InfoBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        style: {
          padding: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-1 title",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Who We Are"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-4",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "The MindBank is a bright, diverse group of Penn students. We are young women and men studying liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving and a desire to learn and engage."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        className: "button has-text-white is-rounded",
        style: {
          marginTop: 20,
          marginRight: 20,
          backgroundColor: "#b9b9b9",
          borderWidth: 0,
          alignSelf: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hTeam ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hTeam: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hTeam: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Meet the team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-right",
        style: {
          padding: "3px 4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        style: {
          padding: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-1 title",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "What We Do"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-4",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative and iterative project cycle, we identify business needs and problems then use our expertise to propose original and informed advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        className: "button has-text-white is-rounded",
        style: {
          marginRight: 30,
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g2,
          borderWidth: 0,
          alignSelf: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hProjects ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hProjects: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hProjects: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "See past projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-right",
        style: {
          padding: "3px 4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))))));
    }
  }]);

  return InfoBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Links =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Links, _React$Component2);

  function Links(props) {
    var _this3;

    _classCallCheck(this, Links);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Links).call(this, props));
    _this3.state = {
      hAbout: false,
      hClient: false,
      hConsult: false,
      hContact: false
    };
    return _this3;
  }

  _createClass(Links, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero",
        style: {
          padding: '5rem',
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hAbout ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hAbout: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hAbout: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about",
        style: {
          textDecoration: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex has-text-centered",
        style: {
          flexDirection: "column",
          padding: 25,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].b4,
          margin: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-3x fa-users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title is-4",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "subtitle is-5",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Learn more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "has-text-grey is-6",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "  Read about our history, mission, and vision, meet our talented members, and learn about our past projects.")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hClient ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hClient: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hClient: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/clients",
        style: {
          textDecoration: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex has-text-centered",
        style: {
          flexDirection: "column",
          padding: 25,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].b4,
          margin: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-3x fa-handshake",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "title is-4 is-5-desktop",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "For Clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "subtitle is-5",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Work with us."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "has-text-grey is-size-6",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, " We work with companies, businesses, and start-ups which target the campus environment.")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hConsult ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hConsult: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hConsult: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/consultants",
        style: {
          textDecoration: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex has-text-centered",
        style: {
          flexDirection: "column",
          padding: 25,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].b4,
          margin: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-3x fa-user-tie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "title is-4",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "For Consultants"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "subtitle is-5",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Get involved. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "has-text-grey is-size-6",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].g1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, " We recruit bright, driven, and creative Penn students to join our group."))))))));
    }
  }]);

  return Links;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //We deliver value to our clients by leveraging our reach across Penn’s student communities and uncovering insights only available to campus insiders.</p>
//Students are best motivated when engaged with real-life challenges and love seeing the
//         impact of their work. So why not immerse them directly into situations with the potential
//         for real impact?
//         The MindBank was formed to give students the opportunity to practice teamwork and
//         develop their problem-solving skills.


var News =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(News, _React$Component3);

  function News(props) {
    var _this5;

    _classCallCheck(this, News);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));
    _this5.state = {
      posts: ["https://www.facebook.com/pennmindbank/photos/a.1120616514726616/1938399516281641/?type=3&theater", "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2036130063175252/?type=3&theater", "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2043311475790444/?type=3&theater"],
      index: 1
    };
    return _this5;
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero",
        style: {
          padding: "5rem 20rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title is-size-1",
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_6__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "subtitle is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, " Connect with us on Facebook to follow our latest updates and content. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          alignSelf: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_4__["FacebookProvider"], {
        appId: "1730719700366447",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_4__["Page"], {
        href: "https://www.facebook.com/pennmindbank/",
        tabs: "timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })))));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.16bb7f05a0a5bd0c2288.hot-update.js.map