import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import VPNKey from 'material-ui/svg-icons/communication/vpn-key';

const styles = {
  marginTop: 5
}

const GoogleLogin = () => (
    <RaisedButton
      containerElement={<a href="/auth/google" />}
      label="Sign in with Google"
      icon={<VPNKey color="#00bcd4" />}
      style={styles}
    />
);

export default GoogleLogin;
