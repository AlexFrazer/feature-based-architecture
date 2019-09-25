import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Global, css } from '@emotion/core';
import { Provider as StoreProvider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import createStore, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';
import Repositories from './Repositories';

const store = createStore();

export default hot(function App() {
  return (
    <React.Suspense fallback={<div />}>
      <StoreProvider store={store}>
        <Global
          styles={css`
            html, body {
              padding: 0;
              margin: 0;
              color: #ffffff;
              font-family: 'roboto', sans-serif;
              background-color: #1a1a1a;
            }
            * {
              box-sizing: border-box;
            }
          `}
        />
        <ConnectedRouter history={history}>
            <Switch>
              <Route path="/repos">
                <Repositories />
              </Route>
              <Redirect to="/repos" />
            </Switch>
        </ConnectedRouter>
      </StoreProvider>
    </React.Suspense>
  );
});
