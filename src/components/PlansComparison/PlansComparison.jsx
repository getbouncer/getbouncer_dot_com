import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import { Cell, Grid, Headline, Row, Wrapper } from './styles'

const PricingPlans = ({ data }) => (
  <Wrapper>
    <Container>
      <Headline>
        <h2>{data.comparison_headline.text}</h2>
      </Headline>
      <Grid>
        <Row>
          <Cell />
          {data.body.map(cell => (
            <Cell key={cell.id}>
              <h3>{cell.primary.tier_name}</h3>
              <span>{cell.primary.tier_short_description}</span>
            </Cell>
          ))}
        </Row>
        <Row>
          <Cell>Scan any card</Cell>
          <Cell checked />
          <Cell checked />
          <Cell checked />
        </Row>
        <Row>
          <Cell>Verify card in real time</Cell>
          <Cell />
          <Cell checked />
          <Cell checked />
        </Row>
        <Row>
          <Cell>24/7 support, email, and live chat</Cell>
          <Cell checked />
          <Cell checked />
          <Cell checked />
        </Row>
        <Row>
          <Cell>SLA guarantees</Cell>
          <Cell />
          <Cell checked />
          <Cell checked />
        </Row>
        <Row>
          <Cell>Custom UI</Cell>
          <Cell checked />
          <Cell checked />
          <Cell checked />
        </Row>
        <Row>
          <Cell>Live integration help</Cell>
          <Cell />
          <Cell />
          <Cell checked />
        </Row>
        <Row>
          <Cell>Bouncer’s Fraud Score</Cell>
          <Cell />
          <Cell />
          <Cell checked />
        </Row>
      </Grid>
    </Container>
  </Wrapper>
)

PricingPlans.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default PricingPlans
