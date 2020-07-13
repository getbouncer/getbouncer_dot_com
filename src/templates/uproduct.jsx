import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '~components/SEO'
import ProductHero from '~components/ProductHero'
import DataSecurity from '~components/DataSecurity'
import ProductSlices from '~components/ProductSlices'
import GetStarted from '~components/GetStarted'
import RequestDemo from '~components/RequestDemo'

const UProductPage = ({ data, pageContext }) => {
  const { uproduct } = data

  return (
    <>
      <SEO title={`Bouncer | ${uproduct.data.product_name.text}`} desc={uproduct.data.product_headline.text} />
      <ProductHero data={uproduct.data} />
      <ProductSlices allSlices={uproduct.data.body} />
      {pageContext.uid === 'scan' && (
        <>
          <DataSecurity />
          <RequestDemo />
        </>
      )}
      {uproduct.data.show_get_started && <GetStarted />}
    </>
  )
}

UProductPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  pageContext: PropTypes.shape().isRequired,
}

export const query = graphql`
  query UproductQuery($uid: String!) {
    uproduct: prismicUproduct(uid: { eq: $uid }) {
      data {
        product_name {
          text
        }
        product_logo {
          alt
          url
        }
        product_image {
          alt
          url
        }
        product_headline {
          html
          text
        }
        product_cta
        show_get_started
        body {
          ... on PrismicUproductBodyHeadlineListIllustration {
            id
            slice_type
            primary {
              headline {
                html
              }
              illustration {
                alt
                url
              }
            }
            items {
              item_icon {
                alt
                url
              }
              item_description {
                html
              }
              item_title
            }
          }
          ... on PrismicUproductBodyIllustrationContent {
            id
            slice_type
            primary {
              headline {
                html
              }
              illustration {
                alt
                url
              }
              cta_text
              body_text {
                html
              }
            }
          }
          ... on PrismicUproductBodyHeadline3Items {
            id
            slice_type
            primary {
              headline {
                html
              }
            }
            items {
              item_title
              item_description {
                html
              }
              item_image {
                alt
                url
              }
            }
          }
          ... on PrismicUproductBodyReviewsSlider {
            id
            slice_type
            items {
              review_text {
                text
              }
              review_author
              company_logo {
                alt
                url
              }
            }
          }
          ... on PrismicUproductBodyThreeStepsSlider {
            id
            slice_type
            items {
              step_title
              step_description {
                text
              }
              step_illustration {
                alt
                url
              }
              illustration_title
            }
          }
        }
      }
    }
  }
`

export default UProductPage
