import {
  createStore,
  ReducersMapObject,
  combineReducers,
  Reducer,
  StoreEnhancer,
  Store,
  Action,
} from 'redux';
import objectAssign from '../common/objectAssign';
import { MakeStore } from './withRedux';

interface StoreReducerEnhanced {
  commonReducers: ReducersMapObject;
  asyncReducers: ReducersMapObject;
  addReducer(key: string, asyncReducer: Reducer): void;
  removeReducer(key: string): void;
  injectReducers(reducers: ReducersMapObject): void;
  substitueReducers(reducers: ReducersMapObject): void;
}

export interface ReducerEnhancedStore extends Store, StoreReducerEnhanced {}

const configureStore = (
  commonReducers: ReducersMapObject,
  enhancer: StoreEnhancer
): MakeStore<ReducerEnhancedStore> => (initialState: any = {}) => {
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

  const store: ReducerEnhancedStore = Object.assign(
    createStore(createReducer(), initialState, enhancer),
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
    } as StoreReducerEnhanced
  );

  return store;
};

export default configureStore;
