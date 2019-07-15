import { all, call, take } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

function* watchAddAndLog() {
  while (true) {
    const action = yield take(actionTypes.ADD);

    console.log('Logged ADDED', action.payload);
  }
}

function* saga1() {
  yield all([call(watchAddAndLog)]);
}

export default saga1;
