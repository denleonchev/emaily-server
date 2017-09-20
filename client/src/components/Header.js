import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments'

class Header extends Component {
    renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return (
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          );
      
        default:
          return [
            <li key="1"><Payments /></li>,
            <li key="2">
              Credits: {this.props.auth.credits}
            </li>,
            <li key="3">
              <a href="/api/logout">Logout</a>
            </li>
          ];
      }
    }
    render() {
        return (
            <nav className="nav-wrapper">
              <Link to={this.props.auth ? '/serveys' : '/'} className=" brand-logo">
                Emaily
              </Link>
              <ul className="right">
                {this.renderContent()}
              </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);