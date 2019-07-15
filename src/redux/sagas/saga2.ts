import { all, call, take } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

function* watchMinusAndLog() {
  while (true) {
    const action = yield take(actionTypes.MINUS);

    console.log('Logged MINUS', action.payload);
  }
}

function* saga1() {
  yield all([call(watchMinusAndLog)]);
}

export default saga1;
