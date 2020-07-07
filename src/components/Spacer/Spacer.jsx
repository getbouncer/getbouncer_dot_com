import React from 'react'
import PropTypes from 'prop-types'
import Height from './styles'

const Spacer = ({ height }) => <Height height={height} />

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
}

export default Spacer
