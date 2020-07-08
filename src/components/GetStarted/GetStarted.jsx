import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import CtaButton from '~components/CtaButton'
import { breakpoints } from '~styles'
import { Icon, Headline, Text } from './styles'

const GetStarted = () => {
  const data = useStaticQuery(graphql`
    query GetStartedQuery {
      prismicGlobals {
        data {
          background {
            url
          }
          cta_text
          icon {
            url
            alt
          }
          title {
            text
          }
          text {
            html
          }
        }
      }
    }
  `)
  const { background, cta_text: ctaText, icon, text, title } = data.prismicGlobals.data
  const backgroundStyles = css`
    background-image: url(${background.url});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    padding: 120px 0;
    text-align: center;

    @media ${breakpoints.smartphone} {
      padding: 60px 32px 68px;
    }
  `

  return (
    <section css={backgroundStyles}>
      <Icon src={icon.url} alt={icon.alt} />
      <Headline>{title.text}</Headline>
      <Text dangerouslySetInnerHTML={{ __html: text.html }} />
      <CtaButton text={ctaText} to="/contact" inverted />
    </section>
  )
}

export default GetStarted
