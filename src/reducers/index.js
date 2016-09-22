import { combineReducers } from 'redux';
import MyValueReducer from './myValueReducer';
import AjaxMessage from './ajaxMessageReducer';

const rootReducer = combineReducers({
  myValue: MyValueReducer,
  ajaxMessage: AjaxMessage
});

export default rootReducer;
