import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import { ButtonContainer, SwitchOption, FormContainer, EntryField, Button, VerticalSplitter } from './styles'

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
  <FormContainer>
    <EntryField id="email" type="text" placeholder="Email" />
    <VerticalSplitter />
    <ButtonContainer>
      <Button onClick={() => resetPasswordWithEmail(setAuthenticationFormState, setErrorFormState)}>
        Reset
      </Button>
      <SwitchOption type="submit" onClick={() => setAuthenticationFormState('signinemail')}>
        Go back
      </SwitchOption>
    </ButtonContainer>
  </FormContainer>
)

AuthenticationReset.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
}

export default AuthenticationReset
