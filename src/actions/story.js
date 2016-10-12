import { createAction } from 'redux-actions';
import Fetcher from 'fetchr';

// [TODO]
const fetcher = new Fetcher({ xhrPath: '/api-proxy' });

const fetchNew = createAction('FETCHED_NEW_STORIES', () => (
  fetcher.read('stories.new', {}).then(({ data }) => data)
));
const fetchTop = createAction('FETCHED_TOP_STORIES', () => (
  fetcher.read('stories.top', {}).then(({ data }) => data)
));

export { fetchNew, fetchTop };
