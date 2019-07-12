import { Action } from 'redux';
import actionTypes from './actionTypes';

export interface ActionObj<T = any> extends Action<string> {
  payload: T;
}

export const addNumber = (num: number) => ({
  type: actionTypes.ADD,
  payload: num,
});

export const minusNumber = (num: number) => ({
  type: actionTypes.MINUS,
  payload: num,
});
