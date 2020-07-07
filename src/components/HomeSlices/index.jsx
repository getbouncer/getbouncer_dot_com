import React from 'react'
import PropTypes from 'prop-types'
import HomeProducts from '~components/HomeProducts'
import HeadlineThreeColumns from '~slices/HeadlineThreeColumns'

const HomeSlices = ({ allSlices }) => {
  const slice = allSlices.map(s => {
    switch (s.slice_type) {
      case 'headline___3_items':
        return <HeadlineThreeColumns key={s.id} input={s} />
      case 'home_products':
        return <HomeProducts key={s.id} input={s} />
      default:
        return null
    }
  })

  return <div>{slice}</div>
}

HomeSlices.propTypes = {
  allSlices: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default HomeSlices
