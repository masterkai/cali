webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BonusRecords.js":
/*!************************************!*\
  !*** ./components/BonusRecords.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _BetItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BetItem */ "./components/BetItem.js");
/* harmony import */ var _BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BonusRecordItem */ "./components/BonusRecordItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var modalStyles = {
  content: {
    width: '100%',
    maxWidth: '600px',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#__next');

function BetRecords(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var openModal = function openModal() {
    setModalIsOpen(true);
  };

  var afterOpenModal = function afterOpenModal() {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  var closeModal = function closeModal() {
    setModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_gift-light",
    "data-tip": "\u512A\u60E0\u7D00\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalHeader
  }, __jsx("div", {
    ref: function ref(subtitle) {
      return react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle = subtitle;
    }
  }, "\u512A\u60E0\u8A18\u9304"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalBody__BetRecordsLayout)
  }, __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: "\u9996\u5132",
    detail: '/promotions/post/1',
    status: false
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: "\u4E8C\u5132",
    detail: '/promotions/post/2',
    status: true
  }), __jsx(_BonusRecordItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subject: "\u6703\u54E1(\u672C\u6B212/25)",
    detail: '/promotions/post/3',
    status: false
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

/***/ })

})
//# sourceMappingURL=index.js.0f321234d42ac349be34.hot-update.js.map