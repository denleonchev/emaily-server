import React from 'react'
import { connect } from 'react-redux'

import GoogleLogin from './GoogleLogin'
import Menu from './Menu'

const NavigationContainer = (props) => {
  const { auth } = props

  switch (auth) {
  case null:
    return null
  case false:
    return (
      <GoogleLogin />
    )
  default:
    return (
      <Menu
        auth={auth}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(NavigationContainer)
