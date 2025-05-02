import {createStore} from 'redux';
import initialState from './initialState';

export const getAllPosts = ({posts}) => posts;

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
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