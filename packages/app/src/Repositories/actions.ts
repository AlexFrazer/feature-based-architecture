import { createAsyncActions } from 'redux-ts-utils';

export const [
  requestRepositories,
  requestRepositoriesSuccess,
  requestRepositoriesFailure,
] = createAsyncActions(
  'repositories',
);