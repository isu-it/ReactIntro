export const UPDATE_MY_VALUE = "UPDATE_MY_VALUE";

export function updateMyValue(value) {
  return {
    type: UPDATE_MY_VALUE,
    payload: value
  }
}
