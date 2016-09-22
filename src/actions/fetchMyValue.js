import axios from 'axios';

export const FETCH_MY_VALUE_INITIATED = "FETCH_MY_VALUE_INITIATED";
function fetchMyValueInitiated() {
  return {
    type: FETCH_MY_VALUE_INITIATED
  }
}

export const FETCH_MY_VALUE_COMPLETED = "FETCH_MY_VALUE_COMPLETED";
function fetchMyValueCompleted(data) {
  return {
    type: FETCH_MY_VALUE_COMPLETED,
    payload: data
  }
}

export function fetchMyValue() {
  return function (dispatch) {
    dispatch(fetchMyValueInitiated())
    const url = "https://jsonplaceholder.typicode.com/todos/137";

    return axios.get(url)
      .then(response => {
        dispatch(fetchMyValueCompleted(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
}
