import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints, theme } from '~styles'
import checkedIcon from '~images/checked.svg'
import checkedIconBlue from '~images/checked-blue.svg'
import gradientBg from '~images/pricing-background.png'

export const Wrapper = styled.section`
  background-image: url(${gradientBg});
  background-repeat: no-repeat;
  background-size: 120% 100%;
  background-position: -50px 0;
  padding: 100px 0;

  @media ${breakpoints.smartphone} {
    padding: 50px 0 5px;
  }
`

export const Headline = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

export const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media ${breakpoints.smartphone} {
    display: block;
  }
`

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: -4px 15px 40px 10px rgba(85, 105, 211, 0.36);
  padding: 34px 24px 65px;
  text-align: center;
  width: 336px;

  @media ${breakpoints.smartphone} {
    margin-bottom: 48px;
    width: 100%;
    padding: 22px 15px 32px;
  }

  &:first-of-type {
    background: #fff;
    z-index: 0;

    span {
      @media ${breakpoints.smartphone} {
        margin: 40px 0;
      }
    }
  }
  &:nth-of-type(2) {
    background: #e9ecfe;
    z-index: 10;
  }
  &:nth-of-type(3) {
    background: #5569cf;
    color: #fff;
    padding: 45px 24px 65px;
    z-index: 20;

    a {
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
    }

    div:last-of-type p::before {
      background-color: ${theme.colors.white};
      background-image: url(${checkedIconBlue});
    }
  }
`

export const CardText = styled.p`
  font-size: 20px;
  display: block;
  margin: 25px auto 0;

  @media ${breakpoints.smartphone} {
    margin: 18px auto 0;
  }
`

export const CardPrice = styled.span`
  display: block;
  font-family: 'Halyard Display';
  font-size: 52.5px;
  font-weight: 500;
  margin: 70px 0;

  @media ${breakpoints.smartphone} {
    margin: 20px 0 40px;
  }
`

export const CtaWrapper = styled.div`
  text-align: center;
`

export const Subtitle = styled.p`
  display: block;
  margin: 45px auto 0;
  text-align: center;
  max-width: 587px;
`

export const SubtitleLink = styled(Link)`
  color: ${theme.colors.blue};
`

export const CardFooter = styled.div`
  border-top: 1px solid ${theme.colors.lightBlue};
  margin-top: 50px;
  padding: 40px 32px 0;
  width: 100%;
`

export const CardFooterText = styled.p`
  display: block;
  margin-left: 36px;
  position: relative;
  text-align: left;

  &::before {
    background-color: ${theme.colors.blue};
    background-image: url(${checkedIcon});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 12px;
    border-radius: 100%;
    content: '';
    height: 22px;
    left: -36px;
    position: absolute;
    width: 22px;
  }

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`
