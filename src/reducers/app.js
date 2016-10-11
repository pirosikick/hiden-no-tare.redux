import { handleActions } from 'redux-actions';
import * as actions from '../actions/app';

const initialState = {};
const reducer = handleActions({
  [actions.init]: state => state,
}, initialState);

export default reducer;
