import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export const PureSEO = ({ desc, pathname, site, title }) => {
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

PureSEO.propTypes = {
  desc: PropTypes.string,
  pathname: PropTypes.string,
  site: PropTypes.shape().isRequired,
  title: PropTypes.string,
}

PureSEO.defaultProps = {
  title: null,
  desc: null,
  pathname: null,
}

export const SEO = ({ desc, pathname, title }) => {
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

  return <PureSEO desc={desc} pathname={pathname} site={site} title={title} />
}

SEO.propTypes = {
  desc: PropTypes.string,
  pathname: PropTypes.string,
  title: PropTypes.string,
}

SEO.defaultProps = {
  desc: null,
  pathname: null,
  title: null,
}

export default SEO
