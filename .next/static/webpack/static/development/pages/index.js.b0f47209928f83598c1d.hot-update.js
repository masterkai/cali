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
/* harmony import */ var _components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/StartPlayingDesktop */ "./components/StartPlayingDesktop.js");
/* harmony import */ var _components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/UserEvaluationSec */ "./components/UserEvaluationSec.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);







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
      users: props.userData,
      bonus: [{
        "pic": "images/bonus/img-promotion-2.png",
        "title": "賭神賽",
        "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
        "time": "2020.2.10.Mon"
      }, {
        "pic": "images/bonus/img-promotion-3.png",
        "title": "賀聖誕派大獎 贏返水迎元旦",
        "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
        "time": "2020.2.10.Mon"
      }, {
        "pic": "images/bonus/img-promotion-4.png",
        "title": "卡利系統一律返水1%",
        "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
        "time": "2020.2.10.Mon"
      }, {
        "pic": "images/bonus/img-promotion-5.png",
        "title": "賀聖誕 派大獎",
        "context": "感謝廣大會員持續遊玩任你博網站，為回饋熱情支持，推出一個月一次的會員活動會員日的每筆存款都可申請儲值回饋金，使用指定收款帳戶入款，回饋金更高達15%呢！還不快點通知親朋好友一起共襄盛舉!!!",
        "time": "2020.2.10.Mon"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "render",
    value: function render() {
      var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: true,
        fade: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var settings_bonus = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      var bonus = this.state.bonus;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner01.jpeg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner02.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner03.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner04.jpg",
        alt: "",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        subject: "\u958B\u59CB\u904A\u73A9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), __jsx(_components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        subject: "\u512A\u60E0\u6D3B\u52D5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings_bonus, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), bonus.map(function (b, i) {
        return __jsx("div", {
          key: i,
          className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default.a.bonus,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("img", {
          src: b.pic,
          alt: "",
          className: "img-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), __jsx("div", {
          className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default.a.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, b.title), __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, b.context), __jsx("div", {
          className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default.a.bottom,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, __jsx("p", {
          className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default.a.time,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, b.time), __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, __jsx("a", {
          style: {
            'whiteSpace': 'nowrap'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "\u66F4\u591A"))));
      }))), __jsx(_components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx(_components_UserEvaluationSec__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })));
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
//# sourceMappingURL=index.js.b0f47209928f83598c1d.hot-update.js.map