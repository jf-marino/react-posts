import axios from 'axios';
import {
  loadPosts as loadPostsFromStorage,
  savePosts
} from "../storage";
import {
  loadPosts as loadPostsIdentity,
  loadPostsSuccess,
  loadPostsError
} from "./identity";

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

export const loadPosts = () => async (dispatch) => {
  try {
    dispatch(loadPostsIdentity());
    // Try to load the posts from localStorage first
    const existingPosts = loadPostsFromStorage();
    if (existingPosts && existingPosts.length)
      dispatch(loadPostsSuccess(existingPosts));

    // Still load the latest posts from the API
    // so we have the most up to date data
    dispatch(loadPostsIdentity());
    const response = await axios.get(POSTS_API);
    // And store the latest posts into the storage
    // for next time.
    savePosts(response.data);
    dispatch(loadPostsSuccess(response.data));
  } catch (e) {
    dispatch(loadPostsError(e));
  }
};
