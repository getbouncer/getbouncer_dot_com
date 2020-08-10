import React from 'react'
import PropTypes from 'prop-types'
import { CompanyImage, ButtonContainer } from './styles'

const AuthenticationButton = ({ action, backgroundColor, backgroundColorActive, color, setError, src, text }) => (
  <ButtonContainer
    backgroundColor={backgroundColor}
    backgroundColorActive={backgroundColorActive}
    color={color}
    onClick={() => action(setError)}
  >
    <CompanyImage src={src} />
    <div>{ text }</div>
  </ButtonContainer>
)

AuthenticationButton.propTypes = {
  action: PropTypes.func,
  backgroundColor: PropTypes.string,
  backgroundColorActive: PropTypes.string,
  color: PropTypes.string,
  setError: PropTypes.func,
  src: PropTypes.string,
  text: PropTypes.string,
}

AuthenticationButton.defaultProps = {
  action: () => 0,
  backgroundColor: '#FFFFFF',
  backgroundColorActive: '#CDCDCD',
  color: '#000000',
  setError: () => 0,
  src: '/',
  text: 'Signin',
}

export default AuthenticationButton
