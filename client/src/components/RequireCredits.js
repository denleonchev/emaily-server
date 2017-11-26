import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const requireCredits = (WrappedComponent) => {
  class RequireCredits extends Component {
    componentWillMount () {
      this.handleCredits(this.props)
    }
    componentWillReceiveProps (nextProps) {
      this.handleCredits(nextProps)
    }
    handleCredits (props) {
      const { auth, history } = props
      if (auth && auth.credits === 0) {
        history.push('/surveys')
      }
    }
    render () {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }

  function mapStateToProps (state) {
    return {
      auth: state.auth
    }
  }

  return withRouter(connect(mapStateToProps)(RequireCredits))
}

export default requireCredits
