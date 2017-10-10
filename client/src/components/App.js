import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Survey from './survey/Survey';
import Dashboard from './Dashboard';
import NewSurvey from './survey/NewSurvey';

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
              <Route exact path="/surveys" component={Dashboard} />
              <Route exact path="/survey"
                render={() => (
                  <Survey
                      onSubmit={() => {
                        console.log('Submit was handled');
                      }}
                  />
                )}
              />
              <Route exact path="/surveys/new"
                render={() => (
                  <NewSurvey />
                )}
              />
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