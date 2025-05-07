import {addPost, editPost} from "../../../../redux/store";

export const titleInitState = (actionType,title) =>
  actionType === 'ADD' ? '' : title;

export const shortDescriptionInitState =(actionType,shortDescription) =>
  actionType === 'ADD' ? '' : shortDescription;

export const contentInitState = (actionType,content) =>
  actionType === 'ADD' ? '' : content;

export const publishedDateInitState = (actionType,publishedDate) =>
  actionType === 'ADD' ? '' : publishedDate;

export const authorInitState = (actionType,author) =>
  actionType === 'ADD' ? '' : author;

export const categoryInitState = (actionType,category) =>
  actionType === 'ADD' ? '' : category;

export const addOrEditPost = (actionType, id, title, shortDescription,
                              content, publishedDate, category, author) => {
  if (actionType === 'ADD')
    return addPost({title, shortDescription, content, publishedDate, category, author})
  else if (actionType === 'EDIT')
    return editPost({id, title, shortDescription, content, publishedDate, category, author})
  else
    return 0;
}

export const getAddOrEditLabel = actionType => actionType === 'ADD' ? 'Add' : 'Edit';