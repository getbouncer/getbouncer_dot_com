/* eslint-disable implicit-arrow-linebreak */
import styled from '@emotion/styled'
import { theme } from '~styles'
import checkedIcon from '~images/checked.svg'

export const Wrapper = styled.section`
  padding: 100px 0;
`

export const Headline = styled.div`
  text-align: center;
  h2 {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 50px;
  }
`

export const Grid = styled.div`
  display: block;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;

  &:first-of-type {
    border-bottom: 2px solid ${theme.colors.blue};

    > div {
      display: block;
      text-align: center;
      padding-bottom: 20px;
    }
  }

  &:not(:first-of-type) {
    > div {
      align-items: center;
      height: 65px;

      &:not(:first-of-type) {
        justify-content: center;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.colors.lightBlue};
    }
  }
`

export const Cell = styled.div`
  display: flex;

  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.lightBlue};
  }

  ${({ checked }) =>
    checked &&
    `
      position: relative;

      &::after {
        content: '';
        background-image: url(${checkedIcon});
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 12px;
        background-color: ${theme.colors.blue};
        border-radius: 100%;
        position: absolute;
        height: 22px;
        width: 22px;
      }
    `}
`
