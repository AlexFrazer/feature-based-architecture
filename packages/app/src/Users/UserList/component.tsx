import * as React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@totemic/elements';
import { selectUsers, selectIsLoading } from './selectors';
import UserCard from './UserCard';
import { useUserActions } from '../hooks';
import { useQueryParam } from '~/utils/useQueryParams';

export default function UserList() {
  // const sort = useQueryParam('sort', 'asc');
  // const sortBy = useQueryParam('sortBy', 'name');
  const users = useSelector(selectUsers);
  const loading = useSelector(selectIsLoading);
  const { requestUsers } = useUserActions();
  React.useEffect(() => {
    requestUsers();
  }, [requestUsers]);

  return (
    <List loading={loading} data={users}>
      {UserCard}
    </List>
  );
}
