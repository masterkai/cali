webpackHotUpdate("static/development/pages/bet_records.js",{

/***/ "./components/BetItem.js":
/*!*******************************!*\
  !*** ./components/BetItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var BetItem = function BetItem(_ref) {
  var status = _ref.status;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      accordian = _useState[0],
      setAccordian = _useState[1];

  var showAccordian = function showAccordian() {
    setAccordian(!accordian);
  };

  var _class = {
    "true": 'iconfont icon_chevron-up-light',
    "false": 'iconfont icon_chevron-down-light'
  };
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.itemContainer
  }, __jsx("div", {
    onClick: showAccordian,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexBasis: '90%'
    }
  }, __jsx("div", {
    style: {
      fontWeight: 300,
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, "2020/02/27/15:28:35"), __jsx("div", {
    style: {
      fontWeight: 300,
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, "\u8F38/\u8D0F\uFF1A", __jsx("span", {
    style: status > 0 ? {
      color: '#0091FF'
    } : {
      color: '#E02020'
    }
  }, status))), __jsx("span", {
    className: _class[accordian],
    style: {
      fontSize: '1rem',
      color: '#9BA2AA'
    }
  })), accordian && __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.dropDownBox
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u55AE\u865F\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u661F\u7D1A\uFF1A", __jsx("span", null, "\u516D\u661F\u7D1A")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u904A\u6232\u5E73\u53F0\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u904A\u6232\u985E\u578B\uFF1A", __jsx("span", null, "xxxxx")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u6295\u6CE8\u984D\uFF1A", __jsx("span", null, "1000")), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.listItem
  }, "\u6D41\u6C34\uFF1A", __jsx("span", null, "1000"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BetItem);

/***/ })

})
//# sourceMappingURL=bet_records.js.ce6e90aae699cc736516.hot-update.js.map