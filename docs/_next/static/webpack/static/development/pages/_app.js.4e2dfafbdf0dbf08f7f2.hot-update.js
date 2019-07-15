webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/utils/redux/configureStore.ts":
/*!*******************************************!*\
  !*** ./src/utils/redux/configureStore.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _common_objectAssign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/objectAssign */ "./src/utils/common/objectAssign.ts");









var configureStore = function configureStore(_ref) {
  var commonReducers = _ref.commonReducers,
      enhancer = _ref.enhancer,
      _ref$middlewareArray = _ref.middlewareArray,
      middlewareArray = _ref$middlewareArray === void 0 ? [] : _ref$middlewareArray,
      rootSaga = _ref.rootSaga;
  return function () {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var keysToRemove = [];

    var createReducer = function createReducer(asyncReducers) {
      return function (state, action) {
        var updatedState = state;

        if (keysToRemove.length > 0) {
          updatedState = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_7__["default"])(function (_ref2) {
            var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, 1),
                k = _ref3[0];

            return !(k in keysToRemove);
          })({}, state);
          keysToRemove = [];
        }

        return Object(redux__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, commonReducers, asyncReducers))(updatedState, action);
      };
    };

    var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_6__["default"])();
    middlewareArray.unshift(sagaMiddleware);

    var store = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(createReducer(), initialState, enhancer.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(middlewareArray))), {
      commonReducers: commonReducers,
      asyncReducers: {},
      addReducer: function addReducer(key, asyncReducer) {
        if (!key || store.asyncReducers[key]) {
          return;
        }

        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      removeReducer: function removeReducer(key) {
        if (!key || !store.asyncReducers[key]) {
          return;
        }

        delete store.asyncReducers[key];
        keysToRemove.push(key);
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      injectReducers: function injectReducers(reducers) {
        Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_7__["default"])()(store.asyncReducers, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      substitueReducers: function substitueReducers(reducers) {
        var _keysToRemove;

        console.log(keysToRemove);

        (_keysToRemove = keysToRemove).push.apply(_keysToRemove, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(store.asyncReducers).filter(function (k) {
          console.log(k, reducers, !(k in reducers));
          return !(k in reducers);
        })));

        console.log(keysToRemove);
        store.asyncReducers = reducers;
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      sagaTask: rootSaga ? sagaMiddleware.run(rootSaga) : undefined
    });

    return store;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

})
//# sourceMappingURL=_app.js.4e2dfafbdf0dbf08f7f2.hot-update.js.map