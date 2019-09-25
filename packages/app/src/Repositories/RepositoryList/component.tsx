import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectRepos, selectLoading } from './selectors';
import { List } from '@totemic/elements';
import { useRepoActions } from '../hooks';
import RepositoryCard from './RepositoryCard';

export default function RepositoryList() {
  const { requestRepositories } = useRepoActions();
  const loading = useSelector(selectLoading);
  const repos = useSelector(selectRepos);
  React.useEffect(() => {
    requestRepositories({}); 
  }, [requestRepositories]);

  return (
    <List loading={loading} data={repos}>
      {RepositoryCard}
    </List>
  )
}
