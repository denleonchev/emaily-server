import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';

import './Header.css';
import Payments from './Payments'

class Header extends Component {
    renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return (
            <Button href="/auth/google" label="Login with Google" raised />
          );
        default:
          return [
            <span key="1"><Payments /></span>,
            <span key="2">
              Credits: {this.props.auth.credits}
            </span>,
            <Button href="/api/logout" label="Logout" raised />
          ];
      }
    }
    render() {
        return (
          <AppBar className="red-bar">
              <Link to={this.props.auth ? '/serveys' : '/'}>
                Emaily
              </Link>
              <Navigation type='horizontal'>
                {this.renderContent()}
              </Navigation>
          </AppBar>
        )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);