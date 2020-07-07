import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '~components/Layout'

const Iframe = styled.iframe`
  margin-top: 70px;
  height: calc(100vh - 90px);
  width: 100vw;
`

const ContactPage = ({ data }) => {
  const { contact } = data

  return (
    <Layout>
      <Iframe title="Contact Form" src={contact.data.typeform_iframe.url} />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
}

export const query = graphql`
  query ContactQuery {
    contact: prismicContact {
      data {
        typeform_iframe {
          url
        }
      }
    }
  }
`

export default ContactPage
