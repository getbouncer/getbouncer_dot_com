import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

global.smartphoneBreakpoint = 920
global.tabletBreakpoint = 1168
global.largeDesktop = 1600

export const LargeDesktop = props => {
  const { children } = props
  return <MediaQuery minWidth={global.largeDesktop + 1}>{children}</MediaQuery>
}

export const Desktop = props => {
  const { children } = props
  return <MediaQuery maxWidth={global.largeDesktop}>{children}</MediaQuery>
}

export const Tablet = props => {
  const { children } = props
  return <MediaQuery maxWidth={global.tabletBreediakpoint}>{children}</MediaQuery>
}

export const Smartphone = props => {
  const { children } = props
  return <MediaQuery maxWidth={global.smartphoneBreakpoint}>{children}</MediaQuery>
}

export const AboveTablet = props => {
  const { children } = props
  return <MediaQuery minWidth={global.tabletBreakpoint + 1}>{children}</MediaQuery>
}

export const AboveSmartphone = props => {
  const { children } = props
  return <MediaQuery minWidth={global.smartphoneBreakpoint + 1}>{children}</MediaQuery>
}

LargeDesktop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

LargeDesktop.defaultProps = {
  children: null,
}

Desktop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Desktop.defaultProps = {
  children: null,
}

Tablet.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Tablet.defaultProps = {
  children: null,
}

Smartphone.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

Smartphone.defaultProps = {
  children: null,
}

AboveTablet.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

AboveTablet.defaultProps = {
  children: null,
}

AboveSmartphone.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

AboveSmartphone.defaultProps = {
  children: null,
}
