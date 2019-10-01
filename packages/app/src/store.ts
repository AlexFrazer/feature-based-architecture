import { createStore, applyMiddleware, Store } from 'redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer, { AppState } from './reducer';
import saga from './saga';
import storage from 'redux-persist/lib/storage';
import { loggingMiddleware } from './middleware/logging';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
const persistConfig = {
  key: 'root',
  storage,
};

const initReducer = () => {
  const reducer = createReducer(history);
  return persistReducer(persistConfig, reducer);
};

export default (initialState?: AppState) => {
  const persistedReducer = initReducer();
  const store = createStore(
    persistedReducer,
    initialState!,
    composeWithDevTools(applyMiddleware(sagaMiddleware, loggingMiddleware())),
  );
  if (module.hot) {
    module.hot.accept('./reducer', async () => {
      const { default: nextReducer } = await import('./reducer');
      store.replaceReducer(persistReducer(persistConfig, nextReducer(history)));
    });
  }

  sagaMiddleware.run(saga);
  const persistor = persistStore(store);

  return { store, persistor };
};
