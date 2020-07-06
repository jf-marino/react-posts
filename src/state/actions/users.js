import axios from 'axios';
import {
  loadUser as loadUserFromStorage,
  loadUsers as loadUsersFromStorage,
  saveUser,
  saveUsers,
} from '../storage';
import {
  loadUsers as loadUsersIdentity,
  loadUsersSuccess,
  loadUsersError,
  selectCurrentUser,
} from './identity';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

// Produces a random number from `from` to `to`
// to be used as the client's id. This user will be
// considered the current user of the application.
const randUserId = (from = 0, to = 10) => {
  return Math.floor(Math.random() * to) + from;
}

export const loadUsers = () => async (dispatch) => {
  try {
    dispatch(loadUsersIdentity());

    // First load the current user from storage.
    const existingUser = loadUserFromStorage();
    if (existingUser) {
      dispatch(selectCurrentUser(existingUser));
    }

    // First try to get the users from storage so the
    // app can immediately display some data and then
    // load the latest posts anyway.
    const existingUsers = loadUsersFromStorage();
    if (existingUsers && existingUsers.length)
      dispatch(loadUsersSuccess(existingUsers));

    // Load the latest posts...
    const response = await axios.get(USERS_API);
    const users = response.data;
    dispatch(loadUsersSuccess(users));
    // Update the users in the storage.
    saveUsers(users);

    // If there was no current user saved in
    // the app storage, then we generate a
    // random id to select a user from the
    // user list. This will be done just once
    // unless the user clears the local storage.
    if (!existingUser) {
      const userId = randUserId(0, 10);
      const user = users.find(user => user.id === userId);
      dispatch(selectCurrentUser(user));
      // Store the picked user for next time.
      saveUser(user);
    }

  } catch (e) {
    dispatch(loadUsersError(e));
  }
};
