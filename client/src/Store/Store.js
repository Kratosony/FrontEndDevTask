import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from "redux-saga";
import createRootReducer from './RootReducer';
import * as sagas from "./Index";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

Object.values(sagas).forEach((element) => {
  sagaMiddleware.run(element);
});

export default store;
