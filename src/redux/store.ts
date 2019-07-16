import { applyMiddleware, Middleware } from 'redux';
import getConfig from 'next/config';
import configureStore, { ReducerEnhancedStore } from '../utils/redux/configureStore';
import commonReducers from './reducers';

export type Store = ReducerEnhancedStore;

const { publicRuntimeConfig } = getConfig();
const { isProd } = publicRuntimeConfig;

const enhancer = (...middlewareArray: Middleware[]) => {
  if (isProd) {
    return applyMiddleware(...middlewareArray);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const { composeWithDevTools } = require('redux-devtools-extension');
  return composeWithDevTools(applyMiddleware(...middlewareArray));
};

const initStore = configureStore({ commonReducers, enhancer });

export default initStore;
