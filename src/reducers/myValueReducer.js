import { UPDATE_MY_VALUE } from '../actions/updateMyValue';

export default (state = "", action) => {
  switch (action.type) {
    case UPDATE_MY_VALUE:
      return action.payload;
    default:
      return state;
  }
}
