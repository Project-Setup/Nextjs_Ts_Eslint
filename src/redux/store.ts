import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import commonReducers from './reducers';
import configureStore, { ReducerEnhancedStore } from '../utils/redux/configureStore';

export type Store = ReducerEnhancedStore;

const initStore = configureStore(commonReducers, devToolsEnhancer({}));

export default initStore;
