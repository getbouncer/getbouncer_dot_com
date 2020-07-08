import React from 'react'
import PropTypes from 'prop-types'
import MainContainer from './styles'

const Container = ({ children, isLarge }) => <MainContainer isLarge={isLarge}>{children}</MainContainer>

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isLarge: PropTypes.bool,
}

Container.defaultProps = {
  isLarge: false,
}

export default Container
