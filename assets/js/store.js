import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authentication } from "./_reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = storeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  authentication
  // more reducers
});

const store = createStore(rootReducer, middlewares);

export default store;
