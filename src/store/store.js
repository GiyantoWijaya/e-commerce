import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// middlewares
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
// Root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
