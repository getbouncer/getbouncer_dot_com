import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
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

export const PureHomeHero = ({ data, logos }) => {
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
          <CompaniesLogos logos={logos} />
        </LogosContainer>
      </Container>
    </Wrapper>
  )
}

PureHomeHero.propTypes = {
  data: PropTypes.shape().isRequired,
  logos: PropTypes.shape().isRequired,
}

export const HomeHero = ({ data }) => {
  const logos = useStaticQuery(graphql`
    query LogosQuery {
      prismicGlobals {
        data {
          companies_logo {
            company_logo {
              alt
              url
            }
          }
        }
      }
    }
  `)

  return <PureHomeHero data={data} logos={logos.prismicGlobals.data} />
}

HomeHero.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default HomeHero
