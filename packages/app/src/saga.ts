import { fork, all } from 'redux-saga/effects';
import reposSaga from './Repositories/saga';
import usersSaga from './Users/saga';

export default function* saga() {
  yield all([fork(reposSaga), fork(usersSaga)]);
}
