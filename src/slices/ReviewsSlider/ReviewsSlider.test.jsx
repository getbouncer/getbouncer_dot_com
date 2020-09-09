import React from 'react'
import renderer from 'react-test-renderer'
import ReviewsSlider from './ReviewsSlider'

/* eslint-disable no-undef */

describe('ReviewsSlider', () => {
  it('renders correctly', () => {
    const data = {
      items: [
        {
          company_logo: {
            alt: 'company 1 logo',
            url: 'https://www.example.com/company_1_logo',
          },
          review_text: {
            text: 'review 1',
          },
          review_author: 'review 1 author',
        },
        {
          company_logo: {
            alt: 'company 2 logo',
            url: 'https://www.example.com/company_2_logo',
          },
          review_text: {
            text: 'review 2',
          },
          review_author: 'review 2 author',
        },
      ],
    }
    const tree = renderer
      .create(<ReviewsSlider input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
