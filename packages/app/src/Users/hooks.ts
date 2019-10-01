import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function useUserActions() {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        {
          requestUsers: actions.requestUsers,
          requestUser: actions.requestUser,
        },
        dispatch,
      ),
    [dispatch],
  );
}
