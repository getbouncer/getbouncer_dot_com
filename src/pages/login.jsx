import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import { BackgroundContainer } from '~styles/global'
import Authentication from '~components/Authentication'

const Login = ({ data }) => {
  const [authenticationFormState, setAuthenticationFormState] = React.useState('signinmain')
  const [errorFormState, setErrorFormState] = React.useState('')

  const {
    authentication,
    backgroundImage,
  } = data

  React.useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          window.history.back()
          setErrorFormState('')
        } else if (user && !user.emailVerified) {
          setAuthenticationFormState('verifyemail')
          firebase.auth().signOut()
        } else {
          setAuthenticationFormState('signinmain')
        }
      })
  }, [])

  return (
    <>
      <BackgroundContainer Tag="div" fluid={backgroundImage.childImageSharp.fluid}>
        <Authentication
          data={authentication}
          authenticationFormState={authenticationFormState}
          setAuthenticationFormState={setAuthenticationFormState}
          errorFormState={errorFormState}
          setErrorFormState={setErrorFormState}
        />
      </BackgroundContainer>
    </>
  )
}

Login.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query AuthenticationQuery {
    backgroundImage: file(relativePath: { eq: "home-background.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    authentication: prismicLogin {
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
`

export default Login
