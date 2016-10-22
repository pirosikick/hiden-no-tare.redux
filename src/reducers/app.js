import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as actions from '../actions/app';
import * as storyActions from '../actions/story';
import * as itemActions from '../actions/item';

const initialState = new Map({
  newStories: [],
  topStories: [],
  items: new Map(),
});
const reducer = handleActions({
  [actions.init]: state => state,

  [storyActions.fetchedTop](state, action) {
    return state.set('topStories', action.payload);
  },
  [storyActions.fetchedNew](state, action) {
    return state.set('newStories', action.payload);
  },

  [itemActions.fetchItem](state, action) {
    return state.setIn(['items', action.payload.id], action.payload);
  },

}, initialState);

export default reducer;
