import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Survey from './Survey'

const DashBoard = () => (
    <h2>DashBoard</h2>
)
const SurveyNew = () => (
    <h2>SurveyNew</h2>
)

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
          <div className="container">
              <Header />
              <Route exact path="/" component={Landing} />
              <Route path="/serveys" component={DashBoard} />
              <Route path="/survey"
                render={() => (
                  <Survey
                      onSubmit={() => {
                        console.log('Submit was handled');
                      }}
                  />
                )}
              />
              <Route path="/serveys/new" component={SurveyNew} />
          </div>
      </Router>
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