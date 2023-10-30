import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducer';

// Create a logger middleware instance
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
