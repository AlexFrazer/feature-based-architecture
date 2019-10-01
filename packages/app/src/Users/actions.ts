import { noop, identity } from 'lodash/fp';
import { createAsyncActions } from 'redux-ts-utils';

export const [
  requestUsers,
  requestUsersSuccess,
  requestUsersFailure,
] = createAsyncActions(
  'users',
  noop,
  (users: Array<any>) => users,
  (e: Error) => e,
);

export const [
  requestUser,
  requestUserSuccess,
  requestUserFailure,
] = createAsyncActions(
  'user',
  ({ userId }: { userId: string }) => ({ userId }),
  (users: any) => users,
  (e: Error) => e,
);
