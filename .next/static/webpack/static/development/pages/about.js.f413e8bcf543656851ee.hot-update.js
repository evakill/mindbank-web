webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors */ "./colors.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/components/Project.js";


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

var Project =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Project).call(this, props));
    _this.state = {
      h: false
    };
    return _this;
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
        pose: this.state.h ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            h: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            h: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.state.h ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "has-text-white has-text-centered is-flex",
        style: {
          flexDirection: "column",
          justifyContent: "center",
          height: 210,
          width: 210,
          borderRadius: 105,
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_1__["default"].b4,
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, " Project Name "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, " company desc "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, " project proposal "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " deliverables "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " impact ")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 200,
          width: 200,
          borderRadius: 15,
          backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_1__["default"].b3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

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






var management = [{
  firstName: "Eva",
  lastName: "Killenberg",
  hometown: "Little Compton, Rhode Island, USA",
  major: "Computer Science",
  year: "Sophomore",
  role: "President"
}, {
  firstName: "Alyssa",
  lastName: "Furukawa",
  hometown: "Los Angeles, California, USA",
  major: "Networks and Data Analytics",
  year: "Sophomore",
  role: "Director of Internal"
}];
var members = [{
  firstName: "Eddie",
  lastName: "Hammond",
  hometown: "London, England",
  major: "Mechanical Engineering",
  year: "Junior"
}, {
  firstName: "Gabe",
  lastName: "Barnett",
  hometown: "New York, New York, USA",
  major: "Political Science",
  year: "Junior"
}];

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    style: {
      padding: '2rem',
      paddingTop: '6rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      paddingTop: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-1 title",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, " paragraph about how the mindbank came to be "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      paddingTop: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-1 title",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Mission"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " sexy mission statement "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      paddingTop: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-1 title is-spaced",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle is-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " Management "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, management.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_4__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "subtitle is-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, " Consultants "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Member__WEBPACK_IMPORTED_MODULE_4__["default"], {
      member: member,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    });
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      paddingTop: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-1 title",
    style: {
      color: _colors_js__WEBPACK_IMPORTED_MODULE_3__["default"].r1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
//# sourceMappingURL=about.js.f413e8bcf543656851ee.hot-update.js.map