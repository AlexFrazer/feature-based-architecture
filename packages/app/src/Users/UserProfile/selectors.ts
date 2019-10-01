import { get } from 'lodash/fp';
import { createSelector } from 'reselect';
import { selectData } from '../UserList/selectors';
import { AppState } from '~/reducer';

export const selectUserById = createSelector(
  selectData,
  (_state: AppState, id?: string) => id,
  (data, id) => {
    console.log(data, id);
    return get(id || '', data);
  },
);
