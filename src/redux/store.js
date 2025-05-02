import {createStore} from 'redux';
import initialState from './initialState';

export const getAllPosts = ({posts}) => posts;

export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);

export const deletePostById = payload => ({type: 'DELETE_POST', postId: payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return [...statePart.filter(post => post.id!==action.postId)];
    default:
      return statePart;
  }
}

const reducer = (state, action) => {
  const newState = {
    posts: postsReducer(state.posts, action),
  };

  return newState;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;