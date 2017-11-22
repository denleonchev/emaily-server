import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import VPNKey from 'material-ui/svg-icons/communication/vpn-key'
import './GoogleLogin.css'

const GoogleLogin = () => (
  <RaisedButton
    className="header-google"
    containerElement={<a href="/auth/google" />}
    icon={<VPNKey color="#00bcd4" />}
    label="Sign in with Google"
  />
)

export default GoogleLogin
