import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'gatsby-plugin-firebase'
import AuthenticationButton from '~components/AuthenticationButton'
import { ButtonContainer, SwitchOption, VerticalSplitter } from './styles'

/**
 * Provides the functionality for signing in with Google
 * @param {function} setErrorFormState
 */
const signInWithGoogle = setErrorFormState => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().signInWithPopup(provider).catch(error => {
    setErrorFormState(error.message)
  })
}

/**
 * Provides the functionality for signing in with Github
 * @param {function} setErrorFormState
 */
const signInWithGithub = setErrorFormState => {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().signInWithPopup(provider).catch(error => {
    setErrorFormState(error.message)
  })
}

const authenticationFunctions = {
  Google: signInWithGoogle,
  Github: signInWithGithub,
  Email: () => 0,
}

const AuthenticationOptions = ({
  authenticationOptions,
  authenticationStateInformation,
  setAuthenticationFormState,
  setErrorFormState,
}) => {
  authenticationFunctions.Email = () => {
    setErrorFormState('')
    setAuthenticationFormState(authenticationStateInformation.emailState)
  }

  return (
    <ButtonContainer>
      {authenticationOptions.map(option => (
        <div key={option.option_name}>
          <AuthenticationButton
            action={authenticationFunctions[option.option_name]}
            backgroundColor={option.option_background_color}
            backgroundColorActive={option.option_background_color_active}
            color={option.option_color}
            firebase={firebase}
            setError={setErrorFormState}
            src={option.option_logo.url}
            text={`${authenticationStateInformation.buttonText} ${option.option_name}`}
          />
          <VerticalSplitter />
        </div>
      ))}
      <SwitchOption
        type="submit"
        onClick={() => {
          setErrorFormState('')
          setAuthenticationFormState(authenticationStateInformation.switchState)
        }}
      >
        {authenticationStateInformation.bottomText}
      </SwitchOption>
    </ButtonContainer>
  )
}

AuthenticationOptions.propTypes = {
  setAuthenticationFormState: PropTypes.func.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
  authenticationOptions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  authenticationStateInformation: PropTypes.shape().isRequired,
}

export default AuthenticationOptions
