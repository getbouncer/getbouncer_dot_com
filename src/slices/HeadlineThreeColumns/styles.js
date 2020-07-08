import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Headline = styled.div`
  margin-bottom: 64px;
  text-align: center;

  h2 {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 3.5rem;
    line-height: 4.5rem;

    @media ${breakpoints.smartphone} {
      font-size: 2.85rem;
      line-height: 1.1;
      text-align: left;
    }
  }
`

export const Row = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.smartphone} {
    display: block;
  }
`

export const Item = styled.li`
  flex: 0 0 28%;

  @media ${breakpoints.smartphone} {
    margin-bottom: 50px;
    width: 100%;
  }
`

export const Icon = styled.img`
  height: 72px;
`

export const ItemHeadline = styled.h3`
  margin: 24px 0 18px;
`
