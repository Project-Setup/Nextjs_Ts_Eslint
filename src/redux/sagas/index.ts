import { all, call, take, select } from 'redux-saga/effects';

function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action: ', action);
    console.log('state: ', state);
  }
}

function* rootSaga() {
  yield all([call(watchAndLog)]);
}

export default rootSaga;
