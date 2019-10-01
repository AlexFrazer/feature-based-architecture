import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos, selectLoading } from './selectors';
import { List } from '@totemic/elements';
import { useRepoActions } from '../hooks';
import RepositoryCard from './RepositoryCard';
import useQueryParams from '~/utils/useQueryParams';

function useRequestRepos() {
  const { requestRepositories } = useRepoActions();
  const { sort = 'created', direction = 'desc' } = useQueryParams();
  React.useEffect(() => {
    requestRepositories({
      sort,
      direction,
    });
  }, [sort, direction, requestRepositories]);
}

export default function RepositoryList() {
  useRequestRepos();
  const loading = useSelector(selectLoading);
  const repos = useSelector(selectRepos);

  return (
    <List loading={loading} data={repos}>
      {RepositoryCard}
    </List>
  );
}
