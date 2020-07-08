import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ desc, pathname, title }) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `)

  const {
    siteMetadata: { defaultDescription, defaultTitle, siteUrl },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang="en" />
        <meta name="description" content={seo.description} />
        <meta name="bouncer" content="Bouncer Marketing Website" />
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  pathname: null,
}
