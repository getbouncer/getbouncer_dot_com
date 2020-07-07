import React from 'react'
import CtaButton from '~components/CtaButton'
import { Headline, TextContent, Wrapper } from './styles'

const RequestDemo = () => (
  <Wrapper>
    <Headline>Request a demo</Headline>
    <TextContent>
      We’d love to hear from you. Reach out and we’ll find a time to connect to learn more about your business, specific
      challenges, and walk through a demo customized for you.
    </TextContent>
    <CtaButton text="Request a demo" to="/contact" />
  </Wrapper>
)

export default RequestDemo
