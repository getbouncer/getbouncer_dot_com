import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '~components/SEO'
import ProductHero from '~components/ProductHero'
import DataSecurity from '~components/DataSecurity'
import ProductSlices from '~components/ProductSlices'
import GetStarted from '~components/GetStarted'
import RequestDemo from '~components/RequestDemo'

const ProductPage = ({ data, pageContext }) => {
  const { product } = data

  return (
    <>
      <SEO title={`Bouncer | ${product.data.product_name.text}`} desc={product.data.product_headline.text} />
      <ProductHero data={product.data} />
      <ProductSlices allSlices={product.data.body} />
      {pageContext.uid === 'scan' && (
        <>
          <DataSecurity />
          <RequestDemo />
        </>
      )}
      {product.data.show_get_started && <GetStarted />}
    </>
  )
}

ProductPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  pageContext: PropTypes.shape().isRequired,
}

export const query = graphql`
  query ProductQuery($uid: String!) {
    product: prismicProduct(uid: { eq: $uid }) {
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
        product_cta_link
        show_get_started
        body {
          ... on PrismicProductBodyHeadlineListIllustration {
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
          ... on PrismicProductBodyIllustrationContent {
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
          ... on PrismicProductBodyHeadline3Items {
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
          ... on PrismicProductBodyReviewsSlider {
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
          ... on PrismicProductBodyThreeStepsSlider {
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

export default ProductPage
