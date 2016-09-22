import axios from 'axios';

export const UPDATE_MY_VALUE_INITIATED = "UPDATE_MY_VALUE_INITIATED";
function updateMyValueInitiated(value) {
  return {
    type: UPDATE_MY_VALUE_INITIATED,
    payload: value
  }
}

export const UPDATE_MY_VALUE_SUCCESS = "UPDATE_MY_VALUE_SUCCESS";
function updateMyValueSuccess(data) {
  return {
    type: UPDATE_MY_VALUE_SUCCESS,
    payload: data
  }
}

export const UPDATE_MY_VALUE_FAILURE= "UPDATE_MY_VALUE_FAILURE";
function updateMyValueFailure(message) {
  return {
    type: UPDATE_MY_VALUE_FAILURE,
    payload: message
  }
}

export function updateMyValue(value) {
  return function (dispatch) {
    dispatch(updateMyValueInitiated(value));

    const url = "http://echo.jsontest.com/id/1/myValue/" + value;
    return axios.post(url)
        .then(response => {
            dispatch(updateMyValueSuccess(response.data));
        })
        .catch(error => {
            dispatch(updateMyValueFailure(error.response.data.error.message));
        });
  }
}
