import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '~globals/Container'
import { AboveSmartphone } from '~components/Media'
import { FooterElem, InnerContainer, StyledLink, NavSocials } from './styles'

const Footer = () => {
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

  const { minimal_logo: minimalLogo, socials } = data.prismicGlobals.data

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

export default Footer
