import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyInput from '../components/MyInput';
import { updateMyValue } from '../actions/updateMyValue';

class MyInputContainer extends Component {
  render() {
    return (
      <MyInput
        ajaxMessage={this.props.ajaxMessage}
        onSubmit={(value) => this.props.updateMyValue(value)} />
    );
  }
}

function mapStateToProps({ajaxMessage}) {
  return { ajaxMessage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMyValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInputContainer);
