import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import HeadlineThreeColumns from '~slices/HeadlineThreeColumns'
import IllustrationAndContent from '~slices/IllustrationAndContent'
import HeadlineListIllustration from '~slices/HeadlineListIllustration'
import ReviewsSlider from '~slices/ReviewsSlider'
import ThreeStepSlider from '~slices/ThreeStepSlider'

const SliceWrapper = styled.div``

const ProductSlices = ({ allSlices }) => {
  const slice = allSlices.map(s => {
    switch (s.slice_type) {
      case 'headline___3_items':
        return <HeadlineThreeColumns key={s.id} input={s} />
      case 'illustration___content':
        return <IllustrationAndContent key={s.id} input={s} />
      case 'headline___list___illustration':
        return <HeadlineListIllustration key={s.id} input={s} />
      case 'reviews_slider':
        return <ReviewsSlider key={s.id} input={s} />
      case 'three_steps_slider':
        return <ThreeStepSlider key={s.id} input={s} />
      default:
        return null
    }
  })

  return <SliceWrapper>{slice}</SliceWrapper>
}

ProductSlices.propTypes = {
  allSlices: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default ProductSlices
