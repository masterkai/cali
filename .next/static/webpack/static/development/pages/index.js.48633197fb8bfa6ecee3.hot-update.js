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
        className: "jsx-2893314786" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner02.jpg",
        alt: "",
        className: "jsx-2893314786" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner03.jpg",
        alt: "",
        className: "jsx-2893314786" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner04.jpg",
        alt: "",
        className: "jsx-2893314786" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2893314786" + " " + "container",
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
          className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bonus || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("img", {
          src: b.pic,
          alt: "",
          className: "jsx-2893314786" + " " + "img-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.title || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, b.title), __jsx("p", {
          className: "jsx-2893314786",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, b.context), __jsx("div", {
          className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bottom || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.time || ""),
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
          className: "jsx-2893314786",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "\u66F4\u591A"))));
      }))), __jsx("div", {
        className: "jsx-2893314786" + " " + 'useEvaluationSec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2893314786" + " " + "container",
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
        className: "jsx-2893314786" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2893314786" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.top || ""),
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
        className: "jsx-2893314786" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.main || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest_title || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "\u5361\u5229\u5A1B\u6A02\u57CE"), __jsx("div", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.starBox || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2893314786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "4.8"), __jsx("span", {
        className: "jsx-2893314786" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-2893314786" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-2893314786" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-2893314786" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-2893314786" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-2893314786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "\u5171168\u5247\u8A55\u8AD6"))), __jsx("p", {
        className: "jsx-2893314786" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.paragraph || ""),
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
        className: "jsx-2893314786" + " " + "col",
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
          'color': 'white'
        },
        className: "jsx-2893314786" + " " + "btn btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "\u67E5\u770B\u66F4\u591A"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2893314786",
        __self: this
      }, ".useEvaluationSec.jsx-2893314786::after{content:\"\";background:url(images/userEvaluationSecBg.png) no-repeat 50%;background-size:cover;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.useEvaluationSec.jsx-2893314786{margin-top:20px;padding:0 0 25px;position:relative;z-index:0;background:rgba(0,0,0,.65);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvS1ksQUFHc0IsQUFhSyxXQVo2QyxLQWFwRCxpQkFFUyxrQkFDUixVQUNpQixXQWhCTCxnQkFpQnRCLE1BaEJzQixvREFDVCxhQUNQLE1BQ0MsT0FDRSxTQUNELFFBQ1Usa0JBQ1AsV0FDWCIsImZpbGUiOiIvVXNlcnMvbGl1a2FpbWluZy9XZWJzdG9ybVByb2plY3RzL2NhbGkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoU2l6ZXMgZnJvbSAncmVhY3Qtc2l6ZXMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBEZXNrVG9wTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrVG9wTGF5b3V0J1xuaW1wb3J0IFN0YXJ0UGxheWluZ0Rlc2t0b3AgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFBsYXlpbmdEZXNrdG9wJ1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5jbHVkZXMvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvbWFpbi5zY3NzXCJcbmltcG9ydCBUYWJzIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYnNcIjtcbmltcG9ydCBVc2VyQm94IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJCb3hcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtwYXRobmFtZSwgcXVlcnksIGFzUGF0aCwgcmVxLCByZXN9KSB7XG4gICAgbGV0IHVzZXJEYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKTtcbiAgICAgIHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwYXRobmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgbmFtZTogJ0pvaG4nLFxuICAgICAgICBsYXN0bmFtZTogJ0RvJ1xuICAgICAgfSxcbiAgICAgIHVzZXJEYXRhXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJzOiBwcm9wcy51c2VyRGF0YSxcbiAgICAgIGJvbnVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInBpY1wiOiBcImltYWdlcy9ib251cy9pbWctcHJvbW90aW9uLTIucG5nXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIuizreelnuizvVwiLFxuICAgICAgICAgIFwiY29udGV4dFwiOiBcIuaEn+isneW7o+Wkp+acg+WToeaMgee6jOmBiueOqeS7u+S9oOWNmue2suerme+8jOeCuuWbnumli+eGseaDheaUr+aMge+8jOaOqOWHuuS4gOWAi+aciOS4gOasoeeahOacg+WToea0u+WLleacg+WToeaXpeeahOavj+ethuWtmOasvumDveWPr+eUs+iri+WEsuWAvOWbnumli+mHke+8jOS9v+eUqOaMh+WumuaUtuasvuW4s+aItuWFpeasvu+8jOWbnumli+mHkeabtOmrmOmBlDE1JeWRou+8gemChOS4jeW/q+m7numAmuefpeimquaci+WlveWPi+S4gOi1t+WFseilhOebm+iIiSEhIVwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjIwMjAuMi4xMC5Nb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwaWNcIjogXCJpbWFnZXMvYm9udXMvaW1nLXByb21vdGlvbi0zLnBuZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCLos4DogZboqpXmtL7lpKfnjY4g6LSP6L+U5rC06L+O5YWD5pemXCIsXG4gICAgICAgICAgXCJjb250ZXh0XCI6IFwi5oSf6Kyd5buj5aSn5pyD5ZOh5oyB57qM6YGK546p5Lu75L2g5Y2a57ay56uZ77yM54K65Zue6aWL54ax5oOF5pSv5oyB77yM5o6o5Ye65LiA5YCL5pyI5LiA5qyh55qE5pyD5ZOh5rS75YuV5pyD5ZOh5pel55qE5q+P562G5a2Y5qy+6YO95Y+v55Sz6KuL5YSy5YC85Zue6aWL6YeR77yM5L2/55So5oyH5a6a5pS25qy+5biz5oi25YWl5qy+77yM5Zue6aWL6YeR5pu06auY6YGUMTUl5ZGi77yB6YKE5LiN5b+r6bue6YCa55+l6Kaq5pyL5aW95Y+L5LiA6LW35YWx6KWE55ub6IiJISEhXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMjAyMC4yLjEwLk1vblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInBpY1wiOiBcImltYWdlcy9ib251cy9pbWctcHJvbW90aW9uLTQucG5nXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIuWNoeWIqeezu+e1seS4gOW+i+i/lOawtDElXCIsXG4gICAgICAgICAgXCJjb250ZXh0XCI6IFwi5oSf6Kyd5buj5aSn5pyD5ZOh5oyB57qM6YGK546p5Lu75L2g5Y2a57ay56uZ77yM54K65Zue6aWL54ax5oOF5pSv5oyB77yM5o6o5Ye65LiA5YCL5pyI5LiA5qyh55qE5pyD5ZOh5rS75YuV5pyD5ZOh5pel55qE5q+P562G5a2Y5qy+6YO95Y+v55Sz6KuL5YSy5YC85Zue6aWL6YeR77yM5L2/55So5oyH5a6a5pS25qy+5biz5oi25YWl5qy+77yM5Zue6aWL6YeR5pu06auY6YGUMTUl5ZGi77yB6YKE5LiN5b+r6bue6YCa55+l6Kaq5pyL5aW95Y+L5LiA6LW35YWx6KWE55ub6IiJISEhXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMjAyMC4yLjEwLk1vblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInBpY1wiOiBcImltYWdlcy9ib251cy9pbWctcHJvbW90aW9uLTUucG5nXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIuizgOiBluiqlSDmtL7lpKfnjY5cIixcbiAgICAgICAgICBcImNvbnRleHRcIjogXCLmhJ/orJ3lu6PlpKfmnIPlk6HmjIHnuozpgYrnjqnku7vkvaDljZrntrLnq5nvvIzngrrlm57ppYvnhrHmg4XmlK/mjIHvvIzmjqjlh7rkuIDlgIvmnIjkuIDmrKHnmoTmnIPlk6HmtLvli5XmnIPlk6Hml6XnmoTmr4/nrYblrZjmrL7pg73lj6/nlLPoq4vlhLLlgLzlm57ppYvph5HvvIzkvb/nlKjmjIflrprmlLbmrL7luLPmiLblhaXmrL7vvIzlm57ppYvph5Hmm7Tpq5jpgZQxNSXlkaLvvIHpgoTkuI3lv6vpu57pgJrnn6XopqrmnIvlpb3lj4vkuIDotbflhbHopYTnm5voiIkhISFcIixcbiAgICAgICAgICBcInRpbWVcIjogXCIyMDIwLjIuMTAuTW9uXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGZhZGU6IHRydWUsXG4gICAgICBzcGVlZDogMzAwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nc19ib251cyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICB9O1xuICAgIGNvbnN0IHtib251c30gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPERlc2tUb3BMYXlvdXQ+XG4gICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYmFubmVyL2Jhbm5lcjAxLmpwZWdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Jhbm5lci9iYW5uZXIwMi5qcGdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Jhbm5lci9iYW5uZXIwMy5qcGdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Jhbm5lci9iYW5uZXIwNC5qcGdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cbiAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PSfplovlp4vpgYrnjqknLz5cblxuICAgICAgICAgICAgPFN0YXJ0UGxheWluZ0Rlc2t0b3AvPlxuXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHN1YmplY3Q9J+WEquaDoOa0u+WLlScvPlxuXG4gICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc19ib251c30+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib251cy5tYXAoKGIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2Nzcy5ib251c30+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiLnBpY30gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudGl0bGV9PntiLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57Yi5jb250ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5ib3R0b219PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y3NzLnRpbWV9PntiLnRpbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3snd2hpdGVTcGFjZSc6ICdub3dyYXAnfX0+5pu05aSaPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1NsaWRlcj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VFdmFsdWF0aW9uU2VjJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgc3ViamVjdD0n5Y2h5Yip546p5a625a+m5risJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudXNlclRlc3R9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRvcH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdXNlclRlc3QucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBzdHlsZT17eyd3aWR0aCc6ICcyNzJweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudXNlclRlc3RfdGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICDljaHliKnlqJvmqILln45cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zdGFyQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NC44PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fc3Rhci1zb2xpZCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fc3Rhci1zb2xpZCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fc3Rhci1zb2xpZCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fc3Rhci1zb2xpZCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25mb250IGljb25fc3Rhci1zb2xpZCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7lhbExNjjliYfoqZXoq5Y8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICAgICAgICAgIOWNoeWIqeeOqeWutuWvpumam+mBiueOqeWbnumli++8jFZJUDPku6XkuIrmnIPlk6HljbPlj6/oqZXlg7nvvIzoqo3orYnmqZ/liLbkv53orYnnnJ/lr6bmgKfvvIzlkITkvY3mnIPlk6Hmj5Dlh7rlsI3ljaHliKnlqJvmqILln47nmoTmhI/opovvvIzljaHliKnlqJvmqILln47mm7TliqDpgLLmraXvvIzmiZPpgKDlh7rmm7TorpPlkITngrrllpzmhJvnmoTnt5rkuIrljZrlvIjlubPlj7DjgIJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eydtYXgtaGVpZ2h0JzogJzI5MHB4JywgJ292ZXJmbG93JzogJ3Njcm9sbCd9fT5cbiAgICAgICAgICAgICAgICAgIDxVc2VyQm94Lz5cbiAgICAgICAgICAgICAgICAgIDxVc2VyQm94Lz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2tcIiBzdHlsZT17eydiYWNrZ3JvdW5kLWNvbG9yJzonIzYyMzZGRicsJ2NvbG9yJzond2hpdGUnfX0+5p+l55yL5pu05aSaPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAudXNlRXZhbHVhdGlvblNlYzo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlcy91c2VyRXZhbHVhdGlvblNlY0JnLnBuZykgbm8tcmVwZWF0IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMTAwJSk7XG4gICAgICAgICAgb3BhY2l0eTogMC4zMjtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xOyAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlRXZhbHVhdGlvblNlYyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMCAwIDI1cHg7XG4gIFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICAgICAgICB9YFxuICAgICAgICAgIH1cblxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvRGVza1RvcExheW91dD5cbiAgICAgIDwvRnJhZ21lbnQ+XG5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU2l6ZXNUb1Byb3BzID0gKHt3aWR0aH0pID0+ICh7XG4gIGlzTW9iaWxlOiB3aWR0aCA8IDc2OCxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFNpemVzKG1hcFNpemVzVG9Qcm9wcykoSW5kZXgpIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/pages/index.js */")));
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
//# sourceMappingURL=index.js.48633197fb8bfa6ecee3.hot-update.js.map