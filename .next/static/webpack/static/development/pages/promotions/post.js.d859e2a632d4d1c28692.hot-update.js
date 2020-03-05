webpackHotUpdate("static/development/pages/promotions/post.js",{

/***/ "./components/BonusRecordItem.js":
/*!***************************************!*\
  !*** ./components/BonusRecordItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function BonusRecordItem(_ref) {
  var subject = _ref.subject,
      detail = _ref.detail,
      status = _ref.status;
  return __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    style: {
      padding: 0
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      flexBasis: '50%',
      fontSize: '.875rem',
      color: 'black',
      padding: '15px 0'
    }
  }, subject), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: detail
  }, __jsx("a", {
    style: {
      textAlign: 'center',
      flexBasis: '25%',
      fontSize: '.75rem',
      color: 'black',
      padding: '15px',
      borderRight: '1px solid #ccc',
      borderLeft: '1px solid #ccc'
    }
  }, "\u8A73\u7D30\u5167\u5BB9")), __jsx("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      flexBasis: '25%',
      fontSize: '.75rem',
      color: 'black',
      padding: '15px 0'
    }
  }, status ? __jsx("span", {
    style: {
      padding: '2px 5px',
      color: 'white',
      backgroundColor: '#23d823',
      borderRadius: 3
    }
  }, "\u5DF2\u9818\u53D6") : '前往領取', status ? null : __jsx("span", {
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: 50,
      left: 10,
      height: 10,
      width: 10,
      backgroundColor: 'red'
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BonusRecordItem);

/***/ })

})
//# sourceMappingURL=post.js.d859e2a632d4d1c28692.hot-update.js.map