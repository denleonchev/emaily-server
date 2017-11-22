import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import AttachMoney from 'material-ui/svg-icons/editor/attach-money'

import * as actions from '../../actions'

class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => { this.props.handleToken(token) }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
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
