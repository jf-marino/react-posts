import React from 'react';
import {
  Container,
  Top,
  Content,
  Bottom,
  Title,
  Author,
  You,
} from './styles';

// Capitalizes a string but unlike the CSS
// text-transform variant of `capitalize` it
// will only capitalize the first letter of
// the entire string, not every word.
const capitalize = (text = '') => {
  const s = text.trim();
  return s.length
    ? [s[0].toUpperCase(), ...s.slice(1)]
    : s
}

const Username = ({ user, post }) => post.username === user.username
  ? <You>You posted</You>
  : <Author>Posted by <u>{post.username}</u> from {post.city}</Author>;

export const Post = ({ post, user }) => (
  <Container>
    <Top>
      <Content>{capitalize(post.body)}</Content>
    </Top>
    <Bottom>
      <Title>{post.title}</Title>
      <Username user={user} post={post} />
    </Bottom>
  </Container>
);
