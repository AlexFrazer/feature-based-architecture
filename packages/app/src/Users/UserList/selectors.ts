import { createSelector } from 'reselect';
import { AppState } from '~/reducer';

export const selectIsLoading = (state: AppState) => state.users.loading;
export const selectData = (state: AppState) => state.users.data;

export const selectUsers = createSelector(
  selectData,
  data => Object.values(data),
);
