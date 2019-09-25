import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from './actions';

export function useRepoActions() {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({
    requestRepositories: actions.requestRepositories,
  }, dispatch), [dispatch]);
}