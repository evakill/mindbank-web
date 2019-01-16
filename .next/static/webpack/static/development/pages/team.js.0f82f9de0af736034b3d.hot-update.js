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
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/team.js";







var members = __webpack_require__(/*! ../member.js */ "./member.js").members;

var management = __webpack_require__(/*! ../member.js */ "./member.js").management;

var Team = function Team() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "0 10%",
      marginTop: 80
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "has-text-centered",
    style: {
      padding: "5%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "OUR TEAM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5-desktop is-size-6-tablet is-size-7-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Meet the creative, innovative, enterprising students that make up The Mindbank.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-3-desktop is-size-4-tablet is-size-4-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "MANAGEMENT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].redBarHoriz,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, management.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_3__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "is-size-3-desktop is-size-4-tablet is-size-4-mobile",
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "CONSULTANTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _styles_js__WEBPACK_IMPORTED_MODULE_5__["default"].redBarHoriz,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline is-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_3__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
//# sourceMappingURL=team.js.0f82f9de0af736034b3d.hot-update.js.map