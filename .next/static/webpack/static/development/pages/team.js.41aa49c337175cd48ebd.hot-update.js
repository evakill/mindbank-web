webpackHotUpdate("static/development/pages/team.js",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Member */ "./components/Member.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/team.js";






var members = __webpack_require__(/*! ../member.js */ "./member.js").members;

var management = __webpack_require__(/*! ../member.js */ "./member.js").management;

var styles = {
  title: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].g2,
    fontFamily: "Montserrat",
    fontStyle: 600,
    margin: 0,
    padding: 0
  },
  flatTitle: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].b1,
    fontFamily: "Montserrat",
    fontStyle: 600,
    margin: 0,
    padding: 0
  },
  flatText: {
    color: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].g1,
    fontFamily: "Lora",
    fontSize: 20
  },
  redBar: {
    minHeight: "100%",
    minWidth: 10,
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].r1,
    margin: "0px 20px"
  },
  redBarHoriz: {
    minHeight: 3,
    minWidth: "100%",
    backgroundColor: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].r1,
    color: _colors_js__WEBPACK_IMPORTED_MODULE_4__["default"].r1,
    margin: "0px 0px 30px 0px"
  }
};

var Team = function Team() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: "3rem 6rem",
      paddingTop: 80
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-1",
    style: styles.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    style: styles.flatText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Meet the creative, innovative, enterprising brains that make up The Mindbank."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-2",
    style: styles.flatTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "MANAGEMENT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.redBarHoriz,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, management.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_3__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-2",
    style: styles.flatTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "CONSULTANTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.redBarHoriz,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_3__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/team")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=team.js.41aa49c337175cd48ebd.hot-update.js.map