import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// create custom middlewares
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("paylooad: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next State: ", store.getState());
};

// middlewares
const middleWares = [loggerMiddleware];
// const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
// Root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
