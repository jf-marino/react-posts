const save = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

const load = (name) => {
  return JSON.parse(localStorage.getItem(name));
}

export const savePosts = posts => save('posts', posts);
export const saveUser = user => save('currentUser', user);
export const saveUsers = users => save('users', users);

export const loadPosts = () => load('posts');
export const loadUser = () => load('currentUser');
export const loadUsers = () => load('users');


