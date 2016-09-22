import React from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={() => props.fetch()}>
        Fetch</button>
      <h3>MyDisplay says:</h3>
      {props.value}
    </div>
  );
}
