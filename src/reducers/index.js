import { combineReducers } from 'redux';
import MyValueReducer from './myValueReducer';

const rootReducer = combineReducers({
  myValue: MyValueReducer
});

export default rootReducer;
