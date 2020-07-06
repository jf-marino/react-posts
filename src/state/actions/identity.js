import {
  LOAD_USERS,
  LOAD_POSTS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  SELECT_CURRENT_USER,
} from "../types";

export const loadUsers = payload => ({ type: LOAD_USERS, payload });
export const loadUsersSuccess = payload => ({ type: LOAD_USERS_SUCCESS, payload });
export const loadUsersError = payload => ({ type: LOAD_USERS_ERROR, payload });

export const selectCurrentUser = payload => ({ type: SELECT_CURRENT_USER, payload });

export const loadPosts = payload => ({ type: LOAD_POSTS, payload });
export const loadPostsSuccess = payload => ({ type: LOAD_POSTS_SUCCESS, payload });
export const loadPostsError = payload => ({ type: LOAD_POSTS_ERROR, payload });
