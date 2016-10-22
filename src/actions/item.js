import { createAction } from 'redux-actions';
import { readItem } from '../api-client';

export const fetchItem = createAction('FETCHED_ITEM', id => readItem(id));

export function fetchItems(ids) {
  return dispatch => {
    ids.reduce(
      (promise, id) => promise.then(() => dispatch(fetchItem(id))),
      Promise.resolve()
    );
  };
}
