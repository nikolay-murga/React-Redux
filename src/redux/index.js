import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

const dev = process.env.NODE_ENV === `development` ? applyMiddleware(logger) : undefined;

export const store = createStore(reducer, dev);