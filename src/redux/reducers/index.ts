import { combineReducers } from 'redux';
import count, { initialState as countInitialState } from './count';

export const defaultState = {
  count: countInitialState,
};

const rootReducer = combineReducers({ count });

export default rootReducer;
