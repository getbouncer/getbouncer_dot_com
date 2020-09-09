import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import { PureGetStarted as GetStarted } from './GetStarted'

describe('GetStarted', () => {
  it('renders correctly', () => {
    const data = {
      background: {
        url: 'www.example.com/background.png',
      },
      cta_text: 'cta text',
      icon: {
        url: 'www.example.com/icon.svg',
        alt: 'icon',
      },
      title: {
        html: 'title',
      },
      text: {
        html: '<p>text</p>',
      },
    }
    const tree = renderer
      .create(<GetStarted data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
