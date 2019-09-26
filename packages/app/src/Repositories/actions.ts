import { createAsyncActions } from 'redux-ts-utils';
import { ParsedQuery } from 'query-string';

export const [
  requestRepositories,
  requestRepositoriesSuccess,
  requestRepositoriesFailure,
] = createAsyncActions('repositories', (params: ParsedQuery) => params);
