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
        className: "jsx-606371843" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner02.jpg",
        alt: "",
        className: "jsx-606371843" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner03.jpg",
        alt: "",
        className: "jsx-606371843" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx("img", {
        src: "images/banner/banner04.jpg",
        alt: "",
        className: "jsx-606371843" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-606371843" + " " + "container",
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
          className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bonus || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("img", {
          src: b.pic,
          alt: "",
          className: "jsx-606371843" + " " + "img-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.title || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, b.title), __jsx("p", {
          className: "jsx-606371843",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, b.context), __jsx("div", {
          className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.bottom || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.time || ""),
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
          className: "jsx-606371843",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "\u66F4\u591A"))));
      }))), __jsx("div", {
        className: "jsx-606371843" + " " + 'useEvaluationSec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-606371843" + " " + "container",
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
        className: "jsx-606371843" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-606371843" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.top || ""),
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
        className: "jsx-606371843" + " " + "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.main || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.userTest_title || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "\u5361\u5229\u5A1B\u6A02\u57CE"), __jsx("div", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.starBox || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-606371843",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "4.8"), __jsx("span", {
        className: "jsx-606371843" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-606371843" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-606371843" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-606371843" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-606371843" + " " + 'iconfont icon_star-solid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), __jsx("p", {
        className: "jsx-606371843",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "\u5171168\u5247\u8A55\u8AD6"))), __jsx("p", {
        className: "jsx-606371843" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_16___default.a.paragraph || ""),
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
        className: "jsx-606371843" + " " + "col",
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
        className: "jsx-606371843" + " " + "btn btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "\u67E5\u770B\u66F4\u591A"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "606371843",
        __self: this
      }, ".useEvaluationSec.jsx-606371843::after{content:\"\";background:url(images/userEvaluationSecBg.png) no-repeat;background-size:cover;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.useEvaluationSec.jsx-606371843{position:relative;z-index:0;background:linear-gradient(to right,#000000 0%,#6e41c4 50%,rgba(0,0,0,1) 100%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvS1ksQUFHc0IsQUFhTyxXQVp1QyxPQWEvQyxVQUN3RSx3Q0FiNUQsc0JBQ0EsaUJBYXRCLG1DQVphLGFBQ1AsTUFDQyxPQUNFLFNBQ0QsUUFDVSxrQkFDUCxXQUNYIiwiZmlsZSI6Ii9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaXplcyBmcm9tICdyZWFjdC1zaXplcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IERlc2tUb3BMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2Rlc2tUb3BMYXlvdXQnXG5pbXBvcnQgU3RhcnRQbGF5aW5nRGVza3RvcCBmcm9tICcuLi9jb21wb25lbnRzL1N0YXJ0UGxheWluZ0Rlc2t0b3AnXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmNsdWRlcy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIlxuaW1wb3J0IFRhYnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFic1wiO1xuaW1wb3J0IFVzZXJCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckJveFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3BhdGhuYW1lLCBxdWVyeSwgYXNQYXRoLCByZXEsIHJlc30pIHtcbiAgICBsZXQgdXNlckRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpO1xuICAgICAgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhuYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgLy8gY29uc29sZS5sb2cocmVxKTtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjoge1xuICAgICAgICBuYW1lOiAnSm9obicsXG4gICAgICAgIGxhc3RuYW1lOiAnRG8nXG4gICAgICB9LFxuICAgICAgdXNlckRhdGFcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcnM6IHByb3BzLnVzZXJEYXRhLFxuICAgICAgYm9udXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicGljXCI6IFwiaW1hZ2VzL2JvbnVzL2ltZy1wcm9tb3Rpb24tMi5wbmdcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwi6LOt56We6LO9XCIsXG4gICAgICAgICAgXCJjb250ZXh0XCI6IFwi5oSf6Kyd5buj5aSn5pyD5ZOh5oyB57qM6YGK546p5Lu75L2g5Y2a57ay56uZ77yM54K65Zue6aWL54ax5oOF5pSv5oyB77yM5o6o5Ye65LiA5YCL5pyI5LiA5qyh55qE5pyD5ZOh5rS75YuV5pyD5ZOh5pel55qE5q+P562G5a2Y5qy+6YO95Y+v55Sz6KuL5YSy5YC85Zue6aWL6YeR77yM5L2/55So5oyH5a6a5pS25qy+5biz5oi25YWl5qy+77yM5Zue6aWL6YeR5pu06auY6YGUMTUl5ZGi77yB6YKE5LiN5b+r6bue6YCa55+l6Kaq5pyL5aW95Y+L5LiA6LW35YWx6KWE55ub6IiJISEhXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMjAyMC4yLjEwLk1vblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInBpY1wiOiBcImltYWdlcy9ib251cy9pbWctcHJvbW90aW9uLTMucG5nXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIuizgOiBluiqlea0vuWkp+eNjiDotI/ov5TmsLTov47lhYPml6ZcIixcbiAgICAgICAgICBcImNvbnRleHRcIjogXCLmhJ/orJ3lu6PlpKfmnIPlk6HmjIHnuozpgYrnjqnku7vkvaDljZrntrLnq5nvvIzngrrlm57ppYvnhrHmg4XmlK/mjIHvvIzmjqjlh7rkuIDlgIvmnIjkuIDmrKHnmoTmnIPlk6HmtLvli5XmnIPlk6Hml6XnmoTmr4/nrYblrZjmrL7pg73lj6/nlLPoq4vlhLLlgLzlm57ppYvph5HvvIzkvb/nlKjmjIflrprmlLbmrL7luLPmiLblhaXmrL7vvIzlm57ppYvph5Hmm7Tpq5jpgZQxNSXlkaLvvIHpgoTkuI3lv6vpu57pgJrnn6XopqrmnIvlpb3lj4vkuIDotbflhbHopYTnm5voiIkhISFcIixcbiAgICAgICAgICBcInRpbWVcIjogXCIyMDIwLjIuMTAuTW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicGljXCI6IFwiaW1hZ2VzL2JvbnVzL2ltZy1wcm9tb3Rpb24tNC5wbmdcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwi5Y2h5Yip57O757Wx5LiA5b6L6L+U5rC0MSVcIixcbiAgICAgICAgICBcImNvbnRleHRcIjogXCLmhJ/orJ3lu6PlpKfmnIPlk6HmjIHnuozpgYrnjqnku7vkvaDljZrntrLnq5nvvIzngrrlm57ppYvnhrHmg4XmlK/mjIHvvIzmjqjlh7rkuIDlgIvmnIjkuIDmrKHnmoTmnIPlk6HmtLvli5XmnIPlk6Hml6XnmoTmr4/nrYblrZjmrL7pg73lj6/nlLPoq4vlhLLlgLzlm57ppYvph5HvvIzkvb/nlKjmjIflrprmlLbmrL7luLPmiLblhaXmrL7vvIzlm57ppYvph5Hmm7Tpq5jpgZQxNSXlkaLvvIHpgoTkuI3lv6vpu57pgJrnn6XopqrmnIvlpb3lj4vkuIDotbflhbHopYTnm5voiIkhISFcIixcbiAgICAgICAgICBcInRpbWVcIjogXCIyMDIwLjIuMTAuTW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicGljXCI6IFwiaW1hZ2VzL2JvbnVzL2ltZy1wcm9tb3Rpb24tNS5wbmdcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwi6LOA6IGW6KqVIOa0vuWkp+eNjlwiLFxuICAgICAgICAgIFwiY29udGV4dFwiOiBcIuaEn+isneW7o+Wkp+acg+WToeaMgee6jOmBiueOqeS7u+S9oOWNmue2suerme+8jOeCuuWbnumli+eGseaDheaUr+aMge+8jOaOqOWHuuS4gOWAi+aciOS4gOasoeeahOacg+WToea0u+WLleacg+WToeaXpeeahOavj+ethuWtmOasvumDveWPr+eUs+iri+WEsuWAvOWbnumli+mHke+8jOS9v+eUqOaMh+WumuaUtuasvuW4s+aItuWFpeasvu+8jOWbnumli+mHkeabtOmrmOmBlDE1JeWRou+8gemChOS4jeW/q+m7numAmuefpeimquaci+WlveWPi+S4gOi1t+WFseilhOebm+iIiSEhIVwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjIwMjAuMi4xMC5Nb25cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAzMDAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdzX2JvbnVzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgIH07XG4gICAgY29uc3Qge2JvbnVzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8RGVza1RvcExheW91dD5cbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9iYW5uZXIvYmFubmVyMDEuanBlZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYmFubmVyL2Jhbm5lcjAyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYmFubmVyL2Jhbm5lcjAzLmpwZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYmFubmVyL2Jhbm5lcjA0LmpwZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHN1YmplY3Q9J+mWi+Wni+mBiueOqScvPlxuXG4gICAgICAgICAgICA8U3RhcnRQbGF5aW5nRGVza3RvcC8+XG5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgc3ViamVjdD0n5YSq5oOg5rS75YuVJy8+XG5cbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzX2JvbnVzfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvbnVzLm1hcCgoYiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17Y3NzLmJvbnVzfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2IucGljfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+e2IudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntiLmNvbnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJvdHRvbX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjc3MudGltZX0+e2IudGltZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyd3aGl0ZVNwYWNlJzogJ25vd3JhcCd9fT7mm7TlpJo8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VzZUV2YWx1YXRpb25TZWMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBzdWJqZWN0PSfljaHliKnnjqnlrrblr6bmuKwnLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy51c2VyVGVzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy91c2VyVGVzdC5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIHN0eWxlPXt7J3dpZHRoJzogJzI3MnB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy51c2VyVGVzdF90aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOWNoeWIqeWom+aoguWfjlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnN0YXJCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD40Ljg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9zdGFyLXNvbGlkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9zdGFyLXNvbGlkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9zdGFyLXNvbGlkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9zdGFyLXNvbGlkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbl9zdGFyLXNvbGlkJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuWFsTE2OOWJh+ipleirljwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y3NzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgICAgICAgICAg5Y2h5Yip546p5a625a+m6Zqb6YGK546p5Zue6aWL77yMVklQM+S7peS4iuacg+WToeWNs+WPr+ipleWDue+8jOiqjeitieapn+WItuS/neitieecn+WvpuaAp++8jOWQhOS9jeacg+WToeaPkOWHuuWwjeWNoeWIqeWom+aoguWfjueahOaEj+imi++8jOWNoeWIqeWom+aoguWfjuabtOWKoOmAsuatpe+8jOaJk+mAoOWHuuabtOiuk+WQhOeCuuWWnOaEm+eahOe3muS4iuWNmuW8iOW5s+WPsOOAglxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7J21heC1oZWlnaHQnOiAnMjkwcHgnLCAnb3ZlcmZsb3cnOiAnc2Nyb2xsJ319PlxuICAgICAgICAgICAgICAgICAgPFVzZXJCb3gvPlxuICAgICAgICAgICAgICAgICAgPFVzZXJCb3gvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9ja1wiIHN0eWxlPXt7J2JhY2tncm91bmQtY29sb3InOicjNjIzNkZGJywnY29sb3InOid3aGl0ZSd9fT7mn6XnnIvmm7TlpJo8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgYFxuICAgICAgICAgIC51c2VFdmFsdWF0aW9uU2VjOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL3VzZXJFdmFsdWF0aW9uU2VjQmcucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTsgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZUV2YWx1YXRpb25TZWMge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMCAwJSwgIzZlNDFjNCA1MCUsIHJnYmEoMCwwLDAsMSkgMTAwJSk7XG4gICAgICAgICAgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0Rlc2tUb3BMYXlvdXQ+XG4gICAgICA8L0ZyYWdtZW50PlxuXG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFNpemVzVG9Qcm9wcyA9ICh7d2lkdGh9KSA9PiAoe1xuICBpc01vYmlsZTogd2lkdGggPCA3NjgsXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTaXplcyhtYXBTaXplc1RvUHJvcHMpKEluZGV4KSJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/pages/index.js */")));
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
//# sourceMappingURL=index.js.57c4766f9655822bad73.hot-update.js.map