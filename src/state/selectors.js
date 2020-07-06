export const allUsers = state => state.users.list || [];
export const currentUser = state => state.users.current || null;
export const isLoadingUser = state => state.users.loading || false;
export const allPosts = state => state.posts.list || [];
export const isLoadingPosts = state => state.posts.loading || false;
