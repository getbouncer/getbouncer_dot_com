import React, { useCallback, useEffect, useState, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useEmblaCarousel } from 'embla-carousel/react'
import styled from '@emotion/styled'
import useInterval from '~hooks/useInterval'
import Container from '~globals/Container'
import arrowSlider from '~images/arrow-slider.svg'
import {
  InnerContainer,
  SliderContainer,
  Slide,
  Text,
  Author,
  DotPrev,
  DotNext,
  LogosContainer,
  Logo,
  Wrapper,
} from './styles'

const Viewport = styled(({ component, ...props }) => cloneElement(component, props))`
  overflow: hidden;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`

const ReviewsSlider = ({ input }) => {
  const { items } = input
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: true })
  const scrollTo = useCallback(index => embla.scrollTo(index), [embla])
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla.scrollNext(), [embla])
  const [isRunning, setIsRunning] = useState(false)

  useInterval(
    () => {
      scrollNext()
    },
    isRunning ? null : 6000,
  )

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        setIsRunning(true)
      })

      embla.on('settle', () => {
        setIsRunning(false)
      })
    }
  }, [embla])

  return (
    <Wrapper>
      <Container isLarge>
        <InnerContainer>
          <Viewport component={<EmblaCarouselReact autoplay delayLength={4000} />}>
            <SliderContainer>
              {items.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Slide key={index}>
                  <img src={item.company_logo.url} alt={item.company_logo.alt} />
                  <Text>{item.review_text.text}</Text>
                  <Author>{item.review_author}</Author>
                </Slide>
              ))}
            </SliderContainer>
          </Viewport>
          <DotPrev onClick={scrollPrev}>
            <img src={arrowSlider} alt="Previous arrow" />
          </DotPrev>
          <DotNext onClick={scrollNext}>
            <img src={arrowSlider} alt="Next arrow" />
          </DotNext>
        </InnerContainer>
        <LogosContainer>
          {items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Logo key={index} onClick={() => scrollTo(index)}>
              <img
                src={item.company_logo.url}
                alt={item.company_logo.alt}
                className={embla && embla.selectedScrollSnap() === index ? 'active' : undefined}
              />
            </Logo>
          ))}
        </LogosContainer>
      </Container>
    </Wrapper>
  )
}

ReviewsSlider.propTypes = {
  input: PropTypes.shape().isRequired,
}

export default ReviewsSlider
