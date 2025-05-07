import {createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

export const getAllCategories = ({categories}) => categories;

export const getPostsByCategory = ({posts}, category) =>
  posts.filter(post => post.category.toLowerCase() === category.toLowerCase());

export const getAllPosts = ({posts}) => posts;

export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);

export const deletePostById = payload => ({type: 'DELETE_POST', postId: payload});

export const addPost = payload => ({type: 'ADD_POST', post: payload});

export const editPost = payload => ({type: 'EDIT_POST', post: payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return [...statePart.filter(post => post.id!==action.postId)];
    case 'ADD_POST':
      return [...statePart, {...action.post, id: shortid()}]
    case 'EDIT_POST':
      return statePart.map(post =>
      post.id === action.post.id ? { ...post, ...action.post }
        : post
      )
    default:
      return statePart;
  }
}

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
}

const reducer = (state, action) => {
  const newState = {
    posts: postsReducer(state.posts, action),
    categories: categoriesReducer(state.categories, action)
  };

  return newState;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;