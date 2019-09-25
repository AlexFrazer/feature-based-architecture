import { fork, all } from 'redux-saga/effects';
import reposSaga from './Repositories/saga';

export default function* saga() {
  yield all([fork(reposSaga)]);
}
