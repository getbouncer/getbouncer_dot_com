import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '~components/Layout'
import SEO from '~components/SEO'
import HomeHero from '~components/HomeHero'
import HomeSlices from '~components/HomeSlices'
import GetStarted from '~components/GetStarted'
import backgroundGradients from '~images/home-background.png'

const BackgroundContainer = styled.div`
  background-image: url(${backgroundGradients});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 100px;
`

const IndexPage = ({ data }) => {
  const { homepage } = data

  return (
    <Layout>
      <SEO title="Bouncer | Homepage" />
      <BackgroundContainer>
        <HomeHero data={homepage.data} />
        <HomeSlices allSlices={homepage.data.body} />
      </BackgroundContainer>
      <GetStarted />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query HomepageQuery {
    homepage: prismicHomepage {
      data {
        hero_cta
        hero_description {
          html
        }
        hero_illustration_left {
          alt
          url
        }
        hero_illustration_right {
          alt
          url
        }
        hero_title {
          html
        }
        body {
          ... on PrismicHomepageBodyHeadline3Items {
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
          ... on PrismicHomepageBodyHomeProducts {
            id
            slice_type
            primary {
              products_headline {
                html
              }
            }
            items {
              products {
                document {
                  ... on PrismicProduct {
                    data {
                      product_logo {
                        alt
                        url
                      }
                      product_headline_home {
                        html
                      }
                      product_description_home {
                        html
                      }
                      product_image_home {
                        alt
                        url
                      }
                      product_cta_home
                    }
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
