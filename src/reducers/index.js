import { combineReducers } from 'redux';
import items from './items';
import view from './view';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  items,
  view,
  loadingBar: loadingBarReducer
});