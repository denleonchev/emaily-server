import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';

import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout 
        amount={500}
        token={(token) => {this.props.handleToken(token)}}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="$5 for 5 credits"
      >
        <Button label="Add credits" raised />
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);