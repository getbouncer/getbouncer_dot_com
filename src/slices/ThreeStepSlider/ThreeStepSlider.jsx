import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Container from '~globals/Container'
import arrowLeft from '~images/arrow-thin-left.svg'
import arrowRight from '~images/arrow-thin-right.svg'
import arrowStep from '~images/arrow-step.svg'
import { AboveSmartphone, Smartphone } from '~components/Media'
import {
  Content,
  Count,
  Controls,
  Arrow,
  ArrowStepOne,
  ArrowStepTwo,
  FlippedArrow,
  Headline,
  Image,
  ImageItem,
  ImagesWrapper,
  ImageTitle,
  Step,
  Text,
  TextWrapper,
  StepWrapper,
  Title,
  Wrapper,
} from './styles'

const ThreeStepSlider = ({ input }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { items } = input

  const arrowOneClass = classNames(
    activeIndex >= 1 ? 'active' : null,
    activeIndex === items.length - 1 ? 'flipped' : null,
  )

  const arrowTwoClass = classNames(activeIndex > 1 ? 'active' : null)

  return (
    <Wrapper>
      <Container>
        <Headline>
          <strong>How it works</strong>
        </Headline>
        <Content>
          <TextWrapper>
            <Step>
              {items.map((step, index) => (
                <StepWrapper key={step.step_title} className={index === activeIndex ? 'active' : undefined}>
                  <Title>{step.step_title}</Title>
                  <Text>{step.step_description.text}</Text>
                </StepWrapper>
              ))}
              <Count>
                <span>{activeIndex + 1}</span>
              </Count>
              <AboveSmartphone>
                <Controls>
                  <Arrow
                    className={activeIndex === 0 ? 'disabled' : undefined}
                    onClick={() => setActiveIndex(activeIndex - 1)}
                  >
                    <img src={arrowLeft} alt="Arrow left" />
                  </Arrow>
                  <Arrow
                    className={activeIndex === items.length - 1 ? 'disabled' : undefined}
                    onClick={() => setActiveIndex(activeIndex + 1)}
                  >
                    <img src={arrowRight} alt="Arrow right" />
                  </Arrow>
                </Controls>
              </AboveSmartphone>
            </Step>
          </TextWrapper>
          <ImagesWrapper>
            {items.map((step, index) => (
              <ImageItem key={step.illustration_title} className={index <= activeIndex ? 'active' : undefined}>
                <ImageTitle>{step.illustration_title}</ImageTitle>
                <Image src={step.step_illustration.url} alt={step.step_illustration.alt} />
              </ImageItem>
            ))}
            <ArrowStepOne className={arrowOneClass}>
              <img src={arrowStep} alt="Arrow" />
            </ArrowStepOne>
            <ArrowStepTwo className={arrowTwoClass}>
              <span>1 second</span>
              <FlippedArrow src={arrowStep} alt="Arrow" />
              <img src={arrowStep} alt="Arrow" />
            </ArrowStepTwo>
          </ImagesWrapper>
          <Smartphone>
            <Controls>
              <Arrow
                className={activeIndex === 0 ? 'disabled' : undefined}
                onClick={() => setActiveIndex(activeIndex - 1)}
              >
                <img src={arrowLeft} alt="Arrow left" />
              </Arrow>
              <Arrow
                className={activeIndex === items.length - 1 ? 'disabled' : undefined}
                onClick={() => setActiveIndex(activeIndex + 1)}
              >
                <img src={arrowRight} alt="Arrow right" />
              </Arrow>
            </Controls>
          </Smartphone>
        </Content>
      </Container>
    </Wrapper>
  )
}

ThreeStepSlider.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default ThreeStepSlider
