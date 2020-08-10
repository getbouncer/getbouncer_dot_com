import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import SEO from '~components/SEO'
import AccessContainer from '~components/AccessContainer'
import DashboardUser from '~components/DashboardUser'

const BackgroundContainer = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 100px;
  height: calc(100vh - 177px) !important;
`

const Loading = () => (<> </>)

const DashboardPage = ({ data }) => {
  const { backgroundImage, dashboard } = data

  return (
    <>
      <SEO title="Bouncer | Dashboard" />
      <BackgroundContainer Tag="div" fluid={backgroundImage.childImageSharp.fluid}>
        <AccessContainer
          loadingPage={Loading}
          privatePage={DashboardUser}
        />
      </BackgroundContainer>
    </>
  )
}

DashboardPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query DashboardQuery {
    backgroundImage: file(relativePath: { eq: "home-background.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dashboard: prismicDashboard {
      data {
        dashboard_title {
          html
        }
        body {
          ... on PrismicDashboardBodyProductCard {
            id
            primary {
                section_title {
                  html
                }
            }
            items {
              card_logo {
                alt
                url
              }
              card_name
              card_description
            }
          }
        }
      }
    }
  }
`

export default DashboardPage
