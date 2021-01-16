import { createStore, applyMiddleware, compose } from "redux";
import loadImgReducer from "./loadImgReducer";
import { loadMiddleWare } from "./loadMiddleWare";

export const store = createStore(
  loadImgReducer,
  compose(
    applyMiddleware(loadMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (noop) => noop
  )
);
