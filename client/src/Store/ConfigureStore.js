import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "./RootReducer";
import * as sagas from "./Index";

export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [];

  if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(
      window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        traceLimit: 25,
      })
    );
  }

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  Object.values(sagas).forEach((element) => {
    sagaMiddleware.run(element);
  });

  return store;
}
