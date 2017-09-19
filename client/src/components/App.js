import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header'

const DashBoard = () => (
    <h2>DashBoard</h2>
)
const SurveyNew = () => (
    <h2>SurveyNew</h2>
)
const Landing = () => (
    <h2>Landing</h2>
)

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
        <div className="container">
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/serveys" component={DashBoard} />
                    <Route path="/serveys/new" component={SurveyNew} />
                </div>
            </Router>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(actions.fetchUser());
    }
  }
};

export default connect(null, mapDispatchToProps)(App);