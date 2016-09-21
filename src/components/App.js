import React, { Component } from 'react';

import MyInput from './MyInput';
import MyOtherInput from './MyOtherInput';

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        notFunny: "Hello there"
      };
    }

  myOtherInputChange(notFunny) {
    if (notFunny.includes("funny")) {
      this.setState({notFunny: notFunny.replace("funny", "*****")});
    } else {
      this.setState({notFunny});
    }
  }

  render() {
    return(
      <div>

        <MyInput />

        <br /><hr />

        <MyOtherInput
          value={this.state.notFunny}
          onChange={(value) => this.myOtherInputChange(value)}
        />
        
      </div>
    );
  }
}
