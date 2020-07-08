import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Wrapper = styled.section`
  margin-bottom: 150px;
  padding-top: 100px;

  @media ${breakpoints.smartphone} {
    margin-bottom: 70px;
    padding-top: 60px;
  }
`

export const Headline = styled.div`
  h2 {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 2.85rem;
    line-height: 4.2rem;
    margin-bottom: 15px;
  }
`

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 10%;

  @media ${breakpoints.smartphone} {
    display: block;
    margin-left: 0;
    width: 100%;
  }

  > img {
    max-width: 350px;

    @media ${breakpoints.smartphone} {
      margin-bottom: 50px;
      width: 100%;
    }
  }

  > div {
    max-width: 445px;
    margin-left: 10%;

    @media ${breakpoints.smartphone} {
      margin-left: 0;
    }
  }

  p {
    margin-bottom: 40px;
  }
`
