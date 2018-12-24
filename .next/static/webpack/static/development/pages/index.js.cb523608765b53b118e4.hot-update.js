webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-konva */ "./node_modules/react-konva/lib/ReactKonva.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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




var Konva = __webpack_require__(/*! konva */ "./node_modules/konva/konva.js");






var Square = react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div({
  idle: {
    scale: 1
  },
  hovered: {
    scale: 1.05
  }
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(News, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}; // <img src="/static/img/logoTransparentBlue.png" width="200" height="200" />
// <h1 className="title has-text-left" style={{fontSize: 80, alignSelf: "left"}}>
//   The MindBank
// </h1>
// <h2 className="subtitle is-size-5 has-text-gray has-text-left" style={{alignSelf: "flex-start"}}>
//   Consulting for campus environments.
// </h2>


var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "url(/static/img/consulting.jpg)",
      backgroundColor: "#00396D",
      opacity: "90%",
      height: "35rem",
      padding: "1rem"
    },
    className: "jsx-2587355013" + " " + "hero is-primary is-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2587355013" + " " + "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2587355013" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "column is-half",
    style: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: 100
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/fullLogo.png",
    width: "90%",
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "column is-half",
    style: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: 100
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2587355013" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2587355013" + " " + "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "We are a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "student consulting group"), " at the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    style: {
      color: "#DB504A"
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "University of Pennsylvania"), ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2587355013" + " " + "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, " We work with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "student-led startups"), ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "campus organizations"), ", and ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "established companies"), " focused on the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    style: {
      color: "#DB504A"
    },
    className: "jsx-2587355013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "collegiate environment."), " ")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2587355013",
    css: "p.jsx-2587355013{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raWxsZW5iZXJnZS9taW5kYmFuay13ZWIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUdlLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL2tpbGxlbmJlcmdlL21pbmRiYW5rLXdlYi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgcG9zZWQgZnJvbSBcInJlYWN0LXBvc2VcIjtcbmNvbnN0IEtvbnZhID0gcmVxdWlyZSgna29udmEnKTtcbmltcG9ydCB7IFN0YWdlLCBMYXllciwgUmVjdCwgVGV4dCB9IGZyb20gJ3JlYWN0LWtvbnZhJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBFbWJlZGRlZFBvc3QsIFBhZ2UgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IFNxdWFyZSA9IHBvc2VkLmRpdih7XG4gIGlkbGU6IHsgc2NhbGU6IDEgfSxcbiAgaG92ZXJlZDogeyBzY2FsZTogMS4wNSB9XG59KTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIDxCYW5uZXIgLz5cbiAgICA8SW5mb0JveCAvPlxuICAgIDxMaW5rcyAvPlxuICAgIDxOZXdzIC8+XG4gICAgPEZvb3Rlci8+XG4gIDwvZGl2PlxuKTtcblxuLy8gPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvVHJhbnNwYXJlbnRCbHVlLnBuZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgLz5cbi8vIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1sZWZ0XCIgc3R5bGU9e3tmb250U2l6ZTogODAsIGFsaWduU2VsZjogXCJsZWZ0XCJ9fT5cbi8vICAgVGhlIE1pbmRCYW5rXG4vLyA8L2gxPlxuLy8gPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLXNpemUtNSBoYXMtdGV4dC1ncmF5IGhhcy10ZXh0LWxlZnRcIiBzdHlsZT17e2FsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCJ9fT5cbi8vICAgQ29uc3VsdGluZyBmb3IgY2FtcHVzIGVudmlyb25tZW50cy5cbi8vIDwvaDI+XG5cblxuY29uc3QgQmFubmVyID0gKCkgPT4gKFxuICA8c2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gaXMtcHJpbWFyeSBpcy1zbWFsbFwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgvc3RhdGljL2ltZy9jb25zdWx0aW5nLmpwZylcIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDM5NkRcIiwgb3BhY2l0eTogXCI5MCVcIiwgaGVpZ2h0OiBcIjM1cmVtXCIsIHBhZGRpbmc6IFwiMXJlbVwifX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCIgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjEwMH19PjwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2Z1bGxMb2dvLnBuZ1wiIHdpZHRoPVwiOTAlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCIgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OjEwMH19PjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTNcIj5XZSBhcmUgYSA8YiA+c3R1ZGVudCBjb25zdWx0aW5nIGdyb3VwPC9iPiBhdCB0aGUgPGIgc3R5bGU9e3tjb2xvcjogXCIjREI1MDRBXCJ9fT5Vbml2ZXJzaXR5IG9mIFBlbm5zeWx2YW5pYTwvYj4uIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTNcIj4gV2Ugd29yayB3aXRoIDxiID5zdHVkZW50LWxlZCBzdGFydHVwczwvYj4sIDxiPmNhbXB1cyBvcmdhbml6YXRpb25zPC9iPiwgYW5kIDxiPmVzdGFibGlzaGVkIGNvbXBhbmllczwvYj4gZm9jdXNlZCBvbiB0aGUgPGIgc3R5bGU9e3tjb2xvcjogXCIjREI1MDRBXCJ9fT5jb2xsZWdpYXRlIGVudmlyb25tZW50LjwvYj4gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICBwIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cblxuY29uc3QgSW5mb0JveCA9ICgpID0+IChcbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT17e3BhZGRpbmc6IFwiNXJlbVwifX0+XG4gICAgPGRpdiBjbGFzcz1cImNvbHVtblwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwLCBib3JkZXI6IFwiM3B4IHNvbGlkICNEQjUwNEFcIiwgYm9yZGVyUmFkaXVzOiAxNSwgcGFkZGluZzogMzAsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwifX0+XG4gICAgICA8cCBjbGFzcz1cImlzLXNpemUtMSB0aXRsZVwiIHN0eWxlPXt7Y29sb3I6IFwiI0RCNTA0QVwifX0+V2hvIFdlIEFyZTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiaXMtc2l6ZS01XCIgc3R5bGU9e3tjb2xvcjogXCIjNDM0MzQzXCJ9fT5cbiAgICAgIFRoZSBNaW5kQmFuayBpcyBhIGJyaWdodCwgZGl2ZXJzZSBncm91cCBvZiBQZW5uIHN0dWRlbnRzLiBXZSBhcmUgeW91bmcgd29tZW4gYW5kIG1lbiBzdHVkeWluZ1xuICAgICAgbGliZXJhbCBhcnRzLCBzb2NpYWwgc2NpZW5jZXMsIGJ1c2luZXNzLCBhbmQgZW5naW5lZXJpbmcuIFdlIGNvbWUgZnJvbSBhbGwgcGFydHMgb2YgdGhlIHdvcmxkLiBXZSBoYXZlIGRpZmZlcmVudFxuICAgICAgcG9saXRpY2FsIGFmZmlsaWF0aW9ucywgcmVsaWdpb3VzIGJlbGllZnMsIGFuZCBjdWx0dXJhbCBiYWNrZ3JvdW5kcy4gV2hhdCB3ZSBzaGFyZSBpcyBhIGxvdmUgb2YgcHJvYmxlbS1zb2x2aW5nXG4gICAgICBhbmQgYSBkZXNpcmUgdG8gbGVhcm4gYW5kIGVuZ2FnZS48L3A+XG4gICAgICA8YSBjbGFzcz1cImJ1dHRvbiBoYXMtdGV4dC13aGl0ZSBpcy1yb3VuZGVkXCIgc3R5bGU9e3ttYXJnaW5SaWdodDogMzAsIGJhY2tncm91bmRDb2xvcjogXCIjYjliOWI5XCIsIGJvcmRlcldpZHRoOiAwLCBhbGlnblNlbGY6IFwiZmxleC1lbmRcIn19PlxuICAgICAgICA8Yj5NZWV0IHRoZSB0ZWFtPC9iPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiBzdHlsZT17e3BhZGRpbmc6IFwiM3B4IDRweFwifX0+PC9pPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMCwgYm9yZGVyOiBcIjNweCBzb2xpZCAjREI1MDRBXCIsIGJvcmRlclJhZGl1czogMTUsIHBhZGRpbmc6IDMwLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIn19PlxuICAgICAgPHAgY2xhc3M9XCJpcy1zaXplLTEgdGl0bGVcIiBzdHlsZT17e2NvbG9yOiBcIiNEQjUwNEFcIn19PldoYXQgV2UgRG88L3A+XG4gICAgICA8cCBjbGFzcz1cImlzLXNpemUtNVwiIHN0eWxlPXt7Y29sb3I6IFwiIzQzNDM0M1wifX0+XG4gICAgICBUaGUgTWluZEJhbmsgaGFzIGNvbXBsZXRlZCBtb3JlIHRoYW4gdHdlbnR5IHByb2plY3RzIGZvciBidXNpbmVzc2VzLCBvcmdhbml6YXRpb25zLCBhbmQgaW5kaXZpZHVhbHMuIEluIGEgY29sbGFib3JhdGl2ZVxuICAgICAgYW5kIGl0ZXJhdGl2ZSBwcm9qZWN0IGN5Y2xlLCB3ZSBpZGVudGlmeSBidXNpbmVzcyBuZWVkcyBhbmQgcHJvYmxlbXMgdGhlbiB1c2Ugb3VyIGV4cGVydGlzZSB0byBwcm9wb3NlIG9yaWdpbmFsIGFuZCBpbmZvcm1lZFxuICAgICAgYWR2aWNlLiBXZSBmb2N1cyBvbiBxdWljayB0dXJuLWFyb3VuZCB0aW1lcywgYWN0aW9uYWJsZSBzdHJhdGVnaWVzLCBhbmQgZGF0YS1kcml2ZW4gc29sdXRpb25zLlxuICAgICAgPC9wPlxuICAgICAgPGEgY2xhc3M9XCJidXR0b24gaGFzLXRleHQtd2hpdGUgaXMtcm91bmRlZFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I5YjliOVwiLCBib3JkZXJXaWR0aDogMCwgYWxpZ25TZWxmOiBcImZsZXgtZW5kXCJ9fT5cbiAgICAgICAgPGI+U2VlIHBhc3QgcHJvamVjdHM8L2I+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiIHN0eWxlPXt7cGFkZGluZzogXCIzcHggNHB4XCJ9fT48L2k+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xuXG4gIGNsYXNzIExpbmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaEFib3V0OiBmYWxzZSxcbiAgICAgICAgaENsaWVudDogZmFsc2UsXG4gICAgICAgIGhDb25zdWx0OiBmYWxzZSxcbiAgICAgICAgaENvbnRhY3Q6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvXCIgc3R5bGU9e3twYWRkaW5nOiAnNXJlbScsIGJhY2tncm91bmRDb2xvcjogXCIjZTJlMmUyXCJ9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIiwgYm9yZGVyUmFkaXVzOiAxMCwgbWFyZ2luOiAxMCwgcGFkZGluZzogMzAsIGJveFNoYWRvdzogXCI1cHggNXB4IDFweCBncmV5XCJ9fT5cbiAgICAgICAgICAgICAgPFNxdWFyZVxuICAgICAgICAgICAgICAgIHBvc2U9e3RoaXMuc3RhdGUuaEFib3V0ID8gXCJob3ZlcmVkXCIgOiBcImlkbGVcIn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoQWJvdXQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaEFib3V0OiBmYWxzZSB9KX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXRleHQtY2VudGVyZWRcIiBzdHlsZT17e3BhZGRpbmdUb3A6MjV9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgc3R5bGU9e3tjb2xvcjogXCIjNjY4OGE3XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS00eCBmYS11c2Vyc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiIHN0eWxlPXt7cGFkZGluZzogNX19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTJcIiBzdHlsZT17e2NvbG9yOiBcIiM0MzQzNDNcIn19PkFib3V0IFVzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlIGlzLTRcIiBzdHlsZT17e2NvbG9yOiBcIiM2ODY4NjhcIn19PkxlYXJuIG1vcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhhcy10ZXh0LWdyZXkgaXMtc2l6ZS02XCIgc3R5bGU9e3tjb2xvcjogXCIjNDM0MzQzXCJ9fT4gUmVhZCBhYm91dCB0aGUgaGlzdG9yeSwgbWlzc2lvbiBhbmQgdmlzaW9uIG9mIFRoZSBNaW5kQmFuay48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9TcXVhcmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIG1hcmdpbjogMTAsIGJvcmRlclJhZGl1czogMTAsIHBhZGRpbmc6IDMwLCBib3hTaGFkb3c6IFwiNXB4IDVweCAxcHggZ3JleVwifX0+XG4gICAgICAgICAgICAgIDxTcXVhcmVcbiAgICAgICAgICAgICAgICBwb3NlPXt0aGlzLnN0YXRlLmhDbGllbnQgPyBcImhvdmVyZWRcIiA6IFwiaWRsZVwifVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhDbGllbnQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaENsaWVudDogZmFsc2UgfSl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCIgc3R5bGU9e3twYWRkaW5nVG9wOjI1fX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHN0eWxlPXt7Y29sb3I6IFwiIzY2ODhhN1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtNHggZmEtaGFuZHNoYWtlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTJcIiBzdHlsZT17e2NvbG9yOiBcIiM0MzQzNDNcIn19PkZvciBDbGllbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZSBpcy00XCIgc3R5bGU9e3tjb2xvcjogXCIjNjg2ODY4XCJ9fT5Xb3JrIHdpdGggdXMuPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoYXMtdGV4dC1ncmV5IGlzLXNpemUtNlwiIHN0eWxlPXt7Y29sb3I6IFwiIzQzNDM0M1wifX0+IFdlIHdvcmsgd2l0aCBjb21wYW5pZXMsIGJ1c2luZXNzZXMsIGFuZCBzdGFydC11cHMgd2hpY2ggdGFyZ2V0IHRoZSBjYW1wdXMgZW52aXJvbm1lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TcXVhcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IDEwLCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiAzMCwgYm94U2hhZG93OiBcIjVweCA1cHggMXB4IGdyZXlcIn19PlxuICAgICAgICAgICAgICAgIDxTcXVhcmVcbiAgICAgICAgICAgICAgICAgIHBvc2U9e3RoaXMuc3RhdGUuaENvbnN1bHQgPyBcImhvdmVyZWRcIiA6IFwiaWRsZVwifVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaENvbnN1bHQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoQ29uc3VsdDogZmFsc2UgfSl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCIgc3R5bGU9e3twYWRkaW5nVG9wOjI1fX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHN0eWxlPXt7Y29sb3I6IFwiIzY2ODhhN1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtNHggZmEtdXNlci10aWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtMlwiIHN0eWxlPXt7Y29sb3I6IFwiIzQzNDM0M1wifX0+Rm9yIENvbnN1bHRhbnRzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZSBpcy00XCIgc3R5bGU9e3tjb2xvcjogXCIjNjg2ODY4XCJ9fT5HZXQgaW52b2x2ZWQuIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGFzLXRleHQtZ3JleSBpcy1zaXplLTZcIiBzdHlsZT17e2NvbG9yOiBcIiM0MzQzNDNcIn19PiBXZSByZWNydWl0IGJyaWdodCwgZHJpdmVuLCBhbmQgY3JlYXRpdmUgUGVubiBzdHVkZW50cyB0byBqb2luIG91ciBncm91cC48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1NxdWFyZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuLy8gPGRpdiBjbGFzcz1cInRpbGUgaXMtY2hpbGQgbm90aWZpY2F0aW9uIGhhcy10ZXh0LXdoaXRlIGhhcy10ZXh0LWxlZnRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMDAzOTZkXCIsIGJvcmRlclJhZGl1czogNH19PlxuLy8gICA8cCBjbGFzcz1cInRpdGxlIGlzLXNpemUtMlwiIHN0eWxlPXt7Y29sb3I6IFwiI2U1ZTVlNVwifX0+T3VyIFZhbHVlPC9wPlxuLy8gICA8cCBzdHlsZT17e2NvbG9yOiBcIiNlNWU1ZTVcIn19PiBXZSBkZWxpdmVyIHZhbHVlIHRvIG91ciBjbGllbnRzIGJ5IGxldmVyYWdpbmcgb3VyIHJlYWNoIGFjcm9zcyBQZW5u4oCZcyBzdHVkZW50IGNvbW11bml0aWVzIGFuZCB1bmNvdmVyaW5nIGluc2lnaHRzIG9ubHkgYXZhaWxhYmxlIHRvIGNhbXB1cyBpbnNpZGVycy48L3A+XG4vLyA8L2Rpdj5cbi8vXG4vLyAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIG5vdGlmaWNhdGlvbiBoYXMtdGV4dC13aGl0ZSBoYXMtdGV4dC1yaWdodFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMwMDM5NmRcIiwgYm9yZGVyUmFkaXVzOiA0fX0+XG4vLyAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy1zaXplLTJcIiBzdHlsZT17e2NvbG9yOiBcIiNlNWU1ZTVcIn19PkV4cGVyaWVudGlhbCBMZWFybmluZzwvcD5cbi8vICAgICA8cCBzdHlsZT17e2NvbG9yOiBcIiNlNWU1ZTVcIn19PiBTdHVkZW50cyBhcmUgYmVzdCBtb3RpdmF0ZWQgd2hlbiBlbmdhZ2VkIHdpdGggcmVhbC1saWZlIGNoYWxsZW5nZXMgYW5kIGxvdmUgc2VlaW5nIHRoZVxuLy8gICAgICAgICBpbXBhY3Qgb2YgdGhlaXIgd29yay4gU28gd2h5IG5vdCBpbW1lcnNlIHRoZW0gZGlyZWN0bHkgaW50byBzaXR1YXRpb25zIHdpdGggdGhlIHBvdGVudGlhbFxuLy8gICAgICAgICBmb3IgcmVhbCBpbXBhY3Q/XG4vLyAgICAgICAgIFRoZSBNaW5kQmFuayB3YXMgZm9ybWVkIHRvIGdpdmUgc3R1ZGVudHMgdGhlIG9wcG9ydHVuaXR5IHRvIHByYWN0aWNlIHRlYW13b3JrIGFuZFxuLy8gICAgICAgICBkZXZlbG9wIHRoZWlyIHByb2JsZW0tc29sdmluZyBza2lsbHMuIDwvcD5cbi8vICAgPC9kaXY+XG4vLyA8ZGl2IGNsYXNzPVwiY29sdW1uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IDEwLCBib3JkZXJSYWRpdXM6IDEwfX0+XG4vLyAgIDxTcXVhcmVcbi8vICAgICBwb3NlPXt0aGlzLnN0YXRlLmhDb250YWN0ID8gXCJob3ZlcmVkXCIgOiBcImlkbGVcIn1cbi8vICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoQ29udGFjdDogdHJ1ZSB9KX1cbi8vICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoQ29udGFjdDogZmFsc2UgfSl9PlxuLy8gICAgICAgPGRpdiBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkXCIgc3R5bGU9e3twYWRkaW5nVG9wOjI1fX0+XG4vLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHN0eWxlPXt7Y29sb3I6IFwiI2ZmZlwifX0+XG4vLyAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtNHggZmEtZW52ZWxvcGVcIj48L2k+XG4vLyAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cbi8vICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy1zaXplLTJcIj5Db250YWN0PC9wPlxuLy8gICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+UGxlYXNlIHJlYWNoIG91dCB3aXRoIGFueSBpbnF1aXJpZXMuPC9wPlxuLy8gICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+PC9wPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgIDwvU3F1YXJlPlxuLy8gPC9kaXY+XG5cblxuY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb3N0czogW1wiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Blbm5taW5kYmFuay9waG90b3MvYS4xMTIwNjE2NTE0NzI2NjE2LzE5MzgzOTk1MTYyODE2NDEvP3R5cGU9MyZ0aGVhdGVyXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZW5ubWluZGJhbmsvcGhvdG9zL2EuMTEyMDYxNjUxNDcyNjYxNi8yMDM2MTMwMDYzMTc1MjUyLz90eXBlPTMmdGhlYXRlclwiLFxuICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZW5ubWluZGJhbmsvcGhvdG9zL2EuMTEyMDYxNjUxNDcyNjYxNi8yMDQzMzExNDc1NzkwNDQ0Lz90eXBlPTMmdGhlYXRlclwiXSxcbiAgICAgIGluZGV4OiAxLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImhlcm9cIiBzdHlsZT17e3BhZGRpbmc6IFwiNXJlbVwifX0+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy1zaXplLTFcIiBzdHlsZT17e2NvbG9yOiBcIiNEQjUwNEFcIn19Pk5ld3M8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZSBpcy02XCI+IENvbm5lY3Qgd2l0aCB1cyBvbiBGYWNlQm9vayB0byBmb2xsb3cgb3VyIGxhdGVzdCB1cGRhdGVzIGFuZCBjb250ZW50LiA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGFsaWduaXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjE3MzA3MTk3MDAzNjY0NDdcIj5cbiAgICAgICAgICAgICAgPFBhZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZW5ubWluZGJhbmsvXCIgdGFicz1cInRpbWVsaW5lXCIgd2lkdGg9XCIxMDAwXCIvPlxuICAgICAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICB9XG59XG4gIC8vXG4gIC8vIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XG4gIC8vICAgPEJ1dHRvbiBzdHlsZT17e2NvbG9yOiBcIiNEQjUwNEFcIiwgYm9yZGVyV2lkdGg6IDB9fSBvbkNsaWNrPXsoZSk9PnRoaXMuc2V0U3RhdGUoeyBpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDEgfSl9PlxuICAvLyAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gIC8vICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XG4gIC8vICAgICA8L3NwYW4+XG4gIC8vICAgPC9CdXR0b24+XG4gIC8vIDwvZGl2PlxuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm9cIiBzdHlsZT17e3BhZGRpbmc6ICc0cmVtJywgYmFja2dyb3VuZENvbG9yOiBcIiNlMmUyZTJcIn19PlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTFcIiBzdHlsZT17e2NvbG9yOiBcIiM0MzQzNDNcIn19PkNvbnRhY3QgVXM8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGUgaXMtNlwiPiBXZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gQ29tcGxldGUgdGhpcyBmb3JtIHdpdGggYW55IGdlbmVyYWwgcXVlc3Rpb25zLCBjb25jZXJucywgb3IgZmVlZGJhY2sgeW91IGhhdmUgZm9yIHVzLlxuICAgICAgICBXZSdsbCBiZSBzdXJlIHRvIHJlc3BvbmQgcHJvbXB0bHkuIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9e3t3aWR0aDogXCI4MCVcIiwgcGFkZGluZzogMjB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBoYXMtdGV4dC1sZWZ0XCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGhhcy10ZXh0LWxlZnRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwiZW1haWxcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBoYXMtdGV4dC1sZWZ0XCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwidGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94XCIgc3R5bGU9e3twYWRkaW5nOiAxMH19PlxuICAgICAgICAgICAgICAgICAgQWRkIG1lIHRvIHRoZSBNaW5kQmFuayBMaXN0U2Vydi5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/killenberge/mindbank-web/pages/index.js */",
    __self: this
  }));
};

var InfoBox = function InfoBox() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "columns",
    style: {
      padding: "5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "column",
    style: {
      marginBottom: 0,
      border: "3px solid #DB504A",
      borderRadius: 15,
      padding: 30,
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "is-size-1 title",
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Who We Are"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "is-size-5",
    style: {
      color: "#434343"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "The MindBank is a bright, diverse group of Penn students. We are young women and men studying liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving and a desire to learn and engage."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "button has-text-white is-rounded",
    style: {
      marginRight: 30,
      backgroundColor: "#b9b9b9",
      borderWidth: 0,
      alignSelf: "flex-end"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Meet the team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-angle-double-right",
    style: {
      padding: "3px 4px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "column",
    style: {
      marginBottom: 0,
      border: "3px solid #DB504A",
      borderRadius: 15,
      padding: 30,
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "is-size-1 title",
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "What We Do"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "is-size-5",
    style: {
      color: "#434343"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative and iterative project cycle, we identify business needs and problems then use our expertise to propose original and informed advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "button has-text-white is-rounded",
    style: {
      marginRight: 30,
      backgroundColor: "#b9b9b9",
      borderWidth: 0,
      alignSelf: "flex-end"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "See past projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-angle-double-right",
    style: {
      padding: "3px 4px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))));
};

var Links =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Links, _React$Component);

  function Links(props) {
    var _this;

    _classCallCheck(this, Links);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Links).call(this, props));
    _this.state = {
      hAbout: false,
      hClient: false,
      hConsult: false,
      hContact: false
    };
    return _this;
  }

  _createClass(Links, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "hero",
        style: {
          padding: '5rem',
          backgroundColor: "#e2e2e2"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: 10,
          padding: 30,
          boxShadow: "5px 5px 1px grey"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Square, {
        pose: this.state.hAbout ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hAbout: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hAbout: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-4x fa-users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "content has-text-centered",
        style: {
          padding: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "title is-2",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "subtitle is-4",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Learn more."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, " Read about the history, mission and vision of The MindBank.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          margin: 10,
          borderRadius: 10,
          padding: 30,
          boxShadow: "5px 5px 1px grey"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Square, {
        pose: this.state.hClient ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hClient: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hClient: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-4x fa-handshake",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "content has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "title is-2",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "For Clients"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "subtitle is-4",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Work with us."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, " We work with companies, businesses, and start-ups which target the campus environment.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          margin: 10,
          borderRadius: 10,
          padding: 30,
          boxShadow: "5px 5px 1px grey"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Square, {
        pose: this.state.hConsult ? "hovered" : "idle",
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hConsult: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hConsult: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fas fa-4x fa-user-tie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "content has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "title is-2",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "For Consultants"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "subtitle is-4",
        style: {
          color: "#686868"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Get involved. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, " We recruit bright, driven, and creative Penn students to join our group."))))));
    }
  }]);

  return Links;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // <div class="tile is-child notification has-text-white has-text-left" style={{backgroundColor: "#00396d", borderRadius: 4}}>
//   <p class="title is-size-2" style={{color: "#e5e5e5"}}>Our Value</p>
//   <p style={{color: "#e5e5e5"}}> We deliver value to our clients by leveraging our reach across Penn’s student communities and uncovering insights only available to campus insiders.</p>
// </div>
//
//   <div class="tile is-child notification has-text-white has-text-right" style={{backgroundColor: "#00396d", borderRadius: 4}}>
//     <p class="title is-size-2" style={{color: "#e5e5e5"}}>Experiential Learning</p>
//     <p style={{color: "#e5e5e5"}}> Students are best motivated when engaged with real-life challenges and love seeing the
//         impact of their work. So why not immerse them directly into situations with the potential
//         for real impact?
//         The MindBank was formed to give students the opportunity to practice teamwork and
//         develop their problem-solving skills. </p>
//   </div>
// <div class="column" style={{backgroundColor: "#fff", margin: 10, borderRadius: 10}}>
//   <Square
//     pose={this.state.hContact ? "hovered" : "idle"}
//     onMouseEnter={() => this.setState({ hContact: true })}
//     onMouseLeave={() => this.setState({ hContact: false })}>
//       <div class="has-text-centered" style={{paddingTop:25}}>
//         <span class="icon" style={{color: "#fff"}}>
//           <i class="fas fa-4x fa-envelope"></i>
//         </span>
//       </div>
//       <div class="content has-text-centered">
//         <p class="title is-size-2">Contact</p>
//         <p class="subtitle">Please reach out with any inquiries.</p>
//         <p class="subtitle"></p>
//       </div>
//   </Square>
// </div>


var News =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(News, _React$Component2);

  function News(props) {
    var _this3;

    _classCallCheck(this, News);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));
    _this3.state = {
      posts: ["https://www.facebook.com/pennmindbank/photos/a.1120616514726616/1938399516281641/?type=3&theater", "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2036130063175252/?type=3&theater", "https://www.facebook.com/pennmindbank/photos/a.1120616514726616/2043311475790444/?type=3&theater"],
      index: 1
    };
    return _this3;
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "hero",
        style: {
          padding: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "title is-size-1",
        style: {
          color: "#DB504A"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "subtitle is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, " Connect with us on FaceBook to follow our latest updates and content. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "container",
        style: {
          display: "flex",
          flexDirection: "row",
          alignitems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookProvider"], {
        appId: "1730719700366447",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["Page"], {
        href: "https://www.facebook.com/pennmindbank/",
        tabs: "timeline",
        width: "1000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }))));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); //
// <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
//   <Button style={{color: "#DB504A", borderWidth: 0}} onClick={(e)=>this.setState({ index: this.state.index + 1 })}>
//     <span class="icon is-small">
//       <i class="fas fa-chevron-right"></i>
//     </span>
//   </Button>
// </div>


var Contact =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Contact, _React$Component3);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "hero",
        style: {
          padding: '4rem',
          backgroundColor: "#e2e2e2"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "title is-1",
        style: {
          color: "#434343"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        class: "subtitle is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, " We'd love to hear from you. Complete this form with any general questions, concerns, or feedback you have for us. We'll be sure to respond promptly. "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "container",
        style: {
          width: "80%",
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        class: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        class: "input",
        type: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        class: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        class: "checkbox",
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Add me to the MindBank ListServ."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        class: "button ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Submit")))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
//# sourceMappingURL=index.js.cb523608765b53b118e4.hot-update.js.map