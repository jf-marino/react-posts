import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, loadPosts } from '../../state/actions';
import { PostList } from '../postList';
import {
  currentUser,
  allPosts,
  allUsers,
  isLoadingPosts,
  isLoadingUser
} from '../../state/selectors';
import {
  Container,
  Title,
  Loading,
} from './styles';

export const Application = () => {
  const dispatch = useDispatch();
  const current = useSelector(currentUser);
  const users = useSelector(allUsers);
  const posts = useSelector(allPosts);
  const loadingPosts = useSelector(isLoadingPosts);
  const loadingUsers = useSelector(isLoadingUser);

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPosts());
  }, []);

  return (
    <Container>
      <Title>
        Posts
        {(loadingPosts || loadingUsers) && <Loading>Loading...</Loading>}
      </Title>
      <PostList posts={posts} users={users} user={current} />
    </Container>
  )
};
