import { keyBy } from 'lodash/fp';
import { reduceReducers, handleAction } from 'redux-ts-utils';
import * as actions from './actions';

interface State {
  readonly loading: boolean;
  readonly data: Record<string, any>;
}

const initialState: State = {
  loading: false,
  data: {},
};

export default reduceReducers(
  [
    handleAction(actions.requestUsers, state => {
      state.loading = true;
    }),
    handleAction(actions.requestUsersSuccess, (state, { payload }) => {
      state.loading = false;
      state.data = keyBy('id', payload);
    }),
    handleAction(actions.requestUsersFailure, state => {
      state.loading = false;
    }),
  ],
  initialState,
);
