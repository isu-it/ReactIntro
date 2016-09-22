import React, { Component } from 'react';
import { connect } from 'react-redux';

import MyDisplay from '../components/MyDisplay';

class MyDisplayContainer extends Component {
  render() {
    return (
      <MyDisplay value={this.props.myValue.myValue}/>
    );
  }
}

function mapStateToProps(myValue) {
  return { myValue };
}

export default connect(mapStateToProps)(MyDisplayContainer);
