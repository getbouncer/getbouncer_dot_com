import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const LogosList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${theme.maxWidth};

  @media ${breakpoints.smartphone} {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.li`
  margin: 20px;

  img {
    display: block;
    height: 30px;
    filter: grayscale(100%);
  }

  @media ${breakpoints.smartphone} {
    display: inline-block;
    width: 33.33%;
  }
`
