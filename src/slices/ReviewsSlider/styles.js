import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Wrapper = styled.section`
  & > div {
    @media ${breakpoints.smartphone} {
      padding: 0;
    }
  }
`

export const InnerContainer = styled.div`
  background-color: ${theme.colors.blue};
  padding: 85px 0 120px;
  position: relative;

  @media ${breakpoints.smartphone} {
    padding: 55px 32px;
  }
`

export const SliderContainer = styled.ul`
  display: flex;
  will-change: transform;
`

export const Slide = styled.li`
  color: white;
  flex: 0 0 auto;
  position: relative;
  text-align: center;
  width: 100%;

  img {
    height: 30px;
    filter: brightness(0) invert(1);
  }
`

export const Icon = styled.li`
  cursor: pointer;

  img {
    height: 45px;
  }

`

export const Text = styled.p`
  font-size: 1.75rem;
  line-height: 2.6rem;
  margin: 66px auto 36px;
  max-width: 700px;

  @media ${breakpoints.smartphone} {
    font-size: 1.15rem;
    line-height: 1.8rem;
  }
`

export const Author = styled.span`
  color: #e9ecfe;
`

const Dot = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;

  @media ${breakpoints.smartphone} {
    display: none;
  }
`

export const DotPrev = styled(Dot)`
  left: 50px;
`

export const DotNext = styled(Dot)`
  right: 50px;

  img {
    transform: rotate(180deg);
  }
`

export const LogosContainer = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 35px 0 150px;
`

export const Logo = styled.li`
  cursor: pointer;

  img {
    height: 30px;

    &:not(.active) {
      filter: brightness(0);
    }
  }

  &:not(:last-child) {
    margin-right: 100px;
  }
`
