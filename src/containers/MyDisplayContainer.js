import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyDisplay from '../components/MyDisplay';
import { fetchMyValue } from '../actions/fetchMyValue';

class MyDisplayContainer extends Component {
  render() {
    return (
      <MyDisplay
        value={this.props.myValue}
        fetch={this.props.fetchMyValue}/>
    );
  }
}

function mapStateToProps({ myValue }) {
  return { myValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMyValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDisplayContainer);
