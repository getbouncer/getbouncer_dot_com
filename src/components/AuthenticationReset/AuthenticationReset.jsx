import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import { Button, CenteredColumn, CenteredRow, Input, TextButton, VerticalSplitter } from '~styles/global'

const resetPasswordWithEmail = (setAuthenticationFormState, setErrorFormState) => {
  const email = document.getElementById('email').value
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      setAuthenticationFormState('signinemail')
    })
    .catch(error => {
      setErrorFormState(error.message)
    })
}

const AuthenticationReset = ({ setAuthenticationFormState, setErrorFormState }) => (
  <CenteredColumn>
    <Input id="email" type="text" placeholder="Email" />
    <VerticalSplitter />
    <CenteredRow>
      <Button onClick={() => resetPasswordWithEmail(setAuthenticationFormState, setErrorFormState)}>
        Reset
      </Button>
      <TextButton type="submit" onClick={() => setAuthenticationFormState('signinemail')}>
        Go back
      </TextButton>
    </CenteredRow>
  </CenteredColumn>
)

AuthenticationReset.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
}

export default AuthenticationReset
