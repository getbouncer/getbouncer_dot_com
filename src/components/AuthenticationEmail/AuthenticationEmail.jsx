import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import { EntryField, Button, ButtonContainer, SwitchOption, OptionsContainer, VerticalSplitter } from './styles'

const signInWithEmail = (setAuthenticationFormState, setError) => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
    setError(error.message)
  })
}

const signUpWithEmail = (setAuthenticationFormState, setErrorFormState) => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const passwordConfirmation = document.getElementById('password_confirmation').value
  if (password !== passwordConfirmation) {
    setErrorFormState('Passwords do not match')
    return
  }
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      setErrorFormState('')
      const user = firebase.auth().currentUser
      user.sendEmailVerification()
      firebase.auth().signOut()
    })
    .catch(error => {
      setErrorFormState(error.message)
    })
}

const emailFunctions = {
  signinemail: signInWithEmail,
  signupemail: signUpWithEmail,
}

const AuthenticationEmail = ({
  authenticationStateInformation,
  forgotPasswordText,
  setAuthenticationFormState,
  setErrorFormState,
}) => (
  <OptionsContainer>
    <EntryField id="email" type="text" placeholder="Email" />
    {
      (authenticationStateInformation.state === 'signupemail') ?
        (<EntryField id="name" type="text" placeholder="Name" />) :
        (<></>)
    }
    <EntryField id="password" type="password" placeholder="Password" />
    {
      (authenticationStateInformation.state === 'signupemail') ?
        (<EntryField id="password_confirmation" type="password" placeholder="Confirm Password" />) :
        (<></>)
    }
    <OptionsContainer>
      <ButtonContainer>
        <Button onClick={() => emailFunctions[authenticationStateInformation.state](
          setAuthenticationFormState,
          setErrorFormState,
        )}
        >
          {authenticationStateInformation.buttonText}
        </Button>
        {
          (authenticationStateInformation.state === 'signinemail') ?
            (
              <SwitchOption type="submit" onClick={() => setAuthenticationFormState('resetpassword')}>
                { forgotPasswordText }
              </SwitchOption>
            ) :
            (<></>)
        }
      </ButtonContainer>
      <VerticalSplitter />
      <SwitchOption
        type="submit"
        onClick={() => {
          setErrorFormState('')
          setAuthenticationFormState(authenticationStateInformation.backState)
        }}
      >
        Go Back
      </SwitchOption>
      <SwitchOption
        type="submit"
        onClick={() => {
          setErrorFormState('')
          setAuthenticationFormState(authenticationStateInformation.switchState)
        }}
      >
        {authenticationStateInformation.bottomText}
      </SwitchOption>
    </OptionsContainer>
  </OptionsContainer>
)

AuthenticationEmail.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
  authenticationStateInformation: PropTypes.shape().isRequired,
  forgotPasswordText: PropTypes.string.isRequired,
}

export default AuthenticationEmail
