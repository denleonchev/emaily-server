import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'
import HeaderContainer from './header/HeaderContainer'
import Landing from './landing/Landing'
import Dashboard from './Dashboard'
import NewSurvey from './survey/NewSurvey'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <Router>
          <div className="container">
              <HeaderContainer />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />

              <Route exact path="/surveys/new"
                render={() => (
                  <NewSurvey />
                )}
              />
          </div>
      </Router>
    )
  }
}

export default connect(null, actions)(App)
