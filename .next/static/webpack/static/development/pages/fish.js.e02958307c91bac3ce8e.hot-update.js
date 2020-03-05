webpackHotUpdate("static/development/pages/fish.js",{

/***/ "./components/layouts/deskTopLayout.js":
/*!*********************************************!*\
  !*** ./components/layouts/deskTopLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-smooth-marquee */ "./node_modules/react-smooth-marquee/dist/index.js");
/* harmony import */ var react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _includes_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../includes/Header */ "./components/includes/Header.js");
/* harmony import */ var _includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../includes/StatefulHeader */ "./components/includes/StatefulHeader.js");
/* harmony import */ var _includes_MainNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../includes/MainNav */ "./components/includes/MainNav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ScrollButton */ "./components/ScrollButton.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Drawer */ "./components/Drawer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var DeskTopLayout = function DeskTopLayout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      user = _useState[0],
      setUser = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.displayDesktop || "")
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/images/favicon-32x32.png",
    className: "jsx-1623311844"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap&subset=chinese-traditional",
    rel: "stylesheet",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/styles.css",
    className: "jsx-1623311844"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/iconfont.css",
    className: "jsx-1623311844"
  }), __jsx("title", {
    className: "jsx-1623311844"
  }, "\u5361\u5229\u5A1B\u6A02\u57CE")), user ? __jsx(_includes_StatefulHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : __jsx(_includes_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_includes_MainNav__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee || "")
  }, __jsx("span", {
    className: "jsx-1623311844" + " " + "iconfont icon_volume-up-solid"
  }), __jsx("div", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_flexContainer || "")
  }, __jsx(react_smooth_marquee__WEBPACK_IMPORTED_MODULE_2___default.a, {
    velocity: 0.05
  }, __jsx("p", {
    className: "jsx-1623311844" + " " + (_styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default.a.marquee_text || "")
  }, "\u6EAB\u99A8\u63D0\u793A\uFF1A\u5C0A\u656C\u7684\u3010\u5361\u5229\u5A1B\u6A02\u57CE\u3011\u6703\u54E1\u60A8\u597D\uFF01 2020-01-08\u865F\u5929\u5929\u8FD4\u6C34\u6700\u9AD81.8%\uFF0C\u5DF2\u7D93\u8FD4\u56DE\u5230\u60A8\u7684\u904A\u6232\u8CEC\u865F\u4E2D\uFF0C\u8ACB\u60A8\u767B\u5165\u67E5\u6536\uFF01\u8F49\u8CEC\u5230\u516C\u53F8\u6307\u5B9A\u9280\u884C\u5361\uFF0C\u63D0\u4EA4\u5165\u6B3E\u4FE1\u606F\u53EF\u5F97\u5230\u6B21\u6B21\u5B58\u6B21\u6B21\u90011.3%\u5165\u6B3E\u512A\u60E0\uFF0C\u8B1D\u8B1D\u3002")))), __jsx("div", {
    className: "jsx-1623311844" + " " + "mainBG"
  }, props.children, __jsx(_ScrollButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scrollStepInPx: "100",
    delayInMs: "16.66"
  }), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1623311844"
  }, ".mainBG.jsx-1623311844::after{content:'';background:url(/images/stary_sky.png) repeat;background-size:30%;-webkit-filter:contrast(100%);filter:contrast(100%);opacity:0.32;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;}.mainBG.jsx-1623311844{position:relative;z-index:0;background:linear-gradient( to right, #000000 0%, #6e41c4 50%, rgba(0,0,0,1) 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXVrYWltaW5nL1dlYnN0b3JtUHJvamVjdHMvY2FsaS9jb21wb25lbnRzL2xheW91dHMvZGVza1RvcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RWEsQUFHd0IsQUFhTyxXQVoyQixPQWFuQyxVQU1ULDRCQWxCbUIsb0JBQ0Usb0NBa0J4QixnQkFqQmUsYUFDUCxNQUNDLE9BQ0UsU0FDRCxRQUNVLGtCQUNQLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2xpdWthaW1pbmcvV2Vic3Rvcm1Qcm9qZWN0cy9jYWxpL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrVG9wTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFycXVlZSBmcm9tICdyZWFjdC1zbW9vdGgtbWFycXVlZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2luY2x1ZGVzL0hlYWRlcic7XG5pbXBvcnQgU3RhdGVmdWxIZWFkZXIgZnJvbSAnLi4vaW5jbHVkZXMvU3RhdGVmdWxIZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vaW5jbHVkZXMvTWFpbk5hdic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBTY3JvbGxCdXR0b24gZnJvbSAnLi4vU2Nyb2xsQnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vRHJhd2VyJztcblxuY29uc3QgRGVza1RvcExheW91dCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kaXNwbGF5RGVza3RvcH0+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICB7LyogPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD0xMjgwLCBpbml0aWFsLXNjYWxlPTAuNSwgbWF4aW11bS1zY2FsZT0zLjAsIHVzZXItc2NhbGFibGU9MVwiXG4gICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWFnZXMvZmF2aWNvbi0zMngzMi5wbmdcIi8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2FucytUQzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwJnN1YnNldD1jaGluZXNlLXRyYWRpdGlvbmFsXCJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy90d2l0dGVyLWJvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgICAgY2hhcnNldD1cIlVURi04XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlcy5jc3NcIi8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvaWNvbmZvbnQuY3NzXCIvPlxuICAgICAgICAgICAgPHRpdGxlPuWNoeWIqeWom+aoguWfjjwvdGl0bGU+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHt1c2VyPzxTdGF0ZWZ1bEhlYWRlci8+OjxIZWFkZXIvPn1cblxuXG4gICAgICAgICAgPE1haW5OYXYvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25mb250IGljb25fdm9sdW1lLXVwLXNvbGlkXCIvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1hcnF1ZWVfZmxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxNYXJxdWVlIHZlbG9jaXR5PXswLjA1fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Nzcy5tYXJxdWVlX3RleHR9PlxuICAgICAgICAgICAgICAgICAg5rqr6aao5o+Q56S677ya5bCK5pWs55qE44CQ5Y2h5Yip5aib5qiC5Z+O44CR5pyD5ZOh5oKo5aW977yBXG4gICAgICAgICAgICAgICAgICAyMDIwLTAxLTA46Jmf5aSp5aSp6L+U5rC05pyA6auYMS44Je+8jOW3sue2k+i/lOWbnuWIsOaCqOeahOmBiuaIsuizrOiZn+S4re+8jOiri+aCqOeZu+WFpeafpeaUtu+8gei9ieizrOWIsOWFrOWPuOaMh+WumumKgOihjOWNoe+8jOaPkOS6pOWFpeasvuS/oeaBr+WPr+W+l+WIsOasoeasoeWtmOasoeasoemAgTEuMyXlhaXmrL7lhKrmg6DvvIzorJ3orJ3jgIJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvTWFycXVlZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJHXCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8U2Nyb2xsQnV0dG9uIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTYuNjZcIi8+XG4gICAgICAgICAgICA8RHJhd2VyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAubWFpbkJHOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3N0YXJ5X3NreS5wbmcpIHJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAlO1xuICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzI7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1haW5CRyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgIzAwMDAwMCAwJSxcbiAgICAgICAgICAgICAgIzZlNDFjNCA1MCUsXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuO1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrVG9wTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/liukaiming/WebstormProjects/cali/components/layouts/deskTopLayout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DeskTopLayout);

/***/ })

})
//# sourceMappingURL=fish.js.e02958307c91bac3ce8e.hot-update.js.map