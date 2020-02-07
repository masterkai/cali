(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"superAwesome":"_22FSOBq6oUnetNYRsYBo43","input":"_38iOWCD9ZxTDa7Kp4NNWdF","flexContainer":"TMwPXLjQpihvUU1uvLKVy","flex":"JK4h-C7w2miKSaDh_0xMg","menu":"_3jAwHf9XLIQvSo5JXTbhwG","marquee":"_2gDmNhYlFiGBcvjgVAGyM_","marquee_flexContainer":"xSxsrduvyvyxsod2tLKhn","marquee_text":"DeuhvKXh7QWgmTnvcLb9l"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1581042713094");
          });
      }
    }
  

/***/ })

}]);
//# sourceMappingURL=styles.js.map