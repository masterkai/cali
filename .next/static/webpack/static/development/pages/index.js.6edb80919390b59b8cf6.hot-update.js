webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var pathname, query, asPath, req, res, userData, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pathname = _ref.pathname, query = _ref.query, asPath = _ref.asPath, req = _ref.req, res = _ref.res;
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('https://jsonplaceholder.typicode.com/users'));

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

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props)); // console.log(props);

    _this.state = {
      users: props.userData
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner01.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner02.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner03.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner04.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Hello Cali"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.props.isMobile ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/about");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u95DC\u65BC\u5361\u5229"), __jsx("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/online_baccarat");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Go to online Baccarat"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    isMobile: width < 768
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_8___default()(mapSizesToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.6edb80919390b59b8cf6.hot-update.js.map