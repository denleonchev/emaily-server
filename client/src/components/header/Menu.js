import React from 'react'
import { Link } from 'react-router-dom'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import Chip from 'material-ui/Chip'
import Dashboard from 'material-ui/svg-icons/action/dashboard'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'

import './Menu.css'
import Payments from './Payments'

const Menu = (props) => {
  const { auth } = props
  const hasNoCredits = () => (auth && auth.credits === 0)

  return (
    <div className="menu-container">
      <Chip className="menu-chip">
        {hasNoCredits() ? 'Buy credits for a survey!' : `You have ${auth.credits} credits`}
      </Chip>
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem containerElement={<Payments />} />
        <MenuItem
          containerElement={<Link to="/surveys" />}
          leftIcon={<Dashboard />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          containerElement={<Link to="/surveys/new" />}
          disabled={hasNoCredits()}
          leftIcon={
            <AddCircle className={hasNoCredits() ? 'disabled' : ''} />
          }
        >
          New Survey
        </MenuItem>
        <MenuItem
          containerElement={<a href="/api/logout"/>}
          leftIcon={<ExitToApp />}
        >
          Sign out
        </MenuItem>
      </IconMenu>
    </div>
  )
}

export default Menu
