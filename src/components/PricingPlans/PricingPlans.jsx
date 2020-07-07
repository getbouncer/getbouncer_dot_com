import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import CtaButton from '~components/CtaButton'
import { Smartphone } from '~components/Media'
import {
  Headline,
  Wrapper,
  Card,
  CardFooter,
  CardFooterText,
  CardsContainer,
  CardText,
  CardPrice,
  CtaWrapper,
  Subtitle,
  SubtitleLink,
} from './styles'

const PricingPlans = ({ data }) => (
  <Wrapper>
    <Container>
      <Headline>{data.headline.text}</Headline>
      <CardsContainer>
        {data.body.map(card => (
          <Card key={card.primary.tier_name}>
            <h3>{card.primary.tier_name}</h3>
            <CardText>{card.primary.tier_description}</CardText>
            <CardPrice>{card.primary.tier_price}</CardPrice>
            <CtaWrapper>
              <CtaButton text={card.primary.tier_cta} to="/" />
            </CtaWrapper>
            <Smartphone>
              <CardFooter>
                {card.items.map(item => (
                  <CardFooterText key={item.tier_feature}>{item.tier_feature}</CardFooterText>
                ))}
              </CardFooter>
            </Smartphone>
          </Card>
        ))}
      </CardsContainer>
      <Subtitle>
        {data.text.text}
        &nbsp;
        <SubtitleLink to="/contact">Let’s chat.</SubtitleLink>
      </Subtitle>
    </Container>
  </Wrapper>
)

PricingPlans.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default PricingPlans
