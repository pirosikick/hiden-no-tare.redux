import { handleActions } from 'redux-actions';
import * as storyActions from '../actions/story';

const initialState = {
  news: [],
  tops: [],
};
const reducer = handleActions({
  [storyActions.fetchTop]: (state, action) => ({
    tops: action.payload,
    news: state.news,
  }),
  [storyActions.fetchNew]: (state, action) => ({
    tops: state.tops,
    news: action.payload,
  }),
}, initialState);

export default reducer;
