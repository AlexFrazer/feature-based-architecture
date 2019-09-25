import { path } from 'lodash/fp';
import { createSelector } from 'reselect';
import { AppState } from '../../reducer';

export const selectLoading = path(['repositories', 'loading']);
export const getRepos = (state: AppState) => state.repositories.data;

export const selectRepos = createSelector(
  (state: AppState) => getRepos(state),
  values => Object.values(values),
);
