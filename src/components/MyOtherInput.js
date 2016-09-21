import React from 'react';

export default (props) => {
  return (
    <div>
      <h3>MyOtherInput tells not to type "funny":</h3>
      <input
        type="text"
        value={props.value}
        onChange={(event) => {props.onChange(event.target.value)}}/>
    </div>
  );
}
