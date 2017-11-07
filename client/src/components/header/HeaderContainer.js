import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';

const HeaderContainer = (props) => {
        const { auth } = props;
        return (
          <Header auth={auth} />
        )
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(HeaderContainer);