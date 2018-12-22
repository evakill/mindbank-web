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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-konva */ "./node_modules/react-konva/lib/ReactKonva.js");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
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






var Square = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
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
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contact, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero is-primary is-medium",
    style: {
      backgroundImage: "url(/static/img/consulting.jpg)",
      backgroundColor: "#00396D",
      opacity: "90%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-half has-text-center",
    style: {
      display: "flex",
      alignItems: "flex-end",
      paddingBottom: 50,
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/logoTransparentBlue.png",
    width: "200",
    height: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title has-text-left",
    style: {
      fontSize: 80,
      alignSelf: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "The MindBank"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subtitle is-size-4 has-text-gray has-text-left",
    style: {
      alignSelf: "flex-start"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Consulting for campus environments."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "column is-half",
    style: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "We are a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "student consulting group"), " at the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "University of Pennsylvania"), ". "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, " We work with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "student-led startups"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "campus organizations"), ", and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "established companies"), " focused on the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "collegiate environment."), " ")))))));
};

var InfoBox = function InfoBox() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "columns",
    style: {
      padding: "5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "column",
    style: {
      marginBottom: 0,
      border: "3px solid #DB504A",
      borderRadius: 15,
      padding: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "is-size-1 title",
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Who We Are"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "is-size-5 has-text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "The MindBank is a bright, diverse group of Penn students. We are young women and men studying liberal arts, social sciences, business, and engineering. We come from all parts of the world. We have different political affiliations, religious beliefs, and cultural backgrounds. What we share is a love of problem-solving and a desire to learn and engage."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    class: "button has-text-white",
    style: {
      backgroundColor: "#DB504A",
      borderWidth: 0,
      alignSelf: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, " Meet the team ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "column",
    style: {
      marginBottom: 0,
      border: "3px solid #DB504A",
      borderRadius: 15,
      padding: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "is-size-1 title",
    style: {
      color: "#DB504A"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "What We Do"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "is-size-5 has-text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "The MindBank has completed more than twenty projects for businesses, organizations, and individuals. In a collaborative and iterative project cycle, we identify business needs and problems then use our expertise to propose original and informed advice. We focus on quick turn-around times, actionable strategies, and data-driven solutions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    class: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, " Check out our past projects")));
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "hero",
        style: {
          backgroundColor: "#00396d",
          padding: '5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: 10,
          padding: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
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
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "fas fa-4x fa-users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "content has-text-centered",
        style: {
          padding: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "title is-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "subtitle is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Learn more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, " Read about the history, mission and vision of The MindBank.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          margin: 10,
          borderRadius: 10,
          padding: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
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
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "fas fa-4x fa-handshake",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "content has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "title is-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "For Clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "subtitle is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Collaborate with us."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, " We work with companies, businesses, and start-ups which target the campus environment.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "column",
        style: {
          backgroundColor: "#fff",
          margin: 10,
          borderRadius: 10,
          padding: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
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
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "has-text-centered",
        style: {
          paddingTop: 25
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "icon",
        style: {
          color: "#6688a7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "fas fa-4x fa-user-tie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "content has-text-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "title is-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "For Consultants"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "subtitle is-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Get involved. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "has-text-grey is-size-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, " We recruit bright, driven, and creative Penn students to join our group."))))));
    }
  }]);

  return Links;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // <div class="tile is-child notification has-text-white has-text-left" style={{backgroundColor: "#00396d", borderRadius: 4}}>
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "hero",
        style: {
          padding: "5rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "title is-size-1",
        style: {
          color: "#DB504A"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "subtitle is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, " Connect with us on FaceBook to follow our latest updates and content. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container",
        style: {
          display: "flex",
          flexDirection: "row",
          alignitems: "center",
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_6__["FacebookProvider"], {
        appId: "1730719700366447",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_6__["Page"], {
        href: "https://www.facebook.com/pennmindbank/",
        tabs: "timeline",
        width: "1000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }))));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "hero",
        style: {
          padding: '4rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "title is-1",
        style: {
          color: "#DB504A"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "subtitle is-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, " We'd love to hear from you. Complete this form with any general questions, concerns, or feedback you have for us. We'll be sure to respond promptly. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "container",
        style: {
          width: "80%",
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        class: "input",
        type: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        class: "input",
        type: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "label has-text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        class: "textarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        class: "checkbox",
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Add me to the MindBank ListServ."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        class: "button ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Submit")))));
    }
  }]);

  return Contact;
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
//# sourceMappingURL=index.js.d200b1f27dfff6733a91.hot-update.js.map