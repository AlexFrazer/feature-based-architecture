import { createStore, applyMiddleware, Store } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer, { AppState } from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default (initialState?: AppState): Store<AppState> => {
  const store = createStore(
    createReducer(history),
    initialState!,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(saga);
  return store;
};
