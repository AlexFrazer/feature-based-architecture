import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';

export default function Users() {
  return (
    <Switch>
      <Route path="/users" exact>
        <UserList />
      </Route>
    </Switch>
  );
}
