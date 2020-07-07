import styled from '@emotion/styled'
import { breakpoints, theme } from '~styles'

export const Wrapper = styled.section`
  padding: 100px 0 200px;
  background-image: linear-gradient(180deg, #ffffff 0%, #d4dafc 100%);

  @media ${breakpoints.smartphone} {
    padding: 50px 0;
  }
`

export const Headline = styled.h2`
  text-align: center;
  margin-bottom: 90px;
  font-size: 2.857rem;

  strong {
    background: ${theme.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% + 50px);

  @media ${breakpoints.smartphone} {
    display: block;
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  display: block;
  width: 365px;

  @media ${breakpoints.smartphone} {
    width: 100%;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  max-width: 850px;
  margin-left: 90px;
  position: relative;

  @media ${breakpoints.smartphone} {
    justify-content: space-between;
    margin-left: 0;
    margin-top: 320px;
  }
`

export const Count = styled.div`
  align-items: center;
  background: ${theme.colors.blue};
  border-radius: 100%;
  color: ${theme.colors.white};
  display: flex;
  font-size: 22px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  width: 40px;

  span {
    position: relative;
    top: -2px;
  }
`

export const Title = styled.h3`
  display: block;
  margin: 26px 3px 22px 0;
`

export const Text = styled.p`
  display: block;
`

export const Step = styled.div`
  display: block;
  position: relative;

  @media ${breakpoints.smartphone} {
    width: 100%;
  }
`

export const StepWrapper = styled.div`
  height: 280px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 40px;
  width: 365px;

  @media ${breakpoints.smartphone} {
    width: 100%;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`

export const ImageItem = styled.div`
  display: block;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-right: 15%;

    @media ${breakpoints.smartphone} {
      margin-right: 5%;
    }
  }
`

export const ImageTitle = styled.p`
  color: ${theme.colors.blue};
  display: block;
  font-size: 22px;
  line-height: 24px;
  margin: 0 auto 15px;
  max-width: 237px;
  text-align: center;

  @media ${breakpoints.smartphone} {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`

export const Image = styled.img`
  display: block;
`

export const Controls = styled.div`
  display: block;
  margin-top: 290px;

  @media ${breakpoints.smartphone} {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`

export const Arrow = styled.div`
  background: ${theme.colors.blue};
  border-radius: 100%;
  cursor: pointer;
  display: block;
  display: inline-block;
  height: 36px;
  margin-right: 22px;
  position: relative;
  transition: opacity 0.2s;
  width: 36px;

  img {
    left: 8px;
    position: absolute;
    top: 10px;
    width: 17px;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export const ArrowStepOne = styled.div`
  left: 28%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out, transform 0s ease 0.6s;
  opacity: 0;

  &.active {
    opacity: 1;
  }

  &.flipped {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  @media ${breakpoints.smartphone} {
    left: 32%;
    top: 60%;

    img {
      width: 50px;
    }
  }
`

export const ArrowStepTwo = styled.div`
  left: 54%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  span,
  img {
    display: block;
    opacity: 0;
  }

  span {
    color: ${theme.colors.blue};
    text-align: center;
    transition: opacity 0.2s ease-in-out 0.4s;
  }

  &.active {
    span,
    img {
      opacity: 1;
    }
  }

  @media ${breakpoints.smartphone} {
    left: 60%;
    top: 60%;

    img {
      width: 50px;
    }

    span {
      font-size: 12px;
    }
  }
`

export const FlippedArrow = styled.img`
  margin-bottom: 15px;
  transform: rotate(180deg);
  transition: opacity 0.2s ease-in-out 0.4s;
`
