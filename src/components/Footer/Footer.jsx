import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '~globals/Container'
import { AboveSmartphone } from '~components/Media'
import { FooterElem, InnerContainer, StyledLink, NavSocials } from './styles'

export const PureFooter = ({ data }) => {
  const { minimal_logo: minimalLogo, socials } = data

  return (
    <FooterElem>
      <Container isLarge>
        <InnerContainer>
          <StyledLink to="/">
            <img src={minimalLogo.url} alt={minimalLogo.alt} />
          </StyledLink>
          <AboveSmartphone>
            <NavSocials>
              {socials.map(social => (
                <li key={social.social_logo.alt}>
                  <a href={social.social_link.url} target="_blank" rel="noopener noreferrer">
                    <img src={social.social_logo.url} alt={social.social_logo.alt} />
                  </a>
                </li>
              ))}
            </NavSocials>
          </AboveSmartphone>
        </InnerContainer>
      </Container>
    </FooterElem>
  )
}

PureFooter.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      prismicGlobals {
        data {
          minimal_logo {
            alt
            url
          }
          socials {
            social_link {
              url
            }
            social_logo {
              alt
              url
            }
          }
        }
      }
    }
  `)

  return <PureFooter data={data.prismicGlobals.data} />
}

export default Footer
