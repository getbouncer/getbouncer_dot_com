import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import HeadlineListIllustration from './HeadlineListIllustration'

describe('HeadlineListIllustration', () => {
  it('renders correctly', () => {
    const data = {
      primary: {
        headline: {
          html: '<h1>headline</h1>',
        },
        illustration: {
          alt: 'illustration',
          url: 'https://www.example.com/illustration.png',
        },
      },
      items: [
        {
          item_title: 'item 1 title',
          item_icon: {
            alt: 'item 1 icon',
            url: 'https://www.example.com/item_1_icon.svg',
          },
          item_description: {
            html: '<p>item description</p>',
          },
        },
        {
          item_title: 'item 2 title',
          item_icon: {
            alt: 'item 2 icon',
            url: 'https://www.example.com/item_2_icon.svg',
          },
          item_description: {
            html: '<p>item description</p>',
          },
        },
      ],
    }
    const tree = renderer
      .create(<HeadlineListIllustration input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
