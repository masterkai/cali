webpackHotUpdate("static/development/pages/promotions.js",{

/***/ "./components/includes/Header.js":
/*!***************************************!*\
  !*** ./components/includes/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/components/includes/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var pathname, query, asPath, req, res, userData, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pathname = _ref.pathname, query = _ref.query, asPath = _ref.asPath, req = _ref.req, res = _ref.res;
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://jsonplaceholder.typicode.com/users'));

            case 4:
              response = _context.sent;
              userData = response.data;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log('error');

            case 11:
              return _context.abrupt("return", {
                user: {
                  name: 'John',
                  lastname: 'Do'
                },
                userData: userData
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props)); // console.log(props);

    _this.state = {
      users: props.userData
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_9___default.a.superAwesome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "row justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("button", {
        style: {
          'margin-right': '5px'
        },
        type: "button",
        className: "btn btn-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u7ACB\u5373\u8A3B\u518A\xA0", __jsx("i", {
        className: "fal fa-user-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), __jsx("form", {
        className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_9___default.a.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("input", {
        style: {
          'margin-right': '5px'
        },
        type: "text",
        className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_9___default.a.input,
        placeholder: "\u6703\u54E1\u8CEC\u865F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("input", {
        style: {
          'margin-right': '5px'
        },
        type: "text",
        className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_9___default.a.input,
        placeholder: "\u767B\u5165\u5BC6\u78BC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), __jsx("button", {
        style: {
          'margin-right': '5px'
        },
        type: "button",
        className: "btn btn-outline-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u767B\u5165"), __jsx("button", {
        type: "button",
        className: "btn btn-outline-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u5FD8\u8A18\u5BC6\u78BC")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=promotions.js.83c8064a26f4477b7ea7.hot-update.js.map