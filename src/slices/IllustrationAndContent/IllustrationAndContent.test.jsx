import React from 'react'
import renderer from 'react-test-renderer'
import IllustrationAndContent from './IllustrationAndContent'

/* eslint-disable no-undef */

describe('IllustrationAndContent', () => {
  it('renders correctly', () => {
    const data = {
      primary: {
        body_text: {
          html: '<p>body text</p>',
        },
        cta_text: 'cta text',
        headline: {
          html: '<h1>headline</h1>',
        },
        illustration: {
          alt: 'illustration',
          url: 'https://www.example.com/illustration.png',
        },
      },
    }
    const tree = renderer
      .create(<IllustrationAndContent input={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
