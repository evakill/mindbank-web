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
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
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







var Square = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.03
  }
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecruitmentModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero is-fullheight is-flex",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].banner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/full_logo_subtitle.png",
    width: "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoCards, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}; // Through targeted research projects and comprehensive surveying we have aggregated a base of data and foundation of understanding of
// our environment, which we use to make informed and original solutions.
// Students are best motivated when engaged with real-life challenges and love seeing the
// impact of their work. So why not immerse them directly into situations with the potential
// for real impact?


var RecruitmentModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecruitmentModal, _React$Component);

  function RecruitmentModal(props) {
    var _this;

    _classCallCheck(this, RecruitmentModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecruitmentModal).call(this, props));
    _this.state = {
      open: true
    };
    return _this;
  }

  _createClass(RecruitmentModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: this.state.open ? " modal is-active" : "modal",
        style: {
          height: "100%",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-content",
        style: {
          height: "60%",
          width: "60%",
          padding: "5%",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        class: "is-size-2",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, " MindBank is recruiting! "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBarHoriz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Please apply here. Reach out to our Director of Recruitment, Ryan Boesky, at rboesky@sas.upenn.edu with any questions.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        class: "modal-close is-large",
        "aria-label": "close",
        onClick: function onClick(e) {
          return _this2.setState({
            open: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }));
    }
  }]);

  return RecruitmentModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var InfoCards =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(InfoCards, _React$Component2);

  function InfoCards(props) {
    var _this3;

    _classCallCheck(this, InfoCards);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(InfoCards).call(this, props));
    _this3.state = {
      hProjects: false,
      hTeam: false
    };
    return _this3;
  }

  _createClass(InfoCards, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "0 10%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        style: {
          margin: "10% 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-12",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "WHO WE ARE", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBarHoriz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-2-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "MindBank is a bright, diverse group of Penn students. We are young women and men studying liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving and a desire to learn and engage."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hTeam ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hTeam: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hTeam: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/team",
        className: "button is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Meet the team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-right",
        style: {
          padding: "2px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns is-gapless is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-half is-flex",
        style: {
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].g4,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "8%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-6-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].bannerText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "We promote ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "experiential learning"), " with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "tangible impact."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "100%",
        src: "/static/img/gabe.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "0 10%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        style: {
          margin: "10% 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-12",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "WHAT WE DO", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBarHoriz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-2-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative and iterative project cycle, we identify business needs then use our expertise to propose original and informed advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.hProjects ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            hProjects: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            hProjects: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/projects",
        className: "button is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "See past projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-right",
        style: {
          padding: "2px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns is-gapless is-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/locust.png",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-half is-flex",
        style: {
          backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].g4,
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "8%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-2-fullhd is-size-3-desktop is-size-4-tablet is-size-6-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].bannerText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "We deliver value by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "uncovering insights"), " only available to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        style: {
          color: _colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].r1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "campus insiders."))))));
    }
  }]);

  return InfoCards;
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
//# sourceMappingURL=index.js.b78be2e45ac95ee4152a.hot-update.js.map