import { createAction } from 'redux-actions';
import { readTopStories, readNewStories } from '../api-client';
import { fetchItems } from './item';

export const fetchedNew = createAction('FETCHED_NEW_STORIES');
export const fetchedTop = createAction('FETCHED_TOP_STORIES');

export function fetchNew() {
  return dispatch => {
    readNewStories().then(ids => {
      dispatch(fetchedNew(ids));
      dispatch(fetchItems(ids));
    });
  };
}

export function fetchTop() {
  return dispatch => {
    readTopStories().then(ids => {
      dispatch(fetchedTop(ids));
      dispatch(fetchItems(ids));
    });
  };
}
