import { UPDATE_MY_VALUE_INITIATED, UPDATE_MY_VALUE_SUCCESS, UPDATE_MY_VALUE_FAILURE } from '../actions/updateMyValue';

export default (state = "", action) => {
  switch (action.type) {
    case UPDATE_MY_VALUE_INITIATED:
      return "(updating with value " + action.payload + " ...)";
      case UPDATE_MY_VALUE_SUCCESS:
        return "(update success: "+ action.payload.myValue + " submitted)";
      case UPDATE_MY_VALUE_SUCCESS:
        return "(update failure: "+ action.payload + ")";
    default:
      return state;
  }
}
