import styled from '@emotion/styled'
import { breakpoints } from '~styles'
import gradientBg from '~images/request-demo-background.png'

export const Wrapper = styled.section`
  background-image: url(${gradientBg});
  background-repeat: no-repeat;
  background-position: left -100px;
  padding: 120px 32px 130px;
  text-align: center;

  @media ${breakpoints.smartphone} {
    padding: 90px 32px 80px;
  }
`

export const Icon = styled.img`
  width: 72px;
`

export const Headline = styled.h2`
  font-size: 2.857rem;
  margin-bottom: 35px;

  @media ${breakpoints.smartphone} {
    font-size: 48px;
  }
`

export const TextContent = styled.div`
  margin: 0 auto 40px;
  max-width: 466px;
`
