import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos, selectLoading } from './selectors';
import { List } from '@totemic/elements';
import { useRepoActions } from '../hooks';
import RepositoryCard from './RepositoryCard';
import useQueryParams from '~/utils/useQueryParams';

export default function RepositoryList() {
  const { sort = 'created', direction = 'desc' } = useQueryParams();
  const { requestRepositories } = useRepoActions();
  const loading = useSelector(selectLoading);
  const repos = useSelector(selectRepos);
  React.useEffect(() => {
    requestRepositories({ sort, direction });
  }, [requestRepositories, sort, direction]);

  return (
    <List loading={loading} data={repos}>
      {RepositoryCard}
    </List>
  );
}
