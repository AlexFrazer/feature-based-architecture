import { put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

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