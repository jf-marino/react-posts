import { produce } from 'immer';
import {
  LOAD_USERS,
  LOAD_POSTS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  SELECT_CURRENT_USER,
} from "./types";

const loadUsers = (state) => {
  state.users.loading = true;
  state.users.error = null;
  return state;
};

const loadUsersSuccess = (state, { payload }) => {
  state.users.list = payload;
  state.users.loading = false;
  return state;
};

const loadUsersError = (state, { payload: error }) => {
  state.users.error = error;
  return state;
};

const loadPosts = (state) => {
  state.posts.loading = true;
  state.posts.error = null;
  return state;
};

const loadPostsSuccess = (state, { payload }) => {
  state.posts.list = payload;
  state.posts.loading = false;
  return state;
};

const loadPostsError = (state, { payload: error }) => {
  state.posts.loading = false;
  state.posts.error = error;
  return state;
};

const selectCurrentUser = (state, { payload }) => {
  state.users.current = payload;
  return state;
};

export const root = produce((state, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return loadUsers(state, action);
    case LOAD_USERS_SUCCESS:
      return loadUsersSuccess(state, action);
    case LOAD_USERS_ERROR:
      return loadUsersError(state, action);
    case LOAD_POSTS:
      return loadPosts(state, action);
    case LOAD_POSTS_SUCCESS:
      return loadPostsSuccess(state, action);
    case LOAD_POSTS_ERROR:
      return loadPostsError(state, action);
    case SELECT_CURRENT_USER:
      return selectCurrentUser(state, action);
  }
});
