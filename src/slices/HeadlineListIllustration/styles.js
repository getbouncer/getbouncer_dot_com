import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Wrapper = styled.section`
  margin: 0 0 150px;

  @media ${breakpoints.smartphone} {
    margin: 0 0 70px;
  }
`

export const Headline = styled.div`
  text-align: center;

  h2 {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 2.85rem;
    line-height: 4rem;
  }

  @media ${breakpoints.smartphone} {
    text-align: left;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  padding: 0 30px 0 75px;

  @media ${breakpoints.smartphone} {
    display: block;
    margin-top: 42px;
    padding: 0;
  }
`

export const Grid = styled.div`
  max-width: 450px;
`

export const Item = styled.div`
  position: relative;
  margin-left: 34px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media ${breakpoints.smartphone} {
    margin-left: 0;
  }
`

export const ItemTitle = styled.h3`
  margin-bottom: 24px;
`

export const Icon = styled.img`
  left: -107px;
  position: absolute;
  width: 72px;

  @media ${breakpoints.smartphone} {
    position: static;
    margin-bottom: 30px;
  }
`

export const Illustration = styled.img`
  align-self: center;
  width: 40%;
  max-width: 600px;

  @media ${breakpoints.smartphone} {
    display: block;
    margin: 40px auto 0;
    width: 100%;
  }
`
