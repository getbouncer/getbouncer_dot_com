import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'jest'
import { PureHomeHero as HomeHero } from './HomeHero'

describe('HomeHero', () => {
  it('renders correctly', () => {
    const data = {
      hero_cta: 'hero cta',
      hero_description: {
        html: '<p>hero description</p>',
      },
      hero_illustration_left: {
        alt: 'hero illustration left',
        url: 'https://www.example.com/hero_illustration_left.png',
      },
      hero_illustration_right: {
        alt: 'hero illustration right',
        url: 'https://www.example.com/hero_illustration_right.png',
      },
      hero_title: {
        html: '<h1>hero title</h1>',
      },
    }
    const logos = {
      companies_logo: [
        {
          company_logo: {
            alt: 'logo 1',
            url: 'https://www.example.com/logo_1.svg',
          },
        },
        {
          company_logo: {
            alt: 'logo 2',
            url: 'https://www.example.com/logo_2.svg',
          },
        },
      ],
    }
    const tree = renderer
      .create(<HomeHero data={data} logos={logos} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
