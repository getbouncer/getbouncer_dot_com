import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonLink, InternalLink } from './styles'

const CtaButton = ({ inverted, isInternal, text, to }) => {
  if (to) {
    if (isInternal) {
      return (
        <InternalLink to={to} inverted={inverted}>
          {text}
        </InternalLink>
      )
    }

    return (
      <ButtonLink href={to} inverted={inverted}>
        {text}
      </ButtonLink>
    )
  }

  return <Button inverted={inverted}>{text}</Button>
}

CtaButton.propTypes = {
  inverted: PropTypes.bool,
  isInternal: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
}

CtaButton.defaultProps = {
  inverted: false,
  isInternal: false,
  to: null,
}

export default CtaButton
