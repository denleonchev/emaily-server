import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
      switch (this.props.auth) {
        case null:
          return;
        case false:
          return (
            <ul className="right">
              <li>
                <a href="/auth/google">Login with Google</a>
              </li>
            </ul>
          );
      
        default:
          return (
            <ul className="right">
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          );
      }
    }
    render() {
        return (
            <nav className="nav-wrapper">
              <a className="left brand-logo">Emaily</a>
              {this.renderContent()}
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