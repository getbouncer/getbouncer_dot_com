import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '~components/Layout'
import SEO from '~components/SEO'
import Container from '~globals/Container'

const TextContainer = styled.div`
  padding: 70px 0;

  h1 {
    margin-bottom: 60px;
    text-align: center;
  }

  h2 {
    margin: 20px 0;
  }

  p {
    margin: 10px 0;
  }

  strong {
    font-weight: 600;
  }

  a {
    color: #5569cf;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }
`

const PrivacyPage = ({ data }) => (
  <Layout>
    <SEO title="Bouncer | Privacy Policy" />
    <Container>
      <TextContainer dangerouslySetInnerHTML={{ __html: data.privacy.data.text.html }} />
    </Container>
  </Layout>
)

PrivacyPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query PrivacyQuery {
    privacy: prismicPrivacyPolicy {
      data {
        text {
          html
        }
      }
    }
  }
`

export default PrivacyPage
