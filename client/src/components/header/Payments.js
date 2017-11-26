import React, { Component } from 'react'
import { connect } from 'react-redux'

import AttachMoney from 'material-ui/svg-icons/editor/attach-money'
import MenuItem from 'material-ui/MenuItem'
import StripeCheckout from 'react-stripe-checkout'

import config from '../../config/keys'

import * as actions from '../../actions'

class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => { this.props.handleToken(token) }}
        stripeKey={config.stripePublishableKey}
        name="Emaily"
        description="$5 for 5 credits"
      >
        <MenuItem
          leftIcon={<AttachMoney />}
        >
          Buy credits
        </MenuItem>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
