import React from 'react'
import renderer from 'react-test-renderer'
import HeadlineThreeColumns from './HeadlineThreeColumns'

/* eslint-disable no-undef */

describe('HeadlineThreeColumns', () => {
  it('renders correctly', () => {
    const data = {
      primary: {
        headline: {
          html: '<h1>headline</h1>',
        },
      },
      items: [
        {
          item_title: 'item 1 title',
          item_image: {
            alt: 'item 1 image',
            url: 'https://www.example.com/item_1_image.png',
          },
          item_description: {
            html: '<p>item description</p>',
          },
        },
        {
          item_title: 'item 2 title',
          item_image: {
            alt: 'item 2 image',
            url: 'https://www.example.com/item_2_image.png',
          },
          item_description: {
            html: '<p>item description</p>',
          },
        },
      ],
    }
    const tree = renderer
      .create(<HeadlineThreeColumns input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
