import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import IconButton from 'material-ui/IconButton'

import GoogleLogin from './GoogleLogin'
import Menu from './Menu'
import './Header.css'

const renderNavigation = (auth) => {
  switch (auth) {
  case null:
    return null
  case false:
    return (
      <GoogleLogin />
    )
  default:
    return (
      <Menu auth={auth} />
    )
  }
}

const Header = (props) => {
  const { auth } = props

  return (
    <AppBar
      className="header"
      iconElementLeft={
        <IconButton
          containerElement={<Link to="/" />}
        >
          <CommunicationEmail />
        </IconButton>
      }
      iconElementRight={renderNavigation(auth)}
      title="Emaily!"
    />
  )
}

export default Header
