import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import UserProfile from './UserProfile';

export default function Users() {
  return (
    <Switch>
      <Route path="/users" exact>
        <UserList />
      </Route>
      <Route path="/users/:id">
        <UserProfile />
      </Route>
    </Switch>
  );
}
