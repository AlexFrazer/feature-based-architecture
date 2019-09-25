import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import RepositoryList from './RepositoryList';

export default function Repositories() {
  return (
    <Switch>
      <Route exact path="/repos">
        <RepositoryList />
      </Route>
      <Route path="/repos/:id">
      </Route>
    </Switch>
  )
}