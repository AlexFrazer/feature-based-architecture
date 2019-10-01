import * as React from 'react';
import { curryN } from 'ramda';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserById } from './selectors';
import { useUserActions } from '../hooks';
import { AppState } from '../../reducer';

const selectUserSelector = curryN(2, (id: string, state: AppState) =>
  selectUserById(state, id),
);

function useUser() {
  const { id } = useParams<{ id: string }>();
  const { requestUser } = useUserActions();

  React.useEffect(() => {
    requestUser({ userId: id });
  }, [requestUser]);

  const selectUser = React.useCallback(selectUserSelector(id), [id]);

  return useSelector(selectUser);
}

export default function UserProfile() {
  const user = useUser();
  if (!user) {
    return null;
  }
  return (
    <div>
      <header>
        <img src={user.avatar_url} alt={user.login} />
        <h1>{user.name}</h1>
      </header>
    </div>
  );
}
