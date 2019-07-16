import {
  createStore,
  combineReducers,
  ReducersMapObject,
  Reducer,
  StoreEnhancer,
  Store,
  Action,
  AnyAction,
  Middleware,
} from 'redux';
import createSagaMiddleware, { Saga } from 'redux-saga';
import objectAssign from '../common/objectAssign';
import { MakeStore } from './withRedux';
import { SagaTasksProp } from './withReduxSaga';

export interface SagaMapObject {
  [key: string]: Saga;
}

interface StoreReducerEnhanced<A extends Action = AnyAction> extends SagaTasksProp {
  commonReducers: ReducersMapObject<any, A>;
  asyncReducers: ReducersMapObject<any, A>;
  addReducer(key: string, asyncReducer: Reducer<any, A>): void;
  removeReducers(keys: string[]): void;
  injectReducers(reducers: ReducersMapObject<any, A>): void;
  substitueReducers(reducers: ReducersMapObject<any, A>): void;
  addSaga(key: string, saga: Saga): void;
  removeSagas(keys: string[]): Promise<void>;
  injectSagas(sagas: SagaMapObject): void;
  substitueSagas(sagas: SagaMapObject): Promise<void>;
}

export interface ReducerEnhancedStore<A extends Action = AnyAction>
  extends Store<any, A>,
    StoreReducerEnhanced<A> {}

const configureStore = <A extends Action = AnyAction>({
  commonReducers,
  enhancer,
  middlewareArray = [],
  rootSaga,
}: {
  commonReducers: ReducersMapObject<any, A>;
  enhancer(...args: Middleware[]): StoreEnhancer;
  middlewareArray?: Middleware[];
  rootSaga?: Saga;
}): MakeStore<ReducerEnhancedStore<A>> => (initialState: any = {}) => {
  let keysToRemove: string[] = [];

  const createReducer = (asyncReducers?: ReducersMapObject<any, A>): Reducer<any, A> => (
    state,
    action
  ) => {
    let updatedState = state;
    if (keysToRemove.length > 0) {
      updatedState = objectAssign(([k]) => !keysToRemove.includes(k))({}, state);
      keysToRemove = [];
    }
    return combineReducers({
      ...commonReducers,
      ...asyncReducers,
    })(updatedState, action);
  };

  const sagaMiddleware = createSagaMiddleware();

  middlewareArray.unshift(sagaMiddleware);
  const store: ReducerEnhancedStore<A> = Object.assign(
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

      removeReducers: keys => {
        keys.forEach(key => {
          if (!key || !store.asyncReducers[key]) {
            return;
          }
          keysToRemove.push(key);
        });
        store.asyncReducers = objectAssign(([k]) => !keysToRemove.includes(k))(
          {},
          store.asyncReducers
        );
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

      removeSagas: async keys => {
        const sagaKeysToRemove: string[] = [];
        keys.forEach(key => {
          if (!key || !store.sagaTasks[key]) {
            return;
          }
          store.sagaTasks[key].cancel();
          sagaKeysToRemove.push(key);
        });
        store.sagaTasks = objectAssign(([k]) => !sagaKeysToRemove.includes(k))({}, store.sagaTasks);
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
    } as StoreReducerEnhanced<A>
  );

  return store;
};

export default configureStore;
