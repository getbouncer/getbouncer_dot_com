import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme, reset, root, fonts } from '~styles'
import Header from '~components/Header'
import Footer from '~components/Footer'

const globalStyle = css`
  ${reset}
  ${root}

  @font-face {
    font-family: 'Halyard Text';
    font-style: normal;
    font-weight: normal;
    src: local('Halyard Text'), local('Halyard-Text'), url(${fonts.HalyardBook}) format('woff');
  }

  @font-face {
    font-family: 'Halyard Display';
    font-style: normal;
    font-weight: 500;
    src: local('Halyard Display'), local('Halyard-Display'), url(${fonts.HalyardMed}) format('woff');
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
