import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// logger tells us the state of redux after any action is fired 
// view p"rev state", "action", and "next state" in console
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;