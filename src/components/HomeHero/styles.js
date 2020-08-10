import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Wrapper = styled.section`
  padding-bottom: 100px;

  @media ${breakpoints.smartphone} {
    padding-top: 50px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`

export const Headline = styled.div`
  margin: 0 auto;
  max-width: 600px;

  strong {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Description = styled.div`
  margin: 24px auto;
  width: 32vw;
  max-width: 550px;

  @media ${breakpoints.smartphone} {
    width: 100%;
    max-width: 310px;
  }
`

export const LeftIllustration = styled.img`
  bottom: 0;
  left: -3%;
  margin: auto;
  min-width: 26%;
  position: absolute;
  top: 0;
  width: calc(100% - 943px);

  @media ${breakpoints.smartphone} {
    position: static;
    width: 100%;
    max-width: 300px;
    margin: 45px auto;
  }
`

export const RightIllustration = styled.img`
  top: 0;
  bottom: 0;
  transform: translateY(80px);
  margin: auto;
  min-width: 36%;
  position: absolute;
  right: -5vh;
  width: calc(100% - 793px);
`

export const LogosContainer = styled.div`
  margin: 100px auto 0;
  max-width: ${theme.maxWidth};

  @media ${breakpoints.smartphone} {
    width: 100%;
    transform: none;
    position: static;
  }
`
