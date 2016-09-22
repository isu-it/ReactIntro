import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyInput from '../components/MyInput';
import { updateMyValue } from '../actions/updateMyValue';

class MyInputContainer extends Component {
  render() {
    return (
      <MyInput
        onSubmit={(value) => this.props.updateMyValue(value)} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMyValue }, dispatch);
}

export default connect(null, mapDispatchToProps)(MyInputContainer);
