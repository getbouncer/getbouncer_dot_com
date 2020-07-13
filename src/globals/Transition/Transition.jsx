import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeout = 500
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
)

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape().isRequired,
}

export default Transition
