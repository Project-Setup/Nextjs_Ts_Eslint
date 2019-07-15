import { Reducer } from 'redux';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  stats: -3,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        stats: state.stats + action.payload,
      };
    case actionTypes.MINUS:
      return {
        ...state,
        stats: state.stats - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
