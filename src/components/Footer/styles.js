import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '~styles'

export const FooterElem = styled.footer`
  background-color: #fff;
`

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  position: relative;

  @media ${breakpoints.smartphone} {
    padding: 45px 0;
  }
`

export const StyledLink = styled(Link)`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`

export const NavSocials = styled.ul`
  align-items: center;
  display: flex;
  margin-left: auto;

  li:not(:last-child) {
    margin-right: 14px;
  }

  img {
    height: 26px;
    width: 26px;
  }
`
