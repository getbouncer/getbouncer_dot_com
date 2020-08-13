import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import { Button, CenteredRow, CenteredColumn, Input, TextButton, VerticalSplitter } from '~styles/global'

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
  <CenteredColumn>
    <Input id="email" type="text" placeholder="Email" />
    {
      (authenticationStateInformation.state === 'signupemail') ?
        (<Input id="name" type="text" placeholder="Name" />) :
        (<></>)
    }
    <Input id="password" type="password" placeholder="Password" />
    {
      (authenticationStateInformation.state === 'signupemail') ?
        (<Input id="password_confirmation" type="password" placeholder="Confirm Password" />) :
        (<></>)
    }
    <CenteredColumn>
      <CenteredRow>
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
              <TextButton type="submit" onClick={() => setAuthenticationFormState('resetpassword')}>
                { forgotPasswordText }
              </TextButton>
            ) :
            (<></>)
        }
      </CenteredRow>
      <VerticalSplitter />
      <TextButton
        type="submit"
        onClick={() => {
          setErrorFormState('')
          setAuthenticationFormState(authenticationStateInformation.backState)
        }}
      >
        Go Back
      </TextButton>
      <TextButton
        type="submit"
        onClick={() => {
          setErrorFormState('')
          setAuthenticationFormState(authenticationStateInformation.switchState)
        }}
      >
        {authenticationStateInformation.bottomText}
      </TextButton>
    </CenteredColumn>
  </CenteredColumn>
)

AuthenticationEmail.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
  authenticationStateInformation: PropTypes.shape().isRequired,
  forgotPasswordText: PropTypes.string.isRequired,
}

export default AuthenticationEmail
