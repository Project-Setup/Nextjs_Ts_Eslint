webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/redux/actions/actions */ "./src/redux/actions/actions.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/pages/index.tsx";








var mapStateToProps = function mapStateToProps(_ref) {
  var count = _ref.count.count;
  return {
    count: count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addNumber: function addNumber(num) {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["addNumber"])(num));
    },
    minusNumber: function minusNumber(num) {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__["minusNumber"])(num));
    }
  };
};

var Page = function Page(_ref2) {
  var count = _ref2.count,
      addNumber = _ref2.addNumber,
      minusNumber = _ref2.minusNumber;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Nextjs Typescript Eslint",
    themeColor: "red",
    hrefPage: "/",
    favIconPath: "/static/icons/favicon.ico",
    appleIconPath: "/static/icons/icon192x192.png",
    hrefManifest: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "This is index"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Number is ", count), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return addNumber(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "add 2"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/about",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "about")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page));

/***/ })

})
//# sourceMappingURL=index.js.eee500b8ebf76aa457f4.hot-update.js.map