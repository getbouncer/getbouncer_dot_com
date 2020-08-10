import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints, theme } from '~styles'

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
`

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  margin-left: 80px;

  @media ${breakpoints.smartphone} {
    display: block;
    margin-left: 0;
    font-weight: 600;
    font-size: 32px;
  }

  > li {
    padding: 30px 0;

    @media ${breakpoints.smartphone} {
      padding: 30px 20px;
      border-bottom: 1px solid ${theme.colors.lightBlue};
    }
  }

  > li:not(:last-of-type) {
    margin-right: 80px;

    @media ${breakpoints.smartphone} {
      margin-right: 0;
    }
  }
`

export const DropdownItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;

  @media ${breakpoints.smartphone} {
    display: block;
  }

  > img {
    margin-left: 6px;
    position: relative;
    top: 2px;
    width: 12px;
  }

  &:hover {
    > div {
      @media ${breakpoints.aboveSmartphone} {
        display: flex;
      }
    }
  }
  &.active {
    div:nth-of-type(2) {
      @media ${breakpoints.smartphone} {
        display: block;
      }
    }
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.smartphone} {
    > img {
      width: 20px;
    }
  }
`

export const CtaContainer = styled.div`
  margin-left: auto;
`

export const ProductSubMenu = styled.div`
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  display: none;
  position: absolute;
  top: calc(100% - 10px);
  z-index: 10;

  @media ${breakpoints.smartphone} {
    position: static;
    box-shadow: none;
  }
`

export const ProductList = styled.ul`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media ${breakpoints.smartphone} {
    display: block;
    width: 100%;
  }

  li {
    display: flex;
    flex: 0 0 200px;
    justify-content: center;
    padding: 24px 0;
    position: relative;
    transition: background 0.2s ease-out;
    border-right: 1px solid #e9ecfe;

    &:last-of-type {
      border-right: none;
    }

    @media ${breakpoints.smartphone} {
      display: block;
      font-size: 18px;
      font-weight: 400;
      padding: 24px 45px;
      border-bottom: 1px solid ${theme.colors.lightBlue};
      width: calc(100% + 40px);
      left: -20px;

      &:last-of-type {
        border-bottom: none;
        padding: 24px 45px 0;
      }
    }

    &:hover {
      background: #e9ecfe;

      @media ${breakpoints.smartphone} {
        background: none;
      }
    }
  }
`

export const LogoItem = styled.img`
  height: 32px;
`

export const Text = styled.p`
  margin-top: 10px;
  max-width: 150px;

  @media ${breakpoints.smartphone} {
    max-width: 100%;
  }
`

export const ProductLink = styled(Link)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const BurgerContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 67px;
  margin: auto;
  padding: 20px;
  position: relative;
  width: 100%;

  > a {
    z-index: 70;
  }
`

export const BurgerWrap = styled.div`
  position: absolute;
  right: 30px;
  top: 26px;
  transition: 0.3s 700ms transform ease-in;
  z-index: 40;

  &.reappearBurger {
    animation: 0.5s 2s fadeAppear ease-out forwards;
    opacity: 0;
  }
`

export const Burger = styled.div`
  cursor: pointer;
  height: 23px;
  transition: transform 1s ease-in;
  width: 33px;
  z-index: 30;

  span {
    background: ${theme.colors.black};
    border-radius: 9px;
    display: block;
    height: 2px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;

    &:nth-of-type(1) {
      top: 0px;
    }
    &:nth-of-type(2) {
      top: 10px;
    }
    &:nth-of-type(3) {
      top: 22px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      top: 12px;
      transform: rotate(135deg);
      width: 100%;
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      top: 12px;
      transform: rotate(-135deg);
    }
  }
`

export const MobileMenu = styled.div`
  background: ${theme.colors.white};
  box-sizing: border-box;
  height: 100vh;
  left: 0;
  opacity: 0;
  padding-top: 90px;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  z-index: 20;

  &.open {
    display: block;
    opacity: 1;
    pointer-events: all;
  }
`

export const MobileMenuItem = styled.li`
  margin-left: auto;
`

export const MobileLogo = styled.img`
  max-width: 140px;
`
