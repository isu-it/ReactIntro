import { FETCH_MY_VALUE_INITIATED, FETCH_MY_VALUE_COMPLETED } from '../actions/fetchMyValue';

export default (state = "", action) => {
  switch (action.type) {
    case FETCH_MY_VALUE_INITIATED:
      return "(loading ...)";
      case FETCH_MY_VALUE_COMPLETED:
        return action.payload.title;
    default:
      return state;
  }
}
