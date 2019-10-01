import { all, call, put, takeLatest } from 'redux-saga/effects';
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

function* requestUserSaga({
  payload: { userId },
}: ReturnType<typeof actions.requestUser>) {
  try {
    const { data } = yield call(() => api.get(`/users/${userId}`));
    yield put(actions.requestUserSuccess(data));
  } catch (e) {
    yield put(actions.requestUserFailure(e));
  }
}

export default function* usersSaga() {
  yield all([
    takeLatest(actions.requestUser, requestUserSaga),
    takeLatest(actions.requestUsers, requestUsersSaga),
  ]);
}
