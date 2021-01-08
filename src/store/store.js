import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

const persistedStore = { store, persistor };

export default persistedStore;
