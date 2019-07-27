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
import objectAssign from '../common/objectAssign';
import { MakeStore } from './withRedux';

interface StoreReducerEnhanced<A extends Action = AnyAction> {
  commonReducers: ReducersMapObject<any, A>;
  asyncReducers: ReducersMapObject<any, A>;
  addReducer(key: string, asyncReducer: Reducer<any, A>): void;
  removeReducers(keys: string[]): void;
  injectReducers(reducers: ReducersMapObject<any, A>): void;
  substitueReducers(reducers: ReducersMapObject<any, A>): void;
}

export interface ReducerEnhancedStore<A extends Action = AnyAction>
  extends Store<any, A>,
    StoreReducerEnhanced<A> {}

const configureStore = <A extends Action = AnyAction>({
  commonReducers,
  enhancer,
  middlewareArray = [],
}: {
  commonReducers: ReducersMapObject<any, A>;
  enhancer(...args: Middleware[]): StoreEnhancer;
  middlewareArray?: Middleware[];
}): MakeStore<ReducerEnhancedStore<A>> => (initialState: any = {}) => {
  let keysToRemove: string[] = [];

  const createReducer = (asyncReducers?: ReducersMapObject<any, A>): Reducer<any, A> => (
    state,
    action
  ) => {
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
    } as StoreReducerEnhanced<A>
  );

  return store;
};

export default configureStore;
