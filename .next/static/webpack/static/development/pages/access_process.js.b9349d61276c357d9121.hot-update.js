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
  }, "\u5B58\u6B3E\u6B65\u9A5F"), __jsx("div", {
    onClick: function onClick() {
      return ActivateSwitchTab(1);
    },
    className: _class[switchTab[1]]
  }, "\u63D0\u6B3E\u898F\u5B9A"))), __jsx("div", null, __jsx("div", {
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
  }, "\u5361\u5229\u5A1B\u6A02\u57CE\u63D0\u4F9B\u7DDA\u4E0A\u5132\u503C\u53CA\u8D85\u5546\u5132\u503C\uFF0C", __jsx("br", null), "\u82E5\u60A8\u5DF2\u7D93\u8A3B\u518A \u4E26\u6210\u70BA\u672C\u7DB2\u7AD9\u6703\u54E1\uFF0C\u4E26\u7D81\u5B9A\u9280\u884C\u5E33\u6236\uFF0C", __jsx("br", null), "\u5C31\u53EF\u4F9D\u7167\u6B64\u6B65\u9A5F\u9032\u884C\u5B58\u6B3E\u3002\u6B64\u70BA\u7DDA\u4E0A\u5132\u503C\u7684\u5B58\u6B3E\u6B65\u9A5F\u3002")), __jsx("div", null, __jsx("img", {
    src: "/images/",
    alt: "",
    className: "img-responsive"
  }), __jsx("div", null))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)), isMobile && __jsx(_components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    style: {
      padding: 20
    }
  }, __jsx("div", {
    style: {
      color: '#FFCF4C',
      marginBottom: 10
    }
  }, "\u4E9E\u6D32\u6700\u9802\u7D1A\u7684\u7DDA\u4E0A\u535A\u5F69\u5A1B\u6A02\u5E73\u53F0"), __jsx("div", {
    style: {
      color: 'white',
      textAlign: 'justify',
      fontSize: 12
    }
  }, "\u5361\u5229\u96C6\u5718\uFF08Calibet\uFF09\uFF0C\u4EE5\u7814\u767C\u512A\u8CEA\u7DDA\u4E0A\u535A\u5955\u5E73\u81FA\u70BA\u5B97\u65E8\u3002\u96A8\u8457\u8FD1\u5E74\u4F86\u7DB2\u8DEF\u535A\u5F69\u7684\u98A8\u6F6E\u800C\u8D77\uFF0C\u5728\u9AD8\u8D85\u7DB2\u8DEF\u6280\u8853\u5718\u968A\u4E4B\u4E0B\uFF0C\u5C07\u6578\u5341\u4F4D\u535A\u5F69\u5C08\u5BB6\u7684\u7CBE\u96A8\u767C\u63EE\u5F97\u6DCB\u6F13\u76E1\u81F4\uFF0C\u6210\u529F\u6253\u9020\u51FA\u4E00\u500B\u4EE5\u771F\u4EBA\u767E\u5BB6\u6A02\u904A\u6232\u70BA\u4E3B\u7684\u9802\u7D1A\u535A\u5F69\u5E73\u81FA\u3002")), __jsx("div", {
    style: {
      padding: '20px'
    }
  }, __jsx("div", {
    style: {
      padding: '20px',
      border: '1px solid white',
      borderRadius: 5,
      color: 'white',
      lineHeight: '2'
    }
  }, "\u5361\u5229\u96C6\u5718\u70BA\u653F\u5E9C\u7684\u767C\u724C\u53CA\u76E3\u7BA1\u55AE\u4F4DFirst Cagayan Leisure & Resort Corporation (FCLRC) \u548C Cagayan Economic Zone Authority (CEZA) \u8A8D\u53EF\u8207\u6388\u6B0A\u7684\u7DDA\u4E0A\u535A\u5955\u5E73\u53F0\uFF0C\u5408\u6CD5\u7D93\u71DF\u7DB2\u8DEF\u535A\u5F69\u904A\u6232\u3002 \u771F\u4EBA\u76F4\u64AD\u8996\u983B\u7684\u651D\u5F71\u68DA\u7686\u7B26\u5408\u570B\u969B\u6A19\u7AE0\uFF0C\u5229\u7528\u9802\u5C16\u7684\u6280\u8853\u5728\u7DB2\u8DEF\u4E0A\u5C07\u771F\u5BE6\u8CED\u5834\u5B8C\u7F8E\u5448\u73FE\u3002\u4EE5\u73A9\u5BB6\u7684\u4F7F\u7528\u89D2\u5EA6\u4F86\u958B\u767C\u512A\u8CEA\u7684\u529F\u80FD\uFF0C\u7D66\u73A9\u5BB6\u9AD8\u756B\u8CEA\u6D41\u66A2\u7684\u8996\u8A0A\u9AD4\u9A57\uFF0C\u7C21\u6613\u64CD\u4F5C\u7684\u9801\u9762\uFF0C\u8B93\u73A9\u5BB6\u53EA\u8981\u5728\u6709\u7DB2\u8DEF\u7684\u74B0\u5883\u4E0B\uFF0C\u90FD\u80FD\u81F4\u52DD\u5343\u91CC\uFF01")), __jsx(_components_SwitchTabs__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
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
//# sourceMappingURL=access_process.js.b9349d61276c357d9121.hot-update.js.map