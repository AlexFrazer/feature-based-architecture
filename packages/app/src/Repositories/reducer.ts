import { reduceReducers, handleAction } from 'redux-ts-utils';
import * as actions from './actions';

interface State {
  readonly loading: boolean;
  readonly data: Record<string, {}>;
}

const initialState: State = {
  loading: false,
  data: {},
};

export default reduceReducers<State>(
  [
    handleAction(actions.requestRepositories, state => {
      state.loading = true;
    }),
    handleAction(actions.requestRepositoriesSuccess, state => {
      state.loading = false;
    }),
    handleAction(actions.requestRepositoriesFailure, state => {
      state.loading = false;
    }),
  ],
  initialState,
);
