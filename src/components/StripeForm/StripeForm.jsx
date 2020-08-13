import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import { CenteredColumn, Button, Input } from '~styles/global'
import useScore from '~hooks/useScore'

const StripeForm = ({ stripeCallback }) => (
  <CenteredColumn>
    <div>
      Calculating your fraud score requires a restricted read-only
      Stripe API key. Create a Stripe API key and set Disputes and
      Transactions as read sources. This limits our access and is
      necessary to provide use the information necessary to
      produce your fraud score. You can revoke this access at
      any time.
    </div>
    <Input id="stripe" type="text" placeholder="Stripe API Key" />
    <Button onClick={() => {
      firebase
        .auth()
        .currentUser
        .getIdToken()
        .then(idToken => useScore(stripeCallback, idToken, null, {
          stripe_api_key: document.getElementById('stripe').value,
        }))
    }}
    >
      Continue
    </Button>
  </CenteredColumn>
)

StripeForm.propTypes = {
  stripeCallback: PropTypes.func,
}

StripeForm.defaultProps = {
  stripeCallback: () => {},
}

export default StripeForm
