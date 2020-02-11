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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var _components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/StartPlayingDesktop */ "./components/StartPlayingDesktop.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/includes/SectionTitle */ "./components/includes/SectionTitle.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Tabs */ "./components/Tabs.js");
/* harmony import */ var _components_UserBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/UserBox */ "./components/UserBox.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_19__);







var _jsxFileName = "/Users/liukaiming/WebstormProjects/cali/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;













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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://jsonplaceholder.typicode.com/users'));

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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner01.jpeg",
        alt: "",
        className: "jsx-1923627140" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner02.jpg",
        alt: "",
        className: "jsx-1923627140" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner03.jpg",
        alt: "",
        className: "jsx-1923627140" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner04.jpg",
        alt: "",
        className: "jsx-1923627140" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1923627140" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "\u958B\u59CB\u904A\u73A9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(_components_StartPlayingDesktop__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "\u512A\u60E0\u6D3B\u52D5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_14___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings_bonus, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), bonus.map(function (b, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bonus || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("img", {
          src: b.pic,
          alt: "",
          className: "jsx-1923627140" + " " + "img-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.title || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, b.title), __jsx("p", {
          className: "jsx-1923627140",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, b.context), __jsx("div", {
          className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bottom || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.time || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, b.time), __jsx(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, __jsx("a", {
          style: {
            'whiteSpace': 'nowrap'
          },
          className: "jsx-1923627140",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "\u66F4\u591A"))));
      }))), __jsx("div", {
        className: "jsx-1923627140" + " " + 'useEvaluationSec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1923627140" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(_components_includes_SectionTitle__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "\u5361\u5229\u73A9\u5BB6\u5BE6\u6E2C",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1923627140" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1923627140" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.top || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("img", {
        src: "images/userTest.png",
        alt: "",
        style: {
          'width': '272px'
        },
        className: "jsx-1923627140" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.main || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest_title || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "\u5361\u5229\u5A1B\u6A02\u57CE"), __jsx("div", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.starBox || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1923627140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "4.8"), __jsx("span", {
        className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-1923627140" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-1923627140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "\u5171168\u5247\u8A55\u8AD6"))), __jsx("p", {
        className: "jsx-1923627140" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.paragraph || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "\u5361\u5229\u73A9\u5BB6\u5BE6\u969B\u904A\u73A9\u56DE\u994B\uFF0CVIP3\u4EE5\u4E0A\u6703\u54E1\u5373\u53EF\u8A55\u50F9\uFF0C\u8A8D\u8B49\u6A5F\u5236\u4FDD\u8B49\u771F\u5BE6\u6027\uFF0C\u5404\u4F4D\u6703\u54E1\u63D0\u51FA\u5C0D\u5361\u5229\u5A1B\u6A02\u57CE\u7684\u610F\u898B\uFF0C\u5361\u5229\u5A1B\u6A02\u57CE\u66F4\u52A0\u9032\u6B65\uFF0C\u6253\u9020\u51FA\u66F4\u8B93\u5404\u70BA\u559C\u611B\u7684\u7DDA\u4E0A\u535A\u5F08\u5E73\u53F0\u3002"))), __jsx("div", {
        style: {
          'max-height': '290px',
          'overflow': 'scroll'
        },
        className: "jsx-1923627140" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx(_components_UserBox__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), __jsx(_components_UserBox__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), __jsx("button", {
        type: "button",
        style: {
          'background-color': '#6236FF',
          'color': 'white',
          'width': '80%'
        },
        className: "jsx-1923627140" + " " + "btn btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "\u67E5\u770B\u66F4\u591A"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1923627140",
        __self: this
      }, ".useEvaluationSec.jsx-1923627140::after{content:\"\";background:url(images/userEvaluationSecBg.png) no-repeat;background-size:cover;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.useEvaluationSec.jsx-1923627140{margin-top:20px;padding:0 0 25px;position:relative;z-index:0;background:rgba(0,0,0,.65);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwS1ksQUFHc0IsQUFhSyxXQVp5QyxLQWF4QyxpQkFDQyxrQkFDUixVQUNpQixPQWZMLG9CQWdCdEIsRUFmc0Isb0RBQ1QsYUFDUCxNQUNDLE9BQ0UsU0FDRCxRQUNVLGtCQUNQLFdBQ1giLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFNpemVzIGZyb20gJ3JlYWN0LXNpemVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRGVza1RvcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dCdcbmltcG9ydCBTdGFydFBsYXlpbmdEZXNrdG9wIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhcnRQbGF5aW5nRGVza3RvcCdcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL2luY2x1ZGVzL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiXG5pbXBvcnQgVGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJzXCI7XG5pbXBvcnQgVXNlckJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyQm94XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cGF0aG5hbWUsIHF1ZXJ5LCBhc1BhdGgsIHJlcSwgcmVzfSkge1xuICAgIGxldCB1c2VyRGF0YTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJyk7XG4gICAgICB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2cocGF0aG5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEpO1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgICAgbGFzdG5hbWU6ICdEbydcbiAgICAgIH0sXG4gICAgICB1c2VyRGF0YVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczogcHJvcHMudXNlckRhdGEsXG4gICAgICBib251czogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJwaWNcIjogXCJpbWFnZXMvYm9udXMvaW1nLXByb21vdGlvbi0yLnBuZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCLos63npZ7os71cIixcbiAgICAgICAgICBcImNvbnRleHRcIjogXCLmhJ/orJ3lu6PlpKfmnIPlk6HmjIHnuozpgYrnjqnku7vkvaDljZrntrLnq5nvvIzngrrlm57ppYvnhrHmg4XmlK/mjIHvvIzmjqjlh7rkuIDlgIvmnIjkuIDmrKHnmoTmnIPlk6HmtLvli5XmnIPlk6Hml6XnmoTmr4/nrYblrZjmrL7pg73lj6/nlLPoq4vlhLLlgLzlm57ppYvph5HvvIzkvb/nlKjmjIflrprmlLbmrL7luLPmiLblhaXmrL7vvIzlm57ppYvph5Hmm7Tpq5jpgZQxNSXlkaLvvIHpgoTkuI3lv6vpu57pgJrnn6XopqrmnIvlpb3lj4vkuIDotbflhbHopYTnm5voiIkhISFcIixcbiAgICAgICAgICBcInRpbWVcIjogXCIyMDIwLjIuMTAuTW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicGljXCI6IFwiaW1hZ2VzL2JvbnVzL2ltZy1wcm9tb3Rpb24tMy5wbmdcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwi6LOA6IGW6KqV5rS+5aSn542OIOi0j+i/lOawtOi/juWFg+aXplwiLFxuICAgICAgICAgIFwiY29udGV4dFwiOiBcIuaEn+isneW7o+Wkp+acg+WToeaMgee6jOmBiueOqeS7u+S9oOWNmue2suerme+8jOeCuuWbnumli+eGseaDheaUr+aMge+8jOaOqOWHuuS4gOWAi+aciOS4gOasoeeahOacg+WToea0u+WLleacg+WToeaXpeeahOavj+ethuWtmOasvumDveWPr+eUs+iri+WEsuWAvOWbnumli+mHke+8jOS9v+eUqOaMh+WumuaUtuasvuW4s+aItuWFpeasvu+8jOWbnumli+mHkeabtOmrmOmBlDE1JeWRou+8gemChOS4jeW/q+m7numAmuefpeimquaci+WlveWPi+S4gOi1t+WFseilhOebm+iIiSEhIVwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjIwMjAuMi4xMC5Nb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwaWNcIjogXCJpbWFnZXMvYm9udXMvaW1nLXByb21vdGlvbi00LnBuZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCLljaHliKnns7vntbHkuIDlvovov5TmsLQxJVwiLFxuICAgICAgICAgIFwiY29udGV4dFwiOiBcIuaEn+isneW7o+Wkp+acg+WToeaMgee6jOmBiueOqeS7u+S9oOWNmue2suerme+8jOeCuuWbnumli+eGseaDheaUr+aMge+8jOaOqOWHuuS4gOWAi+aciOS4gOasoeeahOacg+WToea0u+WLleacg+WToeaXpeeahOavj+ethuWtmOasvumDveWPr+eUs+iri+WEsuWAvOWbnumli+mHke+8jOS9v+eUqOaMh+WumuaUtuasvuW4s+aItuWFpeasvu+8jOWbnumli+mHkeabtOmrmOmBlDE1JeWRou+8gemChOS4jeW/q+m7numAmuefpeimquaci+WlveWPi+S4gOi1t+WFseilhOebm+iIiSEhIVwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjIwMjAuMi4xMC5Nb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwaWNcIjogXCJpbWFnZXMvYm9udXMvaW1nLXByb21vdGlvbi01LnBuZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCLos4DogZboqpUg5rS+5aSn542OXCIsXG4gICAgICAgICAgXCJjb250ZXh0XCI6IFwi5oSf6Kyd5buj5aSn5pyD5ZOh5oyB57qM6YGK546p5Lu75L2g5Y2a57ay56uZ77yM54K65Zue6aWL54ax5oOF5pSv5oyB77yM5o6o5Ye65LiA5YCL5pyI5LiA5qyh55qE5pyD5ZOh5rS75YuV5pyD5ZOh5pel55qE5q+P562G5a2Y5qy+6YO95Y+v55Sz6KuL5YSy5YC85Zue6aWL6YeR77yM5L2/55So5oyH5a6a5pS25qy+5biz5oi25YWl5qy+77yM5Zue6aWL6YeR5pu06auY6YGUMTUl5ZGi77yB6YKE5LiN5b+r6bue6YCa55+l6Kaq5pyL5aW95Y+L5LiA6LW35YWx6KWE55ub6IiJISEhXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMjAyMC4yLjEwLk1vblwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBhcnJvd3M6IHRydWUsXG4gICAgICBmYWRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDMwMDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ3NfYm9udXMgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgfTtcbiAgICBjb25zdCB7Ym9udXN9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxEZXNrVG9wTGF5b3V0PlxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Jhbm5lci9iYW5uZXIwMS5qcGVnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9iYW5uZXIvYmFubmVyMDIuanBnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9iYW5uZXIvYmFubmVyMDMuanBnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9iYW5uZXIvYmFubmVyMDQuanBnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgc3ViamVjdD0n6ZaL5aeL6YGK546pJy8+XG5cbiAgICAgICAgICAgIDxTdGFydFBsYXlpbmdEZXNrdG9wLz5cblxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PSflhKrmg6DmtLvli5UnLz5cblxuICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3NfYm9udXN9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYm9udXMubWFwKChiLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtjc3MuYm9udXN9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Yi5waWN9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRpdGxlfT57Yi50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2IuY29udGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYm90dG9tfT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy50aW1lfT57Yi50aW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7J3doaXRlU3BhY2UnOiAnbm93cmFwJ319PuabtOWkmjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TbGlkZXI+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXNlRXZhbHVhdGlvblNlYyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlIHN1YmplY3Q9J+WNoeWIqeeOqeWutuWvpua4rCcvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnVzZXJUZXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50b3B9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3VzZXJUZXN0LnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIgc3R5bGU9e3snd2lkdGgnOiAnMjcycHgnfX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnVzZXJUZXN0X3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg5Y2h5Yip5aib5qiC5Z+OXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc3RhckJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjQuODwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uZm9udCBpY29uX3N0YXItc29saWQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+5YWxMTY45YmH6KmV6KuWPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3MucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgICAgICAgICDljaHliKnnjqnlrrblr6bpmpvpgYrnjqnlm57ppYvvvIxWSVAz5Lul5LiK5pyD5ZOh5Y2z5Y+v6KmV5YO577yM6KqN6K2J5qmf5Yi25L+d6K2J55yf5a+m5oCn77yM5ZCE5L2N5pyD5ZOh5o+Q5Ye65bCN5Y2h5Yip5aib5qiC5Z+O55qE5oSP6KaL77yM5Y2h5Yip5aib5qiC5Z+O5pu05Yqg6YCy5q2l77yM5omT6YCg5Ye65pu06K6T5ZCE54K65Zac5oSb55qE57ea5LiK5Y2a5byI5bmz5Y+w44CCXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3snbWF4LWhlaWdodCc6ICcyOTBweCcsICdvdmVyZmxvdyc6ICdzY3JvbGwnfX0+XG4gICAgICAgICAgICAgICAgICA8VXNlckJveC8+XG4gICAgICAgICAgICAgICAgICA8VXNlckJveC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNjIzNkZGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6JzgwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+5p+l55yL5pu05aSaXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgYFxuICAgICAgICAgIC51c2VFdmFsdWF0aW9uU2VjOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL3VzZXJFdmFsdWF0aW9uU2VjQmcucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTsgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZUV2YWx1YXRpb25TZWMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDI1cHg7ICBcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgICAgICAgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0Rlc2tUb3BMYXlvdXQ+XG4gICAgICA8L0ZyYWdtZW50PlxuXG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFNpemVzVG9Qcm9wcyA9ICh7d2lkdGh9KSA9PiAoe1xuICBpc01vYmlsZTogd2lkdGggPCA3NjgsXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTaXplcyhtYXBTaXplc1RvUHJvcHMpKEluZGV4KSJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/pages/index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    isMobile: width < 768
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_9___default()(mapSizesToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.eecc3f9972c0264418b6.hot-update.js.map