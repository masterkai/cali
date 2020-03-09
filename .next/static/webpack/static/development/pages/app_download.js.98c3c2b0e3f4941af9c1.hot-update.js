webpackHotUpdate("static/development/pages/app_download.js",{

/***/ "./pages/app_download/index.js":
/*!*************************************!*\
  !*** ./pages/app_download/index.js ***!
  \*************************************/
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











var AppDownload = function AppDownload(_ref) {
  var isMobile = _ref.isMobile;
  var banner = {
    title: '下載平台',
    desc: '卡利存取款簡易有效率，存款5分鐘完成、取款30分鐘內到帳！',
    pic: 'images/background/appDownload.png'
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
  }), __jsx("div", null, __jsx("div", null, __jsx("div", null, __jsx("img", {
    src: "/images/allbbet.png",
    alt: "",
    className: "img-responsive"
  }), __jsx("div", null)), __jsx("div", null)), __jsx("div", null, __jsx("div", null, __jsx("img", {
    src: "/images/DreamGaming.png",
    alt: "",
    className: "img-responsive"
  }), __jsx("div", null)), __jsx("div", null))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)), isMobile && __jsx(_components_layouts_MobileLayoutLevel2__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }))));
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

/* harmony default export */ __webpack_exports__["default"] = (react_sizes__WEBPACK_IMPORTED_MODULE_2___default()(mapSizesToProps)(AppDownload));

/***/ })

})
//# sourceMappingURL=app_download.js.98c3c2b0e3f4941af9c1.hot-update.js.map