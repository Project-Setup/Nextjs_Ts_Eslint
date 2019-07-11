webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Loading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Loading/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/styleUtils */ "./src/utils/styleUtils.ts");


var _jsxFileName = "/Users/david.chen/Documents/projects/next9/src/components/Loading/index.tsx";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    from, ", "%, to {\n      width: ", ";\n      height: ", ";\n      opacity: 0.5;\n    }\n    ", "% {\n      width: ", ";\n      height: ", ";\n      opacity: 1;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Loading = function Loading(_ref) {
  var _ref$boxSize = _ref.boxSize,
      boxSize = _ref$boxSize === void 0 ? 20 : _ref$boxSize,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 180 : _ref$width,
      _ref$animationTime = _ref.animationTime,
      animationTime = _ref$animationTime === void 0 ? 1200 : _ref$animationTime,
      _ref$numBox = _ref.numBox,
      numBox = _ref$numBox === void 0 ? 3 : _ref$numBox,
      _ref$boxColor = _ref.boxColor,
      boxColor = _ref$boxColor === void 0 ? 'skyblue' : _ref$boxColor;

  var animationDelayStyles = function animationDelayStyles(position) {
    return (
      /*#__PURE__*/
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("animation-delay:", animationTime * (position / numBox), "ms;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQndEIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVVdGlscyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJveFNpemU/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBhbmltYXRpb25UaW1lPzogbnVtYmVyO1xuICBudW1Cb3g/OiBudW1iZXI7XG4gIGJveENvbG9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBMb2FkaW5nOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBib3hTaXplID0gMjAsXG4gIHdpZHRoID0gMTgwLFxuICBhbmltYXRpb25UaW1lID0gMTIwMCxcbiAgbnVtQm94ID0gMyxcbiAgYm94Q29sb3IgPSAnc2t5Ymx1ZScsXG59KSA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvbkRlbGF5U3R5bGVzID0gKHBvc2l0aW9uOiBudW1iZXIpID0+IGNzc2BcbiAgICBhbmltYXRpb24tZGVsYXk6ICR7YW5pbWF0aW9uVGltZSAqIChwb3NpdGlvbiAvIG51bUJveCl9bXM7XG4gIGA7XG5cbiAgY29uc3QgYm94U3R5bGVzID0gQXJyYXkuZnJvbShBcnJheShudW1Cb3gpLCAoXywgcG9zaXRpb24pID0+IGFuaW1hdGlvbkRlbGF5U3R5bGVzKHBvc2l0aW9uKSk7XG5cbiAgY29uc3Qgc2NhbGVFZmZlY3RzID0ga2V5ZnJhbWVzYFxuICAgIGZyb20sICR7TWF0aC5mbG9vcigyMDAgLyBudW1Cb3gpfSUsIHRvIHtcbiAgICAgIHdpZHRoOiAke3JlbShib3hTaXplKX07XG4gICAgICBoZWlnaHQ6ICR7cmVtKGJveFNpemUpfTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJHtNYXRoLmZsb29yKDEwMCAvIG51bUJveCl9JSB7XG4gICAgICB3aWR0aDogJHtyZW0oYm94U2l6ZSAqIDIpfTtcbiAgICAgIGhlaWdodDogJHtyZW0oYm94U2l6ZSAqIDIpfTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IGNzc2BcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi10b3A6ICR7cmVtKDQwKX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHtyZW0oNDApfTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6ICR7cmVtKHdpZHRoKX07XG4gICAgaGVpZ2h0OiAke3JlbShib3hTaXplICogMil9O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIHdpZHRoOiAke3JlbShib3hTaXplKX07XG4gICAgICBoZWlnaHQ6ICR7cmVtKGJveFNpemUpfTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym94Q29sb3J9O1xuICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2NhbGVFZmZlY3RzfTtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHthbmltYXRpb25UaW1lfW1zO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e2NvbnRhaW5lclN0eWxlc30+XG4gICAgICB7Ym94U3R5bGVzLm1hcChzdHlsZXMgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3R5bGVzLm5hbWV9IGNzcz17c3R5bGVzfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl19 */"))
    );
  };

  var boxStyles = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(Array(numBox), function (_, position) {
    return animationDelayStyles(position);
  });

  var scaleEffects = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject(), Math.floor(200 / numBox), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize), Math.floor(100 / numBox), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize * 2), Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize * 2));
  var containerStyles =
  /*#__PURE__*/
  Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("box-sizing:border-box;margin-top:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(40), ";margin-bottom:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(40), ";margin-left:auto;margin-right:auto;display:flex;max-width:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(width), ";height:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize * 2), ";width:100%;flex-flow:row;justify-content:space-evenly;align-items:center;& > div{width:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize), ";height:", Object(_utils_styleUtils__WEBPACK_IMPORTED_MODULE_4__["rem"])(boxSize), ";opacity:0.5;background-color:", boxColor, ";animation-name:", scaleEffects, ";animation-duration:", animationTime, "ms;animation-iteration-count:infinite;}label:containerStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzZCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9uZXh0OS9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgcmVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVVdGlscyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJveFNpemU/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBhbmltYXRpb25UaW1lPzogbnVtYmVyO1xuICBudW1Cb3g/OiBudW1iZXI7XG4gIGJveENvbG9yPzogc3RyaW5nO1xufVxuXG5jb25zdCBMb2FkaW5nOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBib3hTaXplID0gMjAsXG4gIHdpZHRoID0gMTgwLFxuICBhbmltYXRpb25UaW1lID0gMTIwMCxcbiAgbnVtQm94ID0gMyxcbiAgYm94Q29sb3IgPSAnc2t5Ymx1ZScsXG59KSA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvbkRlbGF5U3R5bGVzID0gKHBvc2l0aW9uOiBudW1iZXIpID0+IGNzc2BcbiAgICBhbmltYXRpb24tZGVsYXk6ICR7YW5pbWF0aW9uVGltZSAqIChwb3NpdGlvbiAvIG51bUJveCl9bXM7XG4gIGA7XG5cbiAgY29uc3QgYm94U3R5bGVzID0gQXJyYXkuZnJvbShBcnJheShudW1Cb3gpLCAoXywgcG9zaXRpb24pID0+IGFuaW1hdGlvbkRlbGF5U3R5bGVzKHBvc2l0aW9uKSk7XG5cbiAgY29uc3Qgc2NhbGVFZmZlY3RzID0ga2V5ZnJhbWVzYFxuICAgIGZyb20sICR7TWF0aC5mbG9vcigyMDAgLyBudW1Cb3gpfSUsIHRvIHtcbiAgICAgIHdpZHRoOiAke3JlbShib3hTaXplKX07XG4gICAgICBoZWlnaHQ6ICR7cmVtKGJveFNpemUpfTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJHtNYXRoLmZsb29yKDEwMCAvIG51bUJveCl9JSB7XG4gICAgICB3aWR0aDogJHtyZW0oYm94U2l6ZSAqIDIpfTtcbiAgICAgIGhlaWdodDogJHtyZW0oYm94U2l6ZSAqIDIpfTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IGNzc2BcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi10b3A6ICR7cmVtKDQwKX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHtyZW0oNDApfTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6ICR7cmVtKHdpZHRoKX07XG4gICAgaGVpZ2h0OiAke3JlbShib3hTaXplICogMil9O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmID4gZGl2IHtcbiAgICAgIHdpZHRoOiAke3JlbShib3hTaXplKX07XG4gICAgICBoZWlnaHQ6ICR7cmVtKGJveFNpemUpfTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym94Q29sb3J9O1xuICAgICAgYW5pbWF0aW9uLW5hbWU6ICR7c2NhbGVFZmZlY3RzfTtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHthbmltYXRpb25UaW1lfW1zO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e2NvbnRhaW5lclN0eWxlc30+XG4gICAgICB7Ym94U3R5bGVzLm1hcChzdHlsZXMgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3R5bGVzLm5hbWV9IGNzcz17c3R5bGVzfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl19 */"));
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: containerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, boxStyles.map(function (styles) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      key: styles.name,
      css: styles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

})
//# sourceMappingURL=index.js.91a2289bf0938e5aff86.hot-update.js.map