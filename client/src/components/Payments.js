import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

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
        <button className="btn">
            Add credits
        </button>
      </StripeCheckout>   
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleToken: (token) => {
      dispatch(actions.handleToken(token));
    }
  }
}

export default connect(null, mapDispatchToProps)(Payments);