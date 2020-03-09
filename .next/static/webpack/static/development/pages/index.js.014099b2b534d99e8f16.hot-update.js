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

      _this.props.setUser(true);
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
      }, "@media (max-width:1024px){.flexContainer.jsx-2250508871{-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;}}.headerBG.jsx-2250508871{background-image:linear-gradient( 180deg, #fdf8a2 3%, #f4d97a 47%, #eec462 100% );}.flexContainer.jsx-2250508871{height:45px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding:5px;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;max-width:1100px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFcsQUFJbUQsQUFTbkMsQUFHVyxZQUNDLHNFQUhmLElBSW9CLHlEQWJsQiw0Q0FjWSxZQUNhLGlHQUNSLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2luY2x1ZGVzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERlc2tUb3BMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZXNrVG9wTGF5b3V0JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vUmVnaXN0ZXJcIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9O1xuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnByb3BzLnNldFVzZXIodHJ1ZSlcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaGVhZGVyQkd9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjc3MuZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8UmVnaXN0ZXIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mbGV4fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pyD5ZOh6LOs6JmfXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi55m75YWl5a+G56K8XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgYnRuLXNtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg55m75YWlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrIGJ0bi1zbVwiPlxuICAgICAgICAgICAgICDlv5joqJjlr4bnorxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgLmZsZXhDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJCRyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICAgICAgI2ZkZjhhMiAzJSxcbiAgICAgICAgICAgICAgICAjZjRkOTdhIDQ3JSxcbiAgICAgICAgICAgICAgICAjZWVjNDYyIDEwMCVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGV4Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.014099b2b534d99e8f16.hot-update.js.map