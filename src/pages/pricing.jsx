import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '~components/SEO'
import GetStarted from '~components/GetStarted'
import PricingPlans from '~components/PricingPlans'
import PlansComparison from '~components/PlansComparison'
import CompaniesLogos from '~components/CompaniesLogos'
import Spacer from '~components/Spacer'
import { AboveSmartphone } from '~components/Media'
import Container from '~globals/Container'

const PricingPage = ({ data }) => {
  const { pricing } = data

  return (
    <>
      <SEO
        title="Bouncer | Pricing"
        desc="Discover our tiers and pick one that best fits your needs. Contact us if you need a tailored plan!"
      />
      <PricingPlans data={pricing.data} />
      <AboveSmartphone>
        <PlansComparison data={pricing.data} />
      </AboveSmartphone>
      <Spacer height={50} />
      <Container>
        <CompaniesLogos />
      </Container>
      <Spacer height={50} />
      <GetStarted />
    </>
  )
}

PricingPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query PricingQuery {
    pricing: prismicPricing {
      data {
        headline {
          text
        }
        comparison_headline {
          text
        }
        text {
          text
        }
        body {
          ... on PrismicPricingBodyTier {
            id
            primary {
              tier_link_internal
              tier_link
              tier_cta
              tier_description
              tier_name
              tier_short_description
              tier_price
            }
            items {
              tier_feature
            }
          }
        }
      }
    }
  }
`

export default PricingPage
