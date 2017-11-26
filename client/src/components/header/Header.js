import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import IconButton from 'material-ui/IconButton'

import NavigationContainer from './NavigationContainer'
import './Header.css'

const Header = () => {
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
      iconElementRight={
        <NavigationContainer />
      }
      title="Emaily!"
    />
  )
}

export default Header
