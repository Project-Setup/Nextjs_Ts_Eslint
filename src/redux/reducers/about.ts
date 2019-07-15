import { Reducer } from 'redux';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  about: -3,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        about: state.about + action.payload,
      };
    case actionTypes.MINUS:
      return {
        ...state,
        about: state.about - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
