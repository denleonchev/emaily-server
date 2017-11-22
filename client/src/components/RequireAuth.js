import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const requireAuth = (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillMount () {
      this.handleAuth(this.props)
    }
    componentWillReceiveProps (nextProps) {
      this.handleAuth(nextProps)
    }
    handleAuth (props) {
      const { auth, history } = props
      if (auth === false) {
        history.push('/')
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

  return withRouter(connect(mapStateToProps)(RequireAuth))
}

export default requireAuth
