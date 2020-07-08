import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import { Headline, Row, Wrapper } from './styles'
import CtaButton from '~components/CtaButton'

const IllustrationAndContent = ({ input }) => {
  const { primary } = input

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={primary.illustration.url} alt={primary.illustration.alt} />
          <div>
            <Headline dangerouslySetInnerHTML={{ __html: primary.headline.html }} />
            <div dangerouslySetInnerHTML={{ __html: primary.body_text.html }} />
            <CtaButton text={primary.cta_text} to="/contact" />
          </div>
        </Row>
      </Container>
    </Wrapper>
  )
}

IllustrationAndContent.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default IllustrationAndContent
