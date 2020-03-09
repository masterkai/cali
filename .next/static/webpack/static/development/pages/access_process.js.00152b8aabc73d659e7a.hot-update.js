webpackHotUpdate("static/development/pages/access_process.js",{

/***/ "./pages/access_process/index.js":
/*!***************************************!*\
  !*** ./pages/access_process/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layouts/deskTopLayout */ "./components/layouts/deskTopLayout.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sizes */ "./node_modules/react-sizes/dist/react-sizes.min.js");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_OutlineBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/OutlineBtn */ "./components/OutlineBtn.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layouts/MobileLayoutLevel2 */ "./components/layouts/MobileLayoutLevel2.js");
/* harmony import */ var _components_includes_StaticBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/includes/StaticBanner */ "./components/includes/StaticBanner.js");
/* harmony import */ var _components_SwitchTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SwitchTabs */ "./components/SwitchTabs.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var About = function About(_ref) {
  var isMobile = _ref.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([true, false]),
      switchTab = _useState[0],
      setSwitchTab = _useState[1];

  var desc = switchTab[0] ? '卡利存取款簡易有效率，存款5分鐘完成、取款30分鐘內到帳！' : '若需取款只需聯繫客服提供資料即可辦理。';
  var banner = {
    title: '存取流程',
    desc: desc,
    pic: 'images/background/accessProcess.png'
  };

  var ActivateSwitchTab = function ActivateSwitchTab(index) {
    var reset = switchTab.map(function () {
      return false;
    });
    reset[index] = true;
    setSwitchTab(reset);
  };

  var _class = {
    "true": "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tab, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active),
    "false": "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tab)
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layouts_deskTopLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    style: {
      backgroundColor: 'rgba(0,0,0,.65)'
    }
  }, __jsx(_components_includes_StaticBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: banner.title,
    desc: banner.desc,
    bannerIMG: banner.pic
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessTabs
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessTabs__container
  }, __jsx("div", {
    onClick: function onClick() {
      return ActivateSwitchTab(0);
    },
    className: _class[switchTab[0]]
  }, __jsx("span", {
    style: {
      fontSize: '1.25rem'
    },
    className: "iconfont icon_turnIN1"
  }), " \u5B58\u6B3E\u6B65\u9A5F"), __jsx("div", {
    onClick: function onClick() {
      return ActivateSwitchTab(1);
    },
    className: _class[switchTab[1]]
  }, __jsx("span", {
    style: {
      fontSize: '1.25rem'
    },
    className: "iconfont icon_turnOUT1"
  }), " \u63D0\u6B3E\u898F\u5B9A"))), switchTab[0] && __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex__column)
  }, __jsx("div", {
    style: {
      padding: '5px 40px 20px'
    }
  }, __jsx("div", {
    style: {
      padding: '20px 40px',
      border: '1px solid rgba(255,255,255, 0.5)',
      color: 'white',
      lineHeight: '2',
      textAlign: 'center'
    }
  }, "\u5361\u5229\u5A1B\u6A02\u57CE\u63D0\u4F9B\u7DDA\u4E0A\u5132\u503C\u53CA\u8D85\u5546\u5132\u503C\uFF0C", __jsx("br", null), "\u82E5\u60A8\u5DF2\u7D93\u8A3B\u518A \u4E26\u6210\u70BA\u672C\u7DB2\u7AD9\u6703\u54E1\uFF0C\u4E26\u7D81\u5B9A\u9280\u884C\u5E33\u6236\uFF0C", __jsx("br", null), "\u5C31\u53EF\u4F9D\u7167\u6B64\u6B65\u9A5F\u9032\u884C\u5B58\u6B3E\u3002\u6B64\u70BA\u7DDA\u4E0A\u5132\u503C\u7684\u5B58\u6B3E\u6B65\u9A5F\u3002")), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessBox)
  }, __jsx("img", {
    style: {
      maxWidth: 456
    },
    src: "/images/wallet_deposit.png",
    alt: "",
    className: "img-responsive"
  }), __jsx("ol", null, __jsx("li", null, "\u81F3\u300C\u6703\u54E1\u5B58\u6B3E\u300D\u4ECB\u9762\u3002"), __jsx("li", null, "\u9078\u64C7\u300C\u4FE1\u7528\u5361\u300D\u6216\u300C\u9280\u884C\u300D\u3002(\u4FE1\u7528\u5361\u9700\u65368%\u624B\u7E8C\u8CBB\u3001\u9280\u884C\u8F49\u5165\u865B\u64EC\u5E33\u865F)"), __jsx("li", null, "\u8F38\u5165\u91D1\u984D\u3002"), __jsx("li", null, "\u82E5\u70BA\u4EE5\u512A\u60E0\u65B9\u6848\u5132\u503C\uFF0C\u8ACB\u9078\u64C7\u5C0D\u61C9\u7684\u512A\u60E0\u540D\u7A31\u3002"), __jsx("li", null, "\u9EDE\u64CA\u63D0\u4EA4\u9001\u51FA\u8CC7\u6599\u3002")))), switchTab[1] && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox
  }, __jsx("div", {
    style: {
      marginBottom: 30
    },
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u51FA\u6B3E\u689D\u4EF6"), __jsx("div", null, "\u51FA\u6B3E\u6B21\u6578"), __jsx("div", null, "\u51FA\u6B3E\u6536\u53D6\uFF05\u6578")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u7528\u7B2C\u4E09\u65B9\u91D1\u6D41\u5B58\u6B3E"), __jsx("div", null, " \u4E00\u5468\u53EF\u7533\u8ACB3\u6B21\u53D6\u6B3E\uFF0C\u514D\u624B\u7E8C\u8CBB"), __jsx("div", null, "\u7B2C\u56DB\u6B21\u53D6\u6B3E\uFF0C\u6536\u53D63%\u624B\u7E8C\u8CBB")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u7528\u6307\u5B9A\u6536\u6B3E\u5E33\u6236\u5B58\u6B3E(VIP\u5B58\u6B3E\u5340\uFF09"), __jsx("div", null, "\u4E00\u5929\u53EF\u7533\u8ACB1\u6B21\u53D6\u6B3E\uFF0C\u514D\u624B\u7E8C\u8CBB"), __jsx("div", null, "\u7B2C\u4E8C\u6B21\u53D6\u6B3E\uFF0C\u6536\u53D61%\u624B\u7E8C\u8CBB"))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawNoticeBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, "\u53D6\u6B3E\u6CE8\u610F\u4E8B\u9805"), __jsx("ul", null, __jsx("li", null, "\u9280\u884C\u5E33\u6236\u6301\u6709\u4EBA\u59D3\u540D\u5FC5\u9808\u8207\u958B\u6236\u7684\u6703\u54E1\u59D3\u540D\u4E00\u81F4\uFF0C\u5426\u5247\u7121\u6CD5\u53D7\u7406\u3002?"), __jsx("li", null, "\u6240\u6709\u53D6\u6B3E\u5747\u4E0D\u9650\u6B21\u6578\u3001\u4E0D\u9650\u91D1\u984D\u4E14\u4E0D\u6536\u53D6\u4EFB\u4F55\u624B\u7E8C\u8CBB\u3002?\u6CE8\uFF1A\u70BA\u907F\u514D\u6D17\u9ED1\u9322\u4EE5\u53CA\u4E0D\u5FC5\u8981\u7684\u8CC7\u6E90\u6D6A\u8CBB\uFF0C\u53D6\u6B3E\u6642\u6703\u6AA2\u67E5\u8CEC\u6236\u5167\u5F9E\u4E0A\u4E00\u6B21\u53D6\u6B3E\u5230\u8A72\u6B21\u53D6\u6B3E\u4E4B\u9593\u9032\u884C\u7684\u6295\u6CE8\uFF0C\u671F\u9593\u5167\u6709\u6548\u6295\u6CE8\u984D(\u6D41\u6C34)\u9700\u9054\u5230\u5145\u503C\u7E3D\u984D100%\u76F8\u540C\u91D1\u984D\uFF0C\u82E5\u672A\u9054\u5230\u6703\u6536\u53D6\u5132\u503C\u7E3D\u984D\u768410%\u4F5C\u70BA\u624B\u7E8C\u8CBB\u3002?*\u82E5\u662F\u4EE5\u512A\u60E0\u65B9\u6848\u5132\u503C\uFF0C\u5247\u6D41\u6C34\u53E6\u8A08\uFF0C\u4EE5\u6D3B\u52D5\u516C\u544A\u70BA\u6E96\u3002"))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox,
    style: {
      margin: '30px auto'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u7533\u8ACBVIP\u5B58\u6B3E\u5E33\u6236\u689D\u4EF6")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u75285\u6B21\u7B2C\u4E09\u65B9\u91D1\u6D41\u5B58\u6B3E\uFF0C\u53EF\u5411\u5BA2\u670D\u7533\u8ACB\u6307\u5B9A\u6536\u6B3E\u5E33\u6236")))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)), isMobile && __jsx(_components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "\u95DC\u65BC\u5361\u5229",
    path: true
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileBox_nobg,
    style: {
      height: 'auto',
      paddingBottom: 80,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0
    }
  }, __jsx(_components_includes_StaticBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: banner.title,
    desc: banner.desc,
    bannerIMG: banner.pic
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessTabs
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessTabs__container
  }, __jsx("div", {
    onClick: function onClick() {
      return ActivateSwitchTab(0);
    },
    className: _class[switchTab[0]]
  }, __jsx("span", {
    style: {
      fontSize: '1.25rem'
    },
    className: "iconfont icon_turnIN1"
  }), " \u5B58\u6B3E\u6B65\u9A5F"), __jsx("div", {
    onClick: function onClick() {
      return ActivateSwitchTab(1);
    },
    className: _class[switchTab[1]]
  }, __jsx("span", {
    style: {
      fontSize: '1.25rem'
    },
    className: "iconfont icon_turnOUT1"
  }), " \u63D0\u6B3E\u898F\u5B9A"))), __jsx("div", {
    style: {
      padding: 20
    }
  }, switchTab[0] && __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex__column)
  }, __jsx("div", {
    style: {
      padding: '5px 40px 20px'
    }
  }, __jsx("div", {
    style: {
      padding: '20px 40px',
      border: '1px solid rgba(255,255,255, 0.5)',
      color: 'white',
      lineHeight: '2',
      textAlign: 'center'
    }
  }, "\u5361\u5229\u5A1B\u6A02\u57CE\u63D0\u4F9B\u7DDA\u4E0A\u5132\u503C\u53CA\u8D85\u5546\u5132\u503C\uFF0C", __jsx("br", null), "\u82E5\u60A8\u5DF2\u7D93\u8A3B\u518A \u4E26\u6210\u70BA\u672C\u7DB2\u7AD9\u6703\u54E1\uFF0C\u4E26\u7D81\u5B9A\u9280\u884C\u5E33\u6236\uFF0C", __jsx("br", null), "\u5C31\u53EF\u4F9D\u7167\u6B64\u6B65\u9A5F\u9032\u884C\u5B58\u6B3E\u3002\u6B64\u70BA\u7DDA\u4E0A\u5132\u503C\u7684\u5B58\u6B3E\u6B65\u9A5F\u3002")), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessFlex, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.accessProcessBox)
  }, __jsx("img", {
    style: {
      maxWidth: 456,
      padding: '0 20px'
    },
    src: "/images/wallet_deposit.png",
    alt: "",
    className: "img-responsive"
  }), __jsx("ol", null, __jsx("li", null, "\u81F3\u300C\u6703\u54E1\u5B58\u6B3E\u300D\u4ECB\u9762\u3002"), __jsx("li", null, "\u9078\u64C7\u300C\u4FE1\u7528\u5361\u300D\u6216\u300C\u9280\u884C\u300D\u3002(\u4FE1\u7528\u5361\u9700\u65368%\u624B\u7E8C\u8CBB\u3001\u9280\u884C\u8F49\u5165\u865B\u64EC\u5E33\u865F)"), __jsx("li", null, "\u8F38\u5165\u91D1\u984D\u3002"), __jsx("li", null, "\u82E5\u70BA\u4EE5\u512A\u60E0\u65B9\u6848\u5132\u503C\uFF0C\u8ACB\u9078\u64C7\u5C0D\u61C9\u7684\u512A\u60E0\u540D\u7A31\u3002"), __jsx("li", null, "\u9EDE\u64CA\u63D0\u4EA4\u9001\u51FA\u8CC7\u6599\u3002")))), switchTab[1] && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox
  }, __jsx("div", {
    style: {
      marginBottom: 30
    },
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u51FA\u6B3E\u689D\u4EF6"), __jsx("div", null, "\u51FA\u6B3E\u6B21\u6578"), __jsx("div", null, "\u51FA\u6B3E\u6536\u53D6\uFF05\u6578")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u7528\u7B2C\u4E09\u65B9\u91D1\u6D41\u5B58\u6B3E"), __jsx("div", null, " \u4E00\u5468\u53EF\u7533\u8ACB3\u6B21\u53D6\u6B3E\uFF0C\u514D\u624B\u7E8C\u8CBB"), __jsx("div", null, "\u7B2C\u56DB\u6B21\u53D6\u6B3E\uFF0C\u6536\u53D63%\u624B\u7E8C\u8CBB")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u7528\u6307\u5B9A\u6536\u6B3E\u5E33\u6236\u5B58\u6B3E(VIP\u5B58\u6B3E\u5340\uFF09"), __jsx("div", null, "\u4E00\u5929\u53EF\u7533\u8ACB1\u6B21\u53D6\u6B3E\uFF0C\u514D\u624B\u7E8C\u8CBB"), __jsx("div", null, "\u7B2C\u4E8C\u6B21\u53D6\u6B3E\uFF0C\u6536\u53D61%\u624B\u7E8C\u8CBB"))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawNoticeBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, "\u53D6\u6B3E\u6CE8\u610F\u4E8B\u9805"), __jsx("ul", null, __jsx("li", null, "\u9280\u884C\u5E33\u6236\u6301\u6709\u4EBA\u59D3\u540D\u5FC5\u9808\u8207\u958B\u6236\u7684\u6703\u54E1\u59D3\u540D\u4E00\u81F4\uFF0C\u5426\u5247\u7121\u6CD5\u53D7\u7406\u3002?"), __jsx("li", null, "\u6240\u6709\u53D6\u6B3E\u5747\u4E0D\u9650\u6B21\u6578\u3001\u4E0D\u9650\u91D1\u984D\u4E14\u4E0D\u6536\u53D6\u4EFB\u4F55\u624B\u7E8C\u8CBB\u3002?\u6CE8\uFF1A\u70BA\u907F\u514D\u6D17\u9ED1\u9322\u4EE5\u53CA\u4E0D\u5FC5\u8981\u7684\u8CC7\u6E90\u6D6A\u8CBB\uFF0C\u53D6\u6B3E\u6642\u6703\u6AA2\u67E5\u8CEC\u6236\u5167\u5F9E\u4E0A\u4E00\u6B21\u53D6\u6B3E\u5230\u8A72\u6B21\u53D6\u6B3E\u4E4B\u9593\u9032\u884C\u7684\u6295\u6CE8\uFF0C\u671F\u9593\u5167\u6709\u6548\u6295\u6CE8\u984D(\u6D41\u6C34)\u9700\u9054\u5230\u5145\u503C\u7E3D\u984D100%\u76F8\u540C\u91D1\u984D\uFF0C\u82E5\u672A\u9054\u5230\u6703\u6536\u53D6\u5132\u503C\u7E3D\u984D\u768410%\u4F5C\u70BA\u624B\u7E8C\u8CBB\u3002?*\u82E5\u662F\u4EE5\u512A\u60E0\u65B9\u6848\u5132\u503C\uFF0C\u5247\u6D41\u6C34\u53E6\u8A08\uFF0C\u4EE5\u6D3B\u52D5\u516C\u544A\u70BA\u6E96\u3002"))), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox,
    style: {
      margin: '30px auto'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u7533\u8ACBVIP\u5B58\u6B3E\u5E33\u6236\u689D\u4EF6")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a.withdrawBox__row
  }, __jsx("div", null, "\u4F7F\u75285\u6B21\u7B2C\u4E09\u65B9\u91D1\u6D41\u5B58\u6B3E\uFF0C", __jsx("br", null), "\u53EF\u5411\u5BA2\u670D\u7533\u8ACB\u6307\u5B9A\u6536\u6B3E\u5E33\u6236"))))))));
};

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    isTablet: width >= 480 && width < 1024,
    isDesktop: width >= 1024,
    under768: width <= 768,
    isMobile: width <= 480
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_2___default()(mapSizesToProps)(About));

/***/ })

})
//# sourceMappingURL=access_process.js.00152b8aabc73d659e7a.hot-update.js.map