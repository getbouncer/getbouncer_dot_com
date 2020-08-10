import React from 'react'
import PropTypes from 'prop-types'
import { SwitchTransition, Transition } from 'react-transition-group'
import AuthenticationEmail from '~components/AuthenticationEmail'
import AuthenticationOptions from '~components/AuthenticationOptions'
import AuthenticationReset from '~components/AuthenticationReset'
import AuthenticationVerify from '~components/AuthenticationVerify'
import {
  AuthenticationContainer,
  ErrorContainer,
  transitionStyles } from './styles'

const Authentication = ({
  authenticationFormState,
  data,
  errorFormState,
  setAuthenticationFormState,
  setErrorFormState }) => {
  const {
    authentication_option: authenticationOptions,
    forgot_password: forgotPasswordText,
    sign_in: signInText,
    sign_in_button: signInButton,
    sign_up: signUpText,
    sign_up_button: signUpButton,
    verify_email: verifyEmailText,
  } = data.prismicLogin.data

  return (
    <AuthenticationContainer>
      <SwitchTransition>
        <Transition
          key={authenticationFormState}
          timeout={200}
        >
          {state => (
            <div style={{
              ...transitionStyles[state],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              {(() => {
                switch (authenticationFormState) {
                  default:
                    return (
                      <AuthenticationOptions
                        setAuthenticationFormState={setAuthenticationFormState}
                        setErrorFormState={setErrorFormState}
                        authenticationOptions={authenticationOptions}
                        authenticationStateInformation={{
                          bottomText: signUpText,
                          buttonText: signInButton,
                          emailState: 'signinemail',
                          switchState: 'signupmain',
                        }}
                      />
                    )
                  case 'signupmain':
                    return (
                      <AuthenticationOptions
                        setAuthenticationFormState={setAuthenticationFormState}
                        setErrorFormState={setErrorFormState}
                        authenticationOptions={authenticationOptions}
                        authenticationStateInformation={{
                          bottomText: signInText,
                          buttonText: signUpButton,
                          emailState: 'signupemail',
                          switchState: 'signinmain',
                        }}
                      />
                    )
                  case 'signinemail':
                    return (
                      <AuthenticationEmail
                        setAuthenticationFormState={setAuthenticationFormState}
                        setErrorFormState={setErrorFormState}
                        authenticationStateInformation={{
                          buttonText: 'Sign in',
                          bottomText: signUpText,
                          state: 'signinemail',
                          backState: 'signinmain',
                          switchState: 'signupemail',
                        }}
                        forgotPasswordText={forgotPasswordText}
                      />
                    )
                  case 'signupemail':
                    return (
                      <AuthenticationEmail
                        setAuthenticationFormState={setAuthenticationFormState}
                        setErrorFormState={setErrorFormState}
                        authenticationStateInformation={{
                          buttonText: 'Sign up',
                          bottomText: signInText,
                          state: 'signupemail',
                          backState: 'signupmain',
                          switchState: 'signinemail',
                        }}
                        forgotPasswordText={forgotPasswordText}
                      />
                    )
                  case 'resetpassword':
                    return (
                      <AuthenticationReset
                        setAuthenticationFormState={setAuthenticationFormState}
                        setErrorFormState={setErrorFormState}
                      />
                    )
                  case 'verifyemail':
                    return (
                      <AuthenticationVerify
                        setAuthenticationFormState={setAuthenticationFormState}
                        verifyEmailText={verifyEmailText}
                      />
                    )
                }
              })()}
            </div>
          )}
        </Transition>
      </SwitchTransition>
      <ErrorContainer>
        {errorFormState}
      </ErrorContainer>
    </AuthenticationContainer>
  )
}

Authentication.propTypes = {
  data: PropTypes.shape().isRequired,
  authenticationFormState: PropTypes.string.isRequired,
  setAuthenticationFormState: PropTypes.func.isRequired,
  errorFormState: PropTypes.string.isRequired,
  setErrorFormState: PropTypes.func.isRequired,
}

export default Authentication
