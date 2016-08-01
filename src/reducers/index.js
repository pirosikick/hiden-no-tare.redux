import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import * as actions from '../actions';

const tasks = handleActions({
  [actions.addTask]: (state, action) => state.push(action.message),
  [actions.removeTask]: (state, action) => state.delete(action.index),
}, new List());

export default combineReducers({ tasks });
