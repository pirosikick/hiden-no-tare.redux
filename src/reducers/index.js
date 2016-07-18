import { combineReducers } from 'redux';
import { List } from 'immutable';

const tasks = (state = new List(), action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return state.push(action.message);
    case 'REMOVE_TASK':
      return state.delete(action.index);
    default:
      return state;
  }
};

export default combineReducers({ tasks });
