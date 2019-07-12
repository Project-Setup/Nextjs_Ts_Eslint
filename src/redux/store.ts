import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import reducer, { defaultState } from './reducers';
import { MakeStore } from '../utils/redux/withRedux';

export type RootState = typeof defaultState;

const initStore: MakeStore = (initialState = {}) =>
  createStore(reducer, initialState, devToolsEnhancer({}));

export default initStore;
