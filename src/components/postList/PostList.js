import React from 'react';
import { Post } from "../post";
import {
  Container,
  List,
  ListItem
} from './styles';

const postedBy = (posts, users) => posts.map((post = {}) => {
  const user = users.find(u => u.id === post.userId);
  return {
    ...post,
    username: user && user.username,
    city: user && user.address && user.address.city
  };
});

export const PostList = ({ posts = [], users = [], user = null }) => {
  const postsWithUsernames = postedBy(posts, users);
  return (
    <Container>
      <List>
        { postsWithUsernames.map(post => (
          <ListItem key={post.id}>
            <Post post={post} user={user} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
