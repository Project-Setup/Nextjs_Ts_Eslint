webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_utils_redux_dynamicReducerWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils/redux/dynamicReducerWrap */ "./src/utils/redux/dynamicReducerWrap.tsx");
/* harmony import */ var _src_redux_reducers_count__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/redux/reducers/count */ "./src/redux/reducers/count.ts");
/* harmony import */ var _src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/redux/actions/actions */ "./src/redux/actions/actions.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/next9/pages/index.tsx";











var mapStateToProps = function mapStateToProps(state) {
  return {
    numCount: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, 'count.count', 0)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add2: function add2() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__["addNumber"])(2));
    },
    minus3: function minus3() {
      return dispatch(Object(_src_redux_actions_actions__WEBPACK_IMPORTED_MODULE_9__["minusNumber"])(3));
    }
  };
};

var Page = function Page(_ref) {
  var numCount = _ref.numCount,
      minus3 = _ref.minus3,
      add2 = _ref.add2;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Nextjs Typescript Eslint",
    themeColor: "red",
    hrefPage: "/",
    favIconPath: "/static/icons/favicon.ico",
    appleIconPath: "/static/icons/icon192x192.png",
    hrefManifest: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "This is index"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Number is ".concat(numCount)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: add2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "add 2"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "button",
    onClick: minus3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "minus 3"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/stats",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "stats")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/about",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "about")));
};
var ConnectedPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page);
var component = Object(_src_utils_redux_dynamicReducerWrap__WEBPACK_IMPORTED_MODULE_7__["default"])({
  reducers: {
    count: _src_redux_reducers_count__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  Child: ConnectedPage
});
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ })

})
//# sourceMappingURL=index.js.b0edd4db1b6866fa33d5.hot-update.js.map