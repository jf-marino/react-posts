import { createStore, applyMiddleware } from "redux";
import { root } from './reducers';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const initial = {
  users: {
    list: [],
    current: null,
    loading: false,
    error: null,
  },
  posts: {
    list: [],
    loading: false,
    error: null,
  }
};

export const store = createStore(
  root,
  initial,
  applyMiddleware(
    thunk,
    // logger
  )
);
