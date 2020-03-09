webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/includes/Header.js":
/*!***************************************!*\
  !*** ./components/includes/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Register */ "./components/Register.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      console.log(_this.state);

      _this.props.setUser(false);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, __jsx("div", {
        className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default.a.headerBG || "")
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flexContainer || "")
      }, __jsx(_Register__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("div", {
        className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default.a.flex || "")
      }, __jsx("input", {
        style: {
          marginRight: '5px'
        },
        type: "text",
        placeholder: "\u6703\u54E1\u8CEC\u865F",
        className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default.a.input || "")
      }), __jsx("input", {
        style: {
          marginRight: '5px'
        },
        type: "text",
        placeholder: "\u767B\u5165\u5BC6\u78BC",
        className: "jsx-2250508871" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default.a.input || "")
      })), __jsx("button", {
        onSubmit: this.handleSubmit,
        style: {
          marginRight: '5px'
        },
        type: "button",
        className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm"
      }, "\u767B\u5165"), __jsx("button", {
        type: "button",
        className: "jsx-2250508871" + " " + "btn btn-outline-dark btn-sm"
      }, "\u5FD8\u8A18\u5BC6\u78BC"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2250508871"
      }, "@media (max-width:1024px){.flexContainer.jsx-2250508871{-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;}}.headerBG.jsx-2250508871{background-image:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );}.flexContainer.jsx-2250508871{height:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding:5px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;max-width:1100px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFcsQUFJbUQsQUFTbkMsQUFHVyxZQUNDLHNFQUhmLElBSW9CLHlEQWJsQiw0Q0FjWSxZQUNhLGlHQUNSLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlc2tUb3BMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZXNrVG9wTGF5b3V0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vUmVnaXN0ZXJcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9O1xuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnByb3BzLnNldFVzZXIoZmFsc2UpXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmhlYWRlckJHfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y3NzLmZsZXhDb250YWluZXJ9PlxuICAgICAgICAgICAgPFJlZ2lzdGVyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZmxleH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuacg+WToeizrOiZn1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueZu+WFpeWvhueivFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOeZu+WFpVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBidG4tc21cIj5cbiAgICAgICAgICAgICAg5b+Y6KiY5a+G56K8XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyQkcge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgICAgICNmZGY4YTIgMyUsXG4gICAgICAgICAgICAgICAgI2Y0ZDk3YSA0NyUsXG4gICAgICAgICAgICAgICAgI2VlYzQ2MiAxMDAlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxleENvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbTogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layouts/deskTopLayout.js":
/*!*********************************************!*\
  !*** ./components/layouts/deskTopLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-smooth-marquee */ "./node_modules/react-smooth-marquee/dist/index.js");
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _includes_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../includes/Header */ "./components/includes/Header.js");
/* harmony import */ var _includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/StatefulHeader */ "./components/includes/StatefulHeader.js");
/* harmony import */ var _includes_MainNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/MainNav */ "./components/includes/MainNav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ScrollButton */ "./components/ScrollButton.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var DeskTopLayout = function DeskTopLayout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      user = _useState[0],
      setUser = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.displayDesktop || "")
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/images/favicon-32x32.png",
    className: "jsx-1623311844"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
    rel: "stylesheet",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/iconfont.css",
    className: "jsx-1623311844"
  }), __jsx("title", {
    className: "jsx-1623311844"
  }, "\u5361\u5229\u5A1B\u6A02\u57CE")), user ? __jsx(_includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setUser: setUser
  }) : __jsx(_includes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser
  }), __jsx(_includes_MainNav__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee || "")
  }, __jsx("span", {
    className: "jsx-1623311844" + " " + "iconfont icon_volume-up-solid"
  }), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_flexContainer || "")
  }, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default.a, {
    velocity: 0.05
  }, __jsx("p", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_text || "")
  }, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx("div", {
    className: "jsx-1623311844" + " " + "mainBG"
  }, props.children, __jsx(_ScrollButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scrollStepInPx: "100",
    delayInMs: "16.66"
  }), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1623311844"
  }, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWEsQUFHd0IsQUFhTyxXQVoyQixPQWFuQyxVQU1ULDRCQWxCbUIsb0JBQ0Usb0NBa0J4QixnQkFqQmUsYUFDUCxNQUNDLE9BQ0UsU0FDRCxRQUNVLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrVG9wTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFycXVlZSBmcm9tICdyZWFjdC1zbW9vdGgtbWFycXVlZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2luY2x1ZGVzL0hlYWRlcic7XG5pbXBvcnQgU3RhdGVmdWxIZWFkZXIgZnJvbSAnLi4vaW5jbHVkZXMvU3RhdGVmdWxIZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcblxuY29uc3QgRGVza1RvcExheW91dCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRpc3BsYXlEZXNrdG9wfT5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIHsvKiA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPTEyODAsIGluaXRpYWwtc2NhbGU9MC41LCBtYXhpbXVtLXNjYWxlPTMuMCwgdXNlci1zY2FsYWJsZT0xXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZ1wiLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zK1RDOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PWNoaW5lc2UtdHJhZGl0aW9uYWxcIlxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgICBjaGFyc2V0PVwiVVRGLThcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGVzLmNzc1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9pY29uZm9udC5jc3NcIi8+XG4gICAgICAgICAgICA8dGl0bGU+5Y2h5Yip5aib5qiC5Z+OPC90aXRsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAge3VzZXI/PFN0YXRlZnVsSGVhZGVyIHNldFVzZXI9e3NldFVzZXJ9Lz46PEhlYWRlciBzZXRVc2VyPXtzZXRVc2VyfS8+fVxuXG5cbiAgICAgICAgICA8TWFpbk5hdi8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1hcnF1ZWV9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl92b2x1bWUtdXAtc29saWRcIi8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFycXVlZV9mbGV4Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPE1hcnF1ZWUgdmVsb2NpdHk9ezAuMDV9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y3NzLm1hcnF1ZWVfdGV4dH0+XG4gICAgICAgICAgICAgICAgICDmuqvppqjmj5DnpLrvvJrlsIrmlaznmoTjgJDljaHliKnlqJvmqILln47jgJHmnIPlk6Hmgqjlpb3vvIFcbiAgICAgICAgICAgICAgICAgIDIwMjAtMDEtMDjomZ/lpKnlpKnov5TmsLTmnIDpq5gxLjgl77yM5bey57aT6L+U5Zue5Yiw5oKo55qE6YGK5oiy6LOs6Jmf5Lit77yM6KuL5oKo55m75YWl5p+l5pS277yB6L2J6LOs5Yiw5YWs5Y+45oyH5a6a6YqA6KGM5Y2h77yM5o+Q5Lqk5YWl5qy+5L+h5oGv5Y+v5b6X5Yiw5qyh5qyh5a2Y5qyh5qyh6YCBMS4zJeWFpeasvuWEquaDoO+8jOisneisneOAglxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9NYXJxdWVlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQkdcIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxTY3JvbGxCdXR0b24gc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxNi42NlwiLz5cbiAgICAgICAgICAgIDxEcmF3ZXIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgIC5tYWluQkc6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWFnZXMvc3Rhcnlfc2t5LnBuZykgcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG4gICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zMjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbkJHIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICAjMDAwMDAwIDAlLFxuICAgICAgICAgICAgICAjNmU0MWM0IDUwJSxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG47XG5cbmV4cG9ydCBkZWZhdWx0IERlc2tUb3BMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DeskTopLayout);

/***/ })

})
//# sourceMappingURL=index.js.6b3df3286d1d29d1d416.hot-update.js.map