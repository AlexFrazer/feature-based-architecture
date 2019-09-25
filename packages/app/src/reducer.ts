import { Reducer, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import repositories from './Repositories/reducer';

type InferState<T> = T extends (h: History) => Reducer<infer R> ? R : never;

const reducer = (history: History) => combineReducers({
  repositories,
  router: connectRouter(history),
});

export type AppState = InferState<typeof reducer>;

export default reducer;
