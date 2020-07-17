import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const SectionContainer = styled.section`
  margin: 150px 0 80px;

  @media ${breakpoints.smartphone} {
    margin: 115px 0 80px;
  }
`

export const Headline = styled.div`
  margin-bottom: 64px;
  text-align: center;

  @media ${breakpoints.smartphone} {
    margin-bottom: 50px;
    text-align: left;
  }

  h2 {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 2.857rem;
  }
`

export const Item = styled.li`
  align-items: center;
  display: flex;

  @media ${breakpoints.smartphone} {
    flex-wrap: wrap;
  }

  &:not(:last-child) {
    margin-bottom: 60px;
  }

  &:nth-of-type(odd) {
    @media ${breakpoints.smartphone} {
      justify-content: center;
      overflow: hidden;
    }


    > img {
      margin-right: 15%;

      @media ${breakpoints.smartphone} {
        margin-right: 0px;
        order: 2;
      }
    }
  }

  &:nth-of-type(even) {
    justify-content: flex-end;

    @media ${breakpoints.smartphone} {
      justify-content: center;
      overflow: hidden;
    }

    > img {
      margin-left: 5%;
      order: 2;

      @media ${breakpoints.smartphone} {
        margin-left: 0px;
        margin-top: 42px;
      }
    }
  }
`

export const ItemImage = styled.img`
  width: 50%;

  @media ${breakpoints.smartphone} {
    max-width: 550px;
    width: 100%;
  }
`

export const ItemIcon = styled.img`
  display: block;
  height: 32px;
`

export const ItemHeadline = styled.div`
  margin: 15px 0;

  @media ${breakpoints.smartphone} {
    margin: 15px 0 32px;
  }

  h3 {
    font-size: 2.2rem;
  }
`

export const ItemText = styled.div`
  margin-bottom: 20px;

  @media ${breakpoints.smartphone} {
    margin-bottom: 36px;
  }
`

export const ItemContent = styled.div`
  width: 30%;

  @media ${breakpoints.smartphone} {
    width: 100%;
  }
`
