import React, { Component } from 'react';

export default class MyInput extends Component {
  constructor(props) {
      super(props);

      this.state = {
        inputValue: ""
      };
    }

    render() {
      return(
        <div>
          <h3>MyInput asks to enter something:</h3>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value})}/>
        </div>
      );
  }
}
