import actionTypes from '../actions/actionTypes';
import { ActionObj } from '../actions/actions';

export const initialState = {
  count: 0,
};

const reducer = (state = initialState, action: ActionObj) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case actionTypes.MINUS:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
