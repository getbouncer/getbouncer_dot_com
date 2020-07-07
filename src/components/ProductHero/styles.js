import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
  padding: 60px 0 0;

  @media ${breakpoints.smartphone} {
    display: block;
    margin-bottom: 70px;
  }
`

export const Image = styled.img`
  width: 50%;

  @media ${breakpoints.smartphone} {
    margin-bottom: 40px;
    width: 100%;
  }
`

export const ProductLogo = styled.img`
  height: 36px;
  margin-bottom: 18px;
`

export const Headline = styled.div`
  max-width: 485px;

  strong {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const CtaContainer = styled.div`
  margin-top: 60px;
`
