webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _components_Member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Member */ "./components/Member.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Project */ "./components/Project.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/about.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var members = __webpack_require__(/*! ../member.js */ "./member.js").members;

var management = __webpack_require__(/*! ../member.js */ "./member.js").management;

var styles = {
  card: _defineProperty({
    boxShadow: "0px 0px 15px 7px ".concat(_colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].g3),
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
  }, "padding", "5%"),
  title: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: 0,
    padding: 0
  },
  header: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].g2,
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0
  },
  flatTitle: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].b1,
    fontFamily: "Open Sans",
    fontStyle: 600,
    margin: "1rem"
  },
  flatText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].g1,
    fontFamily: "Lora",
    fontSize: 20
  },
  accentText: {
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].g4,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].b1,
    fontFamily: "Lora",
    textDecoration: "bold",
    padding: "2rem 4rem",
    margin: "2rem 0rem"
  },
  redBar: {
    minHeight: "100%",
    minWidth: 10,
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1,
    margin: "0px 20px"
  },
  redBarHoriz: {
    minHeight: 3,
    minWidth: "100%",
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1,
    margin: "0px 0px 10px 0px"
  }
};

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: "2rem 6rem",
      paddingTop: 80
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-centered",
    style: {
      padding: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-1 is-size-2-tablet is-size-3-mobile",
    style: styles.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "ABOUT US"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: styles.flatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Read about the history, mission, and vision of The Mindbank.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-3",
    style: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "HISTORY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-flex",
    style: {
      flexDirection: "row"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.redBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: styles.flatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "The MindBank is the result of the frustrations a student felt when working on a startup at the University of Pennsylvania. Whenever he asked for feedback or advice from industry leaders he received contradictory opinions, making decisions even more confusing. At its core, The MindBank\u2019s founding goal was to provide a place where these contrasting opinions could be raised in dialogue together, in the hope this would result in a clearer path forward for many student startups and other organizations that seek advice."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-size-4",
    style: styles.accentText,
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
  }, "To this day, that starting principle remains steadfast. The MindBank does not have one culture, worldview, or opinion - it has countless. Every problem is assessed from a multitude of perspectives and insights from our team that can only arise when people disagree and challenge each other, ultimately forming a clearer path forward.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: "0rem 6rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-flex",
    style: {
      flexDirection: "row"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.redBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: styles.flatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Since it\u2019s inception, The MindBank has grown quickly and found a particular niche in the heart of the college campus, where our team, which consists only of students, can provide the most value. Whether working with multinational corporations on strategies to better market to students, or teaming up with a campus based startup to help them better structure their organization, The MindBank is always able to use its unique and diverse insight to help our clients obtain their intended results.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: '2rem 0rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-3",
    style: styles.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "MISSION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-flex",
    style: {
      flexDirection: "row"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.redBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: styles.flatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "sexy mission statement")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.a01208fac2239dfddc9c.hot-update.js.map