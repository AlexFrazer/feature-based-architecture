import { call, put, takeLatest } from 'redux-saga/effects';
import api from '~/api';
import * as actions from './actions';

function* requestUsersSaga() {
  try {
    const { data } = yield call(() => api.get('/users'));
    yield put(actions.requestUsersSuccess(data));
  } catch (e) {
    yield put(actions.requestUsersFailure(e));
  }
}

export default function* usersSaga() {
  yield takeLatest(actions.requestUsers, requestUsersSaga);
}
