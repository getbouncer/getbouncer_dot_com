import React from 'react'
import PropTypes from 'prop-types'
import { Button, VerticalSplitter } from './styles'

const AuthenticationVerify = ({
  setAuthenticationFormState,
  verifyEmailText,
}) => (
  <div>
    { verifyEmailText }
    <VerticalSplitter />
    <Button onClick={() => setAuthenticationFormState('signinemail')}>
      Continue
    </Button>
  </div>
)

AuthenticationVerify.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  verifyEmailText: PropTypes.string.isRequired,
}

export default AuthenticationVerify
