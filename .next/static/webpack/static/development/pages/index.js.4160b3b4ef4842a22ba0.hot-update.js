webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BetRecords.js":
/*!**********************************!*\
  !*** ./components/BetRecords.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OutlineBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutlineBtn */ "./components/OutlineBtn.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var modalStyles = {
  content: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none'
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');

function BetRecords(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passModalIsOpen = _useState2[0],
      setPassModalIsOpen = _useState2[1];

  var openModal = function openModal() {
    setModalIsOpen(true);
    setPassModalIsOpen(true);
  };

  var afterOpenModal = function afterOpenModal() {
    // references are now sync'd and can be accessed.
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle.style.color = 'white';
    react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.65)';
  };

  var closeModal = function closeModal() {
    setModalIsOpen(false);
  };

  var closePassModal = function closePassModal() {
    setPassModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("span", {
    onClick: openModal,
    className: "iconfont icon_coins-light",
    "data-tip": "\u6295\u6CE8\u8A18\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: modalStyles,
    contentLabel: "wallet"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: function ref(subtitle) {
      return react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle;
    }
  }, "\u8B8A\u66F4\u8CC7\u6599"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closeModal
  })), __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody__InfoLayout)
  }, __jsx("form", {
    style: {
      borderRight: '1px solid white',
      padding: '0 20px'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u8B8A\u66F4\u66B1\u7A31\u8207\u5BC6\u78BC"), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u66B1 \u7A31"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u65B0\u5E33\u865F\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u78BA\u8A8D\u65B0\u5E33\u865F\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u65B0\u63D0\u6B3E\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u78BA\u8A8D\u65B0\u63D0\u6B3E\u5BC6\u78BC"), __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck1"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck1"
  }, "\u662F\u5426\u4F7F\u7528\u63D0\u6B3E\u5BC6\u78BC")), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck2"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck2"
  }, "\u662F\u5426\u901A\u904E\u624B\u6A5F\u63A5\u6536\u512A\u60E0\u8A0A\u606F")), __jsx("div", {
    className: "form-group form-check"
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck3"
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck3"
  }, "\u63A5\u6536\u5B58\u3001\u63D0\u6B3E\u5B8C\u6210\u901A\u77E5"))), __jsx("form", {
    style: {
      padding: '0 20px'
    }
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u8B8A\u66F4\u806F\u7E6B\u8CC7\u6599"), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u624B\u6A5F\u865F\u78BC"), __jsx("input", {
    type: "number",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "\u96FB\u5B50\u4FE1\u7BB1"), __jsx("input", {
    type: "mail",
    className: "form-control",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26"
  })), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("label", null, "LINE\u5E33\u865F"), __jsx("input", {
    type: "text",
    className: "form-control"
  }))), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("label", null, "\u5FAE\u4FE1\u5E33\u865F"), __jsx("input", {
    type: "text",
    className: "form-control"
  }))), __jsx("label", null, "\u6536\u8CA8\u5730\u5740"), __jsx("div", {
    className: "form-row",
    style: {
      marginBottom: 20
    }
  }, __jsx("div", {
    className: "form-group col-12"
  }, __jsx("select", {
    id: "inputState",
    className: "form-control",
    defaultValue: "\u8ACB\u9078\u64C7\u57CE\u5E02"
  }, __jsx("option", null, "..."), __jsx("option", null, "..."))), __jsx("div", {
    className: "form-group col-12"
  }, __jsx("select", {
    id: "inputState",
    className: "form-control",
    defaultValue: "\u9109\u93AE\u5E02\u5340"
  }, __jsx("option", null, "..."), __jsx("option", null, "..."))), __jsx("div", {
    className: "form-group col"
  }, __jsx("input", {
    type: "text",
    className: "form-control"
  }))))), __jsx(_OutlineBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "\u78BA\u8A8D\u4FEE\u6539",
    style: {
      margin: '0 auto 30px',
      width: '80%'
    }
  })), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
    isOpen: passModalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closePassModal,
    style: modalStyles,
    contentLabel: "enterPassWords"
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalHeader
  }, __jsx("div", {
    ref: function ref(subtitle) {
      return react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle = subtitle;
    }
  }, "\u8ACB\u8F38\u5165\u63D0\u6B3E\u5BC6\u78BC"), __jsx("span", {
    className: "iconfont icon_times-light",
    onClick: closePassModal
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalBody
  }, __jsx("form", {
    className: "jsx-783784817" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup || "")
  }, __jsx("div", {
    className: "jsx-783784817" + " " + "inputWithBtn"
  }, __jsx("input", {
    type: "text",
    placeholder: "6-10\u4F4D\u82F1\u3001\u6578\u5B57\u7B26",
    className: "jsx-783784817"
  }), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-primary btn-sm"
  }, "\u5FD8\u8A18\u5BC6\u78BC")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "783784817"
  }, ".inputWithBtn.jsx-783784817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;margin-bottom:10px;}.inputWithBtn.jsx-783784817 .btn.jsx-783784817{-webkit-flex:1 1 40%;-ms-flex:1 1 40%;flex:1 1 40%;margin-left:10px;}.btn-submit.jsx-783784817{background-color:#32c5ff;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL0JldFJlY29yZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU9lLEFBR2dDLEFBS0EsQUFJWSx5QkFDYixZQUNkLGNBTG1CLGlCQUNuQixNQU5rQixnQkFDRyxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvQmV0UmVjb3Jkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciwgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcbmltcG9ydCBPdXRsaW5lQnRuIGZyb20gXCIuL091dGxpbmVCdG5cIjtcblxuY29uc3QgbW9kYWxTdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICBtYXhXaWR0aDogJzgwMHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICBib3JkZXI6ICdub25lJ1xuICB9XG59O1xuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpO1xuXG5mdW5jdGlvbiBCZXRSZWNvcmRzKHByb3BzKSB7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc01vZGFsSXNPcGVuLCBzZXRQYXNzTW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJc09wZW4odHJ1ZSk7XG4gICAgc2V0UGFzc01vZGFsSXNPcGVuKHRydWUpXG4gIH07XG5cblxuICBjb25zdCBhZnRlck9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgTW9kYWwuc3VidGl0bGUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIE1vZGFsLmRlZmF1bHRTdHlsZXMub3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwuNjUpJztcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcblxuICB9O1xuXG5cbiAgY29uc3QgY2xvc2VQYXNzTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0UGFzc01vZGFsSXNPcGVuKGZhbHNlKVxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT1cImljb25mb250IGljb25fY29pbnMtbGlnaHRcIiBkYXRhLXRpcD1cIuaKleazqOiomOmMhFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogMjB9fS8+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIndhbGxldFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxIZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgcmVmPXtzdWJ0aXRsZSA9PiAoTW9kYWwuc3VidGl0bGUgPSBzdWJ0aXRsZSl9PlxuICAgICAgICAgICAg6K6K5pu06LOH5paZXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbl90aW1lcy1saWdodFwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MubW9kYWxCb2R5fSAke2Nzcy5tb2RhbEJvZHlfX0luZm9MYXlvdXR9YH0+XG4gICAgICAgICAgPGZvcm0gc3R5bGU9e3tib3JkZXJSaWdodDonMXB4IHNvbGlkIHdoaXRlJywgcGFkZGluZzonMCAyMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+6K6K5pu05pqx56ix6IiH5a+G56K8PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaasSDnqLE8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaWsOW4s+iZn+WvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPueiuuiqjeaWsOW4s+iZn+WvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaWsOaPkOasvuWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPueiuuiqjeaWsOaPkOasvuWvhueivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazFcIj5cbiAgICAgICAgICAgICAgICDmmK/lkKbkvb/nlKjmj5DmrL7lr4bnorxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazJcIj5cbiAgICAgICAgICAgICAgICDmmK/lkKbpgJrpgY7miYvmqZ/mjqXmlLblhKrmg6DoqIrmga9cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrM1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImV4YW1wbGVDaGVjazNcIj5cbiAgICAgICAgICAgICAgICDmjqXmlLblrZjjgIHmj5DmrL7lrozmiJDpgJrnn6VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxmb3JtIHN0eWxlPXt7cGFkZGluZzonMCAyMHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+6K6K5pu06IGv57mr6LOH5paZPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPuaJi+apn+iZn+eivDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI2LTEw5L2N6Iux44CB5pW45a2X56ymXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD7pm7vlrZDkv6HnrrE8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYtMTDkvY3oi7HjgIHmlbjlrZfnrKZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TElOReW4s+iZnzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD7lvq7kv6HluLPomZ88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+5pS26LKo5Zyw5Z2APC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLoq4vpgbjmk4fln47luIJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLphInpjq7luILljYBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxPdXRsaW5lQnRuIG5hbWU9XCLnorroqo3kv67mlLlcIiBzdHlsZT17e21hcmdpbjonMCBhdXRvIDMwcHgnLCB3aWR0aDonODAlJ319Lz5cblxuXG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtwYXNzTW9kYWxJc09wZW59XG4gICAgICAgIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlUGFzc01vZGFsfVxuICAgICAgICBzdHlsZT17bW9kYWxTdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cImVudGVyUGFzc1dvcmRzXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbEhlYWRlcn0+XG4gICAgICAgICAgPGRpdiByZWY9e3N1YnRpdGxlID0+IChNb2RhbC5zdWJ0aXRsZSA9IHN1YnRpdGxlKX0+XG4gICAgICAgICAgICDoq4vovLjlhaXmj5DmrL7lr4bnorxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uX3RpbWVzLWxpZ2h0XCIgb25DbGljaz17Y2xvc2VQYXNzTW9kYWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxCb2R5fT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2Nzcy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFdpdGhCdG5cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCI2LTEw5L2N6Iux44CB5pW45a2X56ymXCIvPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAg5b+Y6KiY5a+G56K8XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5pbnB1dFdpdGhCdG4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5wdXRXaXRoQnRuIC5idG4ge1xuICAgICAgICAgICAgICAgICAgZmxleDogMSAxIDQwJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuLXN1Ym1pdCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJjNWZmO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdCBidG4tc21cIj5cbiAgICAgICAgICAgICAg56K66KqN6YCB5Ye6XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCZXRSZWNvcmRzOyJdfQ== */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/BetRecords.js */"), __jsx("button", {
    type: "button",
    className: "jsx-783784817" + " " + "btn btn-submit btn-sm"
  }, "\u78BA\u8A8D\u9001\u51FA")))));
}

/* harmony default export */ __webpack_exports__["default"] = (BetRecords);

/***/ }),

/***/ "./components/includes/StatefulHeader.js":
/*!***********************************************!*\
  !*** ./components/includes/StatefulHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DDWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DDWallet */ "./components/DDWallet.js");
/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Wallet */ "./components/Wallet.js");
/* harmony import */ var _InfoModify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InfoModify */ "./components/InfoModify.js");
/* harmony import */ var _BetRecords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BetRecords */ "./components/BetRecords.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var StatefulHeader = function StatefulHeader(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerBG
  }, __jsx("div", {
    className: "".concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flexContainer, " ").concat(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flexContainer__status)
  }, __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userLevel,
    style: {
      color: '#F70000'
    }
  }, __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-solid",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  }), __jsx("span", {
    className: "iconfont icon_star-light",
    style: {
      fontSize: '1.2rem'
    }
  })), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userInfo,
    style: {
      marginLeft: 20
    }
  }, "\u6B61\u8FCEtest123"), __jsx("span", {
    className: "iconfont icon_usd-circle-light",
    style: {
      marginLeft: 20
    }
  }), __jsx("div", {
    className: _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a.userInfo,
    style: {
      marginLeft: 20,
      marginRight: 20
    }
  }, "250.00"), __jsx(_DDWallet__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Wallet__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_InfoModify__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_BetRecords__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    place: "bottom",
    effect: "solid"
  }), __jsx("span", {
    className: "iconfont icon_coins-light",
    "data-tip": "\u6295\u6CE8\u8A18\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx("span", {
    className: "iconfont icon_gift-light",
    "data-tip": "\u512A\u60E0\u7D00\u9304",
    style: {
      marginLeft: 20
    }
  }), __jsx("span", {
    className: "iconfont icon_bell-light",
    "data-tip": "\u6703\u54E1\u901A\u77E5",
    style: {
      marginLeft: 20
    }
  }), __jsx("span", {
    className: "iconfont icon_sign-out-light",
    style: {
      marginLeft: 20
    },
    "data-tip": "\u6703\u54E1\u767B\u51FA"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (StatefulHeader);

/***/ })

})
//# sourceMappingURL=index.js.4160b3b4ef4842a22ba0.hot-update.js.map