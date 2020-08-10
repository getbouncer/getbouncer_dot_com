import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import Authentication from '~components/Authentication'

const AccessContainer = ({ loadingPage, privatePage }) => {
  const [authUser, setAuthUser] = React.useState(null)
  const [authenticationFormState, setAuthenticationFormState] = React.useState('signinmain')
  const [errorFormState, setErrorFormState] = React.useState('')
  const [loadedState, setLoadedState] = React.useState(null)

  const data = useStaticQuery(graphql`
    query AuthenticationQuery {
      prismicLogin {
        data {
          sign_in
          sign_up
          sign_in_button
          sign_up_button
          forgot_password
          verify_email
          authentication_option {
            option_logo {
              url
            }
            option_name
            option_background_color
            option_background_color_active
            option_color
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          setAuthUser(user)
          setLoadedState('private')
          setErrorFormState('')
        } else {
          if (user && !user.emailVerified) {
            setAuthenticationFormState('verifyemail')
            firebase.auth().signOut()
          }
          setLoadedState('public')
        }
      })
  }, [])

  switch (loadedState) {
    case 'private':
      return privatePage(authUser, () => {
        firebase.auth().signOut()
        setLoadedState('login')
        setAuthUser(null)
      })

    case 'public':
      return (
        <Authentication
          data={data}
          authenticationFormState={authenticationFormState}
          setAuthenticationFormState={setAuthenticationFormState}
          errorFormState={errorFormState}
          setErrorFormState={setErrorFormState}
        />
      )

    default:
      return loadingPage()
  }
}

AccessContainer.propTypes = {
  loadingPage: PropTypes.func.isRequired,
  privatePage: PropTypes.func.isRequired,
}

export default AccessContainer
