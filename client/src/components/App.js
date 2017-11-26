import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Header from './header/Header'
import Landing from './landing/Landing'
import Dashboard from './Dashboard'
import NewSurveyContainer from './survey/NewSurveyContainer'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <Router>
          <div className="container">
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />

              <Route exact path="/surveys/new"
                render={() => (
                  <NewSurveyContainer />
                )}
              />
          </div>
      </Router>
    )
  }
}

export default connect(null, actions)(App)
