import React from 'react'
import renderer from 'react-test-renderer'
import { PureSEO as SEO } from './SEO'

/* eslint-disable no-undef */

describe('SEOComponent', () => {
  it('renders correctly', () => {
    const site = {
      siteMetadata: {
        siteUrl: 'https://www.example.com/',
        defaultTitle: 'defaultTitle',
        defaultDescription: 'defaultDescription',
      },
    }
    const tree = renderer
      .create(<SEO site={site} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
