import { put, takeLatest, call } from 'redux-saga/effects';
import api from '~/api';
import * as actions from './actions';

function* requestReposSaga() {
  try {
    const { data } = yield call(() => api.get('/users/AlexFrazer/repos'));
    yield put(actions.requestRepositoriesSuccess(data));
  } catch (e) {
    yield put(actions.requestRepositoriesFailure(e));
  }
}

export default function* reposSaga() {
  yield takeLatest(actions.requestRepositories, requestReposSaga);
}
