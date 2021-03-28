import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// We introduce the middleware here as well.
// ser middleware to logger
const middlewares = [logger]

//we can add multiple middlewares. hence we spread it out. Just add more middlewares to the list above.
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
