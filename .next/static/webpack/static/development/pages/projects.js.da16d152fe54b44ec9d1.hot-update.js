webpackHotUpdate("static/development/pages/projects.js",{

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
var _card,
    _cardBack,
    _jsxFileName = "/Users/killenberge/mindbank-web/components/Project.js";



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



var Square = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1
  }
});
var styles = {
  card: (_card = {
    boxShadow: "0px 0px 15px 7px ".concat(_colors__WEBPACK_IMPORTED_MODULE_1__["default"].g3),
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
  }, _defineProperty(_card, "padding", "5%"), _defineProperty(_card, "height", 450), _defineProperty(_card, "alignItems", "center"), _defineProperty(_card, "justifyContent", "center"), _card),
  cardBack: (_cardBack = {
    boxShadow: "0px 0px 15px 7px ".concat(_colors__WEBPACK_IMPORTED_MODULE_1__["default"].g3),
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_1__["default"].g4
  }, _defineProperty(_cardBack, "padding", "5%"), _defineProperty(_cardBack, "height", 450), _defineProperty(_cardBack, "alignItems", "center"), _defineProperty(_cardBack, "justifyContent", "center"), _cardBack)
};

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-4",
        style: {
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex",
        style: {
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: 250,
          width: 250,
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.src,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " ", this.props.name, " "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " ", this.props.date, " "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-5 has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " ", this.props.tagline, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column is-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, " ", this.props.name, " "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "The Company: "), this.props.company, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Their Question: "), this.props.proposal, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Our Answer: "), this.props.results, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, " ", this.props.impact, " "))));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=projects.js.da16d152fe54b44ec9d1.hot-update.js.map