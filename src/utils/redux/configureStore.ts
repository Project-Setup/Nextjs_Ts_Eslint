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
import { SagaTaskProp } from './withReduxSaga';

interface StoreReducerEnhanced extends Partial<SagaTaskProp> {
  commonReducers: ReducersMapObject;
  asyncReducers: ReducersMapObject;
  addReducer(key: string, asyncReducer: Reducer): void;
  removeReducer(key: string): void;
  injectReducers(reducers: ReducersMapObject): void;
  substitueReducers(reducers: ReducersMapObject): void;
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
        delete store.asyncReducers[key];
        keysToRemove.push(key);
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      injectReducers: reducers => {
        objectAssign()(store.asyncReducers, reducers);
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      substitueReducers: reducers => {
        keysToRemove.push(...Object.keys(store.asyncReducers).filter(k => !(k in reducers)));
        store.asyncReducers = reducers;
        store.replaceReducer(createReducer(store.asyncReducers));
      },

      sagaTask: rootSaga ? sagaMiddleware.run(rootSaga) : undefined,
    } as StoreReducerEnhanced
  );

  return store;
};

export default configureStore;
