webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors.js */ "./colors.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles.js */ "./styles.js");
var _jsxFileName = "/Users/killenberge/mindbank-web/pages/contact.js";


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
    scale: 1.01
  }
});

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));
    _this.state = {
      h: false,
      name: '',
      email: '',
      message: '',
      listServ: false,
      successAlert: false,
      errorAlert: false
    };
    emailjs_com__WEBPACK_IMPORTED_MODULE_2__["init"]('user_EjB6lEHEOdkqInAOT0u59');
    return _this;
  }

  _createClass(Contact, [{
    key: "submit",
    value: function submit() {
      var _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          message = _this$state.message,
          listServ = _this$state.listServ;
      listServ = listServ ? 'Y' : 'N';
      emailjs_com__WEBPACK_IMPORTED_MODULE_2__["send"]('default_service', 'template_8hm8wudW', {
        name: name,
        email: email,
        message: message,
        listServ: listServ
      }, 'user_EjB6lEHEOdkqInAOT0u59').then(function (response) {
        this.setState({
          name: '',
          email: '',
          message: '',
          listServ: '',
          successAlert: true
        });
      }, function (err) {
        this.setState({
          name: '',
          email: '',
          message: '',
          listServ: '',
          errorAlert: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          message = _this$state2.message,
          listServ = _this$state2.listServ;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "has-text-centered",
        style: {
          padding: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-1-desktop is-size-2-tablet is-size-3-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "CONTACT US"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-3-fullhd is-size-5-desktop is-size-6-tablet is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " We'd love to hear from you! ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex",
        style: {
          flexDirection: "row",
          minWidth: "100%",
          justifyContent: "center",
          paddingBottom: "5%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].redBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "is-flex",
        style: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Open Sans",
          minWidth: "60%",
          paddingLeft: "3%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "is-size-4-fullhd is-size-6-desktop is-size-7-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Complete this form with any general questions, concerns, or feedback. We'll be sure to respond promptly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "label has-text-left",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        className: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "label has-text-left",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        className: "input",
        type: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "label has-text-left",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        value: message,
        onChange: function onChange(e) {
          return _this2.setState({
            message: e.target.value
          });
        },
        className: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "field",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: listServ,
        onClick: function onClick(e) {
          return _this2.setState({
            listServ: !listServ
          });
        },
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "checkbox",
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Add me to MindBank ListServ.")), this.state.successAlert ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, " Thank you for your message! We will get back to you soon. ") : "", this.state.errorAlert ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, " There was an error sending your message, please try again. If error persists, please contact info@themindbank.net ") : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "control is-flex",
        style: {
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
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
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.submit();
        },
        className: "button is-size-5-desktop is-size-6-tablet is-size-6-mobile",
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].cardButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-double-right",
        style: {
          padding: "4px 4px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.aa742fc2baaa4574745f.hot-update.js.map