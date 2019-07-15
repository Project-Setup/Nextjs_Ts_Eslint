import actionTypes from './actionTypes';

export const addNumber = (num: number) => ({
  type: actionTypes.ADD,
  payload: num,
});

export const minusNumber = (num: number) => ({
  type: actionTypes.MINUS,
  payload: num,
});
