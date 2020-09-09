import React from 'react'
import renderer from 'react-test-renderer'
import { PureFooter as Footer } from './Footer'

/* eslint-disable no-undef */

describe('Footer', () => {
  it('renders correctly', () => {
    const data = {
      minimal_logo: {
        alt: 'logo',
        url: 'https://www.example.com/logo',
      },
      socials: [
        {
          social_link: {
            url: 'https://www.example.com/social_1',
          },
          social_logo: {
            alt: 'social 1 logo',
            url: 'https://www.example.com/logo_1.svg',
          },
        },
        {
          social_link: {
            url: 'https://www.example.com/social_2',
          },
          social_logo: {
            alt: 'social 2 logo',
            url: 'https://www.example.com/logo_2.svg',
          },
        },
      ],
    }
    const tree = renderer
      .create(<Footer data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
