import React from 'react'
import renderer from 'react-test-renderer'
import CompaniesLogos from './CompaniesLogos'

/* eslint-disable no-undef */

describe('CompaniesLogos', () => {
  it('renders correctly', () => {
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
      .create(<CompaniesLogos logos={logos} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
