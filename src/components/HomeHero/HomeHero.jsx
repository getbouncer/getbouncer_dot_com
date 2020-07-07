import React from 'react'
import PropTypes from 'prop-types'
import Container from '~globals/Container'
import CtaButton from '~components/CtaButton'
import CompaniesLogos from '~components/CompaniesLogos'
import { AboveSmartphone, Smartphone } from '~components/Media'
import {
  ContentContainer,
  Headline,
  Description,
  LeftIllustration,
  RightIllustration,
  LogosContainer,
  Wrapper,
} from './styles'

const HomeHero = ({ data }) => {
  const {
    hero_cta: heroCta,
    hero_description: heroDescription,
    hero_illustration_left: heroIllustrationLeft,
    hero_illustration_right: heroIllustrationRight,
    hero_title: heroTitle,
  } = data

  return (
    <Wrapper>
      <Container isLarge>
        <AboveSmartphone>
          <LeftIllustration src={heroIllustrationLeft.url} alt={heroIllustrationLeft.alt} />
          <RightIllustration src={heroIllustrationRight.url} alt={heroIllustrationRight.alt} />
        </AboveSmartphone>
        <ContentContainer>
          <Headline dangerouslySetInnerHTML={{ __html: heroTitle.html }} />
          <Description dangerouslySetInnerHTML={{ __html: heroDescription.html }} />
          <div>
            <CtaButton isInternal to="/contact" text={heroCta} />
          </div>
          <Smartphone>
            <LeftIllustration src={heroIllustrationLeft.url} alt={heroIllustrationLeft.alt} />
          </Smartphone>
        </ContentContainer>
        <LogosContainer>
          <CompaniesLogos />
        </LogosContainer>
      </Container>
    </Wrapper>
  )
}

HomeHero.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default HomeHero
