import {
  createStore,
  combineReducers,
  ReducersMapObject,
  Reducer,
  StoreEnhancer,
  Store,
  Action,
  Middleware,
} from 'redux';
import createSagaMiddleware, { Saga } from 'redux-saga';
import objectAssign from '../common/objectAssign';
import { MakeStore } from './withRedux';
import { SagaTasksProp } from './withReduxSaga';

export interface SagaMapObject {
  [key: string]: Saga;
}

interface StoreReducerEnhanced extends SagaTasksProp {
  commonReducers: ReducersMapObject;
  asyncReducers: ReducersMapObject;
  addReducer(key: string, asyncReducer: Reducer): void;
  removeReducer(key: string): void;
  injectReducers(reducers: ReducersMapObject): void;
  substitueReducers(reducers: ReducersMapObject): void;
  addSaga(key: string, saga: Saga): void;
  removeSaga(key: string): Promise<void>;
  injectSagas(sagas: SagaMapObject): void;
  substitueSagas(sagas: SagaMapObject): Promise<void>;
}

export interface ReducerEnhancedStore extends Store, StoreReducerEnhanced {}

const configureStore = ({
  commonReducers,
  enhancer,
  middlewareArray = [],
  rootSaga,
}: {
  commonReducers: ReducersMapObject;
  enhancer(...args: Middleware[]): StoreEnhancer;
  middlewareArray?: Middleware[];
  rootSaga?: Saga;
}): MakeStore<ReducerEnhancedStore> => (initialState: any = {}) => {
  let keysToRemove: string[] = [];

  const createReducer = (asyncReducers?: ReducersMapObject) => (state: any, action: Action) => {
    let updatedState = state;
    if (keysToRemove.length > 0) {
      updatedState = objectAssign(([k]) => !(k in keysToRemove))({}, state);
      keysToRemove = [];
    }
    return combineReducers({
      ...commonReducers,
      ...asyncReducers,
    })(updatedState, action);
  };

  const sagaMiddleware = createSagaMiddleware();

  middlewareArray.unshift(sagaMiddleware);
  const store: ReducerEnhancedStore = Object.assign(
    createStore(createReducer(), initialState, enhancer(...middlewareArray)),
    {
      commonReducers,
      asyncReducers: {},

      addReducer: (key, asyncReducer) => {
        if (!key || store.asyncReducers[key]) {
          return;
        }
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      removeReducer: key => {
        if (!key || !store.asyncReducers[key]) {
          return;
        }
        store.asyncReducers = objectAssign(([k]) => k !== key)({}, store.asyncReducers);
        keysToRemove.push(key);
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      injectReducers: reducers => {
        objectAssign()(store.asyncReducers, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      substitueReducers: reducers => {
        keysToRemove.push(...Object.keys(store.asyncReducers).filter(k => !(k in reducers)));
        store.asyncReducers = objectAssign()({}, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      sagaTasks: rootSaga ? { root: sagaMiddleware.run(rootSaga) } : {},

      addSaga: (key, saga) => {
        if (!key || store.sagaTasks[key]) {
          return;
        }
        store.sagaTasks[key] = sagaMiddleware.run(saga);
      },

      removeSaga: async key => {
        if (!key || !store.sagaTasks[key]) {
          return;
        }
        await store.sagaTasks[key].cancel();
        store.sagaTasks = objectAssign(([k]) => k !== key)({}, store.sagaTasks);
      },

      injectSagas: sagas => {
        Object.entries(sagas).forEach(([key, saga]) => {
          if (!(key in store.sagaTasks) && saga) {
            store.sagaTasks[key] = sagaMiddleware.run(saga);
          }
        });
      },

      substitueSagas: async sagas => {
        const sagaKeysToRemove: string[] = [];
        const removeSagas = Promise.all(
          Object.keys(store.sagaTasks)
            .filter(key => !(key in sagas && sagas[key]))
            .map(async key => {
              await store.sagaTasks[key].cancel();
              sagaKeysToRemove.push(key);
            })
        );

        Object.entries(sagas).forEach(([key, saga]) => {
          if (!(key in store.sagaTasks) && saga) {
            store.sagaTasks[key] = sagaMiddleware.run(saga);
          }
        });
        await removeSagas;
        store.sagaTasks = objectAssign(([k]) => !sagaKeysToRemove.includes(k))({}, store.sagaTasks);
      },
    } as StoreReducerEnhanced
  );

  return store;
};

export default configureStore;
