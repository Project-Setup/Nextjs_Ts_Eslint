webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/utils/redux/configureStore.ts":
/*!*******************************************!*\
  !*** ./src/utils/redux/configureStore.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _common_objectAssign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/objectAssign */ "./src/utils/common/objectAssign.ts");













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
          updatedState = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])(function (_ref2) {
            var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref2, 1),
                k = _ref3[0];

            return !(k in keysToRemove);
          })({}, state);
          keysToRemove = [];
        }

        return Object(redux__WEBPACK_IMPORTED_MODULE_9__["combineReducers"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, commonReducers, asyncReducers))(updatedState, action);
      };
    };

    var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_10__["default"])();
    middlewareArray.unshift(sagaMiddleware);

    var store = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default()(Object(redux__WEBPACK_IMPORTED_MODULE_9__["createStore"])(createReducer(), initialState, enhancer.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(middlewareArray))), {
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

        store.asyncReducers = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])(function (_ref4) {
          var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref4, 1),
              k = _ref5[0];

          return k !== key;
        })({}, store.asyncReducers);
        keysToRemove.push(key);
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      injectReducers: function injectReducers(reducers) {
        Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])()(store.asyncReducers, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      substitueReducers: function substitueReducers(reducers) {
        var _keysToRemove;

        (_keysToRemove = keysToRemove).push.apply(_keysToRemove, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(store.asyncReducers).filter(function (k) {
          return !(k in reducers);
        })));

        store.asyncReducers = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])()({}, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },
      sagaTasks: rootSaga ? {
        root: sagaMiddleware.run(rootSaga)
      } : {},
      addSaga: function addSaga(key, saga) {
        if (!key || store.sagaTasks[key]) {
          return;
        }

        store.sagaTasks[key] = sagaMiddleware.run(saga);
      },
      removeSaga: function () {
        var _removeSaga = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(key) {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!key || !store.sagaTasks[key])) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return store.sagaTasks[key].cancel();

                case 4:
                  store.sagaTasks = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])(function (_ref6) {
                    var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref6, 1),
                        k = _ref7[0];

                    return k !== key;
                  })({}, store.sagaTasks);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function removeSaga(_x) {
          return _removeSaga.apply(this, arguments);
        }

        return removeSaga;
      }(),
      injectSagas: function injectSagas(sagas) {
        _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(sagas).forEach(function (_ref8) {
          var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref8, 2),
              key = _ref9[0],
              saga = _ref9[1];

          if (!(key in store.sagaTasks) && saga) {
            store.sagaTasks[key] = sagaMiddleware.run(saga);
          }
        });
      },
      substitueSagas: function () {
        var _substitueSagas = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(sagas) {
          var sagaKeysToRemove, removeSagas;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  sagaKeysToRemove = [];
                  removeSagas = _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(store.sagaTasks).filter(function (key) {
                    return !(key in sagas && sagas[key]);
                  }).map(
                  /*#__PURE__*/
                  function () {
                    var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                    /*#__PURE__*/
                    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(key) {
                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return store.sagaTasks[key].cancel();

                            case 2:
                              sagaKeysToRemove.push(key);

                            case 3:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x3) {
                      return _ref10.apply(this, arguments);
                    };
                  }()));

                  _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(sagas).forEach(function (_ref11) {
                    var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref11, 2),
                        key = _ref12[0],
                        saga = _ref12[1];

                    if (!(key in store.sagaTasks) && saga) {
                      store.sagaTasks[key] = sagaMiddleware.run(saga);
                    }
                  });

                  _context3.next = 5;
                  return removeSagas;

                case 5:
                  store.sagaTasks = Object(_common_objectAssign__WEBPACK_IMPORTED_MODULE_11__["default"])(function (_ref13) {
                    var _ref14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref13, 1),
                        k = _ref14[0];

                    return !sagaKeysToRemove.includes(k);
                  })({}, store.sagaTasks);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function substitueSagas(_x2) {
          return _substitueSagas.apply(this, arguments);
        }

        return substitueSagas;
      }()
    });

    return store;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

})
//# sourceMappingURL=_app.js.e91e8a83eade1918afa6.hot-update.js.map