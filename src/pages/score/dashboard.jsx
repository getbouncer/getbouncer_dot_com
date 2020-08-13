import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import { BackgroundContainer, CenteredDialog } from '~styles/global'
import SEO from '~components/SEO'
import AccessContainer from '~components/AccessContainer'
import CaptionedLoader from '~components/CaptionedLoader'
import ScoreUser from '~components/ScoreUser'
import StripeForm from '~components/StripeForm'
import useScore from '~hooks/useScore'

const ScoreDashboardPage = ({ data }) => {
  const [scoreDashboardState, setScoreDashboardState] = React.useState('fetching')
  const [scoreDashboardData, setScoreDashboardData] = React.useState({})

  const { backgroundImage } = data

  const scoreCallback = (scoreData, status) => {
    if (Object.keys(scoreData).length !== 0) {
      if (scoreData.stripe_api_key) {
        setScoreDashboardData(scoreData)
        setScoreDashboardState('downloading')
      } else {
        setScoreDashboardState('stripe')
      }
    }
  }

  React.useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user && user.emailVerified) {
          user.getIdToken().then(idToken => useScore(scoreCallback, idToken))
        } else {
          setScoreDashboardData({})
        }
      })
  }, [])

  return (
    <>
      <BackgroundContainer Tag="div" fluid={backgroundImage.childImageSharp.fluid}>
        <AccessContainer />
        <SEO title="Bouncer | Dashboard" />
        {
          (() => {
            switch (scoreDashboardState) {
              default:
                return (
                  <CaptionedLoader text="Getting Started" />
                )

              case 'stripe':
                return (
                  <CenteredDialog>
                    <StripeForm
                      stripeCallback={() => setScoreDashboardState('downloading')}
                    />
                  </CenteredDialog>
                )

              case 'downloading':
                return (
                  <CaptionedLoader text="Downloading Information" />
                )

              case 'processing':
                return (
                  <CaptionedLoader text="Processing Information" />
                )

              case 'dashboard':
                return (
                  <ScoreUser />
                )
            }
          })()
        }
      </BackgroundContainer>
    </>
  )
}

ScoreDashboardPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query ScoreDashboardQuery {
    backgroundImage: file(relativePath: { eq: "home-background.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ScoreDashboardPage
